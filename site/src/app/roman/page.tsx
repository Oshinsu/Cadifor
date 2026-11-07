import { pageMetadata, DESCRIPTION } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { getNovel, getChapterSummaries, chapterHref } from "@/lib/novel";
import { resolveNovelImage } from "@/lib/images";
import { ResumeReading } from "@/components/novel-reading";

export const metadata: Metadata = pageMetadata("/roman","La Maison des vivants — Le roman","Le premier livre de Cadifor : Aberthol, maréchal de Lordaeron, et les cinq filles qui feront vivre sa maison. Quarante chapitres à lire en ligne ou en EPUB.");

export default function RomanPage() {
  const book = getNovel();
  const chapters = getChapterSummaries();
  const cover = resolveNovelImage(1)!;
  return <main className="novel-index">
    <section className="novel-opening" aria-labelledby="novel-title">
      <div className="novel-opening-copy">
        <h1 id="novel-title">La Maison<br />des vivants</h1>
        <p className="novel-volume">Cadifor · Livre premier</p>
        <p className="novel-lead">À vingt-neuf ans, Aberthol commande les armées de Lordaeron. Il sait gagner une bataille. Il lui reste à apprendre ce qu’un roi peut lui reprendre — et ce qu’une maison doit garder.</p>
        <p className="novel-summary">Des conseils de Terenas aux greniers de Nouvelle-Avalon, sa vie se joue entre le service, l’orgueil et les cinq filles qui grandissent à sa table.</p>
        <div className="novel-actions">
          <Link className="novel-primary" href={chapterHref(chapters[0].slug)}>Commencer le livre <ArrowRight size={18} aria-hidden="true" /></Link>
          <a href="#sommaire">Les 40 chapitres <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <ResumeReading chapters={chapters} />
      </div>
      <figure className="novel-cover"><Image src={cover.src} alt="Aberthol au conseil de Lordaeron, attentif au rapport d’un intendant." width={1672} height={941} sizes="(max-width: 900px) 100vw, 55vw" priority /><figcaption>Lordaeron, an 583. Le service du roi.</figcaption></figure>
    </section>

    <section className="novel-edition" aria-label="À propos de cette édition">
      <p>Le texte intégral en quatre parties, accompagné d’une sélection de scènes photographiques. La lecture reprend là où vous vous êtes arrêté sur cet appareil.</p>
      <a href="/romans/cadifor-la-maison-des-vivants.epub" download><Download size={17} aria-hidden="true" /> Télécharger l’EPUB</a>
      <p className="novel-context">Une fanfiction dans l’univers alternatif de Warcraft, issue de la campagne Cadifor. Le roman et ses scènes développent le récit ; l’encyclopédie conserve les dossiers du monde.</p>
    </section>

    <section id="sommaire" className="novel-contents" aria-labelledby="contents-title">
      <div className="novel-section-heading"><h2 id="contents-title">Le livre</h2><span>40 chapitres</span></div>
      {book.parts.map(part => <section className="novel-part" key={part.number} aria-labelledby={`part-${part.number}`}>
        <h3 id={`part-${part.number}`}><span>{["I", "II", "III", "IV"][part.number - 1]}</span>{part.title}</h3>
        <ol start={part.start}>{chapters.filter(c => c.part === part.number).map(c => <li key={c.slug}><Link href={chapterHref(c.slug)} prefetch={false}><span className="novel-chapter-number">{String(c.number).padStart(2, "0")}</span><span>{c.title}</span><span className="novel-reading-time">{c.readingMinutes} min</span><ArrowRight size={16} aria-hidden="true" /></Link></li>)}</ol>
      </section>)}
    </section>
    <div className="novel-index-end"><Link href="/galerie#roman">Voir les scènes du roman <ArrowRight size={17} aria-hidden="true" /></Link><a href="/romans/cadifor-la-maison-des-vivants.txt" download>Télécharger le texte</a></div>
  </main>;
}
