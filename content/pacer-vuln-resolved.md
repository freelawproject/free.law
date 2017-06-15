Title: More Details on the PACER Vulnerability We Shared with the Administrative Office of the Courts
Author: mlissner
Date: 2017-06-15
Tags: Security, PACER, ECF, Vulnerability, Administrative Office of the Courts
Status: Draft


In February we discovered a major vulnerability in the PACER website and disclosed it to the Administrative Office of the Courts (AO), the government organization that operates the PACER website. We are pleased to share that we believe this vulnerability is now resolved across all PACER websites. The AO was prompt and professional in resolving this issue. However, in disclosing this vulnerability, we were again confronted with the poor security standards and development practices of the PACER system.

The vulnerability itself is known as a [Cross Site Request Forgery (CSRF)][owasp-csrf]. This type of vulnerability makes it possible for one website to take actions using a person's account on another website. For example, we run [CourtListener.com][cl], a website that is often used by lawyers and journalists, many of whom might be logged into PACER. Using this vulnerability, we could purchase documents using the PACER accounts of anybody that visited CourtListener.com while logged into PACER. For the accounts that we attacked, their quarterly PACER bill would go up, but neither the AO nor the owner of the account would know what was going on. Victims would call into the PACER Service Center to complain about errant charges on their bill, but finding the source of the issue would be very difficult, if not impossible. This type of attack comes directly from a user's computer, not from any centralized location, making it nearly untraceable.

Purchasing documents from PACER using such an attack is one possibility. We also speculate that this vulnerability could be used to file documents on behalf of another user without their knowledge.

<div class="left-image">
    <img src="{filename}/images/csrf-table.png"
         alt="CSRF overview from OWASP"
         class="img-responsive border">
    <p class="caption">CSRF overview from OWASP.</p>
</div>
<div class="clearfix"></div>

The PACER/ECF system has an annual revenue of around $150M/year, and [has around 1.6M registered users][user-stats]. At this scale, this type of vulnerability is extremely troubling. Cross Site Request Forgeries are ranked by [The Open Web Application Security Project (OWASP)][owasp] as the [eighth most critical security risk in 2017 (PDF)][owasp-top-10]. These types of vulnerabilities are extremely critical because they are trivially found by hackers and can have significant impacts on users, as mentioned above. Some CSRF vulnerabilities allow passwords to be changed by the attackers, though PACER had adequate protection for this area of their site. 

Most tools for making websites, such as Django, Spring, and AngularJS include protection for cross site request forgeries out of the box. 

We are pleased that the Administrative Office of the Courts resolved this issue, but a website of this scale and importance should never have been vulnerable in the first place. What's worse is that since reporting this issue, we have been informed of another major vulnerability in the PACER/ECF system that we are currently investigating. We will be reporting that issue to the AO soon.
 
If you are interested in the proof of concept that we shared with the AO, which includes the timeline for the fix and more details than above, you can [find it here][poc]. We are happy to answer any other questions that arise with regards to this vulnerability, and will be updating this post with any new information or clarifications.


[cl]: https://www.courtlistener.com
[user-stats]: {filename}/pdf/179-594-1-PB.pdf
[owasp-csrf]: https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
[owasp]: https://www.owasp.org/
[owasp-top-10]: https://github.com/OWASP/Top10/raw/master/2017/OWASP%20Top%2010%20-%202017%20RC1-English.pdf
[poc]: {filename}/pages/pacer-vulnerability-poc.md
