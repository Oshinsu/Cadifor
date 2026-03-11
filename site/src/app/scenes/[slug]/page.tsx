import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, FileText } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ReadingProgress } from "@/components/reading-progress";
import { getCollection, getEntry } from "@/lib/content";
import { resolveEntryImage } from "@/lib/images";

type ScenePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCollection("scenes").map((scene) => ({ slug: scene.slug }));
}

export async function generateMetadata({ params }: ScenePageProps): Promise<Metadata> {
  const { slug } = await params;
  const scene = getEntry("scenes", slug);
  if (!scene) return {};

  const image = resolveEntryImage(slug, "scenes");
  const description = scene.excerpt || `${scene.title} — Scene canonique du Haut Royaume de Cadifor.`;

  return {
    title: scene.title,
    description,
    openGraph: {
      title: `${scene.title} — Cadifor`,
      description,
      type: "article",
      ...(image && {
        images: [{ url: `/assets/${image}`, width: 1200, height: 630, alt: scene.title }],
      }),
    },
  };
}

export default async function ScenePage({ params }: ScenePageProps) {
  const { slug } = await params;
  const scene = getEntry("scenes", slug);

  if (!scene) {
    notFound();
  }

  const allScenes = getCollection("scenes");
  const currentIndex = allScenes.findIndex((s) => s.slug === slug);
  const prevScene = currentIndex > 0 ? allScenes[currentIndex - 1] : null;
  const nextScene = currentIndex < allScenes.length - 1 ? allScenes[currentIndex + 1] : null;

  return (
    <>
      <ReadingProgress />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: "Accueil", href: "/" },
          { label: "Scenes", href: "/scenes" },
          { label: scene.title },
        ]} />

      {/* Header with scene illustration */}
      {(() => {
        const sceneImage = resolveEntryImage(slug, "scenes");
        return (
          <div className="animate-fade-up relative mb-14 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-[var(--gold-faint)]">
            {sceneImage && (
              <>
                <div className="relative h-64 w-full md:h-80">
                  <Image
                    src={`/assets/${sceneImage}`}
                    alt={scene.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(12,10,9)] via-[rgb(12,10,9)]/40 to-transparent" />
                </div>
              </>
            )}
            <div className="relative p-8 md:p-12">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
                Scene canonique
              </p>
              <h1 className="font-serif text-5xl leading-tight text-[var(--ivory)] md:text-6xl">
                {scene.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-400">
                {scene.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-6 text-xs text-stone-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3" />
                  {scene.readingTime} min de lecture
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText className="size-3" />
                  {scene.wordCount.toLocaleString("fr")} mots
                </span>
                <span className="text-stone-600">{scene.sourcePath}</span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Body */}
      <article>
        <Markdown content={scene.body} />
      </article>

      {/* Prev / Next */}
      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {prevScene ? (
          <Link
            href={`/scenes/${prevScene.slug}`}
            className="card-imperial group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
              Scene precedente
            </span>
            <p className="mt-1 font-serif text-lg text-stone-200 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
              {prevScene.title}
            </p>
          </Link>
        ) : <div />}
        {nextScene ? (
          <Link
            href={`/scenes/${nextScene.slug}`}
            className="card-imperial group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 text-right"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
              Scene suivante
            </span>
            <p className="mt-1 font-serif text-lg text-stone-200 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
              {nextScene.title}
            </p>
          </Link>
        ) : null}
      </div>
      </main>
    </>
  );
}
