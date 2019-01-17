# hyphenslug

[![npm-version](https://img.shields.io/npm/v/hyphenslug.svg)](https://www.npmjs.com/package/hyphenslug)

Opinionated Node.js function that returns a slug made only of lowercase letters, numbers and hyphens, from any string.

```js
const hyphenslug = require('hyphenslug')

hyphenslug('I just want a simple URL slug!') // i-just-want-a-simple-url-slug
hyphenslug('unicode ♥ is ☢') // unicode-love-is-radioactive
```

Inspired by [slug](https://www.npmjs.com/package/slug) and [slugify](https://www.npmjs.com/package/slugify).

Might be too big to be used in the browser, since it relies on the [unicode](https://www.npmjs.com/package/unicode) package.
