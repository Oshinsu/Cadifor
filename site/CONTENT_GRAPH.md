# CONTENT GRAPH — Cadifor Web App

---

## But

Transformer `lore/` en graphe de contenu type, relationnel et navigable pour une application hybride :

- `editorial` : scenes, dossiers, parcours, pages d'entree
- `encyclopedique` : fiches, relations, chronologie, systemes, canon

---

## Sources

Le graphe doit partir de :

- `lore/personnages/`
- `lore/sections/`
- `lore/factions/`
- `lore/annexes/`
- `lore/meta/`
- `lore/meta/scenes/`
- `lore/CHRONOLOGIE.md`

Et se relier explicitement a :

- `lore/meta/pdf_analysis_progress.md`
- `lore/meta/scenes/notation_scenes.md`

---

## Types de noeuds

### `character`

Sources :

- `lore/personnages/*.md`

Champs :

- `slug`
- `title`
- `epithet`
- `era`
- `rankLore`
- `classType`
- `birth`
- `death`
- `reignStart`
- `reignEnd`
- `dynastyRole`
- `tags[]`
- `body`

Relations :

- `appearsInScenes[]`
- `relatedCharacters[]`
- `factions[]`
- `timelineEvents[]`

### `scene`

Sources :

- `lore/meta/scenes/*.md`

Champs :

- `slug`
- `title`
- `sceneType`
- `era`
- `location`
- `primaryCharacters[]`
- `secondaryCharacters[]`
- `themes[]`
- `score`
- `isEntryCandidate`
- `body`

Relations :

- `characters[]`
- `factions[]`
- `metaTexts[]`
- `timelineEvents[]`

### `section`

Sources :

- `lore/sections/*.md`

Champs :

- `slug`
- `title`
- `domain`
- `themes[]`
- `body`

Relations :

- `characters[]`
- `factions[]`
- `scenes[]`
- `annexes[]`

### `faction`

Sources :

- `lore/factions/*.md`

Champs :

- `slug`
- `title`
- `factionType`
- `scope`
- `body`

Relations :

- `characters[]`
- `scenes[]`
- `sections[]`

### `annex`

Sources :

- `lore/annexes/*.md`

Champs :

- `slug`
- `title`
- `annexType`
- `body`

Relations :

- `characters[]`
- `sections[]`
- `factions[]`

### `meta`

Sources :

- `lore/meta/*.md`

Champs :

- `slug`
- `title`
- `metaType`
- `body`

Relations :

- `scenes[]`
- `sections[]`
- `characters[]`

### `timelineEvent`

Source derivee :

- `lore/CHRONOLOGIE.md`

Champs :

- `slug`
- `year`
- `label`
- `summary`
- `relatedCharacters[]`
- `relatedPlaces[]`
- `relatedScenes[]`

### `systemPage`

Sources :

- `lore/meta/pdf_analysis_progress.md`
- `lore/meta/scenes/notation_scenes.md`

Usage :

- pages techniques du site : progression PDF, notation des scenes, carte du corpus

---

## Vues derivees

### `Accueil`

Compose de :

- scene d'entree mise en avant
- parcours editoriaux
- grandes figures
- points d'entree par themes
- progression du corpus

### `Scenes`

Filtres :

- ere
- personnages
- themes
- score

### `Encyclopedie`

Index transversal :

- personnages
- factions
- lieux
- doctrines
- objets
- montures

### `Dossiers`

Pages editoriales composees a partir de plusieurs noeuds :

- ex. `Le diner imperial`
- ex. `La machine du talent`
- ex. `Le Haut Royaume contre le monde`

### `Chronologie`

Vue temps avec liens sortants vers :

- personnages
- scenes
- sections

### `Progression PDF`

Vue systeme :

- plages verifiees
- pourcentage
- sorties deja absorbees
- prochaines zones

---

## Relations minimales a deriver

Le graphe doit permettre, pour n'importe quelle page, d'afficher :

- `lie a`
- `apparait dans`
- `a lire ensuite`
- `contexte`
- `sources du canon`

Relations clefs :

- scene -> personnages
- scene -> themes
- personnage -> scenes
- personnage -> factions
- section -> scenes
- meta -> scenes
- timelineEvent -> personnages / scenes / sections

---

## Routes cibles

- `/`
- `/dossiers`
- `/dossiers/[slug]`
- `/scenes`
- `/scenes/[slug]`
- `/encyclopedie`
- `/encyclopedie/personnages/[slug]`
- `/encyclopedie/factions/[slug]`
- `/encyclopedie/sections/[slug]`
- `/chronologie`
- `/canon/progression-pdf`
- `/canon/notation-scenes`

---

## Regle editoriale

Le site ne doit jamais exposer le graphe comme une simple base de donnees.

Le graphe sert a :

- mieux entrer
- mieux relier
- mieux comprendre
- mieux revenir

Pas a refroidir le lore.
