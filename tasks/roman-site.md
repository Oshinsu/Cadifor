# Roman sur cadifor.com

- [x] Retrouver le dépôt, la version publiée et le site Netlify lié à cadifor.com.
- [x] Choisir la cinquième rédaction complète et la nouvelle série photographique V2.
- [x] Importer les 40 chapitres sans modifier leur texte ; conserver EPUB et TXT.
- [x] Ajouter Roman à la navigation et à l’accueil ; construire sommaire et lecteur par chapitre.
- [x] Ajouter reprise de lecture, taille du texte, thèmes et masquage des images.
- [x] Intégrer 18 images aux chapitres et les 30 nouvelles images dans la galerie.
- [x] Vérifier intégrité, lint, compilation statique et parcours desktop/mobile.
- [x] Publier sur le site existant et vérifier le roman sur cadifor.com.

Direction : prolongement du site sombre et doré existant. La lecture utilise une colonne de texte serif et une interface discrète. Les scènes photographiques restent sans blason ajouté. Ne pas confondre l’adaptation romanesque et les dossiers encyclopédiques.

Publication vérifiée : https://cadifor.com/roman · galerie : https://cadifor.com/galerie#roman.

Déploiement Netlify prêt `6ae9245079e46bd14516e047`, promu après contrôle de sa prévisualisation. Déploiement précédent conservé : `69fca418dd96560008a4981b`.

Validation : lint des fichiers modifiés, TypeScript et compilation de 292 pages réussis ; 40 chapitres et 3 710 paragraphes comparés au texte source dans l’export, puis depuis le domaine public. EPUB valide et TXT identique à V5. Parcours Chromium à 1440 et 390 px : reprise au paragraphe, préférences persistantes, thèmes, tailles, images masquables, menu mobile, visionneuse et clavier ; 30 images chargées, scène `diner_imperial` accessible, aucun débordement ni erreur JavaScript. Détecteur Impeccable : aucune occurrence sur les nouvelles surfaces. Revue de finition : disposition **ship** après résolution des trois corrections demandées (documentation, métadonnées de chapitre, compte de galerie).

Les nouveaux WebP totalisent 3,75 Mo et conservent dans leurs métadonnées le prompt de génération et l’empreinte de l’original PNG. Le texte et les ressources sont servis statiquement ; aucune base de données ni authentification nécessaire.
