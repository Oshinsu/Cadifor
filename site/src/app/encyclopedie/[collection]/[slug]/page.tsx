import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, FileText, ArrowLeft, ArrowRight } from "lucide-react";
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
          { label: getCollectionLabel(collection), href: `/encyclopedie/${collection}` },
          { label: entry.title },
        ]} />

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        {/* ─── Main content ──────────────────────────────────── */}
        <div>
          {/* Cinematic header with image */}
          {(() => {
            const headerImage = resolveEntryImage(slug, collection);
            return (
              <div className="animate-fade-up relative mb-14 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-[var(--gold-faint)]">
                {headerImage && (
                  <div className="relative h-64 w-full md:h-80">
                    <Image
                      src={`/assets/${headerImage}`}
                      alt={entry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 740px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,9,8)] via-[rgb(10,9,8)]/50 to-transparent" />
                    {/* Vignette sides */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(10,9,8)]/30 via-transparent to-[rgb(10,9,8)]/30" />
                  </div>
                )}
                <div className="relative p-8 md:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[var(--gold)]/15 bg-[var(--gold)]/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
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

                  <h1 className="font-serif text-5xl leading-tight text-[var(--ivory)] md:text-6xl">
                    {entry.title}
                  </h1>

                  {entry.epithet && (
                    <p className="mt-3 font-serif text-xl italic text-[var(--gold)]/60">&laquo; {entry.epithet} &raquo;</p>
                  )}

                  {entry.dates && (
                    <p className="mt-3 text-sm tabular-nums text-slate-500">{entry.dates}</p>
                  )}

                  <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3" />
                      {entry.readingTime} min de lecture
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FileText className="size-3" />
                      {entry.wordCount.toLocaleString("fr")} mots
                    </span>
                    <span className="text-slate-700">{entry.sourcePath}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Body */}
          <Markdown content={entry.body} />

          {/* ─── Prev / Next navigation ────────────────────────── */}
          <div className="mt-16">
            <div className="divider-ornament mb-8">
              <span className="divider-ornament-diamond" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {prevEntry ? (
                <Link
                  href={`/encyclopedie/${collection}/${prevEntry.slug}`}
                  className="card-imperial group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                    <ArrowLeft className="size-3" />
                    Precedent
                  </span>
                  <p className="mt-2 font-serif text-xl text-slate-200 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                    {prevEntry.title}
                  </p>
                  {prevEntry.epithet && (
                    <p className="mt-1 text-xs italic text-slate-600">{prevEntry.epithet}</p>
                  )}
                </Link>
              ) : <div />}
              {nextEntry ? (
                <Link
                  href={`/encyclopedie/${collection}/${nextEntry.slug}`}
                  className="card-imperial group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-right"
                >
                  <span className="flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                    Suivant
                    <ArrowRight className="size-3" />
                  </span>
                  <p className="mt-2 font-serif text-xl text-slate-200 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                    {nextEntry.title}
                  </p>
                  {nextEntry.epithet && (
                    <p className="mt-1 text-xs italic text-slate-600">{nextEntry.epithet}</p>
                  )}
                </Link>
              ) : null}
            </div>
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
              sizes="140px"
            />
          )}

          {/* Location gallery for geographic collections */}
          {(collection === "villes" || collection === "territoires" || collection === "nations" || collection === "duches") && (
            <GalleryGrid
              images={resolveLocationGallery(slug)}
              label="Vues"
              aspectRatio="aspect-[16/9]"
              sizes="280px"
            />
          )}

          {/* Related entries (cross-references) */}
          {relatedEntries.length > 0 && (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/50">
                References croisees
              </p>
              <div className="space-y-1">
                {relatedEntries.map((r) => (
                  <Link
                    key={`${r.collection}/${r.slug}`}
                    href={r.collection === "scenes" ? `/scenes/${r.slug}` : `/encyclopedie/${r.collection}/${r.slug}`}
                    className="block truncate rounded-lg px-3 py-2 text-xs text-slate-500 transition-all duration-200 hover:bg-[var(--gold)]/[0.04] hover:text-slate-300"
                  >
                    <span className="text-[9px] uppercase tracking-wider text-slate-700">{r.collection} </span>
                    {r.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Collection navigation */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-slate-600">
              Dans cette collection
            </p>
            <div className="space-y-1">
              {allInCollection.slice(0, 15).map((e) => (
                <Link
                  key={e.slug}
                  href={`/encyclopedie/${collection}/${e.slug}`}
                  className={`block truncate rounded-lg px-3 py-2 text-xs transition-all duration-200 ${
                    e.slug === slug
                      ? "bg-[var(--gold)]/10 text-[var(--gold-light)] font-medium"
                      : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-300"
                  }`}
                >
                  {e.title}
                </Link>
              ))}
              {allInCollection.length > 15 && (
                <Link
                  href={`/encyclopedie/${collection}`}
                  className="block px-3 py-1 text-[10px] text-[var(--gold)]/40 transition-colors duration-200 hover:text-[var(--gold)]"
                >
                  +{allInCollection.length - 15} autres...
                </Link>
              )}
            </div>
          </div>
        </aside>
      </div>
      </main>
    </>
  );
}
