# CLAUDE.md — Cadifor Encyclopedia

## Project Overview

Next.js 15 static site (`output: "export"`) for the Haut Royaume de Cadifor encyclopedia.
- **Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Framer Motion
- **Content**: Markdown files in `/lore/` read at build time via `lib/content.ts`
- **Images**: 65 generated PNGs in `site/public/assets/` (portraits, locations, scenes, heraldry)
- **Image pipeline**: `assets-pipeline/` generates images via Gemini API

## Architecture

```
/lore/                    # Source markdown (personnages, scenes, meta, nations, etc.)
/site/src/app/            # Next.js pages (App Router)
/site/src/components/     # React components (cards, search, markdown, etc.)
/site/src/lib/            # Content loading, image resolution, colors, ToC
/site/public/assets/      # Static images (heraldry/, portraits/, locations/, scenes/)
/assets-pipeline/         # Image generation scripts + manifest.json
```

## Critical Rules

### 1. Static Export Constraints
- Site uses `output: "export"` — NO server-side features
- `next/image` requires `images: { unoptimized: true }` in next.config.ts
- All content is built at compile time via `generateStaticParams()`
- Never use server actions, middleware, or API routes

### 2. Client/Server Boundary
- Files with `"use client"` cannot export functions used in server components
- If a utility is needed both client and server side, put it in `lib/` without "use client"
- Components using hooks (useState, useEffect) must be in "use client" files
- Server components can import client components, not the other way around

### 3. Image Integration
- Image resolver is in `lib/images.ts` with slug-to-file mappings
- Images are in `public/assets/{category}/` and served as `/assets/{category}/file.png`
- Always use `next/image` with `unoptimized` (set globally in config)
- When adding new images: update the mapping in `lib/images.ts`

### 4. Content System
- `lib/content.ts` reads `/lore/` markdown files and extracts metadata
- Collections: personnages, scenes, sections, factions, nations, villes, territoires, cultures, duches, economie, annexes, meta
- Slug = filename without `.md` extension
- Title extracted from first `# ` heading in markdown

### 5. Styling Conventions
- CSS variables for theme: `--gold`, `--gold-light`, `--ivory`, `--deep`, `--border-gold`
- Card hover effect: `.card-imperial` class with `--mouse-x/--mouse-y` glow
- Faction colors defined in `lib/colors.ts` — never hardcode faction-specific colors
- Collection themes also in `lib/colors.ts` — use `getCollectionTheme()`

## Plan Mode Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

## Subagent Strategy

- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

## Self-Improvement Loop

- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Review lessons at session start for relevant project

## Verification Before Done

- Never mark a task complete without proving it works
- Always `npm run build` before committing — this catches SSR/client boundary errors
- Check that static export actually includes the expected assets
- Ask yourself: "Would a staff engineer approve this?"

## Autonomous Bug Fixing

- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user

## Task Management

1. Write plan to `tasks/todo.md` with checkable items
2. Track progress with TodoWrite as you go
3. High-level summary at each step
4. Document results in `tasks/todo.md`
5. Capture lessons in `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Minimal code impact.
- **No Laziness**: Find root causes. No temporary fixes.
- **Build Before Push**: Always verify the build passes before committing.
- **Respect the Theme**: This is a dark, gold-accented imperial aesthetic. No bright colors, no casual UI.
