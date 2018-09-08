Title: Uploading PACER Dockets and Oral Argument Recordings to the Internet Archive 
Author: Michael Lissner
Date: 2018-09-11
Tags: internet archive, pacer, recap, oral arguments
Status: Draft


<div class="well">
<h4>Highlights</h4>
<ul>
  <li><p>We have begun uploading six million PACER dockets to <a href="https://archive.org/details/usfederalcourts" target="_blank">the Internet Archive</a>. Docket uploads will be completed quarterly going forward.</p></li>
 
  <li><p>Our <a href="https://www.courtlistener.com/audio/" target="_blank">collection of oral argument recordings</a> now supports all circuit courts and the Supreme Court. Previously, due to inaccesibility, it lacked the 10th and 11th Circuits.</p></li>
 
  <li><p>We have uploaded <a href="https://archive.org/details/uscourtsoralarguments" target="_blank">more than thirty-six thousand oral argument recordings</a> consisting of over 1.2 million minutes of audio to the Internet Archive. New oral argument recordings will be uploaded nightly.</p></li>
</ul>
</div>

<div class="right-image">
    <img src="{filename}/images/logos/internet-archive.svg"
         alt="Internet Archive Logo"
         class="img-responsive"
         height="175"
         width="175">
</div>

<!-- PELICAN_BEGIN_SUMMARY -->
At Free Law Project, we collect a lot of legal information. In our RECAP initiative, we collect (or [are donated][recap]) around one hundred thousand items from PACER every day. Separately, in our collection of oral argument recordings, we have gathered more than 1.2 million minutes of legal recordings — more than anywhere else on the web. All of this content comes from [a variety of sources][coverage], and we merge it all together to make [a searchable collection of PACER dockets][recap-archive] and [a huge archive of oral argument recordings][oa].


Part of [our mission][mission] at Free Law Project is to share this information and to ensure its long-term distribution and preservation. A great way to do that is to give it to a neutral third party so that no matter what happens, the information will always be available. For years, we have been lucky to partner with the [Internet Archive][ia] for this purpose and today we are pleased to share two pieces of news about how we give them information.
<!-- PELICAN_END_SUMMARY -->

The first news is that we are fulfilling [our promise from last November][promise] to do quarterly uploads of the PACER dockets that we have in the [RECAP Archive][recap-archive]. This is currently about six million dockets comprising nearly 40 million docket entries. We already upload the PDFs from these cases each night, so the change here is that we are now *also* uploading all of the dockets themselves. 

We hoped to fulfill this promise back in December of last year, but [learned][gh1] — [repeatedly][gh2] — that this was a difficult and complex task. This first batch of dockets will take a while to complete, but we are happy to finally have it uploading. We apologize for the delay in accomplishing this.

<p class="alert bg-warning"><i class="fa fa-bug"></i> <strong>For the techies:</strong> This information is being uploaded as JSON data, in a format that closely mirrors that of our APIs. <a href="https://archive.org/download/gov.uscourts.dcd.190597/gov.uscourts.dcd.190597.docket.json">Here's an example of a JSON object</a> for <a href="https://www.courtlistener.com/docket/6183591/united-states-v-manafort/">the Manafort case in DC</a>. To learn more about the data or the fields, please see <a href="https://www.courtlistener.com/api/rest-info/">the CourtListener API documentation</a>. Unfortunately, we no longer support the old XML format.
</p>

We think this is big news! More than six million PACER dockets will be permanently preserved as high-quality data at the Internet Archive, with more regularly on the way.

---

<div class="col-xs-5 pull-right col-sm-3 bg-primary">
    <h3>Check It Out</h3>
    <p>You can find all of our oral argument recordings on the Internet Archive in a new collection we have created for this purpose.
    </p>
    <p><a href="https://archive.org/details/uscourtsoralarguments" target="_blank" class="btn btn-info btn-block">Check It Out</a>
</div>

Our second piece of news is that as of a few days ago, we uploaded our [entire collection of oral argument recordings][oa] to the Internet Archive. This is around 1.2 million minutes of audio from about thirty-six thousand federal circuit court recordings. Every night from now on, we will upload any new recordings that we gather.

We are also announcing today that our database of oral argument recordings now supports both the [10th][ca10] and [11th circuits][ca11]. For years [we][letter1] [have][letter2] [been][letter3] [writing][letter4] letters to the circuit courts, urging them to post their oral argument recordings, and explaining the historical, educational, and legal importance of these recordings. 

With these last two courts added, all of the circuit courts post their oral argument recordings to their website. Prior to this milestone, numerous circuit courts required expensive and bureaucratic paperwork to get a single recording, and consequently, such recordings rarely saw the light of day.

We could not be more thrilled and proud to have helped bring this data into the open. With this, we are finally gathering oral argument recordings from all of the circuit courts, making it [searchable][oa], uploading it to the Internet Archive, and even making it into [podcasts][podcasts]. The Internet Archive is also generating written transcripts of all of the recordings we send them, allowing you to search for what was said in a circuit court on a given day. 

This is what's possible when data is readily available. 


## What's Next

There is always more work to do. Here's what's next:

1. We are looking for help downloading the oral argument transcriptions from Internet Archive and making them searchable on CourtListener.

1. We need to continue monitoring our first big upload of dockets to make sure that it finishes cleanly and completely. It is a big job for our server and it requires a watchful eye.

The steps we are taking today are hard ones that we have been working on for years. We hope you will support our efforts so we can do more of this work.

<a href="https://www.courtlistener.com/donate/?referrer=ia-announcement" class="btn btn-danger btn-lg" target="_blank">
    <i class="fa fa-heart-o"></i> Donate Now
</a>


[ia]: https://archive.org

[c]: {filename}/pages/contact.md
[letter1]: {filename}/pdf/letters/Free%20Law%20Project%20Letter%20to%20CA2%20re%20Oral%20Argument%20Publication.pdf
[letter2]: {filename}/pdf/letters/letter-to-ca11-re-oral-arguments.pdf
[letter3]: {filename}/pdf/letters/letter-to-ca11-re-oral-arguments-rule-changes.pdf
[letter4]: {filename}/pdf/letters/letter-to-tim-tymkovich-re-oral-argument-recordings-at-ca10.pdf
[mission]: {filename}/pages/mission.md
[promise]: {filename}/new-recap.md
[recap]: {filename}/pages/recap.md

[api]: https://www.courtlistener.com/api/
[ca10]: https://www.courtlistener.com/?type=oa&order_by=score+desc&court=ca10
[ca11]: https://www.courtlistener.com/?type=oa&order_by=score+desc&court=ca11
[coverage]: https://www.courtlistener.com/coverage/
[oa]: https://www.courtlistener.com/audio/
[podcasts]: https://www.courtlistener.com/podcasts/
[recap-archive]: https://www.courtlistener.com/recap/

[gh1]: https://github.com/freelawproject/courtlistener/issues/783#issue-284855210
[gh2]: https://github.com/freelawproject/courtlistener/issues/783#issuecomment-410094127
