Title: Announcing Oral Arguments on CourtListener
Date: 2014-10-31 08:22
Author: mlissner
Tags: Announcements, API, Bulk Data, CourtListener, Coverage, Juriscraper, Oral Arguments
Slug: announcing-oral-arguments-on-courtlistener-2
Status: published

We're very excited to announce that CourtListener is currently in the
process of rolling out support for Oral Argument audio. This is a
feature that we've wanted for at least four years -- our
name *is *CourtListener, after all -- and one that will bring a raft
of new features to the project. We already have about 500 oral arguments
on the site, and we've got many more we'll be adding over the coming
weeks.

For now we are getting oral argument audio in real time from [ten
federal appellate
courts](https://www.courtlistener.com/coverage/#scraped-jurisdictions).
As we get this audio, we are using it to power a number of features:

-   Oral Argument files become immediately available in our search
    results.
-   A podcast is automatically available for every jurisdiction we
    support and for any query that you can dream up. Want a custom
    podcast containing all of the 9th circuit arguments for a particular
    litigant? You got it.
-   You can now get alerts for oral arguments so you can be sure that
    you keep up with the latest coming out of the courts.
-   For developers, there are a number of new endpoints in both our
    [REST API](https://www.courtlistener.com/api/rest-info/) and our
    [bulk data API](https://www.courtlistener.com/api/bulk-info/) for
    audio files.
-   Using the [Free Law Seal
    Rookery](https://github.com/freelawproject/seal-rookery), we are
    enhancing the audio we find on court websites by adding album art
    and better meta data.

For now, search results and alerts are limited to the data that is
provided by court websites, so you cannot (yet) get alerted any time
somebody says a certain word in court. Audio is a new area for us though
and we'd absolutely love to automatically create transcripts for the
courts, enabling such a feature. This would be an incredibly powerful
feature, so if you are an expert on audio transcription, we'd love to
hear from you and to work together on this.

Beyond all of the great features we're rolling out today, oral argument
data also marks an important turning point for the project because it
lays the ground work for adding more types of data to CourtListener.
It's been [a large
undertaking](https://github.com/freelawproject/courtlistener/compare/f5a5cadb5f24372dd2d1f674f892d3a3cd7110fe...master)
adding a second type of data to the project, but adding a third will be
much easier. Next in our hopper will likely be the content from RECAP so
that you can create alerts, have powerful APIs, and do all the other
things you expect from CourtListener, except this time, for documents
from PACER.

We're very excited about being able to provide oral argument data today
and RECAP data tomorrow. We can't wait to see what kinds of legal
research and innovation these new features bring.

