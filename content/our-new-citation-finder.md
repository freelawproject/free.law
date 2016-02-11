Title: Our New Citation Finder
Date: 2015-11-30 11:50
Author: mlissner
Tags: Announcements, Citator, CourtListener, Data Wrangling
Slug: our-new-citation-finder
Status: published

CourtListener now has [a new citation finder][1] that you can use with any
citation in our system. It's dead simple. There are two ways to use it.

Either simply type in the citation you want to look up:

![Citation Lookup]({filename}/images/citation-lookup.png)

Or, just make a link with a format like:

-   https://www.courtlistener.com/c/REPORTER/VOLUME/PAGE/

And you'll get to the page for that citation. For example, using
parallel citations, any of these links will take you to *Citizen's
United v. Federal Elections Commission*:

-   [https://www.courtlistener.com/c/<span
    class="meta-data-value">U.S./558/310/</span>](https://www.courtlistener.com/c/U.S./558/310/)
-   [<span class="meta-data-value">https://www.courtlistener.com/c/S.
    Ct./130/876/</span>](https://www.courtlistener.com/c/S.%20Ct./130/876/)
-   [https://www.courtlistener.com/c/<span class="meta-data-value">L.
    Ed.
    2d/175/753/</span>](https://www.courtlistener.com/c/L.%20Ed.%202d/175/753/)
-   <span class="meta-data-value">[https://www.courtlistener.com/c/U.S.
    LEXIS/2010/766/](https://www.courtlistener.com/c/U.S.%20LEXIS/2010/766/)</span>

This new tool relies on our existing citation extractor, which extracts thousands of citations from opinions every day. As a result, these links are also able to handle alternate names for any reporter that we have encoded in our [Reporters Database][rdb]. For example, the [United States Reports][usr] has historically also been abbreviated as "U.S.S.C.Rep." or "USSCR". Use either of these, and you'll find that they also work without a hitch:

-   <https://www.courtlistener.com/c/U.S.S.C.Rep./558/310/>
-   <https://www.courtlistener.com/c/USSCR/558/310/>

Of course, this isn't just limited to important reporters like the *United States Reports*. We have alternate names for hundreds of other reporters like the *Vermont Reports*, which can variously be referred to as "Vt.", "V.R." or "Verm.", or the *Hill and Denio Supplement* (1842-1844), which can be "Hill & Den.", "Hill & D.Supp.", "Hill & Den.Supp.", "Lalor" or even "Lalor Supp." If we have a citation for any of these reporters, this new tool will help you look up the correct case.

A hitch of the American legal system is that many reporters are not
unique. For example, there are many opinions that are only a sentence or
two, and in some instances several opinions are placed on the same page
in the reporter. For example, this citation refers to two different
Supreme Court opinions, each only a paragraph or two long:

-   <https://www.courtlistener.com/c/U.S./100/43/>

In other instances, the abbreviation for a reporters themselves is not
unique. For example, "Mart." can refer to either *Louisiana Reports,
Martin* or *North Carolina Reports, Martin.* There are dozens of
ambiguous reporters like this that we support.

When you try to load citations with problems like this, you'll get a
list of the cases that it might refer to, like so:

![Several Results
Found]({filename}/images/Screenshot-from-2015-11-30-102734.png)

We're very excited about this tool because it's a great example of the
kind of work that is made possible by open data and open tools. This
project combines the alternate names we encoded in our Reporters
Database with the citation finder built by a volunteer to provide a
unique and powerful tool.

We look forward to seeing how this gets used and how it grows over time!

 

### A Note for the Technically Inclined

If you are technically inclined, there is one more detail about this
tool you may find useful. HTTP status codes are configured to serve as a
basic API:

-   If a citation has no results a 404 (Not Found) is returned.
-   If a citation has more than one result, a 300 (Multiple Choices) is
    returned (along with an HTML list of items).
-   If a citation has one unique result, a 302 (Temporary Redirect) is
    returned, sending you to the correct location.

The idea behind this is that it is now possible for a computer to find
CourtListener URLs for any citation. This should allow links to
CourtListener to flourish.

[1]: https://www.courtlistener.com/c/
[rdb]: https://github.com/freelawproject/reporters-db
[usr]: https://en.wikipedia.org/wiki/United_States_Reports
