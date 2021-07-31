---
title: "Support for x-robots-tag and robots HTML meta tag"
date: "2012-01-25 13:14"
author: Michael Lissner
tags: ["Privacy", "robots.txt", "Search", "x-robots-tag"]
---
Slug: support-for-x-robots-tag-and-robots-html-meta-tag
status: published
---

As part of our research for [our
post](/blog/respecting-privacy-while-providing-hundreds-of-thousands-of-public-documents)
on how we block search engines, we looked into which search engines
support which privacy standards. This information doesn't seem to exist
anywhere else on the Internet, so below are our findings, starting with
the big guys, and moving towards more obscure or foreign search engines.

### Google, Bing

Google (known as Googlebot) and Bing (known as Bingbot) support the
x-robots-tag header and the robots HTML tag. Here's [Google's
page](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=79812)
on the topic. And [here's
Bing's](http://www.bing.com/community/site_blogs/b/webmaster/archive/2009/08/21/prevent-a-bot-from-getting-lost-in-space-sem-101.aspx).
The [msnbot is
retired](http://www.bing.com/community/site_blogs/b/webmaster/archive/2009/11/04/msnbot-1-1-is-retired.aspx).

### Yahoo, AOL

Yahoo!'s search engine is provided by Bing. AOL's is provided by Google.
These are easy ones.

### Ask, Yandex, Nutch

Ask (known as teoma), and Yandex (Russia's search engine, known as
yandex), support the robots meta tag, but do not appear to support the
x-robots-tag. Ask's page on the topic [is
here](http://www.ask.com/staticcontent/about/helpcenter/about_helpcenter_webmaster#5),
and Yandex's [is here](http://help.yandex.com/webmaster/?id=1113833).
The popular open source crawler, [Nutch](http://nutch.apache.org/), also
[supports the robots HTML
tag](http://nutch.sourceforge.net/docs/en/bot.html), but [not the
x-robots-tag
header](http://lucene.472066.n3.nabble.com/Support-for-x-robots-tag-td3678606.html).
*Update:* Newer versions of Nutch now support x-robots-tag!

### The Internet Archive, Alexa

The Internet Archive uses Alexa's crawler, which is known as
ia\_archiver. This crawler does not seem to support either the HTML
robots meta tag nor the x-robots-tag HTTP header. Their page on the
subject [is here](http://www.alexa.com/help/webmasters). I have
requested more information from them, and will update this page if I
hear back.

### Duckduckgo, Blekko, Baidu

Duckduckgo and Blekko do not support either the robots meta tag nor the
x-robots-tag header, per emails I've had with each of them. I also
requested information from Baidu, but their response totally ignored my
question and was in Chinese. They do have some information
[here](http://wenku.baidu.com/view/ec4457d4b14e852458fb5793.html), but
it does not seem to provide any information on the noindex value for the
robots tag. In any case, the only way to block these crawlers seems to
be via a robots.txt file.

