import { useEffect, useId, useState } from 'react';
import { Dialog as HeadlessDialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import { H1 } from './headings';
import Button from './button';
import {Spinner} from "./widgets";

const EOY_MODE = true;

// TEXT COPIES
const FIRST_EOY_TITLE = 'You can help preserve free public access to the law.';
const SECOND_EOY_TITLE = "Don't miss your opportunity to make an impact in 2025!";
const FIRST_EOY_TEXT =
  'Your monthly recurring donation helps Free Law Project bring new, innovative,' +
  ' open-source technology to the legal ecosystem and expand free legal resources available to the public.';
const SECOND_EOY_TEXT =
  "Free Law Project hosts some of the world's largest open legal databases to" +
  ' ensure that you can access, study, and improve the American legal system. We count on your support' +
  ' for the continued growth and improved accessibility of this important legal resource.';

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
 * - `extraClasses` styles the dialog panel.
 */
export function CampaignDialog({
  start,
  end,
  storageKey,
  hideForDays = 7,
  extraClasses,
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
    <Dialog extraClasses={extraClasses} isOpen={isOpen} setIsOpen={setIsOpen}>
      {children(dismiss)}
    </Dialog>
  );
}

/**
 * End-of-Year (EOY) dialog: two versions shown in consecutive date ranges.
 * Toggle with `EOY_MODE`.
 */
export function EOYDialog() {
  if (!EOY_MODE) return null;
  return (
    <>
      <CampaignDialog
        start="2026-12-04"
        end="2026-12-20"
        storageKey="firstEOYDialogDismissalDate"
        extraClasses={`${EOY_DIALOG_CLASSES} bg-EOYBanner1`}
      >
        {(close) => <EOYDialogContent version="first" onClose={close} />}
      </CampaignDialog>
      <CampaignDialog
        start="2026-12-21"
        end="2026-12-31"
        storageKey="secondEOYDialogDismissalDate"
        extraClasses={`${EOY_DIALOG_CLASSES} bg-EOYBanner2`}
      >
        {(close) => <EOYDialogContent version="second" onClose={close} />}
      </CampaignDialog>
    </>
  );
}

const EOY_DIALOG_CLASSES =
  'bg-center bg-cover bg-no-repeat flex flex-col justify-between' +
  ' items-center max-w-screen-md w-full min-h-450px max-h-screen';

function EOYDialogContent({ version, onClose }) {
  const isFirst = version === 'first';
  const buttonClasses =
    'uppercase shadow-lg shadow-gray-800 rounded-br-none rounded-tr-none relative -right-6 ' +
    (isFirst
      ? 'bg-yellow-600 hover:bg-yellow-700 text-purple-900'
      : 'bg-gray-300 hover:bg-gray-400 text-purple-700');
  const title = isFirst ? FIRST_EOY_TITLE : SECOND_EOY_TITLE;
  const text = isFirst ? FIRST_EOY_TEXT : SECOND_EOY_TEXT;

  const [bgImageIsLoaded, setBgImageIsLoaded] = useState(false);

  return (
    <>
      {/* Hidden image that tracks bg-image loading */}
      <img
        src={`/images/homepage/${isFirst ? 'eOYBanner1' : 'eOYBanner2'}.jpg`}
        alt="Background"
        className="hidden"
        onLoad={() => setBgImageIsLoaded(true)}
      />
      {/* SPINNER that waits for the background image to load: */}
      {!bgImageIsLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-600 h-full w-full">
          <Spinner extraClasses="border-t-gray-400 border-gray-700" />
          <p className="mt-4 text-gray-300">Loading...</p>
        </div>
      )}
      {/* Actual dialog content: */}
      {bgImageIsLoaded && (
        <div>
          <div className="flex justify-between items-start w-full">
            <img
              src="/images/logos/flp/full-logo-white.svg"
              alt="FLP logo"
              width="190"
              height="79"
              className="place-self-start relative mb-8"
            />
            <div onClick={onClose} className="cursor-pointer">
              <XIcon className="h-8 w-8 text-purple-900" />
            </div>
          </div>
          <div className={`flex flex-col mb-4 ${isFirst ? 'items-center' : 'items-start'}`}>
            <H1
              extraClasses={`font-extrabold text-gray-300 text-3xl max-w-lg mb-3 ${
                isFirst ? 'text-center' : 'text-start'
              }`}
            >
              {title}
            </H1>
            <p
              className={`text-gray-300 text-xl font-bold ${
                isFirst ? 'text-center' : 'text-start'
              }`}
            >
              {text}
            </p>
          </div>
          <div className="my-6 w-full flex justify-end">
            <Button href="https://donate.free.law/forms/eoyflpsupport" extraClasses={buttonClasses}>
              <H1 extraClasses="font-extrabold">Make your donation today</H1>
            </Button>
          </div>
        </div>
      )}
    </>
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
  let panelClasses = 'p-6';
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
