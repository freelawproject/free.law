---
title: "Our Newest Launch: A SCOTUS Data Viz Tool"
author: Michael Lissner
date: "2016-02-22"
tags: ["visualization", "scotus", "scdb", "University of Baltimore"]
---

We here at Free Law Project are happy to announce the launch of our [Supreme Court Citation Network tool][home]. Created in collaboration with the [SCOTUS Mapping Project][smp] at the University of Baltimore, the tool permits users to create citation networks that represent "lines of cases" in Supreme Court doctrine. With the tool, users can also visualize, analyze, and share the networks they create.

<div className="embed-responsive embed-responsive-4by3 scotus-map">
    <iframe className="embed-responsive-item" src="https://www.courtlistener.com/visualizations/scotus-mapper/484/embed/?type=genealogy&xaxis=time&dos=3" frameborder="0" allowfullscreen></iframe>
</div>


Consider the network above. It was created with the tool and embedded directly into this post. Similar to a YouTube video, you can interact with it, hovering on the nodes to see the full case name, or clicking them to open them in a new tab. Of course, you can also [open the visualization in its own page][viz], where you'll find more detail and analysis.

The visualization leverages [Supreme Court Database (Spaeth)](http://scdb.wustl.edu/about.php) to show a surprising fact about the recently departed Justice Scalia: He was a liberal on the Fourth Amendment. The map is anchored by two Scalia opinions in which the supposedly conservative justice sided with an accused marijuana criminal  -- *Kyllo* (protecting weed grower from warrantless thermal imaging search) and *Jardines* (protecting weed grower from warrantless dog sniffing search).

After you've created a visualization, there are a number of ways you can look at it. Above uses the Supreme Court Database for the vertical axis and uses time for the horizonal axis. If we want, we can change both of these. For example, here's the same visualization, except we've changed both axes to maximize the number of nodes that can be seen at one time by spreading them vertically and horizontally. It's also changed to only show 2-degrees of separation between *Kyllo* and *Jardines*, so there are four nodes shown instead of six:

<div className="embed-responsive embed-responsive-4by3 scotus-map">
    <iframe className="embed-responsive-item" src="https://www.courtlistener.com/visualizations/scotus-mapper/484/embed/?type=dos&xaxis=cat&dos=2" frameborder="0" allowfullscreen></iframe>
</div>

Every visualization also has a page on [CourtListener][cl], and if you go to [the page for this visualization][viz], you'll find a list of the cases that it contains including links to the Supreme Court Database, where you can do more research. You'll also find that the author has provided a description of the network explaining what it represents.

A sampling:

> Justice Scalia’s recent passing has sparked a political firestorm. Simultaneously lionized as a hero to conservatives and vilified as an enemy to liberals, Scalia is more complex than our partisan divide allows.

If you want more examples of networks made with the tool, check out the [CourtListener Gallery][gal], review a [Libguides Law Library Page][libg], or check out a this [complete set of citation networks for 2014 Term][complete].


### A Big Thanks

This project has been a real team effort. [Colin Starger][starger] at University of Baltimore provided the idea and got it funded. Jason Aller, a volunteer with Free Law Project, has dedicated innumerable hours and expertise to this project, handling the entirety of the visualization work. Without his help, this project would have never made it this far.

We invite everyone to [try out our new tool][home] and see what kinds of complexity (or simplicity!) they can uncover in Supreme Court networks.

We look forward to hearing your feedback.

[cl]: https://www.courtlistener.com/
[smp]: http://law.ubalt.edu/faculty/scotus-mapping/index.cfm
[home]: https://www.courtlistener.com/visualizations/scotus-mapper/
[viz]: https://www.courtlistener.com/visualizations/scotus-mapper/484/kyllo-2001-to-jardines-2013/
[gal]: https://www.courtlistener.com/visualizations/gallery/
[libg]: http://law.ubalt.libguides.com/map_intro
[complete]: http://home.ubalt.edu/id86mp66/scotusmapper/Homepage_2014Term.html
[starger]: http://law.ubalt.edu/faculty/profiles/starger.cfm
