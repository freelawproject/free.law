Title: Launching a Massive Judicial Database
Author: mlissner, elliott
Tags: judges, api, bulk_data, courtlistener, fjc
Status: Draft


Today we're extremely proud and excited to be launching a massive judicial database. We hope that this database, its APIs, and its bulk data will become a valuable tool for attorneys and researchers across the country. This new database has been developed with support from the National Science Foundation and the John S. and James L. Knight Foundation, in conjunction with [Elliott Ash][e] of Princeton University and Bentley MacLeod of Columbia University.

At launch, the database has nearly 8,500 judges from federal and state courts, all of which are available via our APIs, in bulk data, and via a new [judicial search interface][1] that we've created.

We've tried to make this database as comprehensive as possible, including as many facts about as many judges as possible. At the outset, we are collecting the following kinds of information about the judges:

 - Biographical information including their full name, race, gender, date and location of birth and death, and any aliases or nicknames that a judge may have.

 - Their educational information including which schools they went to, when they went, and what degrees they were awarded.

 - Any ratings that a judge has been given by the American Bar Association.

 - The judicial and non-judicial positions they have held. The core of this data is a list of courts and dates for each judge, but it can also include details about their specific position, how they were nominated or elected, what the voting outcome was, who appointed them, the clerks they supervised, and nearly a dozen dates about the timing of their nomination process. For many judges, we also have information about their career before and after being a judge, such as professorships or practitioner roles they may have had.

 - For those judges who have retention events where they can be either voted out of their position or retained, we are gathering that information as well.

 - Finally, we are gathering the political affiliation of judges. This information is coming from a few sources such as ballots (for elected judges) and appointers (for appointed judges).

All of this information is not yet complete, but we are working on filling in what we can and we hope that interested researchers will get involved as well, contributing any data that they have, or doing original research, if needed. Our goal is to put down a foundation of solid data that can be built on by the community and that can grow into the future.

In conjunction with this database, we're also launching [a project to gather and curate judicial portraits][pics]. At launch, we have gathered about 250 judicial portraits, mostly of federal judges. This is a small fraction of the number of judges in the database,  and we're looking for help gathering many more portraits. We're hopeful that with community support we'll be able to build a comprehensive database of judicial portraits. If you're interested in helping or have ideas for where we might get more images of judges, [please get in touch][contact].


## Data Quality and Sources

A major concern when creating a database of this scope is the quality of the data. For the initial data that we're announcing today we have sourced it from a number of places:

 - The Federal Judicial Center (FJC) compiles and maintains a spreadsheet with information on federal judges.
 - The data on state court judges have been collected as part of an ongoing project at Columbia University with primary investigators Elliott Ash and Bentley MacLeod. The research team consulted state court web sites, Wikipedia, newspaper articles, obituaries, Marquis Who's Who, and library archives to collect and verify data. The main funding source is NSF Grant SES-1260875 ("A study into the effect of employment conditions on judicial behavior and performance"). The data are described in detail in: Elliott Ash and Bentley MacLeod, "Intrinsic motivation in public service: Theory and evidence from state supreme courts," Journal of Law and Economics 58 (November 2015). See also: Elliott Ash and Bentley MacLeod, "The performance of elected officials: Evidence from state supreme courts," [NBER Working Paper w22071][b].

The data quality is relatively high and we have already found some errors in our upstream sources that we have corrected. However this is a work in progress with much data missing. We appreciate any input from the community.

## What's missing

There are XXXNUM major gaps in what we're launching today:

1. We have been unable to find a reliable source of data for magistrate judges or federal bankruptcy judges.

1. The portraits of judges, as mentioned above, are incomplete. We need help gathering the missing pictures.

1. The data on lower court judges in the states is poor. Most judges are still missing from the database, and the included judges are missing many data points.


## Getting involved and reporting errors

We've done our best to make this as complete as possible, but we know it's not perfect. If you have corrections to send or what to get involved improving what's here, please get in touch using [our contact form][contact]. We'd be very pleased to hear from you.


[1]: https://www.courtlistener.com/?type=p
[pics]: https://github.com/freelawproject/judge-pics/
[contact]: https://free.law/contact/
[e]: https://www.elliottash.com
[b]: https://www.nber.org/papers/w22071
