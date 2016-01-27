Title: Want to Merge Millions of Legal Opinions? It Won't Be Easy.
Date: 2013-11-01 07:11
Author: mlissner
Tags: Bulk Data, Citator, CourtListener, Courts, Data Wrangling, Design, Technology, XPath
Slug: want-to-merge-millions-of-legal-opinions-it-wont-be-easy
Status: published

> **Note:** This is the third in the series of posts explaining the work
> that we did to release the data donation from Lawbox LLC. This is a
> very technical post exploring and documenting the process we use for
> extracting meta data and merging it with our current collection. If
> you're not technically-inclined (or at least curious), you may want to
> scoot along.

Working with legal data is hard. We all know that, but this post serves
to document the many reasons why that's the case and then delves deeply
into the ways we dealt with the problems we encountered while importing
the Lawbox donation. The data we received from Lawbox contains about
1.6M HTML files and we've spent the past several months working with
them to extract good meta data and then merge it with our current
corpus. This post is a long and technical one and below I've broken it
into two sections explaining this process: **Extraction** and
**Merging**.

Extraction
----------

Extraction is a difficult process when working with legal data because
it's inevitably quite dirty: Terms aren't used consistently, there are
no reliable identifiers, formats vary across jurisdictions, and the data
was made by humans, with typos galore. To overcome these issues we use a
number of approaches ranging from hundreds of regular expressions to
clever heuristics.

The first step we take is to convert the HTML files into an in-memory
tree that we can traverse and that we can query using XPath, a variable
that contains only the text of the opinion (for later analysis), and a
variable that contains simplified versions of the HTML with any headers
or other junk stripped out.

From there, the tree, text and simplified tree get sent into various
functions that extract the following pieces of meta data:

-   Citations
-   Case name
-   Case date
-   Docket number
-   Judge(s)
-   Jurisdiction

Of these, jurisdiction and citations are by far the hardest. The others
are fairly straightforward, though dates are often missing and must be
laboriously looked up.

Citations are extracted using our standard citation finder. We've
described how it works in the past
([pdf](https://www.courtlistener.com/report/2012/)), but the basic idea
is to tokenize text into valid words and then find valid reporters
within the tokens. Whenever a valid reporter is found, you then inch
backwards and forwards from it, identifying the volume, page number,
year, and any other related information.

Finding the jurisdiction relies on [a collection of about 500 regular
expressions](https://bitbucket.org/mlissner/search-and-awareness-platform-courtlistener/src/c03b7d82b7f529c3ef7866ff468b620257a28501/alert/corpus_importer/court_regexes.py?at=default),
each designed to find a specific court. Since the data provided by
Lawbox is rather dirty, you can see that these regular expressions do a
lot work. Unfortunately this approach isn't enough for many
jurisdictions, and for the hard ones we go a step further.

If the regular expressions fail, the next step we take is to use the
citation information as a clue towards the jurisdiction. In many cases
it works! It's often enough to know that a case is in the California
Appellate Reporter or the U.S. reporter. Using that information alone,
we can often figure out the hard cases.

But sometimes they're *really* hard to figure out.

The really hard cases in the Lawbox collection describe their
jurisdiction like so: "United States District Court, D. Alabama".
Doesn't look hard, but, well, Alabama currently has three district
courts, the Middle, Northern and Southern, but it doesn't have a generic
"D. Alabama" (at least not since 1824). For the rare case like this, we
developed a clever solution: We use the judge information in the case to
determine the jurisdiction. Since most judges don't move too much
between courts, before we began importing anything we extracted all the
judges and made tallies of where they worked. Then, when we encountered
a case like the above, we said, "OK, who's the judge in this case, and
where does he work?" In almost every case this worked very well, but in
some cases it didn't and for those, we simply put the information in
manually.

For the remainder of the meta data fields listed, we employed similar
tricks, but these were the hardest examples. For the remainder of our
approach, you can [inspect the code
itself](https://bitbucket.org/mlissner/search-and-awareness-platform-courtlistener/src/c03b7d82b7f529c3ef7866ff468b620257a28501/alert/corpus_importer/import_law_box.py?at=default).
Just be careful of hairballs.

Merging
-------

Once all of the meta data is properly extracted, the next step is to
merge it with our existing corpus, identifying duplicates and merging
them, or simply adding new cases if no duplicate was found.

The merging process takes one of three main avenues:

-   Cases for which there cannot be a duplicate.
-   Cases for which there is exactly one duplicate.
-   Cases for which there are multiple duplicates.

For the vast majority of the Lawbox donation, we were able to simply add
the case to our collection without further ado. We determined this by
comparing the date and jurisdiction of the new opinion to our collection
and seeing if we had any cases from that jurisdiction during that time.
If there weren't any cases from that place and time, bingo, the new case
couldn't be a duplicate and we could add it straightaway.

For the opinions that might have duplicates, we developed a
duplicate-detecting algorithm. The process for this algorithm is as
follows.

1: Create a set of candidate documents that might be duplicates by
searching our existing corpus. First search it for cases in the same
jurisdiction within 15 days of when it was issued and which have the
same words in their name. Since names can vary greatly, the last word of
the plaintiff and the first word in the defendant are used as queries,
but only if those words:

-   aren't uppercase and less than three letters long (indicating an
    abbreviation);
-   aren't words that occurs very frequently (indicating a stop word);
-   don't contain punctuation or numbers (indicating something out of
    the norm); and
-   aren't less than two letters long (indicating they're an
    abbreviation).

Once this query returns, if it has results, we continue to step 2, but
if not, we try a new query using the docket number instead of the case
name. This often works, but if it fails we try one final time using the
citations. Unfortunately we can't use the citations for all queries
because prior to this donation we did not have a good collection of
citation information.

2: Once we have some cases that our new one might be a duplicate of, we
attempt to match up the duplicates by docket number. This often works,
but if it doesn't, we gather statistics about the items our new document
might be a duplicate of. Specifically, we gather:

-   The [edit
    distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
    between our new case and each of the candidates;
-   The edit distance between the text of our case and each of the
    candidates;
-   The difference in length between our case and each of the
    candidates; and
-   The [cosine
    similarity](https://en.wikipedia.org/wiki/Cosine_similarity) between
    our case and each of the candidates.

Once that's gathered, we set it aside and move on to step three.

3: At this point, we compare the case names to see if any of them are
good matches. We assume that if we have one candidate, if it has all the
same words in its case name as does our new document, and if they're in
the right order, it must be a duplicate. So for example, Lissner v.
Carver is a duplicate of Michael Lissner v. Brian Carver, but not of
Carver v. Lissner (right words but wrong order).

4: If this approach fails, our next step is to attempt a similarity test
based on the docket number instead of the case name. This often works,
but when it doesn't, we have another approach, using the statistics
generated above.

5: Our last approach is the statistical approach. Of the statistics
generated above, the cosine similarity is very accurate and the others
seem flawed in various ways. Cosine similarity takes all of the words in
each case, counts up how many times each one occurs, then plots all of
the words in a multi-dimensional vector space. Once we have a vector
space for each case, we determine the difference between the new case
and each candidate. If the two cases are very similar, they get a high
similarity rating. If not, they get a low one. In our experience a good
duplicate has a similarity of about 98%, and a dissent to the same case
has usually has a slightly lower similarity, generally around 97%.
Anything below 90% is unrelated. The extent to which this approach works
is remarkable, but it is slow and can lose accuracy if cases have
additional words, say, as part of the header information.

6: After all this is done, if we still haven't determined if we have any
duplicates, our final approach is to send the new case and all its
candidates to a human reviewer, who looks at their contents and makes a
determination. Fortunately, this only happens rarely.

The Final Step
--------------

Once the meta data is extracted and any duplicates have been found, we
take the best parts of each document, merge them together and save it to
the index. Once this is complete the document shows up in search, in our
bulk files and everywhere else.

This approach took many month's development, and it will receive another
round of polish the next time we add a batch of cases. Until then, we
hope this post has been educational, and that it can serve as a
reference for any data merging projects.

