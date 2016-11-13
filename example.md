Title:
Author: mlissner, brianwc, etc.
Date: 1982-06-09
Modified: (Optional)
Tags:
Summary:
Status: Draft


An image:

![Alt Text]({filename}/images/han.jpg)

Floated left or right:

<div class="{right-image or left-image}">
    <a href="http://google.com">
        <img src="{filename}/images/recap/citp-logo.png"
             alt="CITP Logo"
             class="img-responsive border">
    </a>
    <p class="caption">Center for Information Technology Policy at Princeton University is a partner in our work.</p>
</div>
<!-- Optionally, do this to force the content to the next line. -->
<div class="clearfix"></div>


Centered:

<div class="text-center">
    <img src="{filename}/images/recap_r-150x150.png"
         alt="RECAP Logo"
         class="img-responsive border"/>
</div>


You can make a big button with:

<a href="blah" class="btn btn-primary btn-lg">Foo</a>

An embedded thing:

<div class="embed-responsive embed-responsive-4by3">
    <iframe class="embed-responsive-item" src="" frameborder="0" allowfullscreen></iframe>
</div>

A warning:

<p class="bg-danger alert">Oh no!!!!</p>

Some links:
[a link relative to content root]({filename}/article1.md)
[a link relative to current file]({filename}../article1.md)
