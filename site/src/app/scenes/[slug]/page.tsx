import { notFound } from "next/navigation";
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

  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-12">
      <div className="mb-10 rounded-[2rem] border border-white/8 bg-white/[0.03] p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-amber-200">Scene</p>
        <h1 className="mt-3 font-serif text-5xl text-stone-50">{scene.title}</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.22em] text-stone-500">
          Source : {scene.sourcePath}
        </p>
      </div>
      <Markdown content={scene.body} />
    </main>
  );
}
