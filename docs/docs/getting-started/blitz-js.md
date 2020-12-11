---
title: Blitz.js
---

Since Blitz.js is based on Next.js, the [Getting-Started for Next.js](/docs/getting-started/next-js) works mostly fine for Blitz users.

:::caution
There currently is [a bug](https://github.com/blitz-js/blitz/issues/1013) in Blitz.js that will make you face a `Module not found` error when working with Quirrel.
It is caused by the Blitz compile step moving around files, but not updating import references.

Until that's resolved, you can work around it by moving your Queue definition into a non-API-Route-File:

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
:::
