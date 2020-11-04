---
title: Next.js
---

This document guides you through setting up Quirrel and creating your first queue in an existing project.

If you're looking for a tutorial instead, check out the [Water Drinking Reminder Tutorial](https://dev.to/quirrel/building-a-water-drinking-reminder-with-next-js-and-quirrel-1ckj).

## Installation

Architecturally, Quirrel consists of two main parts:

1. The Quirrel *server* receives jobs from your application and then makes requests back to it whenever a job is due.
2. The Quirrel *client* is used by your application to interface with the server.

First, we're gonna setup the Quirrel server locally.
To install it, simply run `npm install quirrel` in your project root,
then start it by running `npx quirrel`.
That's it!

:::note
You can use [`concurrently`](https://github.com/kimmobrunfeldt/concurrently)
to have the Quirrel server be started together with Next:
```json
"scripts": {
  "dev": "concurrently \"next dev\" quirrel"
}
```
:::

:::note
By default, the server doesn't persist any data.
If you need your jobs to be persisted *in development*, provide connection details for a Redis instance using the  `--redis` option.
:::

Now that our Quirrel server is running, let's install the client library:

```bash
npm install @quirrel/next
```

This is all we need to create our first Queue!

## Your first Queue

Create a new [API Route](https://nextjs.org/docs/api-routes/introduction) at `pages/api/queues/email.js` and paste the following: 

```js
// pages/api/queues/email.js
import { Queue } from "@quirrel/next"

export default Queue(
  "queues/email", // 👈 the location it's reachable on, sans api/
  async job => {
    await email.send( ... )
  }
)
```

Alright. What's going on here?

First, we're importing `Queue` from `@quirrel/next`.
We then call it to create a new Queue and export it as default, so it can take requests from outside [^1].
`Queue` takes two arguments:

[^1]: If you're interested to see how that works, take a look at [the source code](https://github.com/quirrel-dev/quirrel-next/blob/86658c96971d8d4179de8ca9f2cb513b8aae4c93/src/index.ts#L54)

1. its location (sans `api/`, so `queues/email` in our case)
2. a worker function that actually executes the job

Using the Queue is straight forward. Simply import it and enqueue a new job:

```ts {6-9}
import EmailQueue from "pages/api/queues/email"

// could be some API route / getServerSideProps / ...
export default async (req, res) => {

  await EmailQueue.enqueue(
    ..., // job to be enqueued
    { delay: "24h" } // scheduling options
  )

}
```

Calling `.enqueue` will trigger a call to the Quirrel server to enqueue a new job.
After 24h, when the job is due, the Queue's worker function will receive the job payload and execute it.

## Meet the Development UI

Waiting for 24hrs can be quite boring.
To speed up development, Quirrel allows you to monitor pending jobs in the Development UI.

To use it, simply run `quirrel ui` or open [ui.quirrel.dev](https://ui.quirrel.dev) in your browser.

<img src={require("./dev-ui.png").default} alt="Screenshot of the Development UI" height="400rem"/>

:::caution
The Development UI connects to your local Quirrel instance on the client-side.
It thus currently does not work in Safari.
:::

