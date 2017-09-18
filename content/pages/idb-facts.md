Title: Facts about FJC's Integrated Database 
Slug: idb-facts

<div class="right-image">
    <img src="{filename}/images/fjc-logo.png"
         alt="FJC Logo"
         class="img-responsive border">
</div>

<script src="/js/anchor.min.js"></script>
<script type="text/javascript">
    anchors.options = {
            'visible': 'touch',
            'class': 'anchor',
            'truncate': 20
        };
    document.addEventListener("DOMContentLoaded", function(event) {
        anchors.add();
    });
</script>


<p class="lead">This page is where we keep useful information and notes for people that are using the Integrated Database provided by the Federal Judicial Center.</p>
 
There are a few questions that aren't answered by their website, and a few pieces of missing information that are essential for understanding the data. This is the page we wish existed when we began working with this data.


### Where can I find an explanation of the office codes?

The codebook states that this information is in "Guide to Judiciary Policies and Procedures, Volume XI, Appendix A," but that does not appear to be online. We have requested this information and have published it here.

<a href="/xlsx/fjc/integrated-database/office-codes.xlsx"
   class="btn btn-lg btn-primary">Download the office codes</a>
    
       
### What encoding is used for the data?

According to FJC staff, the document is encoded as ascii data. Using the following command, we were able to find three exceptions to this rule containing umlauts:
    
    grep --color='auto' -P -n "[^\x00-\x7F]" --text file.txt
     
        
### How often is the data updated?

The FJC receives data from the AO on a quarterly basis around two months after the end of the quarter. FJC then post-processes the data and puts it online.


### Why are the judge fields deliberately blank in the FJC data?

These are blank according to policy set by the Judicial Conference of the U.S. It was originally set in [March of 1995 (pg 21-22)][031995], and it was reaffirmed in [March of 2003][032003] (see page 20).

<div class="text-center">
    <img src="{filename}/images/judge-specific-data.png"
         alt="The 2003 conference notes"
         class="img-responsive border"/>
</div>
    
    
[031995]: {filename}/pdf/judicial-conference-proceedings/1995-03.pdf 
[032003]: {filename}/pdf/judicial-conference-proceedings/2003-03.pdf
