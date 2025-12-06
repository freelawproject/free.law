import Image from 'next/image';
import Link from 'next/link';
import { H5 } from './headings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { FooterLink } from './button';
import { faCircle, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { MainFullBleedColumn } from './layout';
import { BlueskyLogo } from './widgets';

export function Footer({ recentPost }) {
  return (
    <MainFullBleedColumn bgClasses="border-t border-gray-300 mt-16">
      <section
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full py-8 justify-start"
        id="footer"
      >
        <div className="w-1/2 hidden md:block row-span-2">
          <div className="relative w-full aspect-[204/113]">
            <Image
              src="/images/logos/flp/flp-medium-black.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="pb-3">
            <H5>About</H5>
            <FooterLink href="/about/">Overview</FooterLink>
            <FooterLink href="/team/">Team</FooterLink>
            <FooterLink href="/presentations">Presentations &amp; Press</FooterLink> 
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
            <H5>Our Work</H5>
            <FooterLink href="/data-consulting/">
              Data <span className="hidden lg:inline">Services and </span>Consulting
            </FooterLink>
            <FooterLink href="/pacer-facts/">PACER Fact Sheet</FooterLink>
            <FooterLink href="/idb-facts/">Integrated Database Fact Sheet</FooterLink>
            <FooterLink href="/court-contracts/">Court Contracts</FooterLink>
          </div>
        </div>

        <div className="w-full">
          <div className="pb-3">
            <H5>Tools</H5>
            <FooterLink href="https://www.courtlistener.com/">CourtListener.com</FooterLink>
            <FooterLink href="/recap/">RECAP Suite</FooterLink>
            <FooterLink href="https://bots.law/">Bots.law</FooterLink>
            <FooterLink href="/open-source-tools">Open Source Tools</FooterLink>
            <FooterLink href="https://github.com/freelawproject/">
              <span className="hidden lg:inline">More </span> on GitHub
            </FooterLink>
          </div>

          <div className="pb-3">
            <H5>Data</H5>
            <FooterLink href="https://www.courtlistener.com/help/api/">Our Data Services</FooterLink>
            <FooterLink href="https://www.courtlistener.com/help/api/rest/">Legal APIs</FooterLink>
            <FooterLink href="https://www.courtlistener.com/help/api/bulk-data/">Bulk Data</FooterLink>
            <FooterLink href="https://www.courtlistener.com/help/api/replication/">
              Database Replication
            </FooterLink>
            <FooterLink href="/datasets">Datasets</FooterLink>
          </div>
        </div>

        <div className="w-full">
          <div className="pb-3">
            <H5>Engage</H5>
            <FooterLink href="/membership/">Membership</FooterLink>
            <FooterLink href="/blog/">Read the Blog</FooterLink>
            <FooterLink href="/startups/">Startup Guide</FooterLink>
            <FooterLink href="/librarians/">Librarian Guide</FooterLink>
            <FooterLink href="/2025/09/30/justice-partners-circle/">Justice Partner Circle</FooterLink>
            <FooterLink href={recentPost.id}>Our Latest Post</FooterLink>
            <FooterLink href="https://donate.free.law/np/clients/freelawproject/subscribe.jsp?subscription=9">
              Join our Newsletter</FooterLink>
            <FooterLink href="/volunteer/">Volunteer</FooterLink>
          </div>
          
          <div className="pb-3">
            <H5>Support FLP</H5>
            <FooterLink href="/donate/">Donate Now</FooterLink>
            <FooterLink href="/donate/help/">Donations FAQ</FooterLink>
            <FooterLink href="/donate/other-ways/">Other Ways to Help</FooterLink>
            <p className="pb-2 sm:pb-3 md:pb-4 text-gray-500">
              <Link href="/stickers/" className="hover:underline">
                Stickers
              </Link>{' '}
              &amp;{' '}
              <Link href="https://shop.printyourcause.com/campaigns/free-law-project---for-sales" className="hover:underline">
                Store
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
            <Link href="https://bsky.app/profile/free.law" className="text-gray-400 hover:text-gray-500 w-8 h-8">
              <BlueskyLogo></BlueskyLogo>
            </Link>
            <Link href="https://law.builders/@flp" rel="me">
              <FontAwesomeIcon
                icon={faMastodon}
                className="w-8 h-8 text-gray-400 hover:text-gray-500"
                mask={faCircle}
                inverse
                transform="shrink-6"
              />
            </Link>
            <Link href="https://donate.free.law/np/clients/freelawproject/subscribe.jsp?subscription=9">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="w-8 h-8 text-gray-400 hover:text-gray-500"
                mask={faCircle}
                inverse
                transform="shrink-6"
              />
            </Link>
            <Link href="https://github.com/freelawproject/">
              <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-gray-400 hover:text-gray-500" />
            </Link>
          </p>
        </div>
      </div>
    </MainFullBleedColumn>
  );
}

export function JudgeRibbon() {
  return (
    <Link href="/projects/judge-pics/" title="Check out our database of judge portraits">
      <MainFullBleedColumn bgClasses="bg-imgJudgeHr h-36px" />
    </Link>
  );
}
