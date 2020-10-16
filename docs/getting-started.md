---
title: Getting Started
slug: /
---

> If you're more of a tutorials person, check out the [Water Drinking Reminder Tutorial](https://dev.to/quirrel/building-a-water-drinking-reminder-with-next-js-and-quirrel-1ckj).

To get started with Quirrel, first setup your local development version.
You'll need [Docker](https://www.docker.com/get-started) and [Docker-Compose](https://docs.docker.com/compose/install/), so go ahead and install these. (Don't want to use Docker? [Try the CLI instead.](faq#i-dont-want-to-use-docker-what-shall-i-do))

Paste the following into `docker-compose.yml` in your project root:

```yaml
version: "3.7"

services:
  quirrel:
    image: ghcr.io/quirrel-dev/quirrel
    environment:
      REDIS_URL: redis://redis
    ports:
      - "9181:9181"

  redis:
    image: redis
```

Then run `docker-compose up`.
Now your local development environment is running and available on [localhost:9181](http://localhost:9181).

:::note
`9181` is "the Quirrel port", just like `3306` is "the MySQL port". Using other ports requires additional configuration.
:::

Install Quirrel's Next.js library:

```bash
npm install @quirrel/next
yarn add @quirrel/next
```

This is all we need to setup our first Queue!

## Our first Queue

Create a new [API Route](https://nextjs.org/docs/api-routes/introduction) at `pages/api/queues/email.js` and paste the following: 

```js {5}
// pages/api/queues/email.js
import { Queue } from "@quirrel/next"

export default Queue(
  "queues/email", // 👈 filename sans "pages/api/"
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

1. its location (sans `/api/`, so `queues/email` in our case)
2. a worker function that's executed for every job

The worker function takes the job's payload as its first argument and must return a `Promise`.

Using the Queue is straight forward. Simply import it and enqueue a new job:

```ts
// pages/api/signup.js
import EmailQueue from "pages/api/queues/email"

export default async (req, res) => {
  // ... create the user

  await EmailQueue.enqueue(
    { ... },
    {
      delay: 24 * 3600 * 1000 // delay by 24 hours
    }
  )
}
```

This will enqueue a new delayed job.
After 24 hours elapsed, the Queues' worker function will receive it and then send the e-mail.

:::note
Queues can be imported from any other server-side environment, like API Routes or `getServerSideProps`.
:::
