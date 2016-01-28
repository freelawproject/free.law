Title: Free Law Project Adds More than 1.5M Opinions to its Collection Thanks to Data Donation
Date: 2013-10-30 07:00
Author: mlissner
Tags: Announcements, API, Bulk Data, Citator, CourtListener, Courts, Coverage, Data Wrangling
Slug: free-law-project-adds-more-than-a-million-opinions-to-the-public-domain-thanks-to-data-donation
Status: published

<div class="left-image">
    <a href="http://lawboxapps.com">
        <img src="{filename}/images/lawbox-150x150.png"
             alt="lawbox
                  logo"/>
    </a>
</div>

*For Immediate Release --- Berkeley, CA*

After many years of collecting and curating data, today
[CourtListener](https://www.courtlistener.com/) crossed some incredible
boundaries. Thanks to a generous [data
donation](https://www.courtlistener.com/donate/#data) from [Lawbox
LLC](http://lawboxapps.com/), our computers are currently adding more
than 1.5M new opinions to CourtListener, expanding our coverage to a
total of more than 350 jurisdictions. This new data enables legal
professionals and researchers insight into data that has never before
been available in bulk and greatly enhances the data we previously had.
This data will be slowly rolling out in our front end, and will soon be
available in bulk from our [bulk downloads
page](https://www.courtlistener.com/dump-info/). A new version of [our
coverage page](https://www.courtlistener.com/coverage/) was developed,
and, as always, you can see our current coverage for any jurisdiction we
support.

It's difficult to overstate the importance of this new data. In addition
to being a massive expansion of our coverage, it also brings some
notable improvements to the project:

1.  For all of the new data and much of our old data, we have added star
    pagination throughout. For the first time, this will make pinpoint
    citations possible using the CourtListener platform.
2.  We've re-organized our database for more accurate citations enabling
    for the first time the creation of a citation cross walk. We will
    soon be releasing an API for our data and when we do, a simple query
    for a citation could tell you equivalent citations for that opinion.
    For example, a query for a Supreme Court opinion could tell you its
    citation in West's Federal Reporter, Lawyers' Edition, and a
    historical citation, like one to Howard's Supreme Court Reports.
    Similarly, for courts with neutral citations, one could query the
    neutral citation and get back the citation in the regional reporter
    and state reporter or vice versa. This has long been a pipe dream
    for numerous legal professionals and will soon be a reality.
3.  This fills in previously unknown gaps in the data available from
    Resource.org. Although it is often considered complete, we have
    identified a few small gaps, which this donation has corrected.
4.  We've completed a first pass at extracting judge information from
    all of the new opinions. This feature is still in beta since our
    extraction is not comprehensive, but this feature can be used for
    rough queries starting immediately.
5.  We've created [a massive
    database](https://github.com/freelawproject/reporters-db) of all
    known reporters and released it for free to the public. In addition
    to containing all of the reporters we found when working with this
    donation, it contains variations for their names as found in our
    corpus and in the [Cardiff Index to Legal
    Abbreviations](http://www.legalabbrevs.cardiff.ac.uk/). This
    database can be used in citation finders or other tools, like the
    [Free Law
    Ferret](http://citationstylist.org/2013/08/20/free-law-ferret-document-to-cited-cases-in-a-click/).
6.  We've created [a new
    database](https://github.com/freelawproject/courtlistener/blob/master/alert/search/fixtures/court_data.json)
    of American jurisdictions. It currently contains 351 jurisdictions
    and can be used to create systems such as CourtListener. The data is
    not yet complete and we welcome your contributions.

As you can tell, this is a very big day for the Free Law Project and the
legal world --- one that we've quietly been working towards for months.
Over the remainder of the week we will be writing two additional posts
about this topic, explaining the design work behind our new jurisdiction
picker, and the process we use to merge new corpuses in with our
existing data.

We hope that these new opinions and features will unleash a new surge in
legal research and technology, and that you'll help [support our
project](https://www.courtlistener.com/donate/#data) so that we can
continue bringing these technologies and information to the fore.

