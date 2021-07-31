---
title: "Judge Profiles on CourtListener Now Show the Cases Authored by Each Judge"
author: Michael Lissner
date: "2016-06-29"
tags: ["judge database", "announcements", "linkages", "courtlistener"]
---

When we launched our [judicial database][jdb], we shared our plan to show the cases written by each judge. As of today, we're pleased to share that we've launched the first iteration of that endeavor. If you pull up any judge, say, [Sonia Sotomayor][ss], you'll see a new section at the bottom that looks like this:

<div className="left-image">
    <a href="https://www.courtlistener.com/person/3045/sonia-sotomayor/#authored-opinions">
        <img src="/images/sotomayor-authorship.png"
             alt="Sotomayor's top opinions"
             className="img-responsive border"/>
    </a>
</div>
<div className="clearfix"></div>


This listing provides the five most important opinions by the judge, and you can click the button at the bottom to see all of the cases they wrote or participated in. Clicking the button takes you to our search results, where you can slice and dice the data, choosing, for example, to see only [their opinions from the Second Circuit][s2d], or [their Supreme Court Cases][sscotus].

In the search results and in the list on the judge profile page, the opinions are ordered by relevance, using our [CiteGeist relevance engine][cg]. This highlights the cases that have been cited the most frequently by the most important cases.

Finally, you can now get an RSS feed for any active judge in our system, enabling you to keep up with anything they write. To do so, click the RSS icon (<i className="fa fa-rss gray"></i>), and configure it with your RSS reader.

We consider this to be a beta release of this feature -- it's useful in its present form, but we know it will get better as our metadata improves. This isn't *yet* a perfect listing of judges, but it's a useful tool, so we want to expose it as soon as possible.


[jdb]: {filename}/judge_database.md
[ss]: https://www.courtlistener.com/person/3045/sonia-sotomayor/#authored-opinions
[cg]: {filename}/citegeist.md
[s2d]: https://www.courtlistener.com/?q=author_id%3A3045+OR+panel_ids%3A3045&type=o&stat_Precedential=on&order_by=score+desc&court=ca2
[sscotus]: https://www.courtlistener.com/?q=author_id%3A3045+OR+panel_ids%3A3045&type=o&stat_Precedential=on&order_by=score+desc&court=scotus
[contact]: /contact/
