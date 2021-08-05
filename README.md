[![Netlify Status](https://api.netlify.com/api/v1/badges/5db38bce-71a3-4c1f-b744-fa69bc93637f/deploy-status)](https://app.netlify.com/sites/freelaw/deploys)

# Free Law Project Website

This is [the website for Free Law Project][fl]. Like the rest of our work, it is developed in the open and can be edited by other people, like you. See a typo? Fix it! Want to make the site look better? Go for it!

This is the third version of our homepage. The first was built with WordPress and hosted on one of our servers. The second was made with the [Pelican static site generator][pelican],and was hosted in AWS S3. This version uses NextJS + Tailwind and is hosted on Netlify. There's no clear trend here. WordPress was too heavy and full of vulnerabilities, leading to its demise. Pelican was fine, but we never got past the templates. NextJS on Netlify should give us a beautiful, fast static site.

NextJS is a JavaScript-based static site generator. This means that there is no database, and back end for the site. The entire site is here -- in Github -- and you can render it yourself, work on it locally, and even host it on your own server if you wanted to (though we'd send our shark lawyers after you).

We encourage you to edit and enhance the site! 


## Installation

    npm install
    npm run dev


## Writing a post or a page

Pages are stored in the `posts` directory as `.mdx` files. `.mdx` files are basically markdown, but with support for react components as well as HTML. This lets you do neat things like embed sidebars or warnings or other things into your posts. We have a number of components available to you, which are listed in `lib/mdx.js`. Others are pretty easy to make, but most folks can ignore this stuff anyway and just write markdown posts.

There are three options for editing or creating new pages, listed below. For each of these, after you make your edits, you'll wind up with a pull request in Github. Whenever you create a pull request, Netlify will create a deploy of the site showing your change. Watch Github for it to chime in on your pull request. It's pretty slick.

Finally, it should go without saying, but if you see something on the live site that you want to replicate, just search through this repository for words in the post and you'll find the markdown file that made that page.


### 1. On Github

To edit on github, pull up a file and edit it. When you're done, make a pull request and let Netlify make a deploy.

Choose this if you want to make small changes and are technical.

### 2. Via Netlify CMS

We have Netlify CMS set up here:

https://free.law/admin/index.html

Go there, if you like, and log in using Github. Once there, you can edit and create pages using a GUI, and it will generate pull requests for you. It's neat.

Use this if you're less technical or don't want to see the guts.

### 3. On your computer

If you're working on your computer, there's a file called example.js. Make a copy of it, edit it, and you're off to the races.

Use this if you want to get serious. 


[fl]: https://free.law
[pelican]: https://github.com/getpelican/pelican/
