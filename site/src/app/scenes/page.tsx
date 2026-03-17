import type { Metadata } from "next";
import Image from "next/image";
import { Clock, ScrollText, Swords } from "lucide-react";

export const metadata: Metadata = {
  title: "Scenes canoniques",
  description: "Les scenes canoniques du Haut Royaume de Cadifor — recits fondateurs, diners imperiaux, batailles et moments dynastiques.",
};
import { EntryCard } from "@/components/cards";
import { getCollection } from "@/lib/content";

export default function ScenesPage() {
  const scenes = getCollection("scenes");
  const totalWords = scenes.reduce((sum, s) => sum + s.wordCount, 0);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      {/* Cinematic header */}
      <div className="relative mb-14 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-black/30 p-10 md:p-14">
        <Image
          src="/assets/scenes/header_personnages.png"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgb(10,9,8)] via-[rgb(10,9,8)]/75 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10,9,8)]/50 via-transparent to-[rgb(10,9,8)]/20" />

        <div className="relative max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/50">
            <Swords className="size-3.5" />
            Chroniques canoniques
          </div>
          <h1 className="font-serif text-5xl text-[var(--ivory)] md:text-6xl">Scenes</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-400">
            Les scenes canoniques du corpus Cadifor : diners imperiaux, duels,
            bals, batailles et moments fondateurs. Chaque scene est un point
            d&apos;entree dans la legende.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <ScrollText className="size-3" />
              {scenes.length} scenes
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" />
              {Math.round(totalWords / 220)} min de lecture totale
            </span>
            <span className="tabular-nums">{totalWords.toLocaleString("fr")} mots</span>
          </div>
        </div>
      </div>

      <div className="divider-ornament mb-12">
        <span className="divider-ornament-diamond" />
      </div>

      <div className="stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {scenes.map((scene) => (
          <EntryCard key={scene.slug} entry={scene} href={`/scenes/${scene.slug}`} />
        ))}
      </div>
    </main>
  );
}
