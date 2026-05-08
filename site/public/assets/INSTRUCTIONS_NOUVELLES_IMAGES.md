# INSTRUCTIONS — Déposer les 8 nouvelles images du chat

> Document généré pour intégrer 8 images partagées dans le chat ChatGPT/Claude. Le repo a déjà été préparé : registres mis à jour, fiches créées. Il reste juste à **déposer les fichiers PNG aux chemins exacts ci-dessous**.

---

## ÉTAT DU REPO

✅ **Déjà fait par moi** :
- Suppression des 4 anciens portraits Marjory pas au niveau (`campaign`, `dining`, `death`, `armor_ceremony`)
- Mise à jour de `site/src/lib/images.ts` avec les nouveaux mappings (Johnson, duchesse Quel'Thalas, Folki, scènes Yelden/Lowland/Crestbourg/Kalimdor/convocation)
- Création de `lore/personnages/47_duchesse_quelthalas.md` (nouvelle fiche pour la duchesse elfique)
- Création de `lore/personnages/48_folki_lowland.md` (nouvelle fiche pour le commandant principal)

❌ **À faire par toi** :
- Sauvegarder les 8 images du chat aux chemins indiqués ci-dessous
- Commit + push

---

## TABLEAU DES CORRESPONDANCES IMAGES

| # | Image du chat | Description | Chemin de destination | Action |
|---|---------------|-------------|----------------------|--------|
| **1** | Lot 1, image 1 | Table de marbre noir avec huîtres, cristal à liseré or, chemin de table ivoire | `site/public/assets/scenes/scene_diner_imperial.png` | **REMPLACE** l'ancienne |
| **2** | Lot 1, image 2 | Marjory + Rose à table avec carte arcane bleu-blanc flottante | `site/public/assets/scenes/scene_diner_imperial_kalimdor.png` | **NOUVEAU** |
| **3** | Lot 1, image 3 | Portrait Marjory sur trône, robe velours noir broderie argent | `site/public/assets/portraits/portrait_marjory_formal.png` | **REMPLACE** l'ancienne |
| **4** | Lot 2, image 1 | Cour château avec armée + ville en feu + bannière ours-engrenage | `site/public/assets/scenes/scene_siege_main_de_tyr_744.png` | **NOUVEAU** |
| **5** | Lot 2, image 2 | Reine elfe rousse couronne pointue + magie de feu sur balcon | `site/public/assets/portraits/portrait_duchesse_quelthalas_bust.png` | **NOUVEAU** (fiche `47_duchesse_quelthalas.md`) |
| **6** | Lot 2, image 3 | Chevalier au marteau de guerre sous la pluie, armure noir+or+bordeaux | `site/public/assets/portraits/portrait_johnson_trollbane_bust.png` | **NOUVEAU** (associé à `17_johnson.md`) |
| **7** | Lot 2, image 4 | Cavalier sur griffon avec escadre dans nuages d'orage | `site/public/assets/scenes/scene_air_corps_imperial.png` | **NOUVEAU** |
| **8** | Lot 2, image 5 | Homme balafré, armure usée, fortification + braseros derrière | `site/public/assets/portraits/portrait_folki_lowland.png` | **NOUVEAU** (fiche `48_folki_lowland.md`) |

---

## COMMENT PROCÉDER

### Méthode A — Via ChatGPT/Claude desktop

1. Dans le chat, **clic droit sur chaque image** → "Enregistrer l'image sous..."
2. Sauvegarde directement avec le **nom de fichier exact** indiqué dans la colonne "Chemin de destination" (juste le nom, ex: `scene_diner_imperial.png`)
3. Place le fichier dans le bon dossier (`site/public/assets/scenes/` ou `site/public/assets/portraits/`)

### Méthode B — Si Claude/ChatGPT ne te laisse pas faire clic droit

1. Sauvegarde les 8 images dans un dossier temporaire avec n'importe quel nom (ex: `image1.png`, `image2.png`, ...)
2. Renomme et déplace selon le tableau ci-dessus

---

## VÉRIFICATION

Après avoir déposé les 8 fichiers, vérifie :

```bash
# Doit lister les nouveaux fichiers
ls site/public/assets/portraits/portrait_marjory_formal.png \
   site/public/assets/portraits/portrait_johnson_trollbane_bust.png \
   site/public/assets/portraits/portrait_duchesse_quelthalas_bust.png \
   site/public/assets/portraits/portrait_folki_lowland.png \
   site/public/assets/scenes/scene_diner_imperial.png \
   site/public/assets/scenes/scene_diner_imperial_kalimdor.png \
   site/public/assets/scenes/scene_siege_main_de_tyr_744.png \
   site/public/assets/scenes/scene_air_corps_imperial.png

# Build de vérification
cd site && npm run build
```

---

## CE QUI A ÉTÉ SUPPRIMÉ

Les 4 portraits Marjory suivants ont été supprimés (non au niveau canonique selon ton verdict) :

- ~~`portrait_marjory_armor_ceremony.png`~~
- ~~`portrait_marjory_campaign.png`~~
- ~~`portrait_marjory_death.png`~~
- ~~`portrait_marjory_dining.png`~~

Si tu veux les régénérer plus tard via `assets-pipeline/`, ils peuvent revenir avec une qualité conforme au canon de l'**Impératrice de Forme** (voir `lore/meta/marjory_archetype_imperatrice_de_forme.md`).

---

## NOTES CANONIQUES IMPORTANTES

### Image 5 (duchesse Quel'Thalas)

Cette image **n'est pas une Cadifor**. Elle représente un **antagoniste haut-elfe** des guerres pré-573 d'Aberthol. Sa fiche `47_duchesse_quelthalas.md` la place comme adversaire pendant les campagnes lordaeronnaises au sud de Quel'Thalas. Sa grammaire visuelle ostentatoire **définit Cadifor par contraste**.

### Image 6 (chevalier au marteau)

Attribuée à **Johnson Trollbane** (le 4e fils devenu roi de Stromgarde par conquête en 740, mari d'Andrea II la Juste). L'esthétique pré-réformes-de-June (austère, militaire, marteau de guerre) colle avec la culture trollbane.

### Image 8 (homme balafré)

Attribuée à **Folki**, commandant principal des batailles de Lowland (744) et Yelden (756). Modèle du commandant cadiforien : technique, sobre, refuse le chant. Sa fiche `48_folki_lowland.md` formalise sa doctrine du « poids tactique ».

---

## APRÈS LE DÉPÔT

Une fois les 8 images en place :

```bash
git add site/public/assets/
git status  # Doit montrer 8 nouveaux PNG + le INSTRUCTIONS_NOUVELLES_IMAGES.md
git commit -m "Intégration 8 nouvelles images canoniques (lot chat)"
git push
```

Puis tu peux supprimer ce fichier `INSTRUCTIONS_NOUVELLES_IMAGES.md` si tu veux nettoyer le repo, ou le garder comme trace historique.
