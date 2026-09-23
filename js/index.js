function HomePage() {
  useCurtainTransitions("var(--pink)");
  useReveal();
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT(x => (x + 1) % 4), 2400);
    return () => clearInterval(id);
  }, []);
  const rotators = ["DU MÂLE-ALPHA", "DE LA VIRILITÉ", "DU PATRIARCAT", "DE LA DOMINATION"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "home"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pink)",
      padding: "60px 32px 64px",
      borderBottom: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Conférence gesticulée — depuis 2025"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginBottom: 24
    }
  }, "L'IMPOSTURE", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: "max-content",
      maxWidth: "100%",
      background: "var(--yellow)",
      padding: "0 .15em",
      fontStyle: "italic",
      fontFamily: "var(--font-serif)",
      letterSpacing: "normal",
      textTransform: "none",
      fontSize: ".75em",
      whiteSpace: "nowrap",
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone"
    }
  }, rotators[t])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 60,
      alignItems: "end",
      marginTop: 60
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "h-serif",
    style: {
      maxWidth: "22ch"
    }
  }, /*#__PURE__*/React.createElement("em", null, "Une prise de parole publique qui porte une dimension politique."), " Un acte d'éducation populaire — par et avec Pascal Antonio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact",
    className: "btn"
  }, "Programmer une intervention ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "→")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/watch?v=M0SiVachnZI",
    target: "_blank",
    className: "btn btn-out"
  }, "Voir le teaser ↗"))))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Description"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Comment réussir", /*#__PURE__*/React.createElement("br", null), "à être un Mâle-Alpha ?")), /*#__PURE__*/React.createElement("div", {
    className: "body-l"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Question récurrente qui traverse les réflexions de nombreux hommes voulant atteindre la meilleure version d'eux-mêmes."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "clamp(22px, 2vw, 32px)",
      lineHeight: 1.2
    }
  }, "Une autre question que l'on pourrait se poser, c'est : ", /*#__PURE__*/React.createElement("strong", {
    style: {
      background: "var(--yellow)",
      color: "var(--ink)",
      padding: "0 .12em",
      fontStyle: "normal",
      fontFamily: "var(--font-display)"
    }
  }, "pourquoi doit-on absolument être un mâle-alpha ?"), " Existe-t-il des hommes bêta, gamma ou epsilon ?"), /*#__PURE__*/React.createElement("p", null, "L'imposture du Mâle-Alpha pose ces questions et cherche à savoir quelles sont les conséquences de cette course vers la virilité — pour les femmes, les hommes et pour la société.")))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Au programme"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginBottom: 24,
      fontSize: "clamp(28px, 6vw, 84px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, "Une mallette pédagogique"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--yellow)"
    }
  }, "en 3 modules")), /*#__PURE__*/React.createElement("p", {
    className: "body-l",
    style: {
      marginBottom: 40,
      maxWidth: "none"
    }
  }, "La conférence gesticulée, ", /*#__PURE__*/React.createElement("em", null, "l'imposture du mâle-alpha"), ", s'accompagne de 3 ateliers pratiques et dynamiques pour savoir comment déconstruire les stéréotypes de genre."), /*#__PURE__*/React.createElement("nav", {
    className: "toc"
  }, [{
    n: "01",
    l: "Déconstruire les stéréotypes de genre",
    h: "ateliers.html#atelier-1"
  }, {
    n: "02",
    l: "Diversité et inclusion",
    h: "ateliers.html#atelier-2"
  }, {
    n: "03",
    l: "Agir pour l’égalité",
    h: "ateliers.html#atelier-3"
  }].map(it => /*#__PURE__*/React.createElement("a", {
    key: it.n,
    href: it.h
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, it.n), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, it.l), /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "→"))))), /*#__PURE__*/React.createElement("section", {
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
    src: "assets/home-1.webp",
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
    src: "assets/home-2.webp",
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    alt: "Pascal sur scène"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      border: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/home-3.webp",
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    alt: "Pascal en conférence"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "reveal",
    style: {
      background: "var(--pink)",
      borderTop: "1.5px solid var(--ink)",
      borderBottom: "1.5px solid var(--ink)",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Témoignage"), /*#__PURE__*/React.createElement("p", {
    className: "quote"
  }, "\"J'ai vraiment beaucoup aimé la conférence gesticulée", " : ", "à la fois ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--yellow)",
      fontStyle: "normal",
      fontFamily: "var(--font-display)",
      padding: "0 .12em"
    }
  }, "intime, didactique et pleine d'humour"), ". Une parole, venant d'un homme, très précieuse.\""))), /*#__PURE__*/React.createElement(SiteFooter, null));
}

// Deux modes. Sous Node, au moment du pré-rendu (scripts/prerendu.mjs), il n'y a
// pas de document : on se contente d'exposer le composant. Dans le navigateur, on
// hydrate le HTML déjà rendu s'il existe, sinon on monte normalement — ce repli
// garde la page fonctionnelle même si le pré-rendu n'a pas été lancé.
if (typeof document === "undefined") {
  globalThis.__COMPOSANT__ = HomePage;
} else {
  const racine = document.getElementById("root");
  if (racine.firstChild) ReactDOM.hydrateRoot(racine, /*#__PURE__*/React.createElement(HomePage, null));else ReactDOM.createRoot(racine).render(/*#__PURE__*/React.createElement(HomePage, null));
}