"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse d'images"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Fermer"
      >
        <X className="size-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Image precedente"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Image suivante"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      <div
        className="relative max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={`/assets/${images[index]}`}
          alt=""
          width={1200}
          height={900}
          className="max-h-[85vh] w-auto rounded-lg object-contain"
          priority
        />
        {images.length > 1 && (
          <p className="mt-3 text-center text-xs text-stone-500">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Clickable gallery thumbnail that opens a lightbox.
 */
type GalleryGridProps = {
  images: string[];
  aspectRatio?: string;
  sizes?: string;
  label?: string;
};

export function GalleryGrid({ images, aspectRatio = "aspect-[3/4]", sizes = "130px", label = "Portraits" }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
        <p className="px-5 pt-5 text-[10px] uppercase tracking-[0.2em] text-stone-600">
          {label}
        </p>
        <div className={`mt-3 grid ${aspectRatio === "aspect-[16/9]" ? "gap-1" : "grid-cols-2 gap-1"} p-2`}>
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setLightboxIndex(i)}
              className={`relative ${aspectRatio} cursor-pointer overflow-hidden rounded-lg transition-opacity hover:opacity-80`}
            >
              <Image
                src={`/assets/${img}`}
                alt=""
                fill
                className="object-cover"
                sizes={sizes}
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
