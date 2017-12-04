Title: Announcements, Updates and the Current Roadmap
Date: 2011-10-28 13:47
Author: Michael Lissner
Tags: Announcements, Bulk Data, Roadmap, Search
Slug: announcements-updates-and-the-current-roadmap
Status: published

Just a quick note today to share some exciting news and updates about
CourtListener.

First, I am elated to announce that the CourtListener project is now
supported in part by a grant from Public.Resource.Org. With this
support, we are now able to develop much more ambitious improvements
to the site that would otherwise not be possible. Over the next few
months, the site should be changing greatly thanks to this support,
and I'd like to take a moment to share both what we've already been
able to do, and the coming changes we have planned.

One feature that we added earlier this week is a single location where
you can download the entire CourtListener corpus. With a single click,
you can download 2.2GB of court cases in XML format. Check out the
information on the dump page for more details about when the dump is
generated, and how you can get it: http://courtlistener.com/dump-info/

The second exciting feature that we've been working on is a platform
change that enables CourtListener to support a much larger corpus. In
the past, we've had difficulty with jobs being performed synchronously
with the court scrapers and the front end. This occasionally meant
delays on the front end, and limited our ability to scrape more and
more courts. As of today, we've migrated to the Celery job manager,
which allows the front end to remain responsive while the backend
crunches away at various tasks. We're planning on creating scrapers
for all of the state courts, so it was important that we be able to do
this outside of the main pipeline.

With this improvement in place, the next big project we're working on
is implementing faceted search. Finally, you'll be able to filter by
words in the case name, by date filed, within certain courts, and in
any other meta data you choose. This is a big task, but you should be
seeing the fruits of this process soon. We already have high-def
mockups for the front end, and now it's just a matter of building it
out.

We're also still working on importing the F.3d. Once our new faceted
search is live, the next big project will be to import all of these
cases.

These are a lot of exciting changes, and we're so excited to be
rolling them out soon! Let us know if you have any questions or
suggestions!

