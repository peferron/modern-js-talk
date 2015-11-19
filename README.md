# modern-js-talk

A talk about modern JS: ECMAScript 5, 2015 and 2016.

[View the slides in your browser](https://peferron.github.io/modern-js-talk/).

The sample app in the `app` directory is meant to be upgraded from old JS to modern JS one feature at a time, in parallel with the slides. The initial code is [es3-with-options.js](app/js/es3-with-options.js) and the final code is [es2016-with-options.js](app/js/es2016-with-options.js).

Similarly, the TypeScript code can be upgraded from [straight-from-js.ts](app/ts/straight-from-js.ts), which relies on type inference and has a few blind spots, to [with-types.ts](app/ts/with-types.ts), which has type declarations and compiles successfully even if `noImplicitAny` is set to `true` in [tsconfig.json](app/ts/tsconfig.json).

This [blog post](https://peferron.com/2015/11/18/talk-modern-javascript/) has some additional information.