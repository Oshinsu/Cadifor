# Pipeline de Generation d'Assets Visuels — Cadifor

## Architecture

Ce dossier contient le systeme de generation automatique d'images pour le site Cadifor
via **Nano Banana Pro** (Gemini 3 Pro Image) a travers **OpenRouter**.

### Principe fondamental : Chaine de dependance des references

NB Pro accepte jusqu'a **14 images de reference** par generation.
Mais pour composer une scene complexe (ex: "Marjory devant le palais de Stormwind"),
il faut d'abord disposer de :
1. Le portrait de Marjory (genere en Phase 1)
2. Le palais de Stormwind (genere en Phase 2)

Ensuite seulement, on peut les combiner en Phase 3.

### Phases de generation

```
Phase 0 — HERALDIQUE & STYLE
  Blason Cadifor (violet + cyan infini)
  Palette de materiaux (mithril, marbre pale, cristal mineral)
  
Phase 1 — PORTRAITS INDIVIDUELS (aucune ref necessaire)
  11 souverains + 8 personnages secondaires
  3-5 angles par personnage principal
  
Phase 2 — LIEUX & ARCHITECTURE (ref: heraldique + materiaux)
  Palais de Stormwind (salle du trone, salle de diner, galerie dynastique)
  Nouvelle-Avalon (interieur intime)
  Clairbois / Ebonlocke
  Lordaeron, Stormgarde
  
Phase 3 — SCENES COMPOSEES (ref: portraits + lieux)
  Diner Imperial (Rose + table + salle + convives)
  Grand Bal de la Reconciliation
  Bataille de Yielden
  Couronnement de Rose
  etc.
```

### Stockage

- `site/public/assets/` — Images finales servies par le site
- `assets-pipeline/manifest.json` — Index de toutes les images generees
- `assets-pipeline/prompts/` — Prompts exacts utilises
- Les images sont commitees dans le repo pour persistance

### API

- Provider: OpenRouter
- Modele: `google/gemini-3-pro-image-preview` (Nano Banana Pro)
- Cle: Variable d'environnement `OPENROUTER_API_KEY`
