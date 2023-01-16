const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual('what the hell', 'what the Hell'); //false
assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 5, 6]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(NaN, undefined);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual(undefined,undefined);
assertArraysEqual(1,2);
assertArraysEqual(null, null);
assertArraysEqual(null, undefined);
assertArraysEqual(NaN, null);
