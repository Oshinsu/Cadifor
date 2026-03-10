#!/usr/bin/env tsx
/**
 * Pipeline status report — shows what's generated, pending, and missing.
 */

import fs from "node:fs";
import path from "node:path";
import { ALL_PROMPTS, getPromptsByPhase } from "./prompts.ts";

const MANIFEST_PATH = path.resolve(import.meta.dirname, "manifest.json");
const SITE_ASSETS_DIR = path.resolve(import.meta.dirname, "../site/public/assets");

type Manifest = {
  version: number;
  generated: Array<{ id: string; phase: number; outputPath: string; generatedAt: string }>;
};

function loadManifest(): Manifest {
  if (fs.existsSync(MANIFEST_PATH)) {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  }
  return { version: 1, generated: [] };
}

const manifest = loadManifest();
const generatedIds = new Set(manifest.generated.map((e) => e.id));

console.log("╔══════════════════════════════════════════════╗");
console.log("║  CADIFOR ASSET PIPELINE — Status Report      ║");
console.log("╚══════════════════════════════════════════════╝\n");

for (const phase of [0, 1, 2, 3, 4]) {
  const prompts = getPromptsByPhase(phase);
  const done = prompts.filter((p) => generatedIds.has(p.id));
  const pending = prompts.filter((p) => !generatedIds.has(p.id));

  console.log(`Phase ${phase}: ${done.length}/${prompts.length} generated`);

  for (const p of prompts) {
    const outputPath = path.join(SITE_ASSETS_DIR, p.outputDir, `${p.id}.png`);
    const exists = fs.existsSync(outputPath);
    const inManifest = generatedIds.has(p.id);
    const status = inManifest && exists ? "✅" : exists ? "⚠️  file only" : inManifest ? "⚠️  manifest only" : "⬜";
    console.log(`  ${status} ${p.id} (${p.refs.length} refs)`);
  }
  console.log();
}

const totalDone = manifest.generated.length;
const totalTotal = ALL_PROMPTS.length;
console.log(`Total: ${totalDone}/${totalTotal} (${Math.round((totalDone / totalTotal) * 100)}%)`);
