# SCREENSHOTS CK2 — RELEVE PROCEDURAL DATE

---

## But

Ce fichier sert de releve **procedural, date et ecran par ecran** du lot CK2 deja fourni.

Regle :

- on se limite d'abord a **ce qui apparait vraiment a l'ecran**
- on distingue ensuite les **deductions prudentes**
- on marque enfin les **zones illisibles ou non prouvables**

Comme le lore est evolutif, **chaque capture doit etre lue comme un etat date du monde**, pas comme une verite intemporelle.

---

## UI CK2 — points verifies

Verification rapide faite via la wiki CK2 :

- [Characters](https://ck2.paradoxwikis.com/Characters)
- [Demesne](https://ck2.paradoxwikis.com/Demesne)
- [Levies](https://ck2.paradoxwikis.com/Levies)
- [Realm](https://ck2.paradoxwikis.com/Realm)

Points utiles pour nos screens :

- le **character panel** sert a lire : nom, titre, age, stats, traits, conjoint, parents, enfants, dynastie
- le **demesne/domain size** renvoie aux **possessions personnelles** du personnage, pas a tout le royaume
- la **realm size** renvoie a la taille du royaume entier, et non au seul domaine direct
- les **levies** combinent domaine direct et vassalite selon lois, opinion et structure de jure / de facto
- les **couleurs de carte** ne valent que **dans le screen donne**, selon le mode de carte actif et la date du monde

Regle de securite :

- on ne projette **jamais** une couleur d'un screen sur un autre sans recoupement
- quand `Azeroth` et `Alliance` coexistent sur un meme screen, on lit ici :
  - `bleu clair` = `Azeroth`
  - `bleu fonce` = `Alliance`
- cette equivalence doit rester **datee et locale** au screen, pas devenir une loi universelle

---

## Format de lecture

Pour chaque image :

- `id`
- `nature`
- `date visible`
- `personnage / titre focal`
- `lecture UI sure`
- `carte / couleurs`
- `domaine direct / seigneuries`
- `deductions prudentes`
- `zones d'incertitude`

---

## Echelle de certitude

Pour eviter de transformer une lecture floue en faux canon, chaque information peut etre classee ainsi :

- `C3` : lisible directement, sans ambiguite forte
- `C2` : tres probable, lisible en grande partie, mais un detail secondaire peut rester flou
- `C1` : hypothese prudente, soutenue par le screen mais pas suffisante seule
- `C0` : non affirmable a partir du screen seul

Regle :

- seules les donnees `C3` et certaines `C2` peuvent etre injectees directement dans le canon actif
- les donnees `C1` servent a guider les recherches et les recoupements
- les donnees `C0` ne doivent pas quitter le dossier source

---

## Grille UI CK2 a relire systematiquement

### 1. Barre superieure

Souvent utile pour :

- `date`
- `or / tresorerie`
- `prestige`
- `piete`
- parfois `score`, `taille de domaine`, `limite`, `effectifs disponibles`

Regle :

- si le chiffre est minuscule ou tronque, on le classe au mieux en `C1`

### 2. Panneau personnage a gauche

Souvent utile pour :

- `nom`
- `titre`
- `dynastie`
- `age`
- `stats`
- `religion`
- `culture`
- `traits`
- `conjoint`
- `parents`
- `enfants`

Regle :

- le nom, le titre et l'age sont generalement les champs les plus fiables
- les traits iconographiques ne doivent pas etre tous surinterpretes sans zoom

### 3. Panneau droit / domaine / royaume

Souvent utile pour :

- `domaine direct`
- `realm size` ou equivalent de puissance
- `levies disponibles`
- `revenus / depenses`
- `solde`
- `liste de titres`

Regle :

- toujours distinguer :
  - `domaine direct`
  - `taille de royaume`
  - `levies`
  - `capacite potentielle`

### 4. Carte centrale

Souvent utile pour :

- `couleur politique`
- `frontiere datee`
- `position relative des blocs`
- `zones tampon`
- `theatre de guerre`

Regle :

- la carte ne donne pas seule la nature du lien politique exact
- elle montre d'abord un **etat de surface date**

### 5. Fenetres secondaires

Exemples :

- `historique`
- `lignees`
- `resultat de bataille`
- `siege`
- `capture`

Regle :

- ces fenetres sont souvent les meilleures pour la datation fine des evenements

---

## A. Arbres dynastiques

### Screen `c321e1f0-...png`

- `nature` : arbre dynastique `Maison Cadifor`
- `date visible` : absente
- `lecture UI sure` :
  - `Maison Cadifor`
  - `Famille : 14 membres`
  - `Membres vivants : 8`
  - `Prestige : 270`
  - branche fondatrice visible depuis `Aberthol`
  - rameaux visibles : `Viki`, `Gwen`, `Gloria`, `June`, `Andrea`
  - branche recente visible : `Gautmar`, `Celestria`, plusieurs enfants `Andrea` / `Llane` / `Darla` / `Nisa` / `Mirelle`
- `carte / couleurs` : non applicable
- `domaine direct / seigneuries` : non applicable
- `deductions prudentes` :
  - le screen confirme une **epaisseur genealogique intermediaire**
  - il justifie de ne pas ecrire les Cadifor comme une simple suite de 5-6 monstres isoles
- `zones d'incertitude` :
  - pas de date
  - certains prenoms sont lisibles mais pas encore assez solides pour canonisation fine sans recoupement

### Screen `5c680671-...png`

- `nature` : arbre dynastique `Maison Cadifor`
- `date visible` : absente
- `lecture UI sure` :
  - `Maison Cadifor`
  - `Famille : 24 membres`
  - `Membres vivants : 13`
  - `Prestige : 320`
  - la branche recente montre mieux la descendance autour de `Andrea`, `Elron`, `Darla`, `Jaydyn`, `Nisa`, `Mirelle`
  - apparition de petits-enfants comme `Benoit`, `Rochade`, `Loudin`, `Kezan`
- `carte / couleurs` : non applicable
- `domaine direct / seigneuries` : non applicable
- `deductions prudentes` :
  - arbre plus tardif que `c321...`
  - densification reelle de la maison
- `zones d'incertitude` :
  - pas de date
  - certains noms doivent rester en `reserve genealogique` tant qu'on n'a pas recoupe avec d'autres screens

---

## B. Andrea II / Stormgarde / enfance d'Andrea III

### Screen `fc4efecd-...png`

- `nature` : fiche souveraine + carte politique
- `date visible` : `26 octobre 739`
- `personnage / titre focal` : `Haute reine Andrea la Juste de Azeroth`
- `age visible` : `35`
- `lecture UI sure` :
  - Andrea II est deja au sommet azerothien a cette date
  - stats visibles globalement coherentes avec le dossier deja etabli
  - bloc domaine / ressources visible a droite, mais plusieurs chiffres fins restent trop petits pour securisation totale
- `carte / couleurs` :
  - `bleu clair` : `Azeroth`
  - bloc nordique plus sombre / distinct au-dessus
  - il ne faut pas encore confondre ce screen avec le grand screen ou `Alliance` est explicitement nommee
- `domaine direct / seigneuries` :
  - panneau de droite visible
  - plusieurs lignes de domaines personnels apparaissent, mais sans lecture numerique parfaitement sure a cette resolution
- `deductions prudentes` :
  - `739` est bien un moment de bascule ou `Andrea II` tient deja `Azeroth`
  - le monde n'est pas encore totalise pour autant
- `zones d'incertitude` :
  - chiffres fins de revenus / prestige / piete difficiles a certifier ici

### Screen `033eceab-...png`

- `nature` : fiche souveraine + carte regionale
- `date visible` : `9 janvier 744`
- `personnage / titre focal` : `Roi Johnson de Stromgarde`
- `age visible` : `42`
- `lecture UI sure` :
  - `Johnson` est bien le nom canonique
  - `Johnson` est bien `roi de Stromgarde` a cette date
  - `Andrea II` apparait comme epouse
  - enfants visibles dans le panneau famille
- `carte / couleurs` :
  - royaume `Stormgarde` visible comme bloc distinct date
  - carte locale utile pour la soudure Trollbane, pas pour une lecture generale de tout Azeroth
- `domaine direct / seigneuries` :
  - panneau de droite present mais chiffres fins trop petits pour extraction numerique totalement sure
- `deductions prudentes` :
  - la montee de `Johnson` n'est plus une hypothese de prose ; elle est visuellement ancree
  - la couture `Andrea II / Johnson / Stormgarde` est deja un fait etabli en `744`
- `zones d'incertitude` :
  - composition exacte du domaine direct non securisee a 100 %

### Screen `4bfccf8f-...png`

- `nature` : fiche enfant + fenetre `Lignees`
- `date visible` : `3 juin 744`
- `personnage / titre focal` : `Princesse Andrea de Azeroth`
- `age visible` : `9`
- `lecture UI sure` :
  - Andrea enfant est deja chargee d'un statut dynastique exceptionnel
  - la fenetre `Lignees` confirme une accumulation de sangs / heritages
- `carte / couleurs` :
  - carte regionale secondaire
- `domaine direct / seigneuries` :
  - non pertinent ici
- `deductions prudentes` :
  - ce screen soutient fortement le recalage de naissance vers `734`
  - la formule `enfant des trois sangs` est visuellement legitimee tres tot
- `zones d'incertitude` :
  - ne pas recopier mot a mot toute la liste d'heritages sans zoom supplementaire

### Screen `4ad8d187-...png`

- `nature` : fiche souverain + carte politique
- `date visible` : `19 decembre 717`
- `personnage / titre focal` : `Haut roi Llane II de Azeroth`
- `age visible` : `42`
- `lecture UI sure` :
  - `Llane` regne alors sur un `Azeroth` encore limite
  - bloc dynastique Wrynn visible
- `carte / couleurs` :
  - `Azeroth` en `bleu clair`
  - `Dalaran` et `Gurub` visibles comme blocs separes
  - le screen montre bien un monde encore morcele
- `domaine direct / seigneuries` :
  - domaine personnel liste a droite
  - plusieurs comtes visibles mais non tous lisibles proprement
- `deductions prudentes` :
  - confirme la petitesse relative d'`Azeroth` avant la grande phase cadiforienne
- `zones d'incertitude` :
  - chiffres fins de domaine non garantis sans meilleur grossissement

### Screen `06b9bf92-...png`

- `nature` : fiche souveraine + carte continentale
- `date visible` : `19 decembre 717`
- `personnage / titre focal` : `Haut roi Ulf le Tenace d'Alliance`
- `age visible` : `55`
- `lecture UI sure` :
  - l'`Alliance` existe comme bloc distinct a cette date
  - le nom `Alliance` apparait explicitement sur la carte
- `carte / couleurs` :
  - `bleu fonce` = `Alliance`
  - `bleu clair` = `Azeroth`
  - `Lordaeron`, `Stromgarde`, `Kul Tiras`, `Quel'Thalas` apparaissent comme blocs distincts
- `domaine direct / seigneuries` :
  - non lisible en precision numerique suffisante
- `deductions prudentes` :
  - ce screen est capital pour la lecture correcte `bleu clair / bleu fonce`
  - il confirme tres fortement le monde multipolaire de l'avant-totalisation
- `zones d'incertitude` :
  - il faut garder cette lecture de couleurs comme **locale a ce screen date**

### Screen `e7bf7992-...png`

- `nature` : fiche personnage + finder
- `date visible` : `28 mars 720`
- `personnage / titre focal` : `Seigneur Thorim de Iahienal`
- `age visible` : `719`
- `lecture UI sure` :
  - `Thorim de Iahienal`
  - profil de combat monstrueux
  - `combat personnel : 128`
- `carte / couleurs` :
  - secondaire
- `domaine direct / seigneuries` :
  - non central ici
- `deductions prudentes` :
  - confirme le statut quasi titanesque du precepteur martial d'Andrea II
- `zones d'incertitude` :
  - plusieurs traits / details annexes trop petits pour etre tous certifies

---

## C. Bradney / Ariana / guerre de 756

### Screen `72c7095e-...png`

- `nature` : fiche souverain + carte militaire
- `date visible` : `7 juillet 756`
- `personnage / titre focal` : `Roi Bradney de Hurlevent`
- `age visible` : `42`
- `lecture UI sure` :
  - `Bradney` existe bien comme acteur central de la crise `756`
  - il est bien `roi de Hurlevent`
  - sa maison et sa cellule familiale sont visibles
- `carte / couleurs` :
  - theatre frontalier entre `Azeroth` au sud et blocs septentrionaux
- `domaine direct / seigneuries` :
  - panneau droit visible
  - chiffres illisibles de facon trop fine pour une extraction parfaite
- `deductions prudentes` :
  - le screen confirme que `Bradney` n'est pas une note marginale mais une vraie seigneurie rebelle de poids
- `zones d'incertitude` :
  - taille exacte du domaine personnel non securisee

### Screen `761a6203-...png`

- `nature` : fiche personnage + carte de guerre
- `date visible` : `7 juillet 755`
- `personnage / titre focal` : `Princesse Ariana de Azeroth`
- `age visible` : `21`
- `lecture UI sure` :
  - `Ariana` existe bien
  - elle a `21 ans`
  - elle est a la cour de `Hurlevent`
- `carte / couleurs` :
  - gros reseau d'armees rouges visibles sur le territoire azerothien
- `domaine direct / seigneuries` :
  - non applicable
- `deductions prudentes` :
  - screen tres fort pour fixer `Ariana` dans l'avant-crise qui mene a `756`
- `zones d'incertitude` :
  - il ne prouve pas a lui seul tout le mecanisme successoral du complot

### Screen `388c3445-...png`

- `nature` : resultat de bataille
- `date visible` : `22 mars 756`
- `personnage / titre focal` : bataille de `Yelkind` / `Yelkind` selon lecture UI
- `age visible` : non applicable
- `lecture UI sure` :
  - victoire imperiale
  - gros ecart de pertes
  - ecran tres utile pour la realite materielle de la guerre de `756`
- `carte / couleurs` :
  - `Azeroth` en bleu clair
  - front au nord de `Stormwind`
- `domaine direct / seigneuries` :
  - non applicable
- `deductions prudentes` :
  - cet ecran soutient la logique de grosses batailles ecrasantes, mais son toponyme doit etre traite prudemment tant qu'on n'a pas meilleur recoupement
- `zones d'incertitude` :
  - nom exact du lieu
  - correspondance exacte avec `Yielden` a confirmer

### Screen `9aa9d236-...png`

- `nature` : resultat de bataille + siege
- `date visible` : `24 mai 756`
- `personnage / titre focal` : `Bataille de Alkton`
- `age visible` : non applicable
- `lecture UI sure` :
  - victoire
  - combinaison bataille / siege
  - fortes pertes des deux cotes
- `carte / couleurs` :
  - theatre de guerre interne a `Azeroth`
- `domaine direct / seigneuries` :
  - non applicable
- `deductions prudentes` :
  - la guerre `756` est plus etagee que simplement `Yielden puis fin`
  - il existe plusieurs operations intermediaires
- `zones d'incertitude` :
  - place exacte d'`Alkton` dans la sequence canonique a formaliser plus tard

### Screen `3d91f158-...png`

- `nature` : resultat de bataille + capture
- `date visible` : `756 / 796` selon releves, a garder en tension
- `personnage / titre focal` : `Bataille de Centrebourg`
- `age visible` : non applicable
- `lecture UI sure` :
  - victoire imperiale
  - capture de `la Parker Selina` / `Parker Seline`
  - donnees de pertes / survivants affichees
- `carte / couleurs` :
  - theatre de guerre en coeur azerothien
- `domaine direct / seigneuries` :
  - non applicable
- `deductions prudentes` :
  - ce screen doit rester rattache a `Centrebourg`
  - la date exacte doit etre recoupee avant correction canonique
- `zones d'incertitude` :
  - tension avec certaines dates textuelles plus tardives du repo
  - a conserver comme `point a reverifier`, pas comme correction brutale

### Screen `da6b36f7-...png`

- `nature` : ecran de bataille 3D / terrain
- `date visible` : `756`
- `personnage / titre focal` : `Bataille de Yielden`
- `age visible` : non applicable
- `lecture UI sure` :
  - toponyme `Yielden` visible
  - `Bornual` est lie au theatre de bataille
  - force des `attaquants` et `defenseurs` visible
  - terrain lisible dans le tooltip
- `carte / couleurs` :
  - theatre de bataille local, sans toponymie secondaire fermee
- `domaine direct / seigneuries` :
  - non applicable
- `deductions prudentes` :
  - excellent screen pour la **mise en scene tactique**
  - tres bon appui pour conserver `Yielden` comme bataille concrete, pas simple formule
- `zones d'incertitude` :
  - tension possible entre date de bataille lue ici et date retenue auparavant par certaines notes textuelles

### Screen `9d74dee6-...png`

- `nature` : fiche personnage + carte militaire
- `date visible` : `770`
- `personnage / titre focal` : `Jim l'Erudit de Revolte azerothienne`
- `age visible` : `117`
- `lecture UI sure` :
  - presence d'une `Revolte azerothienne`
  - liste de vassaux / chefs visibles
- `carte / couleurs` :
  - front encore actif dans l'espace azerothien
- `domaine direct / seigneuries` :
  - non applicable
- `deductions prudentes` :
  - la `Revolte azerothienne` existe encore comme structure lisible a cette date
- `zones d'incertitude` :
  - statut exact de `Jim` dans le canon a ne pas surcharger trop vite

### Screen `0a695f0f-...png`

- `nature` : fiche personnage + historique + guerre generale
- `date visible` : `786`
- `personnage / titre focal` : `Taelan l'Ancien`
- `age visible` : `116`
- `lecture UI sure` :
  - historique de personnage visible
  - religion `sargerite`
- `carte / couleurs` :
  - carte secondaire, non centrale ici
- `domaine direct / seigneuries` :
  - non central
- `deductions prudentes` :
  - `Taelan` confirme un pole sargerite lisible en `786`
- `zones d'incertitude` :
  - detail de ses stats et holdings a recouper

---

## D. Andrea III / totalisation / transition imperiale

### Screen `0bb9adfd-...png`

- `nature` : fiche souveraine + evenement + carte politique
- `date visible` : `786`
- `personnage / titre focal` : `Andrea la Victorieuse de Azeroth`
- `age visible` : `51`
- `lecture UI sure` :
  - `Andrea la Victorieuse` est bien vivante et souveraine en `786`
  - son age `51` conforte la naissance en `734`
  - evenement de cour visible a l'ecran
- `carte / couleurs` :
  - `Azeroth` couvre deja un espace tres large
- `domaine direct / seigneuries` :
  - chiffres fins visibles mais trop petits pour extraction sure a 100 %
- `deductions prudentes` :
  - screen cle pour la datation de la Victorieuse
- `zones d'incertitude` :
  - detail des ressources non securise

### Screen `13564466-...png`

- `nature` : fiche souverain + carte politique
- `date visible` : `793`
- `personnage / titre focal` : `Haute roi Anasterian le Grand de Quel'Thalas`
- `age visible` : `792`
- `lecture UI sure` :
  - `Anasterian` est bien souverain actif de `Quel'Thalas`
  - masse militaire et domaine importants
- `carte / couleurs` :
  - `Quel'Thalas` apparait comme bloc distinct date
  - `Azeroth` reste visible au sud
- `domaine direct / seigneuries` :
  - plusieurs lignes de domaine visibles, dont `Tranquillien`
- `deductions prudentes` :
  - justifie pleinement d'ecrire `Quel'Thalas` comme voisin ancien, stable et puissant
- `zones d'incertitude` :
  - certaines lignes exactes de domaine sont trop petites pour une liste exhaustive totalement sure

### Screen `396f99c0-...png`

- `nature` : fiche souveraine + carte politique
- `date visible` : `793`
- `personnage / titre focal` : `Reine Raeniatin l'Ancienne de Paluns`
- `age visible` : `33`
- `lecture UI sure` :
  - `Paluns` existe comme bloc politique distinct
  - carte generale tres utile pour lire les zones tampon
- `carte / couleurs` :
  - `Paluns` visibles comme masse regionale autonome
  - `Azeroth` visible au nord
- `domaine direct / seigneuries` :
  - non exploitable finement a cette resolution
- `deductions prudentes` :
  - les `Paluns` ne sont pas un simple decor : ils existent comme bloc tampon et theatre secondaire
- `zones d'incertitude` :
  - details internes du royaume non securises

---

## E. Banni / haut royaume / centralisation directe

### Screen `9ed54b1d-...png`

- `nature` : fiche titre / historique / carte politique
- `date visible` : `17 decembre 832`
- `personnage / titre focal` : `Hautroyaume de Azeroth` sous `Banni Cadifor`
- `age visible` : `39` pour `Banni`
- `lecture UI sure` :
  - `Banni Cadifor` tient l'ensemble
  - l'historique visible confirme :
    - `Andrea III` couronnee `767.12.24`
    - mort `815.8.14`
    - `Banni` couronne `825.3.26`
  - finances de haut royaume visibles
- `carte / couleurs` :
  - `Azeroth` masse bleue dominante
- `domaine direct / seigneuries` :
  - titres vassaux / directs visibles dans la liste :
    - `Atal'Hakkar`
    - `Bambala`
    - `Carmines`
    - `Chemin Rouge`
    - `Clairbois`
- `deductions prudentes` :
  - la centralisation sous `Banni` est cartographique et feodale, pas seulement symbolique
- `zones d'incertitude` :
  - tous les chiffres financiers ne sont pas parfaitement lisibles ligne par ligne

### Screen `2d2ee44b-...png`

- `nature` : fiche souverain externe + carte maritime
- `date visible` : `793`
- `personnage / titre focal` : `Haut roi Rorax le Chaste de Coalition marchande`
- `age visible` : `60`
- `lecture UI sure` :
  - `Coalition marchande` gobeline existe comme acteur politique lisible
  - `Rorax` en est le souverain
- `carte / couleurs` :
  - bloc insulaire / maritime au sud-ouest
  - `Azeroth` visible au nord-est
- `domaine direct / seigneuries` :
  - non central
- `deductions prudentes` :
  - confirme qu'il faut ecrire les gobelins comme puissance de circuits et de mer, pas simple folklore marchand
- `zones d'incertitude` :
  - detail de ses holdings non securise

---

## F. Captures plus mixtes / contextuelles

### Screen `076e177e-...png`

- `nature` : fiche souveraine + carte continentale
- `date visible` : `13 juillet 756`
- `personnage / titre focal` : `Haute reine Jaylyn d'Alliance`
- `age visible` : `45`
- `lecture UI sure` :
  - `Alliance` existe encore comme bloc politique au milieu du cycle `756`
- `carte / couleurs` :
  - `Alliance` en `bleu fonce`
  - `Azeroth` en `bleu clair`
  - `Stromgarde` et autres royaumes visibles en differencie
- `domaine direct / seigneuries` :
  - non securise numeriquement
- `deductions prudentes` :
  - excellent screen de carte pour ne pas ecraser l'existence de l'Alliance pendant la crise `756`
- `zones d'incertitude` :
  - la structure interne du bloc `Alliance` demande encore d'autres screens pour etre detaillee

### Screen `f2d7bd37-...png`

- `nature` : fiche souverain + carte continentale
- `date visible` : `13 juillet 756`
- `personnage / titre focal` : `Roi Bariston de Lordaeron`
- `age visible` : `43`
- `lecture UI sure` :
  - `Lordaeron` est bien distinct
  - ses liens a l'`Alliance` apparaissent dans le tooltip
- `carte / couleurs` :
  - cohabitation lisible entre `Alliance`, `Azeroth`, `Stromgarde`, `Quel'Thalas`
- `domaine direct / seigneuries` :
  - non central ici
- `deductions prudentes` :
  - fort appui visuel pour la geopolitique multipolaire
- `zones d'incertitude` :
  - ne pas deduire trop vite toute sa diplomatie du seul tooltip

---

## G. Resume operationnel

### Index chronologique minimal

Pour travailler proprement un lore evolutif, on peut deja ranger le lot en **etats du monde** :

| Phase | Date(s) | Screens majeurs | Lecture dominante |
|-------|---------|-----------------|------------------|
| **Azeroth pre-centralisation** | `19 decembre 717` | `4ad8d187`, `06b9bf92` | coexistence de `Azeroth`, `Alliance`, `Lordaeron`, `Stromgarde`, `Quel'Thalas` |
| **Formation Andrea II / Stormgarde** | `28 mars 720` a `9 janvier 744` | `e7bf7992`, `fc4efecd`, `033eceab`, `4bfccf8f` | Thorim, prise d'altitude d'Andrea II, Johnson roi, Andrea enfant |
| **Crise Bradney / Ariana** | `7 juillet 755` a `13 juillet 756` | `388c3445`, `9aa9d236`, `3d91f158`, `da6b36f7`, `72c7095e`, `761a6203`, `076e177e`, `f2d7bd37` | avant-crise et guerre interne datee, operations multiples, monde encore multipolaire |
| **Andrea III haute phase** | `786` | `0bb9adfd` | Andrea souveraine en pleine maturite |
| **Voisinages majeurs** | `793` | `13564466`, `396f99c0`, `2d2ee44b` | `Quel'Thalas`, `Paluns`, `Coalition marchande` comme blocs distincts |
| **Banni / haut royaume** | `17 decembre 832` | `9ed54b1d` | centralisation haute, memoire dynastique, grands titres tenus directement |

### Ecrans les plus rentables pour le canon direct

Ceux qui paraissent aujourd'hui les plus riches en `C3 / C2` :

- `06b9bf92-...png` : lecture `Alliance` vs `Azeroth`
- `033eceab-...png` : `Johnson` roi de `Stromgarde`
- `4bfccf8f-...png` : `Andrea` enfant, age `9`, date `744`
- `e7bf7992-...png` : `Thorim`, `CP 128`
- `3d91f158-...png` : `Centrebourg` + capture de `Selina Parker`
- `da6b36f7-...png` : `Yielden` comme bataille concrete datee
- `0bb9adfd-...png` : `Andrea III`, age `51`, date `786`
- `13564466-...png` : `Anasterian`, age `792`, date `793`
- `9ed54b1d-...png` : `Banni`, date `832`, seigneuries directes

### Ecrans a retraiter avec prudence

Ceux ou l'on voit beaucoup, mais pas encore assez proprement pour canoniser chaque detail :

- `c321e1f0-...png`
- `5c680671-...png`
- `fc4efecd-...png`
- `72c7095e-...png`
- `9aa9d236-...png`
- `9d74dee6-...png`
- `0a695f0f-...png`

Ils restent utiles, mais surtout comme :

- reserve de noms
- reserve de topographie
- reserve d'enchainement de campagne
- reserve de chiffres a re-extraire plus tard

### 1. Ce que ce lot prouve bien

- les screens sont **dateables** et doivent etre traites comme une serie d'etats du monde
- `Azeroth` et `Alliance` ne doivent pas etre confondus, surtout quand `bleu clair` et `bleu fonce` coexistent sur un meme screen
- `Johnson Trollbane` est fermement confirme
- `Andrea III` doit etre lue a partir d'une naissance `734`
- `Banni` confirme un haut domaine royal direct et une forte centralisation
- `Bradney`, `Ariana` et `Selina Parker` existent bien dans un cycle tardif date

### 2. Ce qu'il faut encore faire

- ajouter les **valeurs chiffrables fines** quand on aura soit de meilleurs zooms, soit un second passage OCR / lecture manuelle
- separer plus proprement :
  - `Yielden`
  - `Yelkind`
  - `Alkton`
  - `Centrebourg`
- produire ensuite des **fiches datees par phase historique** :
  - `717`
  - `739-744`
  - `756`
  - `786-793`
  - `832`

### 3. Regle de canon pour la suite

> *Un screen CK2 n'est pas une illustration ; c'est une photographie datee d'un etat de monde. Tant que la date, le type d'ecran et le niveau de certitude ne sont pas notes, il ne faut pas le transformer directement en prose canonique.*
