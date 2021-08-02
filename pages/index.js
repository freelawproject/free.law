import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import Layout, {
  ClientPics,
  MainColumn,
  MainFullBleedColumn,
} from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import Button, {PurpleButton} from "../components/button";
import {H2, H3, HeroHeading} from "../components/headings";
import {GridListItem, SearchButtons} from "../components/widgets";
import HeroImage from "../components/heroImage";
import {JudgeRibbon} from "../components/footers";
import {DownloadIcon} from "@heroicons/react/outline";


export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <>
      <Layout allPosts={allPostsData} home={true}>
        <main>
          <Head>
            <title>Free Law Project</title>
          </Head>

          <HeroImage/>

          <MainColumn>
            <section className="flex flex-wrap items-center pt-8 pb-20"
                     id="recap">
              <div className="w-2/3 sm:w-1/2">
                <H2><Link href="/recap/"><a className="underline">RECAP</a></Link> is our tool to put federal court documents
                  in your&nbsp;hands.</H2>
              </div>
              <div className="hidden sm:block justify-end sm:w-1/2 pl-8 pt-5">
                <Image src="/images/homepage/recap.png"
                       alt="The RECAP logo"
                       width="350"
                       height="207"
                />
              </div>
              <div
                className="flex sm:hidden justify-end w-1/3 pl-4 relative h-24">
                <Image src="/images/icons/recap.svg"
                       alt="The RECAP logo"
                       layout="fill"/>
              </div>
              <div className="w-full pt-3 pb-6 text-gray-700">
                <H3>Using a searchable archive of documents and browser extensions for Firefox or Chrome, RECAP improves PACER, the electronic public access system for
                  federal court&nbsp;documents.</H3>
              </div>
              <div
                className="grid grid-cols-1 sm:grid-cols-3 w-full gap-6 sm:gap-8"
                id="recap-factoids">
                <GridListItem heading="Automatic Sharing">
                  <p>Install the RECAP extension into Firefox or Chrome to
                    automatically share your PACER&nbsp;purchases.</p>
                </GridListItem>
                <GridListItem heading="Get Free Documents">
                  <p>Once installed, millions of PACER documents contributed by
                    others become freely available right in PACER as you
                    use&nbsp;it.</p>
                  <p className="hidden sm:block">Thousands more are contributed
                    every day.</p>
                </GridListItem>
                <GridListItem heading="A Searchable Database">
                  <p>Every docket and PDF you share is OCR’ed and is made
                    searchable in the <Link
                      href="https://www.courtlistener.com/recap/"><a
                      className="underline">RECAP
                      Archive</a></Link> on&nbsp;CourtListener.</p>
                </GridListItem>
              </div>
              <div className="m-auto pt-6">
                <PurpleButton size="lg" href="/recap/"
                        extraClasses="inline-flex">
                  <DownloadIcon className="flex-shrink-0 h-5 w-5"
                                aria-hidden="true"/>&nbsp;Install the RECAP
                  Extension Now
                </PurpleButton>
              </div>
            </section>
          </MainColumn>

          <MainFullBleedColumn id="courtlistener"
                               bgClasses="bg-gradient-to-b from-gray-200 to-white">
            <div className="flex flex-wrap py-16">
              <div className="w-2/3 lg:w-1/2 pb-4">
                <H2><Link href="https://www.courtlistener.com/"><a className={"underline"}>CourtListener</a></Link> is our archive of legal opinions, filings,
                  and&nbsp;judges.</H2>
                <div className="hidden md:block">
                  <SearchButtons/>
                </div>
              </div>
              <div className="hidden sm:flex w-1/3 lg:w-1/2 pl-8 justify-end">
                <Image src="/images/homepage/courtlistener-stacked.svg"
                       alt="The CourtListener logo"
                       width="400"
                       height="141"
                />
              </div>
              <div
                className="flex sm:hidden justify-end w-1/3 pl-4 relative h-24">
                <Image src="/images/icons/courtlistener.svg"
                       alt="The CourtListener logo"
                       layout="fill"/>
              </div>
              <div className="w-full md:hidden">
                <SearchButtons/>
              </div>
              <div
                className="grid grid-cols-1 sm:grid-cols-3 w-full gap-6 sm:gap-8 pt-6"
                id="cl-factoids">
                <GridListItem heading="Opinions Database" bg="bg-transparent">
                  <p>CourtListener.com houses an <Link href="https://www.courtlistener.com/opinion/"><a className="underline">immense collection</a></Link> of
                    searchable orders and opinions.</p>
                  <p>We gather more opinions from state and federal courts
                    every day, and hope to soon host the first open and
                    complete collection of American case&nbsp;law.</p>
                </GridListItem>
                <GridListItem heading="PACER Filings and Dockets"
                              bg="bg-transparent">
                  <p>CourtListener has <Link href="https://www.courtlistener.com/recap/"><a className="underline">the largest free collection</a></Link> of federal court
                    documents and dockets on the Internet and our collection
                    grows every day.</p>
                  <p>Everything we have is fully searchable and accessible on
                    CourtListener.</p>
                </GridListItem>
                <GridListItem heading="Docket Alerts" bg="bg-transparent">
                  <p>Beyond the RECAP extension, CourtListener uses <Link
                    href="https://www.courtlistener.com/coverage/#recap-archive"><a
                    className="underline">a number of sources</a></Link> to
                    gather new content from PACER.</p>
                  <p>Sign up to get alerts when dockets are updated by other
                    users or one of our data gathering&nbsp;systems.</p>
                </GridListItem>
                <GridListItem heading="The Most Oral Arguments"
                              bg="bg-transparent">
                  <p>When courts said they couldn't host oral argument files,
                    we started doing it for them. We now have <Link
                      href="https://www.courtlistener.com/audio/"><a
                      className="underline">the biggest open collection of oral
                      argument audio</a></Link> in the world.</p>
                  <p>Listen online, subscribe to our podcasts, or <Link
                    href="https://www.courtlistener.com/podcasts/"><a
                    className="underline">make custom podcasts of your own</a></Link>.
                  </p>
                </GridListItem>
                <GridListItem heading="APIs and Bulk Data" bg="bg-transparent">
                  <p>We provide numerous journalists, researchers, startups,
                    and individuals with automated access to nearly all of our
                    data <Link href="https://www.courtlistener.com/api/"><a className="underline">via APIs, bulk data files, and
                      database&nbsp;replication</a></Link>.</p>
                  <p>This gives innovators, researchers, and the public a jump
                    start on their work.</p>
                </GridListItem>
                <GridListItem heading="Permanent Preservation"
                              bg="bg-transparent">
                  <p>We upload information to the <Link
                    href="https://archive.org"><a className="underline">Internet
                    Archive</a></Link> around the clock so that no matter what
                    happens, important court records will always
                    be&nbsp;available.</p>
                </GridListItem>
              </div>
            </div>
          </MainFullBleedColumn>

          <JudgeRibbon/>

          <MainColumn>
            <section
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-8 md:py-16"
              id="advocacy">
              <div className="pt-10 sm:pt-20 justify-center flex">
                <Image src="/images/icons/advocacy.svg"
                       alt="A fist holding the scales of justice"
                       width="450"
                       height="265"
                />
              </div>
              <div className="pt-8 sm:pt-28 text-center">
                <H2>Legal Advocacy</H2>
                <p className="text-left pt-5">We work to make the legal system
                  better by changing it from within. Among our initiatives is
                  legislation to make PACER free, early research into a
                  FOIA-like law for the federal judicial branch, court-by-court
                  efforts to open up legal data, and several pushes to support
                  public access to court&nbsp;records.
                </p>
              </div>
            </section>

            <section className="w-full py-16" id="tools">
              <div className="w-full text-center">
                <HeroHeading>We Build Tools</HeroHeading>
              </div>
              <div className="w-full pt-3 pb-5 text-gray-700">
                <H3>
                  To spur innovation in the legal ecosystem, all of our work is
                  open source and freely available. These tools give
                  organizations and researchers a launchpad for
                  their&nbsp;innovation.
                  {' '}<Link href="https://github.com/freelawproject/">
                  <a className="underline">View all of our tools on Github</a>
                </Link>.
                </H3>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-8 w-full">
                <GridListItem border={true}
                              heading="APIs and Replication"
                              imgProps={{
                                "src": "/images/icons/replication.svg",
                                "alt": "Replication logo",

                              }}
                              href="https://www.courtlistener.com/api/">
                  <p>We provide APIs for opinions, filings, judges, financial
                    disclosures, and more. For power users we share our whole
                    database updated in&nbsp;realtime.</p>
                </GridListItem>
                <GridListItem border={true}
                              heading="Juriscraper"
                              imgProps={{
                                "src": "/images/icons/juriscraper.svg",
                                "alt": "Juriscraper logo",
                              }}
                              href="/projects/juriscraper/">
                  <p>Juriscraper is a scraping library written in Python that
                    gathers data from hundreds of courts each&nbsp;day.</p>
                </GridListItem>
                <GridListItem border={true}
                              heading="Eyecite"
                              imgProps={{
                                "src": "/images/icons/eyecite.svg",
                                "alt": "Eyecite logo",
                              }}
                              href="/projects/eyecite/">
                  <p>Eyecite uses our database of thousands of reporters to
                    find even the most esoteric legal citations in any block
                    of&nbsp;text.</p>
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
                  Centuries of legal data needs curation and clean up before it
                  can be used and understood. Unfortunately, this work is done
                  over and over again. <span
                  className="font-bold">Enough.</span> We take raw legal data
                  and make it into open&nbsp;datasets.
                </H3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <GridListItem border={true}
                              heading="Reporters Database"
                              imgProps={{
                                "src": "/images/icons/reporters-db.svg",
                                "alt": "Reporter database logo",
                              }}
                              href="/projects/reporters-db/">
                  <p>Our database of reporters has information about more than
                    700 reporters, with more than 1,400 name variations. Build
                    citators, normalize citations, and&nbsp;more.</p>
                </GridListItem>
                <GridListItem border={true}
                              heading="Courts Database"
                              imgProps={{
                                "src": "/images/icons/courts-db.svg",
                                "alt": "Courts database logo",
                              }}
                              href="/projects/courts-db/">
                  <p>Tested on a dataset of 16 million opinions, this tool will
                    help you identify any court by name, past
                    or&nbsp;present.</p>
                </GridListItem>
                <GridListItem border={true}
                              heading="Judge Database"
                              imgProps={{
                                "src": "/images/icons/judge-db.svg",
                                "alt": "Judge database logo",
                              }}
                              href="/projects/judge-db/">
                  <p>Financial disclosures, appointors, biographical data,
                    schools, jobs, campaign contributions, and more for
                    thousands of state and federal&nbsp;judges.</p>
                </GridListItem>
              </div>
            </div>
          </MainFullBleedColumn>

          <MainColumn>
            <section className="w-full py-16" id="testimonials">
              <div className="text-center">
                <H2>You're in Good Company</H2>
                <div className="w-3/4 pt-5 m-auto">
                  <H3>When you need legal data, we can help. We work with
                    journalists, researchers, and organizations large and small
                    to get the data they&nbsp;need.</H3>
                </div>
              </div>

              <ClientPics wide={true}/>

              <div className="justify-center flex">
                <PurpleButton size="lg" href="/data-consulting/">Learn
                  about our Data Services</PurpleButton>
              </div>
            </section>
          </MainColumn>

          <MainFullBleedColumn bgClasses="bg-smile">
            <div className="pt-16 pb-24 text-gray-100" id="support-us">
              <div className="px-10 text-center">
                <H2>Like what you see? Please support our work.</H2>
              </div>
              <div className="flex justify-center gap-8 pt-8">
                <Button href="/become-a-sponsor/"
                        extraClasses="bg-white text-gray-800">
                  Organizational Support
                </Button>
                <Button href="/donate/"
                        extraClasses="w-48 bg-red-600 hover:bg-red-700">
                  Donate Now
                </Button>
              </div>
            </div>
          </MainFullBleedColumn>
        </main>
      </Layout>
    </>
  )
}
