---
title: "Building a Citator on CourtListener"
date: "2012-05-11 13:54"
author: Michael Lissner
tags: ["Announcements", "Bulk Data", "Citator", "CourtListener", "Search", "UC Berkeley School of Information"]
---
Slug: building-a-citator-on-courtlistener
status: published
---

I'm incredibly excited today to announce that over the past few weeks we
have successsfully rolled out a **Citator** on CourtListener. This
feature was developed by UC Berkeley School of Information students
Karen Rustad and Rowyn McDonald after a thorough design and development
cycle which included everything from user interviews to performance
optimizations of our citation finding algorithm.

As you're browsing the site, you'll immediately see three big new
features. First, all Federal citations to documents that we have in our
collection are now links. So as you're reading, if there's a reference
to a prior case that you feel might be useful to your research, you can
just click the link to that case and continue your research there. This
allows you to go upstream in your research, looking at the important
cases that came before.

The second big change you'll see is a new sidebar on all case pages that
lists the top five cases that reference the one you're reading. This
allows you to go downstream from the case you're reading, where you'll
be able to identify how the case was later interpreted by other courts.

At the bottom of this list of five cases, you'll see a link which will
take you to the cited by page. This page is the third big change you'll
notice, and it shows you all of the cases that cited the one you're
reading, sorted by how many times those cases were cited.

But we've gone beyond even these great features, and added a few others
as well. If you use RSS, you can now subscribe to a case, and whenever
it is cited in the future, you'll get an RSS update of the new
citations. You can find these RSS feeds immediately on every case page.
Further, since we believe in giving away all the data that we generate,
we're now doing something nobody else is: We're giving away the legal
citation graph. If you download our latest data dumps, there's a new
field for each case that indicates what other cases have cited it thus
far. We hope this will be useful for a number of different fields, and
are really excited to see what people do with it.

Finally, we have plans to integrate the citation graph into our search
results. This should be complete soon, and will provide two great new
features of its own. First, it will allow you to place searches that
only show documents with more than a certain number of citations. So,
for example, you'll be able to search for something like [ immigration
citeCount:40 ], and you'll only get back cases that were cited more than
40 times, and which contain the word "immigration." Again, this is
something nobody else offers, and we're excited to be offering it soon.

The final big change that is in the works is an update to our relevance
engine which will take the citation graph into account, providing
greatly increased relevance calculations, and making the very best and
most influential cases float to the top of your search results. This is
similar to how many web search engines work, so we're really excited to
be moving towards this technology.

All these changes would not be possible without the hard work of Karen
and Rowyn and the open source development model we have for
CourtListener. I'm thrilled to have these features on the site as of
now.

As ever, we're eager to hear your feedback! If you have suggestions for
improvement or ideas for new features, don't hesitate to get in touch.
CourtListener will always be a community project, and we need your
participation to succeed!

