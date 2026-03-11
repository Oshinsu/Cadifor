import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { getNotationDocument } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notation des scenes",
  description: "Criteres de notation et ordre de reecriture des scenes canoniques du Haut Royaume de Cadifor.",
};

export default function NotationScenesPage() {
  const notation = getNotationDocument();

  if (!notation) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <div className="animate-fade-up mb-10 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-[var(--gold-faint)] p-8 md:p-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
          Canon
        </p>
        <h1 className="mt-3 font-serif text-5xl text-[var(--ivory)]">
          Notation des scenes
        </h1>
        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-stone-500">
          Source : {notation.sourcePath}
        </p>
      </div>
      <Markdown content={notation.body} />
    </main>
  );
}
