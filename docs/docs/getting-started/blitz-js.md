---
title: Blitz.js
---

TODO: write


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
