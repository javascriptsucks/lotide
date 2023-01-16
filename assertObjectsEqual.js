// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = (object1,object2) => {
  if (typeof object1 !== typeof object2) return false;

  if (!(object1 instanceof Object)) return object1 === object2;
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length) return false;
  for (const key in object1) {
    if (!object2[key]) return false;
    if (object1[key] instanceof Object && !Array.isArray(object1[key])) {
      if (eqObjects(object1[key],object2[key])) {
        return true;
      }
    }
    if (!eqArrays(object1[key], object2[key])) return false;
  }

  return true;
};


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
  if (typeof actual !== typeof expected) {
    return false;
  }
  if (actual === expected) return true;
  // Only test array
  if (actual.length === expected.length && actual instanceof Array) {

    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
      //console.log(actual[i],expected[i]);
      //console.log(`is they equal with same index? ${actual[i] === expected[i]}`);
    }
    return true;
  }
  if (actual !== expected) return false;
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  return false;

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
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject); //true
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(undefined, undefined);
assertObjectsEqual(1,2);
assertObjectsEqual(null, null);
assertObjectsEqual(null, undefined);
assertObjectsEqual(NaN, null);
assertObjectsEqual([1,2], [2]);
assertObjectsEqual([1,2,2,2,2], [1,2,2,2,2]);
assertObjectsEqual({a:1,b:34}, {b:34,a:1});
