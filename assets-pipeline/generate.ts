#!/usr/bin/env tsx
/**
 * NanoBanana Pro Image Generation Pipeline
 * Generates assets via OpenRouter → google/gemini-3-pro-image-preview
 *
 * Usage:
 *   tsx generate.ts                    # Generate all pending images
 *   tsx generate.ts --phase 0          # Generate only Phase 0
 *   tsx generate.ts --id portrait_rose  # Generate a single image by ID
 *   tsx generate.ts --dry-run          # Show what would be generated
 */

import fs from "node:fs";
import path from "node:path";
import { ALL_PROMPTS, getPromptsByPhase, getPromptById, type ImagePrompt } from "./prompts.ts";

// ─── CONFIG ─────────────────────────────────────────────────────────────────

// Loaded lazily after .env is parsed in main()
let OPENROUTER_API_KEY: string | undefined;
const MODEL = "google/gemini-3-pro-image-preview"; // Nano Banana Pro via OpenRouter
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const SITE_ASSETS_DIR = path.resolve(import.meta.dirname, "../site/public/assets");
const MANIFEST_PATH = path.resolve(import.meta.dirname, "manifest.json");

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;

// ─── TYPES ──────────────────────────────────────────────────────────────────

type ManifestEntry = {
  id: string;
  phase: number;
  prompt: string;
  refs: string[];
  outputPath: string;
  generatedAt: string;
  model: string;
  attempt: number;
};

type Manifest = {
  version: number;
  generated: ManifestEntry[];
  pending: string[];
};

// ─── MANIFEST ───────────────────────────────────────────────────────────────

function loadManifest(): Manifest {
  if (fs.existsSync(MANIFEST_PATH)) {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  }
  return { version: 1, generated: [], pending: [] };
}

function saveManifest(manifest: Manifest) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function isGenerated(manifest: Manifest, id: string): boolean {
  return manifest.generated.some((e) => e.id === id);
}

function getOutputPath(prompt: ImagePrompt): string {
  return path.join(SITE_ASSETS_DIR, prompt.outputDir, `${prompt.id}.png`);
}

// ─── IMAGE REFERENCE LOADING ────────────────────────────────────────────────

function loadImageAsBase64(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  const buffer = fs.readFileSync(filePath);
  return buffer.toString("base64");
}

function getRefImagePaths(prompt: ImagePrompt, manifest: Manifest): string[] {
  return prompt.refs
    .map((refId) => {
      const refEntry = manifest.generated.find((e) => e.id === refId);
      if (refEntry) return refEntry.outputPath;
      // Try to find the prompt definition to get the output path
      const refPrompt = getPromptById(refId);
      if (refPrompt) return getOutputPath(refPrompt);
      return null;
    })
    .filter((p): p is string => p !== null);
}

// ─── API CALL ───────────────────────────────────────────────────────────────

async function callNBPro(
  prompt: ImagePrompt,
  refImagePaths: string[]
): Promise<Buffer | null> {
  if (!OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY not set. Create a .env file or export it.");
  }

  // Build message content with reference images
  const content: Array<{ type: string; text?: string; image_url?: { url: string } }> = [];

  // Add reference images
  for (const refPath of refImagePaths) {
    const base64 = loadImageAsBase64(refPath);
    if (base64) {
      content.push({
        type: "image_url",
        image_url: {
          url: `data:image/png;base64,${base64}`,
        },
      });
    }
  }

  // Add the prompt text
  content.push({
    type: "text",
    text: `Generate this image:\n\n${prompt.prompt}\n\nGenerate a single high-quality image matching this description exactly. Output only the image.`,
  });

  const body = {
    model: MODEL,
    messages: [
      {
        role: "user",
        content,
      },
    ],
    max_tokens: 4096,
    // NB Pro specific settings
    provider: {
      order: ["Google"],
    },
  };

  const response = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://cadifor.netlify.app",
      "X-Title": "Cadifor Asset Pipeline",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter API error ${response.status}: ${errorText}`);
  }

  const data = await response.json() as {
    choices?: Array<{
      message?: {
        content?: string | Array<{ type: string; image_url?: { url: string }; text?: string }>;
      };
    }>;
    error?: { message: string };
  };

  if (data.error) {
    throw new Error(`API error: ${data.error.message}`);
  }

  // Extract image from response
  const choice = data.choices?.[0];
  if (!choice?.message?.content) {
    throw new Error("No content in response");
  }

  const msgContent = choice.message.content;

  // Handle multimodal response (array of content parts)
  if (Array.isArray(msgContent)) {
    for (const part of msgContent) {
      if (part.type === "image_url" && part.image_url?.url) {
        const base64Match = part.image_url.url.match(/^data:image\/\w+;base64,(.+)$/);
        if (base64Match) {
          return Buffer.from(base64Match[1], "base64");
        }
      }
    }
  }

  // Handle inline base64 in text response
  if (typeof msgContent === "string") {
    const base64Match = msgContent.match(/data:image\/\w+;base64,([A-Za-z0-9+/=]+)/);
    if (base64Match) {
      return Buffer.from(base64Match[1], "base64");
    }
    // Check if the entire response is base64
    if (/^[A-Za-z0-9+/=]{100,}$/.test(msgContent.trim())) {
      return Buffer.from(msgContent.trim(), "base64");
    }
  }

  console.error("Response content:", JSON.stringify(msgContent).slice(0, 500));
  throw new Error("Could not extract image from response");
}

// ─── GENERATION LOGIC ───────────────────────────────────────────────────────

async function generateSingle(
  prompt: ImagePrompt,
  manifest: Manifest,
  dryRun: boolean
): Promise<boolean> {
  const outputPath = getOutputPath(prompt);

  // Check if already generated
  if (isGenerated(manifest, prompt.id) && fs.existsSync(outputPath)) {
    console.log(`  ✓ ${prompt.id} — already generated`);
    return true;
  }

  // Check dependencies
  for (const refId of prompt.refs) {
    if (!isGenerated(manifest, refId)) {
      const refPrompt = getPromptById(refId);
      if (refPrompt && !fs.existsSync(getOutputPath(refPrompt))) {
        console.log(`  ⏳ ${prompt.id} — waiting for dependency: ${refId}`);
        return false;
      }
    }
  }

  if (dryRun) {
    console.log(`  → ${prompt.id} — would generate (${prompt.refs.length} refs)`);
    return true;
  }

  // Get reference image paths
  const refPaths = getRefImagePaths(prompt, manifest);
  const availableRefs = refPaths.filter((p) => fs.existsSync(p));

  console.log(`  ⚡ ${prompt.id} — generating (${availableRefs.length}/${prompt.refs.length} refs available)...`);

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  fs.mkdirSync(outputDir, { recursive: true });

  // Retry loop
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const imageBuffer = await callNBPro(prompt, availableRefs);
      if (!imageBuffer) {
        throw new Error("No image data returned");
      }

      // Save image
      fs.writeFileSync(outputPath, imageBuffer);

      // Update manifest
      manifest.generated.push({
        id: prompt.id,
        phase: prompt.phase,
        prompt: prompt.prompt.slice(0, 200) + "...",
        refs: prompt.refs,
        outputPath,
        generatedAt: new Date().toISOString(),
        model: MODEL,
        attempt,
      });
      saveManifest(manifest);

      const sizeKB = Math.round(imageBuffer.length / 1024);
      console.log(`  ✅ ${prompt.id} — saved (${sizeKB}KB, attempt ${attempt})`);
      return true;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`  ❌ ${prompt.id} — attempt ${attempt}/${MAX_RETRIES}: ${msg}`);

      if (attempt < MAX_RETRIES) {
        const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);
        console.log(`  ⏱  Retrying in ${delay / 1000}s...`);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }

  console.error(`  💀 ${prompt.id} — FAILED after ${MAX_RETRIES} attempts`);
  return false;
}

async function generatePhase(phase: number, manifest: Manifest, dryRun: boolean) {
  const prompts = getPromptsByPhase(phase);
  console.log(`\n═══ PHASE ${phase} — ${prompts.length} images ═══\n`);

  let success = 0;
  let failed = 0;
  let skipped = 0;

  for (const prompt of prompts) {
    const result = await generateSingle(prompt, manifest, dryRun);
    if (result) {
      if (isGenerated(manifest, prompt.id)) success++;
      else skipped++;
    } else {
      failed++;
    }
  }

  console.log(`\n  Phase ${phase}: ${success} ok, ${failed} failed, ${skipped} skipped\n`);
  return { success, failed, skipped };
}

// ─── CLI ────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const phaseIdx = args.indexOf("--phase");
  const idIdx = args.indexOf("--id");

  // Load .env if present
  const envPath = path.resolve(import.meta.dirname, ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\n")) {
      const match = line.match(/^([^#=]+)=(.+)$/);
      if (match) {
        process.env[match[1].trim()] = match[2].trim();
      }
    }
  }

  OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
  if (!OPENROUTER_API_KEY && !dryRun) {
    console.error("❌ OPENROUTER_API_KEY not set.");
    console.error("   Create assets-pipeline/.env with: OPENROUTER_API_KEY=sk-or-v1-...");
    process.exit(1);
  }

  const manifest = loadManifest();

  console.log("╔══════════════════════════════════════════════╗");
  console.log("║  CADIFOR ASSET PIPELINE — NanoBanana Pro     ║");
  console.log("╚══════════════════════════════════════════════╝");
  console.log(`  Model: ${MODEL}`);
  console.log(`  Total prompts: ${ALL_PROMPTS.length}`);
  console.log(`  Already generated: ${manifest.generated.length}`);
  console.log(`  Dry run: ${dryRun}`);

  if (idIdx !== -1 && args[idIdx + 1]) {
    // Single image generation
    const id = args[idIdx + 1];
    const prompt = getPromptById(id);
    if (!prompt) {
      console.error(`❌ Unknown prompt ID: ${id}`);
      console.error(`   Available IDs: ${ALL_PROMPTS.map((p) => p.id).join(", ")}`);
      process.exit(1);
    }
    await generateSingle(prompt, manifest, dryRun);
  } else if (phaseIdx !== -1 && args[phaseIdx + 1]) {
    // Single phase generation
    const phase = parseInt(args[phaseIdx + 1]);
    await generatePhase(phase, manifest, dryRun);
  } else {
    // Full pipeline
    for (const phase of [0, 1, 2, 3, 4]) {
      await generatePhase(phase, manifest, dryRun);
    }
  }

  console.log("\n✨ Done.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
