import { Feed } from 'feed';
import { getSortedPostsData } from './posts';
import { parseISO } from 'date-fns';

async function generateRssFeed() {
  const baseUrl = 'https://free.law';
  const date = new Date();

  const feed = new Feed({
    title: `Free Law Project Blog`,
    description: '',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/android-chrome-192x192.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `© ${date.getFullYear()} Free Law Project. Content licensed under a Creative Commons BY-ND international 4.0, license, except where indicated.`,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      atom: `${baseUrl}/feeds/all.atom.xml`,
    },
  });

  const posts = await getSortedPostsData();

  posts.forEach((post) => {
    const url = `${baseUrl}${post.id}/`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      author: post.author,
      date: parseISO(post.date),
    });
  });

  return feed;
}

export default generateRssFeed;
