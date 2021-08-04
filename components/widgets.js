import Image from 'next/image';
import Link from 'next/link';
import { H4 } from './headings';
import Button, { PurpleButton } from './button';
import slugify from 'slugify';
import classNames from 'classnames';

export function GridListItem({ heading, imgProps, border, bg, href, children }) {
  return (
    <div
      className={`pb-5 ${bg ? bg : `bg-white`} ${
        border ? `border border-gray-400 rounded-md` : ''
      }`}
    >
      <div className={border ? 'p-5' : ''}>
        {imgProps ? (
          <div className="m-5 mb-10 w-full h-32 relative">
            <Image {...imgProps} layout="fill" />
          </div>
        ) : (
          ''
        )}
        <H4>{heading}</H4>
        <div className="leading-relaxed text-gray-700 flex flex-col gap-3 pt-4">{children}</div>
        {href ? (
          <div className="pt-6">
            <Button
              href={href}
              extraClasses="text-gray-800 border-gray-700 hover:border-gray-900 hover:text-gray-900"
            >
              Learn More
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export function GridImage({ imgProps }) {
  return (
    <div className="relative w-full">
      <Image {...imgProps} layout="responsive" />
    </div>
  );
}

export function SearchButtons() {
  return (
    <div className="flex justify-around gap-2 pt-4 sm:pt-8">
      <PurpleButton href="https://www.courtlistener.com/opinion/">Search Opinions</PurpleButton>
      <PurpleButton href="https://www.courtlistener.com/recap/">Search Filings</PurpleButton>
      <PurpleButton href="https://www.courtlistener.com/person/" extraClasses="hidden sm:block">
        Search Judges
      </PurpleButton>
    </div>
  );
}

export function Tag({ id, name }) {
  return (
    <Link id={id} href={`/tag/${slugify(name.toLowerCase())}/`}>
      <a>{name}</a>
    </Link>
  );
}

export function AlertBox({ children }) {
  return (
    <div className="px-4 bg-yellow-100 border border-yellow-500 rounded-md" role="alert">
      {children}
    </div>
  );
}

export function RightInfoBox({ children, width, border }) {
  return (
    <div
      className={classNames(
        'float-right grid grid-cols-2 sm:grid-cols-1 w-full sm:w-1/3 gap-2 py-5 sm:pl-4',
        { border: border }
      )}
    >
      {children}
    </div>
  );
}

export function RightImage({ children, imgProps, width, height, border }) {
  const classes = classNames(
    {
      'float-right pb-5 sm:pl-4 relative': true,
    },
    width ? width : ' w-1/3',
    height ? height : 'h-12'
  );
  return (
    <div className={classes}>
      <CaptionedImage imgProps={imgProps} border={border}>
        {children}
      </CaptionedImage>
    </div>
  );
}

export function CaptionedImage({ imgProps, href, border, children }) {
  return (
    <figure className="m-0">
      {href ? (
        <Link href={href}>
          <a>
            <img {...imgProps} className="border" />
          </a>
        </Link>
      ) : (
        <img {...imgProps} className={classNames({ border: border })} />
      )}
      <figcaption>
        {children} {href ? '(Click for more detail.)' : ''}
      </figcaption>
    </figure>
  );
}
