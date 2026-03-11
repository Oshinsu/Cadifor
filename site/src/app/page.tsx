import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenText,
  Crown,
  Globe,
  MapPin,
  ScrollText,
} from "lucide-react";
import { EntryCard, StatCard } from "@/components/cards";
import { resolveEntryImage } from "@/lib/images";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionDescription,
  getCollectionLabel,
  getFeaturedScene,
  getMostReferencedEntries,
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
  const totalEntries = getTotalEntryCount();
  const nationCount = getCollection("nations").length;
  const villeCount = getCollection("villes").length;
  const sceneCount = getCollection("scenes").length;
  const characterCount = getCollection("personnages").length;
  const mostReferenced = getMostReferencedEntries(6);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-black/20 px-8 py-24 md:px-14">
        {/* Hero background image */}
        <Image
          src="/assets/scenes/hero_homepage.png"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgb(12,10,9)] via-[rgb(12,10,9)]/80 to-transparent" />

        {/* Corner accents */}
        <div className="pointer-events-none absolute left-6 top-6 size-16 border-l border-t border-[var(--gold)]/20" />
        <div className="pointer-events-none absolute bottom-6 right-6 size-16 border-b border-r border-[var(--gold)]/20" />

        {/* Gold radial glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[var(--gold)]/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-[var(--gold)]/[0.04] blur-[100px]" />

        <div className="relative max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/[0.08] px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--gold-light)]">
            <Image
              src="/assets/heraldry/heraldry_cadifor_sigil.png"
              alt="Blason Cadifor"
              width={24}
              height={24}
              className="opacity-80"
            />
            Maison Cadifor — 583 a.p.
          </div>

          <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] text-[var(--ivory)] md:text-7xl">
            Le Haut Royaume{" "}
            <span className="text-[var(--gold)]">
              de Cadifor
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-400">
            Encyclopedie vivante du Haut Royaume. {totalEntries} entrees derivees
            de 997 pages de lore brut, organisees en {encyclopaediaCollections.length} collections.
            Quatre siecles de dynastie, de Nouvelle-Avalon a l&apos;Empire mondial.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/scenes"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--deep)] shadow-lg shadow-[var(--gold)]/20 transition-all duration-300 hover:bg-[var(--gold-light)] hover:shadow-[var(--gold)]/30"
            >
              Entrer par les scenes
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/encyclopedie"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/20 px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-stone-200 transition-all duration-300 hover:border-[var(--gold)]/40 hover:text-[var(--gold-light)]"
            >
              Explorer l&apos;encyclopedie
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats ribbon ────────────────────────────────────── */}
      <section className="stagger mt-10 grid gap-4 md:grid-cols-5">
        <StatCard label="Personnages" value={characterCount} icon={<Crown className="size-5" />} />
        <StatCard label="Scenes" value={sceneCount} icon={<ScrollText className="size-5" />} />
        <StatCard label="Nations" value={nationCount} icon={<Globe className="size-5" />} />
        <StatCard label="Villes" value={villeCount} icon={<MapPin className="size-5" />} />
        <StatCard label="Total corpus" value={totalEntries} icon={<BookOpenText className="size-5" />} />
      </section>

      {/* ─── Dynasty timeline strip ──────────────────────────── */}
      <section className="mt-20" data-reveal>
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
            Lignee
          </p>
          <h2 className="font-serif text-4xl text-[var(--ivory)]">La dynastie Cadifor</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-3" style={{ minWidth: "max-content" }}>
            {DYNASTY_TIMELINE.map((ruler, i) => {
              const portrait = resolveEntryImage(ruler.slug, "personnages");
              return (
                <Link
                  key={ruler.slug}
                  href={`/encyclopedie/personnages/${ruler.slug}`}
                  className="card-imperial group relative flex w-36 shrink-0 flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025]"
                >
                  <div className="absolute -top-px left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[var(--gold)]/30" />
                  {portrait && (
                    <div className="relative h-28 w-full overflow-hidden">
                      <Image
                        src={`/assets/${portrait}`}
                        alt={ruler.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="144px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(12,10,9)] via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-4">
                    <span className="mb-1 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                      {i + 1}e
                    </span>
                    <span className="font-serif text-lg text-stone-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                      {ruler.name}
                    </span>
                    <span className="text-[11px] italic text-stone-500">
                      {ruler.epithet}
                    </span>
                    <span className="mt-auto pt-2 text-[10px] text-stone-600">
                      {ruler.years}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Featured scene ───────────────────────────────────── */}
      {featuredScene && (
        <section className="mt-20">
          {(() => {
            const sceneImage = resolveEntryImage(featuredScene.slug, "scenes");
            return (
              <Link
                href={`/scenes/${featuredScene.slug}`}
                className="card-imperial group relative block overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[var(--gold)]/[0.03]"
              >
                {sceneImage && (
                  <>
                    <Image
                      src={`/assets/${sceneImage}`}
                      alt=""
                      fill
                      className="pointer-events-none object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgb(12,10,9)] via-[rgb(12,10,9)]/60 to-transparent" />
                  </>
                )}
                <div className="relative p-10 md:p-14">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--gold)]">
                    Scene d&apos;entree
                  </p>
                  <h2 className="font-serif text-4xl text-[var(--ivory)] transition-colors duration-300 group-hover:text-[var(--gold-light)] md:text-5xl">
                    {featuredScene.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-stone-400">
                    {featuredScene.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[var(--gold)]/80 transition-colors duration-300 group-hover:text-[var(--gold)]">
                    Lire la scene
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            );
          })()}
        </section>
      )}

      {/* ─── Top characters ──────────────────────────────────── */}
      <section className="mt-20" data-reveal>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
              Figures de seuil
            </p>
            <h2 className="font-serif text-4xl text-[var(--ivory)]">Personnages</h2>
          </div>
          <Link
            href="/encyclopedie"
            className="text-sm uppercase tracking-[0.2em] text-stone-500 transition-colors duration-300 hover:text-[var(--gold)]"
          >
            Tout voir
          </Link>
        </div>

        <div className="stagger grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
      <section className="mt-20" data-reveal>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
              Bibliotheque
            </p>
            <h2 className="font-serif text-4xl text-[var(--ivory)]">Scenes fortes</h2>
          </div>
          <Link
            href="/scenes"
            className="text-sm uppercase tracking-[0.2em] text-stone-500 transition-colors duration-300 hover:text-[var(--gold)]"
          >
            Toutes les scenes
          </Link>
        </div>

        <div className="stagger grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sceneCandidates.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} href={`/scenes/${entry.slug}`} />
          ))}
        </div>
      </section>

      {/* ─── Most referenced entries ──────────────────────────── */}
      {mostReferenced.length > 0 && (
        <section className="mt-20" data-reveal>
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
                Nœuds du corpus
              </p>
              <h2 className="font-serif text-4xl text-[var(--ivory)]">Les plus cites</h2>
            </div>
            <Link
              href="/recherche"
              className="text-sm uppercase tracking-[0.2em] text-stone-500 transition-colors duration-300 hover:text-[var(--gold)]"
            >
              Rechercher
            </Link>
          </div>

          <div className="stagger grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {mostReferenced.map((entry) => (
              <EntryCard
                key={`${entry.collection}/${entry.slug}`}
                entry={entry}
                href={entry.collection === "scenes" ? `/scenes/${entry.slug}` : `/encyclopedie/${entry.collection}/${entry.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* ─── Collections overview ────────────────────────────── */}
      <section className="mt-20" data-reveal>
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
            Graphe du corpus
          </p>
          <h2 className="font-serif text-4xl text-[var(--ivory)]">Collections</h2>
        </div>

        <div className="stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {encyclopaediaCollections.map((collection) => {
            const count = getCollection(collection).length;
            if (count === 0) return null;

            return (
              <Link
                key={collection}
                href={`/encyclopedie/${collection}`}
                className="card-imperial group relative overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] p-7"
              >
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
                    {collection}
                  </div>
                  <div className="mt-2 font-serif text-3xl text-stone-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                    {getCollectionLabel(collection)}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-stone-500">
                    {getCollectionDescription(collection)}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="rounded-full border border-[var(--gold)]/15 bg-[var(--gold)]/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--gold)]">{count} entrees</span>
                    <ArrowRight className="size-3 text-stone-600 transition-colors duration-300 group-hover:text-[var(--gold)]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── Bottom quote ────────────────────────────────────── */}
      <section className="mt-24">
        <div className="divider-gold mb-10" />
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-stone-400 md:text-3xl">
            &laquo; Le regime ne veut pas seulement capter la richesse ; il veut gouverner la maniere dont elle circule, se raconte et se croit. &raquo;
          </p>
        </blockquote>
        <div className="divider-gold mt-10" />
      </section>
    </main>
  );
}
