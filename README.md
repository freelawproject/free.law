# Free Law Project Website

This is the website for Free Law Project. Like the rest of our work, it is developed in the open and can be edited by other people.

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

    You will now have all the dependencies, including the Amazon command line tool installed.

1. Configure the Amazon tool by running:

        s3cmd --configure

    This will ask for your Access Key and Secret key, [which are at this link][1].

You're done!


## Writing a post

Posts are easy to write, but to make it even easier, there's a template called example.md. Start there!


## Generating HTML Content from Markdown files

Run a command like:

    /home/mlissner/.virtualenvs/free.law/bin/pelican content -s pelicanconf.py -d -r

This will use the development settings to delete the output directory before recreating it and will auto-reload whenever you change your content.


## Running a development server

Activate your virtualenv, change into the `output` directory, then run:

    python -m pelican.server

You'll find you have a server running on port 8000.


## Pushing content to Amazon (Publishing your post)

To publish your post, simply run:

    make s3_upload

This will regenerate the site using the publishconf.py file, then will sync it with Amazon, pushing anything new and deleting anything old.

[1]: https://console.aws.amazon.com/iam/home?region=us-west-2#security_credential
