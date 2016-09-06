Title: CourtListener's SCOTUS Data Gets Even Better
Author: mlissner
Date: 2016-08-15
Tags: SCDB, CourtListener, Visualizations
Status: Draft

We're excited to share that as of today, we have added the latest data from the Supreme Court Database (SCDB) into CourtListener. This update adds SCDB ID's, parallel citations, vote counts, and decision direction data to about 20,000 Supreme Court cases. Each of these enhancements enables some great functionality.

For example, now that we have vote counts for older cases, you can create visualizations of older topics, like the "[Separate but Equal" doctrine][sbe] or the [Commerce Clause][cc]. Colin Starger, the creator of SCOTUS Mapper, has been working with this early data and has created a variety of fascinating [historical Supreme Court network graphs][hscotus]. 

Here's a taste, showing *[Katz v. U.S.][k]* plotted to *[Olmstead][o]*. In this graph you can see that over time the vote went from a divided conservative vote in 1928 to a divided liberal vote in 1967:

<iframe height="540" width="560" src="https://www.courtlistener.com/visualizations/scotus-mapper/962/embed/?dos=2&type=spaeth&xaxis=time" frameborder="0" allowfullscreen></iframe>

The other big enhancement that we're excited about is that we were able to add about 60,000 parallel citations to the cases we have in CourtListener. This enables our citation parser to find these old citations and to link cases together where we otherwise wouldn't have known how. It's also means that if you use our [Citation Lookup Tool][c], you can now look up 60,000 more citations than you could before. For example, *Dred Scott v. Sandford* from 1857 used to have one citation in CourtListener, "60 U.S. 393." Now it has four:

> 60 U.S. 393
> 15 L. Ed. 691
> 19 How. 393
> 1856 U.S. LEXIS 472

And you can look up any of them in the citation tool.

The final enhancement to our data that we're excited about is the addition of SCDB ID's to all of these cases. This allows you to look at any old SCOTUS case, and map it back to the Supreme Court Database, where there is even more data that we didn't pull into CourtListener. 
   
[c]: https://www.courtlistener.com/c/
[sbe]: https://www.courtlistener.com/visualizations/scotus-mapper/968/plessy-1896-to-brown-1954/?dos=3&type=dos&xaxis=time
[cc]: https://www.courtlistener.com/visualizations/scotus-mapper/958/swift-1905-to-schechter-poultry-1935/?dos=2&type=dos&xaxis=time
[hscotus]: http://home.ubalt.edu/id86mp66/scotusmapper/Historical_SCOTUS.html
[o]: https://www.courtlistener.com/opinion/101320/olmstead-v-united-states/
[k]: https://www.courtlistener.com/opinion/107564/katz-v-united-states/
