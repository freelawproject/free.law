Title: Free Law Project Unveils API for Court Opinions
Date: 2013-11-19 08:00
Author: mlissner
Tags: Announcements, API, Citator, CourtListener, Courts, Practical Obscurity, Search, Technology
Slug: free-law-project-unveils-api-for-american-opinions
Status: published

[![powered-by
logo](http://freelawproject.org/wp-content/uploads/2013/11/full-light-250w.png)](http://freelawproject.org/wp-content/uploads/2013/11/full-light-250w.png)

Today marks another big day for the Free Law Project. We're happy to
share that we've created [the first ever API for U.S. Legal
Opinions](https://www.courtlistener.com/api/rest-info/). An API --- or
Application Programming Interface --- is a way for computers to talk to
each other and consume each others' data in an automated fashion. From
this day forth, developers, researchers and legal startups can begin
consuming the data that we have at CourtListener in a granular and very
specific manner.

For example, here are some very basic things that can be done with our
API (these links will only work if you are [signed
in](https://www.courtlistener.com/sign-in/) to your CourtListener
account):

-   Include a list of relevant opinions on your blog or website.
-   Get a list of the new opinions of the day ([here's today's, for
    example](https://www.courtlistener.com/api/rest/v1/opinion/?date_filed=2013-11-19))
    and make a Twitter or Facebook page from it.
-   Keep track of [opinions that we've blocked from search
    engines](https://www.courtlistener.com/api/rest/v1/opinion/?order_by=-date_blocked&blocked=True&fields=absolute_url,date_blocked,blocked,id&format=json)
    at the request of an involved party. This might allow you to block
    such cases in your project or otherwise analyze privacy concerns in
    legal opinions.
-   See [modifications that we've recently made to our
    collection](https://www.courtlistener.com/api/rest/v1/opinion/?order_by=date_modified)
    (this can sometimes be a very large number of items!).
-   Interrogate or track the [citations within an
    opinion](https://www.courtlistener.com/api/rest/v1/cites/?id=111170)
    or the [citations to an
    opinion](https://www.courtlistener.com/api/rest/v1/cited-by/?id=111170)
    you're interested in.
-   Keep track of [changes to our database of American
    jurisdictions](https://www.courtlistener.com/api/rest/v1/jurisdiction/?order_by=-date_modified)
    or simply [get a list of
    them](https://www.courtlistener.com/api/rest/v1/jurisdiction/).
-   Show the most relevant opinions for a controversial topic like
    [abortion](https://www.courtlistener.com/api/rest/v1/search/?order_by=score+desc&q=abortion)
    (*Roe v. Wade* is the second hit thanks to
    [CiteGeist](/2013/11/12/courtlistener-improves-search-results-thanks-to-volunteer-contributor/)).
-   Build a citation cross-walk that allows you to find parallel
    citations.

And this is just the beginning. Legal data has been hard to query and
analyze for a very long time, and with this initiative we hope to begin
breaking down this barrier. If you're interested in using our API, it's
free, though we appreciate a linkback or a [powered-by
logo](/about/assets/#powered-by). Just make sure you're logged in, and
you'll be good to go.

Check out the
[documentation](https://www.courtlistener.com/api/rest-info/) or our
entry on [Programmable
Web](http://www.programmableweb.com/api/courtlistener).

Posted By: Michael Lissner

