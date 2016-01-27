Title: Updated Supreme Court Case Dates and The First Release of Early SCOTUS Data in Machine-Readable Form
Date: 2011-05-25 13:41
Author: mlissner
Tags: Announcements, API, Bulk Data, CourtListener, Data Wrangling
Slug: updated-supreme-court-case-dates-and-the-first-release-of-early-scotus-data-in-machine-readable-form
Status: published

A few years ago, the Library of Congress [released a
PDF](http://www.supremecourt.gov/opinions/datesofdecisions.pdf) that
listed the exact dates that the early Supreme Court Cases were decided.
Since the written record only contained the month and year of the
decision, this list served as the official record for the cases.

While it was great for the Library of Congress to publish this report,
unfortunately they did so in a large PDF rather than a more useful
format that could be used by projects such as CourtListener. Attempts to
contact the Library of Congress were unable to locate the original
version of the document, so at CourtListener we converted the PDF into a
CSV file that can be easily read by a computer or imported into a
spreadsheet. I'm happy [to be releasing this
CSV](https://bitbucket.org/mlissner/search-and-awareness-platform-courtlistener/raw/2c8e2fbff84c/SupremeCourtCleanup/date_of_decisions.csv)
today so that it can be used by others.

The second project we have been working on at CourtListener was to
import this data into our system. Today, we finally did that, updating
the dates 6,083 early Supreme Court Cases. We used a combination of
searching for the case by number, and a statistical analysis of the
cases returned by the search. When statistics and search failed, a human
(me) made a decision by reviewing the proposed change. At the end of
this process, we were able to find and update 96% of the cases
identified by the Library of Congress.

