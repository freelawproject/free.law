import fs from 'fs'
import glob from 'glob'
import path from 'path'
import matter from 'gray-matter'
import {serialize} from "next-mdx-remote/serialize";

const pageDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData(excerpts) {
  // Get file names under /posts
  const fileNames = glob.sync("**/*.md", {
    cwd: pageDirectory,
  })
  const allPageData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = "/" + fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(pageDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  const publishedPagesData = allPageData.filter(post => post.status !== "Draft")
  const publishedPostsOnlyData = publishedPagesData.filter(post => post.type !== "page")

  // Sort posts by date
  return publishedPostsOnlyData.sort(({date: a}, {date: b}) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}


export function getAllPostIds() {
  const fileNames = glob.sync("**/*.md", {
    cwd: pageDirectory,
  })
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: ['ssg-ssr']
  //     }
  //   },
  //   {
  //     params: {
  //       id: ["2020", "01", "01", "some-post"]
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '').split("/")
      }
    }
  })
}


export async function getPostData(slug) {
  const fullPath = path.join(pageDirectory, ...slug) + ".md"
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  const mdxSource = await serialize(matterResult.content)

  // Combine the data with the slug and content
  return {
    slug,
    content: mdxSource,
    ...matterResult.data
  }
}
