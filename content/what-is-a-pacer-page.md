Title: What is a "Page" of PACER Content
Date: 2016-10-03
Author: mlissner
Tags: PACER, transparency
Status: draft

As most readers of this blog know, PACER is a website run by the Administrative Office of the Courts that [hosts over a billion documents][b] from the Federal District and Circuit courts. The system was created in the nineties and was set up with a paywall so that you pay for every bit of data that you receive. For example, if you do a search, you pay by the number of search results returned. If you download one of the PDFs in PACER, you pay by the page. And if you look at a list of documents within a case (the "docket" for that case), you pay by the length of that docket.
 
The pricing of PDFs is pretty clear: 10 cents per page with a cap at three dollars. Got it. But the price of the dockets and of the search results is perplexing. Dockets and search results are also priced per page, but unlike a PDF, there are no *pages* per se --- These are webpages, not PDFs. So I began to wonder: What *is* a page of PACER data? When I get charged for a search result or for a docket, what exactly am I paying for? How are pages computed?

To get to the bottom of this, I spent a little time talking with the folks who run PACER, and I present the results of those discussions below. But before I begin, I'll tell you the punchline: PACER is charging for content page by page, but they won't define what a page actually is. This gives them the capability to change how pages are computed in order to drive up their revenue. It makes them vulnerable to lawsuits, and indeed such a suit is progressing in the Court of Federal Claims.[^1] 

We don't know if the underlying methods of pricing have ever changed and we probably never will, but with courts being strapped for cash, we do know that there's motivation to do so. The AOC's unwillingness to discuss this topic is troubling, since it forms the core of their pricing. We hope that they will consider providing more details about this question.


## Getting Towards an Answer

My inquiry about this began with a phone call to the PACER service center, where I got the following answer: Dockets are charged based on the number of pages that would be printed if you sent them to your printer. This was clearly wrong, so I pushed back: "Does that mean that if I increase my font size, I have to pay more because it would print more pages?" This stumped the person on the phone, and I was told I should send an email with my question instead. Fair enough:

> When I download a PDF, it's quite clear what a page is, but when I look at a docket or search results, it's not so clear. Is this based on the font size that I have in my browser? Is it based on the kilobytes of data that I download? Is it based on the number of characters in the HTML? I'm really trying to understand this, because it feels very arbitrary.
  
> Can you give me a more specific explanation of what a "page" is? It's at the heart of your pricing, so I hope this is a question with a simple answer.

The response I received was brief and wrong again:

<div class="left-image">
    <blockquote>
    <img src="{filename}/images/pacer-page/54-lines.png"
             alt="Email from PACER stating: One page of data is 54 lines. Those lines include spacing. It is related to the data as it is extracted, and not necessarily how it is displayed on a web page or printed out."/>
    </blockquote>
</div>
<div class="clearfix"></div>

So now I've received two answers. It's not how it's printed, it's 54 lines including spacing. No more, no less. [Despite being so precise][numbers], this also didn't make any sense, because lines can have different lengths. I asked: What if one line takes two pages to print because it's very long?

The answer:
  
<div class="left-image">
    <blockquote>
    <img src="{filename}/images/pacer-page/bytes-of-data.png"
             alt="Email from PACER stating: It is actually measured by bytes of data."/>
     </blockquote>
</div>
<div class="clearfix"></div>

Ah ha. This was the third answer I'd received, but it seemed like we were getting warmer. Pages are measured by the length of data they return. That sort of makes sense. But wait, how many bytes make up a page?


<div class="left-image">
<blockquote>
    <img src="{filename}/images/pacer-page/how-many-bytes.png"
             alt="Email from me, asking: Can you tell me how many bytes is considered a page?"/>
</blockquote>
</div>
<div class="clearfix"></div>

The shocking response:

<div class="left-image">
<blockquote>
    <img src="{filename}/images/pacer-page/dont-know.png"
             alt="Email from PACER stating: Unfortunately, I do not have that information."/>
</blockquote>
</div>
<div class="clearfix"></div>

I could not imagine that PACER doesn't know how big a page is, so I pushed again and got closer to a real answer:

<div class="left-image">
    <blockquote>
        <img src="{filename}/images/pacer-page/4320-bytes.png"
                 alt="Email from PACER stating that it's 4320 bytes."/>
    </blockquote>
    <p class="caption"><a href="https://www.pacer.gov/documents/pacermanual.pdf">Here's the manual, if you're interested</a>.</p>
</div>
<div class="clearfix"></div>

For those keeping track, we're now one phone call and three answers into this seemingly basic question, but it looks like we have an answer. 

Except:

1. If you test a docket by downloading it and then measuring how big it is, nothing adds up to 4,320 bytes, so there's still no way to know where those bytes are coming from.

2. It took two PACER service center representatives three answers and maybe a dozen emails to arrive at this answer. 

3. 4,320 bytes is perhaps the most arbitrary number imaginable (although "54 lines" is about as bad).

I decided to set aside issues number two and three, and focus on the first issue: If we know that a "page" is now defined as 4,320 bytes, what is the thing that is being divided into "pages"? Is it the webpage? The text of the webpage? Something else?
 
The answer:

<div class="left-image">
    <blockquote>
        <img src="{filename}/images/pacer-page/two-files.png"
                 alt="Email from PACER stating there are two files generated or something."/>
    </blockquote>
</div>
<div class="clearfix"></div>

This is getting into the weeds, but it feels like what she's saying is:

1. We extract a lot of data from our database in an "original extraction file".

2. We measure this data and bill you for it.

3. We send you a subset of that data in the form of a docket.

Since at this point they still hadn't explained how a page was created, and since this opaque process was at the heart of the revenue model for PACER, I decided to send one more email asking about the technical details for generating the "original extraction file." Since we don't know  how these files are generated, it's possible that the AOC could tweak this method and thereby raise PACER revenue.

When I asked about this, the next response I got was from the Senior Attorney for the Administrative Office of the Courts:

<div class="left-image">
    <blockquote>
        <img src="{filename}/images/pacer-page/atty-response.png"
                 alt="Email from PACER Senior Attorney"/>
    </blockquote>
</div>
<div class="clearfix"></div>

This was a bit of a surprise, and I must confess that this is where the story goes cold. But we can learn a few things from these interactions. First, it's important to note that it took three answers before the AOC could give me a vaguely correct answer to my basic question about their pricing. The first two answers were flat wrong. Second, the AOC has no interest in being truly transparent about how their pricing works. Yes, we now know that 4,320 bytes is a "page", but we still don't know: Bytes of *what*? What *is* an "original extraction file"?
 
Third, we know that if you ask about this kind of thing persistently enough, you'll be routed to an attorney for an official response. At the time when I was researching this, I was shocked to hear from an attorney in response to a help desk question. Since then, it's come to make more sense. It turns out that towards the end of last year, there was a class action lawsuit filed against PACER alleging erroneous pricing for---you guessed it---generating dockets.[^1] While I won't opine on the merits of that case (and indeed I'm not a lawyer), it is possible that the AOC had wind of that case and wanted to make sure they didn't make any legal missteps while emailing with me. The timeline isn't perfect---my inquiries were in November, and the case was filed in December---but if it wasn't related, it sure was prescient.

Going forward, we believe that the AOC should consider a few changes:

1. The AOC should share more details about how their pricing works both internally, so their staff have the correct answers, and externally, so that the answers are easy to find by the public, not buried in a 28 page manual. Indeed, in their billing it could  say how much *data* you purchased in a month instead of how many *pages*.

2. The AOC should provide transparency about how "pages" are defined. We know that they're 4,320 bytes, but we still don't know what an "original extraction file" is. Providing technical details on this would provide clarity to their pricing and would make them less able to make technical changes in efforts to raise revenue. Criticism like this post would be largely addressed.

3. The AOC should refrain from having lawyers answer help desk questions.

We hope the AOC will consider these changes, and that in the future their pricing will be more transparent.


[b]: https://www.supremecourt.gov/publicinfo/year-end/2014year-endreport.pdf

[^1]: Among other failings, PACER doesn't provide permalinks, so for the moment, I can't provide a link to this information. What I can do is tell you to go to [the PACER website for the Court of Federal Claims][2]. From there you can look up case number: 1:15-cv-01575-TCW. Beware: There will be opaque fees.
  
[2]: https://ecf.cofc.uscourts.gov/cgi-bin/ShowIndex.pl
[numbers]: http://business.camden.rutgers.edu/files/Schindler-Yalch-2006.pdf
