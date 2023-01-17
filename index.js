// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObject = require('./eqObject');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const loopyLighthouse = require('./loopyLighthouse');
const map = require('./map');
const pigLatin = require('./pig-latin');
const reverse = require('./reverse');
const takeUntile = require('./takeUntil');
const without = require('./without');


module.exports = {
  head, tail, middle: middle, assertArraysEqual, assertEqual, assertObjectsEqual, countLetters, eqArrays, eqObject, findKey,findKeyByValue,flatten,letterPositions,loopyLighthouse, map, pigLatin, reverse, countOnly, takeUntile, without
};
