<div class="post__intro" markdown="1">
This article covers the way me and the team I am working with migrate a React application from JavaScript to TypeScript over the last couple of months and onwards. The goal is to help developers with the same idea to get a hold on where to start.
</div>

<figure class="image image--block" markdown="1">
  ![](/assets/js-ts.png)
</figure>

Over the course of the last year or so my team and I worked on an application based on React and Redux in the Frontend that was completely coded in JavaScript. Our server-side code for the same project is written in TypeScript. Puh… sometimes this is kind of a mess. Especially for developers that join the team.
On top of that we use different linting rules for both Frontend and server-side code which makes it hard to write any new peace of software. But more on this in another story.

So our goal for the application is to migrate to TypeScript in the Frontend in order to make the experience for developers equal and reduce errors from shifting from one Language to the other.
Another reason for us to switch to TypeScript is that we think that typed code helps us to prevent errors in our code before sending it to production — earlier in the compile step. Further more in a large team TypeScript helps &quot;to focus on exposed API rather than having to know all the code by heart&quot; (from [Charly Poly; Why use TypeScript, good and bad reasons](https://itnext.io/why-use-typescript-good-and-bad-reasons-ccd807b292fb)).
There are more reasons but [others](https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164) [have written](https://itnext.io/why-use-typescript-good-and-bad-reasons-ccd807b292fb) it down better than me, for instance [Stefan Baumgartner](https://fettblog.eu/why-i-use-typescript/).

## How to start

One constraint we were sure to have, was that we need be able to run JavaScript and TypeScript in parallel, at least as long as we are still in the transition phase. This is one of the big advantages of TypeScript: Writing JavaScript and is perfectly valid TypeScript. Stefan writes about this too.

### Build Pipeline and Configuration

First off we set up our build pipeline to compile JS and TS through the default TypeScript compiler `tsc`.
This is a pretty easy step: just set up a default `tsconfig.js` file for the project and change your build script to use `tsc`.
The compiler needs to know that you want to compile JS too, so you need to set this up in your configuration. Here is an example configuration.

<script src="https://gist.github.com/drublic/ce264fd626c5eb0bb5443e4fbfc9bc4a.js"></script>

Here is what I think the most problematic decision is you will face: What is the best part of the codebase to start migrating?

On thing is for sure: You want to start to port one part of the application to TS that is painful for you in your daily work. Maybe with a couple of bugs over the last couple of weeks or months where you think that would not occure if you use a type-safe language. This is exactly what we did.
Another decision point for us is that the migration should improve the development experience instantaniously, for example expose a heavily used interface.

### Starting Point: State Management

We identified our state mangement including the actions that trigger state changes as a good starting point since the API is had to understand and complicated to read.
While porting the existing code we focused on embracing the concept of [Action Creators](https://read.reduxbook.com/markdown/part1/04-action-creators.html). Using TypeScript we are able to get automatic typing for the payload using a pattern like [Peter Kröner describes here](https://twitter.com/sir_pepe/status/1158761695235518470). In general Action Creators give us the possibility to decouple binding the dispatch to the action itself and the work that the action does, while updating through reducers.

After the migration of the state management the next steps become easier: We can now start refractoring any React component to use TS instead of JS. For all PropType validations we use TypeScript interfaces to describe the properties. Writing these interfaces becomes much more natural than with PropTypes itself since you are used to writing interfaces by default in TypeScript anyway.

Here is an example:

<script src="https://gist.github.com/drublic/e3c86a8f4850287884723d58f7ac981b.js"></script>

And with that we are ready to start to translate one component after another to TypeScript.
Our goal is to do this while we work on the components anyway. I predict we will take a lot of time to convert our complete codebase to TS but the main aspect is that we are still able to produce and deliver features while working on making the move to TypeScript.

## To conclude

The most important point is to find a starting point for any project, I think. Find something where TypeScript improves your daily work. After mastering the first steps the main work of the migration is done and further steps becomes more and more trivial.

If you had another experience migrating to TypeScript or are still thinking about it, let’s discuss some questions. Contact me [via Twitter](https://twitter.com/drublic) and I am happy to chat with you.
