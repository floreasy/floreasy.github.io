function BioPage() {
  useCurtainTransitions("var(--pink)");
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "bio"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pink)",
      borderBottom: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto",
      padding: "60px 32px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 40,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Le conférencier"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginBottom: 24
    }
  }, "PASCAL", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--yellow)",
      padding: "0 .1em"
    }
  }, "ANTONIO")), /*#__PURE__*/React.createElement("p", {
    className: "h-serif",
    style: {
      maxWidth: "26ch"
    }
  }, /*#__PURE__*/React.createElement("em", null, "Consultant indépendant, formateur en éducation populaire, conférencier gesticulant.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "34ch",
      marginTop: 16
    }
  }, "Pascal Antonio est le nom de scène de ", /*#__PURE__*/React.createElement("strong", null, "Pascal Jeanne"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3/4",
      border: "1.5px solid var(--ink)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/pourquoi-antonio.webp",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    alt: "Portrait de Pascal Antonio"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Parcours"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "20 ans", /*#__PURE__*/React.createElement("br", null), "dans l'ESS", /*#__PURE__*/React.createElement("br", null), "et l'éducation", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--yellow)"
    }
  }, "populaire"))), /*#__PURE__*/React.createElement("div", {
    className: "body-l"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 18
    }
  }, "Avec ", /*#__PURE__*/React.createElement("strong", null, "plus de 20 ans d'expérience"), " dans l'économie sociale et solidaire ainsi que dans ", /*#__PURE__*/React.createElement("strong", null, "l'éducation populaire"), ", j'exerce aujourd'hui comme consultant indépendant pour le cabinet Maracuja."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 18
    }
  }, "Je soutiens les associations dans le montage de leurs projets et offre des ", /*#__PURE__*/React.createElement("strong", null, "formations sur les méthodes d'intelligence collective"), " et les animations d'éducation populaire."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 18
    }
  }, "Après avoir suivi une formation avec la coopérative d'éducation populaire ", /*#__PURE__*/React.createElement("strong", null, "l'Étincelle"), " et collaboré avec ", /*#__PURE__*/React.createElement("strong", null, "Murielle Hachet"), " pour la mise en scène, je propose depuis février 2025 cette conférence gesticulée sur la virilité et les masculinités."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "Mon objectif :"), " ", /*#__PURE__*/React.createElement("strong", null, "mettre toutes mes compétences au service de la lutte contre les discriminations de genre.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      marginTop: 60,
      border: "1.5px solid var(--ink)"
    }
  }, [["Accompagnement", "Stratégies de développement"], ["Formations", "Intelligence collective"], ["Évaluations", "Capitalisation des projets"], ["Médiation", "Égalité femme-homme"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: "24px 20px",
      borderRight: i < 3 ? "1.5px solid var(--ink)" : "none",
      minHeight: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 18,
      lineHeight: 1.1,
      letterSpacing: "-.01em"
    }
  }, v))))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, ["assets/pourquoi-1.webp", "assets/pourquoi-2.webp", "assets/pourquoi-3.webp"].map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: "4/5",
      overflow: "hidden",
      border: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    alt: `Pascal Antonio en conférence gesticulée (${i + 1})`
  }))))), /*#__PURE__*/React.createElement(SiteFooter, null));
}

// Deux modes. Sous Node, au moment du pré-rendu (scripts/prerendu.mjs), il n'y a
// pas de document : on se contente d'exposer le composant. Dans le navigateur, on
// hydrate le HTML déjà rendu s'il existe, sinon on monte normalement — ce repli
// garde la page fonctionnelle même si le pré-rendu n'a pas été lancé.
if (typeof document === "undefined") {
  globalThis.__COMPOSANT__ = BioPage;
} else {
  const racine = document.getElementById("root");
  if (racine.firstChild) ReactDOM.hydrateRoot(racine, /*#__PURE__*/React.createElement(BioPage, null));else ReactDOM.createRoot(racine).render(/*#__PURE__*/React.createElement(BioPage, null));
}