const eqArrays = function(actual,expected) {
  if (typeof actual !== typeof expected) {

    //console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
    return false;
  } else {
    if (actual.length === expected.length && actual instanceof Array) {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          //console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);
          return false;
        }
      }
      //console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);
      return true;
    } else if (actual === expected) {
      //console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);
      return true;

    } else {
      //console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);
      return false;

    }

  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
