Title: This version of RECAP is deprecated
Slug: recap/deprecated/



<div class="bg-danger alert">
    <p>The version of the RECAP extension that you are using has been deprecated. To learn more, please read below.
    </p>
    <p id="redirect-p">Click here to continue to your original link: <a id="redirect-anchor" href=""></a>
    </p> 
</div>


The version of RECAP that you are using was deprecated on 13 November 2017 when we released a new version of the extension for both Firefox and Chrome. A detailed explanation of the changes [can be found on our blog from that date][new-recap].

We will continue supporting this version of the extension until 1 January 2018.

To upgrade to the latest version, please click one of the following links:

<a href="https://chrome.google.com/webstore/detail/recap/oiillickanjlaeghobeeknbddaonmjnc" class="btn btn-primary btn-lg">Add to Chrome&nbsp;<i class="fa fa-chrome"></i></a>
<a href="https://addons.mozilla.org/en-US/firefox/addon/recap-195534/" class="btn btn-primary btn-lg">Add to Firefox&nbsp;<i class="fa fa-firefox"></i></a>

The new version of the extension requires Firefox 56 or higher.

If you have any questions or feedback about this deprecation, [please let us know][c].


<script type="text/javascript">
    // Necessary helper function, see: https://stackoverflow.com/a/21903119/64911
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    
    // Another necessary helper function. JS is terrible.
    let getHostname = function getHostname(url){
      // Extract the hostname from a URL.
      var a = document.createElement("a");
      a.href = url;
      return a.hostname;
    };

    // Get the param from the URL.
    let url = getUrlParameter('url')
    
    // Set it as the href and text for the URL, or throw an error.
    let redirectParagraph = document.getElementById('redirect-p');
    if (!!url) {
        console.info("Url param is: " + url);
        let hostname = getHostname(url);
        if (hostname.endsWith('archive.org')) {
            // Security check. We will only redirect to Internet Archive.
            console.info("Redirect looks safe.");
            let anchor = document.getElementById('redirect-anchor');
            anchor.href = url;
            anchor.textContent = url;
        } else {
            console.info("Unsafe redirect. Not redirecting.");
            redirectParagraph.className += ' hidden';
        }
    } else {
        console.log("Url is falsy");
        redirectParagraph.className += ' hidden';
    }
</script>

[new-recap]: {filename}/new-recap.md
[c]: {filename}/pages/contact.md
