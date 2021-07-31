---
title: "Citation Data Gets Richer"
author: Matt Dahl
date: "2020-03-05"
tags: ["announcements", "citations", "courtlistener"]
excerpt: "We've added many more types of citations to our system."
---

<RightImage imgProps={{
"src": "/images/citation-counts.png",
"alt": "Authorities sidebar with citation counts"
}} height="h-72" width="w-2/5" />

Citation data is a keystone of legal research--both for understanding a
particular judicial decision and for discovering similar ones. However, binary
information about whether one opinion cites another can only tell us so much.

Therefore, today I'm excited to announce that CourtListener is now calculating and making available a much richer metric of inter-opinion connectedness. Today we are introducing citation *depth* to indicate *how many times* every opinion cites another.

This means that in addition to recognizing and recording "full" citation references--e.g., `Bush v. Gore, 531 U.S. 98`--CourtListener is now parsing and counting the following kinds of citations as well:

- Short form citations (e.g., `531 U.S., at 99`)
- Supra citations (e.g., `Bush, supra, at 100`)
- Id. citations (e.g., `Id., at 101`)
- Ibid. citations (i.e., `Ibid.`)

Because these abbreviated citations lack the detailed information contained in a full citation, they can be tricky to count correctly. Thus, this upgrade represents a major advance in CourtListener's citation-detection abilities, and brings us closer to feature parity with commercial legal research tools like LexisNexis and Westlaw.

Unlike those commercial tools, however, CourtListener is fully open-source, and is therefore free for anyone to improve. Right now this feature uses a novel combination of heuristics to intelligently infer the antecedent of each abbreviated citation, but further refinement of this detection process may be possible.

The new citation data is now accessible in several new places:

- **In every opinion page as HTML links.** As before, when CourtListener recognizes any of the above citation types, it will intelligently inject an HTML link to the cited opinion in the appropriate place in the text of the citing opinion.

- **In the top authorities sidebar.** As shown in the image above, you can now see at a glance on an opinion page which authorities the opinion cites most frequently.

- **In the detailed authorities page.** As shown in the image below, when you click through to [the full list of authorities for an opinion][bush-v-gore-authorities], full information about all cited opinions is available.

- **In citation searches.** When you search for [opinions that cite another opinion][citing], the citation depth of each match is displayed within the results.

- **Via download through our Bulk API.** As with much of CourtListener's other data, the citation data can also be downloaded en masse through our [Bulk API][bulk-api].

<div className="text-center v-offset-below-2 v-offset-above-2">
	<img src="/images/authorities-page.png"
	     alt="Detailed authorities page"
	     className="img-responsive border"/>
</div>

Hopefully, this new data will enable further research into the exciting topic of citation networks. What can an opinion's citation history tell us about its future importance? What kinds of citations do justices strategically cite in order to justify their decisions? If you are interested in questions like these, feel free to [get in touch][contact] with me!

[bulk-api]: https://www.courtlistener.com/api/bulk-info/#citation-data
[contact]: https://matthewdahl.me/contact/
[bush-v-gore-authorities]: https://www.courtlistener.com/opinion/118395/bush-v-gore/authorities/
[citing]: https://www.courtlistener.com/?q=cites%3A(118395)