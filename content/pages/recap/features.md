Title: RECAP Project -- Features
Slug: recap/features/

RECAP adds several features to that improve the experience of
using PACER without changing your workflow.

## Automatic Upload

<div class="right-image">
    <img src="{static}/images/recap/iaupload.png"
         class="img-responsive"/>
</div>


As you browse PACER, RECAP will upload
docket files and PACER-downloaded PDFs to the Internet Archive for
others to download. This happens transparently and adds nothing to your
PACER fees. You will see a small notification box after each upload,
which you can turn off if you wish. By simply installing RECAP, you are
contributing to this growing public domain legal library.


## Free Documents

<div class="right-image">
    <img src="{static}/images/recap/free-link.png"
         class="img-responsive"/>
</div>

On each docket page, RECAP will tell you
whether a free version of each document is already available from the
archive. If so, it will display a small "R" icon next to the document
link, which allows you to download the public-domain document for free.
Over time, this can save you considerable fees.


## Better Filenames

<div class="right-image">
    <img src="{static}/images/recap/better-filename.png"
         class="img-responsive"/>
</div>

You may have noticed that PDFs from
PACER often have a default filename like "98723421.pdf". Not very
informative! You might also occasionally get the even more frustrating
filename "show\_temp.pl" (which might not even open in your PDF viewer).
RECAP intelligently names your PDFs in a way that includes the PACER
court id, PACER case id, and docket entry number -- or in ["Bluebook"
style]({filename}/recap-extension-0-6-beta-released.md).


## PDF Headers

<div class="right-image">
    <img src="{static}/images/recap/include-headers.png"
         class="img-responsive"/>
</div>

In some courts, there is the option
to include a helpful "header" at the top of each page of PDFs that you
download. This header lists the court, case, and other information.
Unfortunately, this option is sometimes not checked by default, and it
is easy to forget to do so. RECAP automatically checks this option for
you, although you can disable this feature in the RECAP Preferences if
you prefer.

We'd like your ideas for other RECAP features. [Let us know][c].

The diagram below shows the flow of RECAP working with Firefox to upload
case dockets and documents that you have paid for to the public archive,
and notifying you when free versions of documents are already available.


![Diagram showing RECAP flow]({static}/images/recap/recap-diag.png)


[c]: {filename}/pages/contact.md
