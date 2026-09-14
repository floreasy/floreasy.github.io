    function BioPage() {
      useCurtainTransitions("var(--pink)");
      useReveal();

      return (
        <>
          <SiteHeader active="bio" />

          {/* Hero with portrait */}
          <section style={{ background: "var(--pink)", borderBottom: "1.5px solid var(--ink)" }}>
            <div style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "60px 32px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "end" }}>
              <div>
                <div className="eyebrow">Le conférencier</div>
                <h1 className="h-display" style={{ marginBottom: 24 }}>
                  PASCAL<br/>
                  <span style={{ background: "var(--yellow)", padding: "0 .1em" }}>ANTONIO</span>
                </h1>
                <p className="h-serif" style={{ maxWidth: "26ch" }}>
                  <em>Consultant indépendant, formateur en éducation populaire, conférencier gesticulant.</em>
                </p>
                <p style={{ maxWidth: "34ch", marginTop: 16 }}>
                  Pascal Antonio est le nom de scène de <strong>Pascal Jeanne</strong>.
                </p>
              </div>
              <div style={{ aspectRatio: "3/4", border: "1.5px solid var(--ink)", overflow: "hidden" }}>
                <img src="assets/pourquoi-antonio.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Portrait de Pascal Antonio"/>
              </div>
            </div>
          </section>

          {/* Bio body */}
          <section className="page reveal">
            <div className="col2">
              <div>
                <div className="eyebrow">Parcours</div>
                <h2 className="h-section">20 ans<br/>dans l'ESS<br/>et l'éducation<br/><span style={{ background: "var(--yellow)" }}>populaire</span></h2>
              </div>
              <div className="body-l">
                <p style={{ marginBottom: 18 }}>
                  Avec <strong>plus de 20 ans d'expérience</strong> dans l'économie sociale et solidaire ainsi que dans <strong>l'éducation populaire</strong>, j'exerce aujourd'hui comme consultant indépendant pour le cabinet Maracuja.
                </p>
                <p style={{ marginBottom: 18 }}>
                  Je soutiens les associations dans le montage de leurs projets et offre des <strong>formations sur les méthodes d'intelligence collective</strong> et les animations d'éducation populaire.
                </p>
                <p style={{ marginBottom: 18 }}>
                  Après avoir suivi une formation avec la coopérative d'éducation populaire <strong>l'Étincelle</strong> et collaboré avec <strong>Murielle Hachet</strong> pour la mise en scène, je propose depuis février 2025 cette conférence gesticulée sur la virilité et les masculinités.
                </p>
                <p>
                  <em>Mon objectif :</em> <strong>mettre toutes mes compétences au service de la lutte contre les discriminations de genre.</strong>
                </p>
              </div>
            </div>

            {/* Domaines d'intervention (anciennement dans Maracuja) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 60, border: "1.5px solid var(--ink)" }}>
              {[
                ["Accompagnement", "Stratégies de développement"],
                ["Formations", "Intelligence collective"],
                ["Évaluations", "Capitalisation des projets"],
                ["Médiation", "Égalité femme-homme"],
              ].map(([k,v], i) => (
                <div key={k} style={{ padding: "24px 20px", borderRight: i < 3 ? "1.5px solid var(--ink)" : "none", minHeight: 160 }}>
                  <div className="eyebrow" style={{ marginBottom: 12 }}>{k}</div>
                  <p style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 18, lineHeight: 1.1, letterSpacing: "-.01em" }}>{v}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Photo strip */}
          <section className="page reveal">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {["assets/pourquoi-1.webp","assets/pourquoi-2.webp","assets/pourquoi-3.webp"].map((src,i)=>(
                <div key={i} style={{ aspectRatio: "4/5", overflow: "hidden", border: "1.5px solid var(--ink)" }}>
                  <img src={src} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={`Pascal Antonio en conférence gesticulée (${i+1})`} />
                </div>
              ))}
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
      globalThis.__COMPOSANT__ = BioPage;
    } else {
      const racine = document.getElementById("root");
      if (racine.firstChild) ReactDOM.hydrateRoot(racine, <BioPage />);
      else ReactDOM.createRoot(racine).render(<BioPage />);
    }
