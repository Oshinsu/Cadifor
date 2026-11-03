# Cadifor

Encyclopédie et roman **La Maison des vivants**, disponibles sur [cadifor.com](https://cadifor.com).

## Hébergement Vercel

Le projet Vercel `cadifor` est lié à `Oshinsu/Cadifor`, branche de production `main`, avec le répertoire racine `site` et Node.js 24.x. Les changements poussés sur cette branche déclenchent le déploiement.

Depuis `site`, `npm ci` installe les dépendances et `npm run build` produit les 292 pages statiques. Vercel utilise le preset Next.js et détecte `output: "export"` ; laisser le répertoire de sortie Vercel sur sa valeur par défaut. Le dossier `out` reste l’export utilisable par un serveur statique local.

Le domaine principal est `cadifor.com` ; `www.cadifor.com` redirige vers celui-ci. La zone DNS existante reste gérée chez Netlify. Les déploiements Netlify sont arrêtés après validation de la migration et l’ancienne publication est conservée pour le retour arrière.

Les quarante chapitres résident dans `site/content/roman/la-maison-des-vivants.json`. Les téléchargements EPUB/TXT et les trente photographies sont sous `site/public`. Les fichiers TXT de téléchargement gardent les octets de leur édition source via `.gitattributes`.
