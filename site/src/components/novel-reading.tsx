"use client";

import { useEffect, useRef, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Image as ImageIcon, Minus, Moon, Plus, Sun } from "lucide-react";
import type { ChapterSummary } from "@/lib/novel";

const BOOK_BASE = "/roman/la-maison-des-vivants";
const PREF_KEY = "cadifor:reader:v1";
const PLACE_KEY = "cadifor:book-1:v1";
const defaults = '{"theme":"night","size":20,"images":true}';
const fallback: Record<string, string> = {};
const subscribe = (notify: () => void) => {
  window.addEventListener("storage", notify);
  window.addEventListener("cadifor-reader", notify);
  return () => { window.removeEventListener("storage", notify); window.removeEventListener("cadifor-reader", notify); };
};
function read(key: string, value = "") {
  try { return localStorage.getItem(key) ?? fallback[key] ?? value; }
  catch { return fallback[key] ?? value; }
}
function write(key: string, value: string) {
  fallback[key] = value;
  try { localStorage.setItem(key, value); } catch { /* Reading works without storage. */ }
  window.dispatchEvent(new Event("cadifor-reader"));
}
const getPreferences = () => read(PREF_KEY, defaults);
const serverPreferences = () => defaults;
const getPlace = () => read(PLACE_KEY);
const serverPlace = () => "";

function preferences(raw: string): { theme: "night" | "paper"; size: number; images: boolean } {
  try {
    const p = JSON.parse(raw);
    return { theme: p.theme === "paper" ? "paper" : "night", size: typeof p.size === "number" && Number.isFinite(p.size) ? Math.min(26, Math.max(18, p.size)) : 20, images: p.images !== false };
  } catch { return { theme: "night", size: 20, images: true }; }
}

export function ResumeReading({ chapters }: { chapters: ChapterSummary[] }) {
  const raw = useSyncExternalStore(subscribe, getPlace, serverPlace);
  let slug = "", paragraph = "";
  try { const saved = JSON.parse(raw); slug = saved.slug; paragraph = /^p-\d+$/.test(saved.paragraph) ? saved.paragraph : ""; } catch { /* No saved place yet. */ }
  const chapter = chapters.find(c => c.slug === slug);
  if (!chapter) return null;
  return <Link className="novel-resume" href={`${BOOK_BASE}/${chapter.slug}${paragraph ? `#${paragraph}` : ""}`} prefetch={false}>
    <BookOpen size={18} aria-hidden="true" />
    <span>Reprendre au chapitre {chapter.number}<strong>{chapter.title}</strong></span>
    <ArrowRight size={18} aria-hidden="true" />
  </Link>;
}

export function NovelReader({ chapter, children }: { chapter: ChapterSummary; children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getPreferences, serverPreferences);
  const settings = preferences(raw);
  const root = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const update = (next: Partial<typeof settings>) => write(PREF_KEY, JSON.stringify({ ...settings, ...next }));

  useEffect(() => {
    const article = root.current?.querySelector("article");
    if (!article) return;
    let frame = 0;
    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = article.getBoundingClientRect();
        const amount = Math.max(0, Math.min(1, (window.innerHeight - box.top) / (box.height + window.innerHeight)));
        if (progress.current) progress.current.style.transform = `scaleX(${amount})`;
      });
    };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        write(PLACE_KEY, JSON.stringify({ slug: chapter.slug, paragraph: entry.target.id }));
      }
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
    article.querySelectorAll("[data-paragraph]").forEach(p => observer.observe(p));
    const hash = window.location.hash.slice(1);
    if (/^p-\d+$/.test(hash)) document.getElementById(hash)?.scrollIntoView();
    window.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("resize", refresh);
    refresh();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", refresh); window.removeEventListener("resize", refresh); };
  }, [chapter.slug]);

  return <main ref={root} className="novel-reader" data-theme={settings.theme} data-images={settings.images} style={{ "--reading-size": `${settings.size}px` } as CSSProperties}>
    <div className="novel-progress" aria-hidden="true"><div ref={progress} /></div>
    <nav className="novel-toolbar" aria-label="Outils de lecture">
      <Link href="/roman#sommaire">Sommaire</Link>
      <span className="novel-toolbar-chapter">Chapitre {chapter.number} / 40</span>
      <div className="novel-settings">
        <button type="button" onClick={() => update({ size: settings.size - 1 })} disabled={settings.size <= 18} aria-label="Réduire le texte"><Minus size={17} aria-hidden="true" /></button>
        <button type="button" onClick={() => update({ size: settings.size + 1 })} disabled={settings.size >= 26} aria-label="Agrandir le texte"><Plus size={17} aria-hidden="true" /></button>
        <button type="button" onClick={() => update({ images: !settings.images })} aria-label={settings.images ? "Masquer les images" : "Afficher les images"} aria-pressed={settings.images}><ImageIcon size={18} aria-hidden="true" /></button>
        <button type="button" onClick={() => update({ theme: settings.theme === "night" ? "paper" : "night" })} aria-label={settings.theme === "night" ? "Lire sur fond clair" : "Lire sur fond sombre"}>{settings.theme === "night" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}</button>
      </div>
    </nav>
    {children}
  </main>;
}
