<p class="post__intro">
  When ever I do a front-end review for webpages I start compiling a new checklist of things that I need to take into account for the review.<br>
  Now I tried to collect some of the most important questions to check for and release them publically.
</p>

Lately Google published their [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist) which made me think about which are important thinks to look after before you publish a website or shop.

The provided checklist can help you with your existing webpages and for future projects. It's also great to use it as a pre-launch checklist.

For the future I hope to extend this list with the help of the community and automate as much checks as possible to compile a comprehensive report. If you got some ideas please feel free to contribute.

If you do reviews of websites and/or find any issue with the provided list, please [contribute over at GitHub](https://github.com/drublic/checklist).

If you want to know more about about what is going wrong with your website and how this affects your users hire me for a review.

<p>
  <a href="https://github.com/drublic/checklist" class="button">
    View the repository
  </a>

  <a href="/#hire-me" class="button">
    Hire me for a review
  </a>
</p>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">👆I&#39;ve published a checklist for front-end related website reviews.<a href="https://t.co/0P8SA1zbzF">https://t.co/0P8SA1zbzF</a></p>– Hans Christian Reinl (@drublic) <a href="https://twitter.com/drublic/status/806052812857688065">December 6, 2016</a></blockquote>

## Update: 29. January 2017

I just found this article on Smashing Magazine talking about a Front-end Performance Checklist: [Front-End Performance Checklist 2017 (PDF, Apple Pages)](https://www.smashingmagazine.com/2016/12/front-end-performance-checklist-2017-pdf-pages/).


# Frontend Checklist for Websites

## Performance

### General

* HTTP/2 is being used
* CDN is used for static files
* CDN is used for content pages
* Cookie-Less Domain is used for static files
* DNS prefetching is used
  * `<link rel="preload" as="script">` (CSS, JS and fonts)
  * `<link rel="dns-prefetch">` (for Domain, which provides static resources, eg.: Images, and Tracking Tools)

### Resources

* JavaScript combined in one file
* JavaScript minified
* JavaScript is compressed
* No JavaScript inline
* CSS combined in one file
* CSS minified
* CSS is compressed
* CSS: No usage of @import
* No CSS inline
* HTML minified
* Static files are compressed with gzip
* Static files are pre-compressed on the server
* HTML is compressed with gzip
* Usage of correct image image formats
* Usage of responsive images
* Images are optimized (ImageOptim…)
* Image are cached in the browser
* SVG files are minized
* SVG files are used where possible
* Only fonts that are used are loaded
* Browser cache is used
* ETags is not used
* Expires, cache-control and max-age headers for static resources is set to 1 year

* Asychronous loading of non-critical content
* Tracking scripts loaded asynchronously

### Measurements

Usually I measure the main pages of a project here.

* Count of all files
* Size of all files combined
* Download time of the page
* Google Page Speed analyses (Desktop, Mobile and Mobile UX; x of 100)

### Rendering Performance

* Image sizes are specified on the website
* CSS is loaded in the header
* Scripts are loaded in the footer
* Scripts are loaded with `defer`-attribute
* Scripts are loaded in the header after styles are loaded
* Scrolling is possible with 60fps
* No usage of document.write

## Device performance

* CPU usage
* Memory usage
* GPU usage

## Cross-Browser

* Website is loading on all current desktop browsers (Safari, Firefox, Chrome, IE11, EDGE)
* Website is loading on all current mobile browser (Chrome for Android, iOS Safari)
* For Shops: Checkout is usable on all devices and browser necessary
* Viewport Meta Tag is used correctly
* Usage of correct input types

# SEO

* Pages can be indexed
* Mobile version of website is available
* HTTPS is used on all pages
* Sitemap is available
* Structured-Data is used where possible
* Headlines used
* Headlines in correct order
* Meta descriptions used
* Meta keywords used
* Meta title is filled correctly

* Keywords used in headlines
* Images use the `alt`-attribute
* Links use a `title`-attribute
* Links in navigation do not use `title`-attribute
* No Duplicate Content
* Usage of absolute URLs

* Internal links point to HTTPS version of page
* Redirects are done with 301
* No 404-errors
* No 500-errors
* Canonical Tags are used if applicable
* Ratio Code:Content is around 25% for shop pages and 50% for content pages

## Accessibility

* Color Contrast is good (WCAG 2.0)
* WAI-ARIA roles are used
* Usage of accessible elements like nav, footer, aside
* URLs are accessible
* Keyboard accessibility is available
* Correct input types are used

## Security

* HTTPS is used on all pages
* There is no mixed content on the pages
* external plugins and trackings get loaded via HTTPS
* Robots.txt is in use
* Cross-Site-Scripting is not possible
* HSTS Header is set

## More

* Strict usage of domain with or without www
* Correct language set in HTML tag
* Charset is set
* HTML is valid
* 404-page is available
* A special print style sheet is in place

### Server

* Correct language set by the server
* Correct content types set by the server
