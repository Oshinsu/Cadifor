import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { getPdfProgressDocument } from "@/lib/content";

export default function ProgressionPdfPage() {
  const progress = getPdfProgressDocument();

  if (!progress) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <div className="animate-fade-up mb-10 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-[var(--gold-faint)] p-8 md:p-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
          Systeme
        </p>
        <h1 className="mt-3 font-serif text-5xl text-[var(--ivory)]">
          Progression du PDF fondateur
        </h1>
        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-stone-500">
          Source : {progress.sourcePath}
        </p>
      </div>
      <Markdown content={progress.body} />
    </main>
  );
}
