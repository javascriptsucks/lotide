const eqArrays = require('./eqArrays');
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
      if (!eqObjects(object1[key],object2[key])) {
        return false;
      }
    }
    if (!eqArrays(object1[key], object2[key])) return false;
  }
  return true;
};

module.exports = eqObjects;


//// FUNCTION IMPLEMENTATION
//const assertEquals = function(actual,expected) {
//  if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

//  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

//};



//const shirtObject = { color: "red", size: "medium" };
//const anotherShirtObject = { size: "medium", color: "red" };

//const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

////eqObjects(shirtObject , anotherShirtObject); // => true
////We need to use that return value in combination with assertEquals to test if the function is working correctly.
//assertEquals(eqObjects(shirtObject , anotherShirtObject), true);
////eqObjects(shirtObject , longSleeveShirtObject); // => false
//assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);

//const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
//const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

//const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false


//assertEquals(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

//assertEquals(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
//assertEquals(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false
//assertEquals(eqObjects({ a: { y: {c: 2, a: 6}, z: 1 }, b: 2 }, {b: 2, a: {z: 1, y: {a: 6, c: 2 }}}),true); // => true
//assertEquals(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false
