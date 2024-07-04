import Image from 'next/image';
import Link from 'next/link';
import { H5 } from './headings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMastodon, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FooterLink } from './button';
import { faCircle, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { MainFullBleedColumn } from './layout';

export function Footer({ recentPost }) {
  return (
    <MainFullBleedColumn bgClasses="border-t border-gray-300 mt-16">
      <section
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full py-8 justify-start"
        id="footer"
      >
        <div className="w-1/2 hidden md:block row-span-2">
          <Image
            src="/images/logos/flp/flp-medium-black.svg"
            width="204"
            height="113"
            layout="responsive"
          />
        </div>

        <div className="w-full">
          <div className="pb-3">
            <H5>About</H5>
            <FooterLink href="/about/">Overview</FooterLink>
            <FooterLink href="/team/">Team</FooterLink>
            <FooterLink href="/non-profit-documents/">Non-Profit Documents</FooterLink>
            <FooterLink href="/hiring/">Hiring</FooterLink>
            <FooterLink href="/press-assets/">
              Press <span className="hidden lg:inline">Logos and </span>Assets
            </FooterLink>
            <FooterLink href="/vulnerability-disclosure-policy/">
              Vulnerability Disclosure Policy
            </FooterLink>
            <FooterLink href="/contact/">Contact Us</FooterLink>
          </div>

          <div className="pb-3">
            <H5>Engage</H5>
            <FooterLink href="/blog/">Read the Blog</FooterLink>
            <FooterLink href="/startups/">How We Work with Startups</FooterLink>
            <FooterLink href={recentPost.id}>Our Latest Post</FooterLink>
            <FooterLink href="https://donate.free.law/np/clients/freelawproject/subscribe.jsp?subscription=9">
              Join our Newsletter
            </FooterLink>
          </div>
        </div>

        <div className="w-full">
          <div className="pb-3">
            <H5>Tools</H5>
            <FooterLink href="https://www.courtlistener.com/help/api/">Legal APIs</FooterLink>
            <FooterLink href="https://www.courtlistener.com/help/api/replication/">
              Database Replication
            </FooterLink>
            <FooterLink href="/projects/juriscraper/">Juriscraper</FooterLink>
            <FooterLink href="/projects/eyecite/">Eyecite</FooterLink>
            <FooterLink href="/projects/x-ray/">X-Ray</FooterLink>
            <FooterLink href="/projects/doctor/">Doctor</FooterLink>
            <FooterLink href="https://github.com/freelawproject/">
              <span className="hidden lg:inline">Other </span> Projects on Github
            </FooterLink>
          </div>
          <div className="pb-3">
            <H5>Datasets</H5>
            <FooterLink href="/projects/judge-db/">Judges and Disclosures</FooterLink>
            <FooterLink href="/projects/reporters-db/">Reporters</FooterLink>
            <FooterLink href="/projects/courts-db/">Courts</FooterLink>
            <FooterLink href="/projects/seal-rookery/">Court Seals</FooterLink>
            <FooterLink href="/projects/judge-pics/">Judge Portraits</FooterLink>
            <FooterLink href="/projects/oral-arguments/">Oral Argument Audio</FooterLink>
            <FooterLink href="/projects/supreme-court-data/">Supreme Court Data</FooterLink>
          </div>
        </div>

        <div className="w-full">
          <div className="pb-3">
            <H5>Our Work</H5>
            <FooterLink href="https://www.courtlistener.com/">CourtListener.com</FooterLink>
            <FooterLink href="/recap/">RECAP Project</FooterLink>
            <FooterLink href="https://bots.law/">Bots.law</FooterLink>
            <FooterLink href="/data-consulting/">
              Data <span className="hidden lg:inline">Services and </span>Consulting
            </FooterLink>
            <FooterLink href="/pacer-facts/">PACER Fact Sheet</FooterLink>
            <FooterLink href="/idb-facts/">Integrated Database Fact Sheet</FooterLink>
            <FooterLink href="/court-contracts/">Court Contracts</FooterLink>
          </div>
          <div className="pb-3">
            <H5>Support FLP</H5>
            <FooterLink href="/donate/">Donate Now</FooterLink>
            <FooterLink href="/donate/help/">Donations FAQ</FooterLink>
            <FooterLink href="/sponsors/">Current Sponsors</FooterLink>
            <FooterLink href="/become-a-sponsor/">Become a Sponsor</FooterLink>
            <FooterLink href="/donate/other-ways/">Other Ways to Help</FooterLink>
            <p className="pb-2 sm:pb-3 md:pb-4 text-gray-500">
              <Link href="/stickers/">
                <a className="hover:underline">Stickers</a>
              </Link>{' '}
              &amp;{' '}
              <Link href="https://shop.printyourcause.com/campaigns/free-law-project---for-sales">
                <a className="hover:underline">Store</a>
              </Link>
              !
            </p>
          </div>
        </div>
      </section>
    </MainFullBleedColumn>
  );
}

export function Colophon() {
  return (
    <MainFullBleedColumn bgClasses="border-t border-gray-300">
      <div className="py-12 flex flex-wrap justify-between" id="colophon">
        <div className="w-full sm:w-2/5 text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} Free Law Project. Content licensed under a Creative Commons
            BY-ND international 4.0, license, except where indicated.{' '}
            <a className="hover:underline" href="https://www.netlify.com/">
              Site powered by Netlify
            </a>
            .
          </p>
        </div>
        <div className="w-full sm:w-3/5">
          <p className="flex flex-row justify-center sm:justify-end gap-6 pt-6 sm:pt-0">
            <Link href="https://twitter.com/freelawproject">
              <a>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-8 text-gray-400"
                  mask={faCircle}
                  inverse
                  transform="shrink-6"
                />
              </a>
            </Link>
            <Link href="https://law.builders/@flp">
              <a rel="me">
                <FontAwesomeIcon
                  icon={faMastodon}
                  className="w-8 text-gray-400"
                  mask={faCircle}
                  inverse
                  transform="shrink-6"
                />
              </a>
            </Link>
            <Link href="https://donate.free.law/np/clients/freelawproject/subscribe.jsp?subscription=9">
              <a>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="w-8 text-gray-400"
                  mask={faCircle}
                  inverse
                  transform="shrink-6"
                />
              </a>
            </Link>
            <Link href="https://github.com/freelawproject/">
              <a>
                <FontAwesomeIcon icon={faGithub} className="w-8 text-gray-400" />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </MainFullBleedColumn>
  );
}

export function JudgeRibbon() {
  return (
    <Link href="/projects/judge-pics/">
      <a title="Check out our database of judge portraits">
        <MainFullBleedColumn bgClasses="bg-imgJudgeHr h-36px" />
      </a>
    </Link>
  );
}
