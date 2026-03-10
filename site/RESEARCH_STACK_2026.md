# RESEARCH STACK 2026 — Cadifor

---

## Cible

Remplacer `site/index.html` par une application hybride :

- `editorial` pour l'entree, les scenes, les dossiers, les parcours
- `encyclopedique` pour les fiches, relations, recherche, chronologie, graphes

Date de reference :

- `9 mars 2026`

---

## Verdict de stack

Stack recommandee :

- `Next.js App Router`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `Velite` + `@next/mdx`
- `shadcn/ui` + `Radix UI`
- `Motion`
- `Lenis`
- `Orama`

Usage cible :

- `Pagefind` en plan B search statique
- `@react-three/fiber` + `drei` uniquement pour quelques couches symboliques
- `Fumadocs` comme reference structurelle, pas comme theme a copier

Pourquoi ce montage :

- assez moderne pour un vrai site `RSC + contenu type + motion`
- assez sobre pour ne pas ecraser la lecture
- assez possede localement pour ne pas dependre d'un theme monolithique

---

## Matrice par couche

| Couche | Recommande | Pourquoi | Alternatives ecartees | Risque | Maintenance | Lien Cadifor |
|-------|------------|----------|------------------------|--------|-------------|---------------|
| Core app | `Next.js` | `App Router`, `RSC`, `next/font`, `MDX`, excellente base contenu + UI | `Astro`, `Remix` | cadence rapide | moyenne | permet vrai hybride editorial + encyclopedique |
| Runtime UI | `React 19` | ecosysteme, composants interactifs ponctuels, server/client boundary claire | `Preact`, `SolidStart` | peu de risque | faible | utile pour annotations, panneaux, graphes |
| Langage | `TypeScript` | typage du corpus, graphes de contenu, schemas | JS pur | faible | faible | evite la derive du canon en code |
| Styles | `Tailwind CSS v4` | vitesse, theming, design tokens, ergonomie moderne | CSS-in-JS runtime | faible | faible | facilite une langue visuelle stricte |
| Content pipeline | `Velite` | schema `Zod`, content collections modernes, integration simple | `Contentlayer`, pipeline maison | ecosysteme plus petit | moyenne | parfait pour typer scenes, fiches, chronologie |
| Rich text | `@next/mdx` | voie officielle Next pour MDX | `next-mdx-remote`, `mdx-bundler` | faible | faible | rend possible dossiers, scenes, notes et modules vivants |
| Search | `Orama` | full-text/hybride, TypeScript, local, flexible | `Algolia`, `Fuse.js` | integration plus riche | moyenne | bon pour personnages, scenes, doctrines, citations |
| Search fallback | `Pagefind` | index statique rapide, zero backend | `Lunr`, `FlexSearch` | moins profond | faible | utile si certaines vues doivent rester tres statiques |
| UI base | `shadcn/ui` | composants possedes localement, Tailwind natif | `MUI`, `DaisyUI` | derive si mal gouverne | moyenne | ideal pour cartes, panneaux, dialogues, formulaires |
| A11y primitives | `Radix UI` | menus, overlays, navigation accessibles | `Headless UI` | API verbeuse | moyenne | bon socle pour header, search, panneaux contextuels |
| Motion | `Motion` | animations React, `layout`, `scroll`, transitions | `GSAP` seul | tentation d'en faire trop | faible | parfait pour micro-choregraphie editoriale |
| Smooth scroll | `Lenis` | scroll moderne, sobre, controle fin | `Locomotive Scroll` | peut fatiguer si abuse | faible | a doser pour lecture immersive |
| 3D symbolique | `@react-three/fiber` + `drei` | controle maximal pour emblème, astrolabe, motifs, couches symboliques | `Spline`, `Three` brut | bundle/perf | moyenne/haute | a reserver au hero et a quelques moments-cle |
| Fonts loading | `next/font` | self-hosted, variable fonts, CLS bas | Google Fonts direct | faible | faible | indispensable pour une typographie imperiale rigoureuse |
| Color system | `Radix Colors` + palette maison | base fiable dark/light + surcouche Cadifor | palette Tailwind seule | peut paraitre generique si brute | faible | permet un sombre noble, non "startup dark" |

---

## Composants / repos a suivre

### Header / nav

- `Radix Navigation Menu`
- `shadcn/ui`
- `Fumadocs`

Choix :

- garder `Radix` pour la base accessible
- observer `Fumadocs` pour les patterns docs/encyclopedie
- ne pas reprendre visuellement `Fumadocs` tel quel

Pourquoi pas les alternatives :

- `Nextra` tire trop vite vers un site de documentation
- `Docusaurus` ne sert pas le projet `editorial-first`

### Hero / title

- `Magic UI`
- `React Bits`
- `Motion`

Choix :

- piocher des motifs de hero et de titre dans `Magic UI` et `React Bits`
- tout recoder au ton Cadifor

Risque :

- effet "landing page startup" si les snippets sont copies sans tri

### Cards

- `shadcn/ui`
- `Magic UI` comme banque d'idees

Choix :

- systeme de cartes maison sur primitives `shadcn`
- quelques effets d'entree ou de profondeur empruntes a `Magic UI`

### Backgrounds

- `React Bits`
- `Motion`
- `R3F` pour une ou deux couches symboliques

Choix :

- textures lentes, lueurs, trames, poussiere, gradients editoriaux
- pas de fond continuellement spectaculaire sur les pages de lecture

### Parallax / scroll

- `Lenis`
- `Motion`

Choix :

- `Lenis` pour lisser discretement
- `Motion` pour reveals, progressions, transitions de sections

Pourquoi pas `GSAP ScrollSmoother` :

- trop lourd pour un site ou la lecture doit garder la priorite

### Footer

- `shadcn/ui`
- `Fumadocs` comme reference de structure

Choix :

- footer sobre, informatif, avec etat du canon, progression PDF, liens de navigation haute valeur

### Search

- `Orama`
- `Pagefind` fallback

Choix :

- `Orama` pour recherche riche sur entites, tags, citations, scenes
- `Pagefind` si certaines sections doivent etre statiques ou pregenerees

### MDX rendering

- `@next/mdx`
- `Velite`

Choix :

- MDX pour scenes, essais, dossiers, notes auteur
- collections typees pour fiches et metadonnees

### Color system

- `Radix Colors`

Choix :

- s'appuyer sur une echelle solide
- construire une palette Cadifor maison au-dessus

Direction :

- noirs bleutes
- ivoires froids
- or vieux
- amarante profond
- bleu mineral
- lueurs cyan arcaniques en accent rare

### Fonts

Technique :

- `next/font`

Direction typo :

- une serif editorial haute tenue pour lecture
- une display historique / monumentale pour titres
- une sans sobre uniquement pour micro-UI si necessaire

Eviter :

- `Inter` comme ton principal
- les combinaisons trop "AI-generic"

### Motion choreography

- `Motion`

Choix :

- animations de lecture et de contexte
- transitions de panneaux
- synchronisation douce avec la chronologie et les entites

Eviter :

- animations systematiques a chaque scroll
- effets qui ralentissent le texte

### 3D / symbol layers

- `@react-three/fiber`
- `drei`

Choix :

- reserve au hero, aux cartes du monde, aux emblemes, a l'astrolabe, ou a une scene-cle

Eviter :

- 3D dans les pages de lecture longues

---

## UX et recherche

### References utiles

1. Mitchell Whitelaw, *Generous Interfaces*  
   [https://digitalhumanities.org/dhq/vol/9/1/000205/000205.html](https://digitalhumanities.org/dhq/vol/9/1/000205/000205.html)
2. Dork, Bruggemann, Kreiseler, *Explore Modes*  
   [https://firstmonday.org/ojs/index.php/fm/article/view/6984](https://firstmonday.org/ojs/index.php/fm/article/view/6984)
3. *The Semantic Reader Project*  
   [https://cacm.acm.org/research/the-semantic-reader-project/](https://cacm.acm.org/research/the-semantic-reader-project/)
4. *ScholarPhi*  
   [https://scholarphi.org](https://scholarphi.org)
5. *Paper Plain*  
   [https://www.pennhci.com/publication/paper-plain-making-medical-research-papers-approachable-to-healthcare-consumers-with-natural-language-processing/](https://www.pennhci.com/publication/paper-plain-making-medical-research-papers-approachable-to-healthcare-consumers-with-natural-language-processing/)
6. `READR`  
   [https://nrs.harvard.edu/URN-3:HUL.INSTREPOS:37364667](https://nrs.harvard.edu/URN-3:HUL.INSTREPOS:37364667)
7. Stanford `Smart Primer / ACORN`  
   [https://hci.stanford.edu/research/smartprimer/projects/smartprimer.html](https://hci.stanford.edu/research/smartprimer/projects/smartprimer.html)
8. Wim Van Mierlo, edition numerique comme exposition  
   [https://scholarworks.iu.edu/journals/index.php/textual/article/view/34504](https://scholarworks.iu.edu/journals/index.php/textual/article/view/34504)

### Principes UX a appliquer

- entree `generous interface`, pas `search-first`
- double mode `lecture immersive` / `exploration encyclopedique`
- divulgation progressive des notes, variantes, annotations
- aides de comprehension locales plutot que glossaires lointains
- reperes permanents : chronologie, fil, liens contextuels, progression
- fiches entites contextuelles avec spoiler controle
- vues synchronisees : texte, temps, reseau, carte, dossiers
- controle typographique reel par le lecteur
- reprise de lecture sans desorientation
- provenance editoriale claire : canon, note auteur, brouillon, hypothese

### Risques a eviter

- faire un site de base de donnees froide
- casser la lecture par surcharge de chrome
- spoiler via les hovers ou les graphes
- simuler l'agentivite avec des faux choix
- utiliser le parallax comme bruit
- imposer une typographie belle mais fatigante

---

## References stack / docs

- `Next.js` : [docs](https://nextjs.org/docs)
- `Velite` : [docs](https://velite.js.org/guide/quick-start)
- `@next/mdx` : [guide](https://nextjs.org/docs/app/guides/mdx)
- `Orama` : [docs](https://docs.orama.com)
- `Pagefind` : [docs](https://pagefind.app/docs)
- `shadcn/ui` : [docs](https://ui.shadcn.com/docs)
- `Radix UI` : [docs](https://www.radix-ui.com/primitives/docs/components/navigation-menu)
- `Magic UI` : [docs](https://magicui.design/docs)
- `React Bits` : [docs](https://reactbits.dev/get-started/installation)
- `Lenis` : [site](https://lenis.dev/)
- `Motion` : [docs](https://motion.dev/docs/react)
- `@react-three/fiber` : [docs](https://docs.pmnd.rs/react-three-fiber)
- `drei` : [docs](https://docs.pmnd.rs/drei)
- `Fumadocs` : [docs](https://fumadocs.dev)

---

## Decision

Pour Cadifor, la bonne phrase n'est pas :

> faire un site moderne

La bonne phrase est :

> construire une interface de lecture, de puissance et de recoupement, ou l'editorial entre le lecteur dans le monde, puis ou l'encyclopedie l'empeche de s'y perdre.
