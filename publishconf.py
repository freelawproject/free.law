#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

import os
import sys

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.
sys.path.append(os.curdir)

# This line appears to do some magic. Remove it at your peril when you publish
# the site live.
from pelicanconf import *

#SITEURL = 'http://free.law.s3-website-us-east-1.amazonaws.com'
SITEURL = 'https://free.law'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'
TAG_FEED_ATOM = 'feeds/tag/%s'
AUTHOR_FEED_ATOM = "feeds/%s.atom.xml"
# Do the full RSS feed, not just a summary.
RSS_FEED_SUMMARY_ONLY = False


DELETE_OUTPUT_DIRECTORY = True

PIWIK_URL = 'www.courtlistener.com/piwik/'
PIWIK_SITE_ID = 2

# Following items are often useful when publishing

#DISQUS_SITENAME = ""
#GOOGLE_ANALYTICS = ""
