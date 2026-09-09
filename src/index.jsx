    function HomePage() {
      useCurtainTransitions("var(--pink)");
      useReveal();
      const [t, setT] = React.useState(0);
      React.useEffect(() => {
        const id = setInterval(() => setT(x => (x + 1) % 4), 2400);
        return () => clearInterval(id);
      }, []);

      const rotators = ["DU MÂLE-ALPHA", "DE LA VIRILITÉ", "DU PATRIARCAT", "DE LA DOMINATION"];

      return (
        <>
          <SiteHeader active="home" />

          {/* HERO */}
          <section style={{ background: "var(--pink)", padding: "60px 32px 64px", borderBottom: "1.5px solid var(--ink)" }}>
            <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
              <div className="eyebrow">Conférence gesticulée — depuis 2025</div>
              <h1 className="h-display" style={{ marginBottom: 24 }}>
                L'IMPOSTURE<br/>
                <span style={{
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
                  WebkitBoxDecorationBreak: "clone",
                }}>
                  {rotators[t]}
                </span>
              </h1>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginTop: 60 }}>
                <p className="h-serif" style={{ maxWidth: "22ch" }}>
                  <em>Une prise de parole publique qui porte une dimension politique.</em> Un acte d'éducation populaire — par et avec Pascal Antonio.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                  <a href="contact" className="btn">Programmer une intervention <span className="arrow">→</span></a>
                  <a href="https://www.youtube.com/watch?v=M0SiVachnZI" target="_blank" className="btn btn-out">Voir le teaser ↗</a>
                </div>
              </div>
            </div>
          </section>

          {/* QUESTIONS BLOCK */}
          <section className="page reveal">
            <div className="col2">
              <div>
                <div className="eyebrow">Description</div>
                <h2 className="h-section">Comment réussir<br/>à être un Mâle-Alpha ?</h2>
              </div>
              <div className="body-l">
                <p style={{ marginBottom: 20 }}>
                  Question récurrente qui traverse les réflexions de nombreux hommes voulant atteindre la meilleure version d'eux-mêmes.
                </p>
                <p style={{ marginBottom: 20, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(22px, 2vw, 32px)", lineHeight: 1.2 }}>
                  Une autre question que l'on pourrait se poser, c'est : <strong style={{background:"var(--yellow)", color:"var(--ink)", padding:"0 .12em", fontStyle:"normal", fontFamily:"var(--font-display)"}}>pourquoi doit-on absolument être un mâle-alpha ?</strong> Existe-t-il des hommes bêta, gamma ou epsilon ?
                </p>
                <p>
                  L'imposture du Mâle-Alpha pose ces questions et cherche à savoir quelles sont les conséquences de cette course vers la virilité — pour les femmes, les hommes et pour la société.
                </p>
              </div>
            </div>
          </section>

          {/* TABLE OF CONTENTS */}
          <section className="page reveal">
            <div className="eyebrow">Au programme</div>
            <h2 className="h-section" style={{ marginBottom: 24, fontSize: "clamp(28px, 6vw, 84px)" }}><span style={{ whiteSpace: "nowrap" }}>Une mallette pédagogique</span><br/><span style={{ background: "var(--yellow)" }}>en 3 modules</span></h2>
            <p className="body-l" style={{ marginBottom: 40, maxWidth: "none" }}>
              La conférence gesticulée, <em>l'imposture du mâle-alpha</em>, s'accompagne de 3 ateliers pratiques et dynamiques pour savoir comment déconstruire les stéréotypes de genre.
            </p>
            <nav className="toc">
              {[
                { n: "01", l: "On libère la parole", h: "ateliers.html#atelier-1" },
                { n: "02", l: "Radar intersectionnel", h: "ateliers.html#atelier-2" },
                { n: "03", l: "On passe à l'action", h: "ateliers.html#atelier-3" },
              ].map(it => (
                <a key={it.n} href={it.h}>
                  <span className="num">{it.n}</span>
                  <span className="label">{it.l}</span>
                  <span className="arr">→</span>
                </a>
              ))}
            </nav>
          </section>

          {/* PHOTO STRIP */}
          <section className="page reveal">
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, height: "min(70vh, 700px)" }}>
              <div style={{ overflow: "hidden", border: "1.5px solid var(--ink)" }}>
                <img src="assets/home-1.webp" loading="lazy" decoding="async" style={{ width:"100%", height:"100%", objectFit:"cover" }} alt="Pascal en représentation" />
              </div>
              <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 16 }}>
                <div style={{ overflow: "hidden", border: "1.5px solid var(--ink)" }}>
                  <img src="assets/home-2.webp" loading="lazy" decoding="async" style={{ width:"100%", height:"100%", objectFit:"cover" }} alt="Pascal sur scène" />
                </div>
                <div style={{ overflow: "hidden", border: "1.5px solid var(--ink)" }}>
                  <img src="assets/home-3.webp" loading="lazy" decoding="async" style={{ width:"100%", height:"100%", objectFit:"cover" }} alt="Pascal en conférence" />
                </div>
              </div>
            </div>
          </section>

          {/* TÉMOIGNAGE — rappel rose */}
          <section className="reveal" style={{ background: "var(--pink)", borderTop: "1.5px solid var(--ink)", borderBottom: "1.5px solid var(--ink)", padding: "80px 32px" }}>
            <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
              <div className="eyebrow">Témoignage</div>
              <p className="quote">
                "J'ai vraiment beaucoup aimé la conférence gesticulée{" : "}à la fois <span style={{background:"var(--yellow)",fontStyle:"normal",fontFamily:"var(--font-display)",padding:"0 .12em"}}>intime, didactique et pleine d'humour</span>. Une parole, venant d'un homme, très précieuse."
              </p>
            </div>
          </section>

          <SiteFooter />
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<HomePage />);
