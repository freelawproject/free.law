Title: Launching a Massive Judicial Database
Author: mlissner, elliott
Tags: judges, api, bulk_data, courtlistener, fjc
Date: 2016-04-19
Status: Draft

<div class="left-image">
    <a href="{filename}/images/taft.png">
        <img src="{filename}/images/taft-thumb.png"
             alt="A screenshot of President, Judge Taft"/>
    </a>
</div>

Today we're extremely proud and excited to be launching a massive judicial database. We hope that this database, its APIs, and its bulk data will become a valuable tool for attorneys and researchers across the country. This new database has been developed with support from the National Science Foundation and the John S. and James L. Knight Foundation, in conjunction with [Elliott Ash][e] of Princeton University and Bentley MacLeod of Columbia University.

At launch, the database has [nearly 8,500 judges][1] from federal and state courts, all of which are available via our APIs, in bulk data, and via a new [judicial search interface][1] that we've created.

The database is aimed to be comprehensive, including as many facts about as many judges as possible. At the outset, we are collecting the following kinds of information about the judges:

 - Biographical information including their full name, race, gender, birth and death dates and locations, and any aliases or nicknames that a judge may have.

 - Their educational information including which schools they went to, when they went, and what degrees they were awarded.

 - The judicial positions they have held. The core of this data is a list of courts and dates for each judge, but it also includes details about their specific position, how they were nominated or elected, what the voting outcome was, who appointed them, the clerks they supervised, and nearly a dozen dates about the timing of their nomination process.

 - The non-judicial positions they have held. The database aims to include comprehensive timelines of a judge's full career both before before and after being a judge. This includes work in other branches of government, in private practice, and in academia.

 - Any ratings that a judge has been given by the American Bar Association.

 - Finally, we are gathering the political affiliation of judges. This information is coming from a few sources such as ballots (for elected judges) and appointers (for appointed judges).

We have collected all available public datasets and added a large amount of data ourselves. But there are many actors in the U.S. legal system and the database is far from complete. We hope that interested researchers will collaborate with us in contributing more data. Our goal is to put down a foundation of solid data that can be built on by the community and that can grow into the future.

In conjunction with this database, we're also launching [a project to gather and curate judicial portraits][pics]. At launch, we have gathered about 250 judicial portraits, mostly of federal judges. This is a small fraction of the number of judges in the database,  and we're looking for help gathering many more portraits. We're hopeful that with community support we'll be able to build a comprehensive database of judicial portraits. If you're interested in helping or have ideas for where we might get more images of judges, [please get in touch][contact].


## Data Quality and Sources

A major concern when creating a database of this scope is the quality of the data. The initial data we're announcing today comes from two major sources.

 - The Federal Judicial Center (FJC) compiles and maintains a spreadsheet with information on federal judges.
 - The data on state court judges have been collected as part of an ongoing project on judicial behavior led by the economists Elliott Ash (Princeton University and University of Warwick) and Bentley MacLeod (Columbia University).

     The research team has consulted state court web sites, [Marquis Who's Who][hoohoo], newspaper articles (especially obituaries), Wikipedia, and library archives to collect and verify data.[^1]

 - The data on Schools and their aliases was compiled by the Department of Education and made available via their [Developer Portal][doe].


## What's missing

The data quality is relatively high and we have already corrected some errors in the upstream sources. However this is a work in progress with much data missing. We appreciate any input from the community.

There are a few major gaps in what we're launching today:

1. We have been unable to find a comprehensive source of data for magistrate judges or federal bankruptcy judges.

1. The portraits of judges, as mentioned above, are incomplete. We need help gathering the missing pictures.

1. The data on lower court judges in the states is poor. Most judges are still missing from the database, and the included judges are missing many data points.

If you have good sources of data for any of these gaps or have other data that you think should be included, [we'd love to hear from you][contact].


## Getting involved and reporting errors

We've done our best to make this as complete as possible, but we know it's not perfect. If you have corrections to send or want to get involved improving what's here, please get in touch using [our contact form][contact]. There's a lot to do and we'd be very pleased to hear from you.


[^1]:  The main funding source is NSF Grant SES-1260875 ("A study into the effect of employment conditions on judicial behavior and performance"). The data are described in detail in: Elliott Ash and Bentley MacLeod, "Intrinsic motivation in public service: Theory and evidence from state supreme courts," Journal of Law and Economics 58 (November 2015). See also: Elliott Ash and Bentley MacLeod, "The performance of elected officials: Evidence from state supreme courts," [NBER Working Paper w22071][b]. Before using this data for academic research, please contact the authors (e@elliottash.com) for further details and for the newest version.

[1]: https://www.courtlistener.com/?type=p
[pics]: https://github.com/freelawproject/judge-pics/
[contact]: https://free.law/contact/
[e]: https://www.elliottash.com
[b]: https://www.nber.org/papers/w22071
[hoohoo]: https://en.wikipedia.org/wiki/Marquis_Who%27s_Who
[doe]: http://www.ed.gov/developer
