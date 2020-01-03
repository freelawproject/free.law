Title: Facts about FJC's Integrated Database 
Slug: idb-facts

<div class="right-image">
    <img src="{static}/images/fjc-logo.png"
         alt="FJC Logo"
         class="img-responsive border">
</div>


<p class="lead">This page is where we keep useful information and notes for people that are using the <a href="https://www.fjc.gov/research/idb">Integrated Database</a> provided by the Federal Judicial Center.</p>

This database contains information about every case filed in the PACER system, and is thus a valuable resource for researchers, journalists, and legal startups. There are a few questions that aren't answered by their website, and a few pieces of missing information that are essential for understanding the data. This is the page we wish existed when we began working with this data.


### Where can I find an explanation of the office codes?

The codebook states that this information is in "Guide to Judiciary Policies and Procedures, Volume XI, Appendix A," but that does not appear to be online. We have requested this information and have published it here.

<a href="/xlsx/fjc/integrated-database/office-codes.xlsx"
   class="btn btn-lg btn-primary">Download the office codes</a>


### Is there any additional information about the fields?

Yes! We have a little information about the fields beyond what's in the code book. For example, many of the fields are artificially truncated. This appears to be a problem with the source data that the AO gives to the FJC. 

We have requested the the lengths of the various fields in the civil data as of 1 June 2018, and published it here.

<a href="/xlsx/fjc/integrated-database/cv88on-field-lengths.xlsx"
   class="btn btn-lg btn-primary">Download the civil field info</a>
   
A few weeks later, the the FJC also shared the lengths of the fields in the criminal data (without us even asking!):

<a href="/xlsx/fjc/integrated-database/cr96on-field-lengths.xlsx"
   class="btn btn-lg btn-primary">Download the criminal field info</a>  
 

### How can I link up the IDB with PACER?

Well, you've always got the docket number, and sure enough, PACER provides a free undocumented API for looking up docket numbers and getting their unique PACER ID.

If you're familiar with PACER as a user, this is the API that is used by the website itself when you paste a docket number into the docket report form and press "Find this case."

Behind the scenes, when you do that, it does a query to a URL like:

    
    https://ecf.cand.uscourts.gov/cgi-bin/possible_case_numbers.pl?3:12-cv-3879;number=0.1258953044538912
    
We call this the "possible case numbers API". It will respond with something like:

    <request number='3:12-cv-3879'>
        <case number='3:12-cv-3879' 
              id='257622' 
              title='3:12-cv-03879-VC Technology Properties Limited LLC et al v. Novatel Wireless, Inc. (closed 07/14/2015)' 
              sortable='3:2012-cv-03879-VC'/>
    </request>

A few notes:

1. In this response, the PACER internal ID for the docket is in the `id` field and has a value of `257622`.

1. Some docket numbers, particularly in criminal cases, are ambiguous, in which case there will be several `case` nodes in the returned XML.

1. The possible case numbers API is very flexible in the format of docket numbers that it receives. If you prefer to query the docket number above as `12003879` instead of `3:12-cv-3879`, that will also work. 

    Whatever format you put in will be converted to a standardized docket number, including the judge's initials.

If you plan to use this API, we recommend using the Juriscraper framework, which has [APIs specifically for this purpose][possible].


### What encoding is used for the data?

According to FJC staff, the document is encoded as ascii data. Using the following command, we were able to find three exceptions to this rule containing umlauts:
    
    grep --color='auto' -P -n "[^\x00-\x7F]" --text file.txt
     
        
### How often is the data updated?

The FJC receives data from the AO on a quarterly basis around two months after the end of the quarter. FJC then post-processes the data and puts it online.


### Why are the judge fields deliberately blank in the FJC data?

These are blank according to policy set by the Judicial Conference of the U.S. It was originally set in [March of 1995 (pg 21-22)][031995], and it was reaffirmed in [March of 2003][032003] (see page 20).

<div class="text-center">
    <img src="{static}/images/judge-specific-data.png"
         alt="The 2003 conference notes"
         class="img-responsive border"/>
</div>

If you need these values, you *might* be able to obtain unredacted sources of the data from the [National Archive of Criminal Justice Data at University of Michigan][nacjd]. They appear to have this data in unredacted form, but getting access to it is extremely onerous.

<script src="/js/anchor.min.js"></script>
<script type="text/javascript">
    anchors.options = {
            'visible': 'touch',
            'class': 'anchor',
            'truncate': 40
        };
    document.addEventListener("DOMContentLoaded", function(event) {
        anchors.add();
    });
</script>
    
    
[031995]: {static}/pdf/judicial-conference-proceedings/1995-03.pdf 
[032003]: {static}/pdf/judicial-conference-proceedings/2003-03.pdf
[possible]: https://github.com/freelawproject/juriscraper/blob/master/juriscraper/pacer/hidden_api.py#L13
[nacjd]: https://www.icpsr.umich.edu/icpsrweb/NACJD/series/72/studies
