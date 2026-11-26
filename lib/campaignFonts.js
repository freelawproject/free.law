import { Raleway, Libre_Caslon_Text, IBM_Plex_Mono } from 'next/font/google';

// Fonts for the 2026 matching-gift campaign (the /2026-match/ page and the
// homepage pop-up). Each one is exposed as a CSS variable, so add
// `campaignFontVariables` to a wrapper element before using them.
const raleway = Raleway({ subsets: ['latin'], weight: ['800', '900'], variable: '--font-raleway' });
const caslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-caslon',
});
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: '500', variable: '--font-plex-mono' });

export const campaignFontVariables = `${raleway.variable} ${caslon.variable} ${plexMono.variable}`;
