Title: Citation Searching on CourtListener
Author: Michael Lissner
Date: 2016-01-30 18:00:00
Tags: announcements, citations, courtlistener, API, alerts, RSS


One of the great new features that [the new version of CourtListener][1] provides is what we're calling Citation Searching. Citation Searching lets you look at all the opinions that cite an opinion you're interested in and then slice and dice them so that you only see the ones that are important to you.

For example, say you're looking at [*Roe v. Wade*][roe] and you want to analyze the cases that have cited it. In CourtListener, in the sidebar on the left, there's a list of the opinions citing the one you're looking at, in the section called "Cited By". At the bottom of that section, there's a link that says, "Full List of Cited Opinions".

![Sidebar]({static}/images/cited-by-sidebar.png)

If you click that link, you'll be taken back to the search results page, and you'll see that your query is for `cites:(108713)`. The number in there is the ID of *Roe v. Wade* that you can see in its URL. This is just standard CourtListener search syntax, so you can tweak it however you like.

For example, another important case in this area is *[Planned Parenthood v. Casey][pp]*, which has an ID of `112786`. If you want cases that cite both *Roe* and *Casey*, you can do a query for:

    cites:(108713 AND 112786)

That brings back 205 results. If you want to find out cases that cite either *Roe* OR *Casey*, you can do that too:

    cites:(108713 OR 112786)

That brings back about 1,600 results. In this example, we won't do that, so we see 1,271 cases that cite just *Roe v. Wade*, and those opinions can now be filtered however we like.

Let's assume that you want to look for opinions citing *Roe v. Wade* that have the phrase "Planned Parenthood". To do that, we'll change the query to `cites:(108713) "planned parenthood"`.

![PP Query]({static}/images/citing-roe-pp.png)

That brings the number of opinions that cite *Roe v. Wade* to only 352 cases, but that's still a lot to review. Perhaps you can filter down to only cases in the Ninth Circuit using [the Jurisdiction Picker][picker]. If you do that, you will have 32 opinions remaining, and they'll be sorted by relevancy to show which ones are most important.


## Citation Alerts

Another use of Citation Searching is to tie it in with our alert system. If you're logged into CourtListener, and you're looking at search results, you'll see a sidebar that allows you to create an alert.

![Alert Sidebar]({static}/images/alert-sidebar.png)

Now that you have a query that you like (all cases citing *Roe v. Wade* in the Ninth Circuit containing the phrase "Planned Parenthood"), you can create an alert so that whenever a new case fits these criteria you get an email sent to you at the end of the day, week, or even in [real time][rt], if you're a Free Law Project supporter.

As always, you can also set up an [RSS feed][feeds] for any query, if you're familiar with that technology, and these queries are also available on our API.

Citation searching is a feature that we've wanted to deploy for a long time, ever since we realized it was possible. We're sure it's going to become a valuable part of your research process, and we hope that if you like it, you'll [consider making a donation to support our work][donate]. As always, if you have any ideas for making it better please let us know!


[1]: {filename}/brand-new-courtlistener-a-year-in-the-works.md
[roe]: https://www.courtlistener.com/opinion/108713/roe-v-wade/
[picker]: {filename}/our-new-jurisdiction-picker.md
[rt]: {filename}/courtlistener-will-now-send-alerts-in-real-time.md
[feeds]: https://www.courtlistener.com/feeds/
[donate]: {filename}/pages/donate.md
[pp]: https://courtlistener.com/opinion/112786/planned-parenthood-of-southeastern-pa-v-casey/
