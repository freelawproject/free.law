Title: Vulnerability Disclosure Policy
Slug: vulnerability-disclosure-policy

<p class="lead">As a provider of legal data and services, Free Law Project takes seriously our responsibility to keep user information and systems safe and secure.</p> 

We want security researchers to feel comfortable reporting vulnerabilities they've discovered. This policy describes **what systems and types of research** are covered under this policy, **how to send us** vulnerability reports, and **how long** we ask security researchers to wait before publicly disclosing vulnerabilities.


### Guidelines

For this policy to apply, we require that you:

* Make every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction or manipulation of data.

* Only use exploits to the extent necessary to confirm a vulnerability. Do not use an exploit to compromise or exfiltrate data, establish command line access and/or persistence, or use the exploit to "pivot" to other systems. Once you've established that a vulnerability exists, or encountered any of the sensitive data outlined below, you must stop your test and notify us immediately.

* Keep confidential any information about discovered vulnerabilities for up to 90 calendar days after you have notified Free Law Project. For details, please review **[Coordinated Disclosure](#coordinated%C2%A0disclosure)**.

### Scope

This policy applies to the following systems:

* [The RECAP Extensions][recap]

* [`courtlistener.com`][cl] and related services such as its API or alerts

* [`Our Data Replication System`][replication]

* [`free.law`](https://free.law)

* Non-public data on public third-party services — Free Law Project utilizes a number of third-party services to support its work model.  While non-public data published publicly on those services is in scope, testing those services is **not** in scope.

**Any services not expressly listed above, such as any connected services, are excluded from scope** and are not authorized for testing. If you aren't sure whether a system or endpoint is in scope or not, contact us at <a href="mailto:&#115;&#101;&#099;&#117;&#114;&#105;&#116;&#121;&#064;&#102;&#114;&#101;&#101;&#046;&#108;&#097;&#119;">&#115;&#101;&#099;&#117;&#114;&#105;&#116;&#121;&#064;&#102;&#114;&#101;&#101;&#046;&#108;&#097;&#119;</a> before starting your research.

Some of these systems may be eligible for [small bounties](#bounty%C2%A0program). 

**The following test types are not authorized as part of this policy:**

* Network denial of service (DoS or DDoS) tests.
* Physical testing (e.g. office access, open doors, tailgating), social engineering (e.g. phishing, vishing), or any other non-technical vulnerability testing.

If you encounter any of the below on our systems while testing within the scope of this policy, **[stop your test and notify us](#reporting-a%C2%A0vulnerability) immediately**:

* Personally identifiable information
* Financial information (e.g. credit card or bank account numbers)
* Proprietary information or trade secrets of companies of any party


### Authorization

When conducting vulnerability research according to this policy, we consider this research to be:

- Authorized in accordance with the Computer Fraud and Abuse Act (CFAA) (and/or similar state laws), and we will not initiate or support legal action against you for accidental, good faith violations of this policy;
- Exempt from the Digital Millennium Copyright Act (DMCA), and we will not bring a claim against you for circumvention of technology controls;
- Exempt from restrictions in our Terms & Conditions that would interfere with conducting security research, and we waive those restrictions on a limited basis for work done under this policy; and
- Lawful, helpful to the overall security of the Internet, and conducted in good faith.

You are expected, as always, to comply with all applicable laws.

If at any time you have concerns or are uncertain whether your security research is consistent with this policy, please submit a report through one of our Official Channels before going any further.


### Reporting a Vulnerability

Please submit vulnerabilities to <a href="mailto:&#115;&#101;&#099;&#117;&#114;&#105;&#116;&#121;&#064;&#102;&#114;&#101;&#101;&#046;&#108;&#097;&#119;">&#115;&#101;&#099;&#117;&#114;&#105;&#116;&#121;&#064;&#102;&#114;&#101;&#101;&#046;&#108;&#097;&#119;</a>. Reports may be submitted anonymously.

Reports should include:

* Description of the location and potential impact of the vulnerability.

* A detailed description of the steps required to reproduce the vulnerability. Proof of concept (POC) scripts, screenshots, and screen captures are all helpful. Please use extreme care to properly label and protect any exploit code.

* Any technical information and related materials we would need to reproduce the issue.

Please keep your vulnerability reports current by sending us any new information as it becomes available.

We may share your vulnerability reports with [US-CERT](https://www.us-cert.gov/ais), as well as any affected vendors or open source projects.


### Coordinated Disclosure

Free Law Project is committed to patching vulnerabilities within 90 days or less, and disclosing the details of those vulnerabilities when patches are published. We believe that public disclosure of vulnerabilities is an essential part of the vulnerability disclosure process, and that one of the best ways to make software better is to enable everyone to learn from each other's mistakes.

At the same time, we believe that disclosure in absence of a readily available patch tends to increase risk rather than reduce it, and so we ask that you refrain from sharing your report with others while we work on our patch. If you believe there are others that should be informed of your report before the patch is available, please let us know so we can make arrangements.

We may want to coordinate an advisory with you to be published simultaneously with the patch, but you are also welcome to self-disclose if you prefer. By default, we prefer to disclose everything, but we will never publish information about you or our communications with you without your permission. In some cases, we may also have some sensitive information that should be redacted, and so please check with us before self-disclosing.


### Bounty Program

Not all reported issues may qualify for a reward. Rewards are awarded at Free Law Project's sole discretion. As a small nonprofit we are unable to afford cash bounties (sorry!), but can offer non-cash rewards, including:

* Public acknowledgement
* Free Law Project gear (stickers, shirts, etc.)
* Complimentary Free Law Project services
* Opportunities to meet with Free Law Project staff
* Complimentary tickets to Free Law Project events

If you would like a particular reward, please let us know when you report the vulnerability. While the reward Free Law Project provides in exchange for disclosing a vulnerability under this policy will be up to the sole discretion of Free Law Project, we will certainly take your request into consideration.

Please note that in some cases we will be unable to provide a physical reward if the shipping cost is prohibitively expensive, or if we have had difficulties shipping to your area before.

Only the first report we receive about a given vulnerability will be rewarded. We cannot send rewards where prohibited by law (i.e. North Korea, Cuba, etc.).


### Policy History

The complete history of this document, including unofficial edits, can be found online in our [repository for this website][flp-online]. The official versions and their notes are noted below.

`2019-07-25` — First version published, pulling heavily from the [18F VDP][18f], the [Electronic Frontier Foundation bounty program][eff], and [disclose.io](https://disclose.io). Thank you for your leadership! 


[recap]: {filename}/pages/recap.md
[cl]: https://www.courtlistener.com/
[replication]: https://www.courtlistener.com/api/replication/
[flp-online]: https://github.com/freelawproject/free.law/
[18f]: https://github.com/18F/vulnerability-disclosure-policy/
[eff]: https://www.eff.org/security

<script src="/js/anchor.min.js"></script>
<script type="text/javascript">
    anchors.options = {
            'visible': 'touch',
            'class': 'anchor',
            'truncate': 40
        };
    document.addEventListener("DOMContentLoaded", function(event) {
        anchors.add();
    });
</script>
