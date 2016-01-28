Title: Reporters Database
Date: 2015-04-22 14:35
Author: mlissner
Tags: Announcements, Bulk Data, Citator, CourtListener, Data Wrangling
Slug: reporters-database
Status: published

<div class="left-image">
    <img src="{filename}/images/320px-Unitedstatesreports-150x150.jpg"
         alt="United States Reporters"/>
</div>

A long time ago in a courthouse not too far away, people started making
books of every important decision made by the courts. These books became
known as *reporters* and were generally created by librarian-types of
yore such as [Mr. William
Cranch](https://en.wikipedia.org/wiki/William_Cranch) and [Alex
Dallas](https://en.wikipedia.org/wiki/Alexander_J._Dallas_%28statesman%29).

These men---for they were all men---were busy for the next few centuries
and created *thousands* of these books, culminating in what we know
today as West's reporters or as regional reporters like the "Dakota
Reports" or the thoroughly-named, "Synopses of the Decisions of the
Supreme Court of Texas Arising from Restraints by Conscript and Other
Military Authorities (Robards)."

Motivated by our need to identify citations to these reporters, we've
taken a stab at aggregating a few facts about them, such as variations
in their name, abbreviation, or years they were published, and put all
that information into our reporters database. Until recently, this
database lived deep inside CourtListener and was only discovered by
intrepid hackers rooting around, but a few months ago we pulled it out,
put it in its own repository, and converted it to better formats so
anyone could more easily re-use it.

Currently, it's ready to use by any interested party, and it's at
version 1.0.9. The next version, 1.1, is around the corner and all it
needs is dates for when reporters start and stop. If you're a librarian
or legal researcher, we'd love to have your help gathering this data so
we can disseminate it to the world. To take one example of what can be
done with this data, Frank Bennett created the [Legal Resource
Registry](https://fbennett.github.io/legal-resource-registry/us/index.html)
which, when you drill down to a particular court/jurisdiction, e.g.,
[New Mexico's Supreme
Court](https://fbennett.github.io/legal-resource-registry/us/nm/supreme.court/index.html),
will show you all the reporters or citation schemes we know about for
that jurisdiction. It's a really nice visual way to view the data
contained in this giant .json file.

We encourage others to [take a look at the
database](https://github.com/freelawproject/reporters-db), integrate it
into their own projects, and expand on the effort.

