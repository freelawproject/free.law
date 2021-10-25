import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BadgeCheckIcon,
  CodeIcon,
  DownloadIcon,
  FireIcon,
  HeartIcon,
  LibraryIcon,
  LightBulbIcon,
  MenuIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';
import { RedButton, WhiteButton } from './button';
import classNames from 'classnames';
import { DropDownCallToAction } from './widgets';

const projects = [
  {
    name: 'CourtListener.com',
    description: 'Our powerful legal research and awareness platform.',
    href: '/projects/courtlistener/',
    imgSrc: '/images/icons/courtlistener.svg',
  },
  {
    name: 'The RECAP Extension',
    description: "Help build the world's largest open collection of PACER filings. Save money too.",
    href: '/recap/',
    imgSrc: '/images/icons/recap.svg',
  },
  {
    name: 'Data Services and Consulting',
    description: 'We can help you gather, analyze, and understand legal information.',
    href: '/data-consulting/',
    icon: LightBulbIcon,
  },
];
const callsToAction = [
  { name: 'Install RECAP', href: '/recap/', icon: DownloadIcon },
  { name: 'How to Help', href: '/donate/other-ways/', icon: FireIcon },
];
const tools = [
  {
    name: 'Legal APIs and Bulk Data',
    description:
      'Gather, monitor, and search state and federal court data, bankruptcy information, parties, opinions, judges, and more.',
    href: 'https://www.courtlistener.com/api/',
    icon: CodeIcon,
  },
  {
    name: 'Database Replication',
    description:
      'Our complete database updated in realtime to your server — All of our work under your roof.',
    href: 'https://www.courtlistener.com/api/replication/',
    imgSrc: '/images/icons/replication.svg',
  },
  {
    name: 'Juriscraper',
    description: 'Battle-hardened open source code to scrape PACER and state court websites.',
    href: '/projects/juriscraper/',
    imgSrc: '/images/icons/juriscraper.svg',
  },
  {
    name: 'Eyecite',
    description:
      'A robust and performant open source library to find and annotate citations in any legal text.',
    href: '/projects/eyecite/',
    imgSrc: '/images/icons/eyecite.svg',
  },
  {
    name: 'X-Ray',
    description: 'A fast and accuratetool to find worthless redactions in PDF files.',
    href: '/projects/x-ray/',
    imgSrc: '/images/icons/x-ray.svg',
  },
];
const datasets = [
  {
    name: 'Reporter Database',
    description:
      'The metadata and abbreviations for nearly every written reporter in American history. The heart of any citation parser.',
    href: '/projects/reporters-db/',
    imgSrc: '/images/icons/reporters-db.svg',
  },
  {
    name: 'Court Data',
    description: 'A collection of court metadata, standardized IDs, and parsers.',
    href: '/projects/courts-db/',
    imgSrc: '/images/icons/courts-db.svg',
  },
  {
    name: 'Judge Portraits',
    description: 'Thousands of portraits of judges you can use in your projects.',
    href: '/projects/judge-pics/',
    icon: UserGroupIcon,
  },
  {
    name: 'Judge Profiles',
    description: 'A rich structured database of judicial information.',
    href: '/projects/judge-db/',
    imgSrc: '/images/icons/judge-db.svg',
  },
  {
    name: 'Supreme Court Data',
    description: 'High quality data about Supreme Court opinions.',
    href: '/projects/supreme-court-data/',
    icon: LibraryIcon,
  },
  {
    name: 'Court Seals',
    description: 'Seals of various courts.',
    href: '/projects/seal-rookery/',
    icon: BadgeCheckIcon,
  },
];
const featuredPosts = [
  {
    name: 'Our Congressional Testimony on Financial Disclosures and Ethics Violations',
    href: '/2021/10/25/flp-congressional-testimony-on-financial-disclosures/',
    id: 1,
  },
  {
    name: 'The Need for a Public Access Law for the Judiciary',
    href: '/2021/03/04/judicial-foia-presentation',
    id: 2,
  },
  {
    name: 'As Bloomberg Imposes Caps, PACER Must Support Academics',
    href: '/2020/04/04/as-bloomberg-law-imposes-caps-on-pacer-access-pacer-must-support-academics/',
    id: 3,
  },
  {
    name: 'Announcing PACER Docket Alerts',
    href: '/2018/08/21/announcing-pacer-docket-alerts-for-journalists-lawyers-researchers-and-the-public/',
    id: 4,
  },
  {
    name: 'Buying PACER Would Cost a Billion Dollars',
    href: '/2016/10/10/pacer-costs-a-billion-dollars/',
    id: 5,
  },
  {
    name: 'FLP Advises Chilean Judicial Modernization Effort',
    href: '/2019/12/05/chile/',
    id: 6,
  },
];

export default function Navbar({ allPosts }) {
  return (
    <Popover className="relative bg-purple-900 border-b-2 border-indigo-700">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-6 lg:space-x-10">
              <div className="flex justify-start font-extralight text-2xl lg:w-0 lg:flex-1 text-white whitespace-nowrap">
                <Link href="/">
                  <a className="font-display tracking-wide font-normal">Free Law Project</a>
                </Link>
              </div>
              <div className="hidden md:flex">
                <div className="relative">
                  <Link href="/about/">
                    <a className="text-xs font-medium uppercase text-gray-100 hover:text-gray-300">
                      About
                    </a>
                  </Link>
                </div>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-end text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Popover.Group as="nav" className="hidden md:flex md:space-x-6 lg:space-x-10">
                {/* Projects */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-300' : 'text-gray-100',
                          'group rounded-md inline-flex items-center text-xs uppercase font-medium hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-purple-900 focus:ring-indigo-500'
                        )}
                      >
                        <span>Projects</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-300' : 'text-gray-100',
                            'ml-1 h-4 w-4 group-hover:text-gray-200'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 left-1/2 -translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {projects.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  {item.icon ? (
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <div className="h-6 w-6 relative flex-shrink-0">
                                      <Image src={item.imgSrc} layout="fill" aria-hidden="true" />
                                    </div>
                                  )}

                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                {/* End Projects */}

                {/* Tools */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-300' : 'text-gray-100',
                          'group rounded-md inline-flex items-center text-xs uppercase font-medium hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-purple-900 focus:ring-indigo-500'
                        )}
                      >
                        <span>Tools</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-300' : 'text-gray-100',
                            'ml-1 h-4 w-4 group-hover:text-gray-200'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 left-1/2 -translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {tools.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  {item.icon ? (
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <div className="h-6 w-6 relative flex-shrink-0">
                                      <Image src={item.imgSrc} layout="fill" aria-hidden="true" />
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <DropDownCallToAction href="https://github.com/freelawproject/">
                              View More Projects on Github
                            </DropDownCallToAction>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                {/* End Tools */}

                {/* Datasets */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-300' : 'text-gray-100',
                          'group rounded-md inline-flex items-center text-xs uppercase font-medium hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-purple-900 focus:ring-indigo-500'
                        )}
                      >
                        <span>Datasets</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-300' : 'text-gray-100',
                            'ml-1 h-4 w-4 group-hover:text-gray-200'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 left-1/2 -translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {datasets.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  {item.icon ? (
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-purple-800"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <div className="h-6 w-6 relative flex-shrink-0">
                                      <Image src={item.imgSrc} layout="fill" aria-hidden="true" />
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                {/* End Datasets */}

                {/* Blog */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-300' : 'text-gray-100',
                          'group rounded-md inline-flex items-center text-xs uppercase hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-purple-900 focus:ring-indigo-500'
                        )}
                      >
                        <span>Blog</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-300' : 'text-gray-100',
                            'ml-1 h-4 w-4 group-hover:text-gray-200'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 py-5 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                  Featured Posts
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {featuredPosts.map((post) => (
                                    <li key={post.id} className="text-base">
                                      <a
                                        href={post.href}
                                        className="font-medium text-gray-900 hover:text-gray-700"
                                      >
                                        {post.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="px-5 py-5 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                  Recent Posts
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {allPosts.slice(0, 5).map(({ id, date, title }) => (
                                    <li key={id} className="text-base">
                                      <a
                                        href={`${id}`}
                                        className="font-medium text-gray-900 hover:text-gray-700"
                                      >
                                        {title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <DropDownCallToAction href="/blog">
                              Read the Full Blog
                            </DropDownCallToAction>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>

              <div className="hidden md:flex items-center justify-end md:flex-1 gap-2">
                <RedButton href="/donate/" extraClasses="inline-flex">
                  <HeartIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  &nbsp;Donate
                </RedButton>
                <WhiteButton href="/recap/" extraClasses="hidden lg:inline-flex">
                  <DownloadIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  &nbsp;Install RECAP
                </WhiteButton>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10 h-full"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <Image
                        className="h-8 w-auto"
                        src="/images/homepage/flip.svg"
                        alt="FLP logo"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                    <div className="grid grid-cols-1 gap-y-4">
                      <a
                        href="/about/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        About
                      </a>
                      <a
                        href="/blog/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Blog
                      </a>

                      <a
                        href="/projects/courtlistener/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        CourtListener
                      </a>
                      <a
                        href="/recap/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        RECAP Project
                      </a>
                      <a
                        href="/data-consulting/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        <span className="hidden sm:inline">Services &amp; </span>Consulting
                      </a>
                      <a
                        href="https://www.courtlistener.com/api/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        APIs and Bulk Data
                      </a>
                      <a
                        href="https://www.courtlistener.com/api/replication/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Data<span className="hidden sm:inline">base</span> Replication
                      </a>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4">
                      <a
                        href="/projects/juriscraper/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Juriscraper
                      </a>
                      <a
                        href="/projects/eyecite/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Eyecite
                      </a>
                      <a
                        href="/projects/x-ray/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        X-Ray
                      </a>
                      {/* Restore this when balance can be created in the small screen navbar columns */}
                      {/*<a*/}
                      {/*  href="/projects/reporters-db/"*/}
                      {/*  className="text-base font-medium text-gray-900 hover:text-gray-700"*/}
                      {/*>*/}
                      {/*  Reporters DB*/}
                      {/*</a>*/}
                      <a
                        href="/projects/courts-db/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Court Data
                      </a>
                      <a
                        href="/projects/judge-pics/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Judge Portraits
                      </a>
                      <a
                        href="/projects/judge-db/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Judge Profiles
                      </a>
                      <a
                        href="/projects/supreme-court-data/"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        SCOTUS Data
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href="/donate/"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                    >
                      <HeartIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                      &nbsp;Support Our Work
                    </a>
                    <a
                      href="/recap/"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-800 bg-white border-gray-500 border"
                    >
                      <DownloadIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                      &nbsp;Install RECAP
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
