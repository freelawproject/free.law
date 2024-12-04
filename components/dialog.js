import { useEffect, useId, useState } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { H1 } from './headings';
import Button from './button';

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

export function EOYDialog() {
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

  // TEXT COPIES
  const firstTitle = 'You can help preserve free public access to the law.';
  const secondTitle = "Don't miss your opportunity to make an impact in 2024!";
  const firstText =
    'Your monthly recurring donation helps Free Law Project bring new, innovative,' +
    ' open-source technology to the legal ecosystem and expand free legal resources available to the public.';
  const secondText =
    "Free Law Project hosts some of the world's largest open legal databases to" +
    ' ensure that you can access, study, and improve the American legal system. We count on your support' +
    ' for the continued growth and improved accessibility of this important legal resource.';

  const [isOpen, setIsOpen] = useState(false);
  const [dialogVersion, setDialogVersion] = useState(null);
  const [closeButtonPressed, setCloseButtonPressed] = useState(false);

  // Determine version and visibility depending on current date and dismissal state
  useEffect(() => {
    const today = new Date();
    const firstDialogEnd = new Date('2024-12-20T23:59:59');
    const secondDialogEnd = new Date('2024-12-31T23:59:59');

    const firstEOYDialogDismissalDate = localStorage.getItem('firstEOYDialogDismissalDate');
    const firstDismissed = dismissedWithinWeek(firstEOYDialogDismissalDate);
    const secondEOYDialogDismissalDate = localStorage.getItem('secondEOYDialogDismissalDate');
    const secondDismissed = dismissedWithinWeek(secondEOYDialogDismissalDate);

    if (!firstDismissed && today <= firstDialogEnd) {
      setDialogVersion('first');
      setIsOpen(true);
    } else if (!secondDismissed && today >= firstDialogEnd && today <= secondDialogEnd) {
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

  const title = isFirst ? firstTitle : secondTitle;
  const text = isFirst ? firstText : secondText;

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
