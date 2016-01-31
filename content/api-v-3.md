Title: Releasing V3 of the API, Deprecating V1 and V2
Summary: We are releasing V3 of the CourtListener API, but we have to deprecate V1 and V2.
Author: mlissner
Date: 2016-01-31
Tags: API, Deprecation, Announcements, CourtListener, Bulk Data
Status: Draft

This post is one with mixed news, so I'll start with the good news, which is that version 3.0 of the CourtListener API is now available. It's a huge improvement over versions 1 and 2:

 - **It is now browsable**. [Go check it out][api]. You can click around the API and peruse the data without doing *any* programming. At the top of every page there is a button that says `Options`. Click that button to see all the filtering and complexity that lies behind an API endpoint.
 - **It can be sampled without authentication**. Previously, if you wanted to use the API, you had to log in. No more. In the new version, you can sample the API and click around. If you want to use it programatically, you'll still need to authenticate.
 - **It conforms with the new CourtListener database**. More on this in a moment, but the important part is that version 3 of the API supports Dockets, Opinion Clusters and Sub Opinions, linking them neatly to Judges.
 - **Search API support Citation Searching.** Our new [Citation Search][cs] is a powerful feature that's now available in the API.
 - **Bulk data now has metadata**. In response to [a user request][u], you can now learn when the bulk data was last generated. It's also pretty printed.

The new version of the API is a huge improvement over the old version, and I highly suggest [reading the new documentation][docs] to get a feel for what it's capable of.

![New API Schema]({filename}/images/schema-design-v3-small.png)

*The design of the new database*

The bad news is that versions 1 and 2 of the API are being deprecated with some haste. We investigated how difficult it would be to support these versions longer, but there are a number of problems that really can't be solved. The showstoppers are:

1. [The library used to generate v1 and v2][pie] has gone out of style, having been replaced by [the much-better library we're using in v3][drf]. The updates to the old library are slow and its developers are aloof, making bug fixes impossible and making support a nightmare. We simply need to move off it.

1. Our database has changed significantly and it's almost impossible to continue serving the old versions of the API using the new schema in the database.

There were some other problems too, but given the low amount of financial support we've received for versions 1 and 2 of the API, we cannot continue supporting them.

Deprecation of these APIs will proceed as follows:

1. Starting **immediately**, these versions are deprecated and we urge you to upgrade.
1. As of **February 29th**, these API versions will no longer receive new content. The scrapers will be turned off.
1. The last day for these APIs versions will be **March 31st**, after which point they will begin returning empty JSON objects.
1. After **March 31st**, all vestiges of these versions of the API will slowly be removed, and even empty json objects and documentation may go away.

This is a pretty aggressive deprecation policy, but it should be plenty of time for even complex clients to upgrade. Indeed, the new versions of the API are not so different from the old.

If you have concerns about this time line, please [get in touch][contact].


## Data Changes in New API

There are two major changes in the new API, both designed to make it more powerful and clear. First, the `Citation` endpoint has been folded into a new endpoint called `OpinionCluster`. This is a major simplification of the API since the `Citation` to `Document` relationship was always 1-to-1 anyway. By combining them, we eliminate the need to think about both of them individually. For legacy purposes, we have created a new field in the `OpinionCluster` objects called `citation_id`, which contains the id of the old `Citation` objects.

The second big change is splitting `Document`s into `OpinionCluster`s and `Opinion`s. The way to think about this is that `Opinion` objects have the information that applies specifically to a dissent, concurrence, etc., such as the text of an opinion, the author or the judges that joined in the opinion. In general, it's a pretty simply object. `OpinionCluster` objects contain all the information that applies to the entire opinion like the date filed, any citations from West, Lexis or elsewhere, and pretty much everything else. As mentioned in [the announcement post][ann], this will make the API much more powerful.

Aside from these two major changes, the other changes are an overarching normalization of field names, the addition of judge endpoints, which we'll be announcing in more detail soon, and an expansion in the power of API filters.

In general, we think this upgrade to the API is going to really be powerful and we're really excited to be offering it. We'd love to support all versions of every API forever, but hopefully the deprecation policy will be long enough to upgrade your deployments.

If you have questions or ideas about any version of the API or if you need help with your upgrade, please [get in touch][contact].

[api]: https://www.courtlistener.com/api/rest/v3/
[u]: https://github.com/freelawproject/courtlistener/issues/331
[cs]: {filename}/citation-searching.md
[docs]: https://www.courtlistener.com/api/rest-info/
[ann]: {filename}/brand-new-courtlistener-a-year-in-the-works.md
[contact]: {filename}/pages/contact.md
[pie]: https://django-tastypie.readthedocs.org/en/latest/
[drf]: http://www.django-rest-framework.org/
