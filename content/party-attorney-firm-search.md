Title: Parties, Attorneys, and Firms are Now Searchable in the RECAP Archive 
Author: Michael Lissner
Date: 2017-03-13
Tags: RECAP Archive, PACER, search

<div class="right-image">
    <a href="https://www.courtlistener.com/recap/">
        <img src="{filename}/images/party-atty-search.png"
             alt="New UI for party and attorney search"
             class="img-responsive border">
    </a>
</div>

Today we are launching party, attorney, and firm search for the [RECAP Archive of PACER documents][archive]. This unlocks powerful new ways to do your research. 

For example, consider the following queries:
 
  - [Cases where Apple Computer is a party][apple]
    - [...and they're represented by Latham & Watkins][ap-wat]
    - [...that took place in the Eastern District of Texas][east]
    - [...and have a nature of suit code containing "patent"][patent]
    - [...and that mention the term "radio" anywhere in a document][radio]
    - [...including only motions][mo-only]
    
Click any of the above queries to see how they were made.

To use this new feature, type the name of the party or attorney into the fields on the [RECAP Archive homepage][archive] or in the sidebar to the left of any search results. These boxes also accept [advanced query syntax][adv], and there are several new fields that can be queried from the main search box including `party`, `attorney`, and `firm`. 

For example, in the main box you can search for [attorney:"eric holder"~2 firm:covington][holder]. This query shows the cases where the attorney has the word "Eric" within two words of "Holder" (thus allowing his middle name) which were handled at the firm "Covington & Burling".

<div class="left-image">
    <a href="https://www.courtlistener.com/?q=attorney%3A%22eric+holder%22~2+firm%3Acovington&type=r&order_by=score+desc">
       <img src="{filename}/images/holder-at-covington.png"
                    alt="Demo of Eric Holder at Covington & Burling"
                   class="img-responsive border"/>
    </a>
    <p class="caption">A search for Eric X Holder while he was at Covington & Burling.</p>
</div>
<div class="clearfix"></div>

Adding this capability to the RECAP Archive has been a challenging process, including extracting the data, normalizing it appropriately, and making it searchable. As usual, in addition to making this feature available on our website, it will also be available via our APIs and bulk data. 

We're proud to be sharing this today and we can't wait to see how it is used.


[archive]: https://www.courtlistener.com/recap/
[apple]: https://www.courtlistener.com/?q=&type=r&order_by=score+desc&party_name=apple
[ap-wat]: https://www.courtlistener.com/?q=firm%3A(latham+watkins)&type=r&order_by=score+desc&party_name=apple
[east]: https://www.courtlistener.com/?q=firm%3A(latham+watkins)&type=r&order_by=score+desc&party_name=apple&court=txed
[patent]: https://www.courtlistener.com/?q=firm%3A(latham+watkins)&type=r&order_by=score+desc&nature_of_suit=patent&party_name=apple&court=txed
[radio]: https://www.courtlistener.com/?q=firm%3A(latham+watkins)+radio&type=r&order_by=score+desc&nature_of_suit=patent&party_name=apple&court=txed
[mo-only]: https://www.courtlistener.com/?q=firm%3A(latham+watkins)+radio&type=r&order_by=score+desc&description=motion&nature_of_suit=patent&party_name=apple&court=txed
[adv]: https://www.courtlistener.com/search/advanced-techniques/
[holder]: https://www.courtlistener.com/?q=attorney%3A%22eric+holder%22~2+firm%3Acovington&type=r&order_by=score+desc
