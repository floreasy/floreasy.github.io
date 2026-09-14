function Block({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "legal-block reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legal-grid"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("div", {
    className: "legal-body"
  }, children)));
}
function MentionsPage() {
  useCurtainTransitions("var(--pink)");
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: "legal"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pink)",
      borderBottom: "1.5px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw)",
      margin: "0 auto",
      padding: "60px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Informations légales"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginBottom: 20
    }
  }, "MENTIONS", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--yellow)",
      padding: "0 .1em"
    }
  }, "LÉGALES")), /*#__PURE__*/React.createElement("p", {
    className: "h-serif lead"
  }, /*#__PURE__*/React.createElement("em", null, "Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).")))), /*#__PURE__*/React.createElement("section", {
    className: "page legal"
  }, /*#__PURE__*/React.createElement(Block, {
    title: "Éditeur du site"
  }, /*#__PURE__*/React.createElement("p", null, "Le site ", /*#__PURE__*/React.createElement("strong", null, "pascalantonio.fr"), " est édité par ", /*#__PURE__*/React.createElement("strong", null, "Pascal Jeanne"), ", conférencier et formateur sous le nom de scène ", /*#__PURE__*/React.createElement("strong", null, "Pascal Antonio"), ", entrepreneur-salarié au sein de la coopérative d'activité et d'emploi", /*#__PURE__*/React.createElement("strong", null, " Coopérative Mosaïque"), "."), /*#__PURE__*/React.createElement("p", null, "Coopérative Mosaïque — Société à responsabilité limitée (SARL)", /*#__PURE__*/React.createElement("br", null), "Siège social : 28 rue du Grand Pré, 04130 Volx", /*#__PURE__*/React.createElement("br", null), "SIREN : 501 196 398 — SIRET (siège) : 501 196 398 00041", /*#__PURE__*/React.createElement("br", null), "Code APE/NAF : 7022Z (Conseil pour les affaires et autres conseils de gestion)", /*#__PURE__*/React.createElement("br", null), "N° de TVA intracommunautaire : FR63 501 196 398", /*#__PURE__*/React.createElement("br", null), "Gérant : Joseph Morin", /*#__PURE__*/React.createElement("br", null), "Courriel : ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@pascalantonio.fr"
  }, "contact@pascalantonio.fr")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Responsable de la publication :"), " Pascal Jeanne, dit Pascal Antonio.")), /*#__PURE__*/React.createElement(Block, {
    title: "Hébergeur"
  }, /*#__PURE__*/React.createElement("p", null, "Le site est hébergé par ", /*#__PURE__*/React.createElement("strong", null, "Hetzner Online GmbH"), /*#__PURE__*/React.createElement("br", null), "Industriestr. 25, 91710 Gunzenhausen, Allemagne", /*#__PURE__*/React.createElement("br", null), "Téléphone : +49 (0)9831 505-0", /*#__PURE__*/React.createElement("br", null), "Site : ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.hetzner.com",
    target: "_blank",
    rel: "noopener"
  }, "www.hetzner.com"))), /*#__PURE__*/React.createElement(Block, {
    title: "Nom de domaine"
  }, /*#__PURE__*/React.createElement("p", null, "Le nom de domaine ", /*#__PURE__*/React.createElement("strong", null, "pascalantonio.fr"), " est enregistré auprès de ", /*#__PURE__*/React.createElement("strong", null, "OVH SAS"), /*#__PURE__*/React.createElement("br", null), "2 rue Kellermann, 59100 Roubaix, France", /*#__PURE__*/React.createElement("br", null), "RCS Lille Métropole 424 761 419 00045", /*#__PURE__*/React.createElement("br", null), "Site : ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.ovhcloud.com",
    target: "_blank",
    rel: "noopener"
  }, "www.ovhcloud.com"))), /*#__PURE__*/React.createElement(Block, {
    title: "Propriété intellectuelle"
  }, /*#__PURE__*/React.createElement("p", null, "L'ensemble des contenus du site (textes, structure, mise en page, identité visuelle, photographies et vidéos) est protégé par le droit de la propriété intellectuelle. Sauf mention contraire, ces éléments sont la propriété de Pascal Antonio ou utilisés avec l'autorisation de leurs auteurs."), /*#__PURE__*/React.createElement("p", null, "Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation préalable écrite, est interdite et constitue une contrefaçon."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Crédits :"), " mise en scène — Murielle Hachet.")), /*#__PURE__*/React.createElement(Block, {
    title: "Données personnelles"
  }, /*#__PURE__*/React.createElement("p", null, "Les informations transmises via le formulaire de contact (nom, structure, courriel, téléphone et détails de votre demande) sont utilisées uniquement pour répondre à votre sollicitation. Elles sont acheminées par le service ", /*#__PURE__*/React.createElement("strong", null, "FormSubmit"), "(", /*#__PURE__*/React.createElement("a", {
    href: "https://formsubmit.co",
    target: "_blank",
    rel: "noopener"
  }, "formsubmit.co"), ") et ne sont ni revendues, ni cédées à des tiers."), /*#__PURE__*/React.createElement("p", null, "Conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Pour l'exercer, écrivez à", /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@pascalantonio.fr"
  }, " contact@pascalantonio.fr"), "."), /*#__PURE__*/React.createElement("p", null, "Vous pouvez également introduire une réclamation auprès de la CNIL (", /*#__PURE__*/React.createElement("a", {
    href: "https://www.cnil.fr",
    target: "_blank",
    rel: "noopener"
  }, "www.cnil.fr"), ").")), /*#__PURE__*/React.createElement(Block, {
    title: "Cookies et mesure d'audience"
  }, /*#__PURE__*/React.createElement("p", null, "Le site utilise ", /*#__PURE__*/React.createElement("strong", null, "Google Analytics"), " pour mesurer son audience. Ces cookies ne sont déposés ", /*#__PURE__*/React.createElement("strong", null, "qu'après votre consentement explicite"), ". Vous pouvez accepter, refuser ou modifier votre choix à tout moment."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (window.paCookieConsent) window.paCookieConsent.open();
    }
  }, "→ Gérer mes préférences cookies"))), /*#__PURE__*/React.createElement(Block, {
    title: "Responsabilité"
  }, /*#__PURE__*/React.createElement("p", null, "Les informations diffusées sur ce site sont fournies à titre indicatif et peuvent être modifiées à tout moment. L'éditeur s'efforce d'en assurer l'exactitude mais ne saurait être tenu responsable des erreurs, omissions ou de l'indisponibilité du site."), /*#__PURE__*/React.createElement("p", null, "Le site peut contenir des liens vers des sites externes dont le contenu n'engage pas la responsabilité de l'éditeur."))), /*#__PURE__*/React.createElement(SiteFooter, null));
}

// Deux modes. Sous Node, au moment du pré-rendu (scripts/prerendu.mjs), il n'y a
// pas de document : on se contente d'exposer le composant. Dans le navigateur, on
// hydrate le HTML déjà rendu s'il existe, sinon on monte normalement — ce repli
// garde la page fonctionnelle même si le pré-rendu n'a pas été lancé.
if (typeof document === "undefined") {
  globalThis.__COMPOSANT__ = MentionsPage;
} else {
  const racine = document.getElementById("root");
  if (racine.firstChild) ReactDOM.hydrateRoot(racine, /*#__PURE__*/React.createElement(MentionsPage, null));else ReactDOM.createRoot(racine).render(/*#__PURE__*/React.createElement(MentionsPage, null));
}