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

const without = (socArr,remArr) => {
  let newArr = [];
  socArr.forEach(element => {
    if (!remArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
