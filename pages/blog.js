import Head from 'next/head'
import Link from "next/link";
import Layout, {PostColumn} from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import Button from "../components/button";
import {H1} from "../components/headings";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData(true)
  return {
    props: {
      allPostsData,
    }
  }
}


export default function Post({allPostsData}) {
  return (
    <Layout allPosts={allPostsData} home={false}>
      <Head>
        <title>The Blog | Free Law Project</title>
      </Head>
      <PostColumn>
        <div className="pt-10">
          <H1>The Free Law Project Blog</H1>
        </div>
        <div className="divide-y divide-gray-300">
        {allPostsData.map((item) => (
          <article key={item.id} className="py-8">
            <Link href={item.id}>
              <a className="no-underline text-lg"><H1 extraClasses="text-2xl">{item.title}</H1></a>
            </Link>
            <p>{item.excerpt}</p>
            <p className="space-x-4">
              <span className="text-black font-semibold">{item.author}</span>
              <span className="text-gray-500 text-sm"><Date dateString={item.date}/></span>
            </p>
            <p>
              <Button href={item.id} extraClasses="text-gray-800 bg-white border border-gray-400">Read More</Button>
            </p>
          </article>
        ))}
        </div>
      </PostColumn>
    </Layout>
  )
}
