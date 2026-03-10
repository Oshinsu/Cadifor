import { EntryCard } from "@/components/cards";
import { getCollection } from "@/lib/content";

export default function ScenesPage() {
  const scenes = getCollection("scenes");

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
          Bibliotheque des scenes
        </p>
        <h1 className="font-serif text-5xl text-stone-50">Scenes</h1>
        <p className="mt-4 text-lg leading-8 text-stone-300">
          Le site expose les scenes canoniques du corpus comme entrees editoriales
          de premier rang.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {scenes.map((scene) => (
          <EntryCard key={scene.slug} entry={scene} href={`/scenes/${scene.slug}`} />
        ))}
      </div>
    </main>
  );
}
