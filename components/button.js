import Link from 'next/link';

export default function Button({ children, href, extraClasses, size }) {
  let classes =
    'text-center whitespace-nowrap border border-transparent rounded-md shadow-sm text-base font-medium text-white text-sm no-underline';
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  if (size === 'sm') {
    classes += ' px-2 pt-2 pb-2 sm:text-md';
  } else if (size === 'lg') {
    classes += ' px-6 py-4 text-lg';
  } else {
    classes += ' px-4 py-2 sm:text-md';
  }
  return (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
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
  let classes = 'bg-red-600 hover:bg-red-700';
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
  let classes = 'bg-purple-800 hover:bg-purple-900';
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
      <Link href={href}>
        <a className="text-gray-500 hover:underline">{children}</a>
      </Link>
    </p>
  );
}
