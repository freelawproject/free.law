Title: Free Law Project Re-Launches RECAP Archive, a New Search Tool for PACER Dockets and Documents
Author: mlissner
Date: 2016-11-07
Tags: recap, pacer, archive, search, roadmap, privacy
Status: Draft


After months of development, we are thrilled to share a from-scratch re-launch of the [RECAP Archive][ra]. Our new archive, available at <https://www.courtlistener.com/recap/> contains all of the content currently in [RECAP][recap] and makes it all fully searchable for the first time. At launch the collection contains information about nearly ten million PACER documents, including the extracted text from more than seven million pages of scanned PACER documents.

<div class="text-center">
    <a href="https://www.courtlistener.com/recap/">
        <img src="{filename}/images/recap-adv-search.png"
             alt="RECAP Advanced Search Screen"/>
    </a>
</div>

The search capabilities of this new system empower researchers in new ways. For example:
 
 - It's now straightforward to search for certain types of documents within our archive of PACER documents. This makes it easy to find examples of [motions to dismiss][mtd], [summary judgements][sj], or any other type of document. 
 
 - Researchers can filter by nature of suit, case name, jurisdiction, cause, or one of a number of other fields. Ever wish you could look for examples of certain kinds of documents in your jurisdiction or topic area? Now you can.
 
 - It's now possible to do full-text search within all the documents in a case that are in the [RECAP Archive][ra]. This feature is particularly powerful in large cases containing thousands of documents. 
  
Beyond the powerful search capabilities we've built into this tool, this new archive makes a variety of tasks possible that were difficult or impossible before. For example:

 - Every document and every docket in the [RECAP Archive][ra] now has a link. This makes it much easier to share PACER documents. Rather than telling a colleague to go to a certain PACER website, search for a certain case, then look for a certain document, now you can simply share a link.
 
 - All documents have page counts in their metadata. This means that before you even open an item, you know what to expect. It also allows fascinating research. For example, did you know that the average length of a PACER document is 9.1 pages, but that the average length of a summary judgement is 18.9 pages?
   

## Privacy Balance

Privacy of personal information has always been important to us at Free Law Project and in conjunction with this launch, we're refining the privacy rules we use when handling PACER documents. The new privacy rules are as follows:
 
1. All PACER documents are available in our search results and our website, and will be available in our APIs and bulk data when those features are ready. However, PACER documents are *not* available to public search engines like Google and Bing. 

1. PACER dockets are generally available to search engines, but with two exceptions. First, if a request is made by a party in a case to make it private, we consider doing so. Second, any bankruptcy case with fewer than 500 items is private by default. There are innumerable personal bankruptcy cases, so we use this threshold to gauge the importance of the case.

We see the rules above as a starting point, and we will be refining these rules as we hear more from our stakeholders.

## What's Next?

As we move forward with our PACER initiatives, we see a variety of next steps:

1. In the next few months, we will be launching a PACER/RECAP data service. This service will help journalists and researchers acquire and understand PACER content. Already we are identifying researchers to help launch this service.
  
1. We are planning to download all free opinions and orders from PACER so that we can make them available in this search interface, our API, and our archives. We believe this is an important step in fixing the [PACER problem][problem]. This will be expensive, but we believe it is important.

1. We will soon be launching an API for the data that is currently in this archive so that it can be downloaded by researchers and organizations. We are still investigating how to provide this service at a cost that is true to our mission and fair to our users. If you are a stakeholder that will be using this data, we welcome hearing your ideas for how a fair system could be created.

1. After the first API is launched, we will be developing a RECAP Clearinghouse that allows researchers and organizations to use our API to get content from PACER, whether we have it or not. The Clearinghouse will work similar to the RECAP extensions, except it will provide an API and will visit PACER on you behalf. 

    For example, in the case that we have a document, the clearinghouse will provide it to you for free. In the case that we do not, the API will use your credentials to purchase the document, and then will save a copy for future users to receive for free. 

    If you are a researcher, journalist or organization that would use a tool like this, please get in touch.
 
1. We will soon be running our citation extractor across the RECAP Archive to identify citations to opinions in our collection so that they can be analyzed and made into links.

1. A few details are not quite ready in this tool. Party information is not searchable, we're not syncing the latest RECAP content, and favorites, alerts, and RSS feeds aren't yet in place. We will be adding these features as soon as possible, but decided to launch today so that we could begin getting feedback.


## Wrapping Up

We believe that this new search tool and the roadmap presented above will bring a sea change in how people think about PACER. Creating an archive for all free PACER opinions and a clearinghouse for new content should quickly create a large and useful collection of PACER content. This will enable researchers, journalists, and organizations to focus their efforts where it matters --- creating new research, identifying and telling important stories, and innovating the legal marketplace. We hope you'll join us in this effort, and that if you find these services and tools valuable, that you'll [support our work with a donation][donate].


[problem]: https://free.law/2015/03/20/what-is-the-pacer-problem/
[ra]: https://www.courtlistener.com/recap/
[mtd]: https://www.courtlistener.com/?q=&type=r&order_by=score+desc&description=%22motion+to+dismiss%22
[sj]: https://www.courtlistener.com/?q=&type=r&order_by=score+desc&description=%22summary+judgement%22
[donate]: https://www.courtlistener.com/donate/
[recap]: {filename}/pages/recap.md
