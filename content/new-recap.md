Title: The Next Version of RECAP is Now Live
Author: mlissner
Date: 2017-11-13
Tags: recap, recap archive, internet archive, pacer
       

<div class="row">
    <div class="col-xs-12 col-sm-7 col-md-8 col-lg-9">
        <p>The original RECAP extension for Firefox was launched eight years ago. Today we launch an all new version. Since the original launch in 2009, we've kept the system running smoothly, <a href="https://chrome.google.com/webstore/detail/recap/oiillickanjlaeghobeeknbddaonmjnc">added a Chrome extension</a>, and — with your help — collected and shared information about <a href="https://www.courtlistener.com/recap/">tens of millions of PACER documents</a>.
        </p> 
        <p>Today we're announcing the future of RECAP. If you're an existing Firefox or Chrome user, you should automatically get this update over the next 24 hours. If you're a new user, just learning about RECAP, you can find links for Firefox or Chrome on the right, and you can <a href="https://free.law/recap/">learn more on the RECAP homepage</a>.
        </p>
    </div>
    <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
        <a href="https://chrome.google.com/webstore/detail/recap/oiillickanjlaeghobeeknbddaonmjnc" class="btn btn-primary btn-lg btn-block">Add to Chrome&nbsp;<i class="fa fa-chrome"></i></a>
        <a href="https://addons.mozilla.org/en-US/firefox/addon/recap-195534/" class="btn btn-primary btn-lg btn-block">Add to Firefox&nbsp;<i class="fa fa-firefox"></i></a>
    </div>
</div> 

As this new system rolls out, these are the big changes:

1. As you're using PACER, the extensions will stop providing links to the Internet Archive, and will instead provide links to [CourtListener][cl] and the [RECAP Archive][ra], where dockets and documents are fully text searchable.

1. Links to CourtListener will be available very soon after an upload from PACER is complete — possibly within seconds or minutes. This has been the most-requested enhancement we've heard over the years, and we're really happy to be bringing this today. We think it will make a huge difference to how people use RECAP. No more day-long waits for your uploads! 

1. The current restrictions to uploading very large dockets has been be lifted. For the first time in a very long time, we support the biggest, most important cases without issue. If you've struggled with this issue in the past, rejoice — things are finally better.

1. For the first time ever, we are using the same extension for Chrome, Firefox, Firefox Mobile, Opera, Safari, and even IE Edge. As of today, we've tested our new extension on Opera, Firefox, Firefox Mobile, and Chrome. It works in all those places, and we're looking for help to bring it to IE Edge and Safari. We are currently waiting for approval in the Opera add-on store. Expect that soon.

    Having one codebase for all of these browsers makes a monumental difference in how quickly we can enhance RECAP, but we do need help or financial support to make Safari and IE Edge possible.

That's the good news, but with all of this progress, there are two pieces of bad news:

1. For the time being, federal appellate courts do not work in any browser. This is because as of today, Mozilla, the maker of Firefox, no longer supports our old extension. 

    In order to continue supporting Firefox at all, we had to start over, using the existing Chrome extension as our starting point. The Chrome extension never supported the appellate courts, so unfortunately the Firefox extension no longer does. We know this is a big loss for some of our users, and we plan to fix this soon. 
    
    The good news is that when we do get this working for Firefox, all of the other browsers will get this feature too. We are hopeful we will find technical volunteers that can help us add appellate court support to all of the extensions — all that's needed to help are good JavaScript skills.
    
1. As part of our transition to a new infrastructure, we are changing how often we push PACER data to the Internet Archive. Instead of pushing in realtime, as we've done historically, the new system starting today will upload PACER data once per quarter.

    We know that this change will be difficult for some of our users that are used to the current system, but we are convinced that this change is necessary for RECAP to thrive. Please [let us know][c] if this causes any unforeseen difficulties for you that we might be able to address.
    
    For those that are concerned that this means we might one day close up shop and suddenly take a lot of data offline, do not worry. As of our last board meeting, we have [updated the Free Law Project bylaws][bylaws] to ensure that any data we have at the time we close up shop must be pushed to the Internet Archive or another similar organization.[^1] All federal non-profits are required to have a "dissolution clause" in their bylaws &mdash; Most of those clauses don't involve uploading to the Internet Archive.

It's an exciting time for RECAP. After many years with little change or improvement, we're moving it to a more reliable, robust, and innovative system. We're sloughing off almost a decade of old code and we're moving to a single extension that can support numerous browsers. These changes are going to make RECAP the best it has ever been, and we're thrilled to be sharing it today. If you have comments about the new version or if you find things you want to improve or praise, don't hesitate to get in touch. We're eager [to hear what you think][c].

[^1]: The new section of [the bylaws][bylaws] can be found in §5.3 entitled, "Dedication of Information Assets."


[ra]: https://www.courtlistener.com/recap/
[ff-die-off]: https://blog.mozilla.org/addons/2016/11/23/add-ons-in-2017/
[bylaws]: {filename/pdf/policies/bylaws-amended-2017-11-05.pdf
[c]: {filename}/pages/contact.md
[apis]: https://www.courtlistener.com/api/
[cl]: https://www.courtlistener.com/
