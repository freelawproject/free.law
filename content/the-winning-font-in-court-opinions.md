Title: The Winning Font in Court Opinions
Date: 2012-01-27 13:10
Author: Michael Lissner
Tags: CourtListener, Font, OCR, Tesseract, Typography
Slug: the-winning-font-in-court-opinions
Status: published

At CourtListener, we're developing a new system to convert scanned court
documents to text. As part of our development we've analyzed more than
1,000 court opinions to determine what fonts courts are using.

Now that we have this information,our next step is to create training
data for [our OCR system](http://code.google.com/p/tesseract-ocr/) so
that it specializes in these fonts, but for now we've attached a
spreadsheet with our findings, and a script that can be used by others
to extract font metadata from PDFs.

Unsurprisingly, the top font — drumroll please — is Times New Roman.

<table>
<tr>
<th>
Font

</td>
<th>
Regular

</td>
<th>
Bold

</p>
<th>
Italic

</p>
<th>
Bold Italic

</p>
<th>
Total

</tr>
<tr>
<td>
Times

</p>
<td>
1454

</p>
<td>
953

</p>
<td>
867

</p>
<td>
47

</p>
<td>
**3321**

</tr>
<tr>
<td>
Courier

</p>
<td>
369

</p>
<td>
333

</p>
<td>
209

</p>
<td>
131

</p>
<td>
**1042**

</tr>
<tr>
<td>
Arial

</p>
<td>
364

</p>
<td>
39

</p>
<td>
11

</p>
<td>
41

</p>
<td>
**455**

</tr>
<tr>
<td>
Symbol

</p>
<td>
212

</p>
<td>
0

</p>
<td>
0

</p>
<td>
0

</p>
<td>
**212**

</tr>
<tr>
<td>
Helvetica

</p>
<td>
24

</p>
<td>
161

</p>
<td>
2

</p>
<td>
2

</p>
<td>
**189**

</tr>
<tr>
<td>
Century Schoolbook

</p>
<td>
58

</p>
<td>
54

</p>
<td>
52

</p>
<td>
9

</p>
<td>
**173**

</tr>
<tr>
<td>
Garamond

</p>
<td>
44

</p>
<td>
42

</p>
<td>
41

</p>
<td>
0

</p>
<td>
**127**

</tr>
<tr>
<td>
Palatino Linotype

</p>
<td>
36

</p>
<td>
24

</p>
<td>
24

</p>
<td>
1

</p>
<td>
**85**

</tr>
<tr>
<td>
Old English

</p>
<td>
42

</p>
<td>
0

</p>
<td>
0

</p>
<td>
0

</p>
<td>
**42**

</tr>
<tr>
<td>
Lincoln

</p>
<td>
27

</p>
<td>
0

</p>
<td>
0

</p>
<td>
0

</p>
<td>
**27**

</tr>
</table>

### Attachments

[extract\_font\_metadata\_from\_files.py\_.txt]({static}/txt/extract_font_metadata_from_files.py.txt)

[font-analysis.ods]({static}/ods/font-analysis.ods)

