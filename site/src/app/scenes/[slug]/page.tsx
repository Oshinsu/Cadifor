import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, FileText } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { getCollection, getEntry } from "@/lib/content";

type ScenePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCollection("scenes").map((scene) => ({ slug: scene.slug }));
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
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-8">
      {/* Back link */}
      <Link
        href="/scenes"
        className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors duration-300 hover:text-[var(--gold)]"
      >
        <ArrowLeft className="size-3" />
        Scenes
      </Link>

      {/* Header */}
      <div className="animate-fade-up mb-14 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-[var(--gold-faint)] p-8 md:p-12">
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
  );
}
