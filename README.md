# maskify-characters
# What is it?

It is a simple library to maskify all characters except last four. Inspired by a codewars kata.

## Installation

```sh
$ npm i maskify-characters
```

## Usage

```js
const maskify = require("maskify-characters")()
const result = maskify("Your card number: 1234 5678 9123 4567")
console.log(result) //logs #################################4567 
```