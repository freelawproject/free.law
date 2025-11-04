import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  DownloadIcon,
  FireIcon,
  HeartIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';
import { RedButton, WhiteButton } from './button';
import classNames from 'classnames';
import { DropDownCallToAction } from './widgets';

const about = [
  {
    name: 'About Free Law Project',
    href: '/about/',
  },
  {
    name: 'Team',
    href: '/team/',
  },
  {
    name: 'Conference Presentations & Press',
    href: '/presentations/',
  },
  {
    name: 'Non-Profit Documents',
    href: '/non-profit-documents/',
  },
];

const tools = [
  {
    name: 'CourtListener.com',
    description: 'Our powerful legal research and awareness platform.',
    href: '/projects/courtlistener/',
    imgSrc: '/images/icons/medium-color-cl.svg',
  },
  {
    name: 'RECAP Suite',
    description: "Help build the world's largest open collection of PACER filings. Save money too.",
    href: '/recap/',
    imgSrc: '/images/icons/medium-color-recap.svg',
  },
  {
    name: 'Bots.law',
    description:
      'Home of the Big Cases bot, Little Cases bot and bots to keep you updated wherever you chat.',
    href: 'https://bots.law/',
    imgSrc: '/images/icons/medium-color-bots.svg',
  },
  {
    name: 'Open Source Tools',
    description:
      'Our collection of open source tools for legal data and research needs.',
    href: '/open-source-tools/',
    imgSrc: '/images/icons/placeholder-black-circle.svg',
  },
];
const callsToAction = [
  { name: 'Install RECAP', href: '/recap/', icon: DownloadIcon },
  { name: 'How to Help', href: '/donate/other-ways/', icon: FireIcon },
];
const data = [
  {
    name: 'Our Data Services',
    description:
      'Gather, monitor, and search state and federal court data, bankruptcy information, parties, opinions, judges, and more.',
    href: 'https://www.courtlistener.com/help/api/',
    imgSrc: '/images/icons/data-services.svg',
  },
  {
    name: 'Legal APIs',
    description:
      'We have APIs for opinions, filings, judges, financial disclosures, and more.',
    href: 'https://www.courtlistener.com/help/api/rest/',
    imgSrc: '/images/icons/apis.svg',
  },
    {
    name: 'Bulk Data',
    description:
      'Our bulk data files provide large quantities of data from our case law, judge, financial disclosure, and oral argument databases.',
    href: 'https://www.courtlistener.com/help/api/bulk-data/',
    imgSrc: '/images/icons/placeholder-black-circle.svg',
  },
  {
    name: 'Database Replication',
    description:
      'Our complete database updated in realtime to your server — All of our work under your roof.',
    href: 'https://www.courtlistener.com/api/replication/',
    imgSrc: '/images/icons/placeholder-black-circle.svg',
  },
    {
    name: 'Datasets',
    description:
      'Our open datasets are some of the largest on the internet.',
    href: '/datasets/',
    imgSrc: '/images/icons/placeholder-black-circle.svg',
  },
];

const engage = [
  {
    name: 'How We Work with Startups',
    href: '/startups/',
  },
  {
    name: 'Librarian Guide',
    href: '/librarians/',
  },
  {
    name: 'Volunteer',
    href: '/volunteer/',
  },
  {
    name: 'Join our Newsletter',
    href: 'https://donate.free.law/np/clients/freelawproject/subscribe.jsp?subscription=9',
  },
];

const featuredPosts = [
  {
    name: 'All the Case Law.',
    href: '/2024/03/26/all-the-case-law',
    id: 1,
  },
  {
    name: 'We Need a Public Access Law for the Judiciary',
    href: '/2021/03/04/judicial-foia-presentation',
    id: 2,
  },
  {
    name: "FLP's Testimony on Financial Disclosures and Ethics Violations",
    href: '/2021/10/25/flp-congressional-testimony-on-financial-disclosures/',
    id: 3,
  },
  {
    name: 'Combat AI Hallucinations with our New API',
    href: '/2024/04/16/citation-lookup-api/',
    id: 4,
  },
  {
    name: 'Buying PACER Would Cost a Billion Dollars',
    href: '/2016/10/10/pacer-costs-a-billion-dollars/',
    id: 5,
  },
  {
    name: 'PACER Must Support Academics',
    href: '/2020/04/04/as-bloomberg-law-imposes-caps-on-pacer-access-pacer-must-support-academics/',
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
                <a href="/" className=" hidden md:flex xl:hidden">
                  <Image
                    src="/images/logos/flp/flp-medium-white.svg"
                    alt="FLP logo"
                    width="64"
                    height="79"
                  />
                </a>
                <a href="/" className="md:hidden xl:flex">
                  <Image
                    src="/images/logos/flp/full-logo-white.svg"
                    alt="FLP logo"
                    width="190"
                    height="79"
                  />
                </a>
              </div>

              {/* Mobile Popover Menu Trigger Button */}
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-end text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/* End Mobile Popover Menu Trigger Button */}

              {/* Desktop Toolbar */}
              <Popover.Group as="nav" className="hidden md:flex md:space-x-6 lg:space-x-10">
                {/* About */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-300' : 'text-gray-100',
                          'group rounded-md inline-flex items-center text-xs uppercase font-medium hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-purple-900 focus:ring-indigo-500'
                        )}
                      >
                        <span>About</span>
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
                          className="absolute lg:left-1/2 lg:-translate-x-1/2 z-10 mt-3 transform w-screen max-w-xs rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 grid bg-white gap-2 py-5 px-4"
                        >
                          {about.map((item) => (
                            <Link
                              href={item.href}
                              key={item.name}
                            >
                              <a className="rounded-lg py-3 px-4 hover:bg-gray-50 text-base font-medium text-gray-900">
                                {item.name}
                              </a>
                            </Link>
                          ))}
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                {/* End About */}

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
                                    <div className="h-8 w-8 relative flex-shrink-0">
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
                {/* End Tools */}

                {/* Data */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-300' : 'text-gray-100',
                          'group rounded-md inline-flex items-center text-xs uppercase font-medium hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-purple-900 focus:ring-indigo-500'
                        )}
                      >
                        <span>Data</span>
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
                              {data.map((item) => (
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
                                    <div
                                      className={`${
                                        item.icon_height ? item.icon_height : 'h-6'
                                      } w-6 relative flex-shrink-0`}
                                    >
                                      <img src={item.imgSrc} aria-hidden="true" />
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
                {/* End Data */}

                {/* Engage */}
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-300' : 'text-gray-100',
                          'group rounded-md inline-flex items-center text-xs uppercase font-medium hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-purple-900 focus:ring-indigo-500'
                        )}
                      >
                        <span>Data</span>
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
                              {engage.map((item) => (
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
                {/* End Engage */}

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
              {/* End Desktop Toolbar */}
            </div>
          </div>

          {/* Mobile Popover Menu */}
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
                        src="/images/logos/flp/flp-medium-black.svg"
                        alt="FLP logo"
                        width="79"
                        height="79"
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
                        href="/open-source-tools#juriscraper"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Juriscraper
                      </a>
                      <a
                        href="/open-source-tools#eyecite"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Eyecite
                      </a>
                      <a
                        href="/open-source-tools#x-ray"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        X-Ray
                      </a>
                      {/* Restore this when balance can be created in the small screen navbar columns */}
                      {/*<a*/}
                      {/*  href="/datasets#reporters-db"*/}
                      {/*  className="text-base font-medium text-gray-900 hover:text-gray-700"*/}
                      {/*>*/}
                      {/*  Reporters DB*/}
                      {/*</a>*/}
                      <a
                        href="/datasets#courts-db"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Court Data
                      </a>
                      <a
                        href="/datasets#judges-portraits"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Judge Portraits
                      </a>
                      <a
                        href="/datasets#judges-db"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Judge Profiles
                      </a>
                      <a
                        href="/datasets#supreme-court-data"
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
          {/* End Mobile Popover Menu */}
        </>
      )}
    </Popover>
  );
}
