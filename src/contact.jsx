    function ContactPage() {
      useCurtainTransitions("var(--pink)");
      useReveal();

      const [formules, setFormules] = React.useState({ conf: true, a1: false, a2: false, a3: false });
      const toggleF = (k) => { if (k === "conf") return; setFormules(s => ({ ...s, [k]: !s[k] })); };
      const [audience, setAudience] = React.useState("Scolaire");
      const [submitted, setSubmitted] = React.useState(false);
      const [sending, setSending] = React.useState(false);
      const [error, setError] = React.useState(null);

      const formulesList = [
        { k: "conf", label: "Conférence gesticulée (1h05)" },
        { k: "a1", label: "+ Atelier · On libère la parole (1h)" },
        { k: "a2", label: "+ Atelier · Radar intersectionnel (1h)" },
        { k: "a3", label: "+ Atelier · On passe à l'action (1h)" },
      ];
      const audiences = ["Scolaire", "Centre social / MJC", "Université", "Entreprise", "Collectivité", "Associations", "Caserne", "Prison", "Autre"];

      const onSubmit = async (e) => {
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
          _honey: fd.get("_honey") || "",
        };

        setSending(true);
        setError(null);
        try {
          const res = await fetch("https://formsubmit.co/ajax/contact@pascalantonio.fr", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error("HTTP " + res.status);
          setSubmitted(true);
        } catch (err) {
          setError("L'envoi a échoué. Réessayez, ou écrivez directement à contact@pascalantonio.fr.");
        } finally {
          setSending(false);
        }
      };

      return (
        <>
          <SiteHeader active="contact" />

          {/* Hero */}
          <section style={{ background: "var(--pink)", padding: "80px 32px 60px", borderBottom: "1.5px solid var(--ink)" }}>
            <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
              <div className="eyebrow">Contact</div>
              <h1 className="h-display">
                Programmer<br/>une<br/>
                <span style={{ background: "var(--yellow)", padding: "0 .1em" }}>intervention</span>
              </h1>
              <p className="h-serif" style={{ marginTop: 32, maxWidth: "26ch" }}>
                <em>Dites-nous où, quand, et pour qui — Pascal vous répond sous quelques jours.</em>
              </p>
            </div>
          </section>

          {/* Form + sidebar */}
          <section className="page reveal">
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 80, alignItems: "start" }}>
              <div>
                {submitted ? (
                  <div style={{ padding: "80px 0" }}>
                    <div className="eyebrow">Merci !</div>
                    <h2 className="h-section" style={{ marginBottom: 24 }}>Demande<br/>bien reçue</h2>
                    <p className="body-l">Pascal vous répondra rapidement. En attendant, vous pouvez <a style={{ borderBottom: "2px solid currentColor" }} href="https://www.youtube.com/watch?v=M0SiVachnZI" target="_blank">regarder le teaser</a>.</p>
                    <button className="btn" style={{ marginTop: 32 }} onClick={() => setSubmitted(false)}>Envoyer une autre demande →</button>
                  </div>
                ) : (
                <form onSubmit={onSubmit} style={{ display: "grid", gap: 32 }}>
                  {/* Anti-spam honeypot — caché aux humains */}
                  <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="f-nom">Votre nom</label>
                      <input id="f-nom" name="name" required placeholder="Prénom et nom" />
                    </div>
                    <div className="field">
                      <label htmlFor="f-structure">Structure</label>
                      <input id="f-structure" name="structure" required placeholder="Lycée, MJC, association…" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="f-email">Email</label>
                      <input id="f-email" name="email" required type="email" placeholder="vous@exemple.fr" />
                    </div>
                    <div className="field">
                      <label htmlFor="f-telephone">Téléphone</label>
                      <input id="f-telephone" name="phone" placeholder="06…" />
                    </div>
                  </div>

                  <div className="field">
                    <label>Type de public</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
                      {audiences.map(a => (
                        <span key={a} className={`pill ${audience===a?"on":""}`} onClick={()=>setAudience(a)}>{a}</span>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label>Formule souhaitée</label>
                    <div style={{ display: "grid", gap: 10, marginTop: 6 }}>
                      {formulesList.map(f => {
                        const locked = f.k === "conf";
                        return (
                        <label key={f.k} style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, cursor: locked ? "default" : "pointer", opacity: locked ? .9 : 1 }}>
                          <span style={{
                            width: 24, height: 24, border: "1.5px solid var(--ink)",
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            background: formules[f.k] ? "var(--pink)" : "transparent",
                          }}>
                            {formules[f.k] && <span style={{ fontFamily: "var(--font-display)", fontSize: 14 }}>✕</span>}
                          </span>
                          <input type="checkbox" checked={formules[f.k]} disabled={locked} onChange={()=>toggleF(f.k)} style={{ display: "none" }} />
                          {f.label}
                          {locked && <span style={{ fontFamily: "var(--font-display)", fontStyle: "normal", textTransform: "uppercase", fontSize: 11, letterSpacing: ".06em", opacity: .55 }}>· toujours incluse</span>}
                        </label>
                      );
                      })}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="f-date">Date envisagée</label>
                      <input id="f-date" name="date" type="text" placeholder="Mois / saison / fenêtre" />
                    </div>
                    <div className="field">
                      <label htmlFor="f-lieu">Lieu</label>
                      <input id="f-lieu" name="lieu" type="text" placeholder="Ville, département" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="f-contexte">Contexte & objectifs</label>
                    <textarea id="f-contexte" name="message" placeholder="Public, taille du groupe, attentes pédagogiques, contraintes…"></textarea>
                  </div>

                  <div>
                    <button type="submit" className="btn" disabled={sending} style={{ opacity: sending ? .6 : 1, cursor: sending ? "wait" : "pointer" }}>
                      {sending ? "Envoi en cours…" : <>Envoyer la demande <span className="arrow">→</span></>}
                    </button>
                    {error && (
                      <p style={{ marginTop: 16, color: "var(--pink)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16 }}>{error}</p>
                    )}
                  </div>
                </form>
                )}
              </div>

              <aside style={{ position: "sticky", top: 100 }}>
                <div style={{ border: "1.5px solid var(--ink)", padding: 24, marginBottom: 24, background: "var(--yellow)" }}>
                  <div className="eyebrow" style={{ marginBottom: 12 }}>Direct</div>
                  <p style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 22, lineHeight: 1, letterSpacing: "-.01em", marginBottom: 12 }}>
                    <a href="mailto:contact@pascalantonio.fr">contact@<br/>pascalantonio.fr</a>
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16 }}>Réponse sous 3 jours ouvrés.</p>
                </div>
              </aside>
            </div>
          </section>

          <SiteFooter />
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
