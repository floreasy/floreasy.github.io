# Pascal Antonio — site

Site officiel de Pascal Antonio, nom de scène de Pascal Jeanne — conférence
gesticulée « L'imposture du mâle alpha ». Servi sur https://pascalantonio.fr.

**Hébergement** : Coolify, buildpack statique, derrière un proxy Cloudflare.
Coolify **ne construit rien** : il sert le dépôt tel quel. C'est la raison pour
laquelle `js/` et le HTML pré-rendu sont versionnés. Le déploiement se déclenche
au push sur `main`.

## Travailler sur le site

```bash
npm install          # une seule fois
# éditer src/<page>.jsx ou shared.jsx
npm run build        # compile le JSX, puis pré-rend les pages
git commit && git push
```

**`npm run build` fait deux choses** et les deux comptent :

1. `babel src --out-dir js` compile le JSX en JavaScript classique.
2. `node scripts/prerendu.mjs` injecte dans chaque `.html` le contenu que React
   produirait, entre les marqueurs `<!--pr-->` du `<div id="root">`.

⚠ **Ne jamais commiter une modification de `src/` sans relancer `npm run build`.**
Rien ne le vérifie côté serveur : le site servirait un JavaScript et un HTML
périmés par rapport à leurs sources, en silence.

## Pourquoi le pré-rendu

Avant, le HTML servi ne contenait que des balises meta — 57 caractères de texte
visible sur `/conference`. Google exécute le JavaScript et indexait donc
correctement, mais Bing, DuckDuckGo, les outils d'audit et les assistants IA ne
l'exécutent pas : ils ne voyaient rien du contenu réel. Et si le CDN qui sert
React ne répondait pas, la page restait blanche.

Depuis, chaque page contient son texte : de 1 100 caractères sur `/contact` à
13 400 sur `/faq`. Dans le navigateur, React **hydrate** ce HTML au lieu de le
remplacer — le site reste interactif à l'identique.

### Comment ça marche

Les fichiers de `js/` sont des scripts classiques, pas des modules : leurs `const`
et `function` de premier niveau partagent une portée globale, comme dans un
navigateur. `scripts/prerendu.mjs` recrée ce contexte sous Node avec `vm`, y
exécute `shared.js` puis la page, et récupère le composant.

Le point de bascule est en fin de chaque `src/<page>.jsx` : s'il n'y a pas de
`document`, le fichier se contente d'exposer son composant sur `__COMPOSANT__` ;
sinon il hydrate le HTML existant, ou monte normalement s'il n'y en a pas. Ce
repli garantit qu'une page reste fonctionnelle même si le pré-rendu n'a pas été
lancé.

Le contexte Node reçoit un `window` — `shared.js` s'en sert pour exposer ses
composants — mais **jamais de `document`** : c'est lui qui distingue les deux
modes, et son absence garantit qu'aucun effet touchant au DOM ne s'exécute au
rendu.

L'injection est idempotente : relancer le build ne duplique rien.

## Structure

```
src/            sources JSX — c'est ici qu'on écrit
js/             sortie de Babel, versionnée (Coolify ne construit pas)
*.html          coquilles + contenu pré-rendu entre <!--pr--> et <!--/pr-->
assets/         images servies (WebP, plus les JPEG gardés pour og:image)
uploads/        originaux, non servis par les pages
shared.css      styles
consent.js      bannière de consentement et chargement conditionnel de GA4
scripts/        prerendu.mjs
```
