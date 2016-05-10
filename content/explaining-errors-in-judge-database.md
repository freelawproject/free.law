Title: More Detail on Our Judicial Database
Author: mlissner
Date: 2016-05-10
Tags: judge database, judges, api, courtlistener
Status: Draft


We wanted to take a moment to respond to some of the feedback we've recently received from [Robert Ambrogi][bob] of the LawSites blog. He was kind enough to write [a review][r] of our [judicial database][jdb], but in his review he notes a few issues:

1. [Our page for Justice Robert Cordy][jrc] is sparse compared to [the same page Ballotpedia][baller].

1. Scalia's end date was not set for his time on the Supreme Court, and his education data was not correct.

This kind of feedback is really important to us, and it shows that we still have work to do explaining our work so that others can understand it. I thought a brief blog post responding to this feedback would be a good way to explain what we're up to.


## Some Responses

To the first piece of feedback, our response is that we're building a *database*, not a more free-form wiki. Unlike the incredible work Ballotpedia is doing, which allows almost any kind of information about judges and other elected officials, our work is focused on gathering specific facts about judges and appointing officials. This approach has pros and cons, and Robert is fair to point out that our data about this important judge is fairly sparse. We *don't* have all of the narrative and other information that Ballotpedia has, at least, not yet.

On the other hand, one of the advantages of building a database like this is that you can easily have pages like that of [Supreme Court Justice and American President Taft][t]. His page shows not only information about him as a president or Supreme Court justice, but also information about the many appointments he made while president. And, if you click [one of his appointees][app], you can see that they, in turn, were appointed by Taft.

You can also download this data and you can do queries on our API to learn more about different judges or appointors. Like:

 - Give me all judges named Mike that were born in the 1800s, and that served on the Supreme Court.
 - Give me all politicians that were both an appointer and a judge, like Taft.
 - Give me a count of all female Supreme Court justices.

These are things that a narrative-style website simply cannot do.

Of course, a database is always limited to the kinds of information that you set it up to have, and is always limited by the data that it has. We're working to expand both of these areas, adding in the backlog of data that is already out there, but at some point we have to put out a first version of our data. This will get better over time, and we're already close to announcing the next big improvement to this data, linking judges to the opinions they wrote.

The second piece of feedback is good to hear too. Robert is right that we simply did not have Scalia's end date for his position at the Supreme Court. This was a big omission that we should have caught, but as the saying goes, [with more eyeballs, all bugs are shallow][eyes], and thanks to Robert's feedback we corrected this omission.

The other feedback that Robert shared was with regards to Scalia's education information. This one is a bit more complex. According to the [Federal Judiciary Center][fjc], Scalia graduated from Harvard Law School with an LL.B. in 1960. CourtListener, on the other hand, [states that Scalia][scalia]:

> Attended Harvard University and received a Bachelor of Laws (e.g. LL.B) in 1960.

The difference here is whether it's "Harvard Law School" or "Harvard University", and the reason for the difference has to do with [our source data for school information][doe]. The Department of Education keeps a list of post secondary schools, and in this list, Harvard appears as a single university, without Harvard Law School being called out as a separate entity. Without more investigation, it's unclear whether this is Harvard's actual legal designation or just how they report it to the DOE, but for the moment this explains the difference. Other law schools do have separate entities in the DOE's database, so those will have more detailed information in our database.


## In the End

Hopefully, this post helps to explain some of the differences between our [new judicial database][jdb] and other sources of similar information, like Wikipedia and Ballotpedia.

The onus is on us to keep our data up to date and to pull in as much data as we can at the highest resolution possible, but at the same time, it's important to remember that we're in the early days of building a database, with all of it's advantages and disadvantages as compared to a more free-form narrative.

Our hope is that as we add more data to the database, and as more people work on it and with it, it will become a core source of data for academic researchers and legal practitioners. Each will see ways that the database could be more complete, and we will slowly fold in those changes.

Thanks so much to Robert for his support and feedback.


[fjc]: http://www.fjc.gov/servlet/nGetInfo?jid=2108&cid=999&ctype=na&instate=na
[bob]: http://www.lawsitesblog.com/about
[r]: http://www.lawsitesblog.com/2016/05/free-law-project-nationwide-database-judges.html
[jdb]: {filename}/pages/judge_database.md
[baller]: https://ballotpedia.org
[t]: https://www.courtlistener.com/person/26/william-howard-taft/
[app]: https://www.courtlistener.com/person/1990/horace-harmon-lurton/
[eyes]: https://en.wikipedia.org/wiki/Linus%27s_Law
[doe]: https://inventory.data.gov/dataset/032e19b4-5a90-41dc-83ff-6e4cd234f565/resource/38625c3d-5388-4c16-a30f-d105432553a4
[scalia]: https://www.courtlistener.com/person/2852/antonin-scalia/
[jrc]: https://www.courtlistener.com/person/4722/robert-j-cordy/
