import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { getAllImages } from "@/lib/images";
import { GalerieContent } from "./galerie-content";

export const metadata: Metadata = pageMetadata("/galerie","Galerie","Les scènes photographiques de La Maison des vivants, et la galerie du monde Cadifor : portraits, lieux, scènes et héraldique.");

export default function GaleriePage() {
  const allImages = getAllImages();

  return <GalerieContent allImages={allImages} />;
}
