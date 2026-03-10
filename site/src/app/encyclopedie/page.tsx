import Link from "next/link";
import { BookOpenText } from "lucide-react";
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
      <div className="mb-12 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
          Exploration
        </p>
        <h1 className="font-serif text-5xl text-stone-50">Encyclopedie</h1>
        <p className="mt-4 text-lg leading-8 text-stone-300">
          {totalCount} entrees derivees depuis le dossier <code className="text-amber-200">lore/</code>,
          organisees en {encyclopaediaCollections.length} collections thematiques.
        </p>
      </div>

      <div className="space-y-10">
        {encyclopaediaCollections.map((collection) => {
          const entries = getCollection(collection);

          if (entries.length === 0) return null;

          return (
            <section
              key={collection}
              className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <BookOpenText className="size-4 text-amber-300" />
                    <p className="text-xs uppercase tracking-[0.24em] text-amber-200">
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
                <div className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                  {entries.length} entrees
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {entries.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/encyclopedie/${collection}/${entry.slug}`}
                    className="group rounded-2xl border border-white/6 bg-white/[0.02] px-5 py-4 transition hover:border-amber-300/25 hover:bg-white/[0.04]"
                  >
                    <h3 className="font-serif text-lg text-stone-200 transition group-hover:text-amber-200">
                      {entry.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-stone-500">
                      {entry.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
