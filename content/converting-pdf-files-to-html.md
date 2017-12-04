Title: Converting PDF Files to HTML
Date: 2010-02-06 13:34
Author: Michael Lissner
Tags: CourtListener, PDF
Slug: converting-pdf-files-to-html
Status: published

For my final project, we are considering posting court cases on our
site, and so I did some work today analyzing how best to convert the PDF
files the courts give us to HTML that people can actually use. I looked
briefly at google docs, since it has an amazing tool that converts PDF
files to something resembling text, but short of spending a few days
hacking the site, I couldn't figure out any easy way to leverage their
technology in any sort of automated way.

The other two tools I have looked at today are
[pdftotext](http://www.foolabs.com/xpdf/) and
[pdftohtml](http://pdftohtml.sourceforge.net/), which, not surprisingly,
do what their names claim they do. Since we're going to be pulling cases
from the 13 federal circuit courts, I wanted to figure out which method
works best for which court, and which method will provide us with the
most generalizable solution across whatever PDF a court may crank out.

The short version is that the best option seems to be:

    :::bash
    pdftotext -htmlmeta -layout -enc 'UTF-8' yourfile.pdf

This creates an html file with the text of the case laid out best as
possible, some basic html meta data applied, and the UTF-8 encoding
applied.

Before coming to this conclusion though, I looked at two settings that
`pdftohtml` has. With the `-c` argument, it can generate a 'complex' HTML
document that closely resembles that of the original. Without the -c
argument, it will create a more simple document. Although the complex
documents are rather impressive in appearance, they're abysmal when it
comes to the quality of the HTML code that is generated. For an example,
look at the source code for this [this
file](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-2ndCircuit-08-6301-cv_opn.html).
If, on the other hand, the -c argument is not run, and the simple
documents are generated, the appearance of the final product is worse
than the simple text documents that are created by pdftotext. Check out
[this
one](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-2ndCircuit-08-6301-cv_opn.html)
for example.

For thoroughness, here is a table containing the results from this test.

<table>
<tr>
<th>
Court

</th>
<th>
pdftotext

</th>
<th>
pdftohtml complex

</th>
<th>
pdftotext simple

</th>
<th>
Original PDF

</th>
</tr>
<tr>
<td>
1^st^

</td>
<td colspan="4" align="center">
The first circuit publishes in HTML Format by default

</td>
</tr>
<tr>
<td>
2^nd^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-2ndCircuit-08-6301-cv_opn.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-2ndCircuit-08-6301-cv_opn.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-2ndCircuit-08-6301-cv_opn.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/2ndCircuit-08-6301-cv_opn.pdf)

</td>
</tr>
<tr>
<td>
3^rd^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-3rdCircuit-091225p.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-3rdCircuit-091225p.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-3rdCircuit-091225p.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/3rdCircuit-091225p.pdf)

</td>
</tr>
<tr>
<td>
4^th^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-4thCircuit-082373.P.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-4thCircuit-082373.P.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-4thCircuit-082373.P.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/4thCircuit-082373.P.pdf)

</td>
</tr>
<tr>
<td>
5^th^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-5thCircuit-07-30815-CR0.wpd.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-5thCircuit-07-30815-CR0.wpd.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-5thCircuit-07-30815-CR0.wpd.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/5thCircuit-07-30815-CR0.wpd.pdf)

</td>
</tr>
<tr>
<td>
6^th^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-6thCircuit-10a0023p-06.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-6thCircuit-10a0023p-06.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-6thCircuit-10a0023p-06.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/6thCircuit-10a0023p-06.pdf)

</td>
</tr>
<tr>
<td>
7^th^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-7thCircuit-UZ1FFY4T.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-7thCircuit-UZ1FFY4T.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-7thCircuit-UZ1FFY4T.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/7thCircuit-UZ1FFY4T.pdf)

</td>
</tr>
<tr>
<td>
8^th^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-8thCircuit-071306U.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-8thCircuit-071306U.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-8thCircuit-071306U.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/8thCircuit-071306U.pdf)

</td>
</tr>
<tr>
<td>
9^th^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-9thCircuit-07-55393.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-9thCircuit-07-55393.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-9thCircuit-07-55393.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/9thCircuit-07-55393.pdf)

</td>
</tr>
<tr>
<td>
10^th^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-10thCircuit-06-6247.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-10thCircuit-06-6247.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-10thCircuit-06-6247.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/10thCircuit-06-6247.pdf)

</td>
</tr>
<tr>
<td>
11^th^

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-11thCircuit-200814991.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-11thCircuit-200814991.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-11thCircuit-200814991.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/11thCircuit-200814991.pdf)

</td>
</tr>
<tr>
<td>
DC Circuit

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-DC-Circuit-07-3125-1229519.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-DC-Circuit-07-3125-1229519.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-DC-Circuit-07-3125-1229519.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/DC-Circuit-07-3125-1229519.pdf)

</td>
</tr>
<tr>
<td>
Federal Circuit

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftotext-layout-htmlmeta-utf-8-FederalCircuit-09-1361.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-complex-noframes-noimages-FederalCircuit-09-1361.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/pdftohtml-simple-noframes-noimages-FederalCircuit-09-1361.html)

</td>
<td>
[*link*](/archive/shared/pdf-to-html-test/FederalCircuit-09-1361.pdf)

</td>
</tr>
</table>
**A caveat regarding pdftotext:** This library is developed by a company
called [Glyph & Cog](http://www.glyphandcog.com/index.html). Although
the code is open source, I couldn't for the life of me figure out how to
file a bug against it. This doesn't particularly bode well for using
something as a dependency. On the flip side, Glyph & Cog is happy to
provide support for the product.

