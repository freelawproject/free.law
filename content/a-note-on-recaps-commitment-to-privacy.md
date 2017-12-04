Title: A Note on RECAP's Commitment to Privacy
Date: 2009-08-20 15:07
Tags: Announcements, RECAP, Privacy
Slug: a-note-on-recaps-commitment-to-privacy
Status: published

We've gotten our [first official reaction from the
judiciary](http://www.nmcourt.fed.us/usbc/node/301), in the form of a
statement on the New Mexico Bankruptcy court's website. It contains two
important points about the PACER terms of use, and a misleading
statement about privacy that we want to correct.

First, the good news: the court acknowledges the point we've [made
before]({filename}/pages/recap/faq.md#public-records): use of RECAP is
consistent with the law and the PACER terms of use. The only potential
exception is if you've received a fee waiver for PACER. In that case,
use of RECAP could violate the [terms of the fee
waiver](http://pacer.uscourts.gov/documents/epa_feesched.pdf), which
reads: "Any transfer of data obtained as the result of a fee exemption
is prohibited unless expressly authorized by the court." We're not
lawyers, so we don't know if the court's interpretation is correct, but
we encourage our users to honor the terms of the fee waiver.

Now, an important correction. The statement raises the concern that
RECAP could compromise sealed or private documents that attorneys access
via the CM/ECF, the system attorneys use for electronic filing and
retrieval of documents in pending cases. Protecting privacy is our top
priority, and we specifically designed RECAP to safeguard the privacy of
CM/ECF documents. As we [describe
in our privacy FAQ]({filename}/pages/recap/faq.md#does-recap-upload-files-if-i-am-an-attorney-using-ecf),
RECAP is carefully designed not to upload documents from the CM/ECF
system. When a user logs into the CM/ECF system, a cookie is set on the
user's browser that's different from the cookie that's set when a user
is logged into the public PACER system. RECAP monitors for this cookie
and automatically deactivates itself whenever the user is logged into
CM/ECF. We tested this thoroughly, with some CM/ECF users, before we
released the public beta.

We're confident that RECAP maintains the security model set up by the
courts, and that it will never upload documents while a user is logged
into CM/ECF. The code is [open
source]({filename}/pages/recap/faq.md#is-recap-free-software), so anyone with
concerns is welcome to inspect it for themselves. We'd like to work with
the judiciary in the coming weeks to ensure they understand how RECAP
protects privacy and security, and to incorporate any further
enhancements they might suggest. In the meantime, users can continue
using RECAP with the knowledge that it's designed with privacy as our
top priority.

**Update**: A final reason users should be comfortable with using RECAP
is that the extension's operation is extremely transparent. The little
"R" icon in the lower-right-hand corner of every browser window turns
blue when RECAP is enabled (which should only happen when you're logged
into PACER) and grey when it's disabled (which should happen when you're
logged into CM/ECF). We don't think you'll ever see a blue icon when
you're browsing CM/ECF, but if you do, you should immediately disable
recap and [let us know]({filename}/pages/contact.md) about it so we can
investigate the problem. In addition, RECAP notifies you about every
document it uploads (unless you choose to turn this feature off). Again,
you should never see an upload notification while you're on an CM/ECF
page, but if you do you can contact us and we'll delete that document
from our database. So you don't have to take our word for it when we say
RECAP won't upload CM/ECF documents, you can monitor what it's doing and
verify for yourself.
