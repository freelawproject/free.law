Title: A few small API changes
Date: 2013-06-19 14:04
Author: Michael Lissner
Tags: API, Bulk Data, XPath
Slug: a-few-small-api-changes
Status: published

We're updating our code in a number of ways today and that is resulting
in a number of changes to the format of our data dumps. If you use them
in an automated fashion, please note the following changes:

-   dateFiled is now date\_filed
-   precedentialStatus is now precedential\_status
-   docketNumber is now docket\_number
-   westCite is now west\_cite
-   lexisCite is now lexis\_cite

Additionally, a new field, west\_state\_cite, has been added, which will
have any citations to West's *state* reporters.
We've made these changes in preparation of a proper API that will
return XML and JSON. Before we released that API, we needed to clean up
some old field values so they were more consistent. After this point, we
expect better consistency in the fields of our XML.

If this causes any inconvenience or if you need any help with these
changes, please let us know.

