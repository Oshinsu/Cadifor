# INSTRUCTIONS — Réintégration des images après nettoyage complet

> **TABULA RASA** : Toutes les anciennes images ont été supprimées (17 portraits + 9 scènes + 33 locations = 59 fichiers PNG). Seul le sigil héraldique de la maison Cadifor a été conservé (utilisé sur la homepage). Le repo est maintenant prêt à recevoir uniquement des images **au niveau canonique**.

---

## ÉTAT ACTUEL DU REPO

✅ **Déjà fait par moi** :
- Suppression de **59 anciennes images** (toutes les portraits, scènes, locations sauf le sigil)
- Conservation de `heraldry/heraldry_cadifor_sigil.png` et `heraldry/materials_imperial_palette.png`
- Mise à jour de `site/src/lib/images.ts` avec les nouveaux mappings canoniques
- Création de 2 nouvelles fiches personnages (`47_duchesse_quelthalas.md`, `48_folki_lowland.md`)
- Le système d'images gère gracieusement les fichiers manquants (`assetExists()` retourne `false` → fallback ou rien)

❌ **À faire par toi** :
- Sauvegarder les **8 images du chat** aux chemins exacts ci-dessous
- Régénérer ultérieurement les autres images (via `assets-pipeline/`) avec une qualité conforme au canon

---

## PRIORITÉ 1 — Les 8 images du chat à intégrer immédiatement

| # | Image du chat | Description | Chemin de destination |
|---|---------------|-------------|----------------------|
| **1** | Lot 1, image 1 | Table de marbre noir avec huîtres, cristal à liseré or | `site/public/assets/scenes/scene_diner_imperial.png` |
| **2** | Lot 1, image 2 | Marjory + Rose à table avec carte arcane bleu-blanc | `site/public/assets/scenes/scene_diner_imperial_kalimdor.png` |
| **3** | Lot 1, image 3 | Portrait Marjory sur trône, robe velours noir broderie argent | `site/public/assets/portraits/portrait_marjory_formal.png` |
| **4** | Lot 2, image 1 | Cour château avec armée + ville en feu + bannière ours-engrenage | `site/public/assets/scenes/scene_siege_main_de_tyr_744.png` |
| **5** | Lot 2, image 2 | Reine elfe rousse couronne pointue + magie de feu | `site/public/assets/portraits/portrait_duchesse_quelthalas_bust.png` |
| **6** | Lot 2, image 3 | Chevalier au marteau de guerre sous la pluie, armure noir+or+bordeaux | `site/public/assets/portraits/portrait_johnson_trollbane_bust.png` |
| **7** | Lot 2, image 4 | Cavalier sur griffon avec escadre dans nuages d'orage | `site/public/assets/scenes/scene_air_corps_imperial.png` |
| **8** | Lot 2, image 5 | Homme balafré, armure usée, fortification + braseros | `site/public/assets/portraits/portrait_folki_lowland.png` |

---

## PRIORITÉ 2 — Régénérer ultérieurement (via assets-pipeline)

Le repo a été vidé de **59 images** qui n'étaient pas au niveau canonique. Pour redonner au site sa richesse visuelle, il faudra régénérer (avec une DA conforme à la doctrine "Impératrice de Forme") :

### Portraits manquants (17)

Personnages déjà avec mapping dans `lib/images.ts` qui doivent retrouver une illustration :

- `portrait_aberthol_bust.png` — Aberthol Cadifor
- `portrait_andrea_juste_mature.png` — Andrea II la Juste (mature)
- `portrait_andrea_juste_young.png` — Andrea l'Érudite ou Andrea II jeune
- `portrait_andrea_rougissante_bust.png` — Andrea la Rougissante
- `portrait_andrea_victorieuse_bust.png` — Andrea III la Victorieuse
- `portrait_arwyn_bust.png` — Arwyn
- `portrait_banni_bust.png` — Banni
- `portrait_benjamin_bust.png` — Benjamin
- `portrait_llane_bust.png` — Llane II Wrynn
- `portrait_rose_formal.png` — Rose (formel)
- `portrait_viki_bust.png` — Viki
- Portraits Rose secondaires : `arcane`, `entering`, `intimate`, `throne`
- Portraits Marjory secondaires (à régénérer avec la doctrine "Impératrice de Forme") : campaign, dining, death, armor_ceremony

### Scènes manquantes (9)

- `header_personnages.png` — header de la page personnages
- `hero_homepage.png` — image de fond de la homepage (CRITIQUE — actuellement le visuel sera vide)
- `scene_bataille_yielden.png`, `scene_grand_bal.png`, `scene_marjory_death.png`, `scene_rose_coronation.png`, `scene_rose_entering_clairbois.png`, `scene_viki_loups.png`

### Locations manquantes (33)

Toutes les illustrations de villes, territoires, nations, duchés. Voir `lib/images.ts` `LOCATION_MAP` pour la liste complète.

---

## DOCTRINE VISUELLE À RESPECTER

Pour les futures régénérations, la grammaire Cadifor est verrouillée dans :

- `lore/meta/marjory_archetype_imperatrice_de_forme.md`
- `lore/meta/canon_visuel_marjory_rose.md`
- `lore/meta/dossier_synthese_recalibrage.md`

**Règles clés** :
1. **Sobriété fonctionnelle** : pas de surcharge décorative, pas d'épées brandies, pas de magie spectaculaire
2. **Palette** : marbre noir, ivoire, bleu cendré, gris impérial, mithril/argent, or sobre, bordeaux profond
3. **Lumière** : tamisée, latérale, chaude — éclairage qui pense plutôt qu'illumine
4. **Visages tenus** : pas démonstratifs, pas séducteurs, pas hystériques — calme contrôlé
5. **Architecture** : pierre noble, colonnes hautes, lignes géométriques, refus du clinquant
6. **Refus du spectacle** : la magie est opératoire et discrète, pas théâtrale

---

## ÉTAT DE LA HOMEPAGE APRÈS NETTOYAGE

⚠️ **Impact visuel temporaire** : la homepage utilise actuellement :
- `/assets/scenes/hero_homepage.png` (FOND HÉROÏQUE) → **manquant**
- `/assets/heraldry/heraldry_cadifor_sigil.png` (BLASON) → **conservé**

Pendant la phase de transition, la homepage gardera son blason mais aura un fond noir uni à la place du hero. Le site continuera de **builder** sans erreur grâce à `next/image` et au système de fallback.

Tu peux soit :
- **Régénérer immédiatement `hero_homepage.png`** comme priorité absolue
- **Ou** modifier `site/src/app/page.tsx` ligne 67 pour ne plus afficher l'image fond temporairement

---

## COMMANDES POST-INTÉGRATION

```bash
# 1. Vérifie que les 8 nouvelles images sont en place
ls -la site/public/assets/portraits/portrait_marjory_formal.png \
       site/public/assets/portraits/portrait_johnson_trollbane_bust.png \
       site/public/assets/portraits/portrait_duchesse_quelthalas_bust.png \
       site/public/assets/portraits/portrait_folki_lowland.png \
       site/public/assets/scenes/scene_diner_imperial.png \
       site/public/assets/scenes/scene_diner_imperial_kalimdor.png \
       site/public/assets/scenes/scene_siege_main_de_tyr_744.png \
       site/public/assets/scenes/scene_air_corps_imperial.png

# 2. Build de vérification (le site doit builder même avec des images manquantes)
cd site && npm run build

# 3. Commit
git add site/public/assets/
git commit -m "Ajout 8 images canoniques au niveau Cadifor"
git push
```

---

## RAPPEL DES FICHES À ENRICHIR (lien avec les nouvelles images)

| Image | Fiche associée |
|-------|----------------|
| portrait_marjory_formal | `lore/personnages/12_marjory.md` |
| portrait_johnson_trollbane_bust | `lore/personnages/17_johnson.md` |
| portrait_duchesse_quelthalas_bust | `lore/personnages/47_duchesse_quelthalas.md` (nouvelle) |
| portrait_folki_lowland | `lore/personnages/48_folki_lowland.md` (nouvelle) |
| scene_diner_imperial | `lore/meta/scenes/diner_imperial.md` |
| scene_diner_imperial_kalimdor | `lore/meta/scenes/diner_imperial.md` (nouvelle scène) |
| scene_siege_main_de_tyr_744 | `lore/meta/guerre_tyrannie_andrea_741_744.md` |
| scene_air_corps_imperial | `lore/scenes/bataille_yelden_756.md`, `bataille_lowland_744.md` |

---

## RÉCUPÉRATION D'URGENCE (si tu changes d'avis)

Si tu veux récupérer les anciennes images supprimées :

```bash
# Les fichiers sont récupérables via git
git checkout HEAD~1 -- site/public/assets/portraits/ site/public/assets/scenes/ site/public/assets/locations/
```

Mais **je recommande de NE PAS le faire** : la doctrine canonique est de remettre le visuel au niveau de l'écriture. Mieux vaut un site sobre temporairement qu'un site avec des images qui dégradent le canon.

---

> *Le site n'a plus d'images. C'est inconfortable. Mais c'est aussi un acte de vérité : on refuse désormais que la grammaire visuelle soit en dessous de la grammaire écrite. À partir d'ici, chaque image qui revient devra être au niveau de l'Empire qu'elle illustre.*
