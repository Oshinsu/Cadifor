import Link from "next/link";
import type { LoreEntry } from "@/lib/content";

type EntryCardProps = {
  entry: LoreEntry;
  href: string;
};

export function EntryCard({ entry, href }: EntryCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.05]"
    >
      <div className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-500">
        {entry.collection}
      </div>
      <h3 className="mb-3 font-serif text-2xl text-stone-100 transition group-hover:text-amber-200">
        {entry.title}
      </h3>
      <p className="line-clamp-4 text-sm leading-7 text-stone-400">{entry.excerpt}</p>
      <div className="mt-5 text-xs uppercase tracking-[0.22em] text-stone-500">
        {entry.sourcePath}
      </div>
    </Link>
  );
}
