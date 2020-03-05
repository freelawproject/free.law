Title: Courts-db, a new open database
Author: William E. Palin, Esq.
Date: 2020-03-04
Tags: courts, courts-db, courtlistener, github, open data, historical
Status: Draft

<div class="left-image">
    <a href="https://github.com/freelawproject/courts-db">
        <img src="{static}/images/Aliiolanihale.jpg"
             alt="X"
             title="Hawaiʻi State Supreme Court,"
             class="img-responsive border">
    </a>
    <p class="caption">Hawaiʻi State Supreme Court, Courtesy of Wikipedia</p>
</div>
<div class="clearfix"></div>
 

Our work at Free Law Project often requires us to invent new ways 
to move mountains of data.  Today, we are excited to announce the launch of our
 latest open source tool, [Courts-db][courts-db].  

Courts-db is a legal text parsing tool specifically designed around courts in the United States. 
It consists of over 17,000 lines of code, and spans courts from the 1600 until 
modern times.  It includes over 2,100 unique regex strings over 300 court websites,
and provides thousands of examples, variations, typos and court metadata.   

Furthermore every branch of governance from federal, state and territorial courts. 
Also included are special and limited jurisdiction courts, tribal courts, 
and even a couple United States Courts of other countries (looking at you 
United States Court of Berlin).   

While courts-db was primarily built as a tool for Courtlistener.com, its
internal success mandated that we share it with the broader community.  We recently 
tested Courts-db against a database of over 16 million rows of legal data 
with 99.998% accuracy.

We believe this dataset is the largest open database of US courts on the internet,
and are so proud of it that we've even released a [python package][pypi] to
 make it easier to use.  

To give you a quick taste of what it does, here is one entry in the data.

   
    [{
        "regex": [
            "${sjc} Ma(ss(achusetts)?)?(\b|$)?",
            "${ma} ${sjc}",
            "Supreme Court Of ${ma}",
            "State Of ${ma} Supreme Court"
        ],
        "name_abbreviation": "Mass. Sup. Jud. Ct.",
        "dates": [
            {
                "start": "1692-01-01",
                "end": null
            }
        ],
        "name": "Massachusetts Supreme Judicial Court",
        "level": "colr",
        "case_types": ["All"],
        "system": "state",
        "examples": [
            "Supreme Court Of Massachusetts",
            "Supreme Judicial Court Of Massachusetts",
            "Massachusetts Supreme Judicial Court"
        ],
        "court_url": "http://www.mass.gov/courts/sjc/",
        "type": "appellate",
        "id": "mass",
        "location": "Massachusetts"
    }]
     

Courts-db is part of larger initiatives at FLP to organize and provide free and open access 
to every US court opinion in history and we encourage and invite users to join, 
research and test our code.

To learn more about the project, the data and how to use the API please visit [Courts-db on Github][courts-db].  

If you're a librarian or legal researcher, we'd love to have your help 
gathering this data so we can disseminate it to the world.

[courts-db]: https://github.com/freelawproject/courts-db
[pypi]: https://pypi.org/project/courts-db/