Title: RECAP Project -- Frequently Asked Questions
Slug: recap/faq/


## Overview

### What is PACER?
[PACER](http://pacer.psc.uscourts.gov/) stands for "Public Access to
Court Electronic Records." It is the website the federal judiciary uses
to make public records available to the general public. You can use
PACER to access legal documents relating to millions of federal court
cases. You can learn more about PACER in our [PACER FAQ][faq].

### Should I install RECAP if I'm not a user of PACER? 
No. RECAP only becomes active when you are accessing PACER and deactivates when you're browsing non-PACER websites. Therefore, non-PACER users won't benefit from installing RECAP — it simply won't do anything.

### Will installing RECAP affect my use of other websites?
No. RECAP only works on PACER-related sites.

### Will RECAP interfere with my use of PACER?
RECAP is designed to improve your PACER experience without getting in your way. To use RECAP, log into PACER and use PACER as you normally do. As you use PACER, you'll see small RECAP icons and other notifications about free versions of PACER content. Click these icons and links to get PACER content for free. 

<a href="/recap/screenshots/" class="btn btn-primary btn-lg">View Screenshots of RECAP</a>


### Can the judiciary tell that I'm a RECAP user?
We don't think so, no, and we have no reason to believe they've ever tried. From the PACER's perspective, a user with RECAP installed behaves exactly like any other user. The only difference is that the RECAP extension simultaneously communicates with the RECAP web server, uploading purchased documents and checking for documents available for free download. 

When a document is available for download, RECAP puts a small, distinctive icon next to the official PACER link. That means users always have a choice between downloading the free RECAP version (if one is available) or paying for the PACER version.


### Can I browse or search the archive directly, or do I need to use PACER to see RECAP files?
Yes! You can search and browse the entire RECAP Archive on our website, CourtListener.com: 

<a href="https://www.courtlistener.com/recap/" class="btn btn-primary btn-lg">Visit the RECAP Archive</a>

<hr>
## Technical Questions

### Why am I not getting any notifications that RECAP is uploading documents, even though the RECAP icon is blue?
You must enable the "display notifications" option in RECAP preferences. It should be on by default.

### Can I disable RECAP?
Yes, in two ways. First, in the RECAP preferences, there is an option to disable uploads. Clicking that box will ensure that you avoid uploading something to the RECAP Archive while allowing you to continue to download items. We do hope you'll contribute though.
 
Second, if you wish to disable RECAP completely, you can do so via Chrome or Firefox's extension settings.

### What browsers are supported? Why?
We currently support Firefox and Chrome, with an experimental version for Opera users. We would love to also add support for Safari and IE Edge, but we need a maintainer that is willing to help with these platforms when new versions are released. If that might be you, [send us a message][c]!

### How do I report a bug or make a feature suggestion?
You can report bugs [on our bug tracker][bugs] or by [sending us an email][c] — whatever is comfortable for you.


<hr>

## RECAP and PACER

### Is RECAP affiliated with PACER?
RECAP is an independent joint project of the [Center for Information Technology Policy][citp] at Princeton University and Free Law Project. The project is in
not affiliated with or endorsed by the PACER system or the United States
judiciary. 

### How do I know that the documents provided by RECAP are genuine?
Unfortunately, you don't. We rely on RECAP users to donate documents to the repository. If the courts used a technology called [digital signatures][sigs], we would be able to independently verify the authenticity of documents submitted to us by users. But so far the courts have not done this, so we have no foolproof way to detect forgeries.

That said, RECAP has been running since 2009 without any known forgeries.  We believe that all the documents currently in RECAP are genuine, and we're going to do our best to keep it that way. But we can't guarantee that vandalism or technical glitches won't cause problems in the future. So if you need a guarantee that a document is genuine, we recommend you pay for the PACER version. And if you spot a problem with a RECAP document, [please report it to us][c].

<hr>
## Privacy and Security

### Is any of my personal information disclosed as a result of using RECAP?
We always try not to collect your personal information to the greatest extent possible, and we've specifically designed the RECAP extensions not to require registration or logging in. For more details, see the [RECAP Privacy Policy][privacy].

### Does RECAP upload files if I am an attorney using ECF?
Sometimes. If you are an attorney of record, you will have your own "ECF" login. When you use this account (rather than a standard PACER account), you have the ability to see more detailed information about your cases and file documents. If you are only logged into ECF, RECAP will not activate and will not upload any documents at all. If you are logged into both ECF and PACER systems, RECAP will upload PACER documents that you access from within the ECF system. 

At no time will RECAP ever upload any information that is not already publicly
accessible. ([More Information]({filename}/recap-extension-0-8-beta-released.md))


<hr>
## Public Records

### What is RECAP doing to guard against inadvertent disclosure of public records containing private information?
We take this problem very seriously. Under the [rules][rules] of the federal courts, each party to a case is responsible for redacting personally identifiable information from its own documents, and courthouse personnel are responsible for redacting documents produced by the courts. So in theory, there should not be any sensitive personal information in PACER.

However, two situations can lead to private information appearing in RECAP materials: 1) redaction rules are sometimes not followed, leading to inappropriate information becoming available in public PACER documents, and 2) courts may seal documents after they have been added to the RECAP database.

For the first situation, RECAP servers automatically scan submitted documents for certain personal identification information (including Social Security numbers). Any document in which we detect such information is automatically suppressed. In addition, we rely on you to report privacy problems by [emailing us][c].

For the second situation, Free Law Project's general policy is to suppress a document when we become aware that it has been sealed by a court. If you are aware of a sealed document available on RECAP, please [email us][c] with the sealing order.


### Is sharing court documents a violation of copyright law?
The court-created documents provided by PACER are works of the federal government, and under [copyright law][copyright-law], are automatically placed in the public domain and may be shared without legal restriction. The question is a little bit more complicated for documents filed by third parties, so we asked a prominent legal scholar about it. He told us that such documents may be under copyright, but he thought redistributing copyrighted court documents was legal under copyright's fair use doctrine. However, there is very little case law in this area (some examples are [here][volokh] and [here][ex2]), so it's impossible to be sure. We certainly believe citizens ought to have the freedom to share public court documents, and we hope RECAP users will help to establish that precedent.

### The PACER "[policies and procedures][ppp]" prohibit "any attempt to collect data from PACER in a manner which avoids billing." Is this what RECAP is designed to do?
Absolutely not. PACER charges users for the documents they download from PACER. RECAP users pay for every document they download from PACER, just like any other user. RECAP simply gives users a second option: to easily share documents directly with one another, as they're permitted to do under copyright law. When a user downloads a RECAP document, the document comes directly from our server; the process imposes no additional load on PACER's web servers.



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
[faq]: {filename}/pages/pacer-facts.md
[citp]: https://citp.princeton.edu/
[sigs]: https://en.wikipedia.org/wiki/Digital_signature
[bugs]: https://github.com/freelawproject/recap/issues/new
[privacy]: {filename}/pages/recap/privacy.md
[rules]: http://www.uscourts.gov/RulesAndPolicies/JudiciaryPrivacyPolicy.aspx
[copyright-law]: http://www.law.cornell.edu/uscode/17/105.html
[volokh]: http://www.volokh.com/posts/1248389303.shtml
[ex2]: https://freedom-to-tinker.com/blog/abridy/fair-use-legal-databases-and-access-to-litigation-inputs/
[ppp]: https://pacer.psc.uscourts.gov/documents/pacer_policy.pdf
