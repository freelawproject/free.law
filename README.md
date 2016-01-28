# Free Law Project Website

This is the website for Free Law Project. Like the rest of our work, it is developed in the open and can be edited by other people.

This site uses the Pelican static site generator.

## Installation

1. Make a virtualenv and activate it.

1. Install the requirements file:

        pip install -r requirements.txt

You will now have the Amazon command line tool installed, but it needs to be configured. To do so, run:

    s3cmd --configure

It will ask for your Access Key and Secret key, [which are at this link][1].

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


[1]: https://console.aws.amazon.com/iam/home?region=us-west-2#security_credential
