    /* Quiz « Où te situes-tu ? » et radar intersectionnel (textes de Pascal, 2026-11-10).

       CONFIDENTIALITÉ — règle non négociable, posée le 2026-11-19 :
       les questions portent sur l'orientation sexuelle et l'origine, des données
       sensibles au sens du RGPD. Aucune réponse ni aucun score ne quitte le
       navigateur : pas de fetch, pas de formulaire, pas de localStorage, de
       sessionStorage ni de cookie. Tout vit dans l'état React et disparaît au
       rechargement, en quittant la page (y compris au retour par le cache
       arrière, voir pagehide/pageshow) ou avec « Recommencer ». L'image PNG est
       dessinée dans un canvas, sur l'appareil. Seul envoi toléré : l'événement GA4
       `radar_termine`, SANS AUCUN PARAMÈTRE, et seulement si consent.js a chargé
       gtag (donc après consentement, et uniquement en ligne). */

    /* Les textes de Pascal sont recopiés tels quels ; typo() ne fait que la
       typographie à l'affichage (apostrophe courbe, espaces insécables). */
    const AXES = [
      {
        id: "genre", nom: "Genre", lignes: ["Genre"],
        sous: "Égalité femmes-hommes",
        questions: [
          "Je peux rentrer chez moi seul·e la nuit sans modifier mon trajet par prudence.",
          "Quand je parle en réunion ou en groupe, on m'écoute sans m'interrompre systématiquement.",
          "On ne me reproche jamais d'être « trop » ceci ou « pas assez » cela à cause de mon genre (trop émotif·ve, trop autoritaire, pas assez souriant·e…).",
          "Je n'ai jamais renoncé à un travail, un stage, une formation ou une promotion en raison de mon genre.",
          "Je choisis mes vêtements sans penser à la façon dont on va me juger.",
          "Dans les films, séries et médias, des personnages de mon genre sont nombreux·ses et valorisé·e·s dans des rôles variés.",
          "Personne n'a jamais remis en cause mon choix d'études ou de métier « à cause » de mon genre.",
          "La charge domestique et mentale est répartie équitablement dans ma vie quotidienne.",
          "Je n'ai jamais eu l'impression de devoir prouver deux fois plus que les autres pour être cru·e ou reconnu·e.",
          "On ne m'a jamais adressé de remarque, blague ou geste désobligeant à cause de mon genre.",
        ],
      },
      {
        id: "race", nom: "Race", lignes: ["Race"],
        sous: "discrimination raciale",
        questions: [
          "On ne m'a jamais demandé d'où je viens « vraiment ».",
          "Jamais je n’ai été suivi·e de près par un·e vigile ou un·e vendeur·se dans un magasin.",
          "Quand je croise la police dans la rue, je poursuis mon chemin tranquillement et sans stress.",
          "Dans les visites de logements et les entretiens, mon nom, mon accent et mon apparence passent inaperçus.",
          "Je me sens en sécurité partout où je vais, quelle que soit ma couleur de peau ou mon origine.",
          "Dans les médias, je trouve facilement des personnages et des modèles valorisés qui me ressemblent.",
          // Seul ajout au texte de Pascal : le point final, absent du document.
          "Ma nationalité française est reconnue d'emblée par tout le monde.",
          "Je n'ai jamais subi de blagues, de remarques ou d'insultes sur mon origine ou ma couleur de peau.",
          "Ma culture et mes traditions (fêtes, cuisine, prénoms, langue) ne suscitent jamais de méfiance ou de curiosité déplacée.",
          "Dans une salle, je n'ai jamais été la seule personne à me ressembler.",
        ],
      },
      {
        id: "territoire", nom: "Territoire", lignes: ["Territoire"],
        sous: "discriminations entre centres urbains, économiques et touristiques vis-à-vis des périphéries urbaines et rurales",
        questions: [
          "J'accède facilement aux services publics de proximité (école, santé, poste, médiathèque…).",
          "Un·e médecin, un·e spécialiste ou un hôpital est accessible en moins de 30 minutes depuis chez moi.",
          "Je peux étudier ou travailler sans devoir déménager ni subir de très longs trajets.",
          "L'offre culturelle et de loisirs est riche et accessible près de chez moi.",
          "Ma connexion internet et ma couverture mobile sont fiables.",
          "Les transports publics ou des solutions de mobilité me permettent de me déplacer facilement au quotidien.",
          "Mon adresse ou le nom de ma commune n'a jamais joué contre moi dans une candidature ou un dossier.",
          "Mon territoire n'est pas réduit à des clichés (« la banlieue », « la campagne profonde », « le trou perdu »…) quand j'en parle.",
          "Ma commune ou mon quartier pèse dans les décisions publiques et les investissements.",
          "Vivre là où je vis ne me coûte pas d'occasions (emploi, rencontres, engagements…).",
        ],
      },
      {
        id: "orientation", nom: "Orientation sexuelle", lignes: ["Orientation", "sexuelle"],
        sous: "discriminations LGBTQIA+",
        questions: [
          "Je peux marcher main dans la main avec la personne que j'aime sans regarder autour de moi.",
          "Je n'ai jamais eu à cacher mon orientation sexuelle ni à choisir soigneusement les personnes à qui j'en parle.",
          "Ma famille et mes proches reconnaissent mes relations comme toutes les autres relations.",
          "Je n'ai jamais subi de moqueries, de menaces ou d'agressions à cause de mon orientation.",
          "Je peux parler librement de ma vie affective au travail, à l'école ou en formation.",
          "Dans les films, séries et médias, des relations comme les miennes sont partout et ne choquent personne.",
          "Je n'ai jamais eu à corriger les suppositions des autres sur mon orientation sexuelle.",
          "Les démarches liées à mon couple (mariage, reconnaissance, adoption, PMA…) ne m'ont jamais semblé plus compliquées que pour d'autres.",
          "Je n'ai jamais eu peur des réactions si l'on découvrait mon orientation sexuelle.",
          "Je n'ai jamais eu besoin d'un lieu « sécurisé » pour être moi-même avec ma/mon partenaire.",
        ],
      },
      {
        id: "classe", nom: "Classe", lignes: ["Classe"],
        sous: "discrimination sociale",
        questions: [
          "L'argent n'était pas une source de stress dans ma famille, pour la gestion de la vie quotidienne, pendant mon enfance.",
          "J'ai pu étudier et choisir mes études sans renoncer pour des raisons financières.",
          "Je n'ai jamais renoncé à des soins, des loisirs ou des vacances pour des raisons financières.",
          "En cas de coup dur, mes proches ont pu m'aider (argent, hébergement, réseau, coup de main).",
          "On ne m'a jamais jugé·e sur mon accent, mon vocabulaire ou mes codes culturels.",
          "J'ai déjà bénéficié d'un réseau de relations pour trouver un travail, un stage ou un logement.",
          "Je connais dans mon entourage des personnes qui exercent les métiers auxquels j'aspire.",
          "Je peux absorber une dépense imprévue sans mettre en péril mon budget du mois.",
          "Je n'ai jamais eu honte de mes conditions de vie ou de ma situation financière.",
          "Je pars en vacances au moins une fois par an.",
        ],
      },
    ];

    // Les 4 premières consignes sont celles de Pascal ; les 2 dernières remplacent
    // « Additionne tes points » et « Reporte tes scores », sans objet en ligne.
    const CONSIGNES = [
      "Réponds seul·e, sans aide, dans le silence. Il n'y a ni bonne ni mauvaise réponse : seule ton expérience compte.",
      "Pour chaque question, réponds VRAI (1 point), FAUX (0 point) ou JE NE SAIS PAS (0 point, comme FAUX).",
      "Toutes les questions sont formulées du côté de la position privilégiée : plus tu réponds « vrai », plus tu es en position dominante sur cet axe.",
      "Tu as le droit de passer une question (elle compte alors 0 point). Personne ne te demandera d'expliquer.",
      "Une question laissée sans réponse compte comme passée.",
      "Ton score sur 10 est calculé pour chaque axe et reporté sur le radar : 0 = centre (position dominée), 10 = périphérie (position dominante).",
    ];

    const LECTURE = [
      "Aucun radar n'est rond : chacun·e est dominant·e quelque part et dominé·e ailleurs. C'est précisément cela, l'intersectionnalité : les axes ne s'additionnent pas seulement, ils se combinent dans une vie réelle.",
      "Le radar n'est ni un diagnostic, ni une identité figée : c'est une photo, un point de départ pour l'échange.",
    ];

    const DEBRIEFING = [
      { q: "Qu'est-ce que j'ai ressenti en répondant à ce questionnaire ?" },
      { q: "Quel axe m'a le plus surpris ? Le plus mis en inconfort ?" },
      { q: "Sur les axes où je suis vers la périphérie (dominant·e) : quels avantages concrets en ai-je retirés ?", note: "(Ce n'est pas une question de culpabilité : le privilège n'est pas une faute, c'est un fait — ce qu'on en fait est une responsabilité.)" },
      { q: "Sur les axes où je suis vers le centre (dominé·e) : quelles stratégies de défense ai-je déjà mobilisées, souvent sans le savoir ?" },
      { q: "Deux axes se combinent-ils dans ma vie ? (Par exemple : territoire + classe, genre + race…) Que changent ces combinaisons au quotidien ?" },
      { q: "Qu'est-ce que j'en fais, concrètement ? Quelles pistes d'action, pour moi et pour le collectif ?" },
    ];

    const LEGENDE = "0 (centre) = position dominée · 10 (périphérie) = position dominante";

    /* Frontière dominé / dominant : l'anneau 5 (Florian, 2026-11-20). Un score de
       5 reste côté dominé ; 6 et plus, c'est dépasser l'anneau. Rose en deçà,
       jaune au-delà, sur le radar, les cases, la légende et l'image PNG. */
    const SEUIL = 5;
    const dominant = (v) => v > SEUIL;
    // Libellés des pastilles : à faire valider par Pascal.
    const ZONES = [
      { cle: "bas", label: "position dominée (0 à 5)" },
      { cle: "haut", label: "position dominante (6 à 10)" },
    ];
    /* Le jaune plein ne se détache pas du papier (contraste 1,3:1) : la zone
       dominante est hachurée à l'encre, traits à 45°, ce qui la distingue aussi
       sans la couleur (impression en noir et blanc, daltonisme). Unités de la
       boîte du radar, communes au <pattern> SVG et au canvas. */
    const HACHURE = { pas: 6, trait: 1.2 };

    // « Je ne sais pas » vaut 0 point, comme Faux (Pascal, 2026-11-19). Il ne
    // remplace pas le droit de passer : une question peut rester sans réponse.
    const CHOIX = [
      { v: "vrai", label: "Vrai" },
      { v: "faux", label: "Faux" },
      { v: "ne-sait-pas", label: "Je ne sais pas" },
    ];

    // Étapes : 0 accueil, 1 à 5 un axe chacune, 6 résultat.
    const RESULTAT = AXES.length + 1;

    function typo(s) {
      return s
        .replace(/'/g, "\u2019")
        .replace(/(\d) point/g, "$1\u00a0point")
        .replace(/« /g, "«\u00a0")
        .replace(/ ([?!:;»])/g, "\u00a0$1");
    }

    const reponsesVides = () => AXES.map(ax => ax.questions.map(() => null));
    // Vrai = 1 point ; faux, je ne sais pas et sans réponse = 0.
    const calculerScores = (reponses) => reponses.map(r => r.filter(x => x === "vrai").length);
    const deux = (n) => String(n).padStart(2, "0");

    /* ===== Géométrie du radar, partagée par le SVG et l'image PNG =====
       Pentagone, Genre en haut puis sens des aiguilles d'une montre, comme le
       modèle papier de Pascal. Coordonnées dans une boîte de 480 × 420. */
    const G = { l: 480, h: 420, cx: 240, cy: 212, r: 150 };
    const COTES = ["dessus", "droite", "dessous", "dessous", "gauche"];

    function pointAxe(i, v) {
      const a = (-90 + 72 * i) * Math.PI / 180;
      const d = G.r * v / 10;
      return [G.cx + d * Math.cos(a), G.cy + d * Math.sin(a)];
    }

    function geometrie(scores) {
      const anneaux = [];
      for (let k = 1; k <= 10; k++) anneaux.push(AXES.map((_, i) => pointAxe(i, k)));
      const rayons = AXES.map((_, i) => pointAxe(i, 10));
      const sommets = scores ? scores.map((v, i) => pointAxe(i, v)) : null;

      // Graduations sur l'axe Genre, comme le modèle papier. Pas sur le résultat :
      // chaque score y est écrit en bout d'axe, et les chiffres passaient sous le
      // tracé et les points.
      const valeurs = scores ? [] : [0, 2, 4, 6, 8, 10];
      const grads = valeurs.map(k => ({ t: String(k), x: G.cx + 6, y: pointAxe(0, k)[1] + 4 }));

      // Libellés en bout d'axe : nom (une ou deux lignes), puis score.
      // h = avance de ligne avant cette ligne.
      const etiquettes = [];
      AXES.forEach((ax, i) => {
        const [vx, vy] = pointAxe(i, 10);
        const lignes = ax.lignes.map(t => ({ t: t.toUpperCase(), type: "nom", h: 18 }));
        if (scores) lignes.push({ t: `${scores[i]}/10`, type: "score", h: 24 });
        const cote = COTES[i];
        let x = vx, ancre = "middle", ys = [];
        if (cote === "dessous") {
          let y = vy + 28;
          lignes.forEach((l, j) => { if (j) y += l.h; ys.push(y); });
        } else if (cote === "dessus") {
          let y = vy - 14;
          for (let j = lignes.length - 1; j >= 0; j--) { ys[j] = y; y -= lignes[j].h; }
        } else {
          x = cote === "droite" ? vx + 14 : vx - 14;
          ancre = cote === "droite" ? "start" : "end";
          const hauteur = 11 + lignes.slice(1).reduce((s, l) => s + l.h, 0);
          let y = vy - hauteur / 2 + 11;
          lignes.forEach((l, j) => { if (j) y += l.h; ys.push(y); });
        }
        lignes.forEach((l, j) => etiquettes.push({ t: l.t, type: l.type, x, y: ys[j], ancre }));
      });

      return { anneaux, rayons, sommets, grads, etiquettes };
    }

    const f2 = (n) => Math.round(n * 100) / 100;
    const listePoints = (pts) => pts.map(p => `${f2(p[0])},${f2(p[1])}`).join(" ");

    function RadarSvg({ scores, anime }) {
      const g = geometrie(scores);
      const d = g.sommets && ("M" + g.sommets.map(p => `${f2(p[0])} ${f2(p[1])}`).join(" L") + " Z");
      // Un seul radar avec forme à la fois (le résultat) : des id fixes suffisent.
      return (
        <svg className={`rq-radar${anime ? " rq-anime" : ""}`} viewBox={`0 0 ${G.l} ${G.h}`} aria-hidden="true">
          {d && (
            <defs>
              <clipPath id="rq-dedans"><polygon points={listePoints(g.anneaux[SEUIL - 1])} /></clipPath>
              <pattern id="rq-hachure" width={HACHURE.pas} height={HACHURE.pas} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect className="hachure" width={HACHURE.trait} height={HACHURE.pas} />
              </pattern>
            </defs>
          )}
          {/* Forme jaune hachurée partout, puis rose coupé sur l'anneau 5 : la
              coupe suit l'anneau même quand un côté le traverse. */}
          {d && (
            <g className="forme">
              <path className="forme-haut" d={d} />
              <path d={d} fill="url(#rq-hachure)" />
              <path className="forme-bas" d={d} clipPath="url(#rq-dedans)" />
            </g>
          )}
          {g.anneaux.slice(0, 9).map((a, k) => (
            <polygon key={k} className={k === SEUIL - 1 ? "anneau anneau-seuil" : "anneau"} points={listePoints(a)} />
          ))}
          {g.rayons.map((p, i) => <line key={i} className="rayon" x1={G.cx} y1={G.cy} x2={f2(p[0])} y2={f2(p[1])} />)}
          <polygon className="anneau-ext" points={listePoints(g.anneaux[9])} />
          {d && <path className="trait" d={d} pathLength="1" />}
          {g.sommets && g.sommets.map((p, i) => (
            <circle key={i} className={`point ${dominant(scores[i]) ? "haut" : "bas"}`} cx={f2(p[0])} cy={f2(p[1])} r="7"
              style={{ "--i": String(i), "--dx": `${f2(G.cx - p[0])}px`, "--dy": `${f2(G.cy - p[1])}px` }} />
          ))}
          {g.grads.map(t => <text key={t.t} className="grad" x={f2(t.x)} y={f2(t.y)}>{t.t}</text>)}
          {g.etiquettes.map((e, k) => (
            <text key={k} className={e.type} x={f2(e.x)} y={f2(e.y)} textAnchor={e.ancre}>{e.t}</text>
          ))}
        </svg>
      );
    }

    /* ===== Image PNG, dessinée sur l'appareil ===== */
    function cheminFerme(ctx, pts) {
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
      ctx.closePath();
    }

    function espacement(ctx, valeur) {
      if ("letterSpacing" in ctx) ctx.letterSpacing = valeur;
    }

    // Le motif du <pattern> SVG, dans le repère du radar (origine ox, oy,
    // échelle e) : à poser dans un clip déjà ouvert.
    function hachurer(ctx, couleur, ox, oy, e) {
      ctx.save();
      ctx.translate(ox, oy); ctx.scale(e, e); ctx.rotate(Math.PI / 4);
      ctx.fillStyle = couleur;
      for (let k = -150; k <= 200; k++) ctx.fillRect(k * HACHURE.pas, -1000, HACHURE.trait, 2000);
      ctx.restore();
    }

    async function creerImage(scores, date) {
      // Les couleurs et polices viennent de shared.css, pas d'une copie ici.
      const css = getComputedStyle(document.documentElement);
      const v = (nom, defaut) => css.getPropertyValue(nom).trim() || defaut;
      const C = { rose: v("--pink", "#EE3A7A"), jaune: v("--yellow", "#F4E029"), encre: v("--ink", "#0E0E0E"), papier: v("--paper", "#FBF8F3") };
      const P = { titre: v("--font-display", "sans-serif"), serif: v("--font-serif", "serif"), texte: v("--font-body", "sans-serif") };
      const dateTexte = date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

      // Le canvas n'attend pas les polices : sans ça, la première image peut sortir
      // dans une police système. Ce sont des fichiers du site, déjà chargés en général.
      // Seule la première famille de chaque pile : load() chargerait aussi les secours.
      const premiere = (pile) => pile.split(",")[0].trim();
      if (document.fonts && document.fonts.load) {
        try {
          await Promise.all([
            document.fonts.load(`100px ${premiere(P.titre)}`, "OÙ TE QUIZ GENRE ORIENTATION " + dateTexte.toUpperCase()),
            document.fonts.load(`italic 100px ${premiere(P.serif)}`, "situes-tu ? Ton radar intersectionnel 0123456789/"),
            document.fonts.load(`24px ${premiere(P.texte)}`, LEGENDE + ZONES.map(z => z.label).join("")),
          ]);
        } catch (e) { /* on dessine quand même */ }
      }

      const W = 1080, H = 1350, M = 72;
      const toile = document.createElement("canvas");
      toile.width = W; toile.height = H;
      const x = toile.getContext("2d");
      x.textBaseline = "alphabetic";

      x.fillStyle = C.papier; x.fillRect(0, 0, W, H);

      // Bandeau jaune : la même composition que l'en-tête de la page.
      x.fillStyle = C.jaune; x.fillRect(0, 0, W, 336);
      x.fillStyle = C.encre; x.fillRect(0, 336, W, 3);
      x.fillRect(M, 86, 40, 3);
      x.font = `22px ${P.titre}`; espacement(x, "3px");
      x.fillText("QUIZ", M + 56, 95);
      espacement(x, "0px");
      x.font = `104px ${P.titre}`;
      x.fillText("OÙ TE", M, 206);
      x.font = `italic 112px ${P.serif}`;
      const accroche = "situes-tu\u00a0?";
      const largeur = x.measureText(accroche).width;
      x.fillStyle = C.rose; x.fillRect(M, 214, largeur + 28, 102);
      x.fillStyle = C.encre; x.fillText(accroche, M + 14, 296);

      x.font = `italic 46px ${P.serif}`;
      x.fillText("Ton radar intersectionnel", M, 408);

      // Radar
      const ech = 1.75, ox = (W - G.l * ech) / 2, oy = 428;
      const T = (p) => [ox + p[0] * ech, oy + p[1] * ech];
      const g = geometrie(scores);
      const sommets = g.sommets.map(T);
      const seuil = g.anneaux[SEUIL - 1].map(T);
      // Même superposition que le SVG : jaune, hachure, puis rose coupé sur l'anneau 5.
      cheminFerme(x, sommets); x.fillStyle = C.jaune; x.fill();
      x.save(); cheminFerme(x, sommets); x.clip(); hachurer(x, C.encre, ox, oy, ech); x.restore();
      x.save(); cheminFerme(x, seuil); x.clip();
      cheminFerme(x, sommets); x.fillStyle = C.rose; x.fill();
      x.restore();
      x.strokeStyle = C.encre;
      g.anneaux.slice(0, 9).forEach((a, k) => {
        const marque = k === SEUIL - 1;
        x.globalAlpha = marque ? 0.8 : 0.22; x.lineWidth = marque ? 2.25 : 1.5;
        cheminFerme(x, a.map(T)); x.stroke();
      });
      x.lineWidth = 1.5;
      x.globalAlpha = 0.45;
      const centre = T([G.cx, G.cy]);
      g.rayons.map(T).forEach(p => { x.beginPath(); x.moveTo(centre[0], centre[1]); x.lineTo(p[0], p[1]); x.stroke(); });
      x.globalAlpha = 1; x.lineWidth = 3;
      cheminFerme(x, g.anneaux[9].map(T)); x.stroke();
      x.lineWidth = 2.5 * ech; x.lineJoin = "round";
      cheminFerme(x, sommets); x.stroke();
      sommets.forEach((p, i) => {
        x.beginPath(); x.arc(p[0], p[1], 7 * ech, 0, Math.PI * 2);
        x.fillStyle = dominant(scores[i]) ? C.jaune : C.rose; x.fill(); x.stroke();
      });
      x.fillStyle = C.encre;
      x.font = `${11 * ech}px ${P.texte}`; x.globalAlpha = 0.6; x.textAlign = "left";
      g.grads.forEach(t => { const [px, py] = T([t.x, t.y]); x.fillText(t.t, px, py); });
      x.globalAlpha = 1;
      g.etiquettes.forEach(e => {
        const [px, py] = T([e.x, e.y]);
        x.font = e.type === "nom" ? `${15 * ech}px ${P.titre}` : `italic ${22 * ech}px ${P.serif}`;
        x.textAlign = e.ancre === "middle" ? "center" : e.ancre === "start" ? "left" : "right";
        x.fillText(e.t, px, py);
      });

      // Légende de Pascal, pastilles des deux zones, puis date. Pas de nom.
      x.textAlign = "center"; x.font = `25px ${P.texte}`;
      x.fillText(LEGENDE, W / 2, 1192);
      x.font = `24px ${P.texte}`; x.textAlign = "left";
      const cote = 26, avant = 14, entre = 44, base = 1240;
      const largeurs = ZONES.map(z => x.measureText(z.label).width);
      let px = (W - largeurs.reduce((s, l) => s + cote + avant + l, 0) - entre) / 2;
      ZONES.forEach((z, i) => {
        const haut = base - 20;
        x.fillStyle = z.cle === "haut" ? C.jaune : C.rose;
        x.fillRect(px, haut, cote, cote);
        if (z.cle === "haut") {
          x.save(); x.beginPath(); x.rect(px, haut, cote, cote); x.clip(); hachurer(x, C.encre, ox, oy, ech); x.restore();
        }
        x.lineWidth = 3; x.strokeStyle = C.encre; x.strokeRect(px + 1.5, haut + 1.5, cote - 3, cote - 3);
        x.fillStyle = C.encre; x.fillText(z.label, px + cote + avant, base);
        px += cote + avant + largeurs[i] + entre;
      });
      x.fillRect(M, 1270, W - 2 * M, 3);
      x.font = `22px ${P.titre}`; espacement(x, "2px");
      x.textAlign = "left"; x.fillText(dateTexte.toUpperCase(), M, 1314);
      x.textAlign = "right"; x.fillText("PASCALANTONIO.FR", W - M, 1314);
      espacement(x, "0px");

      return new Promise((ok, ko) => toile.toBlob(b => (b ? ok(b) : ko(new Error("toBlob"))), "image/png"));
    }

    function enregistrer(blob, nom) {
      const url = URL.createObjectURL(blob);
      // Lien détaché du document : le clic ne remonte pas jusqu'à
      // useCurtainTransitions, qui le prendrait pour une navigation.
      const lien = document.createElement("a");
      lien.href = url;
      lien.download = nom;
      lien.click();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    }

    /* ===== Écrans ===== */
    function Accueil({ titreRef, enCours, onCommencer }) {
      const libelle = enCours ? "Reprendre le quiz" : "Commencer le quiz";
      return (
        <>
          <section className="rq-hero">
            <div className="rq-wrap rq-hero-grid">
              <div>
                <div className="eyebrow">Quiz</div>
                <h1 className="h-display rq-h1" ref={titreRef} tabIndex={-1}>
                  Où te<br/><span className="rq-hl">situes-tu{"\u00a0"}?</span>
                </h1>
                <p className="h-serif rq-sous">Ton radar intersectionnel</p>
                <p className="body-l rq-intro">{typo("Te situer, en toute confidentialité, sur cinq axes de domination. À la fin, ton radar intersectionnel te montre d'un seul coup d'œil où tu es en position dominante et où tu es en position dominée — et comment ces positions se combinent.")}</p>
                <div className="rq-actions">
                  <button type="button" className="btn" onClick={onCommencer}>{libelle} <span className="arrow">→</span></button>
                </div>
                <p className="rq-promesse">{typo("5 axes, 50 questions. Tes réponses restent sur ton appareil, et tu peux passer n'importe quelle question.")}</p>
              </div>
              <figure className="rq-hero-radar">
                <RadarSvg />
              </figure>
            </div>
          </section>

          <section className="page reveal">
            <div className="rq-cols">
              <div>
                <div className="eyebrow">Avant de commencer</div>
                <h2 className="h-section">Consignes</h2>
                <ol className="rq-liste">
                  {CONSIGNES.map((c, i) => <li key={i}>{typo(c)}</li>)}
                </ol>
              </div>
              <aside className="rq-note">
                <div className="eyebrow">Confidentialité</div>
                <h3>Tes réponses restent sur ton appareil</h3>
                <p>{typo("Elles ne sont ni envoyées ni enregistrées, pas plus que tes scores. Tout s'efface dès que tu recharges ou quittes la page, ou que tu cliques sur « Recommencer ».")}</p>
                <p>{typo("Tu peux passer n'importe quelle question.")}</p>
                <p className="rq-petit">{typo("Si tu as accepté la mesure d'audience, le site compte seulement qu'un quiz a été terminé : aucune réponse, aucun score.")}</p>
              </aside>
            </div>
          </section>

          <section className="page rq-axes-sec reveal">
            <div className="eyebrow">5 axes × 10 questions</div>
            <h2 className="h-section">Les cinq axes</h2>
            <ol className="rq-axes">
              {AXES.map((ax, i) => (
                <li key={ax.id}>
                  <span className="n">{deux(i + 1)}</span>
                  <span className="nom">{ax.nom}</span>
                  <span className="sous">{typo(ax.sous)}</span>
                </li>
              ))}
            </ol>
            <div className="rq-actions">
              <button type="button" className="btn btn-pink" onClick={onCommencer}>{libelle} <span className="arrow">→</span></button>
            </div>
          </section>
        </>
      );
    }

    function Progression({ reponses, courant }) {
      return (
        <ol className="rq-prog" aria-hidden="true">
          {AXES.map((ax, k) => {
            const n = reponses[k].filter(Boolean).length;
            const etat = k === courant ? "on" : k < courant ? "fait" : "";
            return (
              <li key={ax.id} className={etat}>
                <span className="barre"><i style={{ width: `${n * 10}%` }}></i></span>
                <span className="nom">{ax.nom}</span>
              </li>
            );
          })}
        </ol>
      );
    }

    function Question({ a, i, texte, valeur, onRepondre }) {
      const nom = `rq-${a}-${i}`;
      return (
        <fieldset className="rq-q">
          <legend>
            <span className="rq-q-n" aria-hidden="true">{deux(i + 1)}</span>
            <span className="sr-only">{`Question ${i + 1} sur 10 : `}</span>
            {typo(texte)}
          </legend>
          <div className="rq-opts">
            {CHOIX.map(c => (
              <label key={c.v} className="rq-opt">
                <input type="radio" name={nom} value={c.v} checked={valeur === c.v} onChange={() => onRepondre(a, i, c.v)} />
                <span>{c.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      );
    }

    function EcranAxe({ a, reponses, titreRef, onRepondre, onPrecedent, onSuivant }) {
      const axe = AXES[a];
      const sansReponse = reponses[a].filter(x => !x).length;
      const dernier = a === AXES.length - 1;
      return (
        <section className="page rq-ecran">
          <Progression reponses={reponses} courant={a} />
          <h2 className="rq-titre" ref={titreRef} tabIndex={-1}>
            <span className="eyebrow">{`Axe ${a + 1} sur ${AXES.length}`}</span>{" "}
            <span className="nom">{axe.nom}</span>
          </h2>
          <p className="rq-axe-sous">{typo(axe.sous)}</p>

          <div className="rq-questions">
            {axe.questions.map((q, i) => (
              <Question key={`${a}-${i}`} a={a} i={i} texte={q} valeur={reponses[a][i]} onRepondre={onRepondre} />
            ))}
          </div>

          {sansReponse > 0 && (
            <p id="rq-sans" className="rq-sans">
              {sansReponse === 1
                ? typo("1 question sans réponse : elle comptera comme passée (0 point).")
                : typo(`${sansReponse} questions sans réponse : elles compteront comme passées (0 point).`)}
            </p>
          )}
          <div className="rq-nav">
            <button type="button" className="btn btn-out" onClick={onPrecedent}>
              ← {a === 0 ? "Retour" : "Axe précédent"}
            </button>
            <button type="button" className={`btn${dernier ? " btn-pink" : ""}`} onClick={onSuivant} aria-describedby={sansReponse > 0 ? "rq-sans" : undefined}>
              {dernier ? "Voir mon radar" : "Axe suivant"} <span className="arrow">→</span>
            </button>
          </div>
        </section>
      );
    }

    function Resultat({ scores, titreRef, onModifier, onRecommencer }) {
      const [png, setPng] = React.useState("pret"); // pret | encours | erreur

      const telecharger = async () => {
        if (png === "encours") return;
        setPng("encours");
        try {
          const date = new Date();
          const blob = await creerImage(scores, date);
          const jour = date.toLocaleDateString("sv-SE"); // AAAA-MM-JJ
          enregistrer(blob, `radar-intersectionnel-${jour}.png`);
          setPng("pret");
        } catch (e) {
          setPng("erreur");
        }
      };

      return (
        <>
          <section className="rq-res">
            <div className="rq-wrap">
              <div className="eyebrow">Résultat</div>
              <h2 className="h-section" ref={titreRef} tabIndex={-1}>
                Ton radar<br/><span className="rq-hl">intersectionnel</span>
              </h2>
              <div className="rq-res-grid">
                <figure className="rq-res-radar">
                  <RadarSvg scores={scores} anime />
                  <figcaption>
                    <p>{LEGENDE}</p>
                    <ul className="rq-zones">
                      {ZONES.map(z => <li key={z.cle}><i className={z.cle} aria-hidden="true"></i>{z.label}</li>)}
                    </ul>
                  </figcaption>
                </figure>
                <div className="rq-res-side">
                  <p className="rq-res-intro">Tes cinq points reliés dessinent ta forme personnelle.</p>
                  <ul className="rq-scores">
                    {AXES.map((ax, i) => (
                      <li key={ax.id}>
                        <span className="nom">{ax.nom}</span>
                        <span className="rq-cases" aria-hidden="true">
                          {ax.questions.map((_, k) => (
                            <i key={k} className={k >= scores[i] ? "" : k < SEUIL ? "on" : "on haut"}></i>
                          ))}
                        </span>
                        <span className="val">
                          <span aria-hidden="true">{scores[i]}/10</span>
                          <span className="sr-only">{`${scores[i]} sur 10, ${dominant(scores[i]) ? "position dominante" : "position dominée"}`}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="rq-actions">
                    <button type="button" className="btn btn-pink" onClick={telecharger} aria-describedby="rq-png-note" disabled={png === "encours"}>
                      {png === "encours" ? "Préparation…" : <>Télécharger mon radar <span aria-hidden="true">↓</span></>}
                    </button>
                    <button type="button" className="btn btn-out" onClick={onRecommencer} aria-describedby="rq-effacer-note">Recommencer</button>
                  </div>
                  <p className="rq-petit" id="rq-png-note">{typo("L'image PNG est créée sur ton appareil, avec la date et sans ton nom.")}</p>
                  <p className="rq-petit" id="rq-effacer-note">{typo("« Recommencer » efface toutes tes réponses.")}</p>
                  <p className="rq-erreur" role="status">
                    {png === "erreur" ? typo("L'image n'a pas pu être créée sur cet appareil. Une capture d'écran fera l'affaire.") : ""}
                  </p>
                  <button type="button" className="rq-lien" onClick={onModifier}>← Modifier mes réponses</button>
                </div>
              </div>
            </div>
          </section>

          <section className="page reveal">
            <div className="col2">
              <div>
                <div className="eyebrow">Lecture</div>
                <h2 className="h-section">Lecture du radar</h2>
              </div>
              <ul className="rq-lecture">
                {LECTURE.map((t, i) => <li key={i}>{typo(t)}</li>)}
              </ul>
            </div>
          </section>

          <section className="page rq-debrief reveal">
            <div className="eyebrow">Débriefing</div>
            <h2 className="h-section">Questions à te poser</h2>
            <p className="body-l rq-debrief-intro">{typo("En atelier, ces questions se discutent en groupe. Ici, pose-les-toi seul·e, à ton rythme.")}</p>
            <ol className="rq-dq">
              {DEBRIEFING.map((d, i) => (
                <li key={i}>
                  <span className="n" aria-hidden="true">{deux(i + 1)}</span>
                  <p>{typo(d.q)}</p>
                  {d.note && <p className="rq-dq-note">{typo(d.note)}</p>}
                </li>
              ))}
            </ol>
          </section>

          <section className="rq-cta reveal">
            <div className="rq-wrap">
              <div className="eyebrow">Aller plus loin</div>
              <h2 className="h-section">L’atelier <span className="rq-hl rq-hl-jaune">Diversité et inclusion</span></h2>
              <div className="rq-cta-grid">
                <p className="h-serif"><em>Comprendre nos privilèges pour mieux agir.</em></p>
                <div>
                  <p className="body-l">Un atelier qui propose de se positionner sur un radar intersectionnel en expliquant en quoi on se considère comme dominé·es ou dominant·es, et qui bouscule nos certitudes.</p>
                  <p className="rq-chips"><span className="chip">1 à 2h</span> <span className="chip">10 à 20 personnes</span></p>
                  <div className="rq-actions">
                    <a href="ateliers#atelier-2" className="btn">Découvrir l’atelier <span className="arrow">→</span></a>
                    <a href="contact" className="btn btn-out">Programmer une intervention <span className="arrow">→</span></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }

    function RadarPage() {
      useCurtainTransitions("var(--yellow)");
      useReveal();

      const [etape, setEtape] = React.useState(0);
      const [reponses, setReponses] = React.useState(reponsesVides);
      const titreRef = React.useRef(null);
      const focaliser = React.useRef(false);
      const finSignalee = React.useRef(false);

      const aller = (n) => { focaliser.current = true; setEtape(n); };

      // Changement d'écran voulu par la personne : haut de page, focus sur le titre
      // (qui porte « Axe n sur 5 »). Jamais au premier affichage.
      React.useEffect(() => {
        if (!focaliser.current) return;
        focaliser.current = false;
        window.scrollTo(0, 0);
        if (titreRef.current) titreRef.current.focus({ preventScroll: true });
      }, [etape]);

      // Appareils partagés en atelier : en quittant la page, on efface tout, pour
      // que le bouton Retour du navigateur (cache arrière) ne montre pas le radar
      // de la personne précédente. pageshow rattrape les navigateurs où pagehide
      // ne suffit pas.
      React.useEffect(() => {
        const effacer = () => {
          finSignalee.current = false;
          focaliser.current = false;
          ReactDOM.flushSync(() => { setReponses(reponsesVides()); setEtape(0); });
        };
        const auRetour = (e) => { if (e.persisted) { effacer(); window.scrollTo(0, 0); } };
        window.addEventListener("pagehide", effacer);
        window.addEventListener("pageshow", auRetour);
        return () => {
          window.removeEventListener("pagehide", effacer);
          window.removeEventListener("pageshow", auRetour);
        };
      }, []);

      const repondre = (a, i, v) => setReponses(r => r.map((ax, k) => (k !== a ? ax : ax.map((x, j) => (j === i ? v : x)))));

      const terminer = () => {
        // Seule donnée envoyée : « un quiz a été terminé », sans aucun paramètre.
        // gtag n'existe qu'en ligne et après consentement (consent.js).
        if (!finSignalee.current && window.gtag) window.gtag("event", "radar_termine");
        finSignalee.current = true;
        aller(RESULTAT);
      };

      const recommencer = () => {
        finSignalee.current = false;
        setReponses(reponsesVides());
        aller(0);
      };

      const enCours = reponses.some(ax => ax.some(Boolean));

      return (
        <>
          <SiteHeader active="ateliers" />
          <main className="rq">
            {etape === 0 && <Accueil titreRef={titreRef} enCours={enCours} onCommencer={() => aller(1)} />}
            {etape >= 1 && etape <= AXES.length && (
              <EcranAxe
                a={etape - 1}
                reponses={reponses}
                titreRef={titreRef}
                onRepondre={repondre}
                onPrecedent={() => aller(etape - 1)}
                onSuivant={() => (etape === AXES.length ? terminer() : aller(etape + 1))}
              />
            )}
            {etape === RESULTAT && (
              <Resultat scores={calculerScores(reponses)} titreRef={titreRef} onModifier={() => aller(AXES.length)} onRecommencer={recommencer} />
            )}
          </main>
          <SiteFooter />
        </>
      );
    }

    // Deux modes. Sous Node, au moment du pré-rendu (scripts/prerendu.mjs), il n'y a
    // pas de document : on se contente d'exposer le composant. Dans le navigateur, on
    // hydrate le HTML déjà rendu s'il existe, sinon on monte normalement — ce repli
    // garde la page fonctionnelle même si le pré-rendu n'a pas été lancé.
    if (typeof document === "undefined") {
      globalThis.__COMPOSANT__ = RadarPage;
    } else {
      const racine = document.getElementById("root");
      if (racine.firstChild) ReactDOM.hydrateRoot(racine, <RadarPage />);
      else ReactDOM.createRoot(racine).render(<RadarPage />);
    }
