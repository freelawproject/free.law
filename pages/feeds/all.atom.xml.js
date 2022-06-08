import React from 'react';
import generateRssFeed from '../../lib/rss';

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  const feed = await generateRssFeed();
  res.write(feed.atom1());
  res.end();
  return {
    props: {},
  };
}

export default function Feed({ feed }) {
  // See: https://stackoverflow.com/a/62843138/64911
  return null;
}
