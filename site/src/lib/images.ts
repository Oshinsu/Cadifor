import fs from "node:fs";
import path from "node:path";
import type { CollectionKey } from "./content";

const ASSETS_DIR = path.resolve(process.cwd(), "public", "assets");

// ─── Portrait mapping: character slug → primary portrait filename ────────
const PORTRAIT_MAP: Record<string, string> = {
  "01_aberthol": "portrait_aberthol_bust.png",
  "02_viki": "portrait_viki_bust.png",
  "05_andrea_rougissante": "portrait_andrea_rougissante_bust.png",
  "06_andrea_erudite": "portrait_andrea_juste_young.png",
  "07_andrea_juste": "portrait_andrea_juste_mature.png",
  "08_andrea_victorieuse": "portrait_andrea_victorieuse_bust.png",
  "10_banni": "portrait_banni_bust.png",
  "11_benjamin": "portrait_benjamin_bust.png",
  "12_marjory": "portrait_marjory_formal.png",
  "13_rose": "portrait_rose_formal.png",
  "14_arwyn": "portrait_arwyn_bust.png",
  "15_llane": "portrait_llane_bust.png",
};

// ─── Scene mapping: scene slug → scene illustration filename ─────────────
const SCENE_MAP: Record<string, string> = {
  diner_imperial: "scene_diner_imperial.png",
  bataille_yielden: "scene_bataille_yielden.png",
  grand_bal_reconciliation: "scene_grand_bal.png",
  bal_de_clairbois: "scene_rose_entering_clairbois.png",
  mort_marjory_ulfar: "scene_marjory_death.png",
  viki_loups_albinos: "scene_viki_loups.png",
  soiree_de_lignee: "scene_rose_coronation.png",
  fragment_apocryphe_livre_de_rose: "scene_rose_coronation.png",
};

// ─── Location mapping: ville/territoire/nation/duche slug → location image ──
const LOCATION_MAP: Record<string, string> = {
  // Villes
  stormwind: "location_stormwind_city.png",
  lordaeron: "location_lordaeron_city.png",
  nouvelle_avalon: "location_nouvelle_avalon_exterior.png",
  stormgarde: "location_stormgarde_fortress.png",
  karazhan: "location_karazhan_tower.png",
  kezan: "location_kezan_port.png",
  darrow: "location_darrow.png",
  clairbois: "location_clairbois_exterior.png",
  old_town: "location_stormwind_old_town.png",
  baie_du_butin: "location_baie_du_butin.png",
  jinthaalor: "location_gurubashi_zulgurub.png",
  // Nations
  gilneas: "location_gilneas_wall.png",
  ironforge: "location_ironforge_exterior.png",
  kaldorei: "location_kaldorei_forest.png",
  kul_tiras: "location_kul_tiras.png",
  northrend: "location_northrend.png",
  pandarie: "location_pandarie_ruins.png",
  quelthalas: "location_quelthalas.png",
  ile_du_butin: "location_baie_du_butin.png",
  // Territoires
  hautebrande: "location_hautebrande.png",
  morasses_noires: "location_morasses_noires.png",
  sylve_de_l_est: "location_sylve_de_lest.png",
  gurubashi: "location_gurubashi_zulgurub.png",
  // Duches
  duche_kolkar: "location_duche_kolkar.png",
  duche_ebonlocke: "location_clairbois_exterior.png",
};

// ─── Public helpers ──────────────────────────────────────────────────────

function assetExists(relativePath: string): boolean {
  return fs.existsSync(path.join(ASSETS_DIR, relativePath));
}

/**
 * Resolve the primary image for a lore entry.
 * Returns a path relative to /assets/ (e.g. "portraits/portrait_aberthol_bust.png")
 * or null if no image is available.
 */
export function resolveEntryImage(
  slug: string,
  collection: CollectionKey,
): string | null {
  // Characters → portrait
  if (collection === "personnages") {
    const file = PORTRAIT_MAP[slug];
    if (file && assetExists(`portraits/${file}`)) {
      return `portraits/${file}`;
    }
  }

  // Scenes → scene illustration
  if (collection === "scenes") {
    const file = SCENE_MAP[slug];
    if (file && assetExists(`scenes/${file}`)) {
      return `scenes/${file}`;
    }
  }

  // Geographic collections → location
  if (collection === "villes" || collection === "territoires" || collection === "nations" || collection === "duches") {
    const file = LOCATION_MAP[slug];
    if (file && assetExists(`locations/${file}`)) {
      return `locations/${file}`;
    }
  }

  return null;
}

/**
 * Get all portrait images for a character slug (bust, formal, etc.)
 */
export function resolveCharacterGallery(slug: string): string[] {
  const images: string[] = [];
  // Extract the character name from slug (e.g. "01_aberthol" → "aberthol")
  const namePart = slug.replace(/^\d+_/, "");

  const portraitsDir = path.join(ASSETS_DIR, "portraits");
  if (!fs.existsSync(portraitsDir)) return images;

  const files = fs.readdirSync(portraitsDir);
  for (const file of files) {
    if (file.includes(namePart) && file.endsWith(".png")) {
      images.push(`portraits/${file}`);
    }
  }
  return images;
}

/**
 * Get all location images for a city/territory slug.
 */
export function resolveLocationGallery(slug: string): string[] {
  const images: string[] = [];
  const locationsDir = path.join(ASSETS_DIR, "locations");
  if (!fs.existsSync(locationsDir)) return images;

  const files = fs.readdirSync(locationsDir);
  for (const file of files) {
    // Match slug fragments in filename
    const nameParts = slug.split("_");
    if (nameParts.some((part) => file.includes(part) && part.length > 3) && file.endsWith(".png")) {
      images.push(`locations/${file}`);
    }
  }
  return images;
}
