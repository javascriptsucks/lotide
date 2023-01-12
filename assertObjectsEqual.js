
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1,object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length) return false;

  for (let i = 0; i < key1.length; i++) {
    if (!key2.includes(key1[i])) {
      return false;
    } else if (object1[key1[i]] !== object2[key1[i]] && !assertArraysEqual(object1[key1[i]],object2[key1[i]])) {
      console.log(object1[key1[i]], object2[key1[i]]);
      return false;
    }
  }
  return true;
};



// FUNCTION IMPLEMENTATION
const assertEquals = function(actual,expected) {
  if (typeof actual !== typeof expected) {

    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
    return;
  } else {

    if (actual === expected) console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

    else console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);

  }
};
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect;
  if (typeof (actual) !== typeof (expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return;
  }

  if (assertArraysEqual(actual,expected)) {
    //console.log(`wrong part ?${assertArraysEqual(1,2)}`);
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }

  if (actual instanceof Array) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return;

  } else if (actual instanceof Object) {
    if (eqObjects(actual,expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
      return;
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      return;
    }
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return;
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

//We need to use that return value in combination with assertEquals to test if the function is working correctly.
//assertEquals(eqObjects(shirtObject , anotherShirtObject), true);
//assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

//console.log(eqObjects(1,2));
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false
assertObjectsEqual(shirtObject , anotherShirtObject); // => true
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(undefined,undefined);
assertObjectsEqual(1,2);
assertObjectsEqual(null, null);
assertObjectsEqual(null, undefined);
assertObjectsEqual(NaN, null);
assertObjectsEqual([1,2], [2]);
assertObjectsEqual([1,2,2,2,2], [1,2,2,2,2]);
assertObjectsEqual({a:1,b:34}, {b:34,a:1});
