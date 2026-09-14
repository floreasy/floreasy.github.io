    function Block({ title, children }) {
      return (
        <div className="legal-block reveal">
          <div className="legal-grid">
            <h2>{title}</h2>
            <div className="legal-body">{children}</div>
          </div>
        </div>
      );
    }

    function MentionsPage() {
      useCurtainTransitions("var(--pink)");
      useReveal();

      return (
        <>
          <SiteHeader active="legal" />

          {/* Hero */}
          <section style={{ background: "var(--pink)", borderBottom: "1.5px solid var(--ink)" }}>
            <div style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "60px 32px" }}>
              <div className="eyebrow">Informations légales</div>
              <h1 className="h-display" style={{ marginBottom: 20 }}>
                MENTIONS<br/>
                <span style={{ background: "var(--yellow)", padding: "0 .1em" }}>LÉGALES</span>
              </h1>
              <p className="h-serif lead">
                <em>Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).</em>
              </p>
            </div>
          </section>

          <section className="page legal">

            <Block title="Éditeur du site">
              <p>
                Le site <strong>pascalantonio.fr</strong> est édité par <strong>Pascal Jeanne</strong>,
                conférencier et formateur sous le nom de scène <strong>Pascal Antonio</strong>, entrepreneur-salarié au sein de la coopérative d'activité et d'emploi
                <strong> Coopérative Mosaïque</strong>.
              </p>
              <p>
                Coopérative Mosaïque — Société à responsabilité limitée (SARL)<br/>
                Siège social : 28 rue du Grand Pré, 04130 Volx<br/>
                SIREN : 501 196 398 — SIRET (siège) : 501 196 398 00041<br/>
                Code APE/NAF : 7022Z (Conseil pour les affaires et autres conseils de gestion)<br/>
                N° de TVA intracommunautaire : FR63 501 196 398<br/>
                Gérant : Joseph Morin<br/>
                Courriel : <a href="mailto:contact@pascalantonio.fr">contact@pascalantonio.fr</a>
              </p>
              <p>
                <strong>Responsable de la publication :</strong> Pascal Jeanne, dit Pascal Antonio.
              </p>
            </Block>

            <Block title="Hébergeur">
              <p>
                Le site est hébergé par <strong>Hetzner Online GmbH</strong><br/>
                Industriestr. 25, 91710 Gunzenhausen, Allemagne<br/>
                Téléphone : +49 (0)9831 505-0<br/>
                Site : <a href="https://www.hetzner.com" target="_blank" rel="noopener">www.hetzner.com</a>
              </p>
            </Block>

            <Block title="Nom de domaine">
              <p>
                Le nom de domaine <strong>pascalantonio.fr</strong> est enregistré auprès de <strong>OVH SAS</strong><br/>
                2 rue Kellermann, 59100 Roubaix, France<br/>
                RCS Lille Métropole 424 761 419 00045<br/>
                Site : <a href="https://www.ovhcloud.com" target="_blank" rel="noopener">www.ovhcloud.com</a>
              </p>
            </Block>

            <Block title="Propriété intellectuelle">
              <p>
                L'ensemble des contenus du site (textes, structure, mise en page, identité visuelle,
                photographies et vidéos) est protégé par le droit de la propriété intellectuelle.
                Sauf mention contraire, ces éléments sont la propriété de Pascal Antonio ou utilisés
                avec l'autorisation de leurs auteurs.
              </p>
              <p>
                Toute reproduction, représentation, modification ou diffusion, totale ou partielle,
                sans autorisation préalable écrite, est interdite et constitue une contrefaçon.
              </p>
              <p>
                <strong>Crédits :</strong> mise en scène — Murielle Hachet.
              </p>
            </Block>

            <Block title="Données personnelles">
              <p>
                Les informations transmises via le formulaire de contact (nom, structure, courriel,
                téléphone et détails de votre demande) sont utilisées uniquement pour répondre à votre
                sollicitation. Elles sont acheminées par le service <strong>FormSubmit</strong>
                (<a href="https://formsubmit.co" target="_blank" rel="noopener">formsubmit.co</a>) et ne sont
                ni revendues, ni cédées à des tiers.
              </p>
              <p>
                Conformément au Règlement général sur la protection des données (RGPD) et à la loi
                « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification,
                d'opposition et de suppression de vos données. Pour l'exercer, écrivez à
                <a href="mailto:contact@pascalantonio.fr"> contact@pascalantonio.fr</a>.
              </p>
              <p>
                Vous pouvez également introduire une réclamation auprès de la CNIL
                (<a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>).
              </p>
            </Block>

            <Block title="Cookies et mesure d'audience">
              <p>
                Le site utilise <strong>Google Analytics</strong> pour mesurer son audience. Ces cookies
                ne sont déposés <strong>qu'après votre consentement explicite</strong>. Vous pouvez
                accepter, refuser ou modifier votre choix à tout moment.
              </p>
              <p>
                <a href="#" onClick={(e) => { e.preventDefault(); if (window.paCookieConsent) window.paCookieConsent.open(); }}>
                  → Gérer mes préférences cookies
                </a>
              </p>
            </Block>

            <Block title="Responsabilité">
              <p>
                Les informations diffusées sur ce site sont fournies à titre indicatif et peuvent être
                modifiées à tout moment. L'éditeur s'efforce d'en assurer l'exactitude mais ne saurait
                être tenu responsable des erreurs, omissions ou de l'indisponibilité du site.
              </p>
              <p>
                Le site peut contenir des liens vers des sites externes dont le contenu n'engage pas
                la responsabilité de l'éditeur.
              </p>
            </Block>

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
      globalThis.__COMPOSANT__ = MentionsPage;
    } else {
      const racine = document.getElementById("root");
      if (racine.firstChild) ReactDOM.hydrateRoot(racine, <MentionsPage />);
      else ReactDOM.createRoot(racine).render(<MentionsPage />);
    }
