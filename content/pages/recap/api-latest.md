Title: API Documentation
Date: 2015-01-14 23:02
Author: mlissner
Slug: recap/api-latest/
Status: published

RECAP was developed by the [Center for Information Technology and Policy
at Princeton](https://citp.princeton.edu/) and is currently maintained
by [Free Law Project](https://free.law), a 501(c)(3) non-profit
based in Emeryville, California.

Our operating costs are currently paid for by a combination of
donations, advertising, small grants, and usage fees for APIs like this
one. If you are interested in using this or other APIs, please get in
touch by emailing
[info@free.law](mailto:info@free.law?subject=RECAP%20API).

The RECAP API should be fairly straightforward and currently has two
main features. The first is checking if an item is in our archive. The
second is uploading a new item to our archive. After discussing some
background information, this document is broken down into sections for
each of these functions.

Overview and Background
-----------------------

Understanding the RECAP API is easier if you know the following
background material:

1.  [Architecture](#arch)
2.  [Limitations](#limitations)
3.  [Available Jurisdictions](#jurisdictions)
4.  [Dates and Times](#datetimes)
5.  [Code and Development](#code)
6.  [Development Server](#dev-server)
7.  [Official Artwork](#art)

### Architecture {#arch}

The architecture of RECAP can be seen in the image below. There are
always at least three actors involved in RECAP actions. The first is the
client, in most cases an extension installed on a user's computer, but
increasingly people or organizations using the APIs described here.

The second actor is what we call the RECAP Server, which is what the
client directly interacts with. This computer has the roles of (1)
keeping track of which items have been uploaded to the archive and (2)
uploading new items as requested by clients.

The third actor is the archive that contains the complete collection of
RECAP documents.

It's important to understand this archicture as we discuss the
functionality and limitations of this API. The below diagram shows these
actors during typlical usage.

[
![RECAP Architecture
Diagram]({filename}/images/recap/recap-diagram.png){.alignnone
.size-medium width="420" height="600"}
]({filename}/images/recap/recap-diagram.png)

### Limitations

There are a few limitations that commonly come up while using the RECAP
API. The first limitation relates to the overall speed of uploads.
Because of the architecture of the system, a new or updated item that is
sent to the RECAP Server can take some time to actually become available
in the archive.

There are two processing queues an item must pass through before it is
available. The first queue is the upload queue on the RECAP Server,
where items must wait in line before they can be pushed to the archive.
This is necessary due to upload throttling in place at the Internet
Archive.

The second queue is the processing queue at the Internet Archive, which
transforms an upload to various formats, creates a webpage for it and
makes it globally available.

At times of high usage the upload queue on the RECAP Server can become
somewhat long, and the Internet Archive has occasionally had significant
congestion. At worst, these delays can combine to delay an upload by up
to 18 hours, although that does not happen commonly and most uploads are
significantly faster. Cries that our API is broken are most-often
explained by these delays and we are working to reduce them to the
extent possible.

A second limitation in our architecture is that we do not keep copies of
the millions of items that are uploaded to the Internet Archive. This
means that we are unable to add API features like document search,
although this is an area we are exploring.

A final limiation is that our system does not currently support
so-called minute orders, although this is also an area that has been
sponsored and will soon be fixed. For more details, see the [ticket in
our issue
tracker](https://github.com/freelawproject/recap-server/issues/49).

### Available Jurisdictions {#jurisdictions}

RECAP supports all of the PACER jurisdictions and uses their subdomain
as the key to the court. For example, the District Court of the District
of Columbia has their PACER site at:

    https://ecf.dcd.uscourts.gov

And so their jurisdiction ID is `dcd`. All other courts follow this
pattern.

### Dates and Times {#datetimes}

All dates and times are in UTC. Dates are currently formatted in
`mm/dd/yy`, but we plan to change this to ISO-8601 when time allows.

### Code and Development {#code}

All elements of RECAP are developed by Free Law Project and others in a
transparent manner. Implicit in that promise is the online availablity
of the code for all of our projects:

-   [RECAP Server](https://github.com/freelawproject/recap-server)
-   [RECAP Chrome
    Extension](https://github.com/freelawproject/recap-chrome)
-   [RECAP Firefox
    Extension](https://github.com/freelawproject/recap-firefox)

The extensions can be used as sample client implementations and the
causes of errors from the API can often be analyzed by looking at its
code. Most handling logic for the server is located in the `views.py`
file. Additional exploratory and beta-level projects can be found by
exploring other [Free Law Project
repositories](https://github.com/freelawproject/).

If a new feature is desired for your integration, we welcome
contributions to expand the API and are often eager to work together to
that end. We also welcome bug reports if issues are discovered. API
issues should be filed under the [RECAP
Server](https://github.com/freelawproject/recap-server/issues/new),
which provides the API.

### Development Server {#dev-server}

A development server can be enabled for the duration of an
implementation. When the development server is enabled, it is located
at:

    http://it.recapextension.org:8008

And it uploads items to [a development bucket on the Internet
Archive](https://archive.org/search.php?query=%28collection%3Ausfederalcourtsdev%20OR%20mediatype%3Ausfederalcourtsdev%29%20AND%20-mediatype%3Acollection&sort=-publicdate).

The development server is not configured to be as robust as our
production server (for example, its web server is not multi-threaded and
it may crash from time to time).

Please get in touch if you have any difficulty with the development
server or if you need it to be enabled.

### Official Artwork {#art}

Official artwork is available [on the Free Law Project
website]({filename}/pages/assets.md).

Querying Items
--------------

### `/recap/query_cases/`

This endpoint can be used to query whether RECAP has a **docket** for a
specific case. If it is available, a response will be provided in JSON
format containing the `docket_url` where the docket is located in the
archive, and `timestamp` indicating the date when the docket was last
updated.

For example the following uses a `POST` request to check case number
`125528` in the District Court of the District of Columbia (`dcd`):

    curl --data "json={\"court\":\"dcd\", \"casenum\":\"125528\"}" "$BASE_URL/recap/query_cases/"

And the response is:

    {
      "timestamp": "07/30/09",
      "docket_url": "http://www.archive.org/download/gov.uscourts.dcd.125528/gov.uscourts.dcd.125528.docket.html"
    }

[Checking that
url](http://www.archive.org/download/gov.uscourts.dcd.125528/gov.uscourts.dcd.125528.docket.html)
shows the docket for case number `125528`.

Items that are not in our collection return an empty JSON object. For
example:

    curl -v --data "json={\"court\":\"dcd\", \"casenum\":\"125529\"}" "$BASE_URL/recap/query_cases/"

Returns:

    {}

### `/recap/query/`

This endpoint can be used to query RECAP for a collection of specified
documents from a docket within a single court. Two parameters are
required, the first, `court` is the court code for the docket as
explained above. The second parameter, `urls`, is an array of PACER
document URLs from within that court.

The response for this endpoint will be a JSON object containing a
mapping between the URLs you provided as your input array and an object
containing properties for `filename` and `timestamp`. `filename` maps to
the archive URL for the item, and as above, `timestamp` indicates the
date when the item was last updated.

For example, the following query seeks information about an item from
the District Court of the District of Columbia (`dcd`) that is located
in PACER at `https://ecf.dcd.uscourts.gov/doc1/04501846693`:

    curl -v --data "json={\"court\":\"dcd\", \"urls\":[\"https://ecf.dcd.uscourts.gov/doc1/04501846693\"]}" "$BASE_URL/recap/query/"

Which returns:

    {
      "https://ecf.dcd.uscourts.gov/doc1/04501846693": {
        "timestamp": "07/30/09",
        "filename": "http://www.archive.org/download/gov.uscourts.dcd.125528/gov.uscourts.dcd.125528.1.0.pdf"
      }
    }

If an item is not in the RECAP archive, it will not be returned in the
response. If no items are found, an empty JSON object is returned.

Uploading Items
---------------

Some background notes about uploads are important to mention at the
outset:

1.  Be very careful with the items that you upload. You are contributing
    to a public land trust and the quality of the data you upload should
    be absolutely perfect since it will be preserved indefinitely. Any
    errors in your uploads will be challenging to fix and will be
    propagated to a wide variety of organizations.
2.  Items in PACER can be sealed. If an item is sealed it should never
    be uploaded to RECAP. For our approach to this problem, please see
    the [details on our announcement supporting
    it]({filename}/recap-extension-0-8-beta-released.md).
    If you discover that you have uploaded a sealed document, please get
    in touch immediately.

### `/recap/upload/`

Depending on how it is called, this endpoint can be used to upload HTML
dockets, HTML History Reports, PDF documents, and Document Selection
Menu pages. Before any PDFs or Document Selection Menus can be uploaded,
the docket page *must* be uploaded first so that the correct meta data
can be associated.

Uploading these items can be done by sending a multipart POST request
containing the following data and parameters:

-   `data`: The PDF or HTML file data you wish to upload.
-   `court`: The court where the item is located.
-   `casenum`: For dockets only, the case number for the item, as
    described above.
-   `mimetype`: The mimetype for the item, either `application/pdf` or
    `text/html`.
-   `url`: For PDFs only, the URL on PACER for the item.

The absence of required parameters will result in a HTTP 400 error
explaining the missing or erroneous field (Bad Request). If the upload
is successful, a HTTP 200 status will be returned with the data for the
item you uploaded.

Let's walk through an example for uploading an HTML docket since those
must be uploaded before any dependent objects can be. The following will
create a multipart POST that has a field named `data` that uploads a
file from disk named `docket.html` and that uses the uploaded filename
of `DktRpt.html` (this will always be the value for dockets). The
correct contents of `docket.html` can be found in JavaScript using
`document.documentElement.innerHTML`, which returns everything just
inside the `HTML` tags, excluding the tags themselves.

The `court` and `casenum` parameters are set as above, and the
`mimetype` is set to `text/html`.

Document History Reports are submitted in an identical way, but with the
change that their file name is instead given as `HistDocQry.html`.

    curl -v --form "data=@docket.html;filename=DktRpt.html" --form court=dcd --form casenum=125528 --form mimetype=text/html $BASE_URL/recap/upload/

This will upload the docket to RECAP and will return a JSON object such
as:

    {
      "cases": {
        "125528": {
          "officialcasenum": "1:07-cv-00876"
        }
      },
      "documents": {
        "04501846830": {
          "casenum": "125528",
          "docnum": "1",
          "subdocnum": 5
        },
        "04501846693": {
          "timestamp": "07\/30\/09",
          "casenum": "125528",
          "docnum": "1",
          "subdocnum": 0,
          "filename": "http:\/\/www.archive.org\/download\/gov.uscourts.dcd.125528\/gov.uscourts.dcd.125528.1.0.pdf"
        },

    ...MORE ITEMS HERE...

      },
      "message": "DktRpt successfully parsed."
    }

Uploading a PDF is completed in a similar fashion. In the following we
upload a file that was located on PACER at:

    https://ecf.dcd.uscourts.gov/doc1/04511846991

From the URL we create the `filename` attribute by extracting the
numbers from the URL and adding `.pdf` to create a value of
`04511846991.pdf`. The `url` parameter is the HTTP path for the item
(everything after the
[gTLD](https://en.wikipedia.org/wiki/Generic_top-level_domain)).
Finally, `mimetype` is set to `application/pdf`, and you'll note that
we've omitted the `casenum` parameter:

    curl -v --form "data=@doc.pdf;filename=04511846991.pdf" --form court=dcd --form url=/doc1/04511846991 --form mimetype=application/pdf $BASE_URL/recap/upload/

This will upload a PDF to RECAP, and if successful will return a message
like the following:

    {"message": "pdf uploaded."}

If you get a response that says, `upload: doc1 ignored.`, that means the
docket has not been uploaded for the PDF you are pushing. To fix this,
upload the docket page as above before attempting to upload a PDF.

Finally, Document Selection Menu pages can be uploaded. These are the
pages that you see after you select an item on a docket, when it allows
you to select which documents and attachments you wish to download, for
example:

[
![PACER Document Selection
Menu]({filename}/images/recap/recap.png){.alignnone
.size-medium width="420" height="307"}
]({filename}/images/recap/recap.png)

Although these pages are free of cost on PACER, uploading them is useful
so that we can build the most complete archive possible.

Again, uploading these pages is similar to the examples above. In the
following we upload the Document Selection Menu located on PACER at:

    https://ecf.dcd.uscourts.gov/doc1/04501846693

The parameters we use are:

-   `data`: Again, this contains a reference to an HTML file on disk
    that contains the `document.documentElement.innerHTML` for the page.
-   `filename`: The filename in ths case is the path of the Document
    Selection Menu.
-   `court`: The court where the docket is located.
-   `mimetype`: Again, `text/html`.

<!-- -->

    curl -v --form "data=@attachment-menu.html;filename=/doc1/04501846693" --form court=dcd --form mimetype=text/html $BASE_URL/recap/upload/

The response to this query is:

    {"cases": {"125528": {"officialcasenum": ""}},
      "documents": {
        "04501846830": {
          "casenum": "125528",
          "docnum": "1",
          "subdocnum": 5
        },
        "04501846693": {
          "timestamp": "07\/30\/09",
          "casenum": "125528",
          "docnum": "1",
          "subdocnum": 0,
          "filename": "http:\/\/www.archive.org\/download\/gov.uscourts.dcd.125528\/gov.uscourts.dcd.125528.1.0.pdf"
        },

    ...MORE ITEMS HERE...

      },
      "message": "doc1 successfully parsed."
    }

Support & Feedback
------------------

Support is available while implementing to address questions that may
come up and to provide feedback for the API or this documentation.
Please get in touch if we can be of assistance or if you have ideas to
share.
