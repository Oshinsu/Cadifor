import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, FileText } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ReadingProgress } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { extractTocFromMarkdown } from "@/lib/toc";
import { FactionBadge } from "@/components/faction-badge";
import { getTierColor } from "@/lib/colors";
import { resolveEntryImage, resolveCharacterGallery, resolveLocationGallery } from "@/lib/images";
import { GalleryGrid } from "@/components/lightbox";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionLabel,
  getEntry,
  getRelatedEntries,
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

export async function generateMetadata({ params }: EntryPageProps): Promise<Metadata> {
  const { collection, slug } = await params;
  const entry = getEntry(collection, slug);
  if (!entry) return {};

  const image = resolveEntryImage(slug, collection);
  const collectionLabel = getCollectionLabel(collection);
  const description = entry.excerpt || `${entry.title} — ${collectionLabel} du Haut Royaume de Cadifor.`;

  return {
    title: entry.title,
    description,
    openGraph: {
      title: `${entry.title} — Cadifor`,
      description,
      type: "article",
      ...(image && {
        images: [{ url: `/assets/${image}`, width: 1200, height: 630, alt: entry.title }],
      }),
    },
  };
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

  const allInCollection = getCollection(collection);
  const currentIndex = allInCollection.findIndex((e) => e.slug === slug);
  const prevEntry = currentIndex > 0 ? allInCollection[currentIndex - 1] : null;
  const nextEntry = currentIndex < allInCollection.length - 1 ? allInCollection[currentIndex + 1] : null;

  const tocItems = extractTocFromMarkdown(entry.body);
  const relatedEntries = getRelatedEntries(entry, 6);

  return (
    <>
      <ReadingProgress />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-8">
        {/* ─── Breadcrumbs ────────────────────────────────────── */}
        <Breadcrumbs items={[
          { label: "Accueil", href: "/" },
          { label: "Encyclopedie", href: "/encyclopedie" },
          { label: getCollectionLabel(collection), href: "/encyclopedie" },
          { label: entry.title },
        ]} />

      <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
        {/* ─── Main content ──────────────────────────────────── */}
        <div>
          {/* Header with image */}
          {(() => {
            const headerImage = resolveEntryImage(slug, collection);
            return (
              <div className="animate-fade-up relative mb-12 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-[var(--gold-faint)]">
                {headerImage && (
                  <div className="relative h-56 w-full md:h-72">
                    <Image
                      src={`/assets/${headerImage}`}
                      alt={entry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 740px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(12,10,9)] via-[rgb(12,10,9)]/40 to-transparent" />
                  </div>
                )}
                <div className="relative p-8 md:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/25 to-transparent" />

                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
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

                  <h1 className="font-serif text-5xl leading-tight text-[var(--ivory)]">
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
              </div>
            );
          })()}

          {/* Body */}
          <Markdown content={entry.body} />

          {/* ─── Prev / Next ─────────────────────────────────── */}
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {prevEntry ? (
              <Link
                href={`/encyclopedie/${collection}/${prevEntry.slug}`}
                className="card-imperial group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
                  Precedent
                </span>
                <p className="mt-1 font-serif text-lg text-stone-200 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                  {prevEntry.title}
                </p>
              </Link>
            ) : <div />}
            {nextEntry ? (
              <Link
                href={`/encyclopedie/${collection}/${nextEntry.slug}`}
                className="card-imperial group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 text-right"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
                  Suivant
                </span>
                <p className="mt-1 font-serif text-lg text-stone-200 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                  {nextEntry.title}
                </p>
              </Link>
            ) : null}
          </div>
        </div>

        {/* ─── Sidebar ───────────────────────────────────────── */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {/* Table of contents */}
          <TableOfContents items={tocItems} />

          {/* Portrait gallery for characters */}
          {collection === "personnages" && (
            <GalleryGrid
              images={resolveCharacterGallery(slug)}
              label="Portraits"
              aspectRatio="aspect-[3/4]"
              sizes="130px"
            />
          )}

          {/* Location gallery for geographic collections */}
          {(collection === "villes" || collection === "territoires" || collection === "nations" || collection === "duches") && (
            <GalleryGrid
              images={resolveLocationGallery(slug)}
              label="Vues"
              aspectRatio="aspect-[16/9]"
              sizes="260px"
            />
          )}

          {/* Related entries (cross-references) */}
          {relatedEntries.length > 0 && (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]/60">
                References croisees
              </p>
              <div className="space-y-1">
                {relatedEntries.map((r) => (
                  <Link
                    key={`${r.collection}/${r.slug}`}
                    href={r.collection === "scenes" ? `/scenes/${r.slug}` : `/encyclopedie/${r.collection}/${r.slug}`}
                    className="block truncate rounded-lg px-3 py-1.5 text-xs text-stone-500 transition-colors duration-200 hover:bg-white/[0.04] hover:text-stone-300"
                  >
                    <span className="text-[9px] uppercase tracking-wider text-stone-600">{r.collection} </span>
                    {r.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-stone-600">
              Dans cette collection
            </p>
            <div className="space-y-1">
              {allInCollection.slice(0, 15).map((e) => (
                <Link
                  key={e.slug}
                  href={`/encyclopedie/${collection}/${e.slug}`}
                  className={`block truncate rounded-lg px-3 py-1.5 text-xs transition-colors duration-200 ${
                    e.slug === slug
                      ? "bg-[var(--gold)]/10 text-[var(--gold-light)]"
                      : "text-stone-500 hover:bg-white/[0.04] hover:text-stone-300"
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
    </>
  );
}
