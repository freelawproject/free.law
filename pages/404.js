import Head from 'next/head';
import Layout, { PostColumn } from '../components/layout';
import { H1 } from '../components/headings';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData(true);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Custom404({ allPostsData }) {
  return (
    <Layout allPosts={allPostsData} home={false}>
      <Head>
        <title>Page Not Found | Free Law Project</title>
      </Head>
      <PostColumn>
        <div className="pt-10 mt-10 text-center border border-gray-500">
          <H1>
            404 U.S. <span className="tracking-tight">____</span>, Page Not Found
          </H1>
          <p>Sorry. The requested item could not be found.</p>
          <p>
            Sometimes it's possible to find things in the{' '}
            <Link href="/blog/">
              <a>Blog Archive</a>
            </Link>
            .
          </p>
        </div>
      </PostColumn>
    </Layout>
  );
}
