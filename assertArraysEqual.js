const assertArraysEqual = function(actual,expected) {
  if (typeof actual !== typeof expected) {
    return false;
  } else {
    if (actual === expected) return true;
    if (actual.length === expected.length && actual instanceof Array) {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
};
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false
console.log(assertArraysEqual(undefined, undefined));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertArraysEqual(undefined,undefined));
console.log(assertArraysEqual(1,2));
console.log(assertArraysEqual(null, null));
console.log(assertArraysEqual(null, undefined));
console.log(assertArraysEqual(NaN, null));
