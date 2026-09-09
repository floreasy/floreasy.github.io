const BIBLIO = [{
  author: "Lucile Peytavin",
  year: "2021",
  title: "Le coût de la virilité",
  pub: "Anne Carrière",
  lead: "Un essai choc sur les conséquences méconnues de la masculinité traditionnelle",
  comment: "Dans Le Coût de la virilité (2023), Lucile Peytavin, essayiste et féministe, démonte les mécanismes toxiques de la masculinité hégémonique et en révèle les conséquences désastreuses — non seulement pour les femmes, mais aussi pour les hommes eux-mêmes. À travers une enquête fouillée mêlant données sociologiques, témoignages et analyses historiques. Un livre essentiel pour comprendre que la virilité n'est pas une fatalité, mais une construction sociale coûteuse — et que sa déconstruction est une libération collective."
}, {
  author: "Bell Hooks",
  year: "2021",
  title: "La volonté de changer : les hommes, la masculinité et l'amour",
  pub: "Divergences",
  lead: "Un manifeste pour une masculinité libératrice",
  comment: "Dans La Volonté de changer (2004), bell hooks, intellectuelle féministe et antiraciste, explore comment les hommes peuvent se libérer des carcans de la masculinité traditionnelle pour construire des relations plus saines, égalitaires et épanouissantes. À travers une analyse intersectionnelle. Un ouvrage fondateur pour repenser la masculinité comme un projet politique et intime, où la libération des hommes est indissociable de celle des femmes."
}, {
  author: "Olivia Gazalé",
  year: "2017",
  title: "Le mythe de la virilité : un piège pour les deux sexes",
  pub: "Robert Laffont",
  lead: "Une déconstruction des fondements historiques de la masculinité toxique",
  comment: "Dans Le Mythe de la virilité (2017), Olivia Gazalé, philosophe spécialiste des études de genre, démonte la construction sociale de la virilité en remontant à ses origines antiques. Un essai percutant qui montre que la virilité n'est pas une essence naturelle, mais une fiction culturelle à déconstruire pour libérer les individus de ses normes toxiques."
}, {
  author: "Mélanie Gourarier",
  year: "2017",
  title: "Alpha-Mâle. Séduire les femmes pour s'apprécier entre hommes",
  pub: "Seuil",
  lead: "Une plongée ethnographique dans les milieux de la séduction masculine",
  comment: "Dans Alpha-mâle (2021), Mélanie Gourarier, anthropologue, explore les communautés de séducteurs et leurs discours sur la masculinité. À travers une enquête de terrain, elle analyse les techniques de manipulation enseignées pour « devenir un alpha » et la construction d'une identité masculine basée sur la domination et la performance. Un livre éclairant qui révèle comment ces mouvements renforcent les stéréotypes de genre tout en répondant à des insécurités masculines profondes."
}, {
  author: "Raewyn Connell",
  year: "2014",
  title: "Masculinités. Enjeux sociaux de l'hégémonie",
  pub: "Amsterdam/Multitudes",
  note: "Sous la direction de Meoïn Hagège et Arthur Vuattoux. Postface Eric Fassin.",
  lead: "Une théorie révolutionnaire sur la pluralité des masculinités",
  comment: "Dans Masculinités (1995), Raewyn Connell, sociologue australienne, bouleverse notre compréhension du genre en montrant que la masculinité n'est pas monolithique : elle existe sous des formes multiples (hégémonique, subordonnée, marginalisée, complice). Elle insiste sur le rôle de la masculinité hégémonique (blanche, hétérosexuelle, dominante) en tant que modèle normatif qui opprime aussi bien les femmes que les hommes ne correspondant pas à ce standard. Un ouvrage référence qui offre des clés pour comprendre les rapports de genre et les dynamiques de pouvoir qui les traversent."
}, {
  author: "François Dupuis-Déry",
  year: "2022",
  title: "La crise de la masculinité. Autopsie d'un mythe tenace",
  pub: "Points féministe",
  lead: "Une analyse critique des discours sur la « crise » masculine",
  comment: "Dans La Crise de la masculinité (2008), François Dupuis-Déri, chercheur franco-canadien, démystifie l'idée d'une « crise » de la masculinité en montrant que le discours est souvent instrumentalisé pour justifier des résistances aux avancées féministes, et que les hommes ne sont pas en crise — mais plutôt les privilèges masculins qui sont remis en question. La véritable crise réside dans l'incapacité de certains hommes à accepter l'égalité et à renoncer à leur domination. Un essai engagé qui invite à repenser les rapports de genre sans tomber dans le piège d'une victimisation des hommes."
}, {
  author: "Mathieu Palain",
  year: "2023",
  title: "Nos pères, nos frères, nos amis. Dans la tête des hommes violents",
  pub: "Arènes",
  lead: "Un voyage intime et politique dans les masculinités contemporaines",
  comment: "Dans Nos pères, nos frères, nos amis (2022), Mathieu Palain, journaliste, explore les tensions et les contradictions des masculinités aujourd'hui. À travers des portraits et des témoignages, il interroge l'héritage des modèles masculins traditionnels et leur impact sur les générations actuelles, ainsi que les difficultés des hommes à se réinventer dans un monde où les repères bougent. Un livre poignant qui mêle récits personnels et réflexion collective, pour comprendre comment les hommes peuvent se libérer des carcans de la virilité tout en restant solidaires des luttes féministes."
}, {
  author: "Quentin Delval",
  year: "2023",
  title: "Comment devenir moins con en dix étapes",
  pub: "Hors d'attente",
  lead: "Un guide décalé pour déconstruire les stéréotypes masculins",
  comment: "Dans Comment devenir moins con en 10 étapes (2021), Quentin Delval propose une approche humoristique et engagée pour aider les hommes à prendre conscience de leurs privilèges et de leurs comportements problématiques, déconstruire les normes toxiques de la masculinité traditionnelle et adopter des attitudes plus respectueuses et égalitaires dans leurs relations. Un livre accessible et percutant, qui utilise l'autodérision pour aborder des sujets sérieux comme le consentement, le féminisme ou la vulnérabilité masculine."
}];
function RessourcesPage() {
  useCurtainTransitions("var(--paper)");
  useReveal();
  const [hover, setHover] = React.useState(null);
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "ress"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
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
  }, "Ressources"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--pink)",
      padding: "0 .1em"
    }
  }, "Biblio-"), /*#__PURE__*/React.createElement("br", null), "graphie", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontFamily: "var(--font-serif)",
      textTransform: "none",
      letterSpacing: "-.02em"
    }
  }, "commentée")), /*#__PURE__*/React.createElement("p", {
    className: "h-serif",
    style: {
      marginTop: 32,
      maxWidth: "30ch"
    }
  }, /*#__PURE__*/React.createElement("em", null, "Les sources mobilisées par Pascal pour construire la conférence et les ateliers.")))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0,
      border: "1.5px solid var(--ink)"
    }
  }, BIBLIO.map((b, i) => {
    const isRight = i % 2 === 1;
    const isLastRow = i >= BIBLIO.length - 2;
    const isOpen = open === i;
    const active = hover === i || isOpen;
    return /*#__PURE__*/React.createElement("article", {
      key: i,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      onClick: () => setOpen(o => o === i ? null : i),
      "aria-expanded": isOpen,
      style: {
        padding: "36px 32px",
        borderRight: !isRight ? "1.5px solid var(--ink)" : "none",
        borderBottom: !isLastRow ? "1.5px solid var(--ink)" : "none",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: active ? "var(--pink)" : "transparent",
        transition: "background .25s",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        margin: 0
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 14
      }
    }, b.year)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        textTransform: "uppercase",
        fontSize: "clamp(24px, 2.4vw, 38px)",
        lineHeight: 1,
        letterSpacing: "-.02em",
        marginBottom: 16
      }
    }, b.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 20,
        marginBottom: 8
      }
    }, b.author), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        opacity: .7
      }
    }, b.pub), b.note && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        opacity: .6,
        marginTop: 10
      }
    }, b.note), b.comment && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        fontFamily: "var(--font-display)",
        textTransform: "uppercase",
        fontSize: 12,
        letterSpacing: ".06em",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        borderBottom: "2px solid currentColor",
        paddingBottom: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        lineHeight: 0
      }
    }, isOpen ? "–" : "+"), isOpen ? "Masquer la présentation" : "Lire la présentation"), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 1500 : 0,
        overflow: "hidden",
        transition: "max-height .4s ease, margin-top .4s ease, opacity .4s ease",
        marginTop: isOpen ? 16 : 0,
        opacity: isOpen ? 1 : 0
      }
    }, b.lead && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 18,
        lineHeight: 1.3,
        marginBottom: 10
      }
    }, b.lead), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.5
      }
    }, b.comment)))));
  }))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(RessourcesPage, null));