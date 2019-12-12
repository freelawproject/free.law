Title: Legal API Downloader -- Running from Docker
Slug: legal-api-downloader/docker/


<p class="lead">These instructions show you how to run our docker image to gather and share API results from Harvard's Caselaw Access Project API.</p>

By using this software, you will use your API key to gather items from the Harvard Caselaw Access Project. The items that you gather will then be shared with us. Once shared with us, we upload them to the Internet Archive, a permanent digital public library.

**Note:** By providing these instructions and this software, we neither encourage nor endorse the use of their software, your API, or any related software. Using our docker image is *your* choice, and before making any choice we encourage *you* to evaluate any necessary terms, laws, conditions, or other rules or regulations that may apply. 


## The Short Version

1. Get an API key from Harvard. Start here https://case.law.

2. Run the docker image with:

        sudo docker run -e CAP_API_KEY="KEY_GOES_HERE" --restart always freelawproject/case-law-access-project-client


## The Long Version

### Prerequisites

Before beginning, you must:
 
1. Have a https://case.law account and the corresponding API key

2. Have docker installed.


### Docker Usage

Once the prerequisites are satisfied, to run via Docker, simply run the following command, replacing `KEY_GOES_HERE` with your API key:

    sudo docker run -e CAP_API_KEY="KEY_GOES_HERE" --restart always freelawproject/case-law-access-project-client
    
If you have Docker set up to allow non-root users to run docker commands you can omit the `sudo` portion (this is the default for Docker Desktop).

Docker runs in "attached" mode, which means it will retain control over the terminal and output all messages to the terminal (standard out). We recommend testing the container by running it in attached mode the first time, which should display messages indicating that cases are being downloaded. After confirming it works, you may quit the container (CTRL+C) and rerun it in detached mode by passing the `-d` flag to the run command:

    sudo docker run -d -e CAP_API_KEY="KEY_GOES_HERE" --restart always freelawproject/case-law-access-project-client

(Again, omit `sudo` if it's not needed.)

This should continue running indefinitely until you kill it. Weekly check-ins are usually advised. For monitoring running containers, the `docker ps` and `docker logs` commands may be useful.

Good luck and thank you!
