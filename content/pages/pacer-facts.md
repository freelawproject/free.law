Title: Facts About PACER
Slug: pacer-facts

<div class="right-image">
    <img src="{filename}/images/pacer-logo-300w.png"
         alt="PACER Logo"
         class="img-responsive border">
</div>

<p class="lead">PACER is a big and complex system with decades of history that's difficult to research or understand. For several years we have been trying to learn as much about it as we can.</p>

This page is an attempt to keep a record of interesting facts we have gathered about PACER. Where possible, we link to backup copies of various resources or provide links to the original sources.

If you identify errors or omissions, [please get in touch][c]. 


### How much money does PACER bring in each year?

A lot. In 2015 PACER brought in about $145M. We have [a detailed post about this][revenue], and you can look up this information using links like:
 
    http://www.gpo.gov/fdsys/pkg/BUDGET-1998-APP/pdf/BUDGET-1998-APP-1-4.pdf
    
Simply replace 1998 with the desired year. In the PDF that you download, PACER revenue is listed under #0220 of the Judiciary Information Technology Fund.


### How much would it cost to download all of PACER?

We tried to get to the bottom of this. [Our conclusion][billion] was that it would cost around one billion dollars.


### Are there any ways to get around PACER fees?

There are a few ways to avoid PACER fees, as [described in the PACER fee schedule][sched]:
 
1. Some documents are labeled by clerks as "Opinions" and are free. In theory — and according to the E-Government Act — this would include all of the opinions issued, but in our research this has varied greatly by jurisdiction. These documents can be found by using the "Written Opinions" report.

1. All PACER users are allowed $15 per calendar quarter before they are billed. However, once you hit $15.01 on your bill, you will be billed the entire amount.

1. If you are a part of case, you're granted "One free look" at each document filed in that case.

1. No fee is charged if PACER is used at a courthouse public access terminal.

1. PACER provides fee exemptions (or waivers) according to the following rules:

    <div class="left-image">
        <a href="https://www.pacer.gov/documents/epa_feesched.pdf" rel="nofollow">
            <img src="{filename}/images/waiver-details.png"
                 alt="Wiaver details"
                 class="img-responsive border"/>
         </a>
         <p class="caption">A screenshot of the <a href="https://www.pacer.gov/documents/epa_feesched.pdf" rel="nofollow">fee waiver rules as of 21 November 2017</a>.</p>
    </div>
    <div class="clearfix"></div>

These rules call for numerous limitations such as non-redistribution, and limited periods of time. There is [at least one instance][redist], however, where a judge has not applied all of these rules, and has allowed redistribution.

Additional [examples of PACER fee waivers][waivers] can be found in the RECAP Archive.


### How many cases and documents are in PACER and how fast is it growing?

We have two sources for this information. One source is the [2014 Annual Supreme Court Report][scotus-report], which said: 

> CM/ECF currently contains, in aggregate, more than one billion retrievable documents spread among the 13 courts of appeals, 94 district courts, 90 bankruptcy courts, and other specialized tribunals.

The second source is an article ([webpage][journal-web]/[pdf][journal-pdf]) in the International Journal for Court Administration, entitled, "E-Filing Case Management Services in the US Federal Courts: The Next Generation: A Case Study". That article says:

> Presently, CM/ECF databases contain over 47,000,000 cases and well over 600,000,000 legal documents; approximately 2,000,000 new cases and tens of millions of new documents are entered each year


### Written opinions are free on PACER, but how are they defined?

After [downloading all of the written opinions][wor], we [completed a brief analysis (xlsx)][wor-charts] and discovered that courts are wildly inconsistent about marking documents as opinions. For example, in our analysis we discovered that the busiest court in the country, NY Southern District (NYSD), has about 10% as many written opinions as California's Central District, and that NYSD comes in 21st place across the country when it should be first in terms of output. 

<div class="left-image">
    <a href="{filename}/images/chart-of-written-opinions.png">
        <img src="{filename}/images/chart-of-written-opinions.small.png"
             alt="Chart of Written Opinion Counts by Court"
             class="img-responsive border"/>
    </a>
    <p class="caption">Chart of written opinion counts by court. (Click for larger view.)</p>
</div>
<div class="clearfix"></div>

This disparity likely stems from clerks and judges improperly (or inconsistently) marking documents as opinions. The official policy explaining when to mark a document as an opinion is from [a 2004 memo to the chief justices][wor-policy].[^1] In short, a written opinion is defined as:
 
> any document issued by a judge or judges of the court, sitting in that capacity, that sets forth a reasoned explanation for a court's decision.

Five additional clarifying points also apply which [can be read in the memo][wor-policy]. 

Many documents are not marked as opinions that should be. We know of no recourse if you purchase such a document, though [a lawsuit is working to fix that][dapuzzo], and [the issue is being studied by academics][pm].

[^1]: We are grateful to Rebecca Fordon and Stephen Burbank for their assistance in this research.


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


### Is PACER used anywhere other than the federal courts?

Yes! Mississippi [is using PACER][miss] for e-filing in their courts. 


### Does PACER Have an API?

Contrary to popular wisdom, PACER *does* have something resembling an API for some purposes:

 - There is an API that allows limited search of PACER metadata across jurisdictions. It doesn't allow you to download documents and it's limited in a few other ways as well. The documentation for this API is difficult to find, but we maintain [a mirror of it here][api-docs].
 
 - There is also [information about the XML formats returned by PACER][xml].

 - For uploads, there is only [information for uploading bankruptcy files][bank].
 
 - There is also documentation from 2005 [about "bulk data" files here][bulk] (PACER does *not* actually have bulk data).
 
 - The FJC manages an "[Integrated Database][idb]" which has extensive documentation about PACER fields and data.
 
 - Finally, we have created [an open source system for crawling PACER][js].


### As a developer, is there a way to stay up to date with PACER?

Yes! There is a list for developers to subscribe to at developers@psc.uscourts.gov. Simply send a subscription request to that email address, and they will sign you up. As of this moment, they are not advertising this list publicly.


### Start and End Dates for Jurisdictions

There's a variety of information that you can find on the [list of courts on the PACER site, if you click the little information icon&nbsp;<i class="fa fa-info-circle"></i>][court-list]. We've taken some of this information and built a simple [JSON][json] or [HTML website][html] with it, so it's all in one place. 

Included in that information is the "Go Live Date" for each jurisdiction, but some jurisdictions have cases going back much further. Our understanding is that the older cases in PACER were put in manually, so the quality of the data is poor and the coverage is incomplete. However, you can get a list of all the earliest cases [at this link][earliest] or [as a spreadsheet][earliest-csv]. 


<script src="/js/anchor.min.js"></script>
<script type="text/javascript">
    anchors.options = {
            'visible': 'touch',
            'class': 'anchor',
            'truncate': 20
        };
    document.addEventListener("DOMContentLoaded", function(event) {
        anchors.add();
    });
</script>


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
[wor]: {filename}/why-downloading-all-free-pacer.md
[wor-charts]: {filename}/xlsx/free-opinions-report-totals-by-court.xlsx
[wor-policy]: {filename}/pdf/written-opinions-memo.pdf
[js]: {filename}/pages/juriscraper.md
[miss]: https://courts.ms.gov/mec/mec.html
[dapuzzo]: https://www.courtlistener.com/docket/4547409/theodore-dapuzzo-pa-v-united-states/
[pm]: https://osf.io/preprints/lawarxiv/bpmxe
[bulk]: https://www.pacer.gov/documents/bulk_data.pdf
[idb]: https://www.fjc.gov/research/idb
[sched]: https://www.pacer.gov/documents/epa_feesched.pdf
[redist]: https://www.courtlistener.com/docket/6155087/3/in-re-application-for-exemption-from-the-electronic-public-access-fees/
[waivers]: https://www.courtlistener.com/?q=pacer+AND+(%22fee+waiver%22+OR+%22fee+exemption%22)&type=r&order_by=score+desc#
