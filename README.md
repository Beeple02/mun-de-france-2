# MUN de France 2027 : site statique

HTML, CSS et JavaScript natif. Aucun build, aucun appel externe.

## Déploiement sur Cloudflare Pages (depuis GitHub)

1. Pousser le contenu de ce dossier à la racine du dépôt GitHub (branche `main`).
2. Cloudflare, Workers & Pages, Create, Pages, Connect to Git : choisir le dépôt et la branche `main`.
3. Réglages de build : Framework preset « None », commande de build vide, dossier de sortie `/` (racine).
4. Après le premier déploiement, onglet Custom domains : ajouter `mundefrance.fr`. Pour rediriger `www` vers le domaine nu, ajouter une règle de redirection dans la zone (Rules, Redirect Rules).
5. Activer « Always Use HTTPS » dans la zone (SSL/TLS, Edge Certificates).

Pour changer de dépôt : un projet Pages ne permet pas de remplacer son dépôt. Créer un nouveau projet connecté au nouveau dépôt, déplacer le domaine personnalisé, puis supprimer l'ancien projet.

`_headers` applique les en-têtes de sécurité et le cache des polices. `404.html` est servi automatiquement pour les pages inconnues. `.htaccess` ne sert que sur un hébergement Apache (OVH) et est ignoré par Cloudflare Pages.

## Notes

- La CSP (`_headers`, `.htaccess`) interdit les scripts et styles en ligne : ne pas en ajouter sans adapter la règle.
- Voir `TODO.md` pour les éléments à compléter.
