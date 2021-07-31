---
title: "The Winning Font in Court Opinions"
date: "2012-01-27 13:10"
author: Michael Lissner
tags: ["CourtListener", "Font", "OCR", "Tesseract", "Typography"]
status: published
---

At CourtListener, we're developing a new system to convert scanned court
documents to text. As part of our development we've analyzed more than
1,000 court opinions to determine what fonts courts are using.

Now that we have this information,our next step is to create training
data for [our OCR system](http://code.google.com/p/tesseract-ocr/) so
that it specializes in these fonts, but for now we've attached a
spreadsheet with our findings, and a script that can be used by others
to extract font metadata from PDFs.

Unsurprisingly, the top font — drumroll please — is Times New Roman.


### Attachments

[extract\_font\_metadata\_from\_files.py\_.txt](/txt/extract_font_metadata_from_files.py.txt)

[font-analysis.ods](/ods/font-analysis.ods)

