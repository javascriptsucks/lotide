
const eqArrays = function(actual,expected) {
  if (typeof actual !== typeof expected) return false;

  if (typeof actual !== 'object') return actual === expected;
  // Only test array
  if (Array.isArray(actual)) {
    if (actual.length !== expected.length) return false;
    for (let i = 0; i < actual.length; i++) {

      console.log(actual[i],expected[i]);

      console.log(`is they equal with same index? ${actual[i] === expected[i]}`);

      if (!eqArrays(actual[i], expected[i])) return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual,expected)) return console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);
  return console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);

};
console.log(assertArraysEqual('what the hell', 'what the Hell')); //false
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 5, 6])); // => false
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false
console.log(assertArraysEqual(NaN, undefined));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertArraysEqual(undefined,undefined));
console.log(assertArraysEqual(1,2));
console.log(assertArraysEqual(null, null));
console.log(assertArraysEqual(null, undefined));
console.log(assertArraysEqual(NaN, null));
