import Link from 'next/link';
import Image from 'next/image';
import Layout, { ClientPics, MainColumn, MainFullBleedColumn } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Button, { PurpleButton } from '../components/button';
import { EOYDialog } from '../components/dialog';
import { H2, H3, HeroHeading, HeroHeadingMono } from '../components/headings';
import { GridListItem } from '../components/widgets';
import HeroImage from '../components/heroImage';
import { JudgeRibbon } from '../components/footers';
import { DownloadIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout allPosts={allPostsData} home={true}>
      <NextSeo
        title="Home"
        openGraph={{
          type: 'website',
          url: 'https://free.law/',
        }}
      />
      <main>
        <EOYDialog />

        <HeroImage />

        <MainColumn>
          <section className="flex flex-wrap items-center pt-8 pb-20" id="recap">
            <div className="w-2/3 sm:w-1/2">
              <H2>The RECAP Suite helps you liberate and work with court documents.</H2>
            </div>
            <div className="hidden sm:flex justify-end sm:w-1/2 pl-8 pt-5">
              <Image
                src="/images/homepage/recap.svg"
                alt="The RECAP logo"
                width="350"
                height="207"
              />
            </div>
            <div className="flex sm:hidden justify-end w-1/3 pl-4 relative h-24">
              <Image
                src="/images/icons/medium-color-recap.svg"
                alt="The RECAP logo"
                layout="fill"
              />
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 w-full gap-6 sm:gap-8"
              id="recap-factoids"
            >
              <GridListItem
                border={true}
                heading="RECAP Extensions"
                btnText={'Install RECAP'}
                href="/recap/"
              >
                <p>
                  If you use PACER, install RECAP into your browser. Anything you buy from PACER
                  goes into the{' '}
                  <Link href="https://www.courtlistener.com/recap/">
                    <a className="underline">RECAP Archive</a>
                  </Link>
                  .
                </p>
                <p>Anything somebody else buys is yours free, directly in PACER.</p>
              </GridListItem>
              <GridListItem
                heading="Docket Alerts"
                href="https://www.courtlistener.com/help/alerts/"
                border={true}
              >
                <p>Get alerts when federal dockets are updated by our data gathering systems.</p>
              </GridListItem>
              <GridListItem
                heading="@recap.email Notification Handler"
                border={true}
                href="https://www.courtlistener.com/help/recap/email/"
                btnText={'Get Started'}
              >
                <p>
                  Automatically send us a copy of your CM/ECF notifications so they're part of the
                  searchable public record.
                </p>
                <p>If you get NEF notifications, it only takes a minute to set up.</p>
              </GridListItem>
              <GridListItem
                heading="PACER Fetch"
                href="/2019/11/05/pacer-fetch-api/"
                border={true}
                btnText="Read the Docs"
              >
                <p>
                  Do you need to gather dockets, PDFs or more from PACER? Use our APIs instead of
                  building your own scraper framework.
                </p>
              </GridListItem>
              <GridListItem
                border={true}
                heading="X-Ray Redaction Detector"
                href="/open-source-tools#x-ray/"
              >
                <p>
                  Bad redactions reveal client secrets. X-Ray can help find bad redactions at scale,
                  before they wreak havoc on your firm's reputation.
                </p>
              </GridListItem>
              <GridListItem
                border={true}
                heading="Webhooks for PACER"
                btnText="Get Started"
                href="https://www.courtlistener.com/help/api/webhooks/"
              >
                <p>
                  Automate your workflow by listening to notifications from PACER and CourtListener.
                </p>
              </GridListItem>
            </div>
            <div className="m-auto pt-6">
              <PurpleButton size="lg" href="/recap/" extraClasses="inline-flex">
                <DownloadIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                &nbsp;Install the RECAP Extension Now
              </PurpleButton>
            </div>
          </section>
        </MainColumn>

        <MainFullBleedColumn id="courtlistener" bgClasses="bg-gradient-to-b from-gray-200 to-white">
          <div className="flex flex-wrap py-16">
            <div className="w-2/3 lg:w-1/2 pb-4">
              <H2>
                <Link href="https://www.courtlistener.com/">
                  <a className={'underline'}>CourtListener</a>
                </Link>{' '}
                is our archive of legal opinions, filings, judges, and judicial
                financial&nbsp;records.
              </H2>
            </div>
            <div className="hidden sm:block w-1/3 lg:w-1/2 pl-4 justify-end">
              <div className="w-full lg:w-2/3 float-right">
                <Image
                  src="/images/homepage/full-color-no-free-dot-law.svg"
                  alt="The CourtListener logo"
                  width="400"
                  height="141"
                  layout="responsive"
                  quality="100"
                />
              </div>
            </div>
            <div className="flex sm:hidden justify-end w-1/3 pl-4 relative h-24">
              <Image
                src="/images/icons/medium-color-cl.svg"
                alt="The CourtListener logo"
                layout="fill"
              />
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 w-full gap-6 sm:gap-8 pt-6"
              id="cl-factoids"
            >
              <GridListItem
                heading="PACER Filings and Dockets"
                bg="bg-transparent"
                href="https://www.courtlistener.com/recap/"
                btnText="Search Federal Filings"
              >
                <p>
                  CourtListener has{' '}
                  <Link href="https://www.courtlistener.com/recap/">
                    <a className="underline">the largest free collection</a>
                  </Link>{' '}
                  of federal court documents and dockets on the Internet. Our collection grows every
                  day.
                </p>
                <p>Everything we have is fully searchable and accessible on CourtListener.</p>
              </GridListItem>
              <GridListItem
                heading="Opinions Database"
                bg="bg-transparent"
                href="https://www.courtlistener.com/opinion/"
                btnText="Search Opinions"
              >
                <p>
                  CourtListener.com houses an{' '}
                  <Link href="https://www.courtlistener.com/opinion/">
                    <a className="underline">immense collection</a>
                  </Link>{' '}
                  of searchable orders and opinions.
                </p>
                <p>
                  We gather more opinions from state and federal courts every day, and hope to soon
                  host the first open and comprehensive collection of American case&nbsp;law.
                </p>
              </GridListItem>
              <GridListItem
                heading="Deep Judge Data"
                bg="bg-transparent"
                href="/projects/judge-db/"
              >
                <p>
                  We are creating a groundbreaking database of American magistrates, judges, and
                  justices.
                </p>
                <p>
                  Included in the database is{' '}
                  <Link href="https://www.courtlistener.com/person/">
                    <a className="underline">detailed biographical information</a>
                  </Link>
                  , over a million{' '}
                  <Link href="https://www.courtlistener.com/financial-disclosures/">
                    <a className="underline">disclosure records</a>
                  </Link>
                  , and much&nbsp;more.
                </p>
              </GridListItem>
              <GridListItem
                href="https://www.courtlistener.com/recap/"
                btnText="Search Federal Filings"
                heading="Home of the RECAP Archive"
                bg="bg-transparent"
              >
                <p>
                  Every docket and PDF we have is full-text searchable in the{' '}
                  <Link href="https://www.courtlistener.com/recap/">
                    <a className="underline">RECAP Archive</a>
                  </Link>{' '}
                  on CourtListener.
                </p>
              </GridListItem>

              <GridListItem
                heading="The Most Oral Arguments"
                bg="bg-transparent"
                href="https://www.courtlistener.com/audio/"
                btnText="Search Recordings"
              >
                <p>
                  Courts said they couldn't host oral argument files so we started doing it for
                  them. Now we host{' '}
                  <Link href="https://www.courtlistener.com/audio/">
                    <a className="underline">the biggest collection of oral argument audio</a>
                  </Link>{' '}
                  in the world.
                </p>
                <p>
                  Listen online, subscribe to our podcasts, or{' '}
                  <Link href="https://www.courtlistener.com/podcasts/">
                    <a className="underline">make custom podcasts of your own</a>
                  </Link>
                  .
                </p>
              </GridListItem>
              <GridListItem
                heading="APIs and Bulk Data"
                bg="bg-transparent"
                href="https://www.courtlistener.com/api/"
                btnText="Read the Docs"
              >
                <p>
                  We provide automated access to nearly all of the data we host{' '}
                  <Link href="https://www.courtlistener.com/api/">
                    <a className="underline">
                      via APIs, bulk data files, and database&nbsp;replication
                    </a>
                  </Link>
                  .
                </p>
                <p>This gives innovators, researchers, and the public a jumpstart on their work.</p>
              </GridListItem>
            </div>
          </div>
        </MainFullBleedColumn>

        <MainFullBleedColumn bgClasses="bg-purple-800">
          <div className="pt-16 pb-24  text-gray-100" id="bots">
            <div className="w-full text-center">
              <HeroHeadingMono>Case Bots</HeroHeadingMono>
            </div>
            <div className="w-full pt-3 pb-5">
              <H3 textColor="text-gray-100">
                Our bots will send case updates to Slack, Discord, MS Teams, Google Chat, Bluesky or
                Mastodon. You choose the cases. The bots keep you posted.
              </H3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <GridListItem
                border={true}
                heading="Chat Apps"
                href="https://bots.law/collaboration/"
                btnText="Join the Waitlist"
              >
                <p>
                  We are building bots for all the popular chat platforms so you can get updates and
                  do research right where you work.
                </p>
              </GridListItem>
              <GridListItem
                border={true}
                heading="Big Cases Bot"
                href="https://bots.law/big-cases/about/"
                btnText="Follow the Bot"
              >
                <p>
                  The Big Cases bot follows the most important cases in the country and posts
                  updates on Bluesky and Mastodon.
                </p>
              </GridListItem>
              <GridListItem
                border={true}
                heading="Little Cases Bot"
                btnText="Suggest a Bot"
                href="https://bots.law/little-cases/"
              >
                <p>
                  Create and maintain your own bot for Bluesky or Mastodon that sends updates about
                  cases you think the public should be following.
                </p>
              </GridListItem>
            </div>
          </div>
        </MainFullBleedColumn>

        <JudgeRibbon />

        <MainColumn>
          <section
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-8 md:py-16"
            id="advocacy"
          >
            <div className="pt-10 sm:pt-20 justify-center flex">
              <Image
                src="/images/icons/advocacy.svg"
                alt="A fist holding the scales of justice"
                width="450"
                height="265"
              />
            </div>
            <div className="pt-8 sm:pt-28 text-center">
              <H2>Legal Advocacy</H2>
              <p className="text-left pt-5">
                We work to make the legal system better by changing it from within. Among our
                initiatives are legislation to make PACER free, early research into a FOIA-like law
                for the federal judicial branch, court-by-court efforts to open legal data, and
                pushes to support public access to court&nbsp;records.
              </p>
            </div>
          </section>

          <section className="w-full py-16" id="tools">
            <div className="w-full text-center">
              <HeroHeading>We Build Tools</HeroHeading>
            </div>
            <div className="w-full pt-3 pb-5 text-gray-700">
              <H3>
                To spur innovation in the legal ecosystem, our work is open source and freely
                available. These tools give organizations and researchers a launchpad for
                their&nbsp;innovation.{' '}
                <Link href="https://github.com/freelawproject/">
                  <a className="underline">View our tools on Github</a>
                </Link>
                .
              </H3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-8 w-full">
              <GridListItem
                border={true}
                heading="APIs and Replication"
                imgProps={{
                  src: '/images/icons/replication.svg',
                  alt: 'Replication logo',
                }}
                href="https://www.courtlistener.com/api/"
              >
                <p>
                  We provide APIs for opinions, filings, judges, financial disclosures, and more.
                  For power users, we share our entire database, updated in&nbsp;realtime.
                </p>
              </GridListItem>
              <GridListItem
                border={true}
                heading="Juriscraper"
                imgProps={{
                  src: '/images/icons/juriscraper.svg',
                  alt: 'Juriscraper logo',
                }}
                href="/open-source-tools#juriscraper"
              >
                <p>
                  Juriscraper is a scraping library written in Python that gathers data from
                  hundreds of courts each&nbsp;day.
                </p>
              </GridListItem>
              <GridListItem
                border={true}
                heading="Eyecite"
                imgProps={{
                  src: '/images/icons/eyecite.svg',
                  alt: 'Eyecite logo',
                }}
                href="/open-source-tools#eyecite/"
              >
                <p>
                  Eyecite uses our database of thousands of reporters to find even the most esoteric
                  legal citations in any block of&nbsp;text.
                </p>
              </GridListItem>
            </div>
          </section>
        </MainColumn>

        <MainFullBleedColumn bgClasses="bg-purple-800">
          <div className="pt-16 pb-24  text-gray-100" id="datasets">
            <div className="w-full text-center">
              <HeroHeading>We Build Datasets</HeroHeading>
            </div>
            <div className="w-full pt-3 pb-5">
              <H3 textColor="text-gray-100">
                Centuries of legal data needs curation and clean up before it can be used and
                understood. Unfortunately, this work is done over and over again.{' '}
                <span className="font-bold">Enough.</span> We take raw legal data and make it into
                open&nbsp;datasets.
              </H3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <GridListItem
                border={true}
                heading="Reporters Database"
                imgProps={{
                  src: '/images/icons/reporters-db.svg',
                  alt: 'Reporter database logo',
                }}
                href="/projects/reporters-db/"
              >
                <p>
                  Our database of reporters has information about more than 700 reporters, with more
                  than 1,400 name variations. Build citators, normalize citations, and&nbsp;more.
                </p>
              </GridListItem>
              <GridListItem
                border={true}
                heading="Courts Database"
                imgProps={{
                  src: '/images/icons/courts-db.svg',
                  alt: 'Courts database logo',
                }}
                href="/projects/courts-db/"
              >
                <p>
                  Tested on a dataset of 16 million opinions, this tool will help you identify any
                  court by name, past or&nbsp;present.
                </p>
              </GridListItem>
              <GridListItem
                border={true}
                heading="Judges Database"
                imgProps={{
                  src: '/images/icons/judge-db.svg',
                  alt: 'Judges database logo',
                }}
                href="/projects/judge-db/"
              >
                <p>
                  Financial disclosures, appointors, biographical data, schools, jobs, campaign
                  contributions, and more for thousands of state and federal&nbsp;judges.
                </p>
              </GridListItem>
            </div>
          </div>
        </MainFullBleedColumn>

        <MainColumn>
          <section className="w-full py-16" id="testimonials">
            <div className="text-center">
              <H2>You're in Good Company</H2>
              <div className="w-3/4 pt-5 m-auto">
                <H3>
                  When you need legal data, we can help. We work with journalists, researchers, and
                  organizations large and small to get the data they&nbsp;need.
                </H3>
              </div>
            </div>

            <ClientPics wide={true} />

            <div className="justify-center flex pt-8">
              <PurpleButton size="lg" href="/data-consulting/">
                Learn about our Data Services
              </PurpleButton>
            </div>
          </section>
        </MainColumn>

        <MainFullBleedColumn bgClasses="bg-smile">
          <div className="pt-16 pb-24 text-gray-100" id="support-us">
            <div className="px-10 text-center">
              <H2>Like what you see? Please support our work.</H2>
            </div>
            <div className="flex justify-center gap-8 pt-8">
              <Button href="/become-a-sponsor/" extraClasses="bg-white text-gray-800">
                Organizational Support
              </Button>
              <Button href="/donate/" extraClasses="w-48 bg-red-600 hover:bg-red-700">
                Donate Now
              </Button>
            </div>
          </div>
        </MainFullBleedColumn>
      </main>
    </Layout>
  );
}
