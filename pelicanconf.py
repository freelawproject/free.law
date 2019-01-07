#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Free Law Project'
SITENAME = u'Free Law Project'
SITEURL = 'http://localhost:8080'

PATH = 'content'

TIMEZONE = 'America/Los_Angeles'
DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
FEED_MAX_ITEMS = 30

TYPOGRIFY = True
EXTENSIONS = ([
    'extra',
    'smarty',
    'footnotes',
    'toc',
])

# URL Settings
ARTICLE_URL = '{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = '{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
YEAR_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/index.html'
PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}/index.html'

STATIC_PATHS = [
    '.',  # For favicons.
    'css',
    'csv',
    'doc',
    'images',
    'keys',
    'odt',
    'pdf',
    'txt',
    'zip',
]

LINKS = (
    ('Donate to FLP', '/donate/'),
    ('Our Sponsors', '/sponsors/'),
    ("Join our Newsletter", '/newsletter/'),
    ("Data Services", '/data-consulting/'),
    ('CourtListener', 'https://www.courtlistener.com/'),
    ('RECAP', '/recap/'),
)

# Social widget
SOCIAL = (
    ('Free Law Project', 'https://twitter.com/freelawproject', 'twitter'),
    ('CourtListener', 'https://twitter.com/courtlistener', 'twitter'),
    ('RECAP', 'https://twitter.com/recapthelaw', 'twitter'),
    ('Facebook', 'https://www.facebook.com/freelawproject', 'facebook'),
    ('Github', 'https://github.com/freelawproject', 'github'),
)

DEFAULT_PAGINATION = 20
SUMMARY_MAX_LENGTH = 200

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


# Plugin Settings
PLUGIN_PATHS = ['../pelican-plugins']
PLUGINS = [
    'sitemap',
    'summary',
]
SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.6,
        'indexes': 0.4,
        'pages': 0.7
    },
    'changefreqs': {
        'articles': 'weekly',
        'indexes': 'daily',
        'pages': 'weekly',
    }
}

############
# Theme Settings
############
THEME = 'themes/pelican-bootstrap3'
BOOTSTRAP_THEME = 'flatly'
#BOOTSTRAP_NAVBAR_INVERSE = True

BANNER = 'images/scotus.jpeg'
BANNER_SUBTITLE = 'Providing free access to primary legal materials, developing legal research tools, and supporting academic research on legal corpora.'
BANNER_ALL_PAGES = False
CUSTOM_CSS = 'css/custom.css'

# We don't want anything on the menu because we write our own instead (see
# base.html).
DISPLAY_CATEGORIES_ON_MENU = False
DISPLAY_PAGES_ON_MENU = False

SHOW_ARTICLE_AUTHOR = True
SHOW_DATE_MODIFIED = True

TWITTER_USERNAME = 'freelawproject'
TWITTER_WIDGET_ID = '369965336176496641'
TWITTER_CARDS = True
OPEN_GRAPH_IMAGE = 'android-chrome-192x192.png'

CC_LICENSE = 'CC-BY-ND'
