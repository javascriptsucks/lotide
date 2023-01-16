const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
assertEqual(eqArrays(1,  1),true); // => true
assertEqual(eqArrays(null,  null),true); // => true

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
//assertEqual(eqArrays({a:1,b:3}, {a:2,b:1}),false); // => false
//assertEqual(eqArrays({a:1,b:3}, {b:3,a:1}),true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[2,[[]], 3],[[[[[[[[[[[6]]]]]]]]]]] [4]], [[2,[[]], 3],[[[[[[[[[[[6]]]]]]]]]]] [4]]),true); // => true
assertEqual(eqArrays([[[[2, 3],2,4,[6]], [8,9]], 4], [[[[2, 3],2,4,[6]], [8,9]], 4]),true); // => true
