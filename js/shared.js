/* Shared header, footer, transitions, tweaks for all pages */

const NAV = [{
  href: "/",
  label: "Accueil",
  key: "home"
}, {
  href: "conference",
  label: "La Conférence",
  key: "conf"
}, {
  href: "ateliers",
  label: "Ateliers",
  key: "ateliers"
}, {
  href: "temoignages",
  label: "Témoignages",
  key: "temoig"
}, {
  href: "bio",
  label: "Pourquoi\u00a0moi\u00a0?",
  key: "bio"
}, {
  href: "ressources",
  label: "Ressources",
  key: "ress"
}, {
  href: "faq",
  label: "FAQ",
  key: "faq"
}, {
  href: "contact",
  label: "Contact",
  key: "contact"
}];
function SiteHeader({
  active
}) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", null, "Pascal Antonio")), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, NAV.filter(n => n.key !== "home" && n.key !== "faq").map(n => /*#__PURE__*/React.createElement("a", {
    key: n.key,
    href: n.href,
    className: active === n.key ? "active" : ""
  }, n.label))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `burger${open ? " open" : ""}`,
    "aria-label": open ? "Fermer le menu" : "Ouvrir le menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("nav", {
    className: `mobile-nav${open ? " open" : ""}`,
    "aria-hidden": !open,
    inert: open ? undefined : ""
  }, /*#__PURE__*/React.createElement("ul", null, NAV.filter(n => n.key !== "faq").map(n => /*#__PURE__*/React.createElement("li", {
    key: n.key
  }, /*#__PURE__*/React.createElement("a", {
    href: n.href,
    className: active === n.key ? "active" : "",
    onClick: () => setOpen(false)
  }, n.label))))));
}
function Marquee({
  items,
  color
}) {
  const text = items.join(" ★ ");
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    style: color ? {
      background: color
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, /*#__PURE__*/React.createElement("span", null, text, " ★ "), /*#__PURE__*/React.createElement("span", null, text, " ★ "), /*#__PURE__*/React.createElement("span", null, text, " ★ "), /*#__PURE__*/React.createElement("span", null, text, " ★ ")));
}
function SiteFooter({
  bg
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer",
    style: bg ? {
      background: bg
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Contacter"), /*#__PURE__*/React.createElement("div", {
    className: "ft-big"
  }, "Écrire à", /*#__PURE__*/React.createElement("br", null), "Pascal"), /*#__PURE__*/React.createElement("a", {
    href: "contact",
    className: "btn",
    style: {
      marginTop: 28
    }
  }, "Programmer une intervention ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "→"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Naviguer"), /*#__PURE__*/React.createElement("ul", null, NAV.map(n => /*#__PURE__*/React.createElement("li", {
    key: n.key
  }, /*#__PURE__*/React.createElement("a", {
    href: n.href
  }, n.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Suivre"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/antonio_pascal/",
    target: "_blank"
  }, "Instagram @antonio_pascal ↗")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/watch?v=M0SiVachnZI",
    target: "_blank"
  }, "Teaser YouTube ↗")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@pascalantonio.fr"
  }, "contact@pascalantonio.fr ↗"))))), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, "© 2026 Pascal Antonio · Conférence gesticulée"), /*#__PURE__*/React.createElement("span", null, "Mise en scène : Murielle Hachet"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "mentions-legales"
  }, "Mentions légales")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (window.paCookieConsent) window.paCookieConsent.open();
    }
  }, "Gérer les cookies"))));
}

/* Curtain transition: when a nav link is clicked, slide a colored curtain in,
   then navigate. On page load, slide it out. */
function useCurtainTransitions(color) {
  React.useEffect(() => {
    // Entry: a curtain that's already covering the screen, slides DOWN out of view.
    const curtain = document.createElement("div");
    curtain.className = "curtain in"; // start covering
    curtain.style.background = color || "var(--pink)";
    curtain.style.transform = "translateY(0)";
    document.body.appendChild(curtain);

    // Force reflow so the next style change animates
    // eslint-disable-next-line no-unused-expressions
    curtain.offsetHeight;
    setTimeout(() => {
      curtain.style.transition = "transform .55s cubic-bezier(.77,0,.18,1)";
      curtain.style.transform = "translateY(100%)";
      setTimeout(() => {
        if (curtain.parentNode) curtain.remove();
      }, 650);
    }, 30);

    // intercept internal links
    const onClick = e => {
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || a.target === "_blank") return;
      e.preventDefault();
      const c = document.createElement("div");
      c.className = "curtain";
      c.style.background = color || "var(--pink)";
      c.style.transform = "translateY(-100%)";
      c.style.transition = "transform .5s cubic-bezier(.77,0,.18,1)";
      document.body.appendChild(c);
      // eslint-disable-next-line no-unused-expressions
      c.offsetHeight;
      requestAnimationFrame(() => {
        c.style.transform = "translateY(0)";
        setTimeout(() => {
          window.location.href = href;
        }, 520);
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [color]);
}

/* Reveal-on-scroll observer */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(ents => {
      ents.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, {
      threshold: 0.12
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Marquee,
  NAV,
  useCurtainTransitions,
  useReveal
});