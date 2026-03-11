# Lessons Learned

## 2026-03-11 — Session 1

### Static Export + next/image = images invisibles
- **Erreur**: Utilisation de `next/image` avec `fill`, `sizes`, etc. sans configurer `images.unoptimized`
- **Cause**: `output: "export"` desactive le serveur d'optimisation d'images de Next.js. Sans `images: { unoptimized: true }`, les balises `<img>` ne sont pas generees correctement dans le HTML statique.
- **Fix**: Ajouter `images: { unoptimized: true }` dans `next.config.ts`
- **Regle**: Toujours verifier la compatibilite des features Next.js avec le mode static export AVANT d'implementer

### Client/Server boundary avec extractTocFromMarkdown
- **Erreur**: Fonction `extractTocFromMarkdown` dans un fichier `"use client"` (table-of-contents.tsx), puis importee dans un server component (page.tsx)
- **Cause**: Next.js interdit d'appeler des fonctions client depuis le serveur
- **Fix**: Deplacer la fonction pure dans `lib/toc.ts` (sans "use client"), garder le composant React dans le fichier client
- **Regle**: Les utilitaires purs (pas de hooks) doivent aller dans `lib/`, pas dans `components/`

### JSX IIFE dans .map() callback
- **Erreur**: `{DYNASTY_TIMELINE.map((ruler, i) => ( {(() => { ... })() } ))}` — syntaxe JSX invalide
- **Cause**: Le `.map()` retourne deja du JSX via `()`, l'IIFE cree une expression invalide
- **Fix**: Utiliser `.map((ruler, i) => { const x = ...; return (<.../>); })` avec accolades au lieu de parentheses
- **Regle**: Pour du code logique dans un `.map()`, utiliser la forme avec `{}` et `return`, pas d'IIFE
