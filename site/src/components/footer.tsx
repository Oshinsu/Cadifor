import Link from "next/link";
import Image from "next/image";
import {
  encyclopaediaCollections,
  getCollection,
  getTotalEntryCount,
} from "@/lib/content";

const FOOTER_WISDOMS = [
  "La dynastie ne meurt jamais — elle mue.",
  "Un empire sans memoire est un chateau sans fondations.",
  "Ce que le fer a pris, la plume le preserve.",
];

export function SiteFooter() {
  const totalEntries = getTotalEntryCount();
  const sceneCount = getCollection("scenes").length;
  const characterCount = getCollection("personnages").length;
  const wisdom = FOOTER_WISDOMS[Math.floor(Date.now() / 86400000) % FOOTER_WISDOMS.length];

  return (
    <footer className="relative mt-24 border-t border-white/[0.04]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/15 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]/[0.03] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Motto */}
        <div className="mb-14 text-center">
          <p className="font-serif text-lg italic text-slate-500/60">
            &laquo; {wisdom} &raquo;
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/[0.05]">
                <Image
                  src="/assets/heraldry/heraldry_cadifor_sigil.png"
                  alt="Blason Cadifor"
                  width={18}
                  height={18}
                  className="opacity-70"
                />
              </div>
              <span className="font-serif text-lg tracking-[0.18em] text-slate-200">CADIFOR</span>
            </Link>
            <p className="mt-5 max-w-xs text-[0.8rem] leading-relaxed text-slate-600">
              Encyclopedie vivante du Haut Royaume de Cadifor. Corpus derive de 997 pages de lore brut,
              une dynastie de quatre siecles forgee dans le mod Warcraft: Guardians of Azeroth pour Crusader Kings 2.
            </p>
            <p className="mt-4 text-[0.7rem] italic text-slate-700">
              &laquo; Tout le savoir de l&apos;Empire, a portee de parchemin. &raquo;
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]/40">Navigation</p>
            <div className="space-y-3">
              {[
                { href: "/scenes", label: "Scenes canoniques" },
                { href: "/encyclopedie", label: "Encyclopedie" },
                { href: "/chronologie", label: "Chronologie" },
                { href: "/dossiers", label: "Dossiers editoriaux" },
                { href: "/galerie", label: "Galerie" },
                { href: "/recherche", label: "Recherche" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-[0.84rem] text-slate-600 transition-colors duration-300 hover:text-slate-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]/40">Canon</p>
            <div className="space-y-3">
              <Link href="/canon/progression-pdf" className="block text-[0.84rem] text-slate-600 transition-colors duration-300 hover:text-slate-300">Progression PDF</Link>
              <Link href="/canon/notation-scenes" className="block text-[0.84rem] text-slate-600 transition-colors duration-300 hover:text-slate-300">Notation des scenes</Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]/40">Corpus</p>
            <div className="space-y-3">
              {[
                { label: "Entrees totales", value: totalEntries },
                { label: "Personnages", value: characterCount },
                { label: "Scenes", value: sceneCount },
                { label: "Collections", value: encyclopaediaCollections.length },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between">
                  <span className="text-[0.8rem] text-slate-600">{stat.label}</span>
                  <span className="font-serif text-lg tabular-nums text-slate-400">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-fade mt-14 mb-8" />
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="divider-ornament mb-2 max-w-xs">
            <span className="divider-ornament-diamond" />
          </div>
          <p className="text-[0.7rem] tracking-[0.15em] text-slate-700">
            Haut Royaume de Cadifor — Point de divergence : annee 583 de l&apos;Ere Presente
          </p>
          <p className="text-[0.6rem] tracking-[0.1em] text-slate-800">
            Un empire ne se construit pas en un jour. Il se raconte en mille pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
