import Link from 'next/link';
import {Popover, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {ArrowDownTrayIcon as DownloadIcon} from "@heroicons/react/24/outline";

const BASE_BUTTON_CLASSES = 'text-center whitespace-nowrap border rounded-md shadow-sm text-base font-medium no-underline';

export default function Button({ children, href, extraClasses, size, noRouting }) {
  let classes = BASE_BUTTON_CLASSES;
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  if (size === 'sm') {
    classes += ' px-2 py-2 text-sm';
  } else if (size === 'lg') {
    classes += ' px-6 py-4 text-lg';
  } else {
    classes += ' px-4 py-2';
  }
  return noRouting // Don't use Next.js routing for local file paths like PDFs, but keep consistent styling
    ? (<a href={href} className={classes}>{children}</a>)
    : (<Link href={href} className={classes}>{children}</Link>);
}

export function WideButton({ children, href, extraClasses }) {
  let classes = 'w-full inline-block';
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  return (
    <Button href={href} extraClasses={classes}>
      {children}
    </Button>
  );
}

export function RedButton({ children, href, extraClasses, size }) {
  let classes = 'bg-red-600 hover:bg-red-700 text-white border-transparent';
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  return (
    <Button href={href} extraClasses={classes} size={size}>
      {children}
    </Button>
  );
}

const whiteClasses =
  'text-gray-800 border-gray-700 hover:border-gray-900 hover:text-gray-900 bg-white';

export function WhiteButton({ children, href, extraClasses, size }) {
  let classes = whiteClasses;
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  return (
    <Button href={href} extraClasses={classes} size={size}>
      {children}
    </Button>
  );
}

export function WideWhiteButton({ children, href, extraClasses }) {
  let classes = whiteClasses;
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  return (
    <WideButton href={href} extraClasses={classes}>
      {children}
    </WideButton>
  );
}

export function PurpleButton({ children, href, extraClasses, size }) {
  let classes = 'bg-purple-800 hover:bg-purple-900 text-white border-transparent';
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  return (
    <Button href={href} extraClasses={classes} size={size}>
      {children}
    </Button>
  );
}

export function FooterLink({ children, href }) {
  return (
    <p className="pb-2 sm:pb-3 md:pb-4">
      <Link href={href} className="text-gray-500 hover:underline">
        {children}
      </Link>
    </p>
  );
}

export function InstallRECAPButtons() {
  const addToChromeButton = (
      <PurpleButton size="lg" href="https://chrome.google.com/webstore/detail/recap/oiillickanjlaeghobeeknbddaonmjnc"
        extraClasses="inline-flex md:px-4 md:py-2"><DownloadIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true"/>&nbsp;Add to Chrome</PurpleButton>);
  const addToEdgeButton = (
      <PurpleButton size="lg" href="/recap/edge/"
        extraClasses="inline-flex md:px-4 md:py-2"><DownloadIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true"/>&nbsp;Add to Edge</PurpleButton>);
  const addToSafariButton = (
      <PurpleButton size="lg" href="https://apps.apple.com/us/app/recap/id1600281788"
        extraClasses="inline-flex md:px-4 md:py-2"><DownloadIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true"/>&nbsp;Add to Safari&nbsp;</PurpleButton>
  );
  const addToFirefoxButton = (
      <PurpleButton size="lg" href="https://addons.mozilla.org/en-US/firefox/addon/recap-195534/"
        extraClasses="inline-flex md:px-4 md:py-2"><DownloadIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true"/>&nbsp;Add to Firefox&nbsp;</PurpleButton>
  );
  return (
    <>
    <div className="hidden md:grid grid-cols-4 gap-x-1 justify-center">
      <div className="col-span-1 flex justify-center">
        {addToChromeButton}
      </div>
      <div className="col-span-1 flex justify-center">
        {addToEdgeButton}
      </div>
      <div className="col-span-1 flex justify-center">
        {addToSafariButton}
      </div>
      <div className="col-span-1 flex justify-center">
        {addToFirefoxButton}
      </div>
    </div>

    <ButtonWithPopover buttonText="Install RECAP" extraClasses="md:hidden">
      <div className="flex flex-col gap-2 bg-white rounded-xl shadow-lg p-10 border border-purple-100">
        {addToChromeButton}
        {addToEdgeButton}
        {addToSafariButton}
        {addToFirefoxButton}
      </div>
    </ButtonWithPopover>
    </>
  );
}

export function ButtonWithPopover({children, buttonText, extraClasses }) {
  const classes = extraClasses ? `relative ${extraClasses}` : 'relative';
  return (
    <Popover className={classes}>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
              ${open ? 'text-white' : 'text-white/90'}
              ${BASE_BUTTON_CLASSES} px-6 py-4 text-lg bg-purple-800 hover:bg-purple-900 border-transparent flex flex-nowrap mx-auto`}
          >
            {buttonText}
            <ChevronDownIcon
              className={`${open ? 'transform rotate-180' : ''} ml-2 w-5 transition duration-150 ease-in-out`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
