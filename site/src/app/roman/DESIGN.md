---
name: "Cadifor — Roman"
description: "Extension de lecture de La Maison des vivants dans le monde sombre et doré de Cadifor."
colors:
  gold: "#d4a853"
  gold-light: "#e8c97a"
  gold-border: "rgba(212, 168, 83, 0.18)"
  ivory: "#f5f0e8"
  deep: "#0a0908"
  night-bg: "#15130f"
  night-ink: "#e6ddce"
  night-muted: "#baad98"
  night-line: "#494034"
  paper-bg: "#f5f0e6"
  paper-ink: "#302a22"
  paper-muted: "#6c5d49"
  paper-line: "#c7b99f"
  paper-accent: "#79591e"
typography:
  display:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "clamp(48px, 5.7vw, 78px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "clamp(40px, 5vw, 64px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "45px"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "20px"
    lineHeight: 1.85
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    lineHeight: 1.4
rounded:
  control: "5px"
  action: "6px"
  feature: "8px"
  gallery: "16px"
spacing:
  control-gap: "5px"
  compact: "15px"
  action: "20px"
  gutter: "25px"
  section: "30px"
  large: "50px"
  image-breath: "60px"
components:
  start-action:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep}"
    rounded: "{rounded.action}"
    padding: "15px 20px"
  start-action-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.deep}"
  text-action:
    textColor: "{colors.gold-light}"
  reading-control:
    textColor: "{colors.night-ink}"
    rounded: "{rounded.control}"
    width: "38px"
    height: "38px"
  contents-row:
    padding: "10px 0"
  resume-link:
    padding: "15px 0"
  chapter-navigation:
    padding: "30px 25px 0"
  chapter-heading:
    typography: "{typography.headline}"
    width: "750px"
  gallery-card:
    rounded: "{rounded.gallery}"
---
# Design System: Cadifor — Roman

## Overview

**Creative North Star: "Le livre ouvert de Cadifor"**

Le livre ouvert de Cadifor prolonge le monde brun noir et doré du site. Les titres Cormorant conservent sa voix dynastique ; la photographie de commandement et de diplomatie ouvre le récit, puis la prose Georgia prend le relais. L’interface donne aux chapitres l’espace et le calme nécessaires à une lecture longue.

Le lecteur possède deux matières cohérentes : une nuit chaude, proche du site, et un papier clair aux encres brunes. Les outils compacts, les légendes simples et les filets fins servent de repères. Le sommaire, la reprise et la navigation entre chapitres gardent une présence lisible sans concurrencer le texte.

Ce document décrit seulement l’extension Roman construite : la route `/roman`, ses chapitres, son entrée sur l’accueil et la section Roman de la galerie. Il ne remplace pas l’identité globale de Cadifor. Les sources visuelles sont `roman.css`, `globals.css`, les composants `novel-reading.tsx` et `novel-feature.tsx`, ainsi que les composants de galerie existants.

**Key Characteristics:**

- Fonds chauds, or mesuré et ivoire hérités de Cadifor.
- Titres littéraires, prose de livre et outils discrets.
- Photographies V2 sans armoiries ajoutées.
- Lecture continue, réglable et adaptée au téléphone.

## Colors

La palette associe l’or du site à des neutres chauds, avec deux ensembles complets pour la lecture.

### Primary

- **Or Cadifor** (`gold`) : action de départ et repère de focus sur l’index.
- **Or clair** (`gold-light`) : liens et petits repères éditoriaux ; accent du lecteur de nuit.
- **Or brun sur papier** (`paper-accent`) : liens, progression, sélection et focus du lecteur clair.

### Neutral

- **Ivoire du site** (`ivory`) et **brun noir profond** (`deep`) : continuité de l’index, des titres et de l’action principale.
- **Filet d’or** (`gold-border`) : séparation des parties, de l’édition et de la reprise.
- **Nuit chaude** (`night-bg`, `night-ink`, `night-muted`, `night-line`) : fond de lecture, prose, informations secondaires et séparateurs.
- **Papier chaud** (`paper-bg`, `paper-ink`, `paper-muted`, `paper-line`) : mêmes rôles dans la variante claire. Le changement porte sur l’ensemble du lecteur ; la navigation générale conserve le monde sombre du site.

**The Continuité Rule.** L’or reste un repère d’action et de navigation ; les deux matières du lecteur conservent la chaleur du monde Cadifor.

## Typography

**Display Font:** Cormorant Garamond, héritée du site et chargée localement.
**Body Font:** Georgia, avec Times New Roman puis serif en repli pour la prose.
**Label Font:** Manrope, héritée du site et chargée localement pour les commandes et métadonnées.

Cormorant porte le titre du livre, les titres de chapitre et les divisions du sommaire. Georgia donne au récit sa texture de livre ; Manrope distingue les outils de la narration.

### Hierarchy

- **Display** (`display`) : titre de l’index, composé sur deux lignes dans l’implémentation actuelle. Aux largeurs intermédiaires il prend une taille fixe, puis se resserre sur téléphone.
- **Headline** (`headline`) : titre de chapitre centré, équilibré sur plusieurs lignes si nécessaire ; taille fixe sur téléphone.
- **Title** (`title`) : tête du sommaire. Les titres de parties et de navigation utilisent la même famille à des tailles plus petites.
- **Body** (`body`) : taille initiale de la prose. Le lecteur règle la taille de 18 à 26 px par pas d’un pixel. Sur téléphone, la taille affichée enlève un pixel au réglage, avec un plancher de 18 px, et l’interligne devient 1.8.
- **Label** (`label`) : base de la barre d’outils. Les numéros et durées restent secondaires ; les numéros de chapitre emploient des chiffres tabulaires.

**The Colonne de lecture Rule.** La prose demeure une colonne continue en Georgia ; les titres et les outils conservent leurs propres voix typographiques.

## Layout

L’index est contenu dans une largeur maximale de 1280 px, avec des marges internes de 32 px. Son ouverture associe le texte et une photographie en deux colonnes ; elle passe en une colonne sous 1000 px. Le sommaire occupe au plus 1000 px : les parties forment une colonne de titres et une colonne de chapitres. Sous 640 px, chaque partie s’empile, les marges de l’index passent à 22 px et les durées des lignes de sommaire disparaissent.

Le chapitre se lit dans une colonne de 70ch, avec des marges internes de 30 px sur ordinateur et de 23 px sur téléphone. Les paragraphes sont espacés de 1.1em ; les dialogues ont un retrait suspendu de 1.15em. Les paragraphes possèdent des ancres et une marge de défilement qui les tient à distance des outils fixes.

L’en-tête de chapitre est centré dans 750 px. La photographie est contenue dans 920 px, puis la prose commence après une respiration ample. La navigation de fin occupe 900 px au maximum, en deux colonnes. Sur téléphone, les titres se resserrent, les contrôles passent à 36 px et les photographies peuvent rejoindre les bords du lecteur.

La barre d’outils reste sous la navigation principale, à 73 px du haut. Elle contient le sommaire, la progression de chapitre et les réglages ; l’indication de chapitre disparaît sur téléphone. Un trait de progression de 3 px se place au sommet de la fenêtre sans capter les interactions.

L’entrée du roman sur l’accueil reprend une photographie et un bloc éditorial séparés par des filets. La section Roman de la galerie garde la grille existante : une colonne, puis deux dès 640 px et trois dès 1280 px. Ses trente photographies conservent leur ratio de 1672/941.

**The Outils en retrait Rule.** Les contrôles restent compacts et stables ; le chapitre conserve le défilement natif et le premier rôle.

## Elevation & Depth

Le lecteur et l’index sont plats : les fonds, l’espace et les filets établissent la hiérarchie, sans ombre ajoutée aux pages de texte. La barre d’outils possède un fond opaque identique à celui du lecteur. L’isolation du lecteur et ses couleurs locales maintiennent la cohérence de la variante papier.

La galerie conserve la profondeur du site : voile sombre sur la photographie, titre au bas de l’image et traitement impérial au survol. La carte monte légèrement, son contour devient plus doré et une ombre chaude apparaît. Le sidecar conserve les valeurs exactes de cette ombre et des animations héritées ; ces effets ne sont pas étendus à la prose.

## Shapes

Les pages de lecture restent des surfaces ouvertes. Les contrôles sont de petits carrés aux angles adoucis (`control`), l’action principale est légèrement arrondie (`action`), l’image d’entrée sur l’accueil reprend l’arrondi `feature`, et les vignettes de galerie utilisent l’arrondi plus ample `gallery`.

Les photographies d’index et de chapitre ne reçoivent pas de cadre décoratif. Les lignes du sommaire sont des liens continus, séparés par le rythme de liste et les filets entre parties. Les icônes sont des tracés simples, associés à un libellé visible ou accessible.

## Components

### Action de départ et liens éditoriaux

L’action **Commencer le livre** est pleine, or sur brun noir, avec une flèche. Au survol, l’or s’éclaircit. Les accès secondaires, téléchargements et liens vers la galerie restent textuels ; les liens de l’édition et de l’entrée d’accueil emploient un soulignement décalé.

Le focus visible des liens de l’index utilise un contour doré de 2 px décalé de 5 px. Dans le lecteur, ce contour suit l’accent de la matière courante.

### Sommaire et reprise

Chaque partie associe un numéro romain, un titre Cormorant et une liste de chapitres. Une ligne affiche le numéro, le titre, la durée quand l’espace le permet et une flèche. Sa hauteur minimale est de 48 px ; le survol éclaire le texte.

La reprise est un lien horizontal sous les actions, ouvert par une icône de livre et fermé par une flèche. Elle apparaît seulement lorsqu’une position locale correspond à un chapitre connu ; elle pointe vers le paragraphe sauvegardé lorsque celui-ci est valide.

### Outils de lecture

La barre offre quatre boutons : réduire, agrandir, masquer ou afficher les photographies, et passer entre nuit et papier. Les boutons sont transparents et bordés ; le survol applique une faible teinte de l’accent. Les limites de taille désactivent le bouton concerné avec une opacité réduite. L’état masqué des photographies est annoncé par le bouton et une opacité plus faible.

Le thème, la taille, la visibilité des images et la position utilisent le stockage local, avec repli mémoire lorsque celui-ci est indisponible. Les préférences initiales sont la nuit, la taille de base et les images visibles. Le texte reste dans le HTML statique.

### En-tête, photographie et prose

L’en-tête regroupe le lien vers le livre, le titre, le chapitre et sa partie, puis la durée. Dix-huit chapitres sont accompagnés d’une photographie V2 avec une légende simple. La commande d’images retire ce bloc sans retirer le texte. Les paragraphes V5 restent continus et ancrables.

**The Photographie entière Rule.** Dans un chapitre, la photographie garde son ratio et reste séparée de la prose par sa légende et un espace généreux.

### Navigation de fin et impression

Les accès précédent et suivant partagent deux colonnes, avec des flèches, de petites étiquettes et des titres Cormorant. Les extrémités du livre renvoient au sommaire. Le dernier chapitre porte une mention de fin centrée.

À l’impression, les outils, le trait de progression et la navigation de fin disparaissent. Le lecteur devient blanc à encre noire ; la prose emploie une taille d’impression, et les photographies évitent une coupure intérieure.

### Carte photographique de galerie

La section Roman réutilise la carte de galerie : photographie au ratio d’origine, coins amples, bord très fin et titre superposé sur un voile sombre. Le survol agrandit légèrement la photographie et reprend le mouvement de la carte impériale. L’activation ouvre la visionneuse existante, avec fermeture et navigation entre images. Le lien **Lire le roman** ramène à l’index.

## Do's and Don'ts

### Do:

- Do prolonger les couleurs et les polices de Cadifor dans les accès au roman.
- Do garder la prose Georgia, sa mesure de 70ch et ses paragraphes V5 intacts.
- Do conserver les deux jeux cohérents nuit et papier, y compris pour les légendes, filets et états de focus.
- Do utiliser les photographies V2 validées et leurs légendes ; garder leur cadrage entier dans les chapitres.
- Do maintenir les outils sous la navigation principale et laisser le défilement natif conduire la lecture.
- Do préserver le sommaire en quatre parties, les liens précédent/suivant et la reprise locale.

### Don't:

- Don't faire de cette extension une nouvelle identité graphique pour le site.
- Don't appliquer les lettrines ou blocs encyclopédiques à la prose du roman.
- Don't ajouter de blasons aux scènes de commandement et de diplomatie.
- Don't transformer les paragraphes en cartes, ni les photographies en arrière-plans sous le texte.
- Don't faire dépendre l’accès au texte d’un compte, d’un stockage local disponible ou d’une animation.
