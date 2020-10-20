---
title: FAQ
---

## My encryption secret has been leaked. What now?

First of all: Don't panic. The leaked encryption key allows attackers to read the payload of pending jobs, but only if they *also* gained access to your Quirrel API deployment ([managed](https://quirrel.dev) or self-hosted).

Replacing your leaked secret with a new one, do the following:

1. Set the `QUIRREL_OLD_SECRETS` environment variable to `["<your-leaked-secret>"]`. This will allow old jobs to be decrypted.
2. Set `QUIRREL_ENCRYPTION_SECRET` to your new secret.
3. Once all jobs that were encrypted with the old secret executed, remove `QUIRREL_OLD_SECRETS`.

If you're using the managed Quirrel deployment, feel free to [reach out](mailto:info@quirrel.dev) to get further assistance.

## I don't want to use Docker. What shall I do?

If you already have Redis running, you can use the Quirrel CLI.
Install by running `npm install --global quirrel`, then run `quirrel` to start it.

## How can I make Quirrel automatically startup with my dev environment?

You can use something like [`concurrently`](https://github.com/kimmobrunfeldt/concurrently):

```json
"scripts": {
    "dev": "concurrently --raw \"docker-compose up\" \"next dev\"",
    ...
}
```

## How can I opt out of telemetry?

Telemetry allows us to accurately gauge Quirrels feature usage and pain points across all users.
This data will let us better tailor Quirrel to users, ensuring its best-in-class developer experience.

Quirrel collects completely anonymous telemetry data about general usage, it also sends error reports to Sentry.
Participation in this anonymous program is optional, and you may opt-out if you'd not like to share any information.
To opt-out, set the DISABLE_TELEMETRY environment variable to 1.

## I wanna use Quirrel with Blitz.js, but it gives an Error.

The error `Module not found: Can't resolve 'app/api/...'` is caused by [#1013](https://github.com/blitz-js/blitz/issues/1013).
Until that's resolved, use this a workaround:

Place your Queue into a non-API-Route-File.

```ts
// app/myQueue.ts
...
export default Queue(
    "myQueue",
    ...
);
```

Then export it from the API route.

```ts
// app/api/myQueue.ts
import myQueue from "../myQueue";
export default myQueue;
```
