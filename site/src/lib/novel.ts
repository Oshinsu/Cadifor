import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

export type NovelChapter = {
  number: number;
  slug: string;
  title: string;
  part: number;
  paragraphs: string[];
  wordCount: number;
  readingMinutes: number;
  imageId: number | null;
};

export type ChapterSummary = Omit<NovelChapter, "paragraphs">;

type Novel = {
  id: string;
  title: string;
  volume: string;
  edition: number;
  wordCount: number;
  parts: { number: number; title: string; start: number }[];
  chapters: NovelChapter[];
};

export const NOVEL_BASE = "/roman/la-maison-des-vivants";
export const getNovel = cache((): Novel => JSON.parse(fs.readFileSync(
  path.join(process.cwd(), "content/roman/la-maison-des-vivants.json"), "utf8",
)));

export function getChapterSummaries(): ChapterSummary[] {
  return getNovel().chapters.map(({ paragraphs: _paragraphs, ...chapter }) => chapter);
}

export function chapterHref(slug: string) {
  return `${NOVEL_BASE}/${slug}`;
}
