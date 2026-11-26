import { useEffect, useRef, useState } from 'react';

/**
 * Embeds a Neon CRM form using its "share" script.
 *
 * Neon's script is meant to sit inline in static HTML: it calls
 * `document.write()` to add its styles and a container, then fills that
 * container with an iframe. Scripts added after the page has loaded (as in
 * React) can't use `document.write()`, so while the script runs we redirect
 * it to insert the HTML into this component's slot instead.
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

    // Only inject once, even if the effect runs again (e.g. React strict mode).
    if (!slot.querySelector('script')) {
      const originalWrite = document.write;
      // Restore only once the script has run, even if this component unmounts first,
      // so its document.write() calls can never reach the real document.
      const restoreWrite = () => {
        document.write = originalWrite;
      };
      document.write = (...html) => slot.insertAdjacentHTML('beforeend', html.join(''));

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = restoreWrite;
      script.onerror = () => {
        restoreWrite();
        setShowFallback(true);
      };
      slot.appendChild(script);
    }

    const timer = setTimeout(() => {
      if (!slot.querySelector('iframe')) setShowFallback(true);
    }, fallbackDelay);
    return () => clearTimeout(timer);
  }, [src, fallbackDelay]);

  return (
    <div className="min-w-0 grid">
      <div ref={slotRef} />
      {showFallback && fallback}
    </div>
  );
}
