import Link from "next/link";
import { ArrowRight, BookOpenText, Crown, Globe, MapPin, Scroll } from "lucide-react";

const dossiers = [
  {
    title: "Le diner imperial",
    href: "/scenes/diner_imperial",
    description:
      "Entree editoriale par la scene-matrice : pouvoir, filiation, gout, doctrine et architecture du monde en une seule table.",
    tag: "Scene",
    icon: Scroll,
    color: "text-amber-300",
    borderColor: "border-amber-300/15",
    bgColor: "bg-amber-300/[0.04]",
  },
  {
    title: "La machine cadiforienne",
    href: "/encyclopedie/meta/machine_cadiforienne",
    description:
      "Comment la dynastie a construit un systeme de gouvernance, de talent et de succession qui a tenu quatre siecles.",
    tag: "Dossier",
    icon: Crown,
    color: "text-violet-300",
    borderColor: "border-violet-300/15",
    bgColor: "bg-violet-300/[0.04]",
  },
  {
    title: "Etats du monde",
    href: "/encyclopedie/meta/etat_du_monde_950",
    description:
      "Photographie geopolitique d'Azeroth a l'avenement de Rose : empires, factions, equilibres et menaces.",
    tag: "Geopolitique",
    icon: Globe,
    color: "text-teal-300",
    borderColor: "border-teal-300/15",
    bgColor: "bg-teal-300/[0.04]",
  },
  {
    title: "Le traite roseen",
    href: "/encyclopedie/meta/traite_roseen",
    description:
      "Le traite philosophique en sept livres de Rose : conscience, pouvoir, ethique et condition du souverain absolu.",
    tag: "Philosophie",
    icon: BookOpenText,
    color: "text-rose-300",
    borderColor: "border-rose-300/15",
    bgColor: "bg-rose-300/[0.04]",
  },
  {
    title: "Progression du PDF",
    href: "/canon/progression-pdf",
    description:
      "Vue systeme du chantier de lecture, des plages verifiees et du travail restant sur les 997 pages fondatrices.",
    tag: "Systeme",
    icon: Scroll,
    color: "text-cyan-300",
    borderColor: "border-cyan-300/15",
    bgColor: "bg-cyan-300/[0.04]",
  },
  {
    title: "Notation des scenes",
    href: "/canon/notation-scenes",
    description:
      "Grille marjoryenne de force dramatique, ordre de reecriture et priorites canoniques.",
    tag: "Canon",
    icon: Scroll,
    color: "text-sky-300",
    borderColor: "border-sky-300/15",
    bgColor: "bg-sky-300/[0.04]",
  },
];

const parcours = [
  {
    title: "Parcours dynastique",
    description: "D'Aberthol a Rose, les 11 souverains en fiches.",
    href: "/encyclopedie",
    steps: ["Aberthol", "Viki", "Andrea I", "Andrea II", "Andrea III", "Andrea IV", "Banni", "Benjamin", "Marjory", "Rose"],
    color: "text-violet-300",
  },
  {
    title: "Parcours geographique",
    description: "De New Avalon a l'Empire mondial : territoires, villes, duches.",
    href: "/encyclopedie",
    steps: ["Nouvelle Avalon", "Darrow", "Sylve de l'Est", "Stormwind", "Lordaeron", "Stormgarde"],
    color: "text-emerald-300",
  },
];

export default function DossiersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <div className="mb-12 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-amber-300/60">
          Editorial
        </p>
        <h1 className="font-serif text-5xl text-stone-50">Dossiers</h1>
        <p className="mt-4 text-lg leading-8 text-stone-300">
          Parcours de lecture et points d&apos;entree editoriaux composes au-dessus
          du graphe de contenu.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dossiers.map((dossier) => (
          <Link
            key={dossier.title}
            href={dossier.href}
            className={`group overflow-hidden rounded-[2rem] border p-6 transition hover:bg-white/[0.04] ${dossier.borderColor} ${dossier.bgColor}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <dossier.icon className={`size-4 ${dossier.color}`} />
              <span className={`text-xs uppercase tracking-[0.24em] ${dossier.color}`}>
                {dossier.tag}
              </span>
            </div>
            <h2 className="font-serif text-3xl text-stone-50 transition group-hover:text-amber-200">
              {dossier.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-400">
              {dossier.description}
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 transition group-hover:text-amber-300">
              Lire
              <ArrowRight className="size-3" />
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Fils de lecture
          </p>
          <h2 className="font-serif text-4xl text-stone-50">Parcours</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {parcours.map((parcour) => (
            <div
              key={parcour.title}
              className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8"
            >
              <h3 className={`font-serif text-2xl ${parcour.color}`}>
                {parcour.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-stone-400">
                {parcour.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {parcour.steps.map((step, i) => (
                  <span
                    key={step}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-stone-400"
                  >
                    <span className="text-[10px] text-stone-600">{i + 1}</span>
                    {step}
                  </span>
                ))}
              </div>
              <Link
                href={parcour.href}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-200 transition hover:text-amber-100"
              >
                Explorer
                <ArrowRight className="size-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
