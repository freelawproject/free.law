import Head from 'next/head'

import Date from '../components/date'
import Layout, {ClientPics, PicGrid, PostColumn} from '../components/layout'
import {MDXRemote} from 'next-mdx-remote'
import {getAllPostIds, getPostData, getSortedPostsData} from '../lib/posts'
import Link from "next/link"
import Image from "next/image"
import {H1} from "../components/headings";
import {
  AlertBox,
  CaptionedImage, GridImage,
  RightImage,
  RightInfoBox,
  Tag
} from "../components/widgets";
import Button, {
  PurpleButton,
  RedButton, WhiteButton,
  WideButton,
  WideWhiteButton
} from "../components/button";
import {CheckIcon, DownloadIcon, HeartIcon} from "@heroicons/react/outline";

export async function getStaticProps({params}) {
  const postData = await getPostData(params.slug)
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      postData,
      allPostsData,
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// Any custom components you want rendered from markdown files go here.
const components = {
  // NextJS Stuff
  Image,
  Link,

  // Blog/page widgets
  AlertBox,
  CaptionedImage,
  ClientPics,
  GridImage,
  PicGrid,
  RightImage,
  RightInfoBox,

  // Buttons
  Button,
  RedButton,
  PurpleButton,
  WhiteButton,
  WideWhiteButton,
  WideButton,

  // Icons
  CheckIcon,
  DownloadIcon,
  HeartIcon,
}


export default function Post({postData, allPostsData}) {
  return (
    <Layout allPosts={allPostsData} home={false}>
      <Head>
        <title>{postData.title} | Free Law Project</title>
        {postData.private ?
          <meta name="robots" content="noindex, noodp, noarchive, noimageindex"/>
        : ""}

      </Head>
      <PostColumn>
        <article className="pt-8">
          <H1>{postData.title}</H1>
          {postData.author ? (
            <div className="text-black font-semibold">
              {postData.author}
            </div>
          ) : ""}
          {postData.date ? (
            <div className="text-gray-500 text-sm">
              <Date dateString={postData.date}/>
            </div>
          ) : ""}
          {postData.updated ? (
            <div className="text-gray-500 text-sm">
              Updated: <Date dateString={postData.updated}/>
            </div>
          ) :""}

          <MDXRemote {...postData.content} components={components}/>
          {postData.tags ? (
            <div className="flex flex-wrap gap-1.5 pt-5">
              <span className="text-gray-500">Tagged:</span>
              {postData.tags.map((item) => (
                <Tag id={item} name={item}/>
              ))}
            </div>
          ) : ""}
        </article>
      </PostColumn>
    </Layout>
  )
}
