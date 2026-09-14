/**
 * Rapatrie les polices Google en local et génère fonts.css.
 *
 * Pourquoi
 * --------
 * Charger les polices depuis Google coûte deux domaines tiers :
 * fonts.googleapis.com pour la feuille de style, fonts.gstatic.com pour les
 * fichiers. Chacun impose une résolution DNS et une négociation TLS avant que
 * le moindre caractère ne s'affiche — et la feuille bloque le rendu. En local,
 * tout part de la connexion déjà ouverte.
 *
 * Licences : les polices Google utilisées ici sont sous SIL Open Font License
 * ou Apache 2.0, qui autorisent explicitement l'auto-hébergement.
 *
 * Usage
 * -----
 *   node scripts/polices.mjs
 *
 * À relancer seulement si la liste des familles change. Les fichiers produits
 * (fonts/ et fonts.css) sont versionnés : le serveur ne construit rien.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const RACINE = join(dirname(fileURLToPath(import.meta.url)), "..");

// Les familles réellement référencées par shared.css et les sources.
const FEUILLE =
  "https://fonts.googleapis.com/css2" +
  "?family=Archivo+Black&family=Anton" +
  "&family=Instrument+Serif:ital@0;1" +
  "&family=Inter+Tight:wght@400;500;600&display=swap";

// Un site en français n'a besoin que de ces deux sous-ensembles. Les autres
// (cyrillique, grec, vietnamien) ne seraient de toute façon jamais téléchargés
// grâce à unicode-range, mais autant ne pas les versionner.
const SOUS_ENSEMBLES = new Set(["latin", "latin-ext"]);

// Sans un UA moderne, Google renvoie du ttf au lieu du woff2.
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const css = await (await fetch(FEUILLE, { headers: { "User-Agent": UA } })).text();

mkdirSync(join(RACINE, "fonts"), { recursive: true });

const blocs = [...css.matchAll(/\/\*\s*([a-z0-9-]+)\s*\*\/\s*@font-face\s*\{(.*?)\}/gs)];
const sortie = [
  "/* Polices auto-hébergées — généré par scripts/polices.mjs, ne pas éditer à la main. */",
  "",
];
let gardes = 0,
  octets = 0;

for (const [, sousEnsemble, corps] of blocs) {
  if (!SOUS_ENSEMBLES.has(sousEnsemble)) continue;

  const famille = /font-family:\s*'([^']+)'/.exec(corps)[1];
  const style = /font-style:\s*(\w+)/.exec(corps)[1];
  const poids = /font-weight:\s*(\d+)/.exec(corps)[1];
  const url = /src:\s*url\(([^)]+)\)/.exec(corps)[1];
  const plage = /unicode-range:\s*([^;]+);/.exec(corps)[1].trim();

  const nom =
    `${famille.toLowerCase().replace(/\s+/g, "-")}-${poids}` +
    `${style === "italic" ? "-italic" : ""}-${sousEnsemble}.woff2`;

  const donnees = Buffer.from(await (await fetch(url)).arrayBuffer());
  writeFileSync(join(RACINE, "fonts", nom), donnees);
  octets += donnees.length;
  gardes++;

  sortie.push(
    "@font-face {",
    `  font-family: '${famille}';`,
    `  font-style: ${style};`,
    `  font-weight: ${poids};`,
    "  font-display: swap;",
    `  src: url('fonts/${nom}') format('woff2');`,
    `  unicode-range: ${plage};`,
    "}",
    ""
  );
  console.log(`  ${nom.padEnd(42)} ${String(Math.round(donnees.length / 1024)).padStart(3)} Ko`);
}

writeFileSync(join(RACINE, "fonts.css"), sortie.join("\n"), "utf8");
console.log(
  `→ ${gardes} fichier(s), ${Math.round(octets / 1024)} Ko, ` +
    `sur ${blocs.length} blocs proposés par Google`
);
