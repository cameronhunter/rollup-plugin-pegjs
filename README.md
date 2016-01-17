# rollup-plugin-pegjs

Import PegJS grammars as parsers directly in your code.

```js
import { parse } from "grammar.pegjs";
console.log(parse("language to parse"));
```

## Install

```sh
npm install --save-dev rollup-plugin-pegjs
```

## Usage

```js
import { rollup } from "rollup";
import pegjs from "rollup-plugin-pegjs";

rollup({
  entry: "main.js",
  plugins: [
    pegjs()
  ]
});
```
