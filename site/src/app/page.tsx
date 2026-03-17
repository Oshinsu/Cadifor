import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenText,
  Crown,
  Globe,
  MapPin,
  ScrollText,
  Swords,
  Shield,
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
  { name: "Aberthol", years: "573-622", epithet: "Le Vieux Lion", slug: "01_aberthol", era: "Fondation" },
  { name: "Viki", years: "622-673", epithet: "La Joie d'Acier", slug: "02_viki", era: "Fondation" },
  { name: "Andrea I", years: "673-676", epithet: "La Rougissante", slug: "05_andrea_rougissante", era: "Consolidation" },
  { name: "Andrea II", years: "676-710", epithet: "L'Erudite", slug: "06_andrea_erudite", era: "Consolidation" },
  { name: "Andrea III", years: "710-767", epithet: "La Juste", slug: "07_andrea_juste", era: "L'Age d'Or" },
  { name: "Andrea IV", years: "767-815", epithet: "La Victorieuse", slug: "08_andrea_victorieuse", era: "L'Age d'Or" },
  { name: "Andrea V", years: "815-825", epithet: "La Juste II", slug: "09_andrea_juste_2", era: "L'Age d'Or" },
  { name: "Banni", years: "825-859", epithet: "Le Porteur", slug: "10_banni", era: "Tourment" },
  { name: "Benjamin", years: "859-909", epithet: "Le Cruel", slug: "11_benjamin", era: "Fer et Sang" },
  { name: "Marjory", years: "909-943", epithet: "L'Imperiale", slug: "12_marjory", era: "Haut Empire" },
  { name: "Rose", years: "943-953+", epithet: "L'Absolue", slug: "13_rose", era: "Haut Empire" },
];

const CADIFOR_WISDOMS = [
  { text: "Le regime ne veut pas seulement capter la richesse ; il veut gouverner la maniere dont elle circule, se raconte et se croit.", attribution: "Chronique imperiale" },
  { text: "On ne brise pas un Cadifor. On le forge.", attribution: "Devise non-officielle de la Maison" },
  { text: "Quatre siecles de sang verse, de traites signes et de couronnes prises — voila ce que coute un empire.", attribution: "Andrea III, a ses conseillers" },
  { text: "La carte n'est pas le territoire, mais celui qui tient la plume decide ou passent les frontieres.", attribution: "Benjamin le Cruel" },
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

  const wisdom = CADIFOR_WISDOMS[0];

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
      {/* ─── Epic Hero ──────────────────────────────────────── */}
      <section className="grain relative overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-black/30 px-8 py-28 md:px-14 md:py-36">
        {/* Hero background */}
        <Image
          src="/assets/scenes/hero_homepage.png"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-30"
          sizes="100vw"
          priority
        />
        {/* Cinematic overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgb(10,9,8)] via-[rgb(10,9,8)]/85 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10,9,8)] via-transparent to-[rgb(10,9,8)]/30" />

        {/* Corner accents — heraldic */}
        <div className="pointer-events-none absolute left-6 top-6 size-20 border-l-2 border-t-2 border-[var(--gold)]/15" />
        <div className="pointer-events-none absolute bottom-6 right-6 size-20 border-b-2 border-r-2 border-[var(--gold)]/15" />
        <div className="pointer-events-none absolute right-6 top-6 size-12 border-r border-t border-[var(--gold)]/10" />
        <div className="pointer-events-none absolute bottom-6 left-6 size-12 border-b border-l border-[var(--gold)]/10" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 size-[500px] rounded-full bg-[var(--gold)]/[0.06] blur-[150px] animate-pulse-glow" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-[var(--gold)]/[0.03] blur-[120px]" />

        <div className="relative max-w-4xl">
          {/* Royal crest badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/[0.06] px-5 py-2.5 text-xs uppercase tracking-[0.3em] text-[var(--gold-light)] backdrop-blur-sm">
            <Image
              src="/assets/heraldry/heraldry_cadifor_sigil.png"
              alt="Blason Cadifor"
              width={28}
              height={28}
              className="opacity-90"
            />
            <span className="h-4 w-px bg-[var(--gold)]/20" />
            Maison Cadifor — An 583 de l&apos;Ere Presente
          </div>

          <h1 className="max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight text-[var(--ivory)] md:text-7xl lg:text-8xl">
            Le Haut{" "}
            <span className="relative inline-block text-[var(--gold)]">
              Royaume
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-[var(--gold)]/50 via-[var(--gold)] to-[var(--gold)]/50" />
            </span>
            <br />
            <span className="text-slate-400">de Cadifor</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400/90">
            Quatre siecles de sang, de fer et de sagesse. {totalEntries} entrees
            derivees de 997 pages de lore brut — une dynastie forgee dans la guerre,
            cimentee par l&apos;ambition, immortalisee par la plume.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/scenes"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--deep)] shadow-lg shadow-[var(--gold)]/25 transition-all duration-300 hover:bg-[var(--gold-light)] hover:shadow-[var(--gold)]/40 hover:shadow-xl"
            >
              <Swords className="size-4" />
              Entrer par les scenes
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/encyclopedie"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/[0.04] px-8 py-4 text-sm uppercase tracking-[0.2em] text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-[var(--gold)]/40 hover:bg-[var(--gold)]/[0.08] hover:text-[var(--gold-light)]"
            >
              <BookOpenText className="size-4" />
              Explorer l&apos;encyclopedie
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats ribbon ────────────────────────────────────── */}
      <section className="stagger mt-10 grid gap-4 md:grid-cols-5">
        <StatCard label="Souverains" value={characterCount} icon={<Crown className="size-5" />} />
        <StatCard label="Scenes canoniques" value={sceneCount} icon={<ScrollText className="size-5" />} />
        <StatCard label="Nations" value={nationCount} icon={<Globe className="size-5" />} />
        <StatCard label="Cites" value={villeCount} icon={<MapPin className="size-5" />} />
        <StatCard label="Corpus total" value={totalEntries} icon={<BookOpenText className="size-5" />} />
      </section>

      {/* ─── Epigraph ────────────────────────────────────────── */}
      <section className="mt-20" data-reveal>
        <div className="divider-ornament mb-6">
          <span className="divider-ornament-diamond" />
        </div>
        <blockquote className="epigraph mx-auto max-w-3xl">
          <p className="epigraph-text">
            &laquo; {wisdom.text} &raquo;
          </p>
          <p className="epigraph-attribution">— {wisdom.attribution}</p>
        </blockquote>
        <div className="divider-ornament mt-6">
          <span className="divider-ornament-diamond" />
        </div>
      </section>

      {/* ─── Dynasty timeline strip ──────────────────────────── */}
      <section className="mt-20" data-reveal>
        <div className="mb-10">
          <p className="section-label">Lignee souveraine</p>
          <h2 className="mt-2 font-serif text-4xl text-[var(--ivory)] md:text-5xl">
            La dynastie Cadifor
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            Onze souverains. Quatre siecles de pouvoir. Du chevalier errant au trone imperial.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-3" style={{ minWidth: "max-content" }}>
            {DYNASTY_TIMELINE.map((ruler, i) => {
              const portrait = resolveEntryImage(ruler.slug, "personnages");
              return (
                <Link
                  key={ruler.slug}
                  href={`/encyclopedie/personnages/${ruler.slug}`}
                  className="card-imperial group relative flex w-40 shrink-0 flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025]"
                >
                  {/* Top accent */}
                  <div className="absolute -top-px left-1/2 h-[2px] w-10 -translate-x-1/2 rounded-full bg-[var(--gold)]/30" />

                  {/* Era badge */}
                  <div className="absolute right-2 top-2 z-10 rounded-full bg-black/60 px-2 py-0.5 text-[8px] uppercase tracking-[0.2em] text-[var(--gold)]/60 backdrop-blur-sm">
                    {ruler.era}
                  </div>

                  {portrait && (
                    <div className="relative h-36 w-full overflow-hidden">
                      <Image
                        src={`/assets/${portrait}`}
                        alt={ruler.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        sizes="160px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,9,8)] via-[rgb(10,9,8)]/20 to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-4">
                    <span className="mb-1 font-serif text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/40">
                      {["I","II","III","IV","V","VI","VII","VIII","IX","X","XI"][i]}
                    </span>
                    <span className="font-serif text-lg text-slate-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                      {ruler.name}
                    </span>
                    <span className="text-[11px] italic text-slate-500">
                      {ruler.epithet}
                    </span>
                    <span className="mt-auto pt-2 text-[10px] tabular-nums text-slate-600">
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
        <section className="mt-20" data-reveal>
          {(() => {
            const sceneImage = resolveEntryImage(featuredScene.slug, "scenes");
            return (
              <Link
                href={`/scenes/${featuredScene.slug}`}
                className="card-imperial group relative block overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[var(--gold)]/[0.02]"
              >
                {sceneImage && (
                  <>
                    <Image
                      src={`/assets/${sceneImage}`}
                      alt=""
                      fill
                      className="pointer-events-none object-cover opacity-30 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgb(10,9,8)] via-[rgb(10,9,8)]/70 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10,9,8)] via-transparent to-transparent" />
                  </>
                )}
                <div className="relative p-10 md:p-16">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/15 bg-[var(--gold)]/[0.06] px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-[var(--gold)]">
                    <Shield className="size-3" />
                    Scene canonique
                  </div>
                  <h2 className="font-serif text-4xl text-[var(--ivory)] transition-colors duration-300 group-hover:text-[var(--gold-light)] md:text-5xl lg:text-6xl">
                    {featuredScene.title}
                  </h2>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
                    {featuredScene.excerpt}
                  </p>
                  <span className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/[0.05] px-5 py-2 text-sm uppercase tracking-[0.2em] text-[var(--gold)]/80 transition-all duration-300 group-hover:border-[var(--gold)]/40 group-hover:text-[var(--gold)]">
                    Lire la scene
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })()}
        </section>
      )}

      {/* ─── Top characters ──────────────────────────────────── */}
      <section className="mt-24" data-reveal>
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Figures de seuil</p>
            <h2 className="mt-2 font-serif text-4xl text-[var(--ivory)]">
              Les souverains et leurs ombres
            </h2>
            <p className="mt-2 max-w-lg text-sm text-slate-500">
              Ceux qui ont fait et defait le Haut Royaume.
            </p>
          </div>
          <Link
            href="/encyclopedie/personnages"
            className="group inline-flex shrink-0 items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 hover:text-[var(--gold)]"
          >
            Tous les personnages
            <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* ─── Second epigraph ──────────────────────────────────── */}
      <section className="mt-24" data-reveal>
        <div className="divider-ornament mb-6">
          <span className="divider-ornament-diamond" />
        </div>
        <blockquote className="epigraph mx-auto max-w-3xl">
          <p className="epigraph-text">
            &laquo; {CADIFOR_WISDOMS[1].text} &raquo;
          </p>
          <p className="epigraph-attribution">— {CADIFOR_WISDOMS[1].attribution}</p>
        </blockquote>
        <div className="divider-ornament mt-6">
          <span className="divider-ornament-diamond" />
        </div>
      </section>

      {/* ─── Scenes ──────────────────────────────────────────── */}
      <section className="mt-24" data-reveal>
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Chroniques</p>
            <h2 className="mt-2 font-serif text-4xl text-[var(--ivory)]">Scenes fortes</h2>
            <p className="mt-2 max-w-lg text-sm text-slate-500">
              Les moments qui ont forge la legende.
            </p>
          </div>
          <Link
            href="/scenes"
            className="group inline-flex shrink-0 items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 hover:text-[var(--gold)]"
          >
            Toutes les scenes
            <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
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
        <section className="mt-24" data-reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="section-label">Noeuds du corpus</p>
              <h2 className="mt-2 font-serif text-4xl text-[var(--ivory)]">Les plus cites</h2>
              <p className="mt-2 max-w-lg text-sm text-slate-500">
                Les entrees les plus referencees a travers le corpus.
              </p>
            </div>
            <Link
              href="/recherche"
              className="group inline-flex shrink-0 items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 hover:text-[var(--gold)]"
            >
              Rechercher
              <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
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
      <section className="mt-24" data-reveal>
        <div className="mb-10">
          <p className="section-label">Graphe du corpus</p>
          <h2 className="mt-2 font-serif text-4xl text-[var(--ivory)]">Collections</h2>
          <p className="mt-2 max-w-lg text-sm text-slate-500">
            {encyclopaediaCollections.length} collections thematiques. Tout le savoir du Haut Royaume, classe et indexe.
          </p>
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--gold)]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/50">
                    {collection}
                  </div>
                  <div className="mt-2 font-serif text-3xl text-slate-100 transition-colors duration-300 group-hover:text-[var(--gold-light)]">
                    {getCollectionLabel(collection)}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-500">
                    {getCollectionDescription(collection)}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="rounded-full border border-[var(--gold)]/15 bg-[var(--gold)]/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--gold)]">
                      {count} entrees
                    </span>
                    <ArrowRight className="size-3 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--gold)]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── Bottom wisdom ────────────────────────────────────── */}
      <section className="mt-28">
        <div className="divider-ornament mb-8">
          <span className="divider-ornament-diamond" />
        </div>
        <blockquote className="epigraph mx-auto max-w-3xl">
          <p className="epigraph-text">
            &laquo; {CADIFOR_WISDOMS[2].text} &raquo;
          </p>
          <p className="epigraph-attribution">— {CADIFOR_WISDOMS[2].attribution}</p>
        </blockquote>
        <div className="divider-ornament mt-8">
          <span className="divider-ornament-diamond" />
        </div>
      </section>
    </main>
  );
}
