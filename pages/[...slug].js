import Date from '../components/date';
import Layout, { PostColumn } from '../components/layout';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostIds, getPostData, getSortedPostsData } from '../lib/posts';
import { H1 } from '../components/headings';
import { Tag } from '../components/widgets';
import { NextSeo } from 'next-seo';
import { mdxComponents } from '../lib/mdx';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, allPostsData }) {
  return (
    <Layout allPosts={allPostsData} home={false}>
      <NextSeo
        title={postData.title}
        noindex={postData.private}
        robotsProps={{
          noarchive: postData.private,
          nosnippet: postData.private,
        }}
        description={postData.excerpt}
        openGraph={{
          title: postData.title,
          url: 'https://free.law/' + postData.slug.join('/') + '/',
          type: 'article',
          article: {
            publishedTime: postData.date,
            modifiedTime: postData.updated,
            tags: postData.tags,
          },
        }}
      />

      <PostColumn>
        <article className="pt-8">
          <H1>{postData.title}</H1>
          {postData.author ? <div className="text-black font-semibold">{postData.author}</div> : ''}
          {postData.date ? (
            <div className="text-gray-500 text-sm">
              <Date dateString={postData.date} />
            </div>
          ) : (
            ''
          )}
          {postData.updated ? (
            <div className="text-gray-500 text-sm">
              Updated: <Date dateString={postData.updated} />
            </div>
          ) : (
            ''
          )}

          <MDXRemote {...postData.content} components={mdxComponents} />
          {postData.tags ? (
            <div className="flex flex-wrap gap-1.5 pt-5">
              <span className="text-gray-500">Tagged:</span>
              {postData.tags.map((item) => (
                <Tag id={item} name={item} />
              ))}
            </div>
          ) : (
            ''
          )}
        </article>
      </PostColumn>
    </Layout>
  );
}
