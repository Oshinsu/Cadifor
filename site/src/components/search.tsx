"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { CollectionKey } from "@/lib/content";

type SearchEntry = {
  slug: string;
  title: string;
  excerpt: string;
  collection: CollectionKey;
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
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-14 pr-6 text-lg text-stone-100 placeholder-stone-600 outline-none transition focus:border-amber-300/30 focus:bg-white/[0.06]"
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
            className="group block rounded-2xl border border-white/6 bg-white/[0.02] px-6 py-4 transition hover:border-amber-300/25 hover:bg-white/[0.04]"
          >
            <div className="flex items-baseline gap-4">
              <h3 className="font-serif text-xl text-stone-100 transition group-hover:text-amber-200">
                {entry.title}
              </h3>
              <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-stone-600">
                {entry.collection}
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
