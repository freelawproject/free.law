import Image from 'next/image';
import Link from 'next/link';
import {H4} from './headings';
import Button from './button';
import classNames from 'classnames';
import {ArrowCircleRightIcon} from '@heroicons/react/outline';
import {Disclosure} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/solid';

export function GridListItem({ heading, imgProps, border, bg, href, btnText, children }) {
  return (
    <div
      className={`pb-5 ${bg ? bg : `bg-white`} ${
        border ? `border border-gray-400 rounded-md` : ''
      }`}
    >
      <div className={border ? 'p-5' : ''}>
        {imgProps ? (
          <div className="mt-5 mb-10 w-full h-32 relative">
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
              {btnText ? btnText : 'Learn More'}
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

export function Tag({ id, href, name }) {
  const classes = "font-semibold text-gray-800 no-underline";
  return (
    <span className="text-xs inline-flex items-center leading-sm uppercase px-3 py-1 bg-purple-200 rounded-full">
      {
        href ?
        <Link id={id} href={href}>
          <a className={classes}>{name}</a>
        </Link> : <span className={classes}>{name}</span>
      }
    </span>
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
        'float-right grid grid-cols-1 w-full sm:w-1/3 gap-2 pt-0 pb-3 sm:pl-4',
        { border: border }
      )}
    >
      {children}
    </div>
  );
}

export function RightImage({ children, imgProps, width, height, border, href }) {
  const classes = classNames(
    {
      'float-right pb-5 sm:pl-4 relative': true,
    },
    width ? width : ' w-1/3',
    height ? height : 'h-12'
  );
  return (
    <div className={classes}>
      <CaptionedImage imgProps={imgProps} border={border} href={href}>
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
            <img {...imgProps} className={classNames({ border: border }, 'mb-0')} />
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

export function DropDownCallToAction({ href, children }) {
  return (
    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
      <div className="flow-root">
        <a
          href={href}
          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          <ArrowCircleRightIcon
            className="flex-shrink-0 h-7 w-7 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-3">{children}</span>
        </a>
      </div>
    </div>
  );
}

export function SimpleDisclosure({ buttonText, children }) {
  return (
    <div className="w-full">
      <div className="w-full max-w-lg bg-purple-100 rounded-xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-gray-900 bg-purple-100 rounded-2xl focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{buttonText}</span>
                <ChevronUpIcon
                  className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-1 pb-0.5 text-sm text-gray-600">
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
