import Link from "next/link";
import { BookOpenText, Search } from "lucide-react";
import { CompactCard } from "@/components/cards";
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
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/60">
            Exploration
          </p>
          <h1 className="font-serif text-5xl text-stone-50">Encyclopedie</h1>
          <p className="mt-4 text-lg leading-8 text-stone-300">
            {totalCount} entrees derivees du corpus{" "}
            <code className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-sm text-amber-200">
              lore/
            </code>
            , organisees en {encyclopaediaCollections.length} collections thematiques.
          </p>
        </div>

        <Link
          href="/recherche"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-stone-400 transition hover:border-white/20 hover:text-stone-200"
        >
          <Search className="size-4" />
          Rechercher
        </Link>
      </div>

      <div className="space-y-12">
        {encyclopaediaCollections.map((collection) => {
          const entries = getCollection(collection);
          if (entries.length === 0) return null;
          const theme = getCollectionTheme(collection);

          return (
            <section
              key={collection}
              className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] p-8"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />

              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-3">
                      <BookOpenText className={`size-4 ${theme.iconColor}`} />
                      <p className={`text-xs uppercase tracking-[0.24em] ${theme.iconColor}`}>
                        {collection}
                      </p>
                    </div>
                    <h2 className="font-serif text-4xl text-stone-50">
                      {getCollectionLabel(collection)}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-400">
                      {getCollectionDescription(collection)}
                    </p>
                  </div>
                  <div className={`shrink-0 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${theme.accentBorder} ${theme.iconColor}`}>
                    {entries.length} entrees
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {entries.map((entry) => (
                    <CompactCard
                      key={entry.slug}
                      entry={entry}
                      href={`/encyclopedie/${collection}/${entry.slug}`}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
