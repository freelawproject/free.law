import slugify from 'slugify';
import { getSortedPostsData } from './posts';

async function getTaggedPosts() {
  const allPosts = await getSortedPostsData();
  const taggedPosts = allPosts.filter((post) => post.tags);
  return taggedPosts;
}

export async function getAllPostTags() {
  const taggedPosts = await getTaggedPosts();
  let tagSet = new Set();
  taggedPosts.map((post) => {
    post.tags.forEach((item) => {
      const tagSlug = slugify(item.toLowerCase());
      tagSet.add('/tag/' + tagSlug + '/');
    });
  });
  return [...tagSet];
}

export async function getPostDataForTag(tagSlug) {
  const taggedPosts = await getTaggedPosts();
  return taggedPosts.filter((post) => {
    const slugs = post.tags.map((tag) => slugify(tag.toLowerCase()));
    return slugs.includes(tagSlug);
  });
}
