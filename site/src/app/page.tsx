import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Crown,
  Globe,
  MapPin,
  ScrollText,
} from "lucide-react";
import { EntryCard, HeroCard } from "@/components/cards";
import { getCollectionTheme } from "@/lib/colors";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionDescription,
  getCollectionLabel,
  getFeaturedScene,
  getPdfProgressDocument,
  getSceneCandidates,
  getTopCharacters,
  getTotalEntryCount,
} from "@/lib/content";

const DYNASTY_TIMELINE = [
  { name: "Aberthol", years: "573–622", epithet: "Le Vieux Lion", slug: "01_aberthol" },
  { name: "Viki", years: "622–673", epithet: "La Joie d'Acier", slug: "02_viki" },
  { name: "Andrea I", years: "673–676", epithet: "La Rougissante", slug: "05_andrea_rougissante" },
  { name: "Andrea II", years: "676–710", epithet: "L'Erudite", slug: "06_andrea_erudite" },
  { name: "Andrea III", years: "710–767", epithet: "La Juste", slug: "07_andrea_juste" },
  { name: "Andrea IV", years: "767–815", epithet: "La Victorieuse", slug: "08_andrea_victorieuse" },
  { name: "Andrea V", years: "815–825", epithet: "La Juste II", slug: "09_andrea_juste_2" },
  { name: "Banni", years: "825–859", epithet: "Le Porteur", slug: "10_banni" },
  { name: "Benjamin", years: "859–909", epithet: "Le Cruel", slug: "11_benjamin" },
  { name: "Marjory", years: "909–943", epithet: "L'Imperiale", slug: "12_marjory" },
  { name: "Rose", years: "943–953+", epithet: "L'Absolue", slug: "13_rose" },
];

export default function HomePage() {
  const featuredScene = getFeaturedScene();
  const topCharacters = getTopCharacters(8);
  const sceneCandidates = getSceneCandidates(6);
  const progress = getPdfProgressDocument();
  const totalEntries = getTotalEntryCount();
  const nationCount = getCollection("nations").length;
  const villeCount = getCollection("villes").length;
  const sceneCount = getCollection("scenes").length;
  const characterCount = getCollection("personnages").length;

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden rounded-[2rem] border border-white/8 bg-black/20 px-8 py-20 md:px-14">
        <div className="absolute -right-24 -top-24 size-96 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute -bottom-32 -left-16 size-72 rounded-full bg-cyan-400/8 blur-[100px]" />

        <div className="relative max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-300/25 bg-violet-300/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-violet-200">
            <div className="size-1.5 rounded-full bg-violet-400" />
            Maison Cadifor — 583 a.p.
          </div>

          <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] text-stone-50 md:text-7xl">
            Le Haut Royaume{" "}
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              d&apos;Azeroth
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Encyclopedie vivante du Haut Royaume. {totalEntries} entrees derivees
            de 997 pages de lore brut, organisees en {encyclopaediaCollections.length} collections.
            Quatre siecles de dynastie, de Nouvelle-Avalon a l&apos;Empire mondial.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/scenes"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-violet-500/25 transition hover:from-violet-400 hover:to-violet-500"
            >
              Entrer par les scenes
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/encyclopedie"
              className="inline-flex items-center gap-3 rounded-full border border-white/12 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-100 transition hover:border-violet-300/30 hover:text-violet-200"
            >
              Explorer l&apos;encyclopedie
            </Link>
            <Link
              href="/recherche"
              className="inline-flex items-center gap-3 rounded-full border border-white/8 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-400 transition hover:border-white/15 hover:text-stone-200"
            >
              Recherche
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats ribbon ────────────────────────────────────── */}
      <section className="mt-10 grid gap-4 md:grid-cols-5">
        {[
          { label: "Personnages", value: characterCount, icon: Crown, color: "text-violet-300" },
          { label: "Scenes", value: sceneCount, icon: ScrollText, color: "text-amber-300" },
          { label: "Nations", value: nationCount, icon: Globe, color: "text-teal-300" },
          { label: "Villes", value: villeCount, icon: MapPin, color: "text-emerald-300" },
          { label: "Total corpus", value: totalEntries, icon: BookOpenText, color: "text-cyan-300" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
          >
            <item.icon className={`mb-4 size-4 ${item.color}`} />
            <div className="font-serif text-4xl text-stone-100">{item.value}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-500">
              {item.label}
            </div>
          </div>
        ))}
      </section>

      {/* ─── Dynasty timeline strip ──────────────────────────── */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.24em] text-violet-300/60">
            Lignee
          </p>
          <h2 className="font-serif text-4xl text-stone-50">La dynastie Cadifor</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-3" style={{ minWidth: "max-content" }}>
            {DYNASTY_TIMELINE.map((ruler, i) => (
              <Link
                key={ruler.slug}
                href={`/encyclopedie/personnages/${ruler.slug}`}
                className="group relative flex w-36 shrink-0 flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
              >
                <div className="absolute -top-px left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-violet-500/40" />
                <span className="mb-1 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                  {i + 1}e
                </span>
                <span className="font-serif text-lg text-stone-100 transition group-hover:text-violet-200">
                  {ruler.name}
                </span>
                <span className="text-[11px] italic text-stone-500">
                  {ruler.epithet}
                </span>
                <span className="mt-auto pt-2 text-[10px] text-stone-600">
                  {ruler.years}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured scene + progress ───────────────────────── */}
      {featuredScene ? (
        <section className="mt-16 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <HeroCard
            entry={featuredScene}
            href={`/scenes/${featuredScene.slug}`}
            label="Scene d'entree"
          />

          <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">
              Chantier
            </p>
            <h3 className="font-serif text-3xl text-stone-50">Progression PDF</h3>
            <p className="mt-4 text-base leading-8 text-stone-300">
              {progress?.excerpt ??
                "Le suivi du PDF fondateur est expose comme page systeme du site."}
            </p>
            <Link
              href="/canon/progression-pdf"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-100 transition hover:text-amber-200"
            >
              Voir la progression
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      ) : null}

      {/* ─── Top characters ──────────────────────────────────── */}
      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-violet-300/60">
              Figures de seuil
            </p>
            <h2 className="font-serif text-4xl text-stone-50">Personnages</h2>
          </div>
          <Link
            href="/encyclopedie"
            className="text-sm uppercase tracking-[0.2em] text-stone-400 transition hover:text-stone-100"
          >
            Tout voir
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {topCharacters.map((entry) => (
            <EntryCard
              key={entry.slug}
              entry={entry}
              href={`/encyclopedie/personnages/${entry.slug}`}
            />
          ))}
        </div>
      </section>

      {/* ─── Scenes ──────────────────────────────────────────── */}
      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-amber-300/60">
              Bibliotheque
            </p>
            <h2 className="font-serif text-4xl text-stone-50">Scenes fortes</h2>
          </div>
          <Link
            href="/scenes"
            className="text-sm uppercase tracking-[0.2em] text-stone-400 transition hover:text-stone-100"
          >
            Toutes les scenes
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sceneCandidates.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} href={`/scenes/${entry.slug}`} />
          ))}
        </div>
      </section>

      {/* ─── Collections overview ────────────────────────────── */}
      <section className="mt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/60">
            Graphe du corpus
          </p>
          <h2 className="font-serif text-4xl text-stone-50">Collections</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {encyclopaediaCollections.map((collection) => {
            const count = getCollection(collection).length;
            if (count === 0) return null;
            const theme = getCollectionTheme(collection);

            return (
              <Link
                key={collection}
                href="/encyclopedie"
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-6 transition hover:border-white/15 hover:bg-white/[0.05]"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
                <div className="relative">
                  <div className={`text-xs uppercase tracking-[0.24em] ${theme.iconColor}`}>
                    {collection}
                  </div>
                  <div className="mt-2 font-serif text-3xl text-stone-50">
                    {getCollectionLabel(collection)}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-stone-400">
                    {getCollectionDescription(collection)}
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs text-stone-500">{count} entrees</span>
                    <ArrowRight className="size-3 text-stone-600 transition group-hover:text-stone-400" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
