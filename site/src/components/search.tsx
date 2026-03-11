"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Clock, Search, X } from "lucide-react";
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

const COLLECTION_FILTERS: { key: CollectionKey | "all"; label: string }[] = [
  { key: "all", label: "Tout" },
  { key: "personnages", label: "Personnages" },
  { key: "scenes", label: "Scenes" },
  { key: "nations", label: "Nations" },
  { key: "villes", label: "Villes" },
  { key: "factions", label: "Factions" },
  { key: "territoires", label: "Territoires" },
  { key: "sections", label: "Sections" },
];

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

function highlightMatch(text: string, query: string) {
  if (query.length < 2) return text;
  const normalizedQuery = normalize(query);
  const normalizedText = normalize(text);
  const idx = normalizedText.indexOf(normalizedQuery);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-[var(--gold)]/20 text-[var(--gold-light)]">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export function SearchView({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<CollectionKey | "all">("all");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return [];

    const terms = normalize(trimmed).split(/\s+/);
    return entries
      .filter((entry) => {
        if (filter !== "all" && entry.collection !== filter) return false;
        return matchesQuery(entry, terms);
      })
      .slice(0, 40);
  }, [query, filter, entries]);

  // Reset selection when results change
  useEffect(() => { setSelectedIndex(-1); }, [results]);

  // Keyboard navigation
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, -1));
      } else if (e.key === "Enter" && selectedIndex >= 0 && results[selectedIndex]) {
        e.preventDefault();
        router.push(getEntryHref(results[selectedIndex]));
      } else if (e.key === "Escape") {
        setQuery("");
        inputRef.current?.blur();
      }
    },
    [results, selectedIndex, router],
  );

  return (
    <div>
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-stone-500" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Rechercher un personnage, une scene, un lieu..."
          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] py-4 pl-14 pr-12 text-lg text-stone-100 placeholder-stone-600 outline-none transition-all duration-300 focus:border-[var(--gold)]/30 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(212,168,83,0.06)]"
          autoFocus
        />
        {query.length > 0 && (
          <button
            type="button"
            onClick={() => { setQuery(""); inputRef.current?.focus(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-stone-500 transition-colors hover:text-stone-300"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Collection filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {COLLECTION_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] transition-all duration-200 ${
              filter === f.key
                ? "border border-[var(--gold)]/30 bg-[var(--gold)]/[0.1] text-[var(--gold-light)]"
                : "border border-white/[0.06] bg-white/[0.02] text-stone-500 hover:border-white/[0.1] hover:text-stone-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Result count */}
      {query.trim().length >= 2 && (
        <div className="mt-4 flex items-center gap-3 text-xs text-stone-500">
          <span>{results.length} resultat{results.length !== 1 ? "s" : ""}</span>
          {selectedIndex >= 0 && (
            <span className="text-stone-600">
              Naviguez avec les fleches
            </span>
          )}
        </div>
      )}

      {/* Results */}
      <div className="mt-6 space-y-3">
        {results.map((entry, i) => (
          <Link
            key={`${entry.collection}/${entry.slug}`}
            href={getEntryHref(entry)}
            className={`card-imperial group block rounded-2xl border bg-white/[0.02] px-6 py-4 transition-all duration-200 ${
              i === selectedIndex
                ? "border-[var(--gold)]/25 bg-[var(--gold)]/[0.04]"
                : "border-white/[0.06]"
            }`}
          >
            <div className="flex items-baseline gap-4">
              <h3 className="font-serif text-xl text-stone-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                {highlightMatch(entry.title, query.trim())}
              </h3>
              <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-stone-600">
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

      {/* Empty state */}
      {query.trim().length >= 2 && results.length === 0 && (
        <div className="mt-12 text-center">
          <p className="font-serif text-2xl text-stone-500">Aucun resultat</p>
          <p className="mt-2 text-sm text-stone-600">
            Essayez un autre terme ou changez le filtre de collection.
          </p>
        </div>
      )}

      {query.trim().length < 2 && (
        <div className="mt-12 text-center">
          <p className="text-sm text-stone-600">
            Saisissez au moins 2 caracteres pour lancer la recherche.
          </p>
          <p className="mt-2 text-[10px] text-stone-700">
            Raccourci clavier : fleches pour naviguer, Entree pour ouvrir, Echap pour effacer
          </p>
        </div>
      )}
    </div>
  );
}
