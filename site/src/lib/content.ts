import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CollectionKey =
  | "personnages"
  | "scenes"
  | "sections"
  | "factions"
  | "annexes"
  | "meta";

export type LoreEntry = {
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  collection: CollectionKey;
  sourcePath: string;
};

type CollectionConfig = {
  key: CollectionKey;
  directory: string[];
};

const LORE_ROOT = path.resolve(process.cwd(), "..", "lore");

const COLLECTIONS: CollectionConfig[] = [
  { key: "personnages", directory: ["personnages"] },
  { key: "scenes", directory: ["meta", "scenes"] },
  { key: "sections", directory: ["sections"] },
  { key: "factions", directory: ["factions"] },
  { key: "annexes", directory: ["annexes"] },
  { key: "meta", directory: ["meta"] },
];

function toTitleFromSlug(slug: string) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function extractTitle(content: string, fallback: string) {
  const line = content
    .split("\n")
    .find((currentLine) => currentLine.trim().startsWith("# "));

  if (!line) {
    return toTitleFromSlug(fallback);
  }

  return line.replace(/^#\s+/, "").trim();
}

function extractExcerpt(content: string) {
  const cleanedLines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(
      (line) =>
        line.length > 0 &&
        !line.startsWith("#") &&
        line !== "---" &&
        !line.startsWith(">"),
    );

  return cleanedLines.slice(0, 3).join(" ").slice(0, 260);
}

function readMarkdownFile(filePath: string, collection: CollectionKey): LoreEntry {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const slug = path.basename(filePath, ".md");
  const title = extractTitle(parsed.content, slug);

  return {
    slug,
    title,
    body: parsed.content.trim(),
    excerpt: extractExcerpt(parsed.content),
    collection,
    sourcePath: path.relative(LORE_ROOT, filePath),
  };
}

function readCollection(config: CollectionConfig) {
  const directoryPath = path.join(LORE_ROOT, ...config.directory);

  if (!fs.existsSync(directoryPath)) {
    return [] as LoreEntry[];
  }

  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) =>
      readMarkdownFile(path.join(directoryPath, entry.name), config.key),
    )
    .sort((a, b) => a.title.localeCompare(b.title, "fr"));
}

export function getCollection(collection: CollectionKey) {
  const config = COLLECTIONS.find((item) => item.key === collection);

  if (!config) {
    return [] as LoreEntry[];
  }

  return readCollection(config);
}

export function getEntry(collection: CollectionKey, slug: string) {
  return getCollection(collection).find((entry) => entry.slug === slug) ?? null;
}

export function getFeaturedScene() {
  return getEntry("scenes", "diner_imperial") ?? getCollection("scenes")[0] ?? null;
}

export function getTopCharacters(limit = 4) {
  return getCollection("personnages").slice(0, limit);
}

export function getSceneCandidates(limit = 4) {
  return getCollection("scenes").slice(0, limit);
}

export function getChronologyDocument() {
  const filePath = path.join(LORE_ROOT, "CHRONOLOGIE.md");

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readMarkdownFile(filePath, "meta");
}

export function getPdfProgressDocument() {
  const filePath = path.join(LORE_ROOT, "meta", "pdf_analysis_progress.md");

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readMarkdownFile(filePath, "meta");
}

export function getNotationDocument() {
  const filePath = path.join(LORE_ROOT, "meta", "scenes", "notation_scenes.md");

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readMarkdownFile(filePath, "meta");
}

export function getSiteDocuments() {
  const contentGraphPath = path.join(process.cwd(), "CONTENT_GRAPH.md");
  const researchPath = path.join(process.cwd(), "RESEARCH_STACK_2026.md");

  const docs = [contentGraphPath, researchPath]
    .filter((filePath) => fs.existsSync(filePath))
    .map((filePath) => readMarkdownFile(filePath, "meta"));

  return docs;
}

export function getCollectionLabel(collection: CollectionKey) {
  switch (collection) {
    case "personnages":
      return "Personnages";
    case "scenes":
      return "Scenes";
    case "sections":
      return "Sections";
    case "factions":
      return "Factions";
    case "annexes":
      return "Annexes";
    case "meta":
      return "Meta";
    default:
      return "Corpus";
  }
}

export const encyclopaediaCollections: CollectionKey[] = [
  "personnages",
  "sections",
  "factions",
  "annexes",
  "meta",
];
