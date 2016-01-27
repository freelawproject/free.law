Title: CourtListener and Juriscraper Now Support All State Courts of Last Resort!
Date: 2014-08-12 04:56
Author: mlissner
Category: Announcements, CourtListener, Juriscraper
Slug: courtlistener-and-juriscraper-now-support-all-state-courts-of-last-resort
Status: published

In 2010, we wrote [our first
scraper](https://github.com/freelawproject/courtlistener/commit/792fa372d1bc73ffa8d34734c37287424508e9fc).
It was a nasty affair that could do nothing more than download PDFs from
a webpage -- any webpage. Since that point, we've come a long way and
today we're extremely excited to announce that the
[Juriscraper](https://github.com/freelawproject/juriscraper) library now
supports **every state court of last resort**. In most states this is
the "Supreme Court", though some states call their highest court the
"Court of Appeals" or similar.

This means that no matter what jurisdiction interests you, no matter
what area of the law you work in, you can follow the works of your
state's highest court in real time, getting emails or RSS feeds of the
latest cases that interest you. And, of course, as new opinions are
issued by these courts, we will keep adding them to our system,
continuing to build the biggest repository of cases we can. As of today,
Juriscraper has collected more than 400,000 opinions, and we expect that
number to grow and grow.

On top of this, we also support dozens of intermediate State appellate
courts and all of the federal courts of appeals. Check [our
list](https://www.courtlistener.com/coverage/#scraped-jurisdictions) to
see if a specific court is supported and let us know if there's one we
should add -- user requests are often how we prioritize our work! There
are already a few administrative bodies and other specialized courts
that we plan to add soon.

Completing our appellate court coverage is a milestone we've been
working towards for a very long time, and we could never have gotten
here without lots of support, both financial and social. The following
people have contributed code, presentations and time to help get
Juriscraper where it is today (let me know if I forgot you!):

-   Asadullah Baig
-   Brian Carver
-   Ben Cassedy
-   Andrei Chelaru
-   Alan deLevie
-   Bo Jin (Krist)
-   Deb Linton
-   Andrew McConachie
-   Matt Meiske
-   Taliah B. Mirmalek
-   Polya Pelova
-   Raymond Yee
-   David Zvenyach

And the following organizations have provided generous support for this
project:

-   [Columbia
    University](https://library.columbia.edu/bts/web_resources_collection/call_for_proposals.html)
-   [PlainSite](https://plainsite.org)
-   [Resouce.org](http://resouce.org)

Thank you all very much for the great work you've done and the support
you've provided. We now have a complete and free system for efficiently
gathering opinions from state courts of last resort.

This is truly a momentous day and you might be wondering what's next for
Juriscraper. The first thing we've begun doing already is to collect
oral argument audio. An important feature of Juriscraper's design is
modularity and after a few minor re-workings, the code is now
well-positioned to archive more than just court opinions. We are
currently working on expanding Juriscraper's reach to audio files and we
soon expect to build an archive of oral arguments.

Beyond this, Juriscraper's design allows it to be easily turned to other
document types or jurisdictions entirely. We have long thought that we'd
also like to archive open access law journal articles and incorporate
those into CourtListener. (Get in touch if you'd like to help!) Or you
might have some entirely different archiving project in mind, the
Juriscraper code can take much of the heavy lifting out of your way and
allow you to focus on the unique aspects of the documents you're hoping
to archive. If you put the code to some such alternative use, please get
in touch to let us know!

