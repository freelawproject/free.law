import Link from 'next/link';
import Navbar from './navbar';
import { Colophon, Footer, JudgeRibbon } from './footers';
import { GridImage } from './widgets';
import proPublica from '../public/images/services-logos/x256/proPublica.png';
import harvardSociology from '../public/images/services-logos/x256/harvard-sociology-logo.png';
import gsu from '../public/images/services-logos/x256/gsu.png';
import noacri from '../public/images/services-logos/x256/noacri.png';
import edhec from '../public/images/services-logos/x256/edhec.png';
import midpage from '../public/images/services-logos/x256/midpage.png';
import predicta from '../public/images/services-logos/x256/predicta.png';
import darrow from '../public/images/services-logos/x256/darrow.png';
import smithsonian from '../public/images/services-logos/x256/smithsonian.png';
import clearBrief from '../public/images/services-logos/x256/clearbrief.png';
import openAI from '../public/images/services-logos/x256/openAI.png';
import wsj from '../public/images/services-logos/x256/wsj.png';
import washingtonPost from '../public/images/services-logos/x256/washingtonpost-wordmark.png';
import classNames from 'classnames';
import Button, {RedButton} from './button';
import {H1} from './headings';
import Date from './date';
import {HeartIcon} from "@heroicons/react/outline";
import presentations from '../lib/presentations.json';

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

export function PresentationList() {
  return (
    <>
      {presentations.map((presentation) => (
          <article className="py-8">
            <p className="space-x-4 mb-3 uppercase text-sm font-semibold text-gray-500">
              <Date dateString={presentation.date}/>
            </p>
            <H1 extraClasses="text-2xl mb-3 text-black">{presentation.title}</H1>
            <ul>
              {presentation.presenters.map((presenter) => (
                <li className="space-x-2">
                  <span className="text-black font-semibold">{presenter.name}</span>
                  <span className="text-gray-500 text-sm">
                      {presenter.role}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-1">{presentation.location}</p>
            <p className="flex gap-2 flex-wrap sm:flex-row flex-col">
              {presentation.buttons.map((button) => (
                <Button href={button.url} extraClasses="text-gray-800 bg-white border border-gray-400">
                  {button.label}
                </Button>
              ))}
            </p>
          </article>
        ))
      }
    </>
  );
}

export function SmallBanner({ title, text, children, hidden }) {
  if (hidden) return;
  return (
    <section className="bg-gradient-to-b from-gray-300 to-gray-100">
      <div className="flex lg:flex-row flex-col justify-center items-center p-3 text-center">
        <strong className="pr-2">{title}</strong>
        <span className="text-sm pr-2 mb-2 md:mb-1 lg:mb-0">
          {text}
        </span>
        {children}
      </div>
    </section>
  );
}

export default function Layout({ children, home, allPosts }) {
  return (
    <div className="text-gray-800 font-display">
      {/* Giving Tuesday Banner */}
      <SmallBanner
        title="Today is GivingTuesday."
        text="Your support of Free Law Project helps make the justice system more transparent and accessible to all."
        hidden={true}
      >
        <RedButton
          href="https://donate.free.law/forms/givingtuesday"
          extraClasses="inline-flex px-1 py-1 md:hidden"
        >
          <HeartIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
          <div className="items-center flex">&nbsp;Donate Today!</div>
        </RedButton>
        <a href="https://donate.free.law/forms/givingtuesday" className="underline hidden md:block">
          Donate Today!
        </a>
      </SmallBanner>

      <Navbar allPosts={allPosts} />

      {children}

      <Footer recentPost={allPosts[0]} />
      <Colophon />
      <JudgeRibbon />

      {/* Plausible */}
      <script
        defer
        data-domain="free.law"
        src="https://plausible.io/js/plausible.outbound-links.js"
      />
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
          src: washingtonPost,
          alt: 'Washington Post logo',
          width: '256',
          height: '53',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: wsj,
          alt: 'Wall Street Journal logo',
          width: '256',
          height: '26',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: proPublica,
          alt: 'ProPublica news logo',
          width: '256',
          height: '34',
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
          src: midpage,
          alt: "Midpage logo",
          width: '256',
          height: '51',
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
          src: openAI,
          alt: 'OpenAI logo',
          width: '256',
          height: '70',
          placeholder: 'blur',
        }}
      />
      <GridImage
        imgProps={{
          src: darrow,
          alt: 'Darrow logo',
          width: '256',
          height: '55',
        }}
      />
      <GridImage
        imgProps={{
          src: smithsonian,
          alt: 'Smithsonian Institution logo',
          width: '256',
          height: '114',
          placeholder: 'blur',
        }}
      />
    </PicGrid>
  );
}

export function ResponsiveIFrame({
  src,
  allow,
  referrer,
  className = 'w-full aspect-video',
  title = 'Embedded content',
}) {
  return (
    <iframe
      className={className}
      src={src}
      title={title}
      referrerPolicy={referrer}
      allow={allow}
      allowFullScreen
    />
  );
}

/**
 * Extract a YouTube video ID from any of these formats:
 *  - https://www.youtube.com/watch?v=VIDEO_ID
 *  - https://youtu.be/VIDEO_ID
 *  - https://www.youtube.com/VIDEO_ID
 */
function extractYouTubeID(url) {
  const regex =
    /https?:\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?[\w?=]*)?/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function YouTubeVideo({src, title = 'YouTube video player'}) {
  const videoID = extractYouTubeID(src);
  const embedUrl = videoID
    ? `https://www.youtube.com/embed/${videoID}`
    : src;
  return (
    <ResponsiveIFrame
      src={embedUrl}
      title={title}
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    >
    </ResponsiveIFrame>
  );
}
