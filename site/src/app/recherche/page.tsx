import { SearchView } from "@/components/search";
import {
  encyclopaediaCollections,
  getCollection,
  type CollectionKey,
} from "@/lib/content";
import type { FactionKey } from "@/lib/colors";

type SearchEntry = {
  slug: string;
  title: string;
  excerpt: string;
  collection: CollectionKey;
  faction: FactionKey;
  readingTime: number;
};

function buildSearchIndex(): SearchEntry[] {
  const allCollections: CollectionKey[] = ["scenes", ...encyclopaediaCollections];
  const entries: SearchEntry[] = [];
  const seen = new Set<string>();

  for (const collection of allCollections) {
    for (const entry of getCollection(collection)) {
      const key = `${collection}/${entry.slug}`;
      if (!seen.has(key)) {
        seen.add(key);
        entries.push({
          slug: entry.slug,
          title: entry.title,
          excerpt: entry.excerpt,
          collection,
          faction: entry.faction,
          readingTime: entry.readingTime,
        });
      }
    }
  }

  return entries;
}

export default function RecherchePage() {
  const index = buildSearchIndex();

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/60">
          Corpus
        </p>
        <h1 className="font-serif text-5xl text-stone-50">Recherche</h1>
        <p className="mt-4 text-lg leading-8 text-stone-300">
          Rechercher dans les {index.length} entrees du corpus Cadifor.
        </p>
      </div>

      <SearchView entries={index} />
    </main>
  );
}
