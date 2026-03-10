import Link from "next/link";
import { Clock } from "lucide-react";
import { FactionStrip } from "./faction-badge";
import { getFactionTheme } from "@/lib/colors";
import { getTierColor, type CharacterTier } from "@/lib/colors";
import type { LoreEntry } from "@/lib/content";

type EntryCardProps = {
  entry: LoreEntry;
  href: string;
  showFaction?: boolean;
};

export function EntryCard({ entry, href, showFaction = true }: EntryCardProps) {
  const theme = getFactionTheme(entry.faction);

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
    >
      <FactionStrip faction={entry.faction} />

      <div className="mb-3 flex items-center gap-3">
        <span className="text-xs uppercase tracking-[0.24em] text-stone-500">
          {entry.collection}
        </span>
        {showFaction && entry.faction !== "imperial" && (
          <span
            className={`text-[10px] uppercase tracking-[0.18em] ${theme.textAccent}`}
          >
            {theme.label}
          </span>
        )}
      </div>

      <h3 className="mb-2 font-serif text-2xl text-stone-100 transition group-hover:text-amber-200">
        {entry.title}
      </h3>

      {entry.epithet && (
        <p className="mb-2 text-xs italic text-stone-400">{entry.epithet}</p>
      )}

      <p className="line-clamp-3 text-sm leading-7 text-stone-400">
        {entry.excerpt}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-stone-600">
        <span className="flex items-center gap-1.5">
          <Clock className="size-3" />
          {entry.readingTime} min
        </span>
        <span>{entry.wordCount.toLocaleString("fr")} mots</span>
        {entry.tier && <TierBadge tier={entry.tier} />}
      </div>
    </Link>
  );
}

function TierBadge({ tier }: { tier: CharacterTier }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getTierColor(tier)}`}
    >
      {tier}
    </span>
  );
}

type CompactCardProps = {
  entry: LoreEntry;
  href: string;
};

export function CompactCard({ entry, href }: CompactCardProps) {
  const theme = getFactionTheme(entry.faction);

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02] px-5 py-4 transition hover:border-white/12 hover:bg-white/[0.04]"
    >
      <div
        className="absolute inset-y-0 left-0 w-[2px]"
        style={{ backgroundColor: theme.primary }}
      />
      <h3 className="font-serif text-lg text-stone-200 transition group-hover:text-amber-200">
        {entry.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-xs leading-5 text-stone-500">
        {entry.excerpt}
      </p>
    </Link>
  );
}

type HeroCardProps = {
  entry: LoreEntry;
  href: string;
  label: string;
};

export function HeroCard({ entry, href, label }: HeroCardProps) {
  const theme = getFactionTheme(entry.faction);

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-[2rem] border p-8 transition hover:bg-white/[0.04] ${theme.borderTint} ${theme.bgTint}`}
    >
      <FactionStrip faction={entry.faction} />
      <p className={`mb-3 text-xs uppercase tracking-[0.24em] ${theme.textAccent}`}>
        {label}
      </p>
      <h2 className="font-serif text-4xl text-stone-50 transition group-hover:text-amber-200">
        {entry.title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
        {entry.excerpt}
      </p>
      <div className="mt-6 flex items-center gap-4 text-xs text-stone-500">
        <span className="flex items-center gap-1.5">
          <Clock className="size-3" />
          {entry.readingTime} min de lecture
        </span>
        <span>{entry.wordCount.toLocaleString("fr")} mots</span>
      </div>
    </Link>
  );
}
