const middle = (arr)=> {
  if (arr.length <= 2) {
    return [];
  }
  const midInx = arr.length / 2;
  if (Number.isInteger(midInx)) {
    return [arr[midInx - 1], arr[midInx]];
  } else {
    return [arr[Math.floor(midInx)]];
  }
};


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

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);

