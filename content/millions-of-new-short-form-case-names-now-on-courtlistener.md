Title: Millions of New "Short Form" Case Names Now on CourtListener
Summary: Free Law Project makes millions of short form case names available in bulk.
Date: 2016-01-30 18:00:00
Author: mlissner
Tags: Announcements, API, Bulk Data, CourtListener, Data Wrangling, Juriscraper
Status: draft

While working on a soon-to-be-released feature of CourtListener, we needed to create "short form" case names for all the cases in CourtListener. We're happy to share that we've created about 1.8M short form case names, including complete coverage for all Supreme Court cases going back to 1947, when the [Supreme Court
Database](http://scdb.wustl.edu/) begins.

If you're not familiar with the term, short form case names are the ones you might use in a later citation to an authority you've already discussed in a document. For example, the first time you mention a case you might say:

> Kellogg Brown & Root Services, Inc. v. United States Ex Rel. Carter

But latter references might just be:

> Kellogg Brown at 22

The Blue Book doesn't have a lot to say about this format, but does say the short form must make it, "clear to the reader...what is being referenced." Also:

> When using only one party name in a short form citation, use the name
> of the first party, unless that party is a geographical or
> governmental unit or other common litigant.

With these rules in mind, we made an algorithm that attempts to generate good short form case names, spitting out hard cases for human review. The final version of the algorithm was able to create about 1.8M short form case names out of the 3M cases in our system, and is run every day as we collect new opinions. About 2500 Supreme Court cases were too complicated for the algorithm. For these cases, we created short form case names by hand. We also know that the program is not perfect, so if you see any errors, as always, feel free to send them to us for correction.

All of these short form case names are now available in our new database, bulk API, and REST API in the field called `case_name_short`. To get a feel for these, you can also look at [the attached spreadsheet]({filename}/csv/short_names.csv), which shows the cases that were completed by hand.

As for the algorithm itself, the process was roughly:

1.  Build a list of words that can't be used as a short form case name,
    including past Attorneys General, countries, states, popular cities
    (those with more than 150,000 people), common government acronyms,
    and a few common party names ("The State", "Smith", "The People").
1.  Identify "In Re" and "Matter of" cases, and do special handling for
    those.
1.  Similarly, set aside any case that has more than one "v." in it's
    name.
1.  Check for plaintiffs or defendants that are a single word. If
    they're not in the list made in step one (i.e., they're not a state,
    city, Attorney General, etc.), use that as the short form case name.

There are a few more subtleties you can find  [in our Github
repository](https://github.com/freelawproject/juriscraper/blob/master/lib/string_utils.py#L435-L522), but the basic premise, while imperfect, worked extremely well. When this was combined with a human editor to handle hard cases, we were able to achieve both good quality and decent coverage. In the end, we edited about 2500 Supreme Court cases by hand, and we are pleased to release the results for everybody to use.

