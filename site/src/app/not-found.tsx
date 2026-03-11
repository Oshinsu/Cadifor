import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-6">
        <div className="font-serif text-[10rem] leading-none text-[var(--gold)]/[0.08]">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/assets/heraldry/heraldry_cadifor_sigil.png"
            alt=""
            width={80}
            height={80}
            className="opacity-20"
          />
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
        Introuvable
      </p>
      <h1 className="mt-3 font-serif text-5xl text-[var(--ivory)]">Page absente</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-stone-400">
        Cette route n&apos;a pas encore d&apos;entree correspondante dans le corpus
        Cadifor. Le Haut Royaume ne couvre pas encore tous les chemins.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--deep)] transition-all duration-300 hover:bg-[var(--gold-light)]"
        >
          <ArrowLeft className="size-4" />
          Accueil
        </Link>
        <Link
          href="/recherche"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/20 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-200 transition-all duration-300 hover:border-[var(--gold)]/40 hover:text-[var(--gold-light)]"
        >
          <Search className="size-4" />
          Rechercher
        </Link>
      </div>
    </main>
  );
}
