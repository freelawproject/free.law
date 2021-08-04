import '../styles/global.css';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Free Law Project | Making the legal ecosystem more equitable and competitive."
        defaultTitle="Free Law Project"
        description="Free Law Project is the leading nonprofit using software and data to make the legal ecosystem more equitable and competitive. Creators of the CourtListener and RECAP projects."
        additionalLinkTags={[
          // Images
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon-32x32.png',
            sizes: '32x32',
          },
          {
            rel: 'icon',
            href: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            rel: 'icon',
            href: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            rel: 'icon',
            href: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-57x57.png',
            sizes: '57x57',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-60x60.png',
            sizes: '60x60',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-72x72.png',
            sizes: '72x72',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-76x76.png',
            sizes: '76x76',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-114x114.png',
            sizes: '114x114',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-120x120.png',
            sizes: '120x120',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-144x144.png',
            sizes: '144x144',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-152x152.png',
            sizes: '152x152',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon-180x180.png',
            sizes: '180x180',
          },

          // Manifest
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#1d333a',
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
            content: '#da532c',
          },
          {
            name: 'msapplication-TileImage',
            content: '/mstile-144x144.png',
          },
          {
            name: 'theme-color',
            content: '#180040',
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
              url: 'https://free.law/android-chrome-192x192.png',
              width: 192,
              height: 192,
            },
          ],
          dnt: 'on',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
