import { useEffect, useId, useState } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { H1 } from './headings';
import Button from './button';

const EOY_MODE = true;

// EOY dialog dates
const EOY_DIALOG_START_MONTH = 12; // December
const EOY_DIALOG_START_DAY = 4;
const FIRST_EOY_DIALOG_END_MONTH = 12; // December
const FIRST_EOY_DIALOG_END_DAY = 20;
const SECOND_EOY_DIALOG_END_MONTH = 12; // December
const SECOND_EOY_DIALOG_END_DAY = 31;

// TEXT COPIES
const FIRST_EOY_TITLE = 'You can help preserve free public access to the law.';
const SECOND_EOY_TITLE = "Don't miss your opportunity to make an impact in 2024!";
const FIRST_EOY_TEXT =
  'Your monthly recurring donation helps Free Law Project bring new, innovative,' +
  ' open-source technology to the legal ecosystem and expand free legal resources available to the public.';
const SECOND_EOY_TEXT =
  "Free Law Project hosts some of the world's largest open legal databases to" +
  ' ensure that you can access, study, and improve the American legal system. We count on your support' +
  ' for the continued growth and improved accessibility of this important legal resource.';

/**
 * Displays an End-of-Year (EOY) modal dialog that switches between two content
 * versions based on specified date ranges within the current year.
 *
 * Features:
 * - **Dismissal Logic**: When dismissed, each dialog version hides for one week.
 * - **Customization**: Dates, titles, and texts can be adjusted via constants at the top of the file.
 * - **Enable/Disable**: Use the `EOY_MODE` flag to toggle the dialog.
 *
 * Notes:
 * - Uses `localStorage` to store dismissal timestamps; ensure this code runs on the client side.
 * - Time comparisons are based on the user's local time zone.
 *
 * @returns {JSX.Element|null} The EOYDialog component or null if not displayed.
 */
export function EOYDialog() {
  if (!EOY_MODE) return;

  // DIALOG CLASSES
  const dialogBaseClasses =
    'bg-center bg-cover bg-no-repeat flex flex-col justify-between' +
    ' items-center max-w-screen-md w-full min-h-450px max-h-screen border-purple-800';
  const firstDialogClasses = 'bg-EOYBanner1';
  const secondDialogClasses = 'bg-EOYBanner2';

  // BUTTON CLASSES
  const buttonBaseClasses =
    'uppercase shadow-lg shadow-gray-800 rounded-br-none rounded-tr-none relative -right-6';
  const firstButtonClasses = 'bg-yellow-600 hover:bg-yellow-700 text-purple-900';
  const secondButtonClasses = 'bg-gray-300 hover:bg-gray-400 text-purple-700';

  const [isOpen, setIsOpen] = useState(false);
  const [dialogVersion, setDialogVersion] = useState(null);
  const [closeButtonPressed, setCloseButtonPressed] = useState(false);

  // Determine version and visibility depending on current date and dismissal state
  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const getDate = (month, day) => new Date(currentYear, month, day, 23, 59, 59);

    const dialogStart = getDate(EOY_DIALOG_START_MONTH - 1, EOY_DIALOG_START_DAY);
    const firstDialogEnd = getDate(FIRST_EOY_DIALOG_END_MONTH - 1, FIRST_EOY_DIALOG_END_DAY);
    const secondDialogEnd = getDate(SECOND_EOY_DIALOG_END_MONTH - 1, SECOND_EOY_DIALOG_END_DAY);

    const firstEOYDialogDismissalDate = localStorage.getItem('firstEOYDialogDismissalDate');
    const firstDismissed = dismissedWithinWeek(firstEOYDialogDismissalDate);
    const secondEOYDialogDismissalDate = localStorage.getItem('secondEOYDialogDismissalDate');
    const secondDismissed = dismissedWithinWeek(secondEOYDialogDismissalDate);

    if (!firstDismissed && dialogStart <= today <= firstDialogEnd) {
      setDialogVersion('first');
      setIsOpen(true);
    } else if (!secondDismissed && firstDialogEnd <= today <= secondDialogEnd) {
      setDialogVersion('second');
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  // Set dismissal date for current version when pressing close button
  useEffect(() => {
    if (!closeButtonPressed) return;
    const now = Date.now().toString();
    if (dialogVersion === 'first') {
      localStorage.setItem('firstEOYDialogDismissalDate', now);
    } else if (dialogVersion === 'second') {
      localStorage.setItem('secondEOYDialogDismissalDate', now);
    }
  }, [closeButtonPressed]);

  const dismissedWithinWeek = (dismissedDate) => {
    if (!dismissedDate) return false;
    const now = new Date();
    const dismissedAt = new Date(parseInt(dismissedDate, 10));
    const diffInDays = (now - dismissedAt) / (1000 * 60 * 60 * 24);
    return diffInDays < 7;
  };

  const handleClose = () => {
    setIsOpen(false);
    setCloseButtonPressed(true);
  };

  const isFirst = dialogVersion === 'first';

  const dialogClasses = `${dialogBaseClasses} ${
    isFirst ? firstDialogClasses : secondDialogClasses
  }`;

  const buttonClasses = `${buttonBaseClasses} ${
    isFirst ? firstButtonClasses : secondButtonClasses
  }`;

  const title = isFirst ? FIRST_EOY_TITLE : SECOND_EOY_TITLE;
  const text = isFirst ? FIRST_EOY_TEXT : SECOND_EOY_TEXT;

  return (
    <Dialog extraClasses={dialogClasses} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex justify-between items-start w-full">
        <img
          src="/images/logos/flp/full-logo-white.svg"
          alt="FLP logo"
          width="190"
          height="79"
          className="place-self-start relative mb-8"
        />
        <div onClick={handleClose} className="cursor-pointer">
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
        <p className={`text-gray-300 text-xl font-bold ${isFirst ? 'text-center' : 'text-start'}`}>
          {text}
        </p>
      </div>
      <div className="my-6 w-full flex justify-end">
        <Button href="https://donate.free.law/forms/supportflp" extraClasses={buttonClasses}>
          <H1 extraClasses="font-extrabold">Make your donation today</H1>
        </Button>
      </div>
    </Dialog>
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
  let classes = 'fixed p-6 bg-purple-900 border-4';
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  return (
    <HeadlessDialog
      onClose={() => setIsOpen(false)}
      open={isOpen}
      className="w-full h-full inset-0 fixed z-50 flex justify-center items-center"
      id={dialogId}
    >
      <HeadlessDialog.Overlay className="fixed inset-0 bg-black opacity-60" />
      <div className={classes}>{children}</div>
    </HeadlessDialog>
  );
}
