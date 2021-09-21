import Link from 'next/link';
import Script from 'next/script';
import Navbar from './navbar';
import { Colophon, Footer, JudgeRibbon } from './footers';
import { GridImage } from './widgets';
import buzzfeed from '../public/images/services-logos/x256/buzzfeed-news.png';
import harvardSociology from '../public/images/services-logos/x256/harvard-sociology-logo.png';
import gsu from '../public/images/services-logos/x256/gsu.png';
import noacri from '../public/images/services-logos/x256/noacri.png';
import edhec from '../public/images/services-logos/x256/edhec.png';
import oneLegal from '../public/images/services-logos/x256/one-legal.png';
import predicta from '../public/images/services-logos/x256/predicta.png';
import imanage from '../public/images/services-logos/x256/imanage.png';
import drugPatentWatch from '../public/images/services-logos/x256/drugpatentwatch.png';
import clearBrief from '../public/images/services-logos/x256/clearbrief.png';
import classNames from 'classnames';
import Button from './button';
import { H1 } from './headings';
import Date from './date';

export function MainColumn({ children }) {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">{children}</div>;
}

export function MainFullBleedColumn({ bgClasses, children }) {
  return (
    <section className={bgClasses}>
      <MainColumn>{children}</MainColumn>
    </section>
  );
}

export function PostColumn({ children }) {
  return <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 prose">{children}</div>;
}

export function PostSummary({ post }) {
  return (
    <article key={post.id} className="py-8">
      <Link href={post.id}>
        <a className="no-underline text-lg">
          <H1 extraClasses="text-2xl">{post.title}</H1>
        </a>
      </Link>
      <p>{post.excerpt}</p>
      <p className="space-x-4">
        <span className="text-black font-semibold">{post.author}</span>
        <span className="text-gray-500 text-sm">
          <Date dateString={post.date} />
        </span>
      </p>
      <p>
        <Button href={post.id} extraClasses="text-gray-800 bg-white border border-gray-400">
          Read More
        </Button>
      </p>
    </article>
  );
}

export default function Layout({ children, home, allPosts }) {
  return (
    <div className="text-gray-800 font-display">
      <Navbar allPosts={allPosts} />

      {children}

      <Footer recentPost={allPosts[0]} />
      <Colophon />
      <JudgeRibbon />

      {/*Matomo*/}
      <Script src="/js/tracking.js" />
      <Script src="https://matomo.courtlistener.com/matomo.js" />
    </div>
  );
}

export function PicGrid({ wide, tall, children }) {
  return (
    <div
      className={classNames(
        'grid grid-cols-2 sm:grid-cols-3',
        wide
          ? 'md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16'
          : 'md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6  lg:gap-8',
        tall ? 'py-10' : '',
        'w-full items-center'
      )}
    >
      {children}
    </div>
  );
}

export function ClientPics({ wide }) {
  return (
    <PicGrid wide={wide}>
      <GridImage
        imgProps={{
          src: buzzfeed,
          alt: 'BuzzFeed news logo',
          width: '256',
          height: '32',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: harvardSociology,
          alt: 'Harvard logo',
          width: '256',
          height: '79',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: gsu,
          alt: 'J. Mack Robinson School of Business at Georgia State University logo',
          width: '256',
          height: '102',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: noacri,
          alt: 'NOACRI logo',
          width: '256',
          height: '73',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: edhec,
          alt: 'EDHEC Business School',
          width: '256',
          height: '110',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: oneLegal,
          alt: "One Legal's logo",
          width: '256',
          height: '52',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: predicta,
          alt: 'Pre/Dicta logo',
          width: '256',
          height: '80',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: clearBrief,
          alt: 'ClearBrief logo',
          width: '256',
          height: '85',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: imanage,
          alt: 'iManage logo',
          width: '256',
          height: '75',
        }}
      />
      <GridImage
        imgProps={{
          src: drugPatentWatch,
          alt: 'Drug Patent Watch logo',
          width: '256',
          height: '28',
          placeholder: 'blur',
        }}
      />
    </PicGrid>
  );
}
