## What to do?

- please see other post
- crawling, checking if it works
- decentralised problems

## History

- initially monolythic function
- lots of stuff learned
- decoupling phases

## Why

- extensibility
- scalability
- CQRS

## Architecture

- [Event Driven system](https://martinfowler.com/articles/201701-event-driven.html) - more so Event-Carried State Transfer
-- great advantages compared to monolythic systems https://medium.com/microservicegeeks/introduction-to-event-driven-architecture-e94ef442d824

- Queueing mechanism, we are using a Redis based queueing solution called [BullMQ](https://docs.bullmq.io/)
- Extensible via actions, for example for updating our search engine or additional analysing of the data

## Areas to improve

- Using serverless functions
- Make the system "learn" which to update a podcast, eg. a podcast always updates on Tuesdays, update the database on

## Learnings for the future

- Always learn from the data you already know, eg. we know what our users want to hear so we should be making sure to update based on their usaga
- Don't update what you don't need to, eg. podcasts which have not published anything in a long time don't need to be updated to often again - issue: What happens if they publish something new like a new series; possible solution: if a user searches for a podcast, update it
