const ATELIERS = [{
  id: "atelier-1",
  n: "01",
  photo: "assets/atelier-1.webp",
  title: "Déconstruire\nles stéréotypes\nde genre",
  objective: "Questionner nos représentations et agir concrètement",
  time: "1h",
  people: "10 à 40 personnes",
  bg: "var(--paper)",
  body: ["En partant des représentations que nous portons tous·tes – souvent sans en avoir conscience – sur les rôles des hommes et des femmes à la maison, dans l’espace public ou au travail, cet atelier propose de :", ["Mettre des mots sur nos clichés (quels stéréotypes nous traversent ?) ;", "Les analyser collectivement (d’où viennent-ils ? quels impacts ont-ils ?) ;", "Construire une boussole commune pour y répondre de manière pragmatique et efficace."]]
}, {
  id: "atelier-2",
  n: "02",
  photo: "assets/atelier-2.webp",
  title: "Diversité\net inclusion",
  objective: "Comprendre nos privilèges pour mieux agir",
  time: "1h",
  people: "10 à 20 personnes",
  bg: "var(--paper)",
  body: ["Chaque personne se définit et est définie par les autres à travers une multitude d’attributs : son genre, sa couleur de peau, son travail, son logement, son poids…", "Mais ces attributs, sont-ils un atout ou un obstacle dans notre société ?", "Un atelier qui propose de se positionner sur un radar intersectionnel en expliquant en quoi on se considère comme dominé·es ou dominant·es, et qui bouscule nos certitudes :", ["Que faire quand on se retrouve dans la position de la personne dominée ?", "Comment agir quand on réalise qu’on incarne, sans toujours en avoir conscience, une position de privilège ?", "Comment réconcilier diversité et inclusion dans notre quotidien, à la maison, dans la rue et au travail ?"]],
  sidenote: {
    title: "L'intersectionnalité",
    text: "La société est structurée autour de divers rapports sociaux, tels que celui où le groupe des « riches » domine celui des « pauvres ». L'intersectionnalité combine plusieurs de ces rapports sociaux, ce qui rend les dynamiques de domination plus complexes. Une personne peut se retrouver dans une position de dominé ou de dominant selon le contexte social."
  }
}, {
  id: "atelier-3",
  n: "03",
  photo: "assets/atelier-3.webp",
  title: "Agir pour\nl’égalité",
  objective: "Un atelier sur mesure pour déconstruire les inégalités et construire l’inclusion",
  time: "1h",
  people: "10 à 40 personnes",
  bg: "var(--paper)",
  body: ["Un espace de dialogue et d’action pour aborder tous les enjeux de diversité : égalité professionnelle, inclusion, sexisme, masculinisme, discrimination…", "Les questions d’égalité, d’inclusion et de lutte contre les discriminations sont complexes, interconnectées et souvent invisibles. Comment les aborder de manière globale ? Comment sensibiliser, mobiliser et agir pour faire évoluer les mentalités et les pratiques ?", "Cet atelier propose une méthode d’animation flexible, permettant d’explorer un ou plusieurs sujets selon vos besoins, tout en dégageant des pistes d’action concrètes pour votre structure (entreprise, association, collectivité)."]
}];
function AtelierBlock({
  a
}) {
  const dark = a.fg === "var(--paper)";
  return /*#__PURE__*/React.createElement("section", {
    id: a.id,
    style: {
      background: a.bg,
      color: a.fg || "var(--ink)",
      padding: "100px 32px",
      borderTop: "1.5px solid var(--ink)"
    },
    className: "reveal atelier-sec"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atelier-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 60,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(80px, 14vw, 220px)",
      lineHeight: .85,
      letterSpacing: "-.04em"
    }
  }, a.n), /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      background: dark ? "var(--paper)" : "var(--ink)",
      color: dark ? "var(--ink)" : "var(--paper)",
      border: "none",
      marginTop: 12
    }
  }, "Atelier de médiation"), a.photo && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      overflow: "hidden",
      border: "1.5px solid var(--ink)",
      aspectRatio: "3/4"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.photo,
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    alt: `Atelier — ${a.title.replace("\n", " ")}`
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      whiteSpace: "pre-line",
      marginBottom: 32
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    className: "h-serif",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("em", null, a.objective, ".")), /*#__PURE__*/React.createElement("div", {
    className: "atelier-stats",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 0,
      border: `1.5px solid ${dark ? "var(--paper)" : "var(--ink)"}`,
      marginBottom: 40
    }
  }, [["Durée", a.time], ["Participants", a.people]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: "20px 18px",
      borderRight: i < 1 ? `1.5px solid ${dark ? "var(--paper)" : "var(--ink)"}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10,
      fontSize: 11
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 14,
      lineHeight: 1.2
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "atelier-body",
    style: {
      display: "grid",
      gridTemplateColumns: a.sidenote ? "2fr 1fr" : "1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-l"
  }, a.body.map((p, i) => Array.isArray(p) ? /*#__PURE__*/React.createElement("ul", {
    key: i,
    style: {
      marginBottom: 18,
      paddingLeft: "1.2em"
    }
  }, p.map((li, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      marginBottom: 8
    }
  }, li))) : /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      marginBottom: 18
    }
  }, p))), a.sidenote && /*#__PURE__*/React.createElement("aside", {
    style: {
      padding: 24,
      border: "1.5px solid var(--ink)",
      background: "var(--yellow)",
      color: "var(--ink)",
      alignSelf: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Note"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 22,
      marginBottom: 12,
      letterSpacing: "-.01em"
    }
  }, a.sidenote.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 17,
      lineHeight: 1.4
    }
  }, a.sidenote.text)))))));
}
function AteliersPage() {
  useCurtainTransitions("var(--yellow)");
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "ateliers"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--yellow)",
      padding: "80px 32px 100px",
      borderBottom: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Mallette pédagogique"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display"
  }, "Trois ateliers", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      textTransform: "none",
      letterSpacing: "-.02em",
      background: "var(--pink)",
      padding: "0 .12em"
    }
  }, "de médiation")), /*#__PURE__*/React.createElement("p", {
    className: "h-serif",
    style: {
      marginTop: 32,
      maxWidth: "30ch"
    }
  }, "Considérée comme la première étape d'une démarche, \"L'imposture du mâle-alpha\" peut être complétée par ", /*#__PURE__*/React.createElement("em", null, "un, deux, ou trois ateliers"), " — selon les objectifs pédagogiques."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "72ch",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Pour qui ?")), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 8,
      paddingLeft: "1.2em"
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Entreprises"), "\xA0: pour sensibiliser vos équipes et favoriser l’égalité professionnelle\u202F;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Associations et collectifs"), "\xA0: pour renforcer la cohésion et l’inclusion\u202F;"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Grand public"), "\xA0: pour comprendre et agir au quotidien."))))), ATELIERS.map(a => /*#__PURE__*/React.createElement(AtelierBlock, {
    key: a.id,
    a: a
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--yellow)",
      padding: "120px 32px",
      textAlign: "center",
      borderTop: "1.5px solid var(--ink)"
    },
    className: "reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      marginBottom: 32,
      fontSize: "clamp(40px, 6vw, 84px)"
    }
  }, "Choisir", /*#__PURE__*/React.createElement("br", null), "votre formule"), /*#__PURE__*/React.createElement("a", {
    href: "contact",
    className: "btn"
  }, "Programmer une intervention ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "→"))), /*#__PURE__*/React.createElement(SiteFooter, {
    bg: "var(--pink)"
  }));
}

// Deux modes. Sous Node, au moment du pré-rendu (scripts/prerendu.mjs), il n'y a
// pas de document : on se contente d'exposer le composant. Dans le navigateur, on
// hydrate le HTML déjà rendu s'il existe, sinon on monte normalement — ce repli
// garde la page fonctionnelle même si le pré-rendu n'a pas été lancé.
if (typeof document === "undefined") {
  globalThis.__COMPOSANT__ = AteliersPage;
} else {
  const racine = document.getElementById("root");
  if (racine.firstChild) ReactDOM.hydrateRoot(racine, /*#__PURE__*/React.createElement(AteliersPage, null));else ReactDOM.createRoot(racine).render(/*#__PURE__*/React.createElement(AteliersPage, null));
}