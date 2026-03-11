import { notFound } from "next/navigation";
import { Clock, FileText } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { getChronologyDocument } from "@/lib/content";

const ERAS = [
  { name: "Fondation", years: "542–622", color: "bg-[var(--gold)]/40" },
  { name: "Consolidation", years: "622–676", color: "bg-[var(--gold)]/55" },
  { name: "Andrea", years: "676–815", color: "bg-[var(--gold)]/70" },
  { name: "Haut Empire", years: "815–909", color: "bg-[var(--gold)]/85" },
  { name: "Age imperial", years: "909–943", color: "bg-[var(--gold)]" },
  { name: "Rose", years: "943–953+", color: "bg-[var(--gold-light)]" },
];

export default function ChronologiePage() {
  const chronology = getChronologyDocument();

  if (!chronology) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      {/* Header */}
      <div className="animate-fade-up mb-10 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-[var(--gold-faint)] p-8 md:p-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
          Ligne du temps
        </p>
        <h1 className="mt-3 font-serif text-5xl text-[var(--ivory)]">Chronologie</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-stone-400">
          Quatre siecles de l&apos;histoire du Haut Royaume, du point de divergence
          (annee 583) au regne de Rose l&apos;Absolue (953+).
        </p>

        <div className="mt-6 flex items-center gap-6 text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3" />
            {chronology.readingTime} min de lecture
          </span>
          <span className="flex items-center gap-1.5">
            <FileText className="size-3" />
            {chronology.wordCount.toLocaleString("fr")} mots
          </span>
        </div>
      </div>

      {/* Era strip */}
      <div className="mb-10 overflow-x-auto pb-2">
        <div className="flex gap-2" style={{ minWidth: "max-content" }}>
          {ERAS.map((era) => (
            <div
              key={era.name}
              className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2"
            >
              <div className={`size-2 rounded-full ${era.color}`} />
              <span className="text-xs font-medium text-stone-300">{era.name}</span>
              <span className="text-[10px] text-stone-600">{era.years}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <Markdown content={chronology.body} />
    </main>
  );
}
