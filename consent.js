/* Consentement cookies (RGPD/CNIL) + Google Analytics.
   - Ne s'active QUE sur le site en ligne (pascalantonio.fr) : aucun suivi en local/preview.
   - GA n'est chargé qu'APRÈS acceptation explicite. Le choix est mémorisé (localStorage).
   - window.paCookieConsent.open() permet de rouvrir la boîte (lien "Gérer les cookies"). */
(function () {
  "use strict";

  var GA_ID = "G-9T5KZ7TQH5";
  var PROD_HOSTS = ["pascalantonio.fr", "www.pascalantonio.fr"];
  var STORAGE_KEY = "pa-cookie-consent"; // "granted" | "denied"
  var isProd = PROD_HOSTS.indexOf(window.location.hostname) !== -1;

  function getConsent() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setConsent(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) {}
  }

  /* --- Chargement de Google Analytics (uniquement en ligne, après accord) --- */
  var gaLoaded = false;
  function loadGA() {
    if (gaLoaded || !isProd) return;
    gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  /* --- Styles du bandeau (injectés une seule fois) --- */
  var stylesInjected = false;
  function injectStyles() {
    if (stylesInjected) return;
    stylesInjected = true;
    var css =
      ".pa-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;" +
      "max-width:560px;margin:0 auto;background:var(--paper,#FBF8F3);color:var(--ink,#0E0E0E);" +
      "border:1.5px solid var(--ink,#0E0E0E);box-shadow:6px 6px 0 var(--ink,#0E0E0E);" +
      "padding:24px;display:grid;gap:16px;}" +
      ".pa-consent .pa-eyebrow{font-family:var(--font-display,'Archivo Black',sans-serif);" +
      "text-transform:uppercase;font-size:12px;letter-spacing:.08em;}" +
      ".pa-consent p{font-family:var(--font-serif,Georgia,serif);font-size:15px;line-height:1.4;margin:0;}" +
      ".pa-consent a{color:inherit;border-bottom:1.5px solid currentColor;}" +
      ".pa-consent .pa-actions{display:flex;flex-wrap:wrap;gap:12px;}" +
      ".pa-consent button{font-family:var(--font-display,'Archivo Black',sans-serif);" +
      "text-transform:uppercase;font-size:12px;letter-spacing:.06em;padding:12px 20px;" +
      "border:1.5px solid var(--ink,#0E0E0E);cursor:pointer;transition:all .15s;}" +
      ".pa-consent .pa-accept{background:var(--pink,#EE3A7A);color:var(--ink,#0E0E0E);}" +
      ".pa-consent .pa-accept:hover{background:var(--yellow,#F4E029);}" +
      ".pa-consent .pa-refuse{background:transparent;color:var(--ink,#0E0E0E);}" +
      ".pa-consent .pa-refuse:hover{background:var(--ink,#0E0E0E);color:var(--paper,#FBF8F3);}";
    var st = document.createElement("style");
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* --- Bandeau --- */
  var banner = null;
  function removeBanner() {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
  }
  function showBanner() {
    if (banner) return;
    injectStyles();
    banner = document.createElement("div");
    banner.className = "pa-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Consentement aux cookies");
    banner.innerHTML =
      '<div class="pa-eyebrow">Cookies</div>' +
      "<p>Ce site utilise Google Analytics pour mesurer son audience de façon anonyme. " +
      "Aucun cookie de mesure n'est déposé sans votre accord.</p>" +
      '<div class="pa-actions">' +
      '<button type="button" class="pa-accept" data-accept>Accepter</button>' +
      '<button type="button" class="pa-refuse" data-refuse>Refuser</button>' +
      "</div>";
    document.body.appendChild(banner);
    banner.querySelector("[data-accept]").addEventListener("click", function () {
      setConsent("granted"); loadGA(); removeBanner();
    });
    banner.querySelector("[data-refuse]").addEventListener("click", function () {
      setConsent("denied"); removeBanner();
    });
  }

  /* API publique : rouvrir le choix depuis le lien "Gérer les cookies" du footer */
  window.paCookieConsent = {
    open: showBanner,
    accept: function () { setConsent("granted"); loadGA(); removeBanner(); },
    refuse: function () { setConsent("denied"); removeBanner(); }
  };

  /* Pas de suivi ni de bandeau hors du site en ligne (local, preview, github.io) */
  if (!isProd) return;

  var consent = getConsent();
  if (consent === "granted") {
    loadGA();
  } else if (consent !== "denied") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showBanner);
    } else {
      showBanner();
    }
  }
})();
