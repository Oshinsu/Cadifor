import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Command, Search, BookOpenText } from "lucide-react";

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
      {/* Epic header */}
      <div className="relative mb-16 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-[var(--gold-faint)] p-10 md:p-14">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--gold)]/[0.03] via-transparent to-transparent" />
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[var(--gold)]/[0.04] blur-[100px]" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/50">
              <BookOpenText className="size-3.5" />
              Exploration du corpus
            </div>
            <h1 className="font-serif text-5xl text-[var(--ivory)] md:text-6xl">Encyclopedie</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-400">
              {totalCount} entrees derivees du corpus canonique, organisees
              en {encyclopaediaCollections.length} collections thematiques.
              Tout le savoir du Haut Royaume, a portee de parchemin.
            </p>
          </div>

          <Link
            href="/recherche"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/[0.06] px-6 py-3 text-sm text-[var(--gold-light)] transition-all duration-300 hover:border-[var(--gold)]/35 hover:bg-[var(--gold)]/[0.1]"
          >
            <Search className="size-4" />
            Rechercher
            <kbd className="hidden items-center gap-0.5 rounded border border-[var(--gold)]/15 bg-[var(--gold)]/[0.06] px-1.5 py-0.5 text-[10px] text-[var(--gold)]/50 lg:inline-flex">
              <Command className="size-2.5" />K
            </kbd>
          </Link>
        </div>
      </div>

      <div className="space-y-20">
        {encyclopaediaCollections.map((collection) => {
          const entries = getCollection(collection);
          if (entries.length === 0) return null;

          const theme = getCollectionTheme(collection);
          return (
            <section key={collection} data-reveal>
              <div className={`relative mb-8 overflow-hidden rounded-2xl border ${theme.accentBorder} bg-white/[0.02] p-7`}>
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${theme.gradient}`} />
                <div className="relative flex items-end justify-between gap-4">
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.3em] ${theme.iconColor}/50`}>
                      {collection}
                    </p>
                    <h2 className="mt-1 font-serif text-4xl text-[var(--ivory)]">
                      {getCollectionLabel(collection)}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-500">
                      {getCollectionDescription(collection)}
                    </p>
                  </div>
                  <Link
                    href={`/encyclopedie/${collection}`}
                    className={`group inline-flex shrink-0 items-center gap-1.5 rounded-full border ${theme.accentBorder} bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.2em] ${theme.iconColor} transition-all duration-300 hover:bg-white/[0.06]`}
                  >
                    {entries.length} entrees
                    <ChevronRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <div className="stagger grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
