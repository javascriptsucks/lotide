const findKeyByValue = (obj,value) => {
  const valArr = Object.values(obj);
  const index = valArr.indexOf(value);
  const key = Object.keys(obj)[index];
  return key;
};


const assertArraysEqual = function(actual,expected) {
  if (typeof actual !== typeof expected) {

    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
    return;
  } else {
    if (actual === undefined && actual === undefined) {
      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);
      return;
    }
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


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertArraysEqual(undefined, undefined);
findKeyByValue(bestTVShowsByGenre,"The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
