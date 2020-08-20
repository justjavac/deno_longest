# deno_longest

[![tag](https://img.shields.io/github/release/justjavac/deno_longest)](https://github.com/justjavac/deno_longest/releases)
[![Build Status](https://github.com/justjavac/deno_longest/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_longest/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_longest)](https://github.com/justjavac/deno_longest/blob/master/LICENSE)

Get the length of the longest item in an array.

> base on [jonschlinkert/longest](https://github.com/jonschlinkert/longest)

## Usage

```ts
import longest from "https://deno.land/x/longest/mod.ts";

longest(['a', 'abcde', 'abc']);
//=> 'abcde'

longest(['a', 'abcde', 'abc']).length;
//=> 5
```

## License

[deno_longest](https://github.com/justjavac/deno_longest) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
