"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Clock, Search } from "lucide-react";
import type { CollectionKey } from "@/lib/content";
import type { FactionKey } from "@/lib/colors";

type SearchEntry = {
  slug: string;
  title: string;
  excerpt: string;
  collection: CollectionKey;
  faction: FactionKey;
  readingTime: number;
};

function getEntryHref(entry: SearchEntry) {
  if (entry.collection === "scenes") {
    return `/scenes/${entry.slug}`;
  }
  return `/encyclopedie/${entry.collection}/${entry.slug}`;
}

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function matchesQuery(entry: SearchEntry, terms: string[]) {
  const haystack = normalize(`${entry.title} ${entry.excerpt} ${entry.collection}`);
  return terms.every((term) => haystack.includes(term));
}

export function SearchView({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return [];

    const terms = normalize(trimmed).split(/\s+/);
    return entries.filter((entry) => matchesQuery(entry, terms)).slice(0, 40);
  }, [query, entries]);

  return (
    <div>
      <div className="relative">
        <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-stone-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un personnage, une scene, un lieu..."
          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] py-4 pl-14 pr-6 text-lg text-stone-100 placeholder-stone-600 outline-none transition-all duration-300 focus:border-[var(--gold)]/30 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(212,168,83,0.06)]"
          autoFocus
        />
      </div>

      {query.trim().length >= 2 && (
        <div className="mt-2 text-xs text-stone-500">
          {results.length} resultat{results.length !== 1 ? "s" : ""}
        </div>
      )}

      <div className="mt-6 space-y-3">
        {results.map((entry) => (
          <Link
            key={`${entry.collection}/${entry.slug}`}
            href={getEntryHref(entry)}
            className="card-imperial group block rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-4"
          >
            <div className="flex items-baseline gap-4">
              <h3 className="font-serif text-xl text-stone-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                {entry.title}
              </h3>
              <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                {entry.collection}
              </span>
              <span className="ml-auto flex shrink-0 items-center gap-1 text-[10px] text-stone-600">
                <Clock className="size-2.5" />
                {entry.readingTime} min
              </span>
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-stone-500">
              {entry.excerpt}
            </p>
          </Link>
        ))}
      </div>

      {query.trim().length < 2 && (
        <div className="mt-12 text-center text-sm text-stone-600">
          Saisissez au moins 2 caracteres pour lancer la recherche.
        </div>
      )}
    </div>
  );
}
