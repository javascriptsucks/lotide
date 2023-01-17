
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @changli/lotide`

**Require it:**

`const _ = require('@changli/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertObjectsEqual)`: assert if 2 objects contain the same key and value pairs
* `function2(assertArraysEqual)`: assert if 2 arrays are the same order and same value in each index
* `function3(flatten)`: flat a nested array with regular array.
* `function4(map)`: take a input of array and return new array depending the callback function input.
