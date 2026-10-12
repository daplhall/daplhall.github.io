### Description

The purpose of this project is to write a web scraper in C for the joy of writing a web scraper in C. It currently uses [cURL](<https://github.com/curl/curl>), [libxml2](<https://github.com/GNOME/libxml2>), and [Google's robotstxt](<https://github.com/google/robotstxt>) (which is where C++ comes in).

### Challenges

Writing a web scraper has four basic challenges:

1. Making a request to a webpage (can be done with cURL).
2. Respecting the site's **`robots.txt`** (can be done with Google's robotstxt).
3. Parsing the HTML or API output (can be done with libxml2 for HTML; APIs can be accessed using cURL).
4. Outputting the data somewhere (a PostgreSQL database can be used here with [libpq](<https://www.postgresql.org/docs/current/libpq.html>)).

However, web scraping faces some challenges with point number one, as many websites have increased their bot detection and security measures, making web scraping more difficult.

Here, I want to experiment with the [curl-impersonate](<https://github.com/lexiforest/curl-impersonate>) repository, as it can impersonate web browsers.

### Current Outlook

The project is going strong. I have completed points 1 and 3, and I am now working on point 2.

Point 2 involved writing some code that could take a URL and separate it into its [components](<https://en.wikipedia.org/wiki/URL#syntax>). This was done by writing a finite-state machine that handles each part.