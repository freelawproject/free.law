import Layout, { PostColumn, PostSummary } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { H1 } from '../components/headings';
import { NextSeo } from 'next-seo';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData(true);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout allPosts={allPostsData} home={false}>
      <NextSeo
        title="The Blog"
        openGraph={{
          type: 'website',
          url: 'https://free.law/blog/',
        }}
      />
      <PostColumn>
        <div className="pt-10">
          <H1>The Free Law Project Blog</H1>
        </div>
        <div className="divide-y divide-gray-300">
          {allPostsData.map((post) => (
            <PostSummary post={post} />
          ))}
        </div>
      </PostColumn>
    </Layout>
  );
}
