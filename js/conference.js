function ConfPage() {
  useCurtainTransitions("var(--pink)");
  useReveal();
  const fiche = [{
    k: "Objectif",
    v: "Vulgariser le thème de l'égalité femme-homme"
  }, {
    k: "Durée",
    v: "1h05"
  }, {
    k: "Public",
    v: "À partir de 20 personnes"
  }, {
    k: "Espace",
    v: "4 à 8 m²"
  }, {
    k: "Matériel",
    v: "3 kakémonos · 1 table · 1 tabouret · 1 enceinte · petits accessoires scéniques"
  }, {
    k: "Format",
    v: "Outil clé en main, autonome en matériel scénique et sonore"
  }];
  const publics = [{
    tag: "Scolaire",
    body: "3ème, 2nd, 1ère, Terminale"
  }, {
    tag: "Jeune",
    body: "Centre social, MJC, Mission Locale, associations, associations sportives"
  }, {
    tag: "Jeune-adulte",
    body: "Université, écoles supérieures, associations, associations sportives"
  }, {
    tag: "Adulte",
    body: "Entreprises, collectivités territoriales, associations, associations sportives, prison, caserne"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "conf"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pink)",
      padding: "80px 32px 60px",
      borderBottom: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Conférence gesticulée"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display"
  }, "L'IMPOSTURE", /*#__PURE__*/React.createElement("br", null), "DU MÂLE-ALPHA"), /*#__PURE__*/React.createElement("p", {
    className: "h-serif",
    style: {
      marginTop: 32,
      maxWidth: "26ch"
    }
  }, /*#__PURE__*/React.createElement("em", null, "Un one-man show pédagogique ou comment déconstruire les stéréotypes de genre.")))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Approche"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Déconstruire la virilité…", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--yellow)",
      padding: "0 .1em",
      display: "inline-block"
    }
  }, "pour reconstruire les masculinités"))), /*#__PURE__*/React.createElement("div", {
    className: "body-l"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Une conférence gesticulée est une proposition pédagogique qui permet de prendre du recul, grâce à sa dimension « spectacle », pour aborder un thème de société, un véritable outil d'éducation populaire."), /*#__PURE__*/React.createElement("p", null, "L'objectif est de rechercher ensemble des solutions pour favoriser des modes de fonctionnement et de vie plus coopératifs et basés sur la tolérance.")))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 16,
      height: "min(70vh, 700px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      border: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/conf-1.webp",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    alt: "Pascal devant l'organigramme des masculinités"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      border: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/conf-2.webp",
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    alt: "Pascal en représentation"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      border: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/conf-3.webp",
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    alt: "Pascal devant les pancartes de l'atelier"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      padding: "100px 32px",
      borderTop: "1.5px solid var(--ink)",
      borderBottom: "1.5px solid var(--ink)"
    },
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "quote",
    style: {
      color: "var(--paper)"
    }
  }, "\"Une conférence gesticulée est une prise de parole publique qui porte nécessairement une ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--yellow)",
      fontFamily: "var(--font-display)",
      fontStyle: "normal"
    }
  }, "dimension politique"), ". Elle naît d'une décision personnelle mais s'élabore au cours d'une formation collective : ", /*#__PURE__*/React.createElement("em", null, "c'est un acte d'éducation populaire"), ". Sa mise en forme est le fruit d'un tressage entre des ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pink)",
      fontFamily: "var(--font-display)",
      fontStyle: "normal"
    }
  }, "savoirs chauds"), ", des ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pink)",
      fontFamily: "var(--font-display)",
      fontStyle: "normal"
    }
  }, "savoirs froids"), " et parfois un troisième fil. Elle conduit à un atterrissage politique… et une sacrée aventure !\""))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Démarche pédagogique"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Un point", /*#__PURE__*/React.createElement("br", null), "de vue situé")), /*#__PURE__*/React.createElement("div", {
    className: "body-l"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Donner les clés de compréhension pour que chacun et chacune puisse alimenter sa propre réflexion sur un sujet de société, c'est le défi que propose un intervenant homme, sur la masculinité, à travers cette conférence gesticulée."), /*#__PURE__*/React.createElement("p", null, "En vulgarisant des ouvrages et études de sciences humaines, des références juridiques, ou en documentant des faits historiques entremêlés de mises en scène d'anecdotes personnelles, elle apporte un point de vue situé — c'est-à-dire qu'elle permet aux publics de connaître l'origine des informations transmises. C'est l'anti-conférence « aux doigts mouillés ».")))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Fiche technique"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginBottom: 40
    }
  }, "Tout tient", /*#__PURE__*/React.createElement("br", null), "dans une mallette"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      border: "1.5px solid var(--ink)"
    }
  }, fiche.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.k,
    style: {
      padding: "32px 28px",
      borderRight: i % 2 === 0 ? "1.5px solid var(--ink)" : "none",
      borderBottom: i < fiche.length - 2 ? "1.5px solid var(--ink)" : "none",
      minHeight: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, f.k), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(20px, 2vw, 32px)",
      lineHeight: 1.05,
      letterSpacing: "-.02em"
    }
  }, f.v))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pink)",
      padding: "80px 32px",
      borderTop: "1.5px solid var(--ink)",
      borderBottom: "1.5px solid var(--ink)"
    },
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Public cible — à partir de 14 ans"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginBottom: 40
    }
  }, "Pour qui ?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      border: "1.5px solid var(--ink)"
    }
  }, publics.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.tag,
    style: {
      padding: "32px 24px",
      borderRight: i < 3 ? "1.5px solid var(--ink)" : "none",
      minHeight: 240,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      alignSelf: "flex-start",
      background: "var(--ink)",
      color: "var(--paper)",
      border: "1.5px solid var(--ink)"
    }
  }, p.tag), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "clamp(18px, 1.5vw, 24px)",
      lineHeight: 1.2
    }
  }, p.body)))))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal",
    style: {
      padding: "100px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      justifyContent: "center",
      display: "flex"
    }
  }, "Vidéo"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      marginBottom: 32,
      textAlign: "center",
      fontSize: "clamp(36px, 5vw, 72px)"
    }
  }, "Découvrez la conférence", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontFamily: "var(--font-serif)",
      textTransform: "none",
      letterSpacing: "-.02em"
    }
  }, "gesticulée")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "40px auto 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "yt-wrap"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.youtube.com/embed/SynUz9PKGew",
    title: "Interview France 3 — L'imposture du Mâle-Alpha",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowFullScreen: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "16px auto 0",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, [{
    href: "https://www.youtube.com/watch?v=rQUcrMEwU2U&t=15s",
    t: "Comprendre l'intersectionnalité en 5 min",
    d: "Extrait « L'imposture du Mâle-Alpha » — réussir à comprendre le concept d'intersectionnalité."
  }, {
    href: "https://www.youtube.com/watch?v=w-Z9WHvIkLQ",
    t: "« Le coût de la virilité » en 2 min",
    d: "Présentation du livre de Lucile Peytavin par « Pascal Politique »."
  }].map((v, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: v.href,
    target: "_blank",
    style: {
      border: "1.5px solid var(--ink)",
      padding: 24,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Extrait ", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 20,
      lineHeight: 1.05,
      letterSpacing: "-.01em",
      marginBottom: 10
    }
  }, v.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 16,
      lineHeight: 1.35
    }
  }, v.d), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginTop: 12,
      borderBottom: "2px solid currentColor",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 12,
      letterSpacing: ".06em"
    }
  }, "Regarder ↗")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact",
    className: "btn"
  }, "Programmer une date ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "→")))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal",
    style: {
      borderTop: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Mise en scène"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Murielle", /*#__PURE__*/React.createElement("br", null), "Hachet")), /*#__PURE__*/React.createElement("div", {
    className: "body-l"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Formée aux Arts du spectacle"), " dès le lycée, Murielle Hachet poursuit ensuite sa formation au sein d'écoles de théâtre exigeantes et de référence à Strasbourg et à Paris."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 18
    }
  }, "Très tôt initiée à la mise en scène, elle développe, au fil d'expériences variées, une expertise approfondie dans la direction d'acteur·rice·s."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 18
    }
  }, "Passionnée par les multiples dimensions de la scène, ", /*#__PURE__*/React.createElement("strong", null, "elle explore avec joie et curiosité les univers de la comédie, de la dramaturgie et de la transmission artistique.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 18
    }
  }, "Son parcours éclectique la mène du spectacle de rue à la mise en espace de groupes musicaux, en passant par ", /*#__PURE__*/React.createElement("strong", null, "l'accompagnement scénique de projets en éducation populaire"), "."), /*#__PURE__*/React.createElement("p", null, "Partout, elle place au cœur de son travail l'importance du propos à défendre, animée par le désir de créer des expériences artistiques à la fois sensibles et engagées.")))), /*#__PURE__*/React.createElement(SiteFooter, null));
}

// Deux modes. Sous Node, au moment du pré-rendu (scripts/prerendu.mjs), il n'y a
// pas de document : on se contente d'exposer le composant. Dans le navigateur, on
// hydrate le HTML déjà rendu s'il existe, sinon on monte normalement — ce repli
// garde la page fonctionnelle même si le pré-rendu n'a pas été lancé.
if (typeof document === "undefined") {
  globalThis.__COMPOSANT__ = ConfPage;
} else {
  const racine = document.getElementById("root");
  if (racine.firstChild) ReactDOM.hydrateRoot(racine, /*#__PURE__*/React.createElement(ConfPage, null));else ReactDOM.createRoot(racine).render(/*#__PURE__*/React.createElement(ConfPage, null));
}