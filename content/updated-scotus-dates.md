Title: Updated Supreme Court Case Dates and The First Release of Early SCOTUS Data in Machine-Readable Form
Date: 2011-05-25 13:41
Author: mlissner
Tags: Announcements, API, Bulk Data, CourtListener, Data Wrangling
Status: published

A few years ago, the Library of Congress [released a PDF][dod] that listed the exact dates that the early Supreme Court Cases were decided. Since the written record only contained the month and year of the decision, this list served as the official record for the cases.

While it was great for the Library of Congress to publish this report, unfortunately they did so in a large PDF rather than a more useful format that could be used by projects such as [CourtListener][cl]. Attempts to contact the Library of Congress were unable to locate the original version of the document, so we converted the PDF into both a CSV and an ODS spreadsheet so that the data can be easily read by a computer. I'm happy to be releasing these files today so that they can be used by others.

The second project we have been working on at Free Law Project was to import this data into our system. Because citations in the file are not always unique, we had to device a heuristic algorithm to link up the data in the CSV with the data in our system. Today, we're happy to share that we did that, updating the dates of 6,083 early Supreme Court Cases.

<div class="text-center form-inline">
<a href="{filename}/csv/date_of_decisions.csv" class="btn btn-primary btn-lg">Download as CSV</a>
<a href="{filename}/ods/date_of_decisions.ods" class="btn btn-primary btn-lg">Download as ODS</a>
</div>

[dod]: {filename}/pdf/dates-of-decisions.pdf
[cl]: https://www.courtlistener.com/
