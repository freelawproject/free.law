Title: A few updates at CourtListener
Date: 2013-01-30 13:57
Author: mlissner
Tags: Announcements, CourtListener, Juriscraper, Roadmap, Search, Technology
Slug: a-few-updates-at-courtlistener
Status: published

It's been quiet around here for a little while, so it's about time I
share what's been going on behind the scenes. As you might imagine, just
because we haven't had a lot of news doesn't mean that we haven't been
busy.

The biggest thing I have to share today is that we've moved our
CourtListener infrastructure to new and bigger hardware. This task has
taken months to complete and involved applying many updates to the code
and infrastructure. For developers, this upgrade comes with a few
changes:

1.  Our default database for CourtListener is now Postgres rather than
    MySQL. This is something that's been planned for a while, but wasn't
    really possible until a big upgrade like this one. The big changes
    that come out of this are non-locking queries for our database
    dumps, and better performance for many of our queries. Since
    Postgres is a transactional, stricter and more featureful database,
    we're convinced that it is a better way forward than MySQL. Oracle
    lately hasn't been a great steward to MySQL, so it was a good time
    to jump ship. As a bonus, Posgres was started in Berkeley, our
    hometown.
2.  We've removed the CourtListener installer from the codebase and are
    instead opting to use a wiki page with lots of detailed
    instructions. The reason for this is to give our developers a
    greater understanding of the code they're running. We found that
    when people used the installer, it sometimes failed partway through.
    When that happened, people were baffled about what went wrong. We're
    hopeful that the new system will allow people to update the wiki as
    needed, and will give them greater insight into how to fix a broken
    installation.
3.  We've fixed some issues with our Celery queue to make it faster and
    more reliable.
4.  We've upgraded our search engine to use Solr 4.0, again improving
    our performance, and also giving us greater flexibility and
    stability moving forward.

In addition to these software changes, on the hardware side, we've gone
from "large server" to "giant honking server." Our new server has 24
cores, 128GB of memory, SSD drives in a mirrored array, and really flies
through what's becoming our increasingly big set of data.

On the Juriscraper side, a new feature we've just rolled out as part of
this upgrade is the addition of three new Federal courts: the U.S. Tax
Court, the Court of International Trade, and the Court of Appeals for
Veteran's Claims. We'll soon be rolling out the historical data for
these courts as well. We've added a new sample\_caller to Juriscaper
that makes it easier to test and integrate the library, and this has
helped us to build and test these new courts.

Finally, as part of our ongoing efforts to work in the open and share
out processes, we've begun using Trello to track and prioritize our
tasks and ideas. You can see and join the CourtListener planning board
here: https://trello.com/b/F3jrqway. At a glance, this board provides
you with a list of the things that we're currently working on in
priority order (top is the highest priority), and gives you a look at
what our backlog looks like ("long" is probably the best description!).
If you're interested in contributing to our process, this is a great
place to get involved.

With these changes, we set the stage for lots of new, great features and
lots more data. We look forward to your feedback.

