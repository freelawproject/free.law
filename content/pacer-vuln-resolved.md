Title: More Details on the PACER Vulnerability We Shared with the Administrative Office of the Courts
Author: mlissner
Date: 2017-06-15
Tags: Security, PACER, ECF, Vulnerability, Administrative Office of the Courts
Status: Draft

<div class="right-image">
    <img src="{filename}/images/pacer-logo-300w.png"
         alt="PACER Logo"
         class="img-responsive border">
</div>

PACER/ECF is a system of nearly 200 websites that is run by the Administrative Office of the Courts (AO) for the management of federal court documents. The main function of PACER/ECF is for lawyers and the public to upload and download court documents such as briefs, memos, orders, and opinions. 

In February [we reported][vuln] that [we disclosed][poc] a major vulnerability in PACER/ECF to the AO.[^1] We are pleased to share that we believe this issue is now properly addressed, and that we are now able to report more details about it. Throughout the process of researching, disclosing, and resolving this vulnerability, the AO has been prompt and professional, something that we greatly appreciate given the considerable constraints they are facing. However, despite their skill in dealing with this issue, after discovering it we have lingering concerns about the security of PACER/ECF on the whole.

In this post, we discuss three topics. First, we outline what the vulnerability was and how to identify if you were a victim of it. Second, we discuss why the vulnerability is troubling for a system of PACER/ECF's size and importance. Third, we offer concrete actions that the AO can take to prevent this kind of problem in the future.


### The Vulnerability and Possible Exploits

The vulnerability itself is a [Cross Site Request Forgery (CSRF)][owasp-csrf]. This type of vulnerability makes it possible for one website to take actions using an account on another website. For example, lawyers and journalists might be frequent users of a (fictional) website, "legal-news.com," and also of the PACER/ECF system. Before this vulnerability was fixed, it would have been possible for underhanded operators of "legal-news.com" to make purchases using the PACER/ECF account of any of their visitors who happened to also be logged into PACER/ECF. 

Purchasing documents using somebody else's account is one possibility. We also speculate, but were unable to prove, that this vulnerability could be used to file documents on behalf of an attorney without their knowledge or consent.

For the users that were attacked, their quarterly PACER/ECF bill would go up, but neither the AO nor the owner of the account would realize what was happening. Eventually, victims might discover the issue when their PACER/ECF bill arrived and might call the PACER/ECF Service Center to dispute unknown charges or unknown filings. But because this type of attack comes from a user's computer, not from any centralized location, it would be nearly impossible for anybody to prove they were a victim or to have any suspicions. Not even changing their password would help if they continued to visit "legal-news.com" while logged into PACER.  

Although we believe this vulnerability has likely existed in the PACER/ECF website since the AO [implemented per-page fees nearly two decades ago][chron] — CSRF protections would likely be difficult to accidentally remove — we have no knowledge of this vulnerability being exploited. We highlight the scenarios above so that PACER/ECF users can identify if they have been a victim of this vulnerability and take action if so.

<div class="left-image">
    <a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)">
        <img src="{filename}/images/csrf-table.png"
             alt="CSRF overview from OWASP"
             class="img-responsive border">
    </a>
    <p class="caption">Cross site request forgery overview from the Open Web Application Security Project (OWASP).</p>
</div>
<div class="clearfix"></div>


### Why This is Bad

The PACER/ECF system has [an annual revenue of around $150M/year][revenue], and [has around 1.6M registered users][user-stats]. At this scale, this type of vulnerability is extremely troubling. Cross Site Request Forgeries are ranked by [the Open Web Application Security Project (OWASP)][owasp] as the [eighth most critical security risk in 2017 (PDF)][owasp-top-10]. These types of vulnerabilities are critical because they are easily found by hackers and can have significant impacts on users. Cross site request forgeries are not novel and do not require sophisticated hackers or researchers to discover.

Nearly all tools for making websites, such as Django, Spring, and AngularJS include protection for cross site request forgeries out of the box. PACER likely predates the creation of these tools and does not appear to use them.

We are pleased that the Administrative Office of the Courts resolved this issue, but a website of PACER/ECF's scale and importance needs constant attention to security issues, which continually emerge in the modern web environment.


### What Can the Administrative Office of the Courts Do?

When vulnerabilities of this age and severity are brought to light, it is common to look in your toolbox for a simple technical solution that can be brought to bear on the problem at hand. This reaction makes sense and is part of the solution, but this reaction is like plugging a hole in a failing dam. You can plug the hole by fixing the current vulnerability, but more holes will soon appear, and slowly but surely, the dam will break. To this point, we are already aware of another potential vulnerability in the PACER/ECF system that we are investigating. 

For the people at the AO, who have been diligent in working to fix this problem, the only solution to future problems is to build and maintain an organizational culture that values and invests in security. PACER/ECF is a website that serves vital legal information to millions of users and which has significant annual revenue. Issues like this must be avoided and investment needs to be made from the top down to prevent future vulnerabilities.

Beyond building a culture that values security, we identify several concrete actions the AO could take to improve the security of PACER/ECF:
 
1. **Centralize and standardize PACER/ECF.** A challenge the AO faces is that PACER/ECF is not a single website, but is instead about 200 websites that are managed and deployed by court staff across the country. Thus, when a security issue such as this one is resolved, it can still take weeks for the fix to be applied at all the courts. In this instance, we reported the vulnerability to the AO, but in the future bad actors might take a different, more nefarious approach. If they do, the AO would be hard-pressed to react in a timely manner. 

    Another issue that is caused by the distributed nature of PACER/ECF is that the security of nearly every installation is beholden to a different person at a different court. This means that hundreds of people are responsible for the security of their installation of PACER/ECF, each with their own priorities, skills, budgets, and time constraints. One example of how this creates problems is by looking at the HTTPS security of the various PACER/ECF websites. We recently reviewed these configurations and discovered numerous problems. Of the approximately 200 PACER/ECF websites, none had a strong configuration and many had poor configurations with basic errors, [receiving an "F" grade from SSLLabs][cand], an organization that reviews HTTPS configurations.
      
    If the PACER website were centralized and standardized, such issues would be minimized if not resolved, and significant cost savings could be achieved.

1. **Begin using a well-known web development toolkit or framework.** As mentioned above, nearly all web frameworks have protections for this and other types of vulnerability built in. Failure to use such a toolkit means that the AO is on its own when it comes to protecting against vulnerabilities, a prospect that is at once daunting, difficult, and expensive. So long as PACER/ECF continues to have its own from-scratch solutions, we can expect this kind of vulnerability to continue arising.

1. **Hire a security consulting firm to do regular security audits.** The most basic audit from a third-party consulting firm would have identified this and possibly other vulnerabilities. As a security culture is grown inside the organization, investing in outside consultants can be a good way to identify and resolve additional risks.

1. **Establish a vulnerability disclosure policy and bug bounty program.** Vulnerability disclosure policies are a common and straightforward way to provide guidance to researchers that identify problems with websites. Among other things, such policies describe who to contact about an issue and how the issue will be handled. Once adopted, this policy should be widely shared by the AO.

    In addition to a disclosure policy, the AO should also implement a bug bounty program. Bug bounty programs provide financial rewards to security researchers that properly disclose vulnerabilities, and set up boundaries for the kinds of security research that are acceptable. Bug bounties are a tested means of building security communities in the private sector, with programs offered by numerous organizations such as Google, Facebook, Yahoo!, and Microsoft. In the public sector, they are gaining steam too, with recent offerings from the [Pentagon][bb-p], the [Army][bb-a], and the [GSA][bb-gsa]. These bug bounty programs are a common way to motivate the public to come forward with vulnerabilities and to fairly compensate them for any that they discover.[^2]

    PACER/ECF is a system on which the integrity of our justice system depends. As the operator of PACER/ECF, the AO should develop a disclosure policy and a bug bounty program. In doing so, the AO will join private and public organizations in providing a clear and fair way to research and report vulnerabilities.

1. **Consider making content freely accessible without logging in.** The PACER/ECF system allows opinions and orders to be downloaded for free, and charges for any other content that a user downloads. For any content that is already freely available, the AO should stop requiring users to log in to download it. This change would reduce the scope of any future vulnerabilities while furthering the stated mission of PACER/ECF (to provide Public Access to Court Electronic Records).

    For the content that is not currently freely available, the AO should consider making it free. We regularly advocate for the removal of all fees from PACER/ECF, but to the extent the AO can immediately remove fees in order to protect users, it should do so. A simple example of such content are cases that have ended — what if after a period of time such cases were freely available without logging in? Are there other ways the AO can reduce their risk profile by making content free?

We make these suggestions and are providing details about this vulnerability while recognizing the constraints and challenges that the AO is facing. We hope that this vulnerability will serve as a wake up call for the organization. PACER/ECF is a website used by millions of people that deserve to have a safe environment to do their work. For these people, using PACER/ECF is a basic requirement of their job or of accessing the judicial system. The concrete steps we have listed above would help the AO to provide a secure system and to move towards a security-oriented culture.


[^1]: If you are interested in the proof of concept that we shared with the AO, which includes the timeline for the fix and more details than above, you can [find it here][poc]. We are happy to answer any other questions that arise with regards to this vulnerability, and will be updating this post as necessary.

[^2]: Researching and disclosing this vulnerability, for example, has taken dozens of hours that would otherwise go towards our core mission.


[user-stats]: {filename}/pdf/179-594-1-PB.pdf
[owasp-csrf]: https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
[owasp]: https://www.owasp.org/
[owasp-top-10]: https://github.com/OWASP/Top10/raw/master/2017/OWASP%20Top%2010%20-%202017%20RC1-English.pdf
[poc]: {filename}/pages/pacer-vulnerability-poc.md
[vuln]: {filename}/pacer-is-vulnerable.md
[revenue]: {filename}/pacer-revenue.md
[bb-p]: https://www.defense.gov/News/News-Releases/News-Release-View/Article/802929/defense-secretary-ash-carter-releases-hack-the-pentagon-results
[bb-a]: https://www.army.mil/article/178473/army_secretary_issues_challenge_with_hack_the_army_program
[bb-gsa]: https://18f.gsa.gov/2017/05/11/the-next-steps-towards-bug-bounty-program-for-technology-transformation-service/
[chron]: {filename}/pacer-fee-history.md
[cand]: https://www.ssllabs.com/ssltest/analyze.html?d=ecf.cand.uscourts.gov
