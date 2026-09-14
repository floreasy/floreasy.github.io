const ATELIERS = [{
  id: "atelier-1",
  n: "01",
  photo: "assets/atelier-1.webp",
  title: "On libère\nla parole",
  objective: "Permettre au public de s'exprimer en groupe sur le thème de l'égalité femme-homme",
  time: "1h",
  people: "10 à 40 personnes",
  material: "3 pancartes · feuilles A5 · stylos · marqueurs · feuilles de brouillon",
  bg: "var(--paper)",
  body: ["Cet atelier se déroule en deux phases. La première phase consiste à poser des questions en groupes de 2 ou 3 afin de recueillir des expériences à partir d'un témoignage oral. L'interview se déroule en deux temps : une première partie de 5 minutes où l'interviewé répond à une question pendant que l'intervieweur prend des notes sans l'interrompre ; une seconde partie de 5 minutes où l'intervieweur revient sur ses notes et pose des questions. Les rôles tournent ensuite afin que chaque participant puisse être interviewé.", "La deuxième phase est un débat structuré permettant à chacun de s'exprimer selon des règles précises. Les participants se tiennent debout au centre de l'espace de débat. L'animateur propose une affirmation et invite les participants à se positionner d'un côté ou de l'autre, soit « d'accord », soit « pas d'accord ». Il n'est pas nécessaire de formuler sa réponse oralement ni de se justifier ; chacun se place selon ses convictions. Le but est d'essayer de faire changer d'avis les participants en avançant des arguments convaincants. L'objectif est de permettre au groupe d'évaluer leurs opinions sur des sujets parfois clivants à un moment donné. L'idée est de capturer une photographie des différents points de vue exprimés au sein du groupe. Le but n'est pas d'atteindre un consensus, mais de permettre l'expression et la reconnaissance des divers avis et positionnements."]
}, {
  id: "atelier-2",
  n: "02",
  photo: "assets/atelier-2.webp",
  title: "Radar\nintersectionnel",
  objective: "Faire réfléchir le public sur leurs postures de dominé·es et de dominant·es",
  time: "1h",
  people: "10 à 20 personnes",
  material: "1 pancarte · feuilles A5 · stylos · marqueurs · feuilles de brouillon",
  bg: "var(--paper)",
  body: ["Cet atelier, qui se déroule en deux phases, a pour objectif principal de rendre l'intersectionnalité accessible. Lors de la première phase, les participants partagent des anecdotes personnelles autour des thèmes suivants : identité de genre, origine géographique, orientation sexuelle, origine sociale et couleur de peau. L'animateur propose des histoires à raconter et invite les participants à en choisir une (ou deux, selon le temps disponible). Ils commencent par un moment de réflexion personnelle pour sélectionner leur histoire et réfléchir aux principaux éléments qu'ils souhaitent partager.", "La deuxième phase invite chaque participant à se positionner sur une cible, expliquant en quoi ils se considèrent comme dominé·es ou dominant·es."],
  sidenote: {
    title: "L'intersectionnalité",
    text: "La société est structurée autour de divers rapports sociaux, tels que celui où le groupe des « riches » domine celui des « pauvres ». L'intersectionnalité combine plusieurs de ces rapports sociaux, ce qui rend les dynamiques de domination plus complexes. Une personne peut se retrouver dans une position de dominé ou de dominant selon le contexte social."
  }
}, {
  id: "atelier-3",
  n: "03",
  photo: "assets/atelier-3.webp",
  title: "On passe\nà l'action",
  objective: "Permettre aux participant·es de trouver une action concrète réalisable",
  time: "1h",
  people: "10 à 40 personnes",
  material: "Feuilles A5 et A4 · marqueurs · stylos · post-it · gommettes · feuilles de brouillon",
  bg: "var(--paper)",
  body: ["Grâce à une animation d'intelligence collective, le groupe est encouragé à identifier ensemble des actions à intégrer dans leur vie personnelle pour déconstruire le modèle patriarcal et contribuer à l'égalité entre les femmes et les hommes.", "Que ce soit dans le domaine de l'égalité professionnelle, des relations affectives et sexuelles, ou de la répartition de la charge mentale, cet atelier se veut pragmatique. Il incite les participants à élaborer des actions en fonction de leurs réflexions, de leurs ressources et du temps dont ils disposent."]
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
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 0,
      border: `1.5px solid ${dark ? "var(--paper)" : "var(--ink)"}`,
      marginBottom: 40
    }
  }, [["Durée", a.time], ["Participants", a.people], ["Matériel", a.material]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: "20px 18px",
      borderRight: i < 2 ? `1.5px solid ${dark ? "var(--paper)" : "var(--ink)"}` : "none"
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
  }, a.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
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
  }, "Considérée comme la première étape d'une démarche, \"L'imposture du mâle-alpha\" peut être complétée par ", /*#__PURE__*/React.createElement("em", null, "un, deux, ou trois ateliers"), " — selon les objectifs pédagogiques."))), ATELIERS.map(a => /*#__PURE__*/React.createElement(AtelierBlock, {
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