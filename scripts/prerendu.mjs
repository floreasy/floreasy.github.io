/**
 * Pré-rendu des pages : injecte dans chaque HTML le contenu que React produirait,
 * au lieu de laisser un <div id="root"> vide.
 *
 * Pourquoi
 * --------
 * Sans ça, le HTML servi ne contient que des balises meta : sur /conference,
 * 57 caractères de texte visible. Google sait exécuter le JS et indexe quand
 * même, mais Bing, DuckDuckGo, les outils d'audit et les assistants IA ne
 * l'exécutent pas — ils ne voient donc rien du contenu réel. En prime, le texte
 * n'apparaissait qu'après le téléchargement et l'exécution de React depuis un
 * CDN : si unpkg ne répond pas, la page reste blanche.
 *
 * Comment
 * -------
 * Les fichiers de js/ sont des scripts classiques, pas des modules : leurs
 * `const` et `function` de premier niveau se partagent une portée globale
 * commune, exactement comme dans le navigateur. On recrée ce contexte sous Node
 * avec `vm`, on y exécute shared.js puis la page, et le fichier de page expose
 * son composant sur `__COMPOSANT__` parce qu'il n'y a pas de `document`.
 *
 * L'injection est idempotente : elle remplace toujours le contenu entre les
 * marqueurs, on peut donc relancer autant de fois qu'on veut.
 *
 * Lancé par `npm run build`, après la compilation JSX.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createContext, runInContext } from "node:vm";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";

const RACINE = join(dirname(fileURLToPath(import.meta.url)), "..");
const DEBUT = "<!--pr-->";
const FIN = "<!--/pr-->";

/** Les pages à pré-rendre : chaque HTML qui charge un js/<nom>.js. */
function pages() {
  const trouvees = [];
  for (const f of readFileSync(join(RACINE, "sitemap.xml"), "utf8").matchAll(
    /<loc>https:\/\/pascalantonio\.fr\/([a-z0-9-]*)<\/loc>/g
  )) {
    const nom = f[1] === "" ? "index" : f[1];
    if (existsSync(join(RACINE, `${nom}.html`)) && existsSync(join(RACINE, "js", `${nom}.js`))) {
      trouvees.push(nom);
    }
  }
  return trouvees;
}

/** Rend une page en HTML, dans un contexte neuf pour éviter toute contamination. */
function rendre(nom) {
  const contexte = createContext({
    React,
    // Jamais appelé au pré-rendu (le code teste `typeof document`), mais présent
    // pour que rien ne casse si un jour quelqu'un l'utilise au niveau supérieur.
    ReactDOM: { hydrateRoot() {}, createRoot: () => ({ render() {} }) },
    console,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
  });
  contexte.globalThis = contexte;
  // shared.js termine par `Object.assign(window, { SiteHeader, ... })` : c'est
  // ainsi qu'il expose ses composants aux pages. Dans un navigateur, window EST
  // l'objet global — on reproduit ça. En revanche on ne définit surtout pas
  // `document` : c'est lui qui sert de test pour distinguer pré-rendu et
  // navigateur, et les effets qui touchent au DOM ne s'exécutent pas au rendu.
  contexte.window = contexte;

  for (const fichier of ["shared.js", `${nom}.js`]) {
    runInContext(readFileSync(join(RACINE, "js", fichier), "utf8"), contexte, {
      filename: `js/${fichier}`,
    });
  }

  const Composant = contexte.__COMPOSANT__;
  if (!Composant) throw new Error(`js/${nom}.js n'a pas exposé __COMPOSANT__`);
  return renderToString(React.createElement(Composant));
}

/** Remplace le contenu du <div id="root">, que la page ait déjà été rendue ou non. */
function injecter(html, rendu) {
  const bloc = `<div id="root">${DEBUT}${rendu}${FIN}</div>`;
  const dejaRendu = new RegExp(`<div id="root">${DEBUT}[\\s\\S]*?${FIN}</div>`);
  if (dejaRendu.test(html)) return html.replace(dejaRendu, bloc);
  if (html.includes('<div id="root"></div>')) return html.replace('<div id="root"></div>', bloc);
  throw new Error("aucun <div id=\"root\"> exploitable");
}

let total = 0;
for (const nom of pages()) {
  const chemin = join(RACINE, `${nom}.html`);
  const avant = readFileSync(chemin, "utf8");
  const rendu = rendre(nom);
  writeFileSync(chemin, injecter(avant, rendu), "utf8");
  total += rendu.length;
  console.log(`  ${nom.padEnd(18)} ${String(Math.round(rendu.length / 1024)).padStart(4)} Ko de HTML rendu`);
}
console.log(`→ ${pages().length} page(s) pré-rendue(s), ${Math.round(total / 1024)} Ko au total`);
