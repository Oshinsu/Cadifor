# Todo — Cadifor Encyclopedia

## Completed — Session 1 (2026-03-11)

- [x] Generate 65 images via Gemini API (heraldry, portraits, locations, scenes)
- [x] Create `lib/images.ts` — slug-to-image resolver for all collections
- [x] Integrate images into EntryCard thumbnails
- [x] Add hero image + dynasty portraits + scene illustration to homepage
- [x] Add header banner to scenes listing page
- [x] Add scene illustration to scene detail pages
- [x] Add header image + portrait gallery to encyclopedia entry pages
- [x] Fix static export image rendering (`images.unoptimized`)
- [x] Add mouse-tracking card glow effect
- [x] Add active nav link highlighting + Cmd+K shortcut
- [x] Add reading progress bar on article pages
- [x] Add scroll-triggered reveal animations
- [x] Add table of contents with scroll-spy
- [x] Add breadcrumbs to deep pages
- [x] Improve search with filters, keyboard nav, match highlighting
- [x] Apply collection-themed colors on encyclopedie page
- [x] Redesign 404 page with gold theme
- [x] Polish CSS (scrollbar, typography, prose refinements)
- [x] Create CLAUDE.md + tasks/lessons.md

## Completed — Session 2 (2026-03-11)

- [x] Commit pages 450-600 extraction (10 new lore files, 4 enriched)
- [x] SEO: `generateMetadata` on encyclopedia entries (title, description, og:image)
- [x] SEO: `generateMetadata` on scene pages (title, description, og:image)
- [x] SEO: static metadata on all listing/static pages (encyclopedie, scenes, chronologie, recherche, dossiers, canon)
- [x] Accessibility: skip-to-content link, ARIA labels on nav/mobile menu/lightbox
- [x] Verified lazy-loading (Next.js `Image` defaults to `loading="lazy"` — already correct)
- [x] View Transitions API (experimental, CSS fade-in/fade-out on navigation)
- [x] Cross-reference sidebar: `getRelatedEntries()` scans body for title mentions, shows "References croisees" in sidebar

## Backlog

- [ ] Add more image mappings as new lore entries are created
- [x] Image lightbox (click to zoom) on portrait gallery
- [x] Back-to-top button for long articles
- [x] Smooth page transitions with View Transitions API
- [ ] PWA manifest + offline support
- [x] SEO: dynamic og:image per entry from portraits/scenes
- [x] Performance: lazy-load below-fold images (verified — Next.js default)
- [x] Accessibility audit (ARIA labels, skip nav, contrast)
