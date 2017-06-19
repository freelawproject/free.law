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

XXX Add a description of PACER here to hook the uninformed?

In February we [posted on our blog][vuln] that we discovered a major vulnerability in the PACER website which we disclosed to the Administrative Office of the Courts (AO), the government organization that operates the PACER website.[^1] We are pleased to share that we believe this vulnerability has been addressed and we are pleased to say the AO was prompt and professional in resolving the issue, which we especially appreciate given the constraints we know the AO is under. However, as we researched this issue, we were confronted with the poor state of security in the PACER system, which we discuss below. 

In this post, we briefly highlight three topics. First, we outline what the vulnerability was and how to identify if you were a victim of it. Second, we discuss why the vulnerability is so troubling for a website of PACER's size and importance. Third, we offer concrete actions that the AO can take to prevent this kind of problem in the future.


### The Vulnerability and Possible Exploits

The vulnerability itself is a [Cross Site Request Forgery (CSRF)][owasp-csrf]. This type of vulnerability makes it possible for one website to take actions using an account on another website. For example, lawyers and journalists might be frequent users of a (fictional) website, 'legal-info.com', and also of the PACER system. Before this vulnerability was fixed, it would have been technically possible (and rather easy) for the underhanded operators of “legal-info.com” to purchase documents using the accounts of any of their own visitors who happened to also be logged in to PACER accounts. For the users that were attacked, their quarterly PACER bill would go up, but neither the AO nor the owner of the account would know what was going on. Victims might discover the issue when their PACER bill arrived and might call into the PACER Service Center to dispute unknown charges on their bill. But because this type of attack comes directly from a user's computer, not from any centralized location, it is nearly untraceable by PACER users or the AO. 

Purchasing documents from PACER using such an attack is one possibility. We also speculate, but were unable to prove, that this vulnerability could be used to file documents on behalf of another user without their knowledge or consent.

Although we believe this vulnerability has likely existed in the PACER website since the AO [implemented per-page fees nearly two decades ago][chron] — CSRF protections would likely be difficult to accidentally remove — we have no knowledge of this vulnerability being exploited. We highlight the scenarios above so that PACER users can identify if they have been a victim of this vulnerability and take action if so.

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

The PACER/ECF system has [an annual revenue of around $150M/year][revenue], and [has around 1.6M registered users][user-stats]. At this scale, this type of vulnerability is extremely troubling. Cross Site Request Forgeries are ranked by [the Open Web Application Security Project (OWASP)][owasp] as the [eighth most critical security risk in 2017 (PDF)][owasp-top-10]. These types of vulnerabilities are extremely critical because they are easily found by hackers and can have significant impacts on users, as mentioned above. Cross site request forgeries are not novel and do not require sophisticated hackers or researchers to discover.

Nearly all tools for making websites, such as Django, Spring, and AngularJS include protection for cross site request forgeries out of the box. PACER likely predates the creation of these tools and does not appear to use them.

We are pleased that the Administrative Office of the Courts resolved this issue, but a website of PACER's scale and importance needs constant attention to security issues, which continually emerge in the modern web environment.


### What Can the Administrative Office of the Courts Do?

When vulnerabilities of this age and severity are brought to light, it is common to look in your toolbox for a simple technical solution that can be brought to bear on the problem at hand. This reaction makes sense and is part of the solution, but this reaction is like plugging a hole in a deteriorating dam. You can plug the hole by fixing the current vulnerability, but more holes will soon appear, and slowly but surely, the dam is going to break. To this point, we are already aware of another potential vulnerability in the PACER/ECF system that we are investigating. 

For the people at the AO, who have been diligent in working to fix this problem, the only solution to future problems is to build and maintain a culture that values and invests in security. PACER is a website that serves vital legal information to millions of users and which has significant annual revenue. Issues like this must be avoided and investment needs to be made from the top down to prevent future vulnerabilities.

Beyond building a culture that values security, there are concrete actions the Administrative Office of the Courts could take to improve the security of PACER:
 
1. **Centralize and standardize PACER/ECF.** A challenge the AO currently faces is that PACER is not a single website, but is instead about 200 websites that are managed and deployed by court staff across the country. Thus, when a security issue such as this one is discovered and resolved, it can still take weeks for it to be rolled out. In this instance, we reported the vulnerability to the AO, but in the future bad actors might take a different, more nefarious approach. If they do, the AO would be hard-pressed to react in a timely manner. 

    Another issue that is caused by the distributed nature of PACER is that the security of nearly every installation is beholden to a different person at a different court. This means that hundreds of people are responsible for the security of their installation of PACER/ECF, each with their own priorities, skills, budgets, and time constraints. One example of how this creates problems is by looking at the HTTPS security of the various PACER websites. We recently reviewed these configurations and discovered numerous problems. Of the approximately 200 PACER/ECF websites, none had a strong configuration and many had poor configurations with basic errors.
      
    If the PACER website were centralized and standardized, such issues would be greatly minimized if not resolved.

1. **Begin using a well-known web development toolkit or framework.** As mentioned above, nearly all web frameworks have protections for this and other types of vulnerability built in. Failure to use such a toolkit means that the AO is on its own when it comes to protecting against vulnerabilities, a prospect that is at once daunting, difficult, and expensive. So long as PACER continues to have its own from-scratch solutions, we can expect this kind of vulnerability to continue arising.

1. **Hire a security consulting firm to do regular security audits.** The most basic audit from a third-party consulting firm would have identified this and possibly other vulnerabilities. As a security culture is grown inside the organization, investing in outside consultants can be a good way to identify additional risks. 

1. **Establish a vulnerability disclosure policy and bug bounty program.** 

XXX Add text about disclosure policy here and weave it into the bug bounty paras. 

Bug bounty programs provide financial rewards to security researchers that properly disclose vulnerabilities, and set up boundaries for the kinds of security research that are acceptable. Bug bounties are a tested means of building security communities in the private sector, with programs are offered by numerous organizations such as Google, Facebook, Yahoo!, and Microsoft. In the public sector, they are gaining steam as well, with recent offerings from the [Pentagon][bb-p], the [Army][bb-a], and the [GSA][bb-gsa]. These bug bounty programs are a common way to motivate the public to come forward with vulnerabilities, and to fairly pay them for any that they discover.[^2]

    PACER is a system on which the integrity of our system of justice depends. As the operator of PACER, the AO should join these private and public groups in offering bug bounties for properly disclosed security vulnerabilities. 

1. **Consider making content freely accessible without logging in.** Currently the PACER system allows opinions to be downloaded for free, and charges for any other content that a user downloads. For such content that is already freely available on PACER, the AO should stop requiring users to be logged in to download it. This change would reduce the scope of any future vulnerabilities while furthering the stated mission of PACER (to provide Public Access to Court Electronic Records). 

    For the content that is not freely available at this time, the AO should consider making it free. We regularly advocate for the removal of all fees from PACER, but to the extent the AO can remove fees in order to protect users, it should consider doing so. A simple example of such content are cases that have ended — what if after a period of time such cases were freely available in their entirety without logging in? Are there other ways the AO can reduce their risk profile by making content free?

We make these suggestions and are providing details about this vulnerability while recognizing the constraints that the AO is facing. We hope that this can serve as a wake up call for the organization. PACER/ECF is a website used by millions of people that deserve to have a safe environment to do their work. For these people, using PACER is a basic requirement of their job or of accessing the judicial system. The concrete steps we have listed above would help the AO to provide a secure system and to move towards a security-oriented culture.


[^1]: If you are interested in the proof of concept that we shared with the AO, which includes the timeline for the fix and more details than above, you can [find it here][poc]. We are happy to answer any other questions that arise with regards to this vulnerability, and will be updating this post as necessary.

[^2]: Researching and disclosing this vulnerability, for example, has taken dozens of hours that would otherwise go towards our core mission. We do this work out of a sense of duty to our own users, many of whom rely on PACER.


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
