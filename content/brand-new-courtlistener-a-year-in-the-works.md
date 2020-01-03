Title: Many Improvements Released in New CourtListener Version
Author: Michael Lissner
Date: 2016-01-30 17:00:00
Tags: courtlistener, announcements

<div class="left-image">
    <a href="https://www.courtlistener.com">
        <img src="{static}/images/cl-3.png"
             alt="CL 3.0!"
             class="img-responsive"/>
    </a>
</div>

It's taken the better part of a year, but I'm thrilled to announce that a new and better version of [CourtListener is live as of this moment][cl]. If you can't tell the difference immediately, we see that as a good thing, since most of the enhancements are under the hood.

 - The most important changes in this version have to do with the database, which now supports a number of new features. Most importantly, legal opinions are no longer single entities. For example, in the past if we had the lead opinion, a dissent, and a concurrence, we had no choice but to put them all together and make them readable top to bottom on our site. That has been fine, but in our new system we introduce the concept of an Opinion Cluster, which consists of several "sub opinions".

     This will let us have links from a dissent to a concurrence, something we couldn't do before. Or we can change the way the "sub-opinions" are displayed so that you can easily go straight to the dissent or the concurrence, without having to scroll endlessly. In a similar way, we are now introducing dockets, which will soon tie together oral arguments, opinions and other related files in a case.

 - In preparation for our [Prototype Grant from the Knight Foundation][proto], CourtListener can now store detailed judicial data and associate that data with either an Opinion Cluster or a sub-opinion. In the old system, if we knew who the judges were in an Opinion, we'd simply have a field that said something like, "Sotomayor, Roberts, Scalia". Again, that's fine, but in the new system we can be much more detailed, stating which judges were on the panel, who wrote the lead opinion, who dissented, etc. We can make judge's names into links, and we can store all kinds of additional information about each judge such as where they got their education, what their title is, etc. We're working hard on gathering this data and we'll have a lot more to say about this soon.

 - A big feature that we're thrilled to share along with this new version is Citation Searching. This allows you to see all the opinions that cited an opinion you're interested in, and then use all the normal CourtListener filters to slice and dice those citations. This feature is so powerful [we wrote a whole post about it][1].

 - Finally, in pursuit of creating a robust and competitive legal ecosystem, we're sharing one more piece of data that has never been available before. For every case in CourtListener, we've generated or manually created short form case names. To legal writers, these are the short names that you might use to refer to an opinion after you've already cited it the first time (for example, "*Roe*" instead of "*Roe v. Wade*"). To read more about this, [check out out blog post on the topic][cns].

These changes are just the beginning of the improvements that are already live in the new version, and we have a number of other big projects that we will sharing soon. We hope you'll enjoy all the new benefits of the new version, and as always if you have praise, ideas, or find bugs, [let us know][contact]!


[1]: {filename}/citation-searching.md
[cns]: {filename}/short-form-case-names.md
[contact]: {filename}/pages/contact.md
[proto]: {filename}/knight-foundation-to-support-openjudiciary-org.md
[cl]: https://www.courtlistener.com
