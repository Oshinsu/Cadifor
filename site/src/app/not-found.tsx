import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6">
      <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
        Introuvable
      </p>
      <h1 className="mt-4 font-serif text-5xl text-stone-50">Page absente</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
        Cette route n&apos;a pas encore d&apos;entree correspondante dans le corpus
        Cadifor.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-white/12 px-5 py-3 text-sm uppercase tracking-[0.18em] text-stone-100"
      >
        Retour a l&apos;accueil
      </Link>
    </main>
  );
}
