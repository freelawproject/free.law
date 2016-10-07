Title: The Cost of PACER Data? Around One Billion Dollars.
Author: mlissner
Date: 2016-09-11
Tags: pacer, market incentives
Status: Draft


Recently, we started a new project to analyze a few million PACER documents that we acquired through the [RECAP Project][recap]. As we began working with the data, one thing we did was count how many pages every document had so that we could calculate the average length of a PDF in PACER. Fairly quickly we learned that based on our sample, the average length of a PACER document is 9.1 pages.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Based on a sample of about 2M PDFs, the average length of a PACER document is 9.1 pages. The max (so far) is 4,417.</p>&mdash; RECAP the Law (@RECAPtheLaw) <a href="https://twitter.com/RECAPtheLaw/status/771585725875691520">September 2, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This is a really interesting statistic. Another is that there are more than one billion documents in in PACER:

<blockquote>
    <p>CM/ECF currently contains, in aggregate, more than one billion retrievable documents spread among the 13 courts of appeals, 94 district courts, 90 bankruptcy courts, and other specialized tribunals.
    </p>
    <footer><a href="https://www.supremecourt.gov/publicinfo/year-end/2014year-endreport.pdf">2014 Supreme Court Annual Report</a></footer>
</blockquote>

With these two statistics and the knowledge that [downloading a document costs ten cents per page][cost], we can once again see how PACER---the biggest paywall the world has ever known---is a deeply troubling system. At this price, purchasing the contents of PACER would cost somewhere on the order of one billion dollars.[^1]
 
One 👏 Billion 👏 Dollars 👏

For reference, storing the entire PACER corpus in the cloud would cost around $128,000/year.[^2] That number doesn't include a variety of other expenses in the PACER system, but the difference between the storage cost and the amount it would cost to purchase the content is astounding.

How did this happen? How is it that as the cost of storing data has gone down, the cost of PACER data has gone up? How is it that non-profit organizations like the [Internet Archive][ia] can share [15 petabytes of data for free][ia-wiki][^3] while PACER data costs so much? 

Well, one reason the price is high is because the Administrative Office of the Courts (AO), the federal organization that runs PACER, has a monopoly. In the [E-Government Act][egov], Congress asked the AO to set up PACER and said that they could charge a reasonable price for it to recoup costs. Since then, they've had an officially sanctioned monopoly on this data.

 
## Let's Talk (Briefly) About Monopolies
 
Contrary to popular wisdom, there are good reasons for monopolies. For example, sometimes you have a product that's extremely expensive and that you wouldn't want to create in duplicate. A classic example of this is the sewer line that connects to your house. This sewer line is almost always run by an organization that has a local monopoly for your city because putting in sewer lines is expensive, and because we don't want every house to be connected do a half dozen sewer lines run by different companies. A competitive system like that would never work.

This is often the case for infrastructure that's expensive to set up, and PACER is like this in some respects. We could have multiple places were people uploaded their legal documents and where the public went to download them, but they'd each require a lot of upfront investment. Plus, if we set up multiple systems like that, we would lose the centralized system we currently have. These are probably good reasons to set up a limited monopoly, and Congress was probably right to do so when they passed the E-Government Act.

However, whenever you create monopolies, oversight becomes important. How do we know that our sewer lines are priced efficiently and that the folks running our sewers aren't gouging us? We know because of oversight.
 

## Oversight

<div class="row">
    <div class="col-sm-7">
        <p>Oversight comes in a few forms. It can be performed by journalists, by the public, or by other government bodies, like Inspectors General. To its credit, the AO <a href="http://www.uscourts.gov/about-federal-courts/judicial-administration/administrative-oversight-and-accountability">has a page on this topic on its website</a> that lists the various auditing and accountability mechanisms that are in place, but the fact is that none of these mechanisms have been successful in reviewing the excessive costs of the PACER system.
        </p>
        <p>The next tool is Congressional oversight. The AO is required to file <a href="http://www.uscourts.gov/statistics-reports/analysis-reports/directors-annual-report">annual reports</a> but so far those reports have said that PACER is a resounding success and that surveys report great satisfaction among users. So far, Congress hasn't questioned these assertions, and so this oversight has failed.
        </p>
        <p>The AO and the judicial branch do not have Inspectors General. That's out too.
</p>
    </div>
    
    <div class="col-sm-5 bg-primary">
        <h3>What about FOIA?</h3>
        <p>One especially powerful tool that is worth mentioning is a Freedom of Information Act (FOIA) request. These can be sent by members of the public to request records of various kinds from the government. Journalists and the public rely on FOIA requests to learn about the inner workings of the government, and have used them to uncover all manner of malfeasance.</p><p>Unfortunately, the AO is not subject to FOIA, because it's part of the judicial branch, and FOIA requests are of no value there.
        </p>
    </div>
</div>

## What We're Left With

The E-Government Act created a monopoly for the distribution of Federal Court data, and allowed the AO to charge money to recoup its costs. Since the time PACER was created, it has brought in hundreds of millions of dollars and its prices have risen while the cost of storage and computing have fallen. 
  
We estimate that storing the entire PACER database could cost around $128,000/year, but [in 2015 PACER revenue was $145M][budget]. 
 
Congress has an oversight role for the AO, but so far it hasn't acted to curb these costs and rein in PACER revenue. FOIA and Inspectors General can't help. 

In the end, we believe a solution to PACER's egregious fees will require cooperation of the public, Congress, journalists, and the courts themselves. We've [written extensively about the roles that each of these groups plays][todo] in fixing this problem, and we hope you'll learn more at that link and get involved in whatever capacity you can. At that link, we have guidance for the public, Congress, and members of the judiciary. 

As it stands, PACER thwarts the ability of the press and the public to ensure the proper functioning of our democracy, and it cripples researchers who wish to study the federal courts. PACER has been this way almost since its inception,but it need not be this way forever.  


[^1]: 9.1 pages per document &times; ten cents per page = $0.91 per document. $0.91 &times; 1B documents (as of 2014) = $910,000,000. Critics will point out that there's a $3 cap per document, so this average isn't quite right. Still, this number doesn't factor in the cost of the docket sheets or search results (the latter aren't subject to a $3 cap). On top of this, the corpus has undoubtedly grown since 2014. Can we agree that one billion dollars is the right ballpark?

[^2]: These numbers are rough, but Amazon's "GovCloud" storage product [costs $0.0383/gigabyte/month][s3]. The average size of a document in RECAP is 278 kilobytes. So, 278 kilobytes &times; 1B documents means PACER has about 278 terabytes of data, which would cost about $127,901 to store each year at the current pricing. 

    The revenue of PACER in 2015, the last year that's available, was $145M (see item #1130 on page 51 of the [2016 Judicial Budget][budget]). Running PACER has other costs, but that revenue is 1,133 times more than what storing the documents in the cloud would cost.

<!--
  Backup data:
  
  # Number of bytes of PDF data
  ↪ find . -name "*.pdf" -ls | awk '{total += $7} END {print total}'
  1010353255231
  
  # Number of PDFs
  ↪ find . -name "*.pdf" -ls | wc
  3630604 39936644 381368741
  
  # Average size of an item
  (1010353255231 bytes / 3630604 items) = 278287 bytes/item
  
  # Total size:
  278287 X 1,000,000,000 = 278287925400000 bytes
  # ...in TB and GB...
  Google: 278287925400000 bytes in terabytes = 278 TB, 278000GB
  
  # Cost per month, year
  278287GB X $0.0383 / GB / Month = $10658/month
  $10658/month * 12 months/year = $127,901/year
    
  # Multiplier
  PACER revenue of $145,000,000 / $127,901/year = 1133.6
-->

[^3]: A petabyte is about 1,000 terabytes, which in turn is about 1,000 gigabytes. A gigabyte can hold thousands of documents. So, 15 petabytes is probably trillions of documents.

[cost]: https://www.pacer.gov/psc/faq.html
[recap]: {filename}/pages/recap.md
[ia-wiki]: https://en.wikipedia.org/wiki/Internet_Archive
[ia]: https://archive.org
[suit]: http://arstechnica.com/tech-policy/2016/04/lawsuit-accuses-pacer-of-milking-the-public-for-cash-in-exchange-for-access/
[budget]: https://www.gpo.gov/fdsys/pkg/BUDGET-2017-APP/pdf/BUDGET-2017-APP-1-4.pdf
[s3]: https://aws.amazon.com/govcloud-us/pricing/s3/
[egov]: https://www.congress.gov/bill/107th-congress/house-bill/02458
[todo]: {filename}/what-should-be-done-about-the-pacer-problem.md
