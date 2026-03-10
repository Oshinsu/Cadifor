# SCREENSHOTS CK2 — LOT ARBRES DYNASTIQUES

---

## But

Inventaire structuré de tous les screenshots CK2 de type **arbres dynastiques / family trees / maisons / lignages** du projet Cadifor.

Pour chaque arbre :
- Maison identifiée
- Membres visibles dénombrés
- Branches listées
- Prénoms des enfants et petits-enfants notés
- Niveau de certitude C3/C2/C1 attribué

---

## Échelle de certitude

| Niveau | Signification |
|--------|---------------|
| **C3** | Lisible directement, sans ambiguïté forte |
| **C2** | Très probable, lisible en grande partie, détail secondaire éventuellement flou |
| **C1** | Hypothèse prudente, soutenue mais pas suffisante seule |

---

## Arbres recensés

### Screen `c321e1f0-...png` — Maison Cadifor (état ancien)

| Attribut | Valeur |
|----------|--------|
| **Maison** | Cadifor |
| **Membres totaux** | 14 |
| **Membres vivants** | 8 |
| **Prestige** | 270 |
| **Date visible** | Absente |
| **Certitude globale** | C2 |

#### Branches identifiées (C2)
- **Branche fondatrice** : Aberthol
- **Rameaux visibles** : Viki, Gwen, Gloria, June, Andrea

#### Descendance détaillée (C2)
Génération visible avec enfants :
- **Andrea** et **Llane** — enfants : Darla, Nisa, Mirelle
- **Gautmar** et **Celestria**
- Plusieurs enfants listés mais prénoms à vérifier

#### Commentaire
Ce screen confirme une **épaisseur généalogique intermédiaire**. Il justifie de ne pas écrire les Cadifor comme une simple suite de 5-6 monstres isolés. L'absence de date empêche une datation précise, mais la structure suggère une période entre le règne d'Andrea II et la maturité d'Andrea III.

---

### Screen `5c680671-...png` — Maison Cadifor (état tardif)

| Attribut | Valeur |
|----------|--------|
| **Maison** | Cadifor |
| **Membres totaux** | 24 |
| **Membres vivants** | 13 |
| **Prestige** | 320 |
| **Date visible** | Absente |
| **Certitude globale** | C2 |

#### Branches identifiées (C2)
- L'arbre montre une densification reelle de la maison
- Des branches secondaires supplementaires sont visibles

#### Descendance détaillée
- Des noms supplementaires sont visibles dans les branches detaillees
- Ils doivent rester en reserve genealogique tant qu'ils ne sont pas recoupes ailleurs

#### Commentaire
Arbre plus tardif que `c321e1f0`, montrant une **densification réelle** de la maison. Le point ferme ici est quantitatif : `24` membres, `13` vivants, prestige `320`.

---

## Synthèse généalogique Cadifor

### Branches principales établies (C2)

```
Aberthol (fondateur)
│
├── Branche Viki
├── Branche Gwen
├── Branche Gloria
├── Branche June
└── Branche Andrea (ligne souveraine)
    ├── Andrea II la Juste
    │   └── Johnson Trollbane
    │       └── Andrea III la Victorieuse
    │           └── Descendance avec petits-enfants
    └── Autres rameaux collatéraux
```

### Réservoir de prénoms documentés

**Génération Aberthol → enfants** (C2) :
- Viki, Gwen, Gloria, June, Andrea

**Génération Andrea II → enfants** (C2) :
- Andrea III (souveraine)
- Gautmar
- Autres à vérifier

**Génération Andrea III → enfants** (C2) :
- Llane
- Darla
- Jaydyn
- Nisa
- Mirelle

**Petits-enfants d'Andrea III** (C2 — réserve) :
- Benoit
- Rochade
- Loudin
- Kezan

---

## Usage pour le lore actif

### Ce qui peut être injecté (C3/C2)

1. **L'existence de branches collatérales nombreuses** — à répercuter dans `personnages_secondaires.md`
2. **La densité généalogique** — ne pas simplifier la maison à une ligne directe
3. **Les prénoms des enfants d'Andrea III** — Llane, Darla, Jaydyn, Nisa, Mirelle peuvent être utilisés avec mention de source CK2

### Ce qui reste en réserve (C1)

1. **Les petits-enfants** (Benoit, Rochade, Loudin, Kezan) — attendre recoupement
2. **La branch Gloria** — vérifier si elle existe dans d'autres sources
3. **Les liens exacts de parenté** — certains nœuds pourraient être des cousins, neveux, ou alliances matrimoniales plutôt que descendance directe

---

## Formule

> *Les arbres CK2 ne servent pas à fixer immuablement chaque prénom, mais à empêcher l'aplatissement généalogique. Une maison avec 24 membres et 13 vivants n'est pas une lignée de cinq solitaires — c'est une structure sociale dense, avec cousins, oncles, alliances et rivalités internes.*
