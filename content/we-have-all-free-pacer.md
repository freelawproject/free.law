Title: CourtListener.com Now Has Every Free Opinion in PACER 
Author: mlissner
Date: 2017-07-17
Tags: PACER, RECAP, Opinions, Orders, bulk data, crawling, CourtListener
Status: Draft

<div class="right-image">
    <img src="{filename}/images/free-opinion-dropdown.png"
         alt="Free Opinion Report Dropdown"
         class="img-responsive border">
</div>


At Free Law Project, we have gathered millions of court documents over the years, but it's with distinct pleasure and pride that we announce that we have now completed our biggest crawl ever. After nearly a year of work, and with support from the [Department of Labor][dol] and [Georgia State University][gsu], we have collected every free written order and opinion that is available in PACER. Unlike the bulk of the documents in PACER, [opinions designated by the court for publication][free]" can be downloaded for free.
  
This collection contains approximately 3.4 million orders and opinions from approximately 1.5 million federal district and bankruptcy court cases dating back to 1960. More than four hundred thousand of these documents were scanned and required OCR, amounting to nearly two million pages of text extraction that we completed for this project.

All of the documents amassed for this project are available for search in the [RECAP Archive of PACER documents][ra] and via [our APIs][api]. New opinions will be downloaded every night to keep the collection up to date.
 
<div class="left-image">
    <a href="https://www.courtlistener.com/?type=r&q=&order_by=score+desc">
        <img src="{filename}/images/twenty-million-docs-in-recap.png"
             alt="The RECAP Archive now has more than twenty million documents."
             class="img-responsive border">
    </a>
    <p class="caption">The <a href="https://www.courtlistener.com/recap/">RECAP Archive</a> now has information about more than twenty million PACER documents.</p>
</div>
<div class="clearfix"></div>

As a backup and permanent repository, we have partnered with the [Internet Archive][ia], where we will be uploading a copy of every opinion that we download. The Internet Archive is a mission-driven non-profit dedicated to permanently storing digital content, and we are fortunate to have their support in this initiative.

We believe that this collection of PACER documents will be an invaluable tool for legal scholars, lawyers, journalists, and the public. These documents are a critical part of America's legal system, and until now there has not been a free way to access or analyze them except through PACER, where there was no full text search, no bulk access, and where these documents were split up across nearly 200 websites.
 
This initiative is one of the most important in our history, and we hope that if you find this work valuable [you will consider supporting][donate] our work with a donation. Creating this collection has taken months of full time work and thousands of dollars in computer equipment. We're thrilled to announce this collection, but we need support to continue hosting and expanding it. If you can support our work with a donation, we hope you'll do so today.


[ra]: https://www.courtlistener.com/recap/
[api]: https://www.courtlistener.com/api/
[announce]: {filename}why-downloading-all-free-pacer.md
[dol]: https://www.dol.gov/newsroom/releases/oasp/oasp20170112
[gsu]: {filename}dol-grant.md
[ia]: https://archive.org
[donate]: {filename}/pages/donate.md
[free]: {filename}/pacer-fee-history.md#opinions-made-free

<!--
RECAPDocument.objects.filter(is_free_on_pacer=True).order_by().count()
3437674

Docket.objects.filter(docket_entries__recap_documents__is_free_on_pacer=True).distinct().count()
1520836

RECAPDocument.objects.filter(is_free_on_pacer=True, ocr_status=RECAPDocument.OCR_COMPLETE).order_by().count()
417479

RECAPDocument.objects.filter(is_free_on_pacer=True, ocr_status=RECAPDocument.OCR_COMPLETE).order_by().aggregate(Sum('page_count'))
{'page_count__sum': 1989332}

first = RECAPDocument.objects.filter(is_free_on_pacer=True).earliest('docket_entry__date_filed')

first.docket_entry.date_filed
datetime.date(1960, 4, 29)
-->
