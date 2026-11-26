import { useEffect, useRef, useState } from 'react';

// Shared across instances so that only one Neon script loads at a time, even
// if the visitor leaves the page and comes back while it's still loading.
let nativeWrite = null; // The browser's own document.write, captured once
let loading = false; // Whether a Neon script is currently loading
let activeSlot = null; // Where the loading script's output should go

function writeToActiveSlot(...html) {
  // With no slot on screen, the output goes nowhere (a detached element).
  (activeSlot ?? document.createElement('div')).insertAdjacentHTML('beforeend', html.join(''));
}

function loadNeonScript(src, onError) {
  if (!nativeWrite) nativeWrite = document.write;
  loading = true;
  document.write = writeToActiveSlot;

  const finish = () => {
    document.write = nativeWrite;
    loading = false;
    script.remove();
  };
  // Lives in <head>, not the slot, so leaving the page can't detach it mid-load.
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = finish;
  script.onerror = () => {
    finish();
    onError();
  };
  document.head.appendChild(script);
}

/**
 * Embeds a Neon CRM form using its "share" script.
 *
 * Neon's script is meant to sit inline in static HTML: it calls
 * `document.write()` to add its styles and a container, then fills that
 * container with an iframe. Scripts added after the page has loaded (as in
 * React) can't use `document.write()`, so while the script loads we redirect
 * it to insert the HTML into the form slot currently on screen.
 *
 * If no iframe shows up after `fallbackDelay` ms (or the script fails to
 * load), `fallback` is shown instead, e.g. a link to the hosted form.
 */
export default function NeonFormEmbed({ src, fallback, fallbackDelay = 4000 }) {
  const slotRef = useRef(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    activeSlot = slot;
    // A load that's already under way (e.g. from a previous visit to this page,
    // or React strict mode re-running this effect) will write into this slot.
    if (!loading && !slot.hasChildNodes()) {
      loadNeonScript(src, () => setShowFallback(true));
    }

    const timer = setTimeout(() => {
      if (!slot.querySelector('iframe')) setShowFallback(true);
    }, fallbackDelay);
    return () => {
      clearTimeout(timer);
      if (activeSlot === slot) activeSlot = null;
    };
  }, [src, fallbackDelay]);

  return (
    <div className="min-w-0 grid">
      <div ref={slotRef} />
      {showFallback && fallback}
    </div>
  );
}
