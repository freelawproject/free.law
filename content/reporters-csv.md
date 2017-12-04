Title: New CSV of Reporters of Decisions
Author: Michael Lissner
Date: 2016-05-25
Tags: reporters_db, csv, bulk_data


One of the projects we maintain at Free Law Project is a [database of reporters of judicial decisions][rdb]. This database has been popular among developers, but we've heard that the data was hard to work with.

To fix this, we created [a new CSV of the data that is available now][csv]. It currently has 440 reporters.

For each reporter, we collect the following information:

 - Any series that the reporter has, for example, a 2d or 3d.
 - Any variations that the abbreviation for the reporter may have. For example, *Kentucky Reports* can be cited variously as, "B. Mon.", "Ky.(B.Mon.)", "Mon.", "Mon.B.", or "Monroe, B." We have nearly 1,000 of these so far.
 - The start and end dates for each series of each reporter.
 - The jurisdictions covered by each reporter.

Together, this information is vital for creating citators and for identifying what decision a citation actually refers to.

More information about the database [can be found on its page here][rdb]. We have used this database in production on [CourtListener][cl] for years and we believe the collection of reporters is nearly complete. However, we do need help getting the start and end dates for each reporter series. If you can help with this research project, [get in touch][c].


[rdb]: https://github.com/freelawproject/reporters-db
[csv]: https://github.com/freelawproject/reporters-db/blob/master/reporters.csv
[c]: {filename}pages/contact.md
[cl]: https://www.courtlistener.com
