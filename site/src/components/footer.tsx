import Link from "next/link";
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
    <footer className="relative mt-24 border-t border-white/[0.04]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg border border-[var(--gold)]/20 bg-[var(--gold)]/[0.05]">
                <span className="font-serif text-sm font-bold text-[var(--gold)]">C</span>
              </div>
              <span className="font-serif text-lg tracking-[0.15em] text-stone-200">CADIFOR</span>
            </Link>
            <p className="mt-5 max-w-xs text-[0.8rem] leading-relaxed text-stone-500">
              Encyclopedie vivante du Haut Royaume. Corpus derive de 997 pages de lore brut.
              Mod Warcraft: Guardians of Azeroth pour Crusader Kings 2.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">Navigation</p>
            <div className="space-y-3">
              {[
                { href: "/scenes", label: "Scenes" },
                { href: "/encyclopedie", label: "Encyclopedie" },
                { href: "/chronologie", label: "Chronologie" },
                { href: "/dossiers", label: "Dossiers" },
                { href: "/recherche", label: "Recherche" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-[0.84rem] text-stone-500 transition-colors duration-300 hover:text-stone-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">Canon</p>
            <div className="space-y-3">
              <Link href="/canon/progression-pdf" className="block text-[0.84rem] text-stone-500 transition-colors duration-300 hover:text-stone-200">Progression PDF</Link>
              <Link href="/canon/notation-scenes" className="block text-[0.84rem] text-stone-500 transition-colors duration-300 hover:text-stone-200">Notation des scenes</Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">Corpus</p>
            <div className="space-y-3">
              {[
                { label: "Entrees", value: totalEntries },
                { label: "Personnages", value: characterCount },
                { label: "Scenes", value: sceneCount },
                { label: "Collections", value: encyclopaediaCollections.length },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between">
                  <span className="text-[0.8rem] text-stone-500">{stat.label}</span>
                  <span className="font-serif text-lg text-stone-300">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-fade mt-14 mb-8" />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-[0.72rem] tracking-[0.12em] text-stone-600">
            Haut Royaume de Cadifor — Point de divergence : annee 583
          </p>
        </div>
      </div>
    </footer>
  );
}
