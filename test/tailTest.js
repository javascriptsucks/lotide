const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');


const a = [1,2,3];
const b = [1];
const c = [];
const d = 'd';
//console.log(tail(a));
//console.log(tail(b));
//console.log(tail(c));
//console.log(tail(d));

assertArraysEqual(tail(a),[2,3]);
assertArraysEqual(tail(b), [1]);
assertArraysEqual(tail(c), undefined);
assertArraysEqual(tail(d), undefined);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
//console.log(a);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertArraysEqual(words.length, 3); // original array should still have 3 elements!
