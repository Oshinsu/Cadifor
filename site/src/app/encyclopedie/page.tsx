import Link from "next/link";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionLabel,
} from "@/lib/content";

export default function EncyclopediePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
          Exploration
        </p>
        <h1 className="font-serif text-5xl text-stone-50">Encyclopedie</h1>
        <p className="mt-4 text-lg leading-8 text-stone-300">
          Chaque collection est derivee directement du dossier `lore/`, puis
          exposee comme surface de consultation stable.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {encyclopaediaCollections.map((collection) => {
          const entries = getCollection(collection);

          return (
            <section
              key={collection}
              className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                {collection}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-stone-50">
                {getCollectionLabel(collection)}
              </h2>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                {entries.length} entrees publiees.
              </p>
              <div className="mt-6 space-y-3">
                {entries.slice(0, 5).map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/encyclopedie/${collection}/${entry.slug}`}
                    className="block rounded-2xl border border-white/8 px-4 py-3 text-sm text-stone-300 transition hover:border-amber-300/25 hover:text-stone-100"
                  >
                    {entry.title}
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
