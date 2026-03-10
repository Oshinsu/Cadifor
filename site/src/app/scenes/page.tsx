import { Clock, ScrollText } from "lucide-react";
import { EntryCard } from "@/components/cards";
import { getCollection } from "@/lib/content";

export default function ScenesPage() {
  const scenes = getCollection("scenes");
  const totalWords = scenes.reduce((sum, s) => sum + s.wordCount, 0);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="mb-14 max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
          Bibliotheque narrative
        </p>
        <h1 className="font-serif text-5xl text-[var(--ivory)]">Scenes</h1>
        <p className="mt-4 text-lg leading-8 text-stone-400">
          Les scenes canoniques du corpus Cadifor : diners imperiaux, duels,
          bals, batailles et moments fondateurs. Chaque scene est un point
          d&apos;entree editorial.
        </p>
        <div className="mt-5 flex items-center gap-6 text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <ScrollText className="size-3" />
            {scenes.length} scenes
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3" />
            {Math.round(totalWords / 220)} min de lecture totale
          </span>
          <span>{totalWords.toLocaleString("fr")} mots</span>
        </div>
      </div>

      <div className="divider-gold mb-10" />

      <div className="stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {scenes.map((scene) => (
          <EntryCard key={scene.slug} entry={scene} href={`/scenes/${scene.slug}`} />
        ))}
      </div>
    </main>
  );
}
