Title: Supreme Court Data in Bulk and Via a REST API
Slug: supreme-court-data
Date: 2016-02-10
Tags: data-wrangling, supreme court, API, bulk data, scotus
Summary: Free Law Project has sponsored the creation of detailed Supreme Court Data and made it available via their CourtListener website. The data combines the best of many sources including the Supreme Court Database (SCDB), Resource.org, Library of Congress, and the Supreme Court's website. The data is available as XML or JSON in bulk data format or via an API.


The Supreme Court is the most important court in the United States and for many years, we have worked to create the most complete and detailed collection of Supreme Court data possible.

In this task, we have combined many sources of data including the [Supreme Court Database][scdb], the [opinions available on Resource.org][pro], [Library of Congress][loc], and downloads that we have [collected directly][js] from the [Supreme Court website][scotus] itself. All of this data has been carefully combined, fixing innumerable errors both manually and with automated systems.

For example, one such automated system is [our Citator][c], which automatically finds citations between opinions. Using this system you can [download a CSV of all of the citations][csv] in CourtListener, or by [using our API][cite-api] you can download them in a more granular fashion. Unlike many other citators, ours is *not* powered by regular expressions. Instead, it [relies on our Reporter DB][rdb], and runs millions of queries against our backend. We run it for every new opinion that we get every day, and use the resulting network of cases to develop [PageRank-like scores][citegeist] for every case.

We do a number of processes like this to build up the data, and as you can see, we're immensely proud of the result. We hope that you'll use and improve it too. The best way to get started is to check out our bulk data or our APIs, where you'll find lots of documentation.

[Let us know][contact] if you have any ideas for improvement or questions we can help with!

<a href="https://www.courtlistener.com/api/" class="btn btn-primary btn-lg">Check Out the APIs</a>


[pro]: https://law.resource.org/pub/us/case/reporter/US/
[scdb]: {filename}/scdb.md
[scotus]: http://www.supremecourt.gov/
[loc]: {filename}/updated-scotus-dates.md
[c]: {filename}/building-a-citator-on-courtlistener.md
[csv]: https://www.courtlistener.com/api/bulk-info/#citation-data
[cite-api]: https://www.courtlistener.com/api/rest-info/#cites-endpoint
[citegeist]: {filename}/citegeist.md
[contact]: {filename/pages/contact.md
[js]: https://github.com/freelawproject/juriscraper
[rdb]: https://github.com/freelawproject/reporters-db
