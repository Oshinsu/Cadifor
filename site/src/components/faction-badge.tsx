import { getFactionTheme, type FactionKey } from "@/lib/colors";

type FactionBadgeProps = {
  faction: FactionKey;
  size?: "sm" | "md";
};

export function FactionBadge({ faction, size = "sm" }: FactionBadgeProps) {
  const theme = getFactionTheme(faction);
  const sizeClass = size === "sm" ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border uppercase tracking-[0.2em] ${theme.bgTint} ${theme.borderTint} ${theme.textAccent} ${sizeClass}`}
    >
      <FactionDot faction={faction} />
      {theme.label}
    </span>
  );
}

function FactionDot({ faction }: { faction: FactionKey }) {
  const theme = getFactionTheme(faction);
  return (
    <span
      className="inline-block size-1.5 rounded-full"
      style={{ backgroundColor: theme.primary }}
    />
  );
}

type FactionStripProps = {
  faction: FactionKey;
};

/** Thin colored left-border strip for cards */
export function FactionStrip({ faction }: FactionStripProps) {
  const theme = getFactionTheme(faction);
  return (
    <div
      className="absolute inset-y-0 left-0 w-[3px] rounded-l-3xl"
      style={{ backgroundColor: theme.primary }}
    />
  );
}
