import Link from "next/link";
import { ArrowRight, BookOpenText, Crown, ScrollText } from "lucide-react";
import { EntryCard } from "@/components/cards";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionLabel,
  getFeaturedScene,
  getPdfProgressDocument,
  getSceneCandidates,
  getSiteDocuments,
  getTopCharacters,
} from "@/lib/content";

export default function HomePage() {
  const featuredScene = getFeaturedScene();
  const topCharacters = getTopCharacters();
  const sceneCandidates = getSceneCandidates();
  const progress = getPdfProgressDocument();
  const siteDocs = getSiteDocuments();

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
      <section className="grain relative overflow-hidden rounded-[2rem] border border-white/8 bg-black/20 px-8 py-16 md:px-14">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-200">
            <Crown className="size-4" />
            Lore Cadifor 2026
          </div>

          <h1 className="max-w-4xl font-serif text-5xl leading-none text-stone-50 md:text-7xl">
            Une interface de lecture et de recoupement pour le Haut Royaume.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Le site n&apos;est plus un monobloc statique. Il lit directement le corpus
            `lore/`, expose les scenes, les figures, les systemes et le suivi du PDF
            fondateur, puis relie l&apos;editorial a l&apos;encyclopedie.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/scenes"
              className="inline-flex items-center gap-3 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-amber-200"
            >
              Entrer par les scenes
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/encyclopedie"
              className="inline-flex items-center gap-3 rounded-full border border-white/12 px-5 py-3 text-sm uppercase tracking-[0.18em] text-stone-100 transition hover:border-amber-300/30 hover:text-amber-200"
            >
              Explorer l&apos;encyclopedie
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            label: "Personnages",
            value: getCollection("personnages").length,
            icon: Crown,
          },
          {
            label: "Scenes",
            value: getCollection("scenes").length,
            icon: ScrollText,
          },
          {
            label: "Corpus systeme",
            value: encyclopaediaCollections
              .map((collection) => getCollection(collection).length)
              .reduce((total, count) => total + count, 0),
            icon: BookOpenText,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6"
          >
            <item.icon className="mb-5 size-5 text-amber-300" />
            <div className="font-serif text-5xl text-stone-100">{item.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-stone-500">
              {item.label}
            </div>
          </div>
        ))}
      </section>

      {featuredScene ? (
        <section className="mt-16 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[2rem] border border-amber-300/15 bg-amber-300/[0.06] p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-amber-200">
              Scene d&apos;entree
            </p>
            <h2 className="font-serif text-4xl text-stone-50">{featuredScene.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
              {featuredScene.excerpt}
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href={`/scenes/${featuredScene.slug}`}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-amber-200"
              >
                Lire la scene
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">
              Progression du PDF
            </p>
            <h3 className="font-serif text-3xl text-stone-50">Avancement trace</h3>
            <p className="mt-4 text-base leading-8 text-stone-300">
              {progress?.excerpt ??
                "Le suivi du PDF fondateur est expose comme page systeme du site."}
            </p>
            <Link
              href="/canon/progression-pdf"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-100"
            >
              Voir la progression
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      ) : null}

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Figures de seuil
            </p>
            <h2 className="font-serif text-4xl text-stone-50">Personnages</h2>
          </div>
          <Link
            href="/encyclopedie"
            className="text-sm uppercase tracking-[0.2em] text-stone-400 transition hover:text-stone-100"
          >
            Tout voir
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {topCharacters.map((entry) => (
            <EntryCard
              key={entry.slug}
              entry={entry}
              href={`/encyclopedie/personnages/${entry.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Bibliotheque des scenes
          </p>
          <h2 className="font-serif text-4xl text-stone-50">Scenes fortes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sceneCandidates.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} href={`/scenes/${entry.slug}`} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Graphes du corpus
          </p>
          <h2 className="font-serif text-4xl text-stone-50">Collections</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {encyclopaediaCollections.map((collection) => {
            const count = getCollection(collection).length;

            return (
              <Link
                key={collection}
                href={
                  collection === "meta"
                    ? "/canon/notation-scenes"
                    : `/encyclopedie?focus=${collection}`
                }
                className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-6 transition hover:border-amber-300/25"
              >
                <div className="text-xs uppercase tracking-[0.24em] text-stone-500">
                  {collection}
                </div>
                <div className="mt-2 font-serif text-3xl text-stone-50">
                  {getCollectionLabel(collection)}
                </div>
                <div className="mt-3 text-sm leading-7 text-stone-400">
                  {count} entrees actuellement derivees depuis `lore/`.
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Chantier systeme
          </p>
          <h2 className="font-serif text-4xl text-stone-50">Documents du site</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {siteDocs.map((entry) => (
            <EntryCard
              key={entry.slug}
              entry={entry}
              href={
                entry.slug === "pdf_analysis_progress"
                  ? "/canon/progression-pdf"
                  : "/dossiers"
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}
