Yesterday I decided to take a look at [Deno](https://deno.land/) and how to get
startet with it. Deno v1 [was released roughly a week ago](https://deno.land/v1)
so I though I give it a try and have a look in how far I can make use of it in
the near future.

If you don't know yet, Deno is a Node.js-equivalent JavaScript runtime which
runs on the server with TypeScript support build in and a couple of other nifty
features. It is developed to overcome some of the [design mistakes made in
Node](https://www.youtube.com/watch?v=M3BM9TB-8yA).

## Installing Deno

My expectation to start with a new program is to install it easily via Homebrew.
With Deno I was not disappointed since [you can install
it](https://github.com/denoland/deno_install) in a couple of different ways -
including Homebrew - which is great. Installing was super fast 💪.

<figure class="image image--block" markdown="1">
  ![](/assets/deno-start-install.png)
</figure>

## "Hello World" in Deno

To get started I did a simple Hello World example which is too simple to be
honest. Just create a TypeScript file like `hello.ts` and add a log statement

    console.log("Hello World!");

You can now run this file with Deno by calling it from the console like this

    deno run ./hello.ts

🎉

## A real world example

Next up: Porting an existing application to Deno. So, I took the Warhol API
which is an application that uses Express.js and TypeORM as well as some other
packages. I carved out some piece that was easy to use and ported it to work
with Deno.

### Compile errors

<figure class="image image--left" markdown="1">
  ![](/assets/deno-start-fileext.png)
</figure>

First start, was't working well… But this was easy to fix: You need to add file
endings to your local imports. It's one of the design mistakes Ryan Dahl did
with Node.js, he says. This is a bummer, since TypeScript in VS Code starts to
complain. I guess there is an easy way around which I was not willing to google.

With this fixed I needed to figure out how to run Express. It seems like you
cannot just use Express the default way like you would in Node.js. But luckily
there is [already a package](https://github.com/NMathar/deno-express) which
works with Deno and is kind of similar to Express.

Switching out the `import`-statement for Express, and boom there we go.

<div class="typography--diff">
  <div class="typography--diff-delete"><code>import * as express from "express";</code></div>
  <div class="typography--diff-add"><code>import * as express from
  "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";</code></div>
</div>

A note here: You might be better off using Denos build-in server like `http` in
Node which seams kind of easy to use. And then there is
[Oak](https://github.com/oakserver/oak) which is an alternative build on top of
`http`.

Back to the project: In order to make `deno-express` work, you need to opt-in to
two options for Deno when running it: `--allow-net` and `--allow-read`. Since
Deno is build with security in mind you need to explicitly allow certain
operations that access the operating system.

<figure class="image image--right" markdown="1">
  ![](/assets/deno-start-errors.png)
</figure>

This returned some now errors which I would have loved to avoid since they
were mostly type related. Anyway, here is a solution for one of those issues:

### Reading environment variables

If you read environment variables using `process.env`, for example `NODE_ENV`
you must switch to use `Deno.env.get("NODE_ENV")` which is a far prettier
interface than `process.env`. As above you need to pass an option to allow
reading the env variables: `--allow-env`.

## Already done

And with this (and 50 more bugs related to the issues outlined above) I was
basically done. I just ran

    deno run --allow-env --allow-net --allow-read src/index.ts

and 💥 the Express app is being served with Deno.

<figure class="image image--block" markdown="1">
  ![](/assets/deno-start-done.png)
</figure>

## Conclusion

So, I am happy about how quickly Deno was up and running and porting the
application was somewhat trivial. The feedback provided for the errors that I
got was fantastic.

Do I see it in production over the next couple of months for one of my projects?
Probably not. But if hosting services will support Deno in the future and the
community grows I think there is a fair chance that it will become a replacement
especially for TypeScript users.

---

Next up I will look at how to get a database connected and run TypeORM with
Deno.
