Title: The Next Version of RECAP
Author: mlissner
Date: 2017-09-02
Tags: recap, planning, recap archive, internet archive
Status: Draft


The original RECAP extension for Firefox was launched eight years ago, back in 2009. Since then, we've kept the system running smoothly, [added a Chrome extension][chrome], and collected information about literally [tens of millions of PACER documents][ra]. Today we're announcing the future of RECAP. There are a number of forces driving these changes, and we want to be clear about our plans going forward. Some things will soon break. Other things will improve. On the whole our goal is to make RECAP more reliable, sustainable, and flexible while eliminating some of the problems of the old versions. 

There are three big forces that we're encountering. First, if we do nothing, our Firefox extension, which has continued working almost without change since 2009, will [stop working when Firefox 57 is released on November 14th][ff-die-off]. Second, the software on our server is getting very old. It's difficult to maintain and it has bugs that we struggle to fix. Third, with the [launch of the RECAP Archive][ra] and RECAP APIs, it makes sense to consider a less complex system.

These are the changes you may experience:

1. As you're using PACER, the extensions will stop providing links to the Internet Archive, and will instead provide links to CourtListener. 

1. Links to CourtListener will be available very soon after an upload from PACER is complete — possibly within seconds or minutes. 

1. The current restrictions to uploading very large dockets will be lifted.

1. Appellate courts will stop being supported in the Firefox extension.

1. Internet Archive be updated less frequently, perhaps as infrequently as once per day.

1. We will not be uploading XML or HTML to Internet Archive anymore, and will be asking that people use the CourtListener APIs and website instead.

We recognize that these changes will impact some of our RECAP users, but we're confident that they're necessary for moving forward: 

 - The changes to the Internet Archive are a result of a new architecture that treats the Internet Archive as a backup for PACER data instead of as primary storage. These changes simplify the way RECAP works and make it easier to maintain and improve. We hope that the CourtListener website and APIs will be a viable alternative for those people currently using the Internet Archive HTML and XML files.

 - The change to appellate court support is because we will be using the current Chrome extension as a starting point for a new Firefox extension. Since the current Chrome extension doesn't support the appellate courts, we don't have a way to add that support to Firefox — at least not immediately. We welcome contributions to get this support added back to the extensions. 
 
The good news is that we if we add appellate court support to the new Firefox extension, the Chrome extension will get it too. What's more, once we've launched the combined Firefox and Chrome extension, it should be easy to create extensions for IE Edge, Safari, and even Opera.

Some of these changes are hard, but we think it's an exciting time for RECAP. After many years with little change or improvement, we're moving it to a more reliable, robust, and innovative base. The core goals of RECAP remain the same, to get documents from PACER, and to save people money while using PACER. Some of these changes will require adjustment, but we believe that on the whole we'll be left with a much better system.

 


[chrome]: {filename}/two-recap-grants-awarded-in-memory-of-aaron-swartz.md
[ra]: https://www.courtlistener.com/recap/
[ff-die-off]: https://blog.mozilla.org/addons/2016/11/23/add-ons-in-2017/
