/* Shared header, footer, transitions, tweaks for all pages */

const NAV = [
  { href: "index.html", label: "Accueil", key: "home" },
  { href: "conference.html", label: "La Conférence", key: "conf" },
  { href: "ateliers.html", label: "Ateliers", key: "ateliers" },
  { href: "temoignages.html", label: "Témoignages", key: "temoig" },
  { href: "bio.html", label: "Pourquoi\u00a0moi\u00a0?", key: "bio" },
  { href: "ressources.html", label: "Ressources", key: "ress" },
  { href: "contact.html", label: "Contact", key: "contact" },
];

function SiteHeader({ active }) {
  return (
    <header className="site-header">
      <a href="index.html" className="brand">
        <span>Pascal Antonio</span>
      </a>
      <nav className="site-nav">
        {NAV.filter(n => n.key !== "home").map(n => (
          <a key={n.key} href={n.href} className={active === n.key ? "active" : ""}>{n.label}</a>
        ))}
      </nav>
    </header>
  );
}

function Marquee({ items, color }) {
  const text = items.join(" ★ ");
  return (
    <div className="marquee" style={color ? { background: color } : null}>
      <div className="marquee-track">
        <span>{text} ★ </span>
        <span>{text} ★ </span>
        <span>{text} ★ </span>
        <span>{text} ★ </span>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="ft-grid">
        <div>
          <h3>Programmer une intervention</h3>
          <div className="ft-big">Écrire à<br/>Pascal.</div>
          <a href="contact.html" className="btn" style={{ marginTop: 28 }}>
            Programmer une intervention <span className="arrow">→</span>
          </a>
        </div>
        <div>
          <h3>Naviguer</h3>
          <ul>
            {NAV.map(n => <li key={n.key}><a href={n.href}>{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h3>Suivre</h3>
          <ul>
            <li><a href="https://www.instagram.com/antonio_pascal/" target="_blank">Instagram @antonio_pascal ↗</a></li>
            <li><a href="https://www.youtube.com/watch?v=M0SiVachnZI" target="_blank">Teaser YouTube ↗</a></li>
            <li><a href="contact.html">contact@pascal-antonio.fr</a></li>
          </ul>
        </div>
      </div>
      <div className="meta">
        <span>© 2026 Pascal Antonio · Conférence gesticulée</span>
        <span>Mise en scène : Murielle Hachet</span>
      </div>
    </footer>
  );
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
      setTimeout(() => { if (curtain.parentNode) curtain.remove(); }, 650);
    }, 30);

    // intercept internal links
    const onClick = (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || a.target === "_blank") return;
      if (!href.endsWith(".html")) return;
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
        setTimeout(() => { window.location.href = href; }, 520);
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
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

Object.assign(window, { SiteHeader, SiteFooter, Marquee, NAV, useCurtainTransitions, useReveal });
