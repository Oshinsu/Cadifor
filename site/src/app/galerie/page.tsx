import type { Metadata } from "next";
import { getAllImages } from "@/lib/images";
import { GalerieContent } from "./galerie-content";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Toutes les illustrations du Haut Royaume de Cadifor : portraits, lieux, scenes et heraldique.",
};

export default function GaleriePage() {
  const allImages = getAllImages();

  return <GalerieContent allImages={allImages} />;
}
