<p class="post__intro" markdown="1">
  I've written a transmitter which collects data from [Contentful](https://www.contentful.com/) and indexes it in [Algolia](https://www.algolia.com/). It is written in Node.js and really simple.
</p>

A couple of days ago I asked the community if there would be any interest of an Contentful-to-Algolia transmitter.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;ve written an indexer for bringing <a href="https://twitter.com/contentful">@contentful</a> data to <a href="https://twitter.com/algolia">@algolia</a>. Would that be of any interest for anyone?</p>&mdash; Hans Christian Reinl (@drublic) <a href="https://twitter.com/drublic/status/819500423505711105">January 12, 2017</a></blockquote>

Reactions were coming in so I did the step and sliced out a module of my transmitter application.

## What does it do?

The module syncs content between Contentful and Algolia. You can configure the service to run with Drafts (Preview API) from Contentful and put it in different indexes in Algolia. The prefix of each index can be configured.

The module supports Contentful's content types and internationalisation🇺🇸. It does not include indexing of media content.

## How to use `contentful-to-algolia

First, let’s install the module in your project:

    npm install --save contentful-to-algolia

Now you can use the code as you wish:

    // Require module
    const ContentfulToAlgolia = require('contentful-to-algolia');

    // Generate new instance
    const Sync = new ContentfulToAlgolia(Object <config>);

    // Sync data
    Sync.sync(
      String <type>,
      String <indexName>,
      [Function <callback>]
    );

An example call could look something like this:

    Sync.sync('content', 'pages', (data) => {
      data.forEach((entry) => {
        console.log(`Entry ${entry.id} saved.`);
      });
    });

You can find a [sample configuration here](https://github.com/drublic/contentful-to-algolia/blob/master/config.sample.js).

## Get the code

If you think this module is helpful for your work, please go and download it here:

<p>
  <a href="https://github.com/drublic/contentful-to-algolia" class="button">
    View the repository
  </a>
</p>


## Todo 📋

There are a couple of things that would be nice to have in the module:

* Elements which are not used anymore should be removed from the index
* Contentful offers a [Syncronisation API](https://www.contentful.com/developers/docs/concepts/sync/), use it
* Offer a possibility to take updated content from a [Webhook](https://www.contentful.com/developers/docs/concepts/webhooks/) and index only this content
* Including some tests would make sense

## Feedback

If you use either of the two tools, I would be glad to receive some feedback about my code and what else you would need to use the module for.

If you are using it in your project please let me know.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">⚡️ Transmit content from any <a href="https://twitter.com/contentful">@contentful</a> type to <a href="https://twitter.com/algolia">@algolia</a> indexes - I&#39;ve published my JS module for Node.<a href="https://t.co/TLJBB10RAx">https://t.co/TLJBB10RAx</a></p>&mdash; Hans Christian Reinl (@drublic) <a href="https://twitter.com/drublic/status/820901928423059457">January 16, 2017</a></blockquote>
