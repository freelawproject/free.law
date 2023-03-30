import Date from '../components/date';
import Layout, { PostColumn } from '../components/layout';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostIds, getPostData, getSortedPostsData } from '../lib/posts';
import { H1 } from '../components/headings';
import { AlertBox, Tag } from '../components/widgets';
import { NextSeo } from 'next-seo';
import { mdxComponents } from '../lib/mdx';
import { RedButton } from '../components/button';
import slugify from 'slugify';

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
  const openGraph = {
    title: postData.title,
    url: 'https://free.law/' + postData.slug.join('/') + '/',
    type: 'article',
    article: {
      publishedTime: postData.date,
      modifiedTime: postData.updated,
      tags: postData.tags,
    },
  };
  if (postData.imagePath) {
    openGraph.images = [{ url: 'https://free.law' + postData.imagePath }];
  }
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
        openGraph={openGraph}
      />

      <PostColumn>
        <article className="pt-8 pb-8">
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
                <Tag id={item} href={`/tag/${slugify(item.toLowerCase())}/`} name={item} />
              ))}
            </div>
          ) : (
            ''
          )}
        </article>
        {postData.type !== 'page' ? (
          <AlertBox>
            <p>
              Started in 2010, Free Law Project is the leading non-profit using software, data, and
              advocacy to make the legal ecosystem more equitable and competitive. We host major
              open databases of <a href="https://www.courtlistener.com/opinion/">opinions</a>,{' '}
              <a href="https://www.courtlistener.com/recap/">federal filings</a>,{' '}
              <a href="https://www.courtlistener.com/person/">judges</a>,{' '}
              <a href="https://www.courtlistener.com/financial-disclosures/">
                financial disclosures
              </a>
              , and <a href="https://www.courtlistener.com/audio/">oral arguments</a>. We build
              open‑source tools like <a href="/projects/eyecite">eyecite</a>,{' '}
              <a href="/projects/juriscraper/">juriscraper</a>, and{' '}
              <a href="/projects/x-ray/">x-ray</a>.
            </p>
            <p>We rely on your donations for our continued success.</p>
            <p>
              <RedButton href="/donate/">Please Support Our Work</RedButton>
            </p>
          </AlertBox>
        ) : (
          ''
        )}
      </PostColumn>
    </Layout>
  );
}
