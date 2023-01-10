const tail = function(arr) {
  if (!(arr instanceof Array)) return undefined;
  return arr.slice(1);
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual,expected) {
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
      return;
    } else if (actual === expected) {
      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

    } else {
      console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);

    }

  }
};


const a = [1,2,3];
const b = [1];
const c = [];
const d = 'd';
console.log(tail(a));
console.log(tail(b));
console.log(tail(c));
console.log(tail(d));

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
console.log(a);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
