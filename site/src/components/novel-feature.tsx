import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resolveNovelImage } from "@/lib/images";

export function NovelFeature() {
  const photo = resolveNovelImage(1)!;
  return <section className="my-14 grid items-center gap-8 border-y border-[var(--border-gold)] py-9 md:grid-cols-[1fr_1.1fr]" aria-labelledby="home-novel-title">
    <Link href="/roman" className="block overflow-hidden rounded-lg"><Image src={photo.src} alt="Aberthol écoute un rapport au conseil royal." width={1672} height={941} sizes="(max-width: 768px) 100vw, 550px" className="h-auto w-full" /></Link>
    <div><h2 id="home-novel-title" className="font-serif text-4xl text-[var(--ivory)] md:text-5xl">La Maison des vivants</h2><p className="mt-3 text-sm text-[var(--gold-light)]">Le roman · Livre premier</p><p className="mt-4 max-w-lg text-base leading-7 text-stone-300">Aberthol au service de Terenas. Nouvelle-Avalon, les campagnes, les alliances et cinq filles à la même table. Le premier livre de Cadifor se lit désormais en entier.</p><Link href="/roman" className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[var(--gold-light)] underline underline-offset-8">Lire le roman <ArrowRight size={17} aria-hidden="true" /></Link></div>
  </section>;
}
