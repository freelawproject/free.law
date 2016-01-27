Title: Announcing CourtListener's New Sub-Project: Juriscraper
Date: 2012-02-25 13:51
Author: mlissner
Category: Announcements, Juriscraper
Slug: announcing-courtlisteners-new-sub-project-juriscraper
Status: published

For the past two years at CourtListener we used a mess of code to scrape
the Federal Court system. This worked remarkably well, but we recently
began expanding our coverage and it was clear a rewrite was needed. For
the past several weeks, we've been building a replacement called
Juriscraper that is more reliable, understandable, flexible and
expandable.

Unlike our old scrapers, Juriscraper is a library that anybody can pick
up and use, and which allows your project to easily scrape court
websites. It is currently at version 0.1, which supports all of the
courts on CourtListener, and over the next few weeks we'll be adding
many more courts until we have all of the available courts in the United
States.

We hope that this project will be something that others will use, and
that we can thus centralize our scraping efforts. There are many
organizations that are currently scraping court websites, each with
their own implementations that they build and maintain. This creates lot
of duplicated work, and slows down the maintenance for everybody. **By
finally creating a liberally licensed shared scraper, we hope to bring
everybody under the same scraping roof so we can share our effort.**

If you're interested in using the library, please do! It has a simple
API and is ready for use. Testing has been light so far, but with your
help we hope this project will grow into a mature tool used by many
organizations.

