# PLAN DE REMONTEE DU PDF — Enrichissement continu

---

## But

Remonter `Lore cadifor 3.pdf` depuis la fin, par blocs contigus, en transformant chaque zone stable en fichier lore dedie ou en enrichissement cible d'un fichier existant.

Important :

ce plan concerne le **PDF remanie**.
Pour toute extraction de fond encore incertaine, le `lore cadifor original.pdf` doit desormais etre consulte **en priorite**, comme source brute premiere dont `Lore cadifor 3.pdf` derive souvent.

Le principe n'est pas de "tout lire puis classer".
Le principe est de :

1. isoler une plage
2. identifier sa nature dominante
3. produire ou enrichir le bon fichier
4. tracer la conversion dans `pdf_analysis_progress.md`

---

## Regle de tri

Chaque bloc lu doit etre classe d'abord selon sa nature dominante :

- `scene` : narration, dialogue, situation, gestes, tension
- `meta` : theorie du monde, doctrine, notes auteur, philosophie
- `faction` : nations, maisons, adversaires, rivalites, groupes
- `annexe` : comparaison, roster, lexique, synthese

Si un bloc nourrit plusieurs categories, on le rattache d'abord a la categorie qui lui donne une sortie canonique lisible.

---

## Ordre de remontee recommande

### Vague 1 — Consolider les blocs deja ouverts

Plages :

- `980-997`
- `944-946`
- `868-870`
- `832-842`
- `781-791`
- `770-773`

Sorties attendues :

- verification des fichiers deja crees
- montage du diner
- maintien a niveau de `bal_de_clairbois.md`
- traque des phrases-source qui meritent d'etre deplacees dans les fichiers meta

### Vague 2 — Bloc sociologique et systemique

Plages :

- `961-979`

Sorties attendues :

- enrichissement de `mecaniques_ck2.md`
- creation de `administration_du_talent.md`
- enrichissement de `metissage.md`
- enrichissement de `geopolitique_mondiale.md`
- enrichissement de `quatre_vies.md`

Sous-blocs utiles :

- `961-968` : mana rare, revelation a 16 ans, malediction du rang 5, egalite des sexes, metissage, multipolaire
- `969-975` : les quatre vies, chacune comme point de vue autonome possible
- `976-979` : porte d'entree vers `bal_de_clairbois.md`

Sous-blocs deja confirms dans cette vague :

- `959-964` : revelation a 16 ans, malediction du rang 5, appareil de detection du talent
- `969-971` : prolongement civilisationnel de l'administration du rare
- `974-975` : cout humain et consequences politiques du verdict de talent
- `976-979` : doctrine Ebonlocke / Clairbois, corbeau, retenue, selection mondaine

### Vague 3 — Bloc Hautes Reprises [VERIFIE]

Plages :

- `949-958`

Sorties attendues :

- relecture de `duel_hautes_reprises.md` — **VERIFIE** : fichier deja complet, scene integrale presente
- extraction de phrases doctrinales sur guerre, verite, correction, ivresse de la guerre — **FAIT** : `doctrines_guerre_hautes_reprises.md` cree

Fichiers verifies/crees :
- `scenes/duel_hautes_reprises.md` — complet, aucun ajout necessaire
- `doctrines_guerre_hautes_reprises.md` — NOUVEAU : doctrines de combat, ivresse de la guerre, correction de lignage, protocole du duel souverain, deux styles de combat (souverainete de forme vs lecture profonde)

### Vague 4 — Bloc carnets et interiorite haute [VERIFIE]

Plages :

- `944-948`

Sorties attendues :

- enrichissement de `carnets_secrets.md` — **VERIFIE** : fichier deja complet (carnets Marjory et Rose integraux)
- enrichissement de `conscience_rose.md` — **VERIFIE** : fichier deja complet
- correction fine de `style_litteraire_approfondi.md` — **VERIFIE** : fichier deja complet, citations du duel presentes

### Vague 5 — Remontee ouverte

Plages :

- `46-169` (desormais a requalifier comme bloc haut-imperial heterogene, et non comme simple suite fondatrice)
- `900-923`
- `900-943`
- puis `871-899`
- puis `843-867`

Sorties attendues :

- nouvelles scenes si un noyau narratif complet apparait
- nouveaux fichiers meta si un systeme du monde merite sa propre assise
- enrichissements de factions si une maison, une nation ou un ordre emerge nettement
- enrichissements de `12_marjory.md`, `13_rose.md` et `14_arwyn.md` si le materiau serre mieux le triangle imperial
- creation de `armee_imperiale.md` si la bande tardive confirme un ordre de bataille assez autonome
- enrichissements de `montures_theologie.md`, `bestiaire.md` et `architecture.md` quand le PDF bascule vers doctrine stable plutot que scene

Sous-blocs deja confirms dans cette vague :

- `46-50` : duel `Rose / Arwyn`, hierarchie cosmique, deux mains d'un meme Empire
- `90-92` : comparaison `Marjory / Rose`, equilibre civilisateur contre totalisation
- `141-143` : architecture de l'armee imperiale, Magisterium de campagne, Ailes de Tirisfal
- `900-907` : palais principal, palais secondaire, salles du trone, salles a manger, ecuries, casernes, armures et robes
- `908-923` : galerie dynastique, lampes marjoryennes, roster des montures, prestige volant, drakes stipendiés, theologie du cheval

---

## Candidats prioritaires de conversion

### A convertir ou enrichir tres vite

- `mecaniques_ck2.md`
- `metissage.md`
- `geopolitique_mondiale.md`
- `quatre_vies.md`
- `duel_hautes_reprises.md`
- `carnets_secrets.md`
- `12_marjory.md`
- `13_rose.md`
- `14_arwyn.md`

### Nouveaux fichiers possibles si les prochains blocs confirment la densite

- `successions_mixtes.md`
- `regime_de_dissuasion_mondiale.md`
- `famille_fondatrice.md`
- `duche_ebonlocke.md`

Fichiers desormais confirmes par la relecture :

- `administration_du_talent.md`
- `famille_fondatrice.md`
- `duche_ebonlocke.md`
- `armee_imperiale.md`

Les autres ne doivent etre crees que si la prochaine relecture produit assez de matiere pour qu'ils soient autonomes.

---

## Mode operatoire

Pour chaque nouvelle plage :

1. relever les pages exactes
2. qualifier la nature du bloc
3. choisir entre `creer`, `enrichir`, `ignorer`
4. si `creer`, viser un fichier autonome et non un depot de notes
5. si `enrichir`, privilegier les fichiers deja centraux du corpus
6. mettre a jour `pdf_analysis_progress.md`

---

## Regle marjoryenne

On ne cree un fichier que si le bloc qu'il recueille est deja assez fort pour tenir debout seul.
Sinon, on enrichit l'existant.
