
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//const eqObjects = function(object1,object2) {
//  const key1 = Object.keys(object1);
//  const key2 = Object.keys(object2);
//  if (key1.length !== key2.length) return false;

//  for (let i = 0; i < key1.length; i++) {
//    if (!key2.includes(key1[i])) {
//      return false;
//    } else if (object1[key1[i]] !== object2[key1[i]] && !assertArraysEqual(object1[key1[i]],object2[key1[i]])) {
//      console.log(object1[key1[i]], object2[key1[i]]);
//      return false;
//    }
//  }
//  return true;
//};

const eqObjects = (object1, object2) => {
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



// FUNCTION IMPLEMENTATION
const assertEquals = function(actual,expected) {
  if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};
const eqArrays = function(actual,expected) {
  if (typeof actual !== typeof expected) return false;
  //basic type
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


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

//eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEquals(eqObjects(shirtObject , anotherShirtObject), true);
//eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false


assertEquals(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEquals(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEquals(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false
assertEquals(eqObjects({ a: { y: {c: 2, a: 6}, z: 1 }, b: 2 }, {b: 2, a: {z: 1, y: {a: 6, c: 2 }}}),true); // => true
assertEquals(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false
