Title: RECAP Project -- Frequently Asked Questions
Slug: recap/faq/

[TOC]

### Overview

#### What is PACER?
[PACER](http://pacer.psc.uscourts.gov/) stands for "Public Access to
Court Electronic Records." It is the website the federal judiciary uses
to make public records available to the general public. You can use
PACER to access legal documents relating to thousands of federal court
cases.

#### Who uses PACER?
Although PACER is officially available to the general public, it is
mostly used by practicing attorneys. The site is difficult for
non-lawyers to navigate, and it has a "paywall" that requires users to
pay significant fees for the documents they download from PACER.

#### What does RECAP do?
RECAP is an extension (or "add on") for the Firefox web browser that
improves the PACER experience while helping PACER users build a free and
open repository of public court records. RECAP users automatically
donate the documents they purchase from PACER into a public repository
hosted by the Internet Archive. And RECAP saves users money by alerting
them when a document they are searching for is already available from
this repository. RECAP also makes other enhancements to the PACER
experience, including more user-friendly file names.

#### Should I install RECAP if I'm not a user of PACER? Will installing RECAP affect my use of other websites?
No. RECAP only becomes active when you are accessing PACER. RECAP
automatically de-activates itself when you're browsing non-PACER
websites. Therefore, non-PACER users won't benefit from installing
RECAP.

#### Can I browse or search the archive directly, or do I need to use PACER to see RECAP files?
We've [built an experimental
interface]({filename}/new-search-and-browsing-interface-for-the-recap-archive.md)
to browse the RECAP archive. You can access it by clicking the 'Archive'
link at the top of the page, or by visiting
<http://archive.recapthelaw.org/>. Not all information contained within
the archive is searchable. We are being very conservative about what is
browseable/searchable because of [ongoing privacy
concerns](http://public.resource.org/uscourts.gov/) related to attorneys
who failed to redact personal information. We are working on (better)
auto-detection mechanisms, and as we get more comfortable with those as
well as the Courts' increased efforts to educate attorneys, we may make
more of the collection directly searchable and browseable. Obviously,
the archive would be more useful with more sophisticated search tools,
so we want to get there as soon as possible, but in a responsible way
that balances it with privacy concerns. ([More
information]({filename}/accessing-the-recap-repository-without-pacer.md))


### RECAP and PACER

#### Is RECAP affiliated with PACER?
RECAP is an independent project of the [Center for Information
Technology Policy](https://citp.princeton.edu/) at Princeton University
and [Free Law Project](https://free.law/). The project is in
not affiliated with or endorsed by the PACER system or the United States
judiciary.

#### Will RECAP interfere with my use of PACER?
RECAP is designed to improve your PACER experience without getting in
your way. To use RECAP, you simply log into PACER and use it as you
ordinarily would. In fact, from the perspective of PACER's servers, a
user with RECAP installed behaves exactly like any other PACER user. The
only difference is that the RECAP extension simultaneously communicates
with the RECAP web server, uploading purchased documents and checking
for documents available for free download. When a document is available
for download, RECAP puts a small, distinctive icon next to the official
PACER link. That means users always have a choice between downloading
the free RECAP version (if one is available) or paying for the PACER
version.

#### How do I know that the documents provided by RECAP are genuine?
Unfortunately, you don't. We rely on RECAP users to donate documents to
the repository. If the courts used a technology called [digital
signatures](https://en.wikipedia.org/wiki/Digital_signature), we would be
able to independently verify the authenticity of documents submitted to
us by users. But so far the courts have not done this, so we have no
foolproof way to detect forgeries. We believe that all the documents
currently in RECAP are genuine, and we're going to do our best to keep
it that way. But we can't guarantee that vandalism or technical glitches
won't cause problems in the future. So if you need a guarantee that a
document is genuine, we recommend you pay for the PACER version. And if
you spot a problem with a RECAP document, [please report it to us][c].


### Privacy and Security

#### Sometimes, when I view a PACER docket with RECAP enabled, I see the warning "Contains unauthenticated content" in the lower-right hand corner of my browser window. Should I be concerned?
You should always be concerned about security warnings displayed by your
browser. However, in this case, we believe the problem is a [known
bug](https://bugzilla.mozilla.org/show_bug.cgi?id=477118) in the way
some previous versions of Firefox handled images on encrypted pages.
Users seeing this message should download the [latest
version](http://www.mozilla.com/en-US/firefox/firefox.html) of Firefox,
which should cause the message to go away.

#### Why am I not getting any notifications that RECAP is uploading documents, even though the RECAP icon is blue?
You must enable the "display notifications" option in RECAP preferences.
If it's still not working and you are using Mac OS X, you may need to
install [Growl](http://growl.info).

#### Is any of my personal information disclosed as a result of using RECAP?
Refer to our [Privacy Policy](/privacy).

#### Can I disable RECAP?
If you wish to briefly disable RECAP without restarting Firefox, just
check the "Deactivate RECAP" checkbox in RECAP preferences.

#### Does RECAP upload files if I am an attorney using ECF?
Sometimes. If you are an attorney of record, you will have your own
"ECF" login. When you use this account (rather than a standard PACER
account), you have the ability to see more detailed information about
your cases and file documents. If you are only logged into ECF, RECAP
will not activate and will not upload any documents at all. If you are
logged into both ECF and PACER systems, RECAP will upload PACER
documents that you access from within the ECF system. At no time will
RECAP ever upload any information that is not already publicly
accessible. ([More
Information]({filename}/recap-extension-0-8-beta-released.md))



### Public Records

#### What is RECAP doing to guard against inadvertent disclosure of public records containing private information?
We take this problem very seriously. Under the
[rules](http://www.uscourts.gov/RulesAndPolicies/JudiciaryPrivacyPolicy.aspx)
of the federal courts, each party to a case is responsible for redacting
personally identifiable information from its own documents, and
courthouse personnel are responsible for redacting documents produced by
the courts. So in theory, there should not be any sensitive personal
information in PACER.

However, two situations can lead to private information appearing in
RECAP materials: 1) redaction rules are sometimes not followed, leading
to inappropriate information becoming available in public PACER
documents, and 2) courts may seal documents after they have been added
to the RECAP database.

For the first situation, RECAP servers automatically scan submitted
documents for certain personal identification information (including
Social Security numbers) before they are uploaded to the Internet
Archive. Any document in which we detect such information is
automatically suppressed. In addition, we rely on you to report privacy
problems by [emailing us][c] or clicking on
the link requesting that a document be hidden from search engines, which
is on the right side of archive.recapthelaw.org pages.

For the second situation, RECAP’s general policy is to suppress a
document when we become aware that it has been sealed by a court. If you
are aware of a sealed document available on RECAP, please [email
us][c] with the sealing order.

> Copyright protection under this title is not available for any work
> of the United States Government"

**--- [17 U.S.C. 105](http://en.wikipedia.org/wiki/Copyright_status_of_work_by_the_U.S._government)**

#### Is sharing court documents a violation of copyright law?
The court-created documents provided by PACER are works of the federal
government, and under [copyright
law](http://www.law.cornell.edu/uscode/17/105.html), are automatically
placed in the public domain and may be shared without legal restriction.
The question is a little bit more complicated for documents filed by
third parties, so we asked a prominent legal scholar about it. He told
us that such documents may be under copyright, but he thought
redistributing copyrighted court documents was legal under copyright's
fair use doctrine. However, there is very little case law in this area
(some examples are [here](http://www.volokh.com/posts/1248389303.shtml)
and
[here](https://freedom-to-tinker.com/blog/abridy/fair-use-legal-databases-and-access-to-litigation-inputs/)),
so it's impossible to be sure. We certainly believe citizens ought to
have the freedom to share public court documents, and we hope RECAP
users will help to establish that precedent.

#### The PACER "[policies and procedures](https://pacer.psc.uscourts.gov/documents/pacer_policy.pdf)" prohibit "any attempt to collect data from PACER in a manner which avoids billing." Is this what RECAP is designed to do?
Absolutely not. PACER charges users for the documents they download from
PACER. RECAP users pay for every document they download from PACER, just
like any other user. RECAP simply gives users a second option: to easily
share documents directly with one another, as they're permitted to do
under copyright law. When a user downloads a RECAP document, the
document comes directly from the Internet Archive's web server; the
process imposes no additional load on PACER's web servers.


### Technical Questions

#### What are the system requirements for using RECAP?
RECAP is an extension (or "add-on") for the Google Chrome and Mozilla
Firefox web browsers. It works with Windows, Mac OS, and Linux. We
currently are working on extending support to Internet Explorer as well.
The code is [open source](https://github.com/citp/recap), and we would
love to hear from experienced developers interested in contributing to
the project.

#### Is RECAP free software?
The RECAP Firefox extension is licensed under [version 3 of the GNU
General Public License.](http://www.gnu.org/copyleft/gpl.html) We have
no plans to release the code for the RECAP server.

#### How do I report a bug or make a feature suggestion?
At the moment, we don't have a formal bug-tracking infrastructure, but
if you [email us][c] we'll get back to you
promptly.

[c]: {filename}/pages/contact.md
