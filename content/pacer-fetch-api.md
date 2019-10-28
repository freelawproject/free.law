Title: Announcing our new PACER Fetch APIs
Author: Michael Lissner
Date: 2019-10-28
Tags: PACER, APIs
Status: Draft


Until today, if you wanted to add something to the [RECAP Archive on CourtListener][recap], you had only one option: Use the [RECAP Extensions][recap-ex] to purchase the item from PACER, and let the extensions do the upload on your behalf. While that works well, many of our users — especially those that use our APIs — have asked for something more. Could we provide an API for them to more easily get PDFs and dockets from PACER? As of today, the answer is finally yes. Starting today, we have [a new free API][docs] released in Beta that anybody can use to get dockets and PDFs from PACER and add them to our website, APIs, and replication systems. 

This is a tool for the techies, so here's how it works. Let's say you want a PDF from PACER and you know its ID in CourtListener is `112`. Get it with:

```bash
curl -X POST \
    # Type 2 is for PDFs
    --data 'request_type=2' \
    # The ID of the item you want
    --data 'recap_document=112' \
    # Your PACER and CourtListener credentials
    --data 'pacer_username=john_w_powell' \
    --data 'pacer_password=coloradoadventures' \
    --header 'Authorization: Token <your-token-here>' \
    https://www.courtlistener.com/api/rest/v3/recap-fetch/
```

That'll add a request to our fetch queue, and we'll go get it for you as soon as possible. 

Dockets are similar. Here's how you'd get a docket by docket number and court:

```bash
curl -X POST \
    # Type 1 is for dockets  
    --data 'request_type=1' \
    # The docket number and court you want
    --data 'docket_number=5:16-cv-00432' \
    --data 'court=okwd' \
    # Your PACER and Courtlistener credentials
    --data 'pacer_username=john_w_powell' \
    --data 'pacer_password=coloradoadventures' \
    --header 'Authorization: Token <your-token-here>' \
    https://www.courtlistener.com/api/rest/v3/recap-fetch/
```
      
Basically, it's the same as above, but with the `request_type` changed, and with the docket number and court provided. We take it from there. 

There are several variations and approaches that you can learn about in our [documentation for the feature][docs]. There are a couple questions we anticipate though.

### 1. What's the big advantage here?

Well, for one thing, if you want PACER content in JSON format, now you can easily get it. You don't have to set up crawling infrastructure. You don't have to  write crawlers (or use [ours][js]). You don't really have to do *much* beyond creating a PACER account and sending us API requests. Just ask for what you want, then crawl the response when it appears in our APIs. We have literally hundreds of regression tests on our parsers. Trust us that you don't want to be in the crawling business if you can avoid it.

### 2. Will this always be free?

That's our goal. Our thinking is that if you want to use our tools (like the RECAP Extensions or these APIs) to add content to the RECAP Archive, that benefits everybody and is so well-aligned with our mission that we shouldn't stand in your way. 

### 3. How secure is this? I give you my password???

Yes, unfortunately the only way to make this work is for you to share your password with us. But:

1. Your password is [fully encrypted][ssllabs] in transit to us.

1. Once we get your password, we immediately use it to log into PACER and get cookies for your account. We then delete your credentials, keeping only the cookies. We never store or log your credentials, so they're typically only on our system for a few seconds. We don't have any columns in our database for your PACER credentials.

1. We save your cookies for one hour with an automatic expiration. After that time, we will need your username and password again.

1. We are leading the legal industry by having a [vulnerability disclosure policy and bug bounty program][vdp]. 

For more on this topic, please see [the security documentation on our website][security]. 


### 4. How do I get started? Do I need to sign up? 

Here's the documentation:

<a href="https://www.courtlistener.com/api/rest-info/#pacer-fetch" target="_blank" class="btn btn-primary btn-lg">PACER Fetch Docs</a>

Start there. No need to tell us you're using the API, but feel free to get in touch if you have questions or if things aren't working like you'd hoped. This will be an evolving project, and we welcome your feedback and feature requests.

We can't want to see how people use these APIs. 


[docs]: https://www.courtlistener.com/api/rest-info/#pacer-fetch
[js]: https://github.com/freelawproject/juriscraper
[recap]: https://www.courtlistener.com/recap/
[recap-ex]: https://free.law/recap/
[security]: https://www.courtlistener.com/api/rest-info/#security-of-recap-fetch-api
[vdp]: {filename}/pages/vulnerabiltiy-disclosure-policy.md
[ssllabs]: https://www.ssllabs.com/ssltest/analyze.html?d=courtlistener.com
