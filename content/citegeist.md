Title: CiteGeist Powers CourtListener's Newly Improved Search Results
Date: 2013-11-12 08:00
Author: mlissner
Tags: Announcements, Bulk Data, Citator, CourtListener, Relevancy, Search
Slug: courtlistener-improves-search-results-thanks-to-volunteer-contributor
Status: published

<div class="left-image">
    <img src="{filename}/images/simple-graph-150x150.png"
         alt="demo graph"
         class="img-responsive">
    <p class="caption">The citation graph is made into a network to compute CiteGeist scores.</p>
</div>

We're excited to announce that beginning today our relevancy engine will
provide significantly better results than it has in the past. Starting
today, whenever you place a query we will analyze which opinions are the
most cited, and we will use that to provide the best results possible.
We're calling this the **CiteGeist** score because it finds the spirit
of your query ("Geist") and gives you the best possible results. This is
currently enabled for our corpus starting in the 1750's up through about
1985, and the remaining years will get the CiteGeist treatment as well
over the next few days.

The details of how CiteGeist works are in our code, but the basic idea
is to give a high CiteGeist score to opinions that are cited many times
by other important opinions, and to give a lower CiteGeist to opinions
that have not been cited or that have only been cited by unimportant
opinions. Once we've established the CiteGeist score, we combine it with
a query's keyword-based
([TF/IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)) relevancy.
Together, we get a combined score which is a measure of how
intrinsically important a case is (its CiteGeist) as well as how closely
it matches your specific query.

We are proud to offer this service, and as always we give away our data
in our bulk files and soon via our API. We hope that this new feature
will make legal research faster, easier and more accurate and we
couldn't be prouder to offer this service.

This feature was developed by a volunteer contributor, Bo Jin (Krist).
He is majoring in Software Engineering at Tianjin University and spent
the summer of 2013 taking classes at UC Berkeley. Krist worked closely
with us while in Berkeley learning about our code base and has continued
to contribute now that he's returned to China to finish his degree. He
hopes to return to the U.S. next fall to pursue a Masters degree in
Computer Science.

Posted by: Michael Lissner

