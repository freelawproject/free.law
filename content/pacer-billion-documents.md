Title: The Cost of PACER Data? Around One Billion Dollars.
Author: mlissner
Date: 2016-09-11
Tags: pacer, market incentives
Status: Draft


Recently, we started a new project to analyze a few million PACER documents that we acquired through the [RECAP Project][recap]. As we began working with the data, one thing we did was count how many pages every document had so that we could calculate the average length of a PDF in PACER. Fairly quickly we learned that based on our sample, the average length of a PACER document is 9.1 pages.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Based on a sample of about 2M PDFs, the average length of a PACER document is 9.1 pages. The max (so far) is 4,417.</p>&mdash; RECAP the Law (@RECAPtheLaw) <a href="https://twitter.com/RECAPtheLaw/status/771585725875691520">September 2, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This is a really interesting statistic. Another is that according to the [Supreme Court's 2014 Annual Report][scotus-report], there are more than one billion documents in in PACER:

<div class="text-center">
    <a href="https://www.supremecourt.gov/publicinfo/year-end/2014year-endreport.pdf">
        <img src="{filename}/images/one-billion.png"
                 alt="One Billion Documents"/>
    </a>
</div>
<div class="clearfix"></div>

With these two statistics and the knowledge that [downloading a document costs ten cents per page][cost], we can once again see how PACER---the biggest paywall the world has ever known---is a deeply troubling system. At this price, purchasing the contents of PACER would cost somewhere on the order of one billion dollars.[^1]
 
One 👏 Billion 👏 Dollars 👏

For reference, storing the entire PACER corpus in the cloud would cost around $100,000/year.[^2]

How did this happen? How is it that as the cost of storing data has gone down, the cost of PACER data has gone up? How is it that non-profit organizations like the [Internet Archive][ia] can share [15 petabytes of data][ia-wiki][^3] for free while PACER data costs so much? 

Well, one reason the price is high, is because the Administrative Office of the Courts (AO), the federal organization that runs PACER, has a monopoly. In the E-Government Act, Congress asked the AO to set up PACER and said that they could charge a reasonable price for it. Since then, they've had an officially sanctioned monopoly on this data.

 
## Let's Talk (Briefly) About Monopolies
 
Contrary to popular wisdom, there can be good reasons for monopolies. For example, sometimes you have a product that's extremely expensive and that you wouldn't want to create in duplicate. A classic example of this is the sewer line that connects to your house. This sewer line is almost always run by an organization that has a local monopoly for your city because putting in sewer lines is expensive, and because we don't want every house to be connected do a half dozen sewer lines run by different companies. A competitive system like that would never work.

This is often the case for infrastructure that's expensive to set up, and PACER is like this in some respects. We could have multiple places were people uploaded their legal documents and where the public went to download them, but they'd each require a lot of upfront investment. If we set up multiple systems like that, we would lose the centralized system we currently have. These are probably good reasons to set up a limited monopoly, and Congress was probably right to do so when they passed the E-Government Act.

However, whenever you create monopolies, oversight becomes important. How do we know that our sewer lines are priced efficiently and that the folks running our sewers aren't gouging us? We know because of oversight.
 

## Oversight

Oversight comes in a few forms. It can be performed by journalists, by the public, or by other government bodies, like Inspectors General. To its credit, the AO [has a page on this topic on its website][accountability] that lists the various auditing and accountability mechanisms that are in place, but the fact is that none of these mechanisms have been successful in reviewing the excessive costs of the PACER system. 

One especially powerful tool that is worth mentioning is a Freedom of Information Act (FOIA) request. These can be sent by members of the public to request records of various kinds from the government. Journalists and the public rely on FOIA requests to learn about the inner workings of the government, and have used them to uncover all manner of malfeasance. Unfortunately, the AO is not subject to FOIA, because it's under the judicial branch, and FOIA requests are of no value there.

The next tool is Congressional oversight. The AO is required to file [annual reports][rep] but so far those reports have said that PACER is a resounding success and that surveys report great satisfaction among users. So far, Congress hasn't questioned these assertions, and so this oversight has failed.

The AO and the judicial branch do not have Inspectors General. That's out too.


## What We're Left With

The E-Government Act created a monopoly for the distribution of Federal Court data, and allowed the AO to charge to recoup its costs. Since the creation of PACER, it has brought in hundreds of millions of dollars and its prices have risen while the cost of storage and computing have fallen. 
  
We estimate that storing the entire PACER database could cost around $100,000/year, but last year the AO listed PACER revenue at $145M. 
 
Congress has an oversight role for the AO, but so far it hasn't acted to curb these costs and rein in PACER.
  


[^1]: 9.1 pages per document &times; ten cents per page = $0.91 per document. $0.91 &times; 1B documents (as of 2014) = $910,000,000. Critics will point out that there's a $3 cap per document, so this average isn't quite right. Still, this number doesn't factor in the cost of the docket sheets or search results (which aren't subject to a $3 cap). On top of this, the corpus has undoubtedly grown since 2014. Can we agree that one billion dollars is the right ballpark?

[^2]: These numbers are rough, but Amazon's storage product known as S3 [costs $0.0319/gigabyte/month][s3]. The average size of a document in RECAP is 278 bytes. So, 278 bytes &times; 1B documents means PACER has about 278 terabytes of data, which would cost about $106,528 to store each year at the current pricing. 

    The revenue of PACER in 2015, the last year that's available, was $145M (see item #1130 on page 51 of the [2016 Judicial Budget][budget]). Running PACER has other costs, but that revenue is 1,361 times more than what storing the documents in the cloud would cost.

[^3]: A petabyte is about 1,000 terabytes, which in turn is about 1,000 gigabytes. A gigabyte can hold thousands of documents. So, 15 petabytes is probably trillions of documents.

[cost]: https://www.pacer.gov/psc/faq.html
[recap]: {filename}/pages/recap.md
[scotus-report]: https://www.supremecourt.gov/publicinfo/year-end/2014year-endreport.pdf
[ia-wiki]: https://en.wikipedia.org/wiki/Internet_Archive
[ia]: https://archive.org
[suit]: http://arstechnica.com/tech-policy/2016/04/lawsuit-accuses-pacer-of-milking-the-public-for-cash-in-exchange-for-access/
[budget]: https://www.gpo.gov/fdsys/pkg/BUDGET-2017-APP/pdf/BUDGET-2017-APP-1-4.pdf
[s3]: https://aws.amazon.com/s3/pricing/
[rep]: http://www.uscourts.gov/statistics-reports/analysis-reports/directors-annual-report
[accountability]: http://www.uscourts.gov/about-federal-courts/judicial-administration/administrative-oversight-and-accountability
