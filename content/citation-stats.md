Title: Some Citation Parsing Statistics
Author: mlissner
Date: 2016-02-17
Tags: statistics, citations, citator
Status: Draft


<div class="right-image">
    <img src="{filename}/images/simple-graph-150x150.png" alt="demo graph">
    <div class="caption">
        <p>The citation network.</p>
    </div>
</div>

We want to share some quick statistics today. We we just completed running our [citation parser][2] across the entire [CourtListener][cl] collection. If you've followed our work, you'll know that the citation parser works through every opinion in CourtListener and identifies every citation to another opinion (such as "*[410 U.S. 113][c]*"). Once identified, it looks up the citation and attempts to link the two items together in the text so that if you click the citation you'll be taken to the correct opinion.

As you can imagine, looking up every citation in every opinion in CourtListener can take some time, so we only run our citation finder when we need to. In this case:

 - The process ran continuously for two weeks.
 - It ran a total of XX million queries against our search engine.
 - It found XXX citations between opinions.

This process requires significant processing time, so we only run this when we need to. This time we needed to run it as part of [the major upgrade we just finished][1] so that the database was updated properly.

As always, these citations are available as a [CSV in our bulk data][bulk] or via the [CourtListener API][api].


[cl]: https://www.courtlistener.com/
[1]: {filename}/brand-new-courtlistener-a-year-in-the-works.md
[bulk]: https://www.courtlistener.com/api/bulk-info/
[api]: https://www.courtlistener.com/api/rest-info/
[2]: {filename}/building-a-citator-on-courtlistener.md
[c]: https://www.courtlistener.com/c/U.S./410/113/
