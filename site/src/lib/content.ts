import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { resolveFaction, type FactionKey, type CharacterTier } from "./colors";

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
  /** Estimated reading time in minutes */
  readingTime: number;
  /** Word count of the body */
  wordCount: number;
  /** Faction key for theming */
  faction: FactionKey;
  /** Optional epithet extracted from the title or body */
  epithet: string | null;
  /** Character tier if applicable */
  tier: CharacterTier | null;
  /** Reign or active dates if applicable */
  dates: string | null;
};

type CollectionConfig = {
  key: CollectionKey;
  directories: string[][];
};

const LORE_ROOT = path.resolve(process.cwd(), "..", "lore");

/** Slugs to exclude from collections (index/navigation files, not real entries) */
const EXCLUDED_SLUGS = new Set([
  "00_INDEX",
  "00_index",
  "INDEX",
  "README",
  "readme",
]);

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

// ─── Text helpers ─────────────────────────────────────────────────

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

function computeReadingTime(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function computeWordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

// ─── Epithet extraction ──────────────────────────────────────────

function extractEpithet(title: string, _body: string): string | null {
  // Check for common title patterns like "Andrea la Rougissante"
  const titleMatch = title.match(
    /(?:l[ae']\s*)([\wÀ-ÿ]+(?:\s+[\wÀ-ÿ]+)?)\s*$/i,
  );
  if (titleMatch) return titleMatch[0].trim();

  return null;
}

// ─── Tier extraction ─────────────────────────────────────────────

function extractTier(body: string): CharacterTier | null {
  // Look for tier patterns like "Tier: SS", "Rang: S+", "Classement: A"
  const tierMatch = body.match(
    /(?:tier|rang|classement)\s*[:=]\s*\*{0,2}(SS|S\+\+|S\+|S|A|B|C)\*{0,2}/i,
  );
  if (tierMatch) return tierMatch[1] as CharacterTier;

  // Check for tier mentions in text
  if (/\btier\s+SS\b/i.test(body)) return "SS";
  if (/\btier\s+S\+\+/i.test(body)) return "S++";
  if (/\btier\s+S\+/i.test(body)) return "S+";
  if (/\brang\s+S\b/i.test(body)) return "S";

  return null;
}

// ─── Date extraction ─────────────────────────────────────────────

function extractDates(body: string): string | null {
  // Look for reign patterns
  const reignMatch = body.match(
    /(?:r[èe]gne|duree de r[ée]gime|couronne)\s*[:=]\s*([^\n]+)/i,
  );
  if (reignMatch) return reignMatch[1].trim().slice(0, 60);

  // Look for date ranges
  const rangeMatch = body.match(/(\d{3,4})\s*[-–—]\s*(\d{3,4}\+?)/);
  if (rangeMatch) return `${rangeMatch[1]}–${rangeMatch[2]}`;

  return null;
}

// ─── File reading ────────────────────────────────────────────────

function readMarkdownFile(filePath: string, collection: CollectionKey): LoreEntry {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const slug = path.basename(filePath, ".md");
  const title = extractTitle(parsed.content, slug);
  const body = parsed.content.trim();

  return {
    slug,
    title,
    body,
    excerpt: extractExcerpt(body),
    collection,
    sourcePath: path.relative(LORE_ROOT, filePath),
    readingTime: computeReadingTime(body),
    wordCount: computeWordCount(body),
    faction: resolveFaction(slug, collection),
    epithet: collection === "personnages" ? extractEpithet(title, body) : null,
    tier: collection === "personnages" ? extractTier(body) : null,
    dates: collection === "personnages" ? extractDates(body) : null,
  };
}

function readDirectory(directoryPath: string, collection: CollectionKey) {
  if (!fs.existsSync(directoryPath)) {
    return [] as LoreEntry[];
  }

  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && !EXCLUDED_SLUGS.has(path.basename(entry.name, ".md")))
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

// ─── Public API ──────────────────────────────────────────────────

export function getCollection(collection: CollectionKey) {
  const config = COLLECTIONS.find((item) => item.key === collection);
  if (!config) return [] as LoreEntry[];
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
  if (!fs.existsSync(filePath)) return null;
  return readMarkdownFile(filePath, "meta");
}

export function getPdfProgressDocument() {
  const filePath = path.join(LORE_ROOT, "meta", "pdf_analysis_progress.md");
  if (!fs.existsSync(filePath)) return null;
  return readMarkdownFile(filePath, "meta");
}

export function getNotationDocument() {
  const filePath = path.join(LORE_ROOT, "meta", "scenes", "notation_scenes.md");
  if (!fs.existsSync(filePath)) return null;
  return readMarkdownFile(filePath, "meta");
}

export function getSiteDocuments() {
  const contentGraphPath = path.join(process.cwd(), "CONTENT_GRAPH.md");
  const researchPath = path.join(process.cwd(), "RESEARCH_STACK_2026.md");

  return [contentGraphPath, researchPath]
    .filter((filePath) => fs.existsSync(filePath))
    .map((filePath) => readMarkdownFile(filePath, "meta"));
}

export function getCollectionLabel(collection: CollectionKey) {
  const labels: Record<CollectionKey, string> = {
    personnages: "Personnages",
    scenes: "Scenes",
    sections: "Sections",
    factions: "Factions",
    annexes: "Annexes",
    meta: "Meta",
    cultures: "Cultures",
    duches: "Duches",
    nations: "Nations",
    territoires: "Territoires",
    villes: "Villes",
    economie: "Economie",
  };
  return labels[collection] ?? "Corpus";
}

export function getCollectionDescription(collection: CollectionKey) {
  const desc: Record<CollectionKey, string> = {
    personnages: "Souverains, consorts, commandants et figures de seuil de la dynastie Cadifor.",
    scenes: "Scenes canoniques du corpus : diners, batailles, duels, bals et moments fondateurs.",
    sections: "Systemes transversaux : geopolitique, armee, religion, architecture, heraldique.",
    factions: "Nations externes, duches rivaux, personnages secondaires et ennemis.",
    annexes: "Comparaisons, equipements, differences avec le lore officiel, style narratif.",
    meta: "Dossiers d'analyse, etats du monde, mecaniques CK2 et notes d'auteur.",
    cultures: "Cultures de l'Empire : azerothienne, cadiforienne, lordaeronienne, stormgardienne.",
    duches: "Duches et fiefs majeurs du Haut Royaume.",
    nations: "Nations du monde d'Azeroth, alliees, neutres ou rivales de l'Empire.",
    territoires: "Regions, provinces et territoires sous domination ou influence imperiale.",
    villes: "Cites, forteresses et lieux de pouvoir du monde Cadifor.",
    economie: "Systemes economiques, routes commerciales et doctrines financieres.",
  };
  return desc[collection] ?? "Entrees du corpus.";
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

/**
 * Find entries from other collections that are mentioned in the given entry's body.
 * Returns up to `limit` related entries sorted by mention frequency.
 */
export function getRelatedEntries(entry: LoreEntry, limit = 6): LoreEntry[] {
  const bodyLower = entry.body.toLowerCase();
  const candidates: { entry: LoreEntry; score: number }[] = [];

  for (const collection of encyclopaediaCollections) {
    for (const candidate of getCollection(collection)) {
      // Skip self
      if (candidate.slug === entry.slug && candidate.collection === entry.collection) continue;

      // Skip very short titles that cause false positives
      if (candidate.title.length < 4) continue;

      const titleLower = candidate.title.toLowerCase();
      // Count mentions of this entry's title in the body
      let count = 0;
      let pos = 0;
      while ((pos = bodyLower.indexOf(titleLower, pos)) !== -1) {
        count++;
        pos += titleLower.length;
      }

      if (count > 0) {
        candidates.push({ entry: candidate, score: count });
      }
    }
  }

  // Sort by frequency, deduplicate by slug
  candidates.sort((a, b) => b.score - a.score);
  const seen = new Set<string>();
  const result: LoreEntry[] = [];
  for (const c of candidates) {
    const key = `${c.entry.collection}/${c.entry.slug}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(c.entry);
      if (result.length >= limit) break;
    }
  }
  return result;
}

export function getCollectionIcon(collection: CollectionKey): string {
  const icons: Record<CollectionKey, string> = {
    personnages: "crown",
    scenes: "scroll-text",
    sections: "book-open-text",
    factions: "swords",
    nations: "globe",
    villes: "map-pin",
    territoires: "map",
    cultures: "palette",
    duches: "shield",
    economie: "coins",
    annexes: "file-text",
    meta: "database",
  };
  return icons[collection] ?? "file";
}
