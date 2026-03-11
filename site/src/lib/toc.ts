export type TocItem = {
  id: string;
  text: string;
  level: number;
};

/**
 * Extracts h2/h3 headings from markdown body text
 * and returns a structured table of contents.
 */
export function extractTocFromMarkdown(body: string): TocItem[] {
  const items: TocItem[] = [];
  const lines = body.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/\*{1,2}/g, "").trim();
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      items.push({ id, text, level });
    }
  }
  return items;
}
