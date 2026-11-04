import Head from 'next/head';
import Link from 'next/link';
import { generateNextSeo } from 'next-seo/pages';
import Layout, { MainColumn } from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';
import {
  Card,
  GreenButton,
  JIHero,
  Principle,
  SectionIntro,
  StatusBadge,
} from '../../components/justiceInitiatives';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return { props: { allPostsData } };
}

export default function JusticeInitiatives({ allPostsData }) {
  return (
    <Layout allPosts={allPostsData} home={false}>
      <Head>
        {generateNextSeo({
          title: 'Justice Initiatives',
          description:
            'Justice Initiatives puts Free Law Project’s open legal data to work for people the legal system underserves: self-represented litigants, public defenders, and the organizations that support them.',
          openGraph: {
            type: 'website',
            url: 'https://free.law/justice-initiatives/',
          },
        })}
      </Head>
      <main className="bg-gray-50">
        <JIHero
          eyebrow={
            <p className="text-sm font-bold tracking-widest uppercase">Justice Initiatives</p>
          }
          title="Built on open legal data. Built for people who need it most."
        >
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            Free Law Project has spent years making court records open to everyone. In the Justice
            Initiatives division, we put that foundation to work for people the legal system
            underserves: those going to court without a lawyer, the public defenders carrying heavy
            caseloads, and the organizations that support them.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <GreenButton href="#work" onDark>
              See our work
            </GreenButton>
            <GreenButton href="#contact" onDark outline>
              Work with us
            </GreenButton>
          </div>
        </JIHero>

        <MainColumn>
          <section
            id="work"
            aria-labelledby="work-heading"
            className="py-16 md:py-20 flex flex-col gap-10"
          >
            <SectionIntro id="work-heading" title="What we’re building">
              <p>We have two main focus areas now.</p>
            </SectionIntro>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card as="article">
                <div className="flex flex-wrap gap-2">
                  <StatusBadge variant="piloting">Now Piloting</StatusBadge>
                  <StatusBadge variant="award">2025 AWS Imagine Grant winner</StatusBadge>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Litigant Portal</h3>
                <p className="leading-relaxed text-gray-700 grow">
                  A guide through civil court for people who show up alone. The Litigant Portal
                  provides court-reviewed, structured, and interactive workflows that help
                  self-represented litigants understand their rights and remedies, prepare the
                  correct forms, and act on their decisions. It is grounded in real law, fully
                  usable with or without AI, mobile first, accessible, and open source. We host the
                  platform; partner courts link to it from their websites, lend their name and
                  branding, and provide the content. We are developing it now with four pilot
                  courts.
                </p>
                <Link
                  href="/justice-initiatives/litigant-portal/"
                  className="font-semibold text-green-700 underline underline-offset-4 hover:text-green-800"
                >
                  About Litigant Portal
                </Link>
              </Card>

              <Card as="article" id="defender-portal">
                <div className="flex flex-wrap gap-2">
                  <StatusBadge variant="early">Early stage</StatusBadge>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Defender Portal</h3>
                <p className="leading-relaxed text-gray-700 grow">
                  A platform built specifically for federal public defenders. We start by listening
                  to defenders, then shape the technology around how their offices actually work. We
                  are gathering requirements and raising funds now.
                </p>
                <p className="font-semibold text-gray-600">More to come</p>
              </Card>
            </div>

            <div className="flex flex-col gap-6 pt-6">
              <h3 className="text-2xl font-semibold text-gray-900">Beyond the portals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 border-t border-gray-200 pt-6">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Free CourtListener access for legal services organizations (LSOs)
                    </h4>
                    <StatusBadge variant="available">Available now</StatusBadge>
                  </div>
                  <p className="leading-relaxed text-gray-700">
                    U.S.-based nonprofit legal services organizations can apply for a free
                    CourtListener group membership, so their staff can research and track cases
                    without a subscription.
                  </p>
                  <Link
                    href="/membership/"
                    className="self-start font-semibold text-green-700 underline underline-offset-4 hover:text-green-800"
                  >
                    Apply for LSO membership
                  </Link>
                </div>

                <div id="advocacy" className="flex flex-col gap-3">
                  <h4 className="text-xl font-semibold text-gray-900">Policy and advocacy</h4>
                  <p className="leading-relaxed text-gray-700">
                    We work with law school clinics to research and advocate for policies that keep
                    court records open and affordable, through public comments, testimony, and
                    published research.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </MainColumn>

        <section aria-labelledby="principles-heading" className="bg-white border-y border-gray-200">
          <MainColumn>
            <div className="py-16 md:py-20 flex flex-col gap-10">
              <SectionIntro id="principles-heading" title="How we build">
                <p>
                  These principles began with the Litigant Portal and now guide everything we build.
                  The people using our tools are often in high-stakes moments with little support,
                  and we design every decision with them in mind.
                </p>
              </SectionIntro>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12">
                <Principle title="Trust comes first">
                  Our tools carry the name and credibility of our partner courts. We stay neutral
                  and honest: we tell people what they need to hear, deliver hard truths gently, and
                  never obscure consequences.
                </Principle>
                <Principle title="Reduce harm">
                  A missed deadline or an incomplete form can change a life. We flag deadlines
                  clearly, explain consequences, define legal terms, and offer clear paths to legal
                  aid and court help.
                </Principle>
                <Principle title="Follow the user’s story">
                  We design around real situations, starting with the event that brought someone to
                  court. People see where they are, what matters now, and what comes next.
                </Principle>
                <Principle title="Show your work">
                  We explain our reasoning in plain language and link to the rules behind it. We
                  never cite a case, rule, or statute that doesn’t exist. When we don’t have a valid
                  source, we say so.
                </Principle>
                <Principle title="Information, not advice">
                  We tell people what they can do, not what they should do. Compliance with
                  unauthorized practice of law rules is non-negotiable.
                </Principle>
                <Principle title="AI multiplies, it doesn’t gate">
                  Every tool works with AI turned off. AI makes our tools more responsive, but it is
                  not the foundation of access.
                </Principle>
              </div>
            </div>
          </MainColumn>
        </section>

        <MainColumn>
          <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-20">
            <Card className="md:flex-row md:flex-wrap md:items-center md:justify-between gap-8 md:p-12">
              <div className="flex flex-col gap-3 md:flex-1 md:min-w-[20rem]">
                <h2
                  id="contact-heading"
                  className="text-3xl font-display font-semibold text-gray-900"
                >
                  Work with us
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  We want to hear from courts interested in a pilot, public defender offices, legal
                  aid organizations, and funders who invest in lasting public infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <GreenButton href="/contact/">Contact us</GreenButton>
                <GreenButton href="/membership/" outline>
                  Apply for LSO membership
                </GreenButton>
              </div>
            </Card>
          </section>
        </MainColumn>
      </main>
    </Layout>
  );
}
