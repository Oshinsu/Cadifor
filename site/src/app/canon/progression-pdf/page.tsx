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
      <div className="mb-10 rounded-[2rem] border border-amber-300/20 bg-amber-300/[0.06] p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-amber-200">
          Systeme
        </p>
        <h1 className="mt-3 font-serif text-5xl text-stone-50">
          Progression du PDF fondateur
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.22em] text-stone-500">
          Source : {progress.sourcePath}
        </p>
      </div>
      <Markdown content={progress.body} />
    </main>
  );
}
