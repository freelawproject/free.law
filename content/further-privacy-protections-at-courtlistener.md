Title: Further privacy protections at CourtListener
Date: 2012-04-27 12:54
Author: mlissner
Tags: CourtListener, Policy, Privacy, sitemaps.xml, Technology
Slug: further-privacy-protections-at-courtlistener
Status: published

I've [written
previously](http://michaeljaylissner.com/blog/respecting-privacy-while-providing-hundreds-of-thousands-of-public-documents)
about the lengths we go to at CourtListener to protect people's privacy,
and today we completed one more privacy enhancement.

After my last post on this topic, we discovered that although we had
already blocked cases from appearing in the search results of all major
search engines, we had a privacy leak in the form of our
computer-readable sitemaps. These sitemaps contain links to every page
within a website, and since those links contain the names of the parties
in a case, it's possible that a Google search for the party name could
turn up results that should be hidden.

This was problematic, and as of now we have changed the way we serve
sitemaps so that they use the noindex X-Robots-Tag HTTP header. This
tells search crawlers that they are welcome to read our sitemaps, but
that they should avoid serving them or indexing them.

