import '../styles/global.css';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Free Law Project | Making the legal ecosystem more equitable and competitive."
        defaultTitle="Free Law Project"
        description="Free Law Project is the leading nonprofit using technology and data to make the legal ecosystem more equitable and competitive. Creators of the CourtListener, RECAP, and Bots.law projects."
        additionalLinkTags={[
          // Images
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'icon',
            href: '/favicon.svg',
            type: 'image/svg+xml',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },

          // Manifest
          {
            rel: 'manifest',
            href: '/manifest.json',
          },

          // RSS
          {
            rel: 'alternate',
            href: 'https://free.law/feeds/all.atom.xml',
            type: 'application/atom+xml',
            title: 'Free Law Project Atom Feed',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'msapplication-TileColor',
            content: '#663367',
          },
          {
            name: 'theme-color',
            content: '#663367',
          },
          {
            name: 'author',
            content: 'Free Law Project',
          },
          {
            name: 'twitter:dnt',
            content: 'on',
          },
          {
            name: 'twitter:site',
            content: '@freelawproject',
          },
          {
            name: 'twitter:creator',
            content: '@freelawproject',
          },
          {
            name: 'twitter:domain',
            content: 'https://free.law',
          },
        ]}
        openGraph={{
          type: 'website',
          url: 'https://free.law/',
          site_name: 'Free Law Project',
          images: [
            {
              url: 'https://free.law/og-image-1280x640.png',
              width: 1280,
              height: 640,
            },
          ],
          dnt: 'on',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
