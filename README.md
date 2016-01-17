# rollup-plugin-pegjs

[![Build Status](https://travis-ci.org/cameronhunter/rollup-plugin-pegjs.svg?branch=master)](https://travis-ci.org/cameronhunter/rollup-plugin-pegjs) [![NPM Version](https://img.shields.io/npm/v/rollup-plugin-pegjs.svg)](https://npmjs.org/package/rollup-plugin-pegjs) [![License](https://img.shields.io/npm/l/rollup-plugin-pegjs.svg)](https://github.com/cameronhunter/rollup-plugin-pegjs/blob/master/LICENSE.md)

A [rollup](http://rollupjs.org) plugin allowing you to import [PEG.js](http://pegjs.org) grammars as parsers directly in your code.

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
