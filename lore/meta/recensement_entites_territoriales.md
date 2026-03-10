# RECENSEMENT DES ENTITES TERRITORIALES ET CULTURELLES

---

## Principe

Ce fichier sert de **pont de migration** entre les grands fichiers de synthese et la nouvelle taxonomie par entite.

Regle :

- on ne recense ici que des entites **deja nommees dans le repo actif**
- une entite peut avoir plusieurs lectures selon l'epoque
- le recensement sert a guider la creation des fiches, pas a inventer de nouvelles couches de canon

---

## I. Nations et puissances externes

| Entite | Type | Statut de travail | Fichier cible | Sources pivots |
|---|---|---|---|---|
| `Kul Tiras` | Nation / royaume maritime | Externe liee dynastiquement | `nations/kul_tiras.md` | `factions/nations_externes.md`, `sections/economie.md` |
| `Baie-du-Butin` | Couronne / place marchande | Interne tardive, externe dans certaines lectures | `nations/baie_du_butin.md`, `territoires/baie_du_butin.md`, `villes/baie_du_butin.md` | `factions/nations_externes.md`, `sections/geopolitique.md` |
| `Ironforge` | Nation / puissance technique | Externe proche | `nations/ironforge.md` | `factions/nations_externes.md`, `sections/economie.md` |
| `Gilneas` | Nation / royaume humain | Externe proche | `nations/gilneas.md` | `factions/nations_externes.md` |
| `Royaume des Paluns` | Nation / royaume regional | Externe proche | `nations/royaume_des_paluns.md` | `factions/nations_externes.md` |
| `Quel'Thalas` | Nation / royaume ancien | Externe proche | `nations/quelthalas.md` | `factions/nations_externes.md` |
| `Coalition marchande` | Puissance maritime | Externe commerciale | `nations/coalition_marchande.md` | `factions/nations_externes.md` |
| `Kaldorei` | Grande puissance civilisationnelle | Externe lointaine | `nations/kaldorei.md` | `factions/nations_externes.md`, `meta/kalimdor_pandarie_950.md` |
| `Cercle Cenarien` | Autorite transnationale | Externe druidique | `nations/cercle_cenarien.md` | `factions/nations_externes.md` |
| `Confederation gobeline` | Sphere commerciale | Externe mobile | `nations/confederation_gobeline.md` | `factions/nations_externes.md` |
| `Ile du Butin` | Royaume insulaire | Externe | `nations/ile_du_butin.md` | `factions/nations_externes.md` |
| `Uldum` | Empire regional | Externe | `nations/uldum.md` | `factions/nations_externes.md`, `meta/kalimdor_pandarie_950.md` |
| `Pandarie` | Monde externe / bloc fragmenté | Externe lointain | `nations/pandarie.md` | `factions/nations_externes.md`, `meta/kalimdor_pandarie_950.md` |
| `Northrend` | Macro-region geopolitique | Externe lointain | `nations/northrend.md` | `factions/nations_externes.md` |

---

## II. Territoires internes du Haut Royaume

| Entite | Type | Lecture dominante | Fichier cible | Sources pivots |
|---|---|---|---|---|
| `Sylve de l'Est` | Royaume / territoire majeur | Berceau oriental et coeur cadiforien | `territoires/sylve_de_l_est.md` | `factions/sylve_de_l_est.md`, `sections/geopolitique.md` |
| `Lordaeron` | Royaume | Couronne majeure interne | `territoires/lordaeron.md` | `sections/geopolitique.md`, `meta/angles_morts_et_cites_economie.md` |
| `Stormwind` | Royaume / territoire | Couronne majeure interne | `territoires/stormwind.md` | `sections/geopolitique.md`, `meta/angles_morts_et_cites_economie.md` |
| `Stormgarde` | Royaume / territoire | Couronne majeure interne | `territoires/stormgarde.md` | `sections/geopolitique.md`, `meta/angles_morts_et_cites_economie.md` |
| `Morasses Noires` | Royaume / zone strategique | Titre direct de `Rose` en `950` | `territoires/morasses_noires.md` | `sections/geopolitique.md` |
| `Gurubashi` | Royaume / zone sudiste | Couronne interne issue de conquete | `territoires/gurubashi.md` | `sections/geopolitique.md` |
| `Kezan` | Royaume / plateforme maritime | Couronne interne et noeud portuaire | `territoires/kezan.md` | `sections/geopolitique.md`, `sections/economie.md` |
| `Hautebrande` | Royaume / profondeur nordique | Couronne interne | `territoires/hautebrande.md` | `sections/geopolitique.md`, `meta/angles_morts_et_cites_economie.md` |
| `Duche Kolkar` | Duche / tete de pont | Marche kalimdorienne integree | `territoires/duche_kolkar.md`, `duches/duche_kolkar.md` | `sections/geopolitique.md`, `meta/monnaie_et_credit.md` |
| `Crins-de-Givre` | Couronne interne | Attestee dans la recomposition tardive | `territoires/crins_de_givre.md` | `sections/geopolitique.md` |

---

## III. Duches et cadres ducaux

| Entite | Type | Lecture dominante | Fichier cible | Sources pivots |
|---|---|---|---|---|
| `Duche d'Ebonlocke` | Duche | Haute tenue ducale stormwindienne | `duches/duche_ebonlocke.md` | `factions/duche_ebonlocke.md` |
| `Duche Kolkar` | Duche | Frontiere kalimdorienne et repeuplement | `duches/duche_kolkar.md` | `sections/geopolitique.md`, `meta/monnaie_et_credit.md` |
| `Darrow` | Duche laic / cadre seigneurial | Noeud de la `Sylve de l'Est` et de `Nouvelle-Avalon` | `duches/darrow.md` | `meta/nouvelle_avalon.md`, `factions/sylve_de_l_est.md` |

---

## IV. Villes, cites et centres

| Entite | Type | Lecture dominante | Fichier cible | Sources pivots |
|---|---|---|---|---|
| `Stormwind` / `Hurlevent` | Capitale imperiale | Centre politique, urbain et commercial | `villes/stormwind.md` | `meta/angles_morts_et_cites_economie.md`, `sections/economie.md` |
| `Nouvelle-Avalon` | Cite-capitale / matrice | Coeur sacral, fiscal et dynastique | `villes/nouvelle_avalon.md` | `meta/nouvelle_avalon.md`, `meta/angles_morts_et_cites_economie.md` |
| `Lordaeron` | Grande cite / capitale regionale | Centre historique du nord | `villes/lordaeron.md` | `meta/angles_morts_et_cites_economie.md` |
| `Stormgarde` | Grande cite / pole militaire | Centre Trollbane et metallurgique | `villes/stormgarde.md` | `meta/angles_morts_et_cites_economie.md` |
| `Kezan` | Ville-port / ile-capitale | Machine portuaire et maritime | `villes/kezan.md` | `meta/angles_morts_et_cites_economie.md`, `sections/economie.md` |
| `Baie-du-Butin` | Ville-port / carrefour | Centre de branche et d'echange | `villes/baie_du_butin.md` | `meta/angles_morts_et_cites_economie.md`, `factions/nations_externes.md` |
| `Old Town` | Place forte / ville de guerre | Theatre de la poigne imperiale sous `Banni` | `villes/old_town.md` | `meta/etat_du_monde_845.md`, `scenes/bataille_old_town.md` |
| `Darrow` | Centre seigneurial | Noyau du duche laic | `villes/darrow.md` | `meta/nouvelle_avalon.md`, `factions/sylve_de_l_est.md` |
| `Main-de-Tyr` | Centre religieux / politique | Vieux point d'ancrage oriental | `villes/main_de_tyr.md` | `meta/nouvelle_avalon.md`, `factions/sylve_de_l_est.md` |
| `Cardeoi` | Baronnie-centre | Assiette seigneuriale de `Nouvelle-Avalon` | `villes/cardeoi.md` | `meta/nouvelle_avalon.md` |
| `Darlington` | Eveche-centre | Pole clercial de `Nouvelle-Avalon` | `villes/darlington.md` | `meta/nouvelle_avalon.md` |
| `Eastormel` | Cite locale | Centre urbain du noyau avalonien | `villes/eastormel.md` | `meta/nouvelle_avalon.md` |
| `Goodwin` | Cite locale | Centre urbain du noyau avalonien | `villes/goodwin.md` | `meta/nouvelle_avalon.md` |
| `Clairbois` | Palais / centre mondain | Coeur du style `Ebonlocke` | `villes/clairbois.md` | `factions/duche_ebonlocke.md` |
| `Lakeridge` | Centre local | Ville nommee a densifier plus tard | `villes/lakeridge.md` | `meta/angles_morts_et_cites_economie.md` |
| `Karazhan` | Centre singulier | Ville ou forteresse nommee a stabiliser | `villes/karazhan.md` | `meta/angles_morts_et_cites_economie.md` |
| `Ogdern` | Centre local | Ville nommee a densifier plus tard | `villes/ogdern.md` | `meta/angles_morts_et_cites_economie.md` |
| `Derrington` | Centre local | Ville nommee a densifier plus tard | `villes/derrington.md` | `meta/angles_morts_et_cites_economie.md` |
| `Fort de Durn` | Place forte | Centre frontalier nomme | `villes/fort_de_durn.md` | `meta/angles_morts_et_cites_economie.md` |
| `Jintha'alor` | Centre regional | Ville ou forteresse nommee | `villes/jinthaalor.md` | `meta/angles_morts_et_cites_economie.md` |

---

## V. Cultures

| Entite | Type | Lecture dominante | Fichier cible | Sources pivots |
|---|---|---|---|---|
| `azerothienne` | Culture imperiale majeure | Culture du bloc `Stormwind` / Azeroth | `cultures/azerothienne.md` | `meta/screenshots_lot_personnages.md`, `sections/civilisation.md` |
| `lordaeronienne` | Culture imperiale majeure | Culture du nord humain imperial | `cultures/lordaeronienne.md` | `meta/screenshots_lot_personnages.md`, `sections/civilisation.md` |
| `stormgardienne` | Culture imperiale majeure | Culture martiale, frontaliere et metallurgique | `cultures/stormgardienne.md` | `meta/couture_stormgardienne.md`, `sections/civilisation.md` |
| `Cadifor` | Culture dynastique / politique | Culture de maison et de systeme | `cultures/cadifor.md` | `sections/civilisation.md`, `meta/doctrine_cadiforienne.md` |

---

## VI. Notes de methode

- `Stormwind` et `Hurlevent` designent le meme grand centre ; la fiche canonique sera `villes/stormwind.md`
- `Baie-du-Butin` doit etre pensee a plusieurs niveaux : nation/couronne, territoire, ville-port
- `Kezan` vaut a la fois comme territoire et comme ville-port
- `Lordaeron` et `Stormgarde` valent a la fois comme royaumes et comme grandes cites
- certaines entites mineures seront d'abord fermees par une fiche courte avec renvoi vers le fichier-source
