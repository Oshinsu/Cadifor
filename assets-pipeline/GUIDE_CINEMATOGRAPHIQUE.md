# GUIDE DE PRODUCTION VISUELLE CINÉMATOGRAPHIQUE
## Nano Banana Pro (Gemini 3 Pro Image) — Direction Artistique Cadifor

> Ce document est le guide de production complet pour atteindre et maintenir un niveau HBO
> sur toutes les images générées pour l'encyclopédie Cadifor. Il s'applique à toute scène,
> tout personnage, tout plan. Il remplace conceptuellement le système 3 couches de `prompts.ts`
> par un système 6 couches plus ambitieux, sans modifier le code existant.

---

## I. L'ABYSSE — Pourquoi les anciennes images ne suffisent plus

### Ce qu'on avait (pipeline Gemini actuel — `prompts.ts`)

Le système actuel produit du **concept art AI correct** :
- Système 3 couches : `CAMERA_BASE` + `DIRECTION[shotType]` + `REALISM_GUARD`
- 5 phases séquentielles (héraldique → portraits → lieux → scènes composées → assets site)
- Jusqu'à 14 images de référence en entrée
- Qualité suffisante pour une encyclopédie en ligne

**Mais** :
- Éclairage uniforme, pas de vraie profondeur de champ
- Textures de peau lisses, « plastiques » malgré le REALISM_GUARD
- Compositions symétriques simples — une image = une illustration
- Couleurs saturées de manière uniforme
- Identifiable comme « AI-generated » en 2 secondes

### Ce qu'on vise (les 5 plans du dîner impérial)

Chaque image est un **plan de série télévisée**, pensé comme un storyboard HBO :

**Plan 1 — Establishing shot (plan large symétrique)**
- Cadrage parfaitement symétrique, Marjory à gauche, Rose à droite
- Profondeur de champ réelle — colonnes nettes au premier plan, fond en demi-flou
- Candélabre au centre comme point de fuite
- Les globes dorés flottent à différentes profondeurs, créant de la parallaxe
- Éclairage pratique (bougies + globes) avec un fill subtil — pas de source studio

**Plan 2 — Environment shot (la salle sans personnages)**
- Plan de « set design » pur — l'architecture EST un personnage
- Les miroirs d'arcane (cercles bleus luminescents) sont parfaitement réalisés
- Les globes suivent des trajectoires visibles (fils dorés)
- Cartes maritimes enluminées avec cadres dorés entre les colonnes
- Plafond à caissons avec fresques — détail qu'on ne voit que dans ce plan
- Tables sombres avec gobelets en étain — pas la table impériale, l'espace du service

**Plan 3 — Macro/insert table (les huîtres)**
- Plan type « food photography » de haute gastronomie
- Huîtres sur assiette d'argent avec glace pilée et fenouil marin — fidèle au texte
- Verres en cristal taillé avec bordure or
- Le chemin de lin blanc brodé d'argent visible en détail — « givre discipliné »
- La surface de la pierre sombre ABSORBE la lumière — matité profonde, pas de reflet
- Argenterie posée avec précision d'étiquette

**Plan 4 — Medium close-up Marjory**
- La peau a des pores, des rides, des imperfections réelles
- Subsurface scattering visible sur les oreilles et le cou
- La broderie du corsage est détaillée mais pas ostentatoire
- Le pendentif (pierre pâle, or mince) correspond exactement au texte du dîner
- Les mains coupent avec précision — geste liturgique
- Profondeur de champ f/1.4 — les globes en arrière-plan sont des bokeh dorés

**Plan 5 — Rose entre (plan à travers la porte)**
- Composition en PROFONDEUR — Rose au premier plan, Marjory visible au fond
- Robe ivoire/blanc fluide, plus légère que celle de Marjory — le contraste textile est là
- Le regard de Rose est direct, traversant — « la netteté des consciences »
- Frame-in-frame : la porte cadre Rose, la salle cadre Marjory
- C'est un plan de MISE EN SCÈNE, pas une illustration

### Les 7 différences techniques

| # | Ancien pipeline | Nouveau standard |
|---|---|---|
| 1 | Une image par scène | **5-8 plans** par scène comme un storyboard |
| 2 | Image = illustration | Chaque plan a un **rôle narratif** (establishing, environment, insert, portrait, entrée) |
| 3 | Décor approximatif | **Cohérence de set** — mêmes colonnes, mêmes globes, mêmes textures dans chaque plan |
| 4 | Éclairage studio | **Éclairage pratique** — la lumière vient des globes et bougies, pas d'un softbox |
| 5 | Textures génériques | **Textures matérielles** — pierre, tissu, peau, métal ont des propriétés physiques distinctes |
| 6 | PDC uniforme | **Profondeur de champ variable** — chaque plan a sa propre optique (f/1.4 portrait, f/5.6 establishing) |
| 7 | Couleurs par défaut | **Color grading unifié** — palette constante (or chaud, bleu froid des arcanes, ivoire, noir profond) |

---

## II. CAPACITÉS NANO BANANA PRO — Ce que le modèle sait faire

### Spécifications techniques

| Paramètre | Valeur |
|---|---|
| **Modèle** | `google/gemini-3-pro-image-preview` via OpenRouter |
| **Nom communauté** | Nano Banana Pro |
| **Refs max** | 14 images en entrée (6 objets HD + 5 personnages + 3 style) |
| **Résolution max** | 4096×4096 (4K) |
| **Aspect ratios** | 1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 |
| **Tokens max entrée** | 65 536 |

### Références images — règles d'or

**Résolution minimum** : 1024×1024 (recommandé : 2048×2048)

**Pour les personnages** :
- Le visage doit occuper 30-50% du cadre
- 3 angles minimum : face, 3/4 gauche, 3/4 droite
- Éclairage neutre, diffus, frontal, identique sur les 3 angles
- 6 images = sweet spot (au-delà, rendements décroissants)

**Ordre des références** :
1. Ref 1 — Style/esthétique principale (l'environment de la scène)
2. Ref 2 — Personnage principal (hero portrait face)
3. Ref 3 — Personnage principal (3/4)
4. Ref 4 — Personnage secondaire (hero portrait) si applicable
5. Ref 5 — Personnage secondaire (3/4) si applicable
6. Ref 6+ — Props, set dressing, palette de couleurs

**Conflits** : des refs contradictoires confondent le modèle. Garder les refs thématiquement cohérentes. Si nécessaire, réduire à 2-3 refs très claires.

### Consistance de personnage — le protocole

**Template d'identité (à placer AVANT la description de scène)** :
```
"The person shown in Image 1 is [Nom] — [description physique courte
avec traits distinctifs]. Maintain the exact same facial features —
identical eye shape, nose bridge contour, jawline angle, lip proportions,
and skin texture. [Puis la scène...]"
```

**Principes** :
- Énumérer les traits spécifiques plutôt que « same person »
- Utiliser des termes positifs (« maintain ») plutôt que négatifs (« don't change »)
- L'instruction d'identité vient AVANT la scène
- Taux de consistance : 85-90% au premier passage avec workflow complet

---

## III. PIPELINE DE PRODUCTION — 5 Étapes

### Étape 0 : CHARACTER SHEET (NOUVEAU)

Pour chaque personnage majeur, générer un « character sheet » validé AVANT toute scène composée.

**Workflow** :
1. Générer 5-10 candidats hero image (buste, 2048×2048, éclairage neutre diffus, fond sombre uni)
2. Sélectionner LE meilleur — celui qui correspond le plus au `canon_visuel_marjory_rose.md`
3. Générer les angles : 3/4 gauche et 3/4 droite à partir du hero
   - Prompt : « Generate the same person as shown in Image 1, viewed from a 3/4 left angle. Maintain identical facial features — same eye shape, nose, jawline, and skin texture. »
4. Sélectionner les meilleures variantes angulaires
5. **Test d'identité** : générer une image dans un contexte totalement différent (extérieur jour, armure, etc.) et vérifier visuellement la consistance
6. Constituer le Character Sheet final (3-6 images validées)

**Character Sheets requis pour Cadifor** :
- Marjory « Le Sage » (canon : `canon_visuel_marjory_rose.md` section I)
- Rose « L'Absolue » (canon : `canon_visuel_marjory_rose.md` section II)
- Andrea « La Rougissante » (canon : `prompts.ts` ligne 13)
- Andrea II « La Juste » jeune + mature (canon : `prompts.ts` lignes 14-15)
- Aberthol (canon : `prompts.ts` ligne 11)
- Viki (canon : `prompts.ts` ligne 12)
- Benjamin (canon : `prompts.ts` ligne 20)
- Banni (canon : `prompts.ts` ligne 19)

### Étape 1 : ENVIRONMENT REFERENCES

Pour chaque lieu de scène, générer :
- **Plan large vide** — la salle/le lieu sans personnages, éclairage final
- **Détails architecturaux** — colonnes, arcs, miroirs, fresques (plans rapprochés)
- **Set dressing** — la table dressée, les accessoires, les éléments de décor

Ces images deviennent les refs d'environment pour toutes les scènes dans ce lieu.

### Étape 2 : PROPS REFERENCES

Objets isolés qui seront réutilisés :
- Assiettes, verres, argenterie (pour le dîner)
- Atiesh (pour toute scène avec Marjory ou Rose)
- Globes de lumière flottants (pour les intérieurs impériaux)
- Armes, armures (pour les scènes de bataille/cérémonie)

### Étape 3 : STORYBOARD — Décomposition en plans

Pour chaque scène du lore, **décomposer en plans cinématographiques** :

| Type de plan | Optique simulée | Usage narratif | Refs nécessaires |
|---|---|---|---|
| **Establishing / Wide** | 24mm f/5.6 | Poser la géographie — qui est où, quelle est l'échelle | Environment + personnages |
| **Environment detail** | 35mm f/2.8 | Le décor comme personnage — texture, lumière, architecture | Environment seul |
| **Insert / Macro** | 85mm f/2.0 macro | Détail révélateur — nourriture, objet, main, texture | Props + environment partiel |
| **Medium close-up** | 50mm f/1.4 | Portrait en action — émotion, dialogue, tension | Hero portrait + environment |
| **Over-the-shoulder** | 35mm f/2.0 | Point de vue — dialogue, regard, réaction | 2 portraits + environment |
| **Entrance / Mouvement** | 35mm f/2.0 | Personnage dans l'espace — composition en profondeur | Portrait + environment complet |

**Règle** : minimum 3 plans par scène, idéalement 5-6 pour les scènes majeures.

### Étape 4 : GÉNÉRATION avec prompt SOTA (voir Section IV)

Générer chaque plan avec le système 6 couches. Valider contre la checklist qualité (Section VII).

---

## IV. PROMPT SOTA — Système 6 Couches

### Évolution du système actuel

Le système 3 couches de `prompts.ts` (`CAMERA_BASE` + `DIRECTION` + `REALISM_GUARD`) est correct mais insuffisant pour le niveau HBO. Le système 6 couches sépare les préoccupations :

### Les 6 couches

```
┌─────────────────────────────────────────────────────────────┐
│ COUCHE 1 — CINEMATOGRAPHY HEADER                            │
│ Caméra, optique, film stock, color science                  │
├─────────────────────────────────────────────────────────────┤
│ COUCHE 2 — SCENE DESCRIPTION                                │
│ Langage naturel : qui, quoi, où, action, position           │
│ + instruction d'identité liée aux refs                      │
├─────────────────────────────────────────────────────────────┤
│ COUCHE 3 — LIGHTING DESIGN                                  │
│ Sources pratiques, ratio key/fill, température, direction   │
├─────────────────────────────────────────────────────────────┤
│ COUCHE 4 — ART DIRECTION                                    │
│ Production design, costume, palette, références visuelles   │
├─────────────────────────────────────────────────────────────┤
│ COUCHE 5 — CAMERA SPECIFICS                                 │
│ Angle, PDC, point de focus, bokeh, grain                    │
├─────────────────────────────────────────────────────────────┤
│ COUCHE 6 — REALISM GUARD                                    │
│ Anti-AI artifacts, textures matérielles, interdictions       │
└─────────────────────────────────────────────────────────────┘
```

### Templates par couche

**COUCHE 1 — CINEMATOGRAPHY HEADER** (remplace `CAMERA_BASE`)
```
Cinematic film still from a premium HBO fantasy drama series.
Shot on ARRI ALEXA Mini LF with Cooke S7/i {focal}mm T{stop} lens.
Kodak Vision3 500T color science, ACES color pipeline.
Aspect ratio: {ratio}.
```

Variantes de focal/stop par type de plan :
- Establishing : `24mm T2.8`
- Environment : `35mm T2.0`
- Insert/Macro : `85mm T2.0`
- Medium close-up : `50mm T1.4`
- Over-the-shoulder : `35mm T2.0`
- Entrance : `35mm T2.0`

**COUCHE 2 — SCENE DESCRIPTION** (en langage naturel, précis)
```
[Instruction d'identité liée aux refs si personnages présents]
[Description de la scène en phrases complètes : sujet + action + position]
[Détails narratifs spécifiques extraits du lore]
```

Exemple :
```
The person shown in Image 1 is Marjory — a 65-year-old empress with
silver-white immaculate hair in a structured chignon, dark grey
anthracite eyes, aquiline nose, porcelain skin. Maintain her exact
facial features.

She sits at the head of a dark stone table, cutting salmon with
surgical precision using a silver knife. Her posture is perfectly
vertical — her back never touches the chair. A thin gold necklace
with pale stones rests at her throat. Her expression is controlled,
evaluating — every micro-movement deliberate.
```

**COUCHE 3 — LIGHTING DESIGN** (extraite et détaillée de `DIRECTION`)
```
Practical lighting only — no studio lights.
Key light: {source pratique} ({température}K).
Fill: {source secondaire} (ratio {X}:1 key-to-fill).
Rim/accent: {source d'accentuation} ({couleur}).
Shadows: {qualité} — {deep velvet / soft gradient / hard architectural}.
```

Exemples par scène type :
- **Dîner** : Key = globes dorés flottants (3200K amber). Fill = reflets chandelles sur marbre (4:1). Rim = miroirs d'arcane bleu-blanc sur murs lointains. Shadows = deep velvet.
- **Extérieur jour** : Key = soleil direction {X} (5600K). Fill = ciel (bounce naturel, 2:1). Shadows = atmospheric, avec haze de distance.
- **Campagne/tente** : Key = lampe à huile depuis le bas (2800K). Fill = lumière du jour diffusée par toile de tente (3:1). Shadows = warm, granuleux.
- **Portrait formel** : Key = source unique haute directionnelle type cathédrale (4000K). Fill = reflets marbre (6:1). Shadows = architecturaux, géométriques.

**COUCHE 4 — ART DIRECTION** (NOUVEAU — absente du système actuel)
```
Production design: {période/style}. {Détails de set}.
Costume design: {description du canon_visuel}.
Color palette: {dominantes + accents}.
Visual reference: {série/film + scène spécifique}.
Aesthetic: grounded realism, never fantasy kitsch.
```

**COUCHE 5 — CAMERA SPECIFICS** (extraite de `DIRECTION`, enrichie)
```
Camera angle: {eye level / low angle / slight high angle / dutch}.
Depth of field: {shallow f/1.4 / moderate f/2.8 / deep f/5.6}.
Focus point: {sujet précis — ex: "her hands cutting the salmon"}.
Background: {description du bokeh ou de la netteté arrière}.
Film grain: subtle, natural, organic.
Composition: {rule of thirds / centered symmetry / frame-in-frame / leading lines}.
```

**COUCHE 6 — REALISM GUARD** (amélioration du `REALISM_GUARD` existant)
```
Photorealistic.
Skin: visible pores, natural imperfections, subsurface scattering
  on ears and translucent areas. Age-appropriate — wrinkles, texture.
Fabric: real weight, drape, weave texture visible. Heavy silk falls
  vertically, linen shows thread count. Embroidery is tactile.
Metal: correct specular response, micro-scratches on silver, patina
  on gold. No chrome-like reflections.
Stone: matte absorption, no glossy reflections. Surface drinks light.
Glass: correct refraction, meniscus on liquids, fingerprints optional.
No plastic skin, no haloing, no AI glow, no oversharpening,
  no uncanny valley, no fantasy kitsch, no symmetrical perfection.
```

### Fonction withStyleV2 (référence pour implémentation future)

```typescript
type ShotTypeV2 =
  | "establishing"
  | "environment"
  | "insert"
  | "medium_closeup"
  | "over_shoulder"
  | "entrance"
  | "portrait"
  | "battle"
  | "wide";

const FOCAL: Record<ShotTypeV2, string> = {
  establishing: "24mm T2.8",
  environment: "35mm T2.0",
  insert: "85mm T2.0",
  medium_closeup: "50mm T1.4",
  over_shoulder: "35mm T2.0",
  entrance: "35mm T2.0",
  portrait: "85mm T1.4",
  battle: "50mm T2.8",
  wide: "14mm T5.6",
};

function withStyleV2(
  sceneDescription: string,
  lightingDesign: string,
  artDirection: string,
  cameraSpecifics: string,
  shotType: ShotTypeV2,
  aspectRatio: string = "16:9"
): string {
  const header = `Cinematic film still from a premium HBO fantasy drama series. Shot on ARRI ALEXA Mini LF with Cooke S7/i ${FOCAL[shotType]} lens. Kodak Vision3 500T color science, ACES color pipeline. Aspect ratio: ${aspectRatio}.`;

  const realism = `Photorealistic. Skin: visible pores, natural imperfections, subsurface scattering on ears and translucent areas. Fabric: real weight, drape, weave texture visible. Metal: correct specular response, micro-scratches. Stone: matte absorption, no glossy reflections. No plastic skin, no haloing, no AI glow, no oversharpening, no uncanny valley, no fantasy kitsch.`;

  return `${header}\n\n${sceneDescription.trim()}\n\n${lightingDesign.trim()}\n\n${artDirection.trim()}\n\n${cameraSpecifics.trim()}\n\n${realism}`;
}
```

---

## V. DIRECTION ARTISTIQUE — Le Dîner Impérial (6 prompts complets)

Cette section contient les 6 prompts complets du dîner impérial, testables directement. Ils servent de **démonstration** et de **template** pour toutes les autres scènes.

Source textuelle : `lore/meta/scenes/diner_imperial.md`
Canon visuel : `lore/meta/canon_visuel_marjory_rose.md` sections I, II, III

### Plan 1 — Establishing shot (plan large symétrique)

**Références** : Environment ref (salle) + Marjory hero + Rose hero
**Aspect ratio** : 21:9

```
Cinematic film still from a premium HBO fantasy drama series. Shot on ARRI ALEXA Mini LF with Cooke S7/i 24mm T2.8 lens. Kodak Vision3 500T color science, ACES color pipeline. Aspect ratio: 21:9.

The person shown in Image 2 is Marjory — a 65-year-old empress with silver-white immaculate hair in a perfect structured chignon, dark grey anthracite eyes, aquiline features, porcelain skin. The person shown in Image 3 is Rose — a 22-year-old woman with dark brown hair with subtle auburn highlights, almost-black deep eyes, luminous skin. Maintain their exact facial features.

Wide symmetrical shot of an imperial dining hall. Marjory sits at the left end of a long dark stone table, Rose at the right. Between them: a candelabra as the central vanishing point. The table is carved from a single slab of dark stone that absorbs light. White linen runners embroidered with silver frost patterns. Gold-rimmed porcelain, crystal glasses, silver cutlery. Pale stone columns with cold blue veins frame the composition. Between the columns: illuminated maritime maps in gold frames, polished obsidian panels, dormant arcane mirrors. Golden luminous orbs float at human height along perfect circuits, at varying depths creating parallax.

Practical lighting only. Key light: floating golden orbs at varying heights, 3200K warm amber glow. Fill: reflected candlelight from dark marble surfaces, ratio 4:1 key-to-fill. Rim accent: dormant blue-white arcane mirrors on far walls casting subtle cold highlights. Shadows: deep velvet, architectural — columns cast geometric shadow patterns across the floor.

Production design: late medieval imperial, museum-quality. Dark mineral aesthetic — marble, obsidian, stone. Costume: Marjory in ash-blue heavy silk with almost-invisible mithril embroidery; Rose in ivory-to-pearl-grey flowing lighter fabric. Color palette: warm gold, cold blue veins, deep velvet shadows, ivory linen, dark stone. Visual reference: Game of Thrones S4-S6 Cersei dining scenes by Fabian Wagner. Grounded realism, never fantasy kitsch.

Camera angle: eye level, perfectly centered. Depth of field: moderate f/5.6 — columns sharp in foreground, far wall in soft focus. Focus point: the space between the two women. Composition: perfect bilateral symmetry, candelabra at center. Film grain: subtle, natural.

Photorealistic. Skin: visible pores, natural imperfections, subsurface scattering. Fabric: real weight, drape, weave texture — heavy silk falls vertically, linen shows thread count. Metal: correct specular response, micro-scratches on silver, warm patina on gold. Stone: matte absorption, surface drinks light. No plastic skin, no haloing, no AI glow, no oversharpening, no fantasy kitsch.
```

### Plan 2 — Environment shot (la salle sans personnages)

**Références** : Environment ref seule
**Aspect ratio** : 16:9

```
Cinematic film still from a premium HBO fantasy drama series. Shot on ARRI ALEXA Mini LF with Cooke S7/i 35mm T2.0 lens. Kodak Vision3 500T color science, ACES color pipeline. Aspect ratio: 16:9.

An empty imperial dining hall, shot as a pure production design showcase — no people visible. The architecture is the character. Pale stone columns with cold blue mineral veins rise to a coffered ceiling with faded frescoes barely visible in the upper darkness. Between the columns: illuminated maritime maps in ornate gold frames, polished obsidian panels reflecting distorted light, dormant arcane mirrors — perfect circles of blue-white luminescence, so pure they reflect not bodies but the quality of presence. Golden luminous orbs float along precise mathematical circuits, connected by faintly visible golden threads. In the foreground: dark service tables with pewter goblets, folded linen. The main imperial table of dark stone stretches into the middle ground — empty, set with white silver-embroidered linen runners, gold-rimmed porcelain, crystal. The room is not vast. It is exact.

Practical lighting only. Key light: floating golden orbs at varying heights creating pools of warm 3200K amber. Secondary: candles drifting on imperceptible air currents as if fire itself knew etiquette. Cool accent: arcane mirrors casting blue-white circles on adjacent stone. Shadows: deep, architectural, multiplied by columns. The ceiling disappears into warm darkness above the orb-line.

Production design: late medieval imperial, museum-quality craftsmanship. Every surface has a distinct material property — stone absorbs, gold reflects warmly, crystal refracts, obsidian mirrors darkly, linen diffuses. Color palette: warm gold, cold blue veins, deep black stone, ivory linen, pewter grey. Visual reference: Andor institutional architecture meets Game of Thrones Red Keep interiors. No fantasy kitsch — this could be a real palace filmed on location.

Camera angle: slight low angle, emphasizing column height and ceiling depth. Depth of field: moderate f/2.8 — foreground service tables sharp, far wall slightly soft. Focus: middle-ground imperial table. Composition: strong leading lines from columns converging at far door. Film grain: subtle, organic.

Photorealistic. Fabric: real weight, linen thread count visible. Metal: correct specular response, pewter dull, gold warm, silver precise. Stone: matte absorption — dark stone surface drinks light, pale columns have mineral texture. Glass: correct refraction in crystal. No AI glow, no plastic surfaces, no oversharpening.
```

### Plan 3 — Insert/Macro (les huîtres)

**Références** : Props ref (table dressée) + Environment ref
**Aspect ratio** : 3:2

```
Cinematic film still from a premium HBO fantasy drama series. Shot on ARRI ALEXA Mini LF with Cooke S7/i 85mm T2.0 macro lens. Kodak Vision3 500T color science, ACES color pipeline. Aspect ratio: 3:2.

Extreme close-up of a place setting on the imperial dining table. Cold Kul Tiras oysters on a silver platter, resting on crushed ice mixed with sea fennel — each oyster glistening with brine, shells rough and mineral against the refined silver. Beside the platter: a crystal wine glass with gold rim containing pale dry white wine, the meniscus catching golden light. White linen runner embroidered with silver thread in frost patterns — so fine it looks like disciplined ice crystals. The dark stone table surface beneath absorbs all light — deep matte, no reflection, drinking every photon. Silver cutlery laid with ceremonial precision. A small porcelain dish with thin shavings of something translucent. In the shallow background: the edge of another place setting, out of focus.

Practical lighting only. Key light: golden orb floating just above frame, 3200K warm amber, casting directional light across the table surface from upper left. Fill: ambient candlelight reflected from crystal and silver, ratio 5:1. Shadows: the stone table creates deep shadow pockets between objects. Specular highlights dance on crystal facets and silver edges.

Production design: imperial haute cuisine, not restaurant photography — this is political gastronomy. Every element placed with the precision of statecraft. The oysters are real, rough, alive; the silver is ancient, scratched, warm from centuries of use; the crystal is hand-cut, imperfect in the way only real craft achieves. Color palette: cool shell grey, warm gold reflections, ice-white linen, dark absorbing stone, pale wine. Visual reference: high-end food photography crossed with Game of Thrones banquet close-ups.

Camera angle: slight overhead, 30-degree downward tilt. Depth of field: very shallow f/2.0 — oysters razor-sharp, background setting dissolving into golden bokeh. Focus point: the nearest oyster and the ice beneath it. Composition: diagonal leading line from linen edge to oyster to wine glass. Film grain: subtle.

Photorealistic. Food: wet, glistening, organic textures — brine on oyster flesh, ice crystals, fennel fronds. Fabric: linen thread count visible, embroidery tactile, each silver thread distinct. Metal: silver with micro-scratches and centuries of polish, not chrome. Stone: absolute matte, light-absorbing. Glass: correct refraction, liquid meniscus, facet sparkle. No AI glow, no plastic food, no oversharpening.
```

### Plan 4 — Medium close-up Marjory

**Références** : Marjory hero + Marjory 3/4 + Environment ref
**Aspect ratio** : 3:4

```
Cinematic film still from a premium HBO fantasy drama series. Shot on ARRI ALEXA Mini LF with Cooke S7/i 50mm T1.4 lens. Kodak Vision3 500T color science, ACES color pipeline. Aspect ratio: 3:4.

The person shown in Image 1 is Marjory — a 65-year-old empress of pure architectural precision. Silver-white immaculate hair in a structured chignon, not a strand displaced. Dark grey anthracite eyes, aquiline nose, high angular cheekbones, porcelain skin with real age — fine lines at the eyes, slight hollows beneath cheekbones. Maintain her exact facial features — identical eye shape, nose bridge contour, jawline angle, lip proportions, skin texture.

Medium close-up of Marjory at the dinner table. She is cutting salmon with a silver knife, without magic — the metal cuts more cleanly than any spell could. Her posture is perfectly vertical, spine never touching the chair back. She wears an ash-blue heavy silk dress with almost-invisible mithril embroidery in the cuffs and hem — visible only at oblique angles where the light catches it. At her throat: a thin line of pale stones set in very thin gold, perfect enough to forbid commentary. Her expression is controlled evaluation — she has seen everything, judged everything, and decided to show nothing yet. Her hands are bare, long, precise, surgical.

Practical lighting only. Key light: floating golden orb above and to the right, 3200K warm amber, creating a Rembrandt lighting pattern on her face — triangle of light on the far cheek. Fill: ambient candlelight reflected from the dark stone table, ratio 5:1. Rim: subtle blue-white from a distant arcane mirror, catching the edge of her silver-white hair. Subsurface scattering visible on her ears and the translucent skin of her neck.

Production design: the intimacy of absolute power. Costume per canon_visuel section I.4.A — ash-blue heavy silk, mithril embroidery almost invisible, thin gold necklace with pale stones. No ornament beyond necessity. Color palette: ash blue, warm gold highlights on skin and metal, deep shadow pools, silver-white hair as the brightest element. Visual reference: Helen Mirren in The Queen crossed with Game of Thrones Cersei dinner scenes. Severe beauty, architectural.

Camera angle: eye level, slightly left of center. Depth of field: very shallow f/1.4 — Marjory's face and hands razor-sharp, golden orbs in background dissolved into soft circular bokeh. Focus point: her eyes and hands simultaneously (split focus plane). Composition: rule of thirds — her eyes on the upper third, hands on the lower third. Film grain: subtle, warm.

Photorealistic. Skin: visible pores, real wrinkles at 65, subsurface scattering on ears and neck, porcelain texture not plastic. Hair: individual silver-white strands visible, real weight and density. Fabric: heavy silk with real drape and weight, mithril threads catching light microscopically. Metal: knife blade reflecting scene, thin gold necklace warm and ancient. No plastic skin, no AI glow, no age-smoothing, no fantasy kitsch. She IS 65 and 65 has become sovereign.
```

### Plan 5 — Over-the-shoulder (Rose vue par Marjory)

**Références** : Marjory hero + Rose hero + Marjory 3/4 + Rose 3/4 + Environment ref
**Aspect ratio** : 16:9

```
Cinematic film still from a premium HBO fantasy drama series. Shot on ARRI ALEXA Mini LF with Cooke S7/i 35mm T2.0 lens. Kodak Vision3 500T color science, ACES color pipeline. Aspect ratio: 16:9.

The person in Image 1 is Marjory — silver-white hair, dark grey eyes, 65, aquiline features. The person in Image 2 is Rose — dark brown hair with auburn highlights, almost-black eyes, 22, luminous skin. Maintain their exact facial features.

Over-the-shoulder shot from behind Marjory's right shoulder. Marjory is in the foreground, her silver-white chignon and ash-blue shoulder visible but soft — we are looking past her toward Rose. Rose sits across the dark stone table, facing camera. She has just lifted an oyster to her mouth using telekinesis — the shell rises from her plate on its own, gliding to her lips as if gravity received new orders. Her expression is serene certainty — the tranquility of someone who already understands everything being said. Her dress is lighter than Marjory's: ivory to pearl-grey, flowing fabric that falls rather than stands. Between them: the length of the stone table, white linen runners, crystal, silver, golden orbs floating at varying heights.

Practical lighting only. Key light: golden orbs casting warm 3200K pools on both faces from above. Fill: candlelight ambient, ratio 4:1. On Marjory (foreground): rim light from behind, catching the edge of her hair and shoulder. On Rose: frontal golden light from the orbs, her skin seeming to emit rather than reflect light — not magical glow, but the radiance of absolute self-possession. Cool blue accent from arcane mirrors on the far wall behind Rose.

Production design: two women across dark stone, gold-rimmed porcelain, and the fate of kingdoms. Costume contrast: Marjory in structured heavy ash-blue (architecture), Rose in flowing ivory-pearl-grey (light passing through architecture). The table between them is the exact distance of an empire — not a hug, not a shout, not intimacy, not distance. Color palette: warm gold, cool blue accents, ash blue vs. ivory, dark stone anchor. Visual reference: Game of Thrones Cersei/Margaery dinner tension.

Camera angle: eye level, over right shoulder. Depth of field: moderate f/2.0 — Marjory's shoulder soft, Rose's face sharp, background columns in gentle blur. Focus point: Rose's face and hands. Composition: Marjory frames the left third (dark, structured), Rose occupies the right two-thirds (lighter, luminous). Film grain: natural.

Photorealistic. Skin: Marjory — porcelain, aged, fine-textured; Rose — luminous, alive, subsurface warmth. Fabric: weight contrast visible — Marjory's heavy silk vs. Rose's flowing lighter weave. The telekinetic oyster must look physically real — wet, glistening, caught mid-flight with no visible force. No AI glow, no plastic, no oversharpening.
```

### Plan 6 — Rose entre (frame-in-frame)

**Références** : Rose hero + Rose 3/4 + Environment ref
**Aspect ratio** : 3:4

```
Cinematic film still from a premium HBO fantasy drama series. Shot on ARRI ALEXA Mini LF with Cooke S7/i 35mm T2.0 lens. Kodak Vision3 500T color science, ACES color pipeline. Aspect ratio: 3:4.

The person shown in Image 1 is Rose — a 22-year-old woman with dark brown hair with subtle auburn highlights in an elaborate yet effortless arrangement, almost-black deep eyes with a traversing quality, luminous skin that seems to emit rather than reflect light. Maintain her exact facial features — identical eye shape, nose bridge, jawline, lip proportions.

Rose enters the imperial dining hall through a tall stone doorway. She is in the near foreground, walking toward camera with unhurried certainty. Her dress flows between ivory and pearl-grey — lighter, more fluid than what awaits inside. The fabric moves like water around her steps. At her fingers, several discrete rings, too simple to be mere ornament. Under the fabric at her belt, the shadow of a short blade — Cadifor, even in politeness. Her expression: serene, direct, traversing — the eyes of someone to whom the world arrives faster than to others.

Behind her, through the depth of the hall: Marjory is visible at the far end of the dark stone table, a distant figure of silver-white and ash-blue, already seated, already composed. The doorway frames Rose; the hall frames Marjory. Frame-in-frame composition — two frames, two women, two forms of power.

Practical lighting only. On Rose (foreground): warm backlight from the corridor behind her, creating a subtle golden halo on her hair edges and shoulder — contre-jour. Her face lit by the golden orbs inside the hall, transitional lighting as she crosses the threshold. On the hall beyond: established warm amber from orbs and candles, Marjory in the deep background receiving the same dinner lighting. Shadows: the doorframe casts architectural shadow, framing Rose geometrically.

Production design: the entrance of the empire's future through the doorway of its present. Rose's lighter, flowing costume contrasts with the heavy mineral architecture around her. The corridor behind is darker, simpler — she emerges from shadow into the crafted light of the imperial space. Color palette: ivory-pearl-grey figure against dark stone frame, warm gold depth, cold blue architectural accents. Visual reference: Andor character entrances — architectural framing, negative space, political weight in a doorway.

Camera angle: eye level, centered on Rose. Depth of field: moderate f/2.0 — Rose sharp in foreground, Marjory recognizable but soft in deep background. Focus point: Rose's eyes and the line of her stride. Composition: frame-in-frame — doorway rectangle contains Rose, hall rectangle beyond contains Marjory. Strong depth perspective. Film grain: subtle.

Photorealistic. Skin: Rose's luminous quality comes from perfect health and self-possession, not magical glow. Subsurface warmth visible. Fabric: the ivory-pearl-grey dress flows with real weight — lighter than Marjory's heavy silk, catching light differently, moving with the body. Hair: dark brown with auburn highlights catching the warm backlight, natural wave, alive. The blade shadow under fabric is subtle — suggested, not explicit. No AI glow, no fantasy princess aesthetic, no oversharpening. She doesn't occupy space — she transforms it.
```

---

## VI. DIRECTION ARTISTIQUE PAR TYPE DE SCÈNE

### Dîner impérial (voir Section V pour prompts complets)

- **DA** : GOT intérieurs Cersei (Fabian Wagner) + Andor architecture
- **Palette** : or chaud, bleu froid des arcanes, pierre sombre, ivoire
- **Éclairage** : pratique — globes dorés (3200K) + bougies + miroirs bleu-blanc
- **Texture dominante** : pierre matte absorbante, soie lourde, cristal, argent ancien

### Bataille / Siège

- **DA** : GOT Battle of the Bastards (Fabian Wagner) + Andor Ferrix scenes
- **Palette** : désaturée sauf highlights sélectifs (feu orange, sang, acier)
- **Éclairage** : lumière naturelle dure + feu + poussière atmosphérique
- **Keywords** : `motion blur on action, dust particles, atmospheric smoke, desaturated color grade with selective warm highlights on fire and blood, kinetic visceral energy`
- **Optique** : 50mm f/2.8, légère motion blur, net sur sujet focal
- **Magie** : arcane bleu-blanc géométrique (Marjory), duale bleu-violet en hélice (Rose) — jamais cartoon

### Duel / Combat singulier

- **DA** : GOT Oberyn vs Montagne + Warcraft film (magie intégrée)
- **Palette** : contrastes extrêmes — éclairage dual (arcane bleu + feu doré)
- **Éclairage** : contre-jour + sources de magie comme éclairage pratique
- **Keywords** : `dual lighting sources, magical realism, arcane geometry visible in air, physical impact felt, sweat and breath visible`
- **La magie a une physicalité** : elle projette des ombres, affecte la lumière ambiante, a du poids visuel

### Bal / Cérémonie

- **DA** : GOT Purple Wedding + Andor Senate scenes
- **Palette** : multicouche de lumière (chandeliers, fenêtres hautes, magie ambiante)
- **Éclairage** : sources multiples à différentes températures — chandeliers 2800K, fenêtres 5600K, magie 8000K bleu
- **Keywords** : `multiple practical light sources at different color temperatures, crowd scenes with depth, formal architecture, political choreography`
- **Foule** : figures reconnaissables au premier plan, silhouettes distinctes au second plan, foule douce au fond

### Portrait formel

- **DA** : Vermeer + Rembrandt + peinture flamande
- **Palette** : tons chauds sur peau, fond froid, source unique directionnelle
- **Éclairage** : fenêtre unique (Vermeer pour Rose, cathédrale pour Marjory)
- **Keywords** : `single directional light source, Rembrandt triangle on cheek, warm skin against cool background, architectural shadows, Flemish painting quality`
- **Pour Marjory** : lumière de cathédrale, géométrique, imposante
- **Pour Rose** : lumière de Vermeer, douce mais directionnelle, intime

### Campagne militaire

- **DA** : GOT Beyond the Wall + Andor field operations
- **Palette** : tons terre, granuleux, désaturé
- **Éclairage** : lampe à huile basse (2800K) + lumière jour filtrée par toile de tente
- **Keywords** : `campaign tent interior, oil lamp from below, canvas-filtered daylight, maps and strategy documents, worn leather, practical military reality`

### Mort / Scène de fin

- **DA** : GOT Red Wedding aftermath + Andor sacrifice scenes
- **Palette** : heure dorée en contre-jour — beauté en guerre avec horreur
- **Éclairage** : contre-jour doré derrière le sujet, ombres froides sur le visage
- **Keywords** : `golden hour backlight, cold shadows on face, beauty at war with horror, final dignity, light leaving the frame`

---

## VII. CHECKLIST QUALITÉ — Validation par image

Chaque image générée doit passer cette checklist avant validation :

### Textures matérielles
- [ ] **Peau** : pores visibles, SSS sur zones translucides (oreilles, cou), imperfections naturelles, âge réel
- [ ] **Tissu** : poids réel (la soie lourde TOMBE, le lin montre sa trame), broderie tactile
- [ ] **Métal** : réponse spéculaire correcte, micro-rayures sur argent, patine sur or
- [ ] **Pierre** : absorption matte, pas de reflets glossy, surface qui boit la lumière
- [ ] **Verre/Cristal** : réfraction correcte, ménisque sur liquides, facettes

### Éclairage
- [ ] **Sources identifiables** : chaque lumière vient d'un endroit réel (bougie, globe, fenêtre)
- [ ] **Pas de studio** : aucune lumière plate, aucun fill sans source
- [ ] **Ratio key/fill visible** : ombres profondes, pas d'éclairage HDR uniforme
- [ ] **Température cohérente** : les sources chaudes sont chaudes, les arcanes sont froids

### Composition
- [ ] **Profondeur de champ** : cohérente avec l'optique déclarée dans le prompt
- [ ] **Focus** : point de netteté sur le sujet principal, pas « tout net »
- [ ] **Rôle narratif** : le plan raconte quelque chose — il n'illustre pas, il MONTRE
- [ ] **Composition intentionnelle** : rule of thirds, frame-in-frame, leading lines, ou symétrie assumée

### Consistance personnages
- [ ] **Visage** : match la ref hero — yeux, nez, mâchoire, proportions
- [ ] **Palette vestimentaire** : conforme au `canon_visuel_marjory_rose.md`
- [ ] **Posture** : conforme au canon (Marjory = colonne, Rose = aisance naturelle)
- [ ] **Éléments architecturaux** : cohérents d'un plan à l'autre de la même scène

### Anti-AI
- [ ] **Pas de glow artificiel** : la lumière a une source, pas une aura
- [ ] **Pas de peau plastique** : texture réelle, pas lissée
- [ ] **Pas de symétrie parfaite** : sauf si la composition la demande (establishing centré)
- [ ] **Mains correctes** : 5 doigts, proportions anatomiques, articulations visibles
- [ ] **Pas de fantasy kitsch** : pas de cristaux flottants gratuits, pas d'auras colorées

---

## VIII. WORKFLOW DE CONSISTANCE MULTI-PERSONNAGE

### Protocole « Character Lock »

**Phase 1 — Hero Image**
1. Générer 5-10 candidats (2048×2048, éclairage neutre diffus, fond sombre uni, visage = 40-50% du cadre)
2. Comparer chaque candidat au canon visuel écrit
3. Sélectionner UN hero — le meilleur match

**Phase 2 — Character Sheet**
4. Générer 3/4 gauche à partir du hero :
   ```
   Generate the same person as shown in Image 1, viewed from a 3/4 left
   angle. Maintain identical facial features — same eye shape, nose bridge
   contour, jawline angle, lip proportions, and skin texture. Same lighting,
   same background.
   ```
5. Générer 3/4 droite (même prompt, angle inversé)
6. Sélectionner les meilleurs (3-5 candidats par angle)

**Phase 3 — Validation**
7. Test d'identité : générer le personnage dans un contexte RADICALEMENT différent
   (extérieur jour, armure, action) avec le character sheet comme ref
8. Vérifier visuellement : le visage est-il immédiatement reconnaissable ?
9. Si drift > 15% : recommencer les phases 1-2 avec un hero plus distinctif

**Phase 4 — Utilisation en production**
10. Toujours inclure au minimum 2 refs du character sheet (face + 3/4)
11. Toujours placer l'instruction d'identité AVANT la description de scène
12. Auditer la consistance toutes les 10-20 générations

### Ordre des refs pour scènes à 2 personnages

```
Image 1 : Environment ref (salle/lieu) → style anchor
Image 2 : Marjory hero face → identité principale
Image 3 : Marjory 3/4 → renfort identité
Image 4 : Rose hero face → identité secondaire
Image 5 : Rose 3/4 → renfort identité
Image 6 : Props/set dressing ref → détails de production
```

### Diagnostic de dérive

| Symptôme | Cause probable | Correction |
|---|---|---|
| Forme des yeux incohérente | Couverture angulaire insuffisante | Ajouter une ref 3/4 + gros plan yeux |
| Mâchoire qui change | Éclairage incohérent entre refs | Renormaliser les ombres sur les refs |
| Teint qui dérive | Espace colorimétrique incohérent | Batch-corriger les refs en sRGB |
| Proportions qui glissent | Trop peu de refs | Passer de 3 à 6 refs pour triangulation |
| Expression qui contamine | Expression forte dans la ref hero | Utiliser une expression neutre comme hero, spécifier l'expression dans le prompt |

---

## RÉFÉRENCES CROISÉES

| Document | Ce qu'il fournit | Usage |
|---|---|---|
| `prompts.ts` | Système 3 couches actuel, prompts existants | Base technique, à faire évoluer vers 6 couches |
| `generate.ts` | Pipeline de génération (refs, retry, manifest) | Infrastructure d'exécution |
| `canon_visuel_marjory_rose.md` | Canon visuel verrouillé (316 lignes) | Source de vérité pour personnages |
| `DOSSIER_GENERATION.md` | Documentation pipeline existante | Contexte historique |
| `manifest.json` | 61 images générées, 5 phases | État actuel du pipeline |
| `lore/meta/scenes/diner_imperial.md` | Texte canon du dîner | Source narrative pour les prompts |

---

## FORMULES DE RAPPEL (à intégrer dans les prompts)

### Marjory — phrase-clé :
> "A 65-year-old empress of pure architectural precision. Silver-white immaculate hair in a structured chignon, dark grey anthracite eyes, aquiline features, porcelain skin with real age. She makes everything around her seem provisional. Blue-so-controlled-it-became-grey robes with almost-invisible mithril embroidery. Luxury through material, never through ornament. Controlled, never cold. Every micro-movement deliberate."

### Rose — phrase-clé :
> "A 22-year-old sovereign of luminous serenity. Dark brown hair with subtle auburn highlights, almost-black deep eyes that see through pretension, skin that seems to emit rather than reflect light. She doesn't occupy space — she transforms it. Ivory to pearl-grey robes that flow like water. The most powerful person in any room, precisely because she is the most serene."

### Les deux ensemble :
> "Mother and daughter. Architecture and light. The empire when it is held (Marjory) and the empire when it is understood (Rose). They face each other across dark stone, gold-rimmed porcelain, and the fate of kingdoms. Their love is not in gesture but in the precision of dialogue."
