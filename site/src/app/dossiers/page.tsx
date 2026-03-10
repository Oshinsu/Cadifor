import Link from "next/link";

const dossiers = [
  {
    title: "Le diner imperial",
    href: "/scenes/diner_imperial",
    description:
      "Entree editoriale par la scene-matrice : pouvoir, filiation, gout, doctrine et architecture du monde en une seule table.",
  },
  {
    title: "Progression du PDF",
    href: "/canon/progression-pdf",
    description:
      "Vue systeme du chantier de lecture, des plages verifiees et du travail restant.",
  },
  {
    title: "Notation des scenes",
    href: "/canon/notation-scenes",
    description:
      "Grille marjoryenne de force dramatique, ordre de reecriture et priorites canoniques.",
  },
];

export default function DossiersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
          Editorial
        </p>
        <h1 className="font-serif text-5xl text-stone-50">Dossiers</h1>
        <p className="mt-4 text-lg leading-8 text-stone-300">
          Le site peut composer des parcours de lecture au-dessus du graphe de
          contenu sans dupliquer le canon source.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dossiers.map((dossier) => (
          <Link
            key={dossier.title}
            href={dossier.href}
            className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 transition hover:border-amber-300/25"
          >
            <h2 className="font-serif text-3xl text-stone-50">{dossier.title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-400">
              {dossier.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
