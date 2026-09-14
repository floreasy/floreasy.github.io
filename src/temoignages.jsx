    const TEMOIGS = [
      {
        name: "Cécile",
        role: "",
        bg: "var(--pink)",
        pull: "Une parole, venant d'un homme, très précieuse.",
        text: [
          "J'ai vraiment beaucoup aimé la conférence gesticulée, l'approche de Pascal Antonio, à la fois intime, didactique et pleine d'humour. J'ai trouvé la durée très adaptée et cette parole, venant d'un homme, très précieuse.",
          "Concernant les ados (16 ans), mon fils et son copain ont été très intéressés et vraiment « attrapés » par l'humour ainsi que le récit intime autour de la « première fois ». Au retour, ils se sont empressés d'aller rechercher sur internet l'archive du passage dans l'émission C'est mon choix dont parle Pascal.",
          "Au-delà de ça, immédiatement après la conférence, ils ont réalisé leur radar intersectionnel, nous l'ont montré et expliqué. Ils ont aussi regardé la bibliographie et parlé de leur envie de lire le livre de Bell Hooks, que je me suis empressée d'aller acheter pour leur mettre sous la main avant peut-être que l'enthousiasme retombe…",
          "Mais cette conférence a été pour eux comme pour moi un super moment et une opportunité de sensibilisation intéressante. Voilà pour un retour « à chaud » !",
        ],
      },
      {
        name: "Delphine",
        role: "",
        bg: "var(--paper)",
        pull: "Exigeant intellectuellement, mais aussi vivant et incarné.",
        text: [
          "Une nouvelle fois, je voulais vous remercier d'avoir fait venir la conférence de Pascal Antonio à la MJC et de nous l'avoir proposée. La conférence était très riche et très adaptée à des lycéens : à mon sens, c'est le bon degré de vulgarisation car il ne s'agit ni de parler aux élèves comme s'ils étaient tout petits, ni de leur faire un cours d'explication de textes trop abstraits ou conceptuels.",
          "J'ai trouvé que c'était à la fois exigeant intellectuellement, mais aussi vivant et incarné, ce qui permet de rendre accessible le propos. Alors bravo à Pascal Antonio qui, de façon courageuse, montre que l'intime est politique en acceptant de prendre son propre itinéraire comme objet de réflexion.",
          "Dans la salle, il s'agissait d'élèves que je ne connais pas parce que je ne les ai pas en cours, mais que nous avions ciblés car il s'agit de classes presque exclusivement masculines, notamment 3 classes de STI. Certains élèves sont acquis aux thèses masculinistes et peut-être même zémouristes ; c'était bien qu'ils entendent cette conférence même si cela en a rendu certains hostiles.",
          "Ces 3 élèves problématiques ne doivent pas occulter le fait que beaucoup d'élèves ont apprécié la conférence : j'en ai entendu dire que cela leur avait beaucoup plu ; ils ont continué à en parler sur le trajet et à la récréation, j'espère qu'ils en parleront aussi ensuite avec les autres classes.",
          "Merci encore et à bientôt j'espère pour d'autres projets.",
        ],
      },
    ];

    function TemoignageBlock({ t, idx }) {
      const hl = idx % 2 === 0 ? "var(--pink)" : "var(--yellow)";
      return (
        <section style={{ background: "var(--paper)", padding: "100px 32px", borderBottom: "1.5px solid var(--ink)" }} className="reveal">
          <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start" }}>
              <div style={{ position: "sticky", top: 100 }}>
                <div className="eyebrow">Témoignage 0{idx+1}</div>
                <h3 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(28px, 3vw, 44px)", lineHeight: .95, letterSpacing: "-.02em", marginBottom: 16 }}>{t.name}</h3>
                {t.role ? <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 20, lineHeight: 1.3, opacity: .8 }}>{t.role}</p> : null}
              </div>
              <div>
                <p className="quote" style={{ marginBottom: 48, position: "relative" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontStyle: "normal", fontSize: "1.6em", lineHeight: 0, position: "relative", top: ".2em", marginRight: ".05em", color: "var(--ink)" }}>"</span>
                  <span style={{ background: hl, padding: "0 .1em", fontFamily: "var(--font-display)", fontStyle: "normal" }}>{t.pull}</span>
                </p>
                <div className="body-l" style={{ maxWidth: "65ch" }}>
                  {t.text.map((p, i) => <p key={i} style={{ marginBottom: 18 }}>{p}</p>)}
                </div>
                <div style={{ marginTop: 32, fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 13, letterSpacing: ".08em", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 32, height: 2, background: "currentColor" }}></span>
                  {t.name}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    function TemoignagesPage() {
      useCurtainTransitions("var(--pink)");
      useReveal();

      return (
        <>
          <SiteHeader active="temoig" />

          <section style={{ background: "var(--pink)", padding: "80px 32px 100px", borderBottom: "1.5px solid var(--ink)" }}>
            <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
              <div className="eyebrow">Témoignages</div>
              <h1 className="h-display">
                Ils ont<br/>
                programmé<br/>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", letterSpacing: "-.02em", background: "var(--yellow)", padding: "0 .12em" }}>la conférence</span>
              </h1>
              <p className="h-serif" style={{ marginTop: 32, maxWidth: "30ch" }}>
                <em>Retours d'élu·es, de référent·es et de spectateurs après une représentation.</em>
              </p>
            </div>
          </section>

          {TEMOIGS.map((t, i) => <TemoignageBlock key={t.name} t={t} idx={i} />)}

          {/* CTA */}
          <section className="reveal" style={{ textAlign: "center", padding: "120px 32px", background: "var(--yellow)", borderTop: "1.5px solid var(--ink)" }}>
            <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
              <div className="eyebrow" style={{ justifyContent: "center" }}>À votre tour</div>
              <h2 className="h-display" style={{ marginBottom: 32, fontSize: "clamp(40px, 6vw, 84px)" }}>
                Faire venir<br/>la conférence<br/>chez vous
              </h2>
              <a href="contact" className="btn">Programmer une intervention <span className="arrow">→</span></a>
            </div>
          </section>

          <SiteFooter />
        </>
      );
    }

    // Deux modes. Sous Node, au moment du pré-rendu (scripts/prerendu.mjs), il n'y a
    // pas de document : on se contente d'exposer le composant. Dans le navigateur, on
    // hydrate le HTML déjà rendu s'il existe, sinon on monte normalement — ce repli
    // garde la page fonctionnelle même si le pré-rendu n'a pas été lancé.
    if (typeof document === "undefined") {
      globalThis.__COMPOSANT__ = TemoignagesPage;
    } else {
      const racine = document.getElementById("root");
      if (racine.firstChild) ReactDOM.hydrateRoot(racine, <TemoignagesPage />);
      else ReactDOM.createRoot(racine).render(<TemoignagesPage />);
    }
