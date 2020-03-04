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
 

Our work here at Free Law Project often requires us to invent new and creative tools 
to move mountains of data.  Today, Free Law Project (FLP) is excited to announce the
launch of our newest open source tool we call [Courts-db][courts-db].  

Courts-db is the largest open source dataset of United States courts known to us. 
It is over 17,000 lines long, consisting of over 700 unique courts, 
spanning the early settlement of the United States to today.  

It consists of over 2,100 unique regexes and includes Federal, State and Territorial courts.  
It also includes special limited jurisdiction courts, courts set up during times of war, Tribal Courts, 
and even a couple United States Courts of other Countries (looking at you United States Court of Berlin).   

We believe this dataset is the largest open databse of courts anywhere in the world and are
 so proud of it that we've even built a [python package][pypi] to make it easier to use.  

To give you a quick taste of what it does, here is one search result 
for the Supreme Judicial Court of Massachusetts.

   
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
     

Courts-db is part of a larger initiative of FLP to organize and provide access 
to every US court opinion in history and we encourage and invite users to join, research and test.

To learn more about the project, the data and how to use the API please visit [Courts-db on Github][courts-db].  

If you're a librarian or legal researcher, we'd love to have your help 
gathering this data so we can disseminate it to the world.

[courts-db]: https://github.com/freelawproject/courts-db
[pypi]: https://pypi.org/project/courts-db/