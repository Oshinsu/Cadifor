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
      className="card-imperial group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025] p-7"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-4 flex items-center gap-3">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
          {entry.collection}
        </span>
        <span className="h-px flex-1 bg-white/[0.04]" />
      </div>

      <h3 className="mb-3 font-serif text-[1.65rem] leading-tight text-stone-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
        {entry.title}
      </h3>

      <p className="line-clamp-3 text-[0.84rem] leading-relaxed text-stone-400/90">
        {entry.excerpt}
      </p>

      <div className="mt-6 text-[10px] tracking-[0.15em] text-stone-600 transition-colors duration-300 group-hover:text-stone-500">
        <span className="uppercase">{entry.sourcePath.split("/").pop()?.replace(".md", "")}</span>
      </div>
    </Link>
  );
}

type StatCardProps = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

export function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-[var(--border-gold)] hover:bg-white/[0.035]">
      <div className="mb-4 text-[var(--gold)]/60 transition-colors duration-300 group-hover:text-[var(--gold)]">
        {icon}
      </div>
      <div className="font-serif text-5xl tracking-tight text-stone-100">{value}</div>
      <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
        {label}
      </div>
    </div>
  );
}
