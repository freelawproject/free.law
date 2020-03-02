Title: Citation Data Gets Richer
Author: Matt Dahl
Date: 2020-03-01
Tags: announcements, citations, courtlistener

<div class="right-image">
    <img src="{static}/images/citation-counts.png"
         alt="Authorities sidebar with citation counts"
         class="img-responsive border">
</div>

Citation data is a keystone of legal research--both for understanding a particular judicial decision and for discovering similar ones. However, binary information about whether one opinion cites another can only tell us so much. Therefore, today I'm excited to announce that CourtListener is now calculating and making available a much richer metric of inter-opinion connectedness: Information about citation *depth*, i.e., a counter of *how many times* every opinion cites another.

This means that in addition to recognizing and recording "full" citation references--e.g., `Bush v. Gore, 531 U.S. 98`--CourtListener is now parsing and counting the following kinds of citations as well:

- Short form citations (e.g., `531 U.S., at 99`)
- Supra citations (e.g., `Bush, supra, at 100`)
- Id. citations (e.g., `Id., at 101`)
- Ibid. citations (i.e., `Ibid.`)

Because these abbreviated citations lack the detailed information contained in a full citation, they can be tricky to count correctly. Thus, this upgrade represents a major advance in CourtListener's citation-detection abilities, and comes close to achieving feature parity with commercial legal research tools like LexisNexis and Westlaw. Unlike those commercial tools, however, CourtListener is fully open-source, and is therefore free for anyone to improve. Right now this feature uses a novel combination of heuristics to intelligently infer the antecedent of each abbreviated citation, but further refinement of this detection process may be possible.

The new citation data is accessible in a few places:

- **In every opinion page as HTML links.** As before, when CourtListener recognizes any of the above citation types, it will intelligently inject an HTML link to the cited opinion in the appropriate place in the text of citing opinion.
- **In the top authorities sidebar.** As shown in the image above, you can now see at a glance on an opinion page which authorities the opinion cites most frequently.
- **In the detailed authorities page.** When you click through to the "view all authorities" page, full information about all cited opinions is available.
- **In search with a "cites:(x)" term.** When you search for opinions that cite another opinion, the citation depth of each match is displayed within the results.
- **Via download through our Bulk API.** As with much of CourtListener's other data, the citation data can also be downloaded en masse through our [Bulk API][bulk-api].

I am a Ph.D. student at the University of Notre Dame, and I built this feature in order to enable my own research agenda. I hope it proves useful for others as well--please [contact me][contact] if you are interested in working together on a project using this data!

[bulk-api]: https://www.courtlistener.com/api/bulk-info/#citation-data
[contact]: https://matthewdahl.me