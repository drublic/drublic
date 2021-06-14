<p class="post__intro" markdown="1">Still, machines have a hard time to identify what humans mean when they pile up information on a website. As developers you can build a bridge from a human thought to, let’s say a search-engine, which is utterly important for most web-shops. This is where Structured Data comes into play.</p>

<div class="" data-toc></div>

## What is Structured Data?

Structured Data extends a website over the visible information. This data is mostly used by third party software like search engines to get information out of a site in a machine-readable format.

A form of organised data on a webpage can be seen as Structured Data. This data can be analysed quite easily by algorithms. Whereas any data which is "unstructured" consumes a lot of time to compile and understand. You could say Unstructured Data is meant for humans who usually do not interact with database-like schemes. The article [*Structured vs. Unstructured data*](https://brightplanet.com/2012/06/structured-vs-unstructured-data/) has some deeper insights in the differences of both.

There are different formats that make it possible to implement Structured Data in a website.

<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon icon--warning icon--left"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></svg> __Disclaimer__: In my German web-news podcast Working Draft we talked about structured data in [Revision 287](http://workingdraft.de/287/).

The main formats:

* [Microformats 2](http://microformats.org/wiki/microformats2)
* [Microdata](https://www.w3.org/TR/microdata/)
* [JSON LD](https://json-ld.org/)
* [RDFa](http://rdfa.info/)

This article focuses mainly on Microdata and JSON-LD in the form of the [Schema.org](https://schema.org/) initiative.

### Microdata

The WHATWG describes what Microdata is as follows:

> Sometimes, it is desirable to annotate content with specific machine-readable labels, e.g. to allow generic scripts to provide services that are customized to the page, or to enable content from a variety of cooperating authors to be processed by a single script in a consistent manner.

<cite>From [WHATWG's Microdata page](https://html.spec.whatwg.org/multipage/microdata.html), 02. July 2017</cite>

### Schema.org

> Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond.
[...] Vocabularies cover entities, relationships between entities and actions, and can easily be extended through a well-documented extension model.

<cite>From [http://schema.org/](http://schema.org/)</cite>

In other words, sometimes you want to provide data of your page or emails that programs like search engine crawlers can read and index.

Schema.org claims that over 10 million sites use Structured Data on web pages.

## Structured Data on a Product Page

<figure class="image image--has-frame image--left" markdown="1" data-action="zoom">
  ![](/assets/page.png)
</figure>

So, let us examn a product page. I just took some sneaker that I like from Zalando. You can find a screenshot of the product on the left. As you can see the page is quite big. Most of the product data is visible and the user can identify it easily: product title, image(s), color, description, price, product rating.
For page crawlers this might not be the case when looking at the HTML of the page. Let’s find out how we as developers can help machines understand the page better by using Structured Data.

As I mentioned, there are different formats that you can use Structured data with. For me the most useful seems to be a mix between Microdata and JSON-LD which is why I will provide examples in these formats.

### The Product

In general your most important pages are the pages of your products.
There are a lot of properties you can add to a product page. You can [find them all on Schema.org](http://schema.org/Product).

I've got a basic example for you here.

<script src="https://gist-it.appspot.com/https://github.com/drublic/structured-data/blob/master/product.html"></script>

#### Ratings

Products are often rated by users. This is how it looks on the example page:

<figure class="image image--has-frame image--block" markdown="1" data-action="zoom">
  ![](/assets/page-rating.png)
</figure>

Google provides this rating in their search result list, if you implement Structured Data for it.

Example code:

    <div itemprop="aggregateRating"
        itemscope itemtype="http://schema.org/AggregateRating">
      <meta itemprop="ratingValue" content="3.5">
      <meta itemprop="reviewCount" content="11">
    </div>

### Exception: Product Listing Pages

### General Website information

I put the scope of this information on the html tag to include all content inside of this element

    <html lang="en" itemscope="" itemtype="http://schema.org/WebSite">

Besides that there are two properties I add: `url` and `name`:

    <meta itemprop="name" content="Foo Bar Page">
    <meta itemprop="url" content="https://www.foobar.page/">

#### Connecting Social Media

TBD.

### The Company that is represented

* The business that is presented: [Organization](http://schema.org/Organization)

TBD

### A local business

If you have a headquarter where people can call or a physical shop you can link the data of this business to your website. Here is an example uisng JSON-LD:

<script src="https://gist-it.appspot.com/https://github.com/drublic/structured-data/blob/master/business.html"></script>

### The search

TBD.

### Breadcrumb

With [a breadcrumb list](https://schema.org/BreadcrumbList) it get’s easy to show the relation of a specific page to others. Search engines, mainly Google, can show this in their results.

Interesing here is the itemprop "position" which is responsible for the order of appearing links. Compare to this image.

<figure class="image image--has-frame image--block" markdown="1">
  ![](/assets/breadcrumb.png)
</figure>

You can find a [code example here](https://github.com/drublic/structured-data/blob/master/breadcrumbList.html).

## Testing

<figure class="image image--large image--left" markdown="1" data-action="zoom">
  ![](/assets/structured-data--error.png)

<figcaption class="image__caption" markdown="1">
  Always test. Here is a warning Google’s structured testing tool provides
  <span class="image__caption__copywrite">Screenshot from https://search.google.com/structured-data/testing-tool/u/0/</span>
</figcaption>
</figure>

When you are done with implementing the snippets as descibed above, it is important to test your work.
Google provides the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/) which displays all the information for a given page. You can also paste HTML.

Usually you will see warnings or errors. As you can see in the figure on the side, you will get hints by the tool what needs to be fixed. It makes sense to have Schema.org open for reading the documentation.

Another testing tool is provided by Yandex. The [Structured data validator](https://webmaster.yandex.com/tools/microtest/) also checks for OpenGraph data which might get used with some share functionality.

## More information

There is a lot more useful information out there. First and formost [Google's guide on Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data). This will also give you a good overview on [how to start](https://developers.google.com/search/docs/guides/prototype).

* [Microdata on Wikipedia](https://en.wikipedia.org/wiki/Microdata_(HTML))
* [A list of available Scheme types](http://schema.org/docs/schemas.html)
* [Structured vs. Unstructured Data](https://brightplanet.com/2012/06/structured-vs-unstructured-data/)

## Collection

Rich Snippets: https://developers.google.com/search/docs/guides/mark-up-content
Provide Data for [Google's Knowledge Graph](https://en.wikipedia.org/wiki/Knowledge_Graph).

* Use Google Search Console to view Rich Snippets
