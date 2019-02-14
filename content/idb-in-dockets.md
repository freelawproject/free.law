Title: We've Integrated the FJC Integrated Database into CourtListener
Author: Michael Lissner
Date: 2019-02-14
Tags: Integrated Database, FJC, IDB


The [Integrated Database][idb] provided by the [Federal Judicial Center][fjc] is one of the best-kept secrets in the world of legal information. Updated quarterly, it has metadata about *every* case in PACER (and many that are not), including civil, criminal, and bankruptcy cases. If the case is in PACER, this is often the only way to get in-depth metadata about it short of carefully reading the docket. The IDB is a treasure trove of data for researchers, litigants, and the public. 

We are proud to share that we have begun integrating the IDB into our dockets on CourtListener. This is the first time we know of that the IDB data has been united with data from PACER data in an easily accessible way.

This project was made possible through generous support from one of our [sponsors][sponsors].

<p class="text-center">
    <a href="https://www.courtlistener.com/docket/4214664/idb/national-veterans-legal-services-program-v-united-states/"
       class="btn btn-primary btn-lg">View a Live Example</a>
</p>

So far we have integrated the IDB civil data set, so when you look at civil dockets on CourtListener, you will see a new tab like this:

<div class="text-center">
    <a href="https://www.courtlistener.com/docket/4214664/idb/national-veterans-legal-services-program-v-united-states/">
        <img src="{filename}/images/idb/idb-tab-example.png"
             alt="An example of the IDB tab in CourtListener"
             class="img-responsive border">
    </a>
</div>
<div class="clearfix"></div>

<br>

On the tab, only partially shown above, there are 28 new fields about the case. These include things like whether the case was disposed (and in favor of whom), whether it was a class action case, the county of residence for the first named plaintiff, and much more. 

As always, this new data is also available via our APIs and the data we push to the Internet Archive. To learn more about the changes to the API see [the updated API documentation][api], where we provide more details. 

To see how this new feature works, try opening a civil docket in the RECAP Archive, or simply click the link below to open such a case:

<p class="text-center">
    <a href="https://www.courtlistener.com/docket/4214664/idb/national-veterans-legal-services-program-v-united-states/"
       class="btn btn-primary btn-lg">View a Live Example</a>
</p>

We're thrilled to be bringing this huge collection of data to everybody that uses CourtListener and we think it will enable whole new areas of research that were previously unduly difficult. 

 
[idb]: https://www.fjc.gov/research/idb
[fjc]: https://www.fjc.gov/
[api]: https://www.courtlistener.com/api/rest-info/#api-change-log
[sponsors]: {filename}/pages/sponsors.md
