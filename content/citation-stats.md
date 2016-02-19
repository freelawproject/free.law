Title: Some Citation Parsing Statistics
Author: mlissner
Date: 2016-02-17
Tags: statistics, citations, citator


We want to share some quick statistics today. We we just completed running our [citation parser][2] across the entire [CourtListener][cl] collection. If you follow our work, you'll know that the purpose of the citation parser is to go through every opinion in CourtListener and identify every citation from one opinion to another (such as "*[410 U.S. 113][c]*"). Once identified, the parser looks up the citation and attempts to make a hyperlink between the opinions so that if you see a citation while reading, you can click it to go to the correct place.

As you can imagine, looking up every citation in every opinion in CourtListener can take some time, so we only run our citation finder when we need to. In this case:

 - The process ran continuously for two weeks.
 - It ran a total of 253,872,460 queries against our search engine.
 - It found 25,471,410 citations between opinions.
 - There are about three million opinions currently in CourtListener.

After running the parser, the first stop I like to take is to go and see [the search results ordered by citation count][cited]. As usual, [*Strickland v. Washington*][svw] is on top (50,119 cites) followed by [*Celotex v. Catrell*][cvc] (49,360 cites):

[![Most Cited Opinions]({filename}/images/most-cited.png)][cited]

*The Most Cited Opinions in CourtListener*

Since the citations also impact [the relevance engine][citegeist], I also like to see which cases are considered the most relevant when no query is made. In this case, the top three are:

1. With 34,094 cites, [*Anders v. California*][avc]
1. With 50,131 cites, [Strickland v. Washington][svw]
1. With 13,375 cites, [Slack v. McDaniel][svmd]

This process requires significant processing time, so we only run this when we need to. This time we needed to run it as part of [the major upgrade we just finished][1] so that the database and search engine were updated properly.

As always, we're proud to offer these citations as a [CSV in our bulk data][bulk] or via the [CourtListener API][api].


[cl]: https://www.courtlistener.com/
[1]: {filename}/brand-new-courtlistener-a-year-in-the-works.md
[bulk]: https://www.courtlistener.com/api/bulk-info/
[api]: https://www.courtlistener.com/api/rest-info/
[2]: {filename}/building-a-citator-on-courtlistener.md
[c]: https://www.courtlistener.com/c/U.S./410/113/
[cited]: https://www.courtlistener.com/?q=&order_by=citeCount+desc&stat_Precedential=on
[svw]: https://www.courtlistener.com/opinion/111170/strickland-v-washington/
[cvc]: https://www.courtlistener.com/opinion/111722/celotex-corporation-v-myrtle-nell-catrett-administratrix-of-the-estate-of/
[avc]: https://www.courtlistener.com/opinion/107423/anders-v-california/
[svmd]: https://www.courtlistener.com/opinion/118359/slack-v-mcdaniel/
[citegeist]: {filename}/citegeist.md
