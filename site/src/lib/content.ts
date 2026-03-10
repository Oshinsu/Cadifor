import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CollectionKey =
  | "personnages"
  | "scenes"
  | "sections"
  | "factions"
  | "annexes"
  | "meta"
  | "cultures"
  | "duches"
  | "nations"
  | "territoires"
  | "villes"
  | "economie";

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
  directories: string[][];
};

const LORE_ROOT = path.resolve(process.cwd(), "..", "lore");

const COLLECTIONS: CollectionConfig[] = [
  { key: "personnages", directories: [["personnages"]] },
  { key: "scenes", directories: [["meta", "scenes"], ["scenes"]] },
  { key: "sections", directories: [["sections"]] },
  { key: "factions", directories: [["factions"]] },
  { key: "annexes", directories: [["annexes"]] },
  { key: "meta", directories: [["meta"]] },
  { key: "cultures", directories: [["cultures"]] },
  { key: "duches", directories: [["duches"]] },
  { key: "nations", directories: [["nations"]] },
  { key: "territoires", directories: [["territoires"]] },
  { key: "villes", directories: [["villes"]] },
  { key: "economie", directories: [["economie"]] },
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
        !line.startsWith(">") &&
        !line.startsWith("|"),
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

function readDirectory(directoryPath: string, collection: CollectionKey) {
  if (!fs.existsSync(directoryPath)) {
    return [] as LoreEntry[];
  }

  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) =>
      readMarkdownFile(path.join(directoryPath, entry.name), collection),
    );
}

function readCollection(config: CollectionConfig) {
  const seen = new Set<string>();
  const entries: LoreEntry[] = [];

  for (const dir of config.directories) {
    const directoryPath = path.join(LORE_ROOT, ...dir);
    for (const entry of readDirectory(directoryPath, config.key)) {
      if (!seen.has(entry.slug)) {
        seen.add(entry.slug);
        entries.push(entry);
      }
    }
  }

  return entries.sort((a, b) => a.title.localeCompare(b.title, "fr"));
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
    case "cultures":
      return "Cultures";
    case "duches":
      return "Duches";
    case "nations":
      return "Nations";
    case "territoires":
      return "Territoires";
    case "villes":
      return "Villes";
    case "economie":
      return "Economie";
    default:
      return "Corpus";
  }
}

export function getCollectionDescription(collection: CollectionKey) {
  switch (collection) {
    case "personnages":
      return "Souverains, consorts, commandants et figures de seuil de la dynastie Cadifor.";
    case "scenes":
      return "Scenes canoniques du corpus : diners, batailles, duels, bals et moments fondateurs.";
    case "sections":
      return "Systemes transversaux : geopolitique, armee, religion, architecture, heraldique.";
    case "factions":
      return "Nations externes, duchés rivaux, personnages secondaires et ennemis.";
    case "annexes":
      return "Comparaisons, equipements, differences avec le lore officiel, style narratif.";
    case "meta":
      return "Dossiers d'analyse, etats du monde, mecaniques CK2 et notes d'auteur.";
    case "cultures":
      return "Cultures de l'Empire : azerothienne, cadiforienne, lordaeronienne, stormgardienne.";
    case "duches":
      return "Duches et fiefs majeurs du Haut Royaume.";
    case "nations":
      return "Nations du monde d'Azeroth, alliees, neutres ou rivales de l'Empire.";
    case "territoires":
      return "Regions, provinces et territoires sous domination ou influence imperiale.";
    case "villes":
      return "Cites, forteresses et lieux de pouvoir du monde Cadifor.";
    case "economie":
      return "Systemes economiques, routes commerciales et doctrines financieres.";
    default:
      return "Entrees du corpus.";
  }
}

export const encyclopaediaCollections: CollectionKey[] = [
  "personnages",
  "sections",
  "factions",
  "cultures",
  "duches",
  "nations",
  "territoires",
  "villes",
  "economie",
  "annexes",
  "meta",
];

export function getTotalEntryCount() {
  return encyclopaediaCollections
    .map((collection) => getCollection(collection).length)
    .reduce((total, count) => total + count, 0);
}
