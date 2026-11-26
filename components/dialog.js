import { useEffect, useId, useState } from 'react';
import { Dialog as HeadlessDialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import { campaignFontVariables } from '../lib/campaignFonts';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

/**
 * Parses a 'YYYY-MM-DD' string as a date in the visitor's local time zone.
 * `endOfDay` moves the time to 23:59:59.999 so the date range is inclusive.
 */
function parseLocalDate(isoDate, endOfDay = false) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return endOfDay
    ? new Date(year, month - 1, day, 23, 59, 59, 999)
    : new Date(year, month - 1, day);
}

/**
 * A modal dialog that opens on its own between two dates and stays hidden for
 * a while after the visitor dismisses it.
 *
 * - `start` and `end` are inclusive 'YYYY-MM-DD' dates in the visitor's local time.
 * - `storageKey` names the `localStorage` entry holding the dismissal timestamp.
 *   Use a unique key per campaign so dismissing one doesn't hide another.
 * - `hideForDays` is how long the dialog stays hidden after being dismissed.
 * - `children` is a function that receives a `dismiss` callback for the content's
 *   own close button. Only that dismissal is remembered for `hideForDays`.
 * - `extraClasses` styles the dialog panel and `padding` overrides its default padding.
 */
export function CampaignDialog({
  start,
  end,
  storageKey,
  hideForDays = 7,
  extraClasses,
  padding,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now < parseLocalDate(start) || now > parseLocalDate(end, true)) return;
    let dismissedAt = null;
    try {
      dismissedAt = localStorage.getItem(storageKey);
    } catch (e) {
      // Storage can be unavailable (e.g. blocked cookies); show the dialog anyway.
    }
    if (dismissedAt && (now - parseInt(dismissedAt, 10)) / MS_PER_DAY < hideForDays) return;
    setIsOpen(true);
  }, [start, end, storageKey, hideForDays]);

  // Only an explicit close (e.g. the × button) is remembered. Esc and backdrop
  // clicks just close it for now: those are easy to do by mistake.
  const dismiss = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(storageKey, Date.now().toString());
    } catch (e) {
      // Nothing to do: the dialog will simply show again on the next visit.
    }
  };

  return (
    <Dialog extraClasses={extraClasses} padding={padding} isOpen={isOpen} setIsOpen={setIsOpen}>
      {children(dismiss)}
    </Dialog>
  );
}

const MATCH_EYEBROW = 'font-[family-name:var(--font-plex-mono)] font-medium uppercase tracking-[.08em]';
const MATCH_RALEWAY = 'font-[family-name:var(--font-raleway)]';
const MATCH_ITALIC =
  'font-[family-name:var(--font-caslon)] italic tracking-[.04em] [font-variant-ligatures:no-common-ligatures]';

/**
 * Homepage pop-up for the 2026 year-end matching-gift campaign. Side by side
 * on wide screens, stacked on narrow ones.
 *
 * The Lady Justice photo is turned into the faint plum silhouette with an SVG
 * color-matrix filter: it keys on how red each pixel is, so the brick wall and
 * floor drop out while the bronze statue stays.
 */
export function MatchDialog() {
  return (
    <CampaignDialog
      start="2026-11-26"
      end="2026-12-31"
      storageKey="match2026DialogDismissalDate"
      padding="p-0"
      extraClasses={`${campaignFontVariables} relative flex flex-col lg:flex-row w-[360px] lg:w-[860px] lg:min-h-[480px] max-w-full max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-xl shadow-[0_24px_60px_rgba(0,0,0,.35)] antialiased`}
    >
      {(close) => (
        <>
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <filter id="match-popup-silhouette" colorInterpolationFilters="sRGB">
              {/* Alpha = how un-red (statue) the pixel is; color = FLP grape */}
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.4  0 0 0 0 0.188  0 0 0 0 0.416  -25.5 18.4 0 0 4.6"
              />
              <feGaussianBlur stdDeviation="0.8" />
            </filter>
          </svg>

          {/* Match amount */}
          <div className="relative overflow-hidden shrink-0 lg:w-[380px] bg-[#ebdfec] text-[#401f41] px-[34px] lg:px-[35px] pt-[52px] pb-[40px] lg:py-0 flex flex-col justify-center">
            <img
              src="/images/homepage/lady-justice.webp"
              alt=""
              className="absolute max-w-none w-[400px] lg:w-[430px] -left-[57px] lg:-left-[37px] -top-[5px] opacity-[.11] [filter:url(#match-popup-silhouette)] pointer-events-none select-none"
            />
            <p className={`relative m-0 ${MATCH_EYEBROW} text-[15px]`}>Dollar for dollar</p>
            <p
              className={`relative m-0 ${MATCH_RALEWAY} font-black text-[#66306a] text-[76px] lg:text-[81px] leading-none tracking-[-.01em] mt-2`}
            >
              $50,000
            </p>
            <p className={`relative m-0 self-end ${MATCH_ITALIC} text-[22px] mt-1`}>
              in matching gifts
            </p>
          </div>

          {/* Message and call to action */}
          <div className="flex-1 bg-[#401f41] text-white px-[36px] lg:pl-[38px] lg:pr-[40px] pt-[28px] lg:pt-[50px] pb-[40px] lg:pb-[42px] flex flex-col">
            <p className={`m-0 ${MATCH_EYEBROW} text-[15px] text-[#ebdfec] lg:text-[#d2bad4]`}>Double your impact</p>
            <DialogTitle
              as="h2"
              className={`m-0 ${MATCH_RALEWAY} font-extrabold text-[26px] lg:text-[38px] leading-[1.18] lg:leading-[1.13] tracking-[-.005em] mt-2 lg:mt-7`}
            >
              Every gift is matched from now through{' '}
              <span className="text-[#d2bad4]">December 31.</span>
            </DialogTitle>
            <p className={`m-0 ${MATCH_ITALIC} text-[22px] lg:text-[25px] leading-[1.3] text-[#ebdfec] mt-3 lg:mt-6`}>
              <b>Court records belong to the public.</b> Your gift helps keep them <b>free.</b>
            </p>
            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-4 mt-7 lg:mt-auto">
              <img
                src="/images/logos/flp/full-logo-white.svg"
                alt="Free Law Project"
                className="w-[104px] lg:w-[136px] h-auto"
              />
              <a
                href="/2026-match/"
                className={`block w-full lg:w-[230px] text-center ${MATCH_RALEWAY} font-extrabold text-[22px] lg:text-[21px] text-[#401f41] bg-[#f7f2f8] hover:bg-[#d2bad4] rounded-[10px] py-[13px] no-underline transition-colors focus-visible:outline-3 focus-visible:outline-[#d2bad4] focus-visible:outline-offset-2`}
              >
                Double my gift
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-2 right-2 w-11 h-11 rounded-full bg-[#401f41]/85 flex items-center justify-center cursor-pointer focus-visible:outline-3 focus-visible:outline-white"
          >
            <XIcon className="w-5 h-5 text-white" aria-hidden="true" />
          </button>
        </>
      )}
    </CampaignDialog>
  );
}

/**
 * A reusable modal dialog built on top of Headless UI's Dialog component.
 *
 * Features:
 * - **Controlled and Uncontrolled Modes**: Can manage its own open state internally or accept
 * `isOpen` and `setIsOpen` props to control it externally.
 * - **Customization**: Accepts `extraClasses` to apply additional styling to the dialog container.
 */
export default function Dialog({
  children,
  extraClasses,
  padding = 'p-6',
  isOpen: isOpenProp,
  setIsOpen: setIsOpenProp,
}) {
  const dialogId = useId();
  const [isOpenLocal, setIsOpenLocal] = useState(true);
  let isOpen, setIsOpen;
  if (isOpenProp == null || setIsOpenProp == null) {
    [isOpen, setIsOpen] = [isOpenLocal, setIsOpenLocal];
  } else {
    [isOpen, setIsOpen] = [isOpenProp, setIsOpenProp];
  }
  let panelClasses = padding;
  if (extraClasses) {
    panelClasses += ' ' + extraClasses;
  }
  return (
    <HeadlessDialog
      onClose={() => setIsOpen(false)}
      open={isOpen}
      className="fixed inset-0 z-50"
      id={dialogId}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/60" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className={panelClasses}>{children}</DialogPanel>
      </div>
    </HeadlessDialog>
  );
}
