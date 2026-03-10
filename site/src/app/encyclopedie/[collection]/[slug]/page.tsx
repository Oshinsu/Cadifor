import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, FileText } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { FactionBadge } from "@/components/faction-badge";
import { getTierColor } from "@/lib/colors";
import { getCollectionTheme } from "@/lib/colors";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionLabel,
  getEntry,
  type CollectionKey,
} from "@/lib/content";

type EntryPageProps = {
  params: Promise<{ collection: CollectionKey; slug: string }>;
};

export async function generateStaticParams() {
  return encyclopaediaCollections.flatMap((collection) =>
    getCollection(collection).map((entry) => ({
      collection,
      slug: entry.slug,
    })),
  );
}

export default async function EntryPage({ params }: EntryPageProps) {
  const { collection, slug } = await params;

  if (!encyclopaediaCollections.includes(collection)) {
    notFound();
  }

  const entry = getEntry(collection, slug);

  if (!entry) {
    notFound();
  }

  const theme = getCollectionTheme(collection);
  const allInCollection = getCollection(collection);
  const currentIndex = allInCollection.findIndex((e) => e.slug === slug);
  const prevEntry = currentIndex > 0 ? allInCollection[currentIndex - 1] : null;
  const nextEntry = currentIndex < allInCollection.length - 1 ? allInCollection[currentIndex + 1] : null;

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-8">
      {/* ─── Breadcrumbs ─────────────────────────────────────── */}
      <nav className="mb-6 flex items-center gap-2 text-xs text-stone-500">
        <Link href="/encyclopedie" className="transition hover:text-stone-300">
          Encyclopedie
        </Link>
        <span>/</span>
        <Link
          href="/encyclopedie"
          className={`transition hover:text-stone-300 ${theme.iconColor}`}
        >
          {getCollectionLabel(collection)}
        </Link>
        <span>/</span>
        <span className="text-stone-400">{entry.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        {/* ─── Main content ────────────────────────────────────── */}
        <div>
          {/* Header */}
          <div className="mb-10 rounded-[2rem] border border-white/8 bg-white/[0.03] p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className={`text-xs uppercase tracking-[0.24em] ${theme.iconColor}`}>
                {getCollectionLabel(collection)}
              </span>
              {entry.faction !== "imperial" && (
                <FactionBadge faction={entry.faction} size="sm" />
              )}
              {entry.tier && (
                <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${getTierColor(entry.tier)}`}>
                  Tier {entry.tier}
                </span>
              )}
            </div>

            <h1 className="font-serif text-5xl leading-tight text-stone-50">
              {entry.title}
            </h1>

            {entry.epithet && (
              <p className="mt-2 text-lg italic text-stone-400">{entry.epithet}</p>
            )}

            {entry.dates && (
              <p className="mt-3 text-sm text-stone-500">{entry.dates}</p>
            )}

            <div className="mt-6 flex items-center gap-6 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <Clock className="size-3" />
                {entry.readingTime} min de lecture
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="size-3" />
                {entry.wordCount.toLocaleString("fr")} mots
              </span>
              <span className="text-stone-600">{entry.sourcePath}</span>
            </div>
          </div>

          {/* Body */}
          <Markdown content={entry.body} />

          {/* ─── Prev / Next navigation ──────────────────────────── */}
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {prevEntry ? (
              <Link
                href={`/encyclopedie/${collection}/${prevEntry.slug}`}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-white/15"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
                  Precedent
                </span>
                <p className="mt-1 font-serif text-lg text-stone-200 transition group-hover:text-amber-200">
                  {prevEntry.title}
                </p>
              </Link>
            ) : <div />}
            {nextEntry ? (
              <Link
                href={`/encyclopedie/${collection}/${nextEntry.slug}`}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-right transition hover:border-white/15"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
                  Suivant
                </span>
                <p className="mt-1 font-serif text-lg text-stone-200 transition group-hover:text-amber-200">
                  {nextEntry.title}
                </p>
              </Link>
            ) : null}
          </div>
        </div>

        {/* ─── Sidebar ─────────────────────────────────────────── */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Link
            href="/encyclopedie"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 transition hover:text-stone-300"
          >
            <ArrowLeft className="size-3" />
            Retour
          </Link>

          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-stone-600">
              Dans cette collection
            </p>
            <div className="space-y-1">
              {allInCollection.slice(0, 15).map((e) => (
                <Link
                  key={e.slug}
                  href={`/encyclopedie/${collection}/${e.slug}`}
                  className={`block truncate rounded-lg px-3 py-1.5 text-xs transition ${
                    e.slug === slug
                      ? "bg-white/10 text-stone-100"
                      : "text-stone-500 hover:bg-white/5 hover:text-stone-300"
                  }`}
                >
                  {e.title}
                </Link>
              ))}
              {allInCollection.length > 15 && (
                <p className="px-3 py-1 text-[10px] text-stone-600">
                  +{allInCollection.length - 15} autres
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
