import { Feed } from 'feed';
import RSS from 'rss';
import { getSortedPostsData } from './posts';
import { parseISO } from 'date-fns';

async function generateRssFeed() {
  const baseUrl = 'http://localhost:3000';
  const date = new Date();
  const posts = await getSortedPostsData();


  const feed = new RSS({
    title: 'Free Law Project Blog',
    description: '',
    site_url: baseUrl,
    feed_url: `${baseUrl}/feeds/all.atom.xml`,
    language: 'en',
    pubDate: date,
    copyright: `© ${date.getFullYear()} Free Law Project. Content licensed under a Creative Commons BY-ND international 4.0, license, except where indicated.`,
    image_url: `${baseUrl}/android-chrome-192x192.png`,
    generator: 'Next.js using Feed for Node.js',
  });


  posts.forEach((post) => {
    const url = `${baseUrl}${post.id}/`;
    feed.item({
      title: post.title,
      url: url,
      author: post.author,
      date: parseISO(post.date),
    });
  });

  return feed;
}

export default generateRssFeed;
