# Free Law Project Website

This is [the website for Free Law Project][fl]. Like the rest of our work, it is developed in the open and can be edited by other people, like you. See a typo? Fix it! Want to make the site look better? Go for it!

This site uses the Pelican static site generator.

## Installation

1. Make a virtualenv and activate it.

1. Download this repository:

        git clone https://github.com/freelawproject/free.law.git

1. Install the requirements file:

        cd free.law
        pip install -r requirements.txt

1. Install the pelican-plugins in a directory next to your current directory.

        cd ..
        git clone https://github.com/getpelican/pelican-plugins.git

    You will now have all the dependencies, including the Amazon command line tool, installed.

1. If you're somebody that has permission to push the content to Amazon, configure the two Amazon tools by running:

        s3cmd --configure

    This will ask for your Access Key and Secret key, [which are at this link][keys].

    Configure the second tool with:

        aws configure

    Tell it your access and secret keys as well, and leave the region and output format blank. Then enable preview features by running:

        aws configure set preview.cloudfront true

You're done!


## Writing a post or a page

Posts are easy to write, but to make it even easier, there's a template called example.md. Make a copy of that file with a descriptive name and put it in the `content` directory. Write your post in markdown in that file and generate the HTML when you think your post is ready (read on for how to do that).

If you want to tag your post, unfortunately, we don't have autocomplete for that. So either just go for it, and we can embrace a folksonomy or look in the `output/tag` directory, where they're all listed.

If you're making a page, it's just like making a post, except you put it in the `content/pages` directory instead. You can also give it a custom slug if you want (you probably should).


## Generating HTML Content from Markdown Files

With your virtual env activated, run a command like:

    pelican content -s pelicanconf.py -d -r

This will use the development settings to delete the output directory before recreating it and will auto-reload whenever you change your content. Feel free to look at the other options the `pelican` command provides.


## Running a development server

Activate your virtualenv, change into the `output` directory, then run:

    python -m pelican.server

You'll find you have a server running on port 8000.


## Tweaking the default theme

All of its code is in the `themes` directory. Go for it.


## Pushing content to Amazon (Publishing Your Work)

To publish your post, simply run:

    make s3_upload

This will regenerate the site using the `publishconf.py` file, then will sync it with Amazon, pushing anything new and deleting anything old.

Note that if you're updating an item, you may have to wait for cache invalidation to occur before you'll see your changes. The cache is cleared automatically when you run `s3_upload`, but it can take a few minutes (sometimes up to ten) for the cache to clear everywhere.


# Infrastructure

There are a lot of pieces in this puzzle, so this is where they are documented. The set up that we have was [inspired greatly by the post here][1].

This is a diagram of the set up:

For requests to the naked domain:

    Route 53 (DNS) --> CloudFront Distribution --> S3 Bucket (free.law)

For requests to the www subdomain (hopefully a corner case):

    Route 53 (DNS) --> CloudFront WWW Distribution -->
    S3 Bucket (www.free.law) --> Redirects to naked domain --> Route 53 -->
    CloudFront Distribution (Redirects HTTP to HTTPS) --> S3 Bucket (free.law)

This means that there are essentially two parallel set ups for DNS (Route 53), Content Distribution (CloudFront) and File Serving (S3). Redirections from HTTP to HTTPS are configured in CloudFront. Redirections from www happen in an empty S3 bucket specifically for this purpose.

SSL is configured in Amazon Certificate Manager (ACM), which will handle auto-renewals and hopefully everything else.

All in all, this is a pretty killer set up. Most clients will get served by CloudFront and it will be incredibly fast. Clients that go to http://www.free.law will suffer three redirections:

 - First they get redirected to https://www.free.law
 - Then they get redirected to http://free.law
 - Finally, they get redirected to https://free.law

Life is hard for these people.

There is another weak point in this configuration. The connection between CloudFront and S3 is *not* encrypted. Pretty lame, but the reason for this is that you have to use the Static Site URL as the Origin that feeds into CloudFront, and that URL doesn't support SSL even though the S3 URLs do.


[1]: https://olivermak.es/2016/01/aws-tls-certificate-with-jekyll/
[fl]: https://free.law
[keys]: https://console.aws.amazon.com/iam/home?region=us-west-2#security_credential
