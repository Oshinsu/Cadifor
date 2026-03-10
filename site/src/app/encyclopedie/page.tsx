import Link from "next/link";
import { Search } from "lucide-react";
import { EntryCard } from "@/components/cards";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionDescription,
  getCollectionLabel,
  getTotalEntryCount,
} from "@/lib/content";

export default function EncyclopediePage() {
  const totalCount = getTotalEntryCount();

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
            Exploration
          </p>
          <h1 className="font-serif text-5xl text-[var(--ivory)]">Encyclopedie</h1>
          <p className="mt-4 text-lg leading-8 text-stone-400">
            {totalCount} entrees derivees du corpus, organisees
            en {encyclopaediaCollections.length} collections thematiques.
          </p>
        </div>

        <Link
          href="/recherche"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--gold)]/15 bg-[var(--gold)]/[0.04] px-5 py-2.5 text-sm text-[var(--gold-light)] transition-all duration-300 hover:border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.08]"
        >
          <Search className="size-4" />
          Rechercher
        </Link>
      </div>

      <div className="space-y-16">
        {encyclopaediaCollections.map((collection) => {
          const entries = getCollection(collection);
          if (entries.length === 0) return null;

          return (
            <section key={collection}>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
                    {collection}
                  </p>
                  <h2 className="font-serif text-4xl text-[var(--ivory)]">
                    {getCollectionLabel(collection)}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-500">
                    {getCollectionDescription(collection)}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--gold)]/15 bg-[var(--gold)]/[0.06] px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
                  {entries.length} entrees
                </span>
              </div>

              <div className="divider-fade mb-6" />

              <div className="stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {entries.map((entry) => (
                  <EntryCard
                    key={entry.slug}
                    entry={entry}
                    href={`/encyclopedie/${collection}/${entry.slug}`}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
