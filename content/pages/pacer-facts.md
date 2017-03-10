Title: Facts About PACER
Slug: pacer-facts

PACER is a big and complex system that's incredibly opaque to the normal search tools. Over time, we've learned where various facts are tucked away, but it's nearly impossible to keep track of where you read something or how you found it. 

This, then, is an attempt to keep a record of interesting facts about PACER. If you identify errors or omissions, [please get in touch][c].

### PACER API Documentation

Contrary to popular wisdom, PACER *does* have an API. This API allows limited search of PACER metadata across jurisdictions. It doesn't allow you to download documents and it's limited in a few other ways as well.

We can't find this documentation on the PACER website anymore, so [we've posted it here][api-docs].

There is also [information about the XML formats returned by PACER][xml].

For uploads, there is only [information for uploading bankruptcy files][bank].


### Start and End Dates for Jurisdictions

There's a variety of information that you can find on the [list of courts on the PACER site, if you click the little information icon&nbsp;<i class="fa fa-info-circle"></i>][court-list]. We've taken some of this information and built a simple [JSON][json] or [HTML website][html] with it, so it's all in one place. 

Included in that information is the "Go Live Date" for each jurisdiction, but some jurisdictions have cases going back much further. Our understanding is that the older cases in PACER were put in manually, so the quality of the data is poor and the coverage is incomplete. However, you can get a list of all the earliest cases [at this link][earliest] or [as a spreadsheet][earliest-csv]. 


### How much money does PACER bring in each year?

A lot. In 2015 PACER brought in about $145M. We have [a detailed post about this][revenue], and you can look up this information using links like:
 
    http://www.gpo.gov/fdsys/pkg/BUDGET-1998-APP/pdf/BUDGET-1998-APP-1-4.pdf
    
Simply replace 1998 with the desired year. In the PDF that you download, PACER revenue is listed under #0220 of the Judiciary Information Technology Fund.


### How much would it cost to download all of PACER?

We tried to get to the bottom of this. [Our conclusion][billion] was that it would cost around one billion dollars.


### How many cases and documents are in PACER and how fast is it growing?

We have two sources for this information. One source is the [2014 Annual Supreme Court Report][scotus-report], which said: 

> CM/ECF currently contains, in aggregate, more than one billion retrievable documents spread among the 13 courts of appeals, 94 district courts, 90 bankruptcy courts, and other specialized tribunals.

The second source is an article ([webpage][journal-web]/[pdf][journal-pdf]) in the International Journal for Court Administration, entitled, "E-Filing Case Management Services in the US Federal Courts: The Next Generation: A Case Study". That article says:

> Presently, CM/ECF databases contain over 47,000,000 cases and well over 600,000,000 legal documents; approximately 2,000,000 new cases and tens of millions of new documents are entered each year


### What do we know about PACER users?

 - There are "[30,000+ court employees, over 650,000 lawyers who practice in the US federal courts and over 1,000,000 registered public users and organizations [that] have relied on CM/ECF and PACER.][journal-pdf]"

 - According to an a declaration by the PACER Service Center manager, 63% of PACER users did not pay fees in 2015.

    [![Declaration Screenshot]({filename}/images/63-percent-non-payers.jpeg)][declaration]

 - 75% of revenue comes from 1% of users, according to Robert Lowney, director of the PACER program. The implication here is that those 1% of users are likely bots.  
 
 
### Has there ever been an effort to transfer PACER records to the National Archives?
 
[It seems so][nara], but to our knowledge nothing has ever been transferred. More investigation is likely needed on this topic.


### Are there PACER/ECF sites where I can poke around, experiment, and try things?

Yes! There are two PACER sites that we know about that have content and do not charge for usage:

 - [The official PACER training website][train]
 - [A training website maintained by the Court of International Trade][cit-train]
 
The CIT training site also allows you to practice ECF filings if you have an ECF account.
  

[c]: {filename}/pages/contact.md
[api-docs]: {filename}/pdf/PACER-API-Documentation.pdf
[billion]: {filename}/pacer-billion-documents.md
[scotus-report]: https://www.supremecourt.gov/publicinfo/year-end/2014year-endreport.pdf
[court-list]: https://www.pacer.gov/psco/cgi-bin/links.pl
[json]: https://court-version-scraper.herokuapp.com/courts.json
[html]: https://court-version-scraper.herokuapp.com/
[earliest]: https://pcl.uscourts.gov/courts
[earliest-csv]: {filename}/xlsx/pacer-start-end-dates.xlsx
[revenue]: {filename}/pacer-revenue.md
[journal-pdf]: {filename}/pdf/179-594-1-PB.pdf
[journal-web]: http://www.iacajournal.org/articles/abstract/10.18352/ijca.179/
[bank]: https://www.pacer.gov/documents/case_upload_specs_5_1_1.pdf
[xml]: https://www.pacer.gov/documents/pacer_xml_apv3.1.pdf
[nara]: {filename}/pdf/N1-021-10-2.pdf
[declaration]: https://www.courtlistener.com/docket/4214664/13/2/national-veterans-legal-services-program-v-united-states/
[train]: https://dcecf.psc.uscourts.gov/cgi-bin/ShowIndex.pl
[cit-train]: https://ecf-train.cit.uscourts.gov/cgi-bin/login.pl
