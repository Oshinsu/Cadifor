import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { getChronologyDocument } from "@/lib/content";

export default function ChronologiePage() {
  const chronology = getChronologyDocument();

  if (!chronology) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <div className="mb-10 rounded-[2rem] border border-white/8 bg-white/[0.03] p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-amber-200">
          Ligne du temps
        </p>
        <h1 className="mt-3 font-serif text-5xl text-stone-50">Chronologie</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.22em] text-stone-500">
          Source : {chronology.sourcePath}
        </p>
      </div>
      <Markdown content={chronology.body} />
    </main>
  );
}
