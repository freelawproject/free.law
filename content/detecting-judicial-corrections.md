Title: Detecting Judicial Corrections
Date: 2014-05-03 13:41
Author: Michael Lissner
Tags: Data Wrangling, Design
Slug: detecting-judicial-corrections
Status: published

One of the goals of the CourtListener platform is to enable others to
analyze judicial opinions. To that end we provide all of our data as
bulk downloads and try to archive any opinion that a court publishes.

On some occasions, this results in a slightly confusing search result
like the following:

![double
result]({static}/images/double-result.png)](https://www.courtlistener.com/?q=epa+v+eme+homer&stat_Precedential=on&order_by=dateFiled+desc&court=scotus)

We realize having an opinion in the system two times can be a bit
confusing, but the reason this happens is because courts will sometimes
make corrections to a slip opinion after its initial release. Sometimes
the new version of the slip opinion will make note of the change, other
times the court makes this change silently, perhaps hoping that the
public either doesn't notice or doesn't care.

Usually these are minor corrections, but occasionally not. For example,
in the case above, Justice Scalia made a mistake in his dissent,
completely flipping the position of the EPA in the case he references.
Such significant alterations are a rare occurrence and it has been
widely [highlighted in the
press](http://talkingpointsmemo.com/dc/antonin-scalia-error-supreme-court-dissent-epa).
Many systems will silently remove opinions that have such errors, but we
have found that even studying the corrections made by courts is
something that interests some academic researchers.

For example, Peter W. Martin, the Jane M.G. Foster Professor of Law,
Emeritus, former dean of Cornell Law School, and co-founder of Cornell's
Legal Information Institute (LII), has [written on this
topic](http://citeblog.access-to-law.com/?p=107) more than once and
[noted CourtListener's usefulness for detecting these sorts of judicial
corrections](http://citeblog.access-to-law.com/?p=157). Based on his
analysis of this practice he also provides suggestions to the courts on
how to handle revisions in a world of digital publication.

As our platform progresses, a goal is to begin automatically identifying
items such as the above and presenting the differences intelligently.
While this sort of detail is often inconsequential, both this recent
instance and some that Professor Martin describes show that at times
they can be notable and even newsworthy, changing the meaning of a
portion of the court's opinion completely.

