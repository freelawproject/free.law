Title:
Author: Michael Lissner, Brian Carver, etc. (use full names)
Date: 1982-06-09
Modified: (Optional)
Tags:
Summary:
Status: Draft
Private: True/False


<!-- PELICAN_BEGIN_SUMMARY --> and <!-- PELICAN_END_SUMMARY --> can be used to delimit the summaries.

An image:

![Alt Text]({static}/images/han.jpg)

Floated left or right:

<div class="{right-image or left-image}">
    <a href="http://google.com">
        <img src="{static}/images/recap/citp-logo.png"
             alt="CITP Logo"
             class="img-responsive border">
    </a>
    <p class="caption">Center for Information Technology Policy at Princeton University is a partner in our work.</p>
</div>
<!-- Optionally, do this to force the content to the next line. -->
<div class="clearfix"></div>


Centered:

<div class="text-center">
    <img src="{static}/images/recap_r-150x150.png"
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

A sidebar:

---

<div class="col-xs-5 pull-right col-sm-3 bg-primary">
    <h3>Check It Out</h3>
    <p>You can find all of our oral argument recordings on the Internet Archive in a new collection we have created for this purpose.
    </p>
    <p><a href="https://archive.org/details/uscourtsoralarguments" target="_blank" class="btn btn-info btn-block">Check It Out</a>
</div>


A collapsible section and toggle:

<p>
  <a data-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
    Why am I seeing this? <i class="fa fa-angle-double-down"></i>
  </a>
</p>
<div class="collapse" id="collapse">
  <p class="well">
    We're sorry to interrupt you. Once per year, the RECAP Extension, which you have installed, will pop-up this tab in your browser to ask for your support. We hope you understand.
  </p>
</div>

<!-- JS has to come last or it can wind up in summary text. -->
<script type="text/javascript"></script>


Some links:
[a link relative to content root]({filename}/article1.md)
[a link relative to current file]({filename}../article1.md)
