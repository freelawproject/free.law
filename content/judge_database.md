Title: Free Law Project and Princeton/Columbia Researchers Launch First-of-its-Kind Judicial Database
Slug: judicial-database-announcement
Author: mlissner
Tags: judge database, api, bulk data, courtlistener, fjc
Date: 2016-04-19

<div class="right-image">
    <a href="{filename}/images/taft.png">
        <img src="{filename}/images/taft-thumb.png"
             alt="A screenshot of President, Judge Taft"
             class="img-responsive border"/>
    </a>
    <p class="caption">President Taft's Biography Page</p>
</div>

Today we’re extremely proud and excited to be launching a comprehensive database of judges and the judiciary, to be linked to Courtlistener's corpus of legal opinions authored by those judges. We hope that this database, its APIs, and its bulk data will become a valuable tool for attorneys and researchers across the country. This new database has been developed with support from the National Science Foundation and the John S. and James L. Knight Foundation, in conjunction with [Elliott Ash][e] of Princeton University and Bentley MacLeod of Columbia University.

At launch, the database has [nearly 8,500 judges][1] from [federal][fed] and [state][state] courts, all of which are available via [our APIs][api], in [bulk data][bulk], and via a new [judicial search interface][1] that we've created.

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


## What's Missing

The data quality is relatively high and we have already corrected some errors in the upstream sources. However this is a work in progress with much data missing. We appreciate any input from the community.

There are a few major gaps in what we're launching today:

1. Linking judges to the opinions they've written. This will be added gradually over the next few months

1. We have been unable to find a comprehensive source of data for magistrate judges or federal bankruptcy judges.

1. The portraits of judges, as mentioned above, are incomplete. We need help gathering the missing pictures.

1. The data on lower court judges in the states is poor. Most judges are still missing from the database, and the included judges are missing many data points.

If you have good sources of data for any of these gaps or have other data that you think should be included, [we'd love to hear from you][contact].

## Getting Started

The best way to get started is by reading our documentation.

<a href="https://www.courtlistener.com/api/bulk-info/#judge-data" class="btn btn-primary btn-lg">Read the Documentation</a>

## Reporting Errors

We've done our best to make this as complete as possible, but we know it's not perfect. If you have corrections to send or want to get involved improving what's here, please get in touch using [our contact form][contact]. There's a lot to do and we'd be very pleased to hear from you.


[^1]:  The main funding source is NSF Grant SES-1260875 ("A study into the effect of employment conditions on judicial behavior and performance"). The data are described in detail in: Elliott Ash and Bentley MacLeod, "Intrinsic motivation in public service: Theory and evidence from state supreme courts," Journal of Law and Economics 58 (November 2015). See also: Elliott Ash and Bentley MacLeod, "The performance of elected officials: Evidence from state supreme courts," [NBER Working Paper w22071][b]. Before using this data for academic research, please contact the authors (e@elliottash.com) for further details and for the newest version.

[1]: https://www.courtlistener.com/?type=p
[pics]: https://github.com/freelawproject/judge-pics/
[contact]: https://free.law/contact/
[e]: https://www.elliottash.com
[b]: https://www.nber.org/papers/w22071
[hoohoo]: https://en.wikipedia.org/wiki/Marquis_Who%27s_Who
[doe]: http://www.ed.gov/developer
[fed]: https://www.courtlistener.com/?q=&type=p&order_by=name_reverse+asc&court=scotus+ca1+ca2+ca3+ca4+ca5+ca6+ca7+ca8+ca9+ca10+ca11+cadc+cafc+caca+dcd+ald+almd+alnd+alsd+akd+azd+ared+arwd+cacd+caed+cand+casd+cod+ctd+ded+fld+flmd+flnd+flsd+gad+gamd+gand+gasd+hid+idd+ilcd+ilnd+ilsd+innd+insd+iad+iand+iasd+ksd+kyd+kyed+kywd+lad+laed+lamd+lawd+med+mdd+mad+michd+mied+miwd+mnd+missd+msnd+mssd+mod+mocd+moed+mowd+mosd+mtd+ned+nvd+nhd+njd+nmd+nyd+nyed+nynd+nysd+nywd+nced+ncmd+ncwd+ndd+ncd+ohnd+ohsd+oked+oknd+okwd+ord+paed+pamd+pawd+pennsylvaniad+rid+scd+sdd+tned+tnmd+tnwd+texd+txed+txnd+txsd+txwd+utd+vtd+vad+vaed+vawd+washd+waed+wawd+wvad+wvnd+wvsd+wisd+wied+wiwd+wyd+gud+nmid+prd+vid+californiad+illinoised+illinoisd+indianad+orld+ohiod+southcarolinaed+southcarolinawd+tennessed+canalzoned+bap1+bap2+bap6+bap8+bap9+bap10+bapme+bapma+almb+alnb+alsb+akb+arb+areb+arwb+cacb+caeb+canb+casb+cob+ctb+deb+dcb+flmb+flnb+flsb+gamb+ganb+gasb+hib+idb+ilcb+ilnb+ilsb+innb+insb+ianb+iasb+ksb+kyeb+kywb+laeb+lamb+lawb+meb+mdb+mab+mieb+miwb+mnb+msnb+mssb+moeb+mowb+mtb+nebraskab+nvb+nhb+njb+nmb+nyeb+nynb+nysb+nywb+nceb+ncmb+ncwb+ndb+ohnb+ohsb+okeb+oknb+okwb+orb+paeb+pamb+pawb+rib+scb+sdb+tneb+tnmb+tnwb+tennesseeb+txeb+txnb+txsb+txwb+utb+vtb+vaeb+vawb+waeb+wawb+wvnb+wvsb+wieb+wiwb+wyb+gub+nmib+prb+vib+afcca+asbca+armfor+acca+cc+uscfc+com+ccpa+cusc+tax+mc+mspb+nmcca+cavc+bva+eca+tecoa+fiscr+fisc+reglrailreorgct+cit+usjc+jpml+stp
[state]: https://www.courtlistener.com/?q=&type=p&order_by=name_reverse+asc&court=ala+alactapp+alacrimapp+alacivapp+alaska+alaskactapp+ariz+arizctapp+ariztaxct+ark+arkctapp+cal+calctapp+colo+coloctapp+conn+connappct+connsuperct+del+delch+delsuperct+delctcompl+delfamct+deljudct+dc+fla+fladistctapp+ga+gactapp+haw+hawapp+idaho+idahoctapp+ill+illappct+ind+indctapp+indtc+iowa+iowactapp+kan+kanctapp+ky+kyctapp+la+lactapp+me+md+mdctspecapp+mass+massappct+mich+michctapp+minn+minnctapp+miss+missctapp+mo+moctapp+mont+neb+nebctapp+nev+nh+nj+njsuperctappdiv+njtaxct+nm+nmctapp+ny+nyappdiv+nyappterm+nysupct+nyfamct+nysurct+nc+ncctapp+nd+ndctapp+ohio+ohioctapp+ohioctcl+okla+oklacivapp+oklacrimapp+oklajeap+oklacoj+oklaag+or+orctapp+pa+pasuperct+pacommwct+cjdpa+ri+sc+scctapp+sd+tenn+tennctapp+tenncrimapp+tex+texapp+texcrimapp+texreview+utah+utahctapp+vt+va+vactapp+wash+washctapp+wva+wis+wisctapp+wyo+massdistct+masssuperct
[api]: https://www.courtlistener.com/api/rest/v3/
[bulk]: https://www.courtlistener.com/api/bulk-info/
