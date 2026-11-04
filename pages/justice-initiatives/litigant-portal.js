import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import Layout, { MainColumn } from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';
import {
  Breadcrumb,
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

const linkClasses = 'text-green-700 underline underline-offset-4 hover:text-green-800';

const stages = [
  {
    name: 'Assess',
    text: 'People start by understanding where they stand: what kind of case this is, what the law says, and what rights and remedies they have.',
  },
  {
    name: 'Prepare',
    text: 'They get the right forms and a plain explanation of how the process works, with guidance on the procedural steps that trip people up. They can use a guided interview, fill out a PDF or paper form, or get AI help, and what they shared earlier carries forward.',
  },
  {
    name: 'Act',
    text: 'They see their deadlines and next steps, with reminders and follow-up: where and how to file, courthouse hours, and when to reach out to legal aid or an attorney. A missed deadline can end a case before anyone looks at the merits, so this stage matters as much as the first two.',
  },
];

const pilotCourts = [
  { state: 'North Dakota', court: 'North Dakota Court System' },
  {
    state: 'Arizona',
    court: 'Arizona Supreme Court',
    detail: 'Administrative Office of the Courts',
  },
  {
    state: 'Ohio',
    court: 'Franklin County Municipal Court',
    detail: 'Self Help Center and Dispute Resolution Department',
  },
  { state: 'Virginia', court: 'Portsmouth General District Court' },
];

const roadmap = [
  {
    when: 'Now',
    text: 'Building core workflows and testing them with pilot court staff.',
    border: 'border-green-600',
  },
  {
    when: 'Next',
    text: 'Public launch with pilot courts for eviction, civil traffic, and adult name change cases, late 2026 to early 2027.',
    border: 'border-gray-400',
  },
  {
    when: 'Later',
    text: 'More courts and case types, guided by what the pilots show.',
    border: 'border-gray-200',
  },
];

export default function LitigantPortal({ allPostsData }) {
  return (
    <Layout allPosts={allPostsData} home={false}>
      <Head>
        {generateNextSeo({
          title: 'Litigant Portal | Justice Initiatives',
          description:
            'The Litigant Portal helps people without a lawyer understand their civil case, prepare what the court needs, and stay on top of what comes next.',
          openGraph: {
            type: 'website',
            url: 'https://free.law/justice-initiatives/litigant-portal/',
          },
        })}
      </Head>
      <main className="bg-gray-50">
        <JIHero
          breadcrumb={
            <Breadcrumb
              items={[
                { name: 'Justice Initiatives', href: '/justice-initiatives/' },
                { name: 'Litigant Portal' },
              ]}
            />
          }
          eyebrow={
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-bold tracking-widest uppercase">Litigant Portal</p>
              <StatusBadge variant="onDark">Now Piloting</StatusBadge>
              <StatusBadge variant="onDark">2025 AWS Imagine Grant winner</StatusBadge>
            </div>
          }
          title="A guide through civil court for people who show up alone."
        >
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            The Litigant Portal helps people without a lawyer understand their civil case, prepare
            what the court needs, and stay on top of what comes next. Each portal carries a partner
            court’s name, and the court’s own experts provide its content.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <GreenButton href="#for-courts" onDark>
              For courts: bring the Litigant Portal to your court
            </GreenButton>
          </div>
        </JIHero>

        <MainColumn>
          <section aria-label="Project status" className="pt-10">
            <div className="bg-gray-100 border-2 border-gray-200 rounded-2xl px-6 py-6 md:px-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="text-sm font-bold tracking-widest uppercase text-gray-600">
                Where things stand
              </p>
              <p className="text-lg text-gray-800">
                The Litigant Portal is not yet available to the public. We are building and testing
                it with our pilot court partners.
              </p>
            </div>
          </section>

          <section aria-labelledby="aws-heading" className="pt-6">
            <div className="bg-yellow-50 border-2 border-yellow-200 border-l-8 border-l-yellow-500 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex flex-col gap-3 md:w-1/3">
                <StatusBadge variant="award">2025 AWS Imagine Grant winner</StatusBadge>
                <h2 id="aws-heading" className="text-2xl font-display font-semibold text-gray-900">
                  Selected for an AWS Imagine Grant
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 md:flex-1">
                In 2025, the Litigant Portal was{' '}
                <a href="/2025/12/03/aws-imagine-grant-winner/" className={linkClasses}>
                  selected for an AWS Imagine Grant
                </a>
                . The award brings funding, technical support from AWS, and help with outreach, so
                we can build faster and reach more courts and the people they serve.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="why-heading"
            className="pt-16 md:pt-20 flex flex-col md:flex-row gap-6 md:gap-16"
          >
            <div className="md:w-1/3">
              <SectionIntro id="why-heading" title="Why this matters" />
            </div>
            <div className="md:flex-1 flex flex-col gap-4 text-lg leading-relaxed text-gray-700">
              <p>
                In more than 75% of civil cases in state courts, at least one side has no lawyer (
                <a href="https://ncsc.org/cji/ccj-reports" className={linkClasses}>
                  National Center for State Courts, 2015
                </a>
                ). These litigants are facing eviction, debt collection, wage garnishment, and other
                matters that can upend a household, often without knowing the rules, deadlines, or
                consequences that apply. A missed deadline can mean a default judgment. The wrong
                form can get a case dismissed.
              </p>
              <p>
                Many of the people we serve reach the internet only through a smartphone. Court is
                rarely the only thing on their plate. Many are working, caring for children, or
                facing unstable finances or housing at the same time. The Litigant Portal is built
                for those conditions.
              </p>
            </div>
          </section>

          <section aria-labelledby="how-heading" className="py-16 md:py-20 flex flex-col gap-10">
            <SectionIntro id="how-heading" title="How it’s designed to work">
              <p>
                The Litigant Portal follows the path a litigant actually takes, in three stages.
              </p>
            </SectionIntro>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stages.map((stage, i) => (
                <Card as="li" key={stage.name}>
                  <p className="text-sm font-bold tracking-widest uppercase text-green-700">
                    Stage {i + 1}
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900">{stage.name}</h3>
                  <p className="leading-relaxed text-gray-700">{stage.text}</p>
                </Card>
              ))}
            </ol>
            <div className="bg-gray-100 border-2 border-gray-200 rounded-2xl px-6 py-6 md:px-8 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Two ways through, one source of content
              </h3>
              <p className="leading-relaxed text-gray-700">
                People can browse topics and work through guided steps on their own, or describe
                their situation in their own words to an AI assistant. Both paths draw on the same
                court-provided content, and people can turn to the AI assistant at any point.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-gray-700">
              <p className="font-semibold text-gray-900">
                First case types: eviction (landlord and tenant assistance), civil traffic, and
                adult name change.
              </p>
              <p>
                Each court decides what its portal includes, so options vary by court. Where a court
                can support it, the portal can connect to the court’s e-filing system.
              </p>
            </div>
          </section>
        </MainColumn>

        <section aria-labelledby="trust-heading" className="bg-gray-100 border-y border-gray-200">
          <MainColumn>
            <div className="py-16 md:py-20 flex flex-col md:flex-row gap-6 md:gap-16">
              <div className="md:w-1/3">
                <SectionIntro id="trust-heading" title="Why courts put their name on it" />
              </div>
              <div className="md:flex-1 flex flex-col gap-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Lawyers judge legal information partly by where it comes from: a statute, a court
                  rule, a published opinion. People without lawyers rarely get that signal online.
                  Search results mix court pages with ads, outdated forms, and advice from
                  strangers.
                </p>
                <p>
                  Partner courts link to their Litigant Portal from their own websites. Each portal
                  carries the court’s name and branding, and the court’s own experts provide and
                  review its content, while Free Law Project hosts and maintains the platform.
                  People arrive from a source they already trust, and they can see that the guidance
                  comes from the court that will hear their case.
                </p>
                <p>
                  The portal does not replace courts, legal aid organizations, or attorneys. It
                  extends their reach, so more people get accurate, consistent help.
                </p>
              </div>
            </div>
          </MainColumn>
        </section>

        <MainColumn>
          <section
            aria-labelledby="commitments-heading"
            className="py-16 md:py-20 flex flex-col gap-10"
          >
            <SectionIntro id="commitments-heading" title="Our design commitments">
              <p>These commitments shape every decision we make about the portal.</p>
            </SectionIntro>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12">
              <Principle title="Grounded in real law">
                Every answer traces back to actual statutes, rules, and court procedures. The portal
                never cites authority that doesn’t exist.
              </Principle>
              <Principle title="Usable with or without AI">
                AI makes the experience easier, but nobody depends on it to get through their case.
                Every workflow works with AI turned off.
              </Principle>
              <Principle title="Information, not advice">
                The portal tells people what they can do, not what they should do. Limits on legal
                advice are built into the system, not left to a disclaimer.
              </Principle>
              <Principle title="Guide, don’t teach">
                People don’t need to understand the whole legal system to finish their matter. The
                portal shows where they are, what matters now, and what comes next.
              </Principle>
              <Principle title="Mobile first, accessible always">
                Most people we serve will use the portal on a phone, often on a slow connection. It
                meets WCAG 2.2 AA standards and is written in plain language and tested for
                readability.
              </Principle>
              <Principle title="Open source">
                Licensed under AGPL-3.0 and{' '}
                <a href="https://github.com/freelawproject/litigant-portal" className={linkClasses}>
                  published on GitHub
                </a>
                , so what we build for one court is available to every court.
              </Principle>
            </div>
            <a
              href="https://wiki.free.law/c/litigant-portal/guiding-principles"
              className={`self-start font-semibold ${linkClasses}`}
            >
              Read our full guiding principles
            </a>
          </section>
        </MainColumn>

        <section aria-labelledby="pilots-heading" className="bg-white border-y border-gray-200">
          <MainColumn>
            <div className="py-16 md:py-20 flex flex-col gap-10">
              <SectionIntro id="pilots-heading" title="Pilot courts">
                <p>
                  We are developing the Litigant Portal with four pilot courts in four states. Each
                  provides the subject-matter expertise and content for its portal.
                </p>
              </SectionIntro>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pilotCourts.map((pilot) => (
                  <li
                    key={pilot.state}
                    className="bg-gray-50 border-2 border-gray-200 border-t-4 border-t-green-600 rounded-2xl p-6 flex flex-col gap-2"
                  >
                    <p className="text-sm font-bold tracking-widest uppercase text-green-700">
                      {pilot.state}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">{pilot.court}</p>
                    {pilot.detail ? <p className="text-gray-600">{pilot.detail}</p> : ''}
                  </li>
                ))}
              </ul>
            </div>
          </MainColumn>
        </section>

        <MainColumn>
          <section
            aria-labelledby="roadmap-heading"
            className="py-16 md:py-20 flex flex-col gap-10"
          >
            <SectionIntro id="roadmap-heading" title="Roadmap" />
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmap.map((step) => (
                <li
                  key={step.when}
                  className={`flex flex-col gap-2 pt-5 border-t-4 ${step.border}`}
                >
                  <p className="text-xl font-semibold text-gray-900">{step.when}</p>
                  <p className="leading-relaxed text-gray-700">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="for-courts" aria-labelledby="for-courts-heading" className="pb-16 md:pb-20">
            <div className="bg-green-700 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex flex-col gap-3 md:max-w-2xl">
                <h2 id="for-courts-heading" className="text-3xl font-display font-semibold">
                  For courts
                </h2>
                <p className="text-lg leading-relaxed">
                  If your court is interested in a future pilot, or wants to learn what we’re seeing
                  in this one, we’d like to hear from you.
                </p>
              </div>
              <GreenButton href="mailto:jessica@free.law" onDark>
                Email jessica@free.law
              </GreenButton>
            </div>
          </section>
        </MainColumn>
      </main>
    </Layout>
  );
}
