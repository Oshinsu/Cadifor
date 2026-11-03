import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getNovel, getChapterSummaries, chapterHref } from "@/lib/novel";
import { resolveNovelImage } from "@/lib/images";
import { NovelReader } from "@/components/novel-reading";

export const dynamicParams = false;
export function generateStaticParams() { return getChapterSummaries().map(c => ({ chapter: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ chapter: string }> }): Promise<Metadata> {
  const { chapter: slug } = await params;
  const c = getNovel().chapters.find(c => c.slug === slug);
  if (!c) return {};
  const image = c.imageId ? resolveNovelImage(c.imageId) : null;
  return { title: `${c.number}. ${c.title} — La Maison des vivants`, description: c.paragraphs[0].slice(0, 170), openGraph: image ? { images: [image.src] } : undefined };
}

export default async function ChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: slug } = await params;
  const book = getNovel();
  const c = book.chapters.find(c => c.slug === slug);
  if (!c) notFound();
  const summaries = getChapterSummaries();
  const summary = summaries[c.number - 1];
  const previous = summaries[c.number - 2];
  const next = summaries[c.number];
  const part = book.parts.find(p => p.number === c.part)!;
  const image = c.imageId ? resolveNovelImage(c.imageId) : null;
  return <NovelReader chapter={summary}>
    <header className="novel-chapter-header">
      <Link href="/roman">La Maison des vivants</Link>
      <h1>{c.title}</h1>
      <p>Chapitre {c.number} · {part.title}</p>
      <span>{c.readingMinutes} minutes de lecture</span>
    </header>
    {image ? <figure className="novel-figure"><Image src={image.src} alt={image.title} width={1672} height={941} sizes="(max-width: 960px) 100vw, 920px" /><figcaption>{image.title}</figcaption></figure> : null}
    <article className="novel-prose" aria-label={`Chapitre ${c.number} : ${c.title}`}>
      {c.paragraphs.map((text, i) => <p key={i} id={`p-${i + 1}`} data-paragraph className={text.startsWith("—") ? "novel-dialogue" : undefined}>{text}</p>)}
      {c.number === 40 ? <p className="novel-end">Fin du livre premier</p> : null}
    </article>
    <nav className="novel-chapter-navigation" aria-label="Navigation entre les chapitres">
      {previous ? <Link href={chapterHref(previous.slug)} prefetch={false}><ArrowLeft size={18} aria-hidden="true" /><span>Chapitre {previous.number}<strong>{previous.title}</strong></span></Link> : <Link href="/roman"><ArrowLeft size={18} aria-hidden="true" /><span>Retour<strong>Le livre</strong></span></Link>}
      {next ? <Link className="novel-next" href={chapterHref(next.slug)} prefetch={false}><span>Chapitre {next.number}<strong>{next.title}</strong></span><ArrowRight size={18} aria-hidden="true" /></Link> : <Link className="novel-next" href="/roman"><span>La Maison des vivants<strong>Revenir au sommaire</strong></span><ArrowRight size={18} aria-hidden="true" /></Link>}
    </nav>
  </NovelReader>;
}
