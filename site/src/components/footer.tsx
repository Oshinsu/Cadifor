import Link from "next/link";
import { ScrollText } from "lucide-react";
import {
  encyclopaediaCollections,
  getCollection,
  getTotalEntryCount,
} from "@/lib/content";

export function SiteFooter() {
  const totalEntries = getTotalEntryCount();
  const sceneCount = getCollection("scenes").length;
  const characterCount = getCollection("personnages").length;

  return (
    <footer className="border-t border-white/8 bg-stone-950/80">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3 text-stone-100">
              <div className="flex size-9 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10">
                <ScrollText className="size-3.5 text-amber-300" />
              </div>
              <p className="font-serif text-lg tracking-[0.18em] uppercase">Cadifor</p>
            </Link>
            <p className="mt-4 text-xs leading-6 text-stone-500">
              Application editoriale et encyclopedique pour le corpus Cadifor.
              Mod Warcraft: Guardians of Azeroth pour Crusader Kings 2.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              Navigation
            </p>
            <div className="space-y-3">
              {[
                { href: "/scenes", label: "Scenes" },
                { href: "/encyclopedie", label: "Encyclopedie" },
                { href: "/chronologie", label: "Chronologie" },
                { href: "/dossiers", label: "Dossiers" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-stone-500 transition hover:text-stone-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              Canon
            </p>
            <div className="space-y-3">
              {[
                { href: "/canon/progression-pdf", label: "Progression PDF" },
                { href: "/canon/notation-scenes", label: "Notation des scenes" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-stone-500 transition hover:text-stone-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              Corpus
            </p>
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-stone-500">Entrees</span>
                <span className="font-serif text-lg text-stone-200">{totalEntries}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-stone-500">Personnages</span>
                <span className="font-serif text-lg text-stone-200">{characterCount}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-stone-500">Scenes</span>
                <span className="font-serif text-lg text-stone-200">{sceneCount}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-stone-500">Collections</span>
                <span className="font-serif text-lg text-stone-200">{encyclopaediaCollections.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/6 pt-6 text-center text-xs text-stone-600">
          Haut Royaume de Cadifor — Corpus derive de 997 pages de lore brut — Point de divergence : annee 583
        </div>
      </div>
    </footer>
  );
}
