/**
 * House & faction color palette for the Cadifor universe.
 *
 * Colors are derived from:
 * - lore/sections/heraldique.md (Cadifor: violet + cyan infinity)
 * - Official Blizzard Warcraft heraldry for Alliance kingdoms
 * - CK2 Guardians of Azeroth mod palette
 */

export type FactionTheme = {
  /** CSS color for primary accent (borders, headings) */
  primary: string;
  /** CSS color for secondary / lighter accent */
  secondary: string;
  /** Tailwind-compatible bg class for subtle card tinting */
  bgTint: string;
  /** Tailwind border-color class for card edges */
  borderTint: string;
  /** Tailwind text-color for the accent */
  textAccent: string;
  /** Symbolic icon descriptor (not a component — just the name) */
  symbol: string;
  /** Human-readable label */
  label: string;
};

// ─── Faction themes ───────────────────────────────────────────────

const FACTION_THEMES = {
  cadifor: {
    primary: "#7c3aed",       // violet-600
    secondary: "#22d3ee",     // cyan-400
    bgTint: "bg-violet-500/[0.06]",
    borderTint: "border-violet-400/25",
    textAccent: "text-violet-300",
    symbol: "infinity",
    label: "Maison Cadifor",
  },
  stormwind: {
    primary: "#00437A",       // canonical Stormwind navy
    secondary: "#eab308",     // gold lion
    bgTint: "bg-blue-500/[0.06]",
    borderTint: "border-blue-400/20",
    textAccent: "text-blue-300",
    symbol: "lion",
    label: "Royaume de Stormwind",
  },
  lordaeron: {
    primary: "#2563eb",       // blue-600
    secondary: "#f8fafc",     // white/silver
    bgTint: "bg-blue-500/[0.05]",
    borderTint: "border-blue-300/15",
    textAccent: "text-blue-200",
    symbol: "L",
    label: "Lordaeron",
  },
  stormgarde: {
    primary: "#CC0000",       // canonical Stromgarde crimson
    secondary: "#eab308",     // gold
    bgTint: "bg-red-500/[0.06]",
    borderTint: "border-red-400/20",
    textAccent: "text-red-300",
    symbol: "fist",
    label: "Stormgarde — Maison Trollbane",
  },
  kultiras: {
    primary: "#1A8A4A",       // canonical Kul Tiras green (dark-UI adapted)
    secondary: "#164e63",     // dark navy
    bgTint: "bg-teal-500/[0.06]",
    borderTint: "border-teal-400/20",
    textAccent: "text-teal-300",
    symbol: "anchor",
    label: "Kul Tiras",
  },
  quelthalas: {
    primary: "#D4AF37",       // canonical Quel'Thalas gold-red
    secondary: "#dc2626",     // phoenix crimson
    bgTint: "bg-yellow-500/[0.05]",
    borderTint: "border-yellow-300/15",
    textAccent: "text-yellow-200",
    symbol: "phoenix",
    label: "Quel'Thalas",
  },
  ironforge: {
    primary: "#d97706",       // amber-600
    secondary: "#64748b",     // slate-500
    bgTint: "bg-amber-500/[0.06]",
    borderTint: "border-amber-400/20",
    textAccent: "text-amber-300",
    symbol: "anvil",
    label: "Ironforge",
  },
  gilneas: {
    primary: "#3D3D3D",       // canonical Gilneas dark grey
    secondary: "#1e3a5f",     // dark blue accent
    bgTint: "bg-gray-500/[0.06]",
    borderTint: "border-gray-400/15",
    textAccent: "text-gray-300",
    symbol: "wolf",
    label: "Gilneas",
  },
  dalaran: {
    primary: "#7B2FBE",       // canonical Dalaran violet
    secondary: "#a78bfa",     // lighter violet
    bgTint: "bg-purple-500/[0.06]",
    borderTint: "border-purple-400/20",
    textAccent: "text-purple-300",
    symbol: "eye",
    label: "Dalaran",
  },
  kaldorei: {
    primary: "#6366f1",       // indigo-500
    secondary: "#818cf8",     // indigo-400
    bgTint: "bg-indigo-500/[0.05]",
    borderTint: "border-indigo-400/15",
    textAccent: "text-indigo-300",
    symbol: "moon",
    label: "Kaldorei",
  },
  ebonlocke: {
    primary: "#1e293b",       // slate-800
    secondary: "#475569",     // slate-500
    bgTint: "bg-slate-500/[0.06]",
    borderTint: "border-slate-400/15",
    textAccent: "text-slate-300",
    symbol: "raven",
    label: "Duche Ebonlocke",
  },
  gobelin: {
    primary: "#16a34a",       // green-600
    secondary: "#eab308",     // gold
    bgTint: "bg-green-500/[0.06]",
    borderTint: "border-green-400/20",
    textAccent: "text-green-300",
    symbol: "coin",
    label: "Confederation Gobeline",
  },
  alterac: {
    primary: "#FF8A0E",       // canonical Alterac orange
    secondary: "#64748b",     // slate grey
    bgTint: "bg-orange-500/[0.06]",
    borderTint: "border-orange-400/20",
    textAccent: "text-orange-300",
    symbol: "mountain",
    label: "Alterac",
  },
  imperial: {
    primary: "#f59e0b",       // amber-500 (the default site amber)
    secondary: "#64748b",     // slate-500
    bgTint: "bg-amber-500/[0.06]",
    borderTint: "border-amber-300/20",
    textAccent: "text-amber-200",
    symbol: "crown",
    label: "Empire d'Azeroth",
  },
} as const satisfies Record<string, FactionTheme>;

export type FactionKey = keyof typeof FACTION_THEMES;

export function getFactionTheme(faction: FactionKey): FactionTheme {
  return FACTION_THEMES[faction];
}

export function getAllFactions(): FactionKey[] {
  return Object.keys(FACTION_THEMES) as FactionKey[];
}

// ─── Slug → faction mapping ──────────────────────────────────────

/**
 * Maps a lore entry slug or collection key to a faction for theming.
 * Returns 'imperial' as fallback (the neutral amber theme).
 */
export function resolveFaction(slug: string, collection?: string): FactionKey {
  const s = slug.toLowerCase();

  // Direct character → faction mapping
  if (s.includes("aberthol") || s.includes("viki") || s.includes("andrea") ||
      s.includes("rose") || s.includes("marjory") || s.includes("banni") ||
      s.includes("benjamin") || s.includes("arwyn") || s.includes("cadifor") ||
      s.includes("allison")) {
    return "cadifor";
  }
  if (s.includes("trollbane") || s.includes("johnson") || s.includes("stormgarde")) return "stormgarde";
  if (s.includes("wrynn") || s.includes("llane") || s.includes("stormwind") || s.includes("hurlevent")) return "stormwind";
  if (s.includes("lordaeron")) return "lordaeron";
  if (s.includes("kul_tiras") || s.includes("kultiras") || s.includes("gwen")) return "kultiras";
  if (s.includes("quelthalas") || s.includes("anasterian")) return "quelthalas";
  if (s.includes("ironforge")) return "ironforge";
  if (s.includes("gilneas")) return "gilneas";
  if (s.includes("dalaran") || s.includes("karazhan")) return "dalaran";
  if (s.includes("kaldorei")) return "kaldorei";
  if (s.includes("ebonlocke") || s.includes("clairbois")) return "ebonlocke";
  if (s.includes("alterac") || s.includes("perenolde")) return "alterac";
  if (s.includes("gobelin") || s.includes("kezan")) return "gobelin";
  if (s.includes("ulfar") || s.includes("taelan") || s.includes("ysena")) return "stormwind";

  // Collection-level fallback
  if (collection === "nations") return "imperial";
  if (collection === "territoires") return "imperial";
  if (collection === "economie") return "imperial";

  return "imperial";
}

// ─── Character tier system ───────────────────────────────────────

export type CharacterTier = "SS" | "S+" | "S++" | "S" | "A" | "B" | "C" | "—";

export function getTierColor(tier: CharacterTier): string {
  switch (tier) {
    case "SS":  return "text-amber-300 border-amber-300/40 bg-amber-300/10";
    case "S++": return "text-violet-300 border-violet-300/40 bg-violet-300/10";
    case "S+":  return "text-rose-300 border-rose-300/40 bg-rose-300/10";
    case "S":   return "text-cyan-300 border-cyan-300/40 bg-cyan-300/10";
    case "A":   return "text-emerald-300 border-emerald-300/40 bg-emerald-300/10";
    case "B":   return "text-blue-300 border-blue-300/40 bg-blue-300/10";
    case "C":   return "text-slate-400 border-slate-400/40 bg-slate-400/10";
    default:    return "text-slate-500 border-slate-500/30 bg-slate-500/5";
  }
}

// ─── Collection theme mapping ────────────────────────────────────

export type CollectionTheme = {
  gradient: string;
  iconColor: string;
  accentBorder: string;
};

const COLLECTION_THEMES: Record<string, CollectionTheme> = {
  personnages: {
    gradient: "from-violet-500/20 to-transparent",
    iconColor: "text-violet-300",
    accentBorder: "border-violet-400/25",
  },
  scenes: {
    gradient: "from-amber-500/20 to-transparent",
    iconColor: "text-amber-300",
    accentBorder: "border-amber-400/25",
  },
  sections: {
    gradient: "from-cyan-500/15 to-transparent",
    iconColor: "text-cyan-300",
    accentBorder: "border-cyan-400/20",
  },
  factions: {
    gradient: "from-red-500/15 to-transparent",
    iconColor: "text-red-300",
    accentBorder: "border-red-400/20",
  },
  nations: {
    gradient: "from-teal-500/15 to-transparent",
    iconColor: "text-teal-300",
    accentBorder: "border-teal-400/20",
  },
  villes: {
    gradient: "from-emerald-500/15 to-transparent",
    iconColor: "text-emerald-300",
    accentBorder: "border-emerald-400/20",
  },
  territoires: {
    gradient: "from-green-500/15 to-transparent",
    iconColor: "text-green-300",
    accentBorder: "border-green-400/20",
  },
  cultures: {
    gradient: "from-rose-500/15 to-transparent",
    iconColor: "text-rose-300",
    accentBorder: "border-rose-400/20",
  },
  duches: {
    gradient: "from-indigo-500/15 to-transparent",
    iconColor: "text-indigo-300",
    accentBorder: "border-indigo-400/20",
  },
  economie: {
    gradient: "from-yellow-500/15 to-transparent",
    iconColor: "text-yellow-300",
    accentBorder: "border-yellow-400/20",
  },
  annexes: {
    gradient: "from-slate-500/15 to-transparent",
    iconColor: "text-slate-400",
    accentBorder: "border-slate-400/20",
  },
  meta: {
    gradient: "from-sky-500/10 to-transparent",
    iconColor: "text-sky-300",
    accentBorder: "border-sky-400/15",
  },
};

export function getCollectionTheme(collection: string): CollectionTheme {
  return COLLECTION_THEMES[collection] ?? {
    gradient: "from-slate-500/10 to-transparent",
    iconColor: "text-slate-400",
    accentBorder: "border-slate-400/15",
  };
}
