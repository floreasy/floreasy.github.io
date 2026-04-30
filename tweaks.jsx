/* Shared Tweaks panel applied to every page */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "pink": "#EE3A7A",
  "yellow": "#F4E029",
  "ink": "#0E0E0E",
  "paper": "#FBF8F3",
  "intensity": 0.8,
  "fontDisplay": "Archivo Black",
  "fontSerif": "Instrument Serif"
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const r = document.documentElement.style;
  r.setProperty("--pink", t.pink);
  r.setProperty("--yellow", t.yellow);
  r.setProperty("--ink", t.ink);
  r.setProperty("--paper", t.paper);
  r.setProperty("--intensity", t.intensity);
  r.setProperty("--font-display", `"${t.fontDisplay}", Impact, sans-serif`);
  r.setProperty("--font-serif", `"${t.fontSerif}", Georgia, serif`);
}

/* On every page, apply defaults immediately, then mount the panel when activated */
function PascalTweaks() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Couleurs">
        <TweakColor label="Rose" value={tweaks.pink} onChange={v => setTweak("pink", v)} />
        <TweakColor label="Jaune" value={tweaks.yellow} onChange={v => setTweak("yellow", v)} />
        <TweakColor label="Encre" value={tweaks.ink} onChange={v => setTweak("ink", v)} />
        <TweakColor label="Papier" value={tweaks.paper} onChange={v => setTweak("paper", v)} />
      </TweakSection>
      <TweakSection title="Intensité typo">
        <TweakSlider label="Échelle des titres" value={tweaks.intensity} onChange={v => setTweak("intensity", v)} min={0.7} max={1.4} step={0.05} />
      </TweakSection>
      <TweakSection title="Typographie">
        <TweakSelect label="Display"
          value={tweaks.fontDisplay}
          onChange={v => setTweak("fontDisplay", v)}
          options={[
            { value: "Archivo Black", label: "Archivo Black (défaut)" },
            { value: "Anton", label: "Anton" },
            { value: "Bebas Neue", label: "Bebas Neue" },
            { value: "Oswald", label: "Oswald" },
            { value: "Bricolage Grotesque", label: "Bricolage Grotesque" },
          ]} />
        <TweakSelect label="Serif"
          value={tweaks.fontSerif}
          onChange={v => setTweak("fontSerif", v)}
          options={[
            { value: "Instrument Serif", label: "Instrument Serif (défaut)" },
            { value: "DM Serif Display", label: "DM Serif Display" },
            { value: "Playfair Display", label: "Playfair Display" },
            { value: "Cormorant Garamond", label: "Cormorant" },
          ]} />
      </TweakSection>
    </TweaksPanel>
  );
}

/* Apply defaults synchronously on script load so first paint isn't broken */
applyTweaks(TWEAK_DEFAULTS);

window.PascalTweaks = PascalTweaks;
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
