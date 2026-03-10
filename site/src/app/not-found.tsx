import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6">
      <div className="mb-4 font-serif text-8xl text-violet-500/30">404</div>
      <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
        Introuvable
      </p>
      <h1 className="mt-3 font-serif text-5xl text-stone-50">Page absente</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
        Cette route n&apos;a pas encore d&apos;entree correspondante dans le corpus
        Cadifor. Le Haut Royaume ne couvre pas encore tous les chemins.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm uppercase tracking-[0.18em] text-stone-100 transition hover:border-violet-300/30 hover:text-violet-200"
      >
        <ArrowLeft className="size-4" />
        Retour a l&apos;accueil
      </Link>
    </main>
  );
}
