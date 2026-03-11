import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Command, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Encyclopedie",
  description: "Toutes les entrees de l'encyclopedie du Haut Royaume de Cadifor — personnages, factions, nations, villes, territoires et plus.",
};
import { EntryCard } from "@/components/cards";
import { getCollectionTheme } from "@/lib/colors";
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
          <kbd className="hidden items-center gap-0.5 rounded border border-[var(--gold)]/15 bg-[var(--gold)]/[0.06] px-1.5 py-0.5 text-[10px] text-[var(--gold)]/60 lg:inline-flex">
            <Command className="size-2.5" />K
          </kbd>
        </Link>
      </div>

      <div className="space-y-16">
        {encyclopaediaCollections.map((collection) => {
          const entries = getCollection(collection);
          if (entries.length === 0) return null;

          const theme = getCollectionTheme(collection);
          return (
            <section key={collection} data-reveal>
              <div className={`relative mb-6 overflow-hidden rounded-2xl border ${theme.accentBorder} bg-white/[0.02] p-6`}>
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${theme.gradient}`} />
                <div className="relative flex items-end justify-between gap-4">
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.25em] ${theme.iconColor}/60`}>
                      {collection}
                    </p>
                    <h2 className="font-serif text-4xl text-[var(--ivory)]">
                      {getCollectionLabel(collection)}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-500">
                      {getCollectionDescription(collection)}
                    </p>
                  </div>
                  <Link
                    href={`/encyclopedie/${collection}`}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border ${theme.accentBorder} bg-white/[0.03] px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] ${theme.iconColor} transition-all duration-300 hover:bg-white/[0.06]`}
                  >
                    {entries.length} entrees
                    <ChevronRight className="size-3" />
                  </Link>
                </div>
              </div>

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
