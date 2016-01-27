Title: Changes and Plans at CourtListener.com
Date: 2010-11-04 13:29
Author: mlissner
Tags: CourtListener, Web Architecture
Slug: changes-and-plans-at-courtlistener-com
Status: published

A few weeks ago, we made a fairly major change at CourtListener.com to
include ID numbers in all of our case URLs. This change meant that links
that were previously like this:

> http://courtlistener.com/scotus/Wong-v.-Smith/

Are now like this:

> http://courtlistener.com/scotus/**V5o**/wong-v-smith/

Most of the old links should continue to work, but using the new links
should be much faster and more reliable. The major difference between
the two is the ID number, which is encoded as a set of numbers (in this
case *V5o*). This ID corresponds directly with the ID number in our
database, aiding us greatly in serving up cases quickly and accurately.

Around the same time as this change, we added social networking links to
all of our case pages to make them easier to share with friends and
colleagues. These links use our new tiny domain, *http://crt.li/*, and
should thus be ideal for websites like Twitter or Reddit.

In the next few months we will be getting a major new server, and will
be migrating our data to it. This will allow us to serve more data,
and—drum roll please—will allow us to begin serving audio content on the
site. That's right, in the next few months, we will begin getting oral
arguments from the circuit courts, and will be serving it directly to
you on the case pages.

We also have plans to revisit our search interface in order to add date
filtering and query building so look for that soon.

As always, we welcome your feedback and support, so don't hesitate to
get in touch with us if you have any questions or suggestions.

