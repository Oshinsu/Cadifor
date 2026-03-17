"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/lightbox";

type GalerieContentProps = {
  allImages: {
    portraits: string[];
    locations: string[];
    scenes: string[];
    heraldry: string[];
  };
};

function imageLabel(filePath: string): string {
  return filePath
    .split("/")
    .pop()!
    .replace(/\.png$/, "")
    .replace(/^(portrait|location|scene|heraldry|hero|header|materials)_?/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const SECTION_CONFIG = [
  { key: "portraits" as const, label: "Portraits", subtitle: "Souverains et figures de la dynastie", aspect: "aspect-[3/4]", sizes: "220px" },
  { key: "scenes" as const, label: "Scenes", subtitle: "Moments canoniques illustres", aspect: "aspect-[16/10]", sizes: "320px" },
  { key: "locations" as const, label: "Lieux", subtitle: "Cites, forteresses et paysages du monde", aspect: "aspect-[16/10]", sizes: "320px" },
  { key: "heraldry" as const, label: "Heraldique", subtitle: "Blasons et armoiries imperiales", aspect: "aspect-square", sizes: "260px" },
] as const;

export function GalerieContent({ allImages }: GalerieContentProps) {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const totalCount = Object.values(allImages).flat().length;

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      {/* Header */}
      <div className="relative mb-14 overflow-hidden rounded-[2rem] border border-[var(--border-gold)] bg-black/20 p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgb(12,10,9)] via-transparent to-transparent" />
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[var(--gold)]/[0.06] blur-[100px]" />

        <div className="relative max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
            Illustrations
          </p>
          <h1 className="font-serif text-5xl text-[var(--ivory)]">Galerie</h1>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            {totalCount} illustrations generees pour le Haut Royaume de Cadifor.
            Portraits de souverains, vues de cites, scenes canoniques et blasons heraldiques.
          </p>
        </div>
      </div>

      {/* Sections */}
      {SECTION_CONFIG.map(({ key, label, subtitle, aspect, sizes }) => {
        const images = allImages[key];
        if (images.length === 0) return null;

        return (
          <section key={key} className="mt-16 first:mt-0" data-reveal>
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/60">
                {images.length} image{images.length !== 1 ? "s" : ""}
              </p>
              <h2 className="font-serif text-4xl text-[var(--ivory)]">{label}</h2>
              <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
            </div>

            <div className={`stagger grid gap-4 ${
              key === "portraits"
                ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
                : key === "heraldry"
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            }`}>
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setLightbox({ images, index: i })}
                  className="card-imperial group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025] text-left"
                >
                  <div className={`relative w-full ${aspect}`}>
                    <Image
                      src={`/assets/${img}`}
                      alt={imageLabel(img)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={sizes}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(12,10,9)] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="truncate text-sm font-medium text-slate-200 drop-shadow-lg">
                      {imageLabel(img)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        );
      })}

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </main>
  );
}
