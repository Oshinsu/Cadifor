import type { MetadataRoute } from 'next';
import { encyclopaediaCollections, getCollection } from '@/lib/content';
import { getChapterSummaries, chapterHref } from '@/lib/novel';
import { SITE_URL } from '@/lib/seo';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{const paths=['/','/roman','/preuves','/encyclopedie','/scenes','/chronologie','/dossiers','/galerie','/canon/notation-scenes','/canon/progression-pdf',...encyclopaediaCollections.flatMap(c=>[`/encyclopedie/${c}`,...getCollection(c).map(e=>`/encyclopedie/${c}/${e.slug}`)]),...getCollection('scenes').map(e=>`/scenes/${e.slug}`),...getChapterSummaries().map(c=>chapterHref(c.slug))];return [...new Set(paths)].map(path=>({url:SITE_URL+path}));}
