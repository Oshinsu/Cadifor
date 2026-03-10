import Link from "next/link";
import { ArrowRight, BookOpenText, Crown, Globe, Scroll } from "lucide-react";

const dossiers = [
  {
    title: "Le diner imperial",
    href: "/scenes/diner_imperial",
    description:
      "Entree editoriale par la scene-matrice : pouvoir, filiation, gout, doctrine et architecture du monde en une seule table.",
    tag: "Scene",
    icon: Scroll,
  },
  {
    title: "La machine cadiforienne",
    href: "/encyclopedie/meta/machine_cadiforienne",
    description:
      "Comment la dynastie a construit un systeme de gouvernance, de talent et de succession qui a tenu quatre siecles.",
    tag: "Dossier",
    icon: Crown,
  },
  {
    title: "Etats du monde",
    href: "/encyclopedie/meta/etat_du_monde_950",
    description:
      "Photographie geopolitique d'Azeroth a l'avenement de Rose : empires, factions, equilibres et menaces.",
    tag: "Geopolitique",
    icon: Globe,
  },
  {
    title: "Le traite roseen",
    href: "/encyclopedie/meta/traite_roseen",
    description:
      "Le traite philosophique en sept livres de Rose : conscience, pouvoir, ethique et condition du souverain absolu.",
    tag: "Philosophie",
    icon: BookOpenText,
  },
  {
    title: "Progression du PDF",
    href: "/canon/progression-pdf",
    description:
      "Vue systeme du chantier de lecture, des plages verifiees et du travail restant sur les 997 pages fondatrices.",
    tag: "Systeme",
    icon: Scroll,
  },
  {
    title: "Notation des scenes",
    href: "/canon/notation-scenes",
    description:
      "Grille marjoryenne de force dramatique, ordre de reecriture et priorites canoniques.",
    tag: "Canon",
    icon: Scroll,
  },
];

const parcours = [
  {
    title: "Parcours dynastique",
    description: "D'Aberthol a Rose, les 11 souverains en fiches.",
    href: "/encyclopedie",
    steps: ["Aberthol", "Viki", "Andrea I", "Andrea II", "Andrea III", "Andrea IV", "Banni", "Benjamin", "Marjory", "Rose"],
  },
  {
    title: "Parcours geographique",
    description: "De New Avalon a l'Empire mondial : territoires, villes, duches.",
    href: "/encyclopedie",
    steps: ["Nouvelle Avalon", "Darrow", "Sylve de l'Est", "Stormwind", "Lordaeron", "Stormgarde"],
  },
];

export default function DossiersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <div className="mb-14 max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
          Editorial
        </p>
        <h1 className="font-serif text-5xl text-[var(--ivory)]">Dossiers</h1>
        <p className="mt-4 text-lg leading-8 text-stone-400">
          Parcours de lecture et points d&apos;entree editoriaux composes au-dessus
          du graphe de contenu.
        </p>
      </div>

      <div className="stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dossiers.map((dossier) => (
          <Link
            key={dossier.title}
            href={dossier.href}
            className="card-imperial group overflow-hidden rounded-[2rem] border border-white/[0.06] bg-white/[0.025] p-7"
          >
            <div className="mb-4 flex items-center gap-3">
              <dossier.icon className="size-4 text-[var(--gold)]/70" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
                {dossier.tag}
              </span>
            </div>
            <h2 className="font-serif text-3xl text-stone-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
              {dossier.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-500">
              {dossier.description}
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-600 transition-colors duration-300 group-hover:text-[var(--gold)]">
              Lire
              <ArrowRight className="size-3" />
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-20">
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
            Fils de lecture
          </p>
          <h2 className="font-serif text-4xl text-[var(--ivory)]">Parcours</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {parcours.map((parcour) => (
            <div
              key={parcour.title}
              className="rounded-[2rem] border border-white/[0.06] bg-white/[0.025] p-8"
            >
              <h3 className="font-serif text-2xl text-[var(--gold-light)]">
                {parcour.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-stone-500">
                {parcour.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {parcour.steps.map((step, i) => (
                  <span
                    key={step}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/10 bg-[var(--gold)]/[0.04] px-3 py-1 text-xs text-stone-400"
                  >
                    <span className="text-[10px] text-[var(--gold)]/50">{i + 1}</span>
                    {step}
                  </span>
                ))}
              </div>
              <Link
                href={parcour.href}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--gold)] transition-colors duration-300 hover:text-[var(--gold-light)]"
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
