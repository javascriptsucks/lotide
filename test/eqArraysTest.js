const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(1,  1)); // => true
console.log(eqArrays(null,  null)); // => true

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays({a:1,b:3}, {a:2,b:1})); // => false
console.log(eqArrays({a:1,b:3}, {b:3,a:1})); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => true
console.log(eqArrays([[2,[[]], 3],[[[[[[[[[[[6]]]]]]]]]]] [4]], [[2,[[]], 3],[[[[[[[[[[[6]]]]]]]]]]] [4]])); // => true
console.log(eqArrays([[[[2, 3],2,4,[6]], [8,9]], 4], [[[[2, 3],2,4,[6]], [8,9]], 4])); // => true
