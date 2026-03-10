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
  const nationCount = getCollection("nations").length;

  return (
    <footer className="border-t border-white/6 bg-stone-950/80">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3 text-stone-100">
              <div className="flex size-9 items-center justify-center rounded-full border border-violet-300/40 bg-violet-300/10">
                <ScrollText className="size-3.5 text-violet-300" />
              </div>
              <div>
                <p className="font-serif text-lg tracking-[0.18em] uppercase">Cadifor</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                  Haut Royaume
                </p>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-6 text-stone-500">
              Encyclopedie vivante du corpus Cadifor.
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
                { href: "/recherche", label: "Recherche" },
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
              {[
                { label: "Entrees", value: totalEntries },
                { label: "Personnages", value: characterCount },
                { label: "Scenes", value: sceneCount },
                { label: "Nations", value: nationCount },
                { label: "Collections", value: encyclopaediaCollections.length },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline justify-between">
                  <span className="text-xs text-stone-500">{item.label}</span>
                  <span className="font-serif text-lg text-stone-200">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 border-t border-white/6 pt-6">
          <div className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-violet-500" />
            <div className="size-1.5 rounded-full bg-cyan-400" />
          </div>
          <p className="text-center text-xs text-stone-600">
            Haut Royaume de Cadifor — 997 pages de lore brut — Point de divergence : annee 583
          </p>
        </div>
      </div>
    </footer>
  );
}
