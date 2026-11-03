# Migration de Cadifor vers Vercel

Migration terminée : le site public est servi par Vercel sur https://cadifor.com. La publication depuis GitHub a été vérifiée avec le commit `c637c16d51a8e511d1e907256d1709d307c00a0f`, déploiement `dpl_JBwPEN2RbE6yhX7Pkj1zKFbnGwca`, état READY et source `git`.

- Projet : `cadifor` (`prj_7Wm95Ily5b7vEDWKcVei3kfmakrd`), compte `oshinsus-projects`.
- Dépôt : `Oshinsu/Cadifor`, branche `main`, racine `site` ; Node.js 24.x.
- Preset Next.js, `npm ci`, `npm run build`, répertoire de sortie Vercel par défaut. Le preset détecte l’export statique ; ne pas forcer `out` comme répertoire interne Next.js.
- Adresse de production secondaire : https://cadifor.vercel.app.
- DNS conservés chez Netlify : `cadifor.com A 76.76.21.21` et `www.cadifor.com CNAME cname.vercel-dns.com`, TTL 300. Valeurs fournies par la configuration du domaine dans Vercel lors de la migration.
- `www` redirige en 308 vers le domaine principal et conserve le chemin.
- Les deux anciens enregistrements web NETLIFY ont été remplacés. Les serveurs de noms et la zone restent inchangés.

Contrôles réussis sur Vercel, puis sur le domaine public : 40 chapitres, 3 710 paragraphes, 99 553 mots, 30 images du roman, EPUB valide et TXT identique aux octets de V5. Parcours Chromium à 1440 et 390 px : reprise de lecture au paragraphe, préférences, thèmes, tailles, masquage des images, menu mobile, galerie et clavier ; scène `diner_imperial` accessible, aucun débordement ni erreur JavaScript. Compilation locale et distante réussies. HTTPS valide, en-tête serveur Vercel et résolution DNS publique confirmés.

Le premier export par Git normalisait les fins de ligne du TXT. `.gitattributes` le conserve désormais comme artefact téléchargeable, sans conversion de ses octets. Les paragraphes du roman n’ont pas changé.

Le projet Netlify `27689515-18fa-40dd-9db4-898a0d32bf5b` a `build_settings.stop_builds = true`. Son ancienne publication `6ae9245079e46bd14516e047` reste conservée pour le retour arrière et les éventuels caches DNS de la transition.
