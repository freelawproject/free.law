import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import { Raleway, Libre_Caslon_Text, IBM_Plex_Mono } from 'next/font/google';
import { getSortedPostsData } from '../lib/posts';
import { Colophon, Footer, JudgeRibbon } from '../components/footers';
import NeonFormEmbed from '../components/neonFormEmbed';

// Campaign fonts, loaded only on this page and exposed as CSS variables.
// Raleway is only used for the stat numbers; everything else display-y is the site's Cooper Hewitt.
const raleway = Raleway({ subsets: ['latin'], weight: '900', variable: '--font-raleway' });
const caslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-caslon',
});
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: '500', variable: '--font-plex-mono' });

const PAGE_URL = 'https://free.law/2026-match/';
const SHARE_TITLE = 'Support Free Law Project';
const SHARE_DESCRIPTION =
  'Donate now to support CourtListener, RECAP, and other projects. Help build a more open and ' +
  'equitable justice system. Give before December 31 and your donation will be matched up to $50,000.';
const SHARE_IMAGE_ALT =
  'Support Free Law Project. For CourtListener, RECAP, and an open, equitable justice system. ' +
  'Gifts matched up to $50,000 through December 31.';

const NEON_FORM_SCRIPT = 'https://donate.free.law/forms/share/Rk9STS1FTUJFRFNIQVJJTkctQ09ERTcw';
const NEON_FORM_URL = 'https://donate.free.law/forms/2026-match';

// Shared class lists
const DISPLAY = 'font-display';
const RALEWAY = 'font-[family-name:var(--font-raleway)]';
const MONO = 'font-[family-name:var(--font-plex-mono)] font-medium';
const HEADING = `${DISPLAY} font-extrabold tracking-[.01em] leading-[1.06] text-balance m-0`;
const COLUMN = 'max-w-[44rem] mx-auto px-4';
const BUTTON =
  `inline-block ${DISPLAY} font-extrabold text-[1.3rem] px-[2.1rem] py-4 rounded-[.7rem] no-underline ` +
  'transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-[#d4b6d8] ' +
  'focus-visible:outline-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0';
const LINK =
  'text-[#66306a] font-bold underline decoration-2 underline-offset-[3px] hover:text-[#3e1d40]';

export async function getStaticProps() {
  return { props: { allPostsData: await getSortedPostsData() } };
}

export default function MatchCampaign({ allPostsData }) {
  return (
    <>
      <Head>
        {/* Not passed to generateNextSeo so the site-wide title template isn't appended */}
        <title>{SHARE_TITLE}</title>
        {generateNextSeo({
          description: SHARE_DESCRIPTION,
          openGraph: {
            type: 'website',
            url: PAGE_URL,
            title: SHARE_TITLE,
            images: [
              {
                url: 'https://free.law/images/2026-match/share-1200x630.png',
                width: 1200,
                height: 630,
                alt: SHARE_IMAGE_ALT,
              },
            ],
          },
          twitter: { cardType: 'summary_large_image' },
        })}
      </Head>

      <main
        className={`${raleway.variable} ${caslon.variable} ${plexMono.variable} font-[family-name:var(--font-caslon)] text-[1.125rem] leading-[1.55] text-[#121014] antialiased`}
      >
        {/* Hero */}
        <section className="bg-[#121014] bg-[radial-gradient(60rem_30rem_at_85%_0%,rgba(102,48,106,.55),transparent_70%)] text-white border-b-[6px] border-[#66306a] pt-7 pb-[6.5rem]">
          <div className={`${COLUMN} grid gap-4`}>
            <div className="flex justify-center mb-2">
              <a
                href="/"
                aria-label="Free Law Project home"
                className="block rounded focus-visible:outline-3 focus-visible:outline-[#d4b6d8] focus-visible:outline-offset-4"
              >
                <img
                  src="/images/logos/flp/full-logo-white.svg"
                  alt="Free Law Project"
                  className="block w-36 h-auto"
                />
              </a>
            </div>
            <h1 className={`${HEADING} text-[clamp(2.3rem,7.5vw,4.2rem)] text-center`}>
              Double your gift. <span className="block text-[#d4b6d8]">Up to $50,000.</span>
            </h1>
            <p className="italic text-[clamp(1.1rem,2.6vw,1.35rem)] leading-[1.45] m-0 max-w-[40ch] justify-self-center">
              Donate to Free Law Project between now and the end of the year and your donation will
              be <b className="font-bold">matched up to $50,000</b>.
            </p>
          </div>
        </section>

        {/* Donation form */}
        <section id="give" className="bg-white pb-4">
          {/* grid keeps the card's negative margin from collapsing through the section */}
          <div className={`${COLUMN} grid`}>
            <div className="-mt-20 bg-white border-2 border-[#121014] rounded-[1.25rem] p-5 grid gap-4 shadow-[0_1.25rem_2.5rem_-1.25rem_rgba(42,18,48,.35)]">
              <div className={`${MONO} text-[.8rem] tracking-[.14em] uppercase text-center`}>
                Matched up to $50,000 through December 31
              </div>
              <NeonFormEmbed
                src={NEON_FORM_SCRIPT}
                fallback={
                  <div className="bg-[#f4f3f5] rounded-2xl p-7 grid gap-4 justify-items-center text-center">
                    <p className="m-0 italic">
                      Give through our secure matching-gift form. Every dollar is matched up to
                      $50,000.
                    </p>
                    <a
                      href={NEON_FORM_URL}
                      className={`${BUTTON} bg-[#121014] text-white hover:bg-[#66306a]`}
                    >
                      Double my gift
                    </a>
                  </div>
                }
              />
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="pt-14 pb-[4.5rem]">
          <div className={`${COLUMN} grid gap-9`}>
            <h2 className={`${HEADING} text-[clamp(1.9rem,5.5vw,2.9rem)] text-center`}>
              Have an even bigger impact on creating a{' '}
              <em className="font-[family-name:var(--font-caslon)] font-normal text-[#66306a] tracking-normal">
                free and accessible
              </em>{' '}
              legal system.
            </h2>
            <p className="italic text-xl m-0 text-center">Your donation helps us:</p>
            <div className="grid grid-cols-1 min-[30rem]:grid-cols-2 gap-4">
              <Stat value="250M+" label="Court records online" />
              <Stat value="10M+" label="Monthly visitors" />
            </div>
            <ul className="list-none m-0 p-0 grid border-t-2 border-[#121014]">
              <Goal title="Support the RECAP extension">to liberate PACER documents for all.</Goal>
              <Goal title="Build and maintain CourtListener" comma>
                helping journalists, researchers, and the public understand our courts.
              </Goal>
              <Goal title="Support our Justice Initiatives" comma>
                building tech to help people representing themselves in court.
              </Goal>
            </ul>
          </div>
        </section>

        {/* Statement */}
        <section className="bg-[#121014] text-white py-[4.5rem]">
          <div className={COLUMN}>
            <p className={`${HEADING} text-[clamp(2.1rem,6.5vw,3.6rem)] text-center`}>
              We need your help to expand access to the legal system{' '}
              <span className="text-[#d4b6d8]">in 2027.</span>
            </p>
            <div className="flex justify-center">
              <a
                href="#give"
                className={`${BUTTON} mt-8 bg-white text-[#2a1230] hover:bg-[#d4b6d8]`}
              >
                Double my gift
              </a>
            </div>
          </div>
        </section>

        {/* Program expenses chart */}
        <section className="py-[4.5rem] bg-white border-t-2 border-[#121014]">
          <div className={`${COLUMN} grid gap-10 justify-items-center text-center`}>
            <ProgramDonut />
            <div
              className={`${MONO} flex flex-col items-start min-[30rem]:flex-row min-[30rem]:flex-wrap min-[30rem]:justify-center gap-x-7 gap-y-3 text-[.85rem]`}
            >
              <LegendItem color="bg-[#66306a]">Program 85.5%</LegendItem>
              <LegendItem color="bg-[#d4b6d8]">
                Administration, support, &amp; fundraising 14.5%
              </LegendItem>
            </div>
            <p className="text-[clamp(1.3rem,3.6vw,1.7rem)] italic leading-[1.4] m-0 max-w-[30ch] text-balance">
              When you support Free Law Project,{' '}
              <b className={`not-italic ${DISPLAY} font-black text-[#66306a]`}>85.5%</b> of your
              donation directly covers our program expenses.
            </p>
          </div>
        </section>

        {/* Other ways to give */}
        <section className="bg-[#f4f3f5] pt-12 pb-14 border-t-2 border-[#121014]">
          <div className={`${COLUMN} grid gap-4 text-base leading-[1.6]`}>
            <p className={`m-0 max-w-[62ch] ${DISPLAY} font-extrabold text-[1.15rem] leading-[1.4]`}>
              Questions about major gifts, donor-advised funds, other gifts, or sponsorships?
              Contact{' '}
              <a className={LINK} href="mailto:donate@free.law">
                donate@free.law
              </a>
              .
            </p>
            <p className="m-0 max-w-[62ch]">
              CourtListener and RECAP are run by Free Law Project, a U.S. 501(c)(3) nonprofit, tax
              ID #46-3342480. You can read more about our{' '}
              <a className={LINK} href="/about/">
                mission and history
              </a>
              , and our{' '}
              <a className={LINK} href="/non-profit-documents/">
                tax returns
              </a>{' '}
              are available for public inspection.
            </p>
          </div>
        </section>
      </main>

      <div className="text-gray-800 font-display">
        <Footer recentPost={allPostsData[0]} />
        <Colophon />
        <JudgeRibbon />
      </div>

      {/* Plausible */}
      <script
        defer
        data-domain="free.law"
        src="https://plausible.io/js/plausible.outbound-links.js"
      />
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-[#121014] rounded-2xl py-6 px-[1.4rem] grid gap-[.35rem] content-start justify-items-center text-center">
      <div
        className={`${RALEWAY} font-black text-[clamp(2.6rem,9vw,4rem)] leading-none text-white tracking-[-.03em] lining-nums tabular-nums`}
      >
        {value}
      </div>
      <div className={`${MONO} text-[.8rem] tracking-[.1em] uppercase text-[#d4b6d8]`}>
        {label}
      </div>
    </div>
  );
}

function Goal({ title, comma, children }) {
  return (
    <li className="py-[1.35rem] border-b-2 border-[#121014]">
      <strong className={`block ${DISPLAY} font-black text-[1.6rem] leading-[1.1]`}>
        {title}
        {comma && <span className="sr-only">,</span>}
      </strong>
      <span className="text-[1.1rem]">{children}</span>
    </li>
  );
}

function LegendItem({ color, children }) {
  return (
    <span className="inline-flex items-start gap-[.55rem] text-left">
      <i className={`flex-none w-[.9rem] h-[.9rem] rounded-[.2rem] mt-[.15em] ${color}`} />
      {children}
    </span>
  );
}

function ProgramDonut() {
  return (
    <svg
      className="w-[min(20rem,80vw)] h-auto block"
      viewBox="0 0 42 42"
      role="img"
      aria-labelledby="donut-title"
    >
      <title id="donut-title">
        85.5% program expenses, 14.5% administration, support, and fundraising
      </title>
      <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#d4b6d8" strokeWidth="6" />
      <circle
        cx="21"
        cy="21"
        r="15.9155"
        fill="none"
        stroke="#66306a"
        strokeWidth="6"
        strokeDasharray="85.5 14.5"
        strokeDashoffset="25"
      />
      <g className={`${DISPLAY} fill-[#121014]`}>
        <text x="21" y="22.3" textAnchor="middle" fontSize="7.4" fontWeight="900">
          85.5%
        </text>
        <text
          x="21"
          y="27.2"
          textAnchor="middle"
          fontSize="2.3"
          fontWeight="600"
          letterSpacing=".25"
        >
          TO PROGRAMS
        </text>
      </g>
    </svg>
  );
}
