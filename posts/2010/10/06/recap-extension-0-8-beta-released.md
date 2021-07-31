---
title: "RECAP Extension 0.8 Beta Released"
date: "2010-10-06 08:12"
tags: RECAP
---

We are proud to announce beta version
0.8 of RECAP.

This release of RECAP fixes an issue introduced by the newest version of
PACER, which has been deployed to several district courts. We'd like to
thank the users that brought this issue to our attention and also
encourage all RECAP users to [contact us](mailto:info@free.law)
if you notice any irregularities in the future. Each district court
operates their own version of PACER, so there are often small
differences in code which can affect the way that RECAP operates.

In addition, we've added a feature that will allow CM/ECF users to more
conveniently contribute documents to the RECAP archive. A substantial
number of our users are attorneys who have a separate "ECF" login as
well as a standard PACER account. Many of these users find it easy to
download and pay for PACER documents while logged into the ECF system,
but previous versions of RECAP would not upload these documents to the
shared archive. Version 0.8 changes this behavior, allowing ECF users to
contribute these documents to the RECAP archive.

When we released RECAP [over a year
ago]({filename}/welcome.md), we intentionally
disabled the extension when it detected an "ECF" login. We did this
because we did not have experience with the non-public ECF system and we
wanted to be completely certain that RECAP did not inadvertently upload
private information. After spending a considerable time since then
analyzing the ECF system, we believe the changes introduced in this
release will have no impact on the privacy of our users and will not
increase the risk of public disclosure of private information. Version
0.8 of RECAP activates only when an attorney has logged into both ECF
and PACER systems and only on pages that display publicly available
information. Our code is [open source](http://github.com/citp/recap), we
encourage the geeks out there to examine it and to report any potential
issues.

We [remain committed](/recap/faq/#privacy-and-security) to
preventing private information from being disclosed inadvertently and we
encourage users to report issues if inappropriate personal information
is found within the RECAP archive.

If you’re an existing Firefox user, Firefox periodically checks for
updates to extensions and should automatically fetch the new version of
the RECAP extension. Or you can force it to check immediately by
clicking Tools-&gt;Extensions-&gt;Find Updates (or, depending on your
Firefox version, Tools-&gt;Add-Ons-&gt;Find Updates). As always, please
[let us know](mailto:info@free.law) if you find any bugs.
