function ContactPage() {
  useCurtainTransitions("var(--pink)");
  useReveal();
  const [formules, setFormules] = React.useState({
    conf: true,
    a1: false,
    a2: false,
    a3: false
  });
  const toggleF = k => {
    if (k === "conf") return;
    setFormules(s => ({
      ...s,
      [k]: !s[k]
    }));
  };
  const [audience, setAudience] = React.useState("Scolaire");
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(null);
  const formulesList = [{
    k: "conf",
    label: "Conférence gesticulée (1h05)"
  }, {
    k: "a1",
    label: "+ Atelier · On libère la parole (1h)"
  }, {
    k: "a2",
    label: "+ Atelier · Radar intersectionnel (1h)"
  }, {
    k: "a3",
    label: "+ Atelier · On passe à l'action (1h)"
  }];
  const audiences = ["Scolaire", "Centre social / MJC", "Université", "Entreprise", "Collectivité", "Associations", "Caserne", "Prison", "Autre"];
  const onSubmit = async e => {
    e.preventDefault();
    if (sending) return;
    const fd = new FormData(e.target);
    const formuleLabels = formulesList.filter(f => formules[f.k]).map(f => f.label).join(" · ");
    const payload = {
      "Nom": fd.get("name") || "",
      "Structure": fd.get("structure") || "",
      "Email": fd.get("email") || "",
      "Téléphone": fd.get("phone") || "",
      "Type de public": audience,
      "Formule(s)": formuleLabels,
      "Date envisagée": fd.get("date") || "",
      "Lieu": fd.get("lieu") || "",
      "Contexte & objectifs": fd.get("message") || "",
      _subject: "Nouvelle demande — " + (fd.get("structure") || fd.get("name") || "site"),
      _template: "table",
      _captcha: "false",
      _replyto: fd.get("email") || "",
      _honey: fd.get("_honey") || ""
    };
    setSending(true);
    setError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@pascalantonio.fr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setSubmitted(true);
      // Conversion GA4 : gtag n'existe qu'en ligne et après consentement (consent.js)
      if (window.gtag) window.gtag("event", "generate_lead", {
        type_public: audience,
        formules: formuleLabels
      });
    } catch (err) {
      setError("L'envoi a échoué. Réessayez, ou écrivez directement à contact@pascalantonio.fr.");
    } finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "contact"
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
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display"
  }, "Programmer", /*#__PURE__*/React.createElement("br", null), "une", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--yellow)",
      padding: "0 .1em"
    }
  }, "intervention")), /*#__PURE__*/React.createElement("p", {
    className: "h-serif",
    style: {
      marginTop: 32,
      maxWidth: "26ch"
    }
  }, /*#__PURE__*/React.createElement("em", null, "Dites-nous où, quand, et pour qui — Pascal vous répond sous quelques jours.")))), /*#__PURE__*/React.createElement("section", {
    className: "page reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "80px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Merci !"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginBottom: 24
    }
  }, "Demande", /*#__PURE__*/React.createElement("br", null), "bien reçue"), /*#__PURE__*/React.createElement("p", {
    className: "body-l"
  }, "Pascal vous répondra rapidement. En attendant, vous pouvez ", /*#__PURE__*/React.createElement("a", {
    style: {
      borderBottom: "2px solid currentColor"
    },
    href: "https://www.youtube.com/watch?v=M0SiVachnZI",
    target: "_blank"
  }, "regarder le teaser"), "."), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      marginTop: 32
    },
    onClick: () => setSubmitted(false)
  }, "Envoyer une autre demande →")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmit,
    style: {
      display: "grid",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "_honey",
    tabIndex: "-1",
    autoComplete: "off",
    style: {
      position: "absolute",
      left: "-9999px",
      width: 1,
      height: 1,
      opacity: 0
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-nom"
  }, "Votre nom"), /*#__PURE__*/React.createElement("input", {
    id: "f-nom",
    name: "name",
    required: true,
    placeholder: "Prénom et nom"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-structure"
  }, "Structure"), /*#__PURE__*/React.createElement("input", {
    id: "f-structure",
    name: "structure",
    required: true,
    placeholder: "Lycée, MJC, association…"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    id: "f-email",
    name: "email",
    required: true,
    type: "email",
    placeholder: "vous@exemple.fr"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-telephone"
  }, "Téléphone"), /*#__PURE__*/React.createElement("input", {
    id: "f-telephone",
    name: "phone",
    placeholder: "06…"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Type de public"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 6
    }
  }, audiences.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    className: `pill ${audience === a ? "on" : ""}`,
    onClick: () => setAudience(a)
  }, a)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Formule souhaitée"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      marginTop: 6
    }
  }, formulesList.map(f => {
    const locked = f.k === "conf";
    return /*#__PURE__*/React.createElement("label", {
      key: f.k,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 18,
        cursor: locked ? "default" : "pointer",
        opacity: locked ? .9 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        border: "1.5px solid var(--ink)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: formules[f.k] ? "var(--pink)" : "transparent"
      }
    }, formules[f.k] && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 14
      }
    }, "✕")), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: formules[f.k],
      disabled: locked,
      onChange: () => toggleF(f.k),
      style: {
        display: "none"
      }
    }), f.label, locked && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "normal",
        textTransform: "uppercase",
        fontSize: 11,
        letterSpacing: ".06em",
        opacity: .55
      }
    }, "· toujours incluse"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-date"
  }, "Date envisagée"), /*#__PURE__*/React.createElement("input", {
    id: "f-date",
    name: "date",
    type: "text",
    placeholder: "Mois / saison / fenêtre"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-lieu"
  }, "Lieu"), /*#__PURE__*/React.createElement("input", {
    id: "f-lieu",
    name: "lieu",
    type: "text",
    placeholder: "Ville, département"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-contexte"
  }, "Contexte & objectifs"), /*#__PURE__*/React.createElement("textarea", {
    id: "f-contexte",
    name: "message",
    placeholder: "Public, taille du groupe, attentes pédagogiques, contraintes…"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn",
    disabled: sending,
    style: {
      opacity: sending ? .6 : 1,
      cursor: sending ? "wait" : "pointer"
    }
  }, sending ? "Envoi en cours…" : /*#__PURE__*/React.createElement(React.Fragment, null, "Envoyer la demande ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "→"))), error && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: "var(--pink)",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 16
    }
  }, error)))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1.5px solid var(--ink)",
      padding: 24,
      marginBottom: 24,
      background: "var(--yellow)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Direct"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 22,
      lineHeight: 1,
      letterSpacing: "-.01em",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@pascalantonio.fr"
  }, "contact@", /*#__PURE__*/React.createElement("br", null), "pascalantonio.fr")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 16
    }
  }, "Réponse sous 3 jours ouvrés."))))), /*#__PURE__*/React.createElement(SiteFooter, null));
}

// Deux modes. Sous Node, au moment du pré-rendu (scripts/prerendu.mjs), il n'y a
// pas de document : on se contente d'exposer le composant. Dans le navigateur, on
// hydrate le HTML déjà rendu s'il existe, sinon on monte normalement — ce repli
// garde la page fonctionnelle même si le pré-rendu n'a pas été lancé.
if (typeof document === "undefined") {
  globalThis.__COMPOSANT__ = ContactPage;
} else {
  const racine = document.getElementById("root");
  if (racine.firstChild) ReactDOM.hydrateRoot(racine, /*#__PURE__*/React.createElement(ContactPage, null));else ReactDOM.createRoot(racine).render(/*#__PURE__*/React.createElement(ContactPage, null));
}