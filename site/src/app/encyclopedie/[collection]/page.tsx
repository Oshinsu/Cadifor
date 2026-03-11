import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { EntryCard } from "@/components/cards";
import { getCollectionTheme } from "@/lib/colors";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionDescription,
  getCollectionLabel,
  type CollectionKey,
} from "@/lib/content";

type CollectionPageProps = {
  params: Promise<{ collection: CollectionKey }>;
};

export function generateStaticParams() {
  return encyclopaediaCollections.map((collection) => ({ collection }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { collection } = await params;
  const label = getCollectionLabel(collection);
  const description = getCollectionDescription(collection);

  return {
    title: `${label} — Encyclopedie`,
    description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { collection } = await params;

  if (!encyclopaediaCollections.includes(collection)) {
    notFound();
  }

  const entries = getCollection(collection);
  const theme = getCollectionTheme(collection);
  const label = getCollectionLabel(collection);
  const description = getCollectionDescription(collection);
  const totalWords = entries.reduce((sum, e) => sum + e.wordCount, 0);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      {/* Header */}
      <div className={`relative mb-14 overflow-hidden rounded-[2rem] border ${theme.accentBorder} bg-black/20 p-8 md:p-12`}>
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${theme.gradient}`} />

        <div className="relative max-w-3xl">
          <Link
            href="/encyclopedie"
            className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone-500 transition-colors hover:text-stone-300"
          >
            <ChevronLeft className="size-3" />
            Toutes les collections
          </Link>

          <p className={`text-[10px] uppercase tracking-[0.25em] ${theme.iconColor}/60`}>
            {collection}
          </p>
          <h1 className="font-serif text-5xl text-[var(--ivory)]">{label}</h1>
          <p className="mt-4 text-lg leading-8 text-stone-400">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-6 text-xs text-stone-500">
            <span>{entries.length} entree{entries.length !== 1 ? "s" : ""}</span>
            <span className="h-3 w-px bg-stone-700" />
            <span>{totalWords.toLocaleString("fr")} mots</span>
          </div>
        </div>
      </div>

      {/* Entries grid */}
      <div className="stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3" data-reveal>
        {entries.map((entry) => (
          <EntryCard
            key={entry.slug}
            entry={entry}
            href={`/encyclopedie/${collection}/${entry.slug}`}
          />
        ))}
      </div>

      {entries.length === 0 && (
        <div className="mt-12 text-center">
          <p className="font-serif text-2xl text-stone-500">Aucune entree</p>
          <p className="mt-2 text-sm text-stone-600">
            Cette collection ne contient pas encore de contenu.
          </p>
        </div>
      )}
    </main>
  );
}
