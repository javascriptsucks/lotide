const assertArraysEqual = function(actual,expected) {
  if (typeof actual !== typeof expected) {

    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
    return;
  } else {
    if (actual.length === expected.length && actual instanceof Array) {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);
          return;
        }
      }
      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);
      return true;
    } else if (actual === expected) {
      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

    } else {
      console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);

    }

  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
