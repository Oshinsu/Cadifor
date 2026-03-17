import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";
import type { LoreEntry } from "@/lib/content";
import { resolveEntryImage } from "@/lib/images";
import { getFactionTheme } from "@/lib/colors";

type EntryCardProps = {
  entry: LoreEntry;
  href: string;
};

export function EntryCard({ entry, href }: EntryCardProps) {
  const imagePath = resolveEntryImage(entry.slug, entry.collection);
  const showFaction = entry.faction !== "imperial" && entry.collection === "personnages";
  const factionTheme = showFaction ? getFactionTheme(entry.faction) : null;

  return (
    <Link
      href={href}
      className="card-imperial group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
    >
      {/* Thumbnail with cinematic overlay */}
      {imagePath && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={`/assets/${imagePath}`}
            alt={entry.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,9,8)] via-[rgb(10,9,8)]/30 to-transparent" />
          {/* Hover reveal arrow */}
          <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-[var(--gold)]/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="size-3.5 text-[var(--gold)]" />
          </div>
        </div>
      )}

      <div className="p-7">
        {/* Top gold line on hover */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-600">
            {entry.collection}
          </span>
          {factionTheme && (
            <span className={`rounded-full border px-2 py-0.5 text-[9px] uppercase tracking-[0.15em] ${factionTheme.borderTint} ${factionTheme.textAccent}`}>
              {factionTheme.label}
            </span>
          )}
          <span className="h-px flex-1 bg-white/[0.04]" />
        </div>

        <h3 className="mb-3 font-serif text-[1.65rem] leading-tight text-slate-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
          {entry.title}
        </h3>

        {entry.epithet && (
          <p className="mb-2 text-xs italic text-[var(--gold)]/50">{entry.epithet}</p>
        )}

        <p className="line-clamp-3 text-[0.84rem] leading-relaxed text-slate-500">
          {entry.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.15em] text-slate-700 transition-colors duration-300 group-hover:text-slate-500">
          <span className="flex items-center gap-1">
            <Clock className="size-2.5" />
            {entry.readingTime} min
          </span>
          <span className="h-3 w-px bg-slate-800" />
          <span className="uppercase">{entry.wordCount.toLocaleString("fr")} mots</span>
        </div>
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-[var(--border-gold)] hover:bg-white/[0.04]">
      {/* Subtle glow on hover */}
      <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-[var(--gold)]/[0.04] opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4 text-[var(--gold)]/50 transition-colors duration-300 group-hover:text-[var(--gold)]">
          {icon}
        </div>
        <div className="font-serif text-5xl tabular-nums tracking-tight text-slate-100">{value}</div>
        <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-600">
          {label}
        </div>
      </div>
    </div>
  );
}
