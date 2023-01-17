const findKeyByValue = (obj,value) => {
  const valArr = Object.values(obj);
  const index = valArr.indexOf(value);
  const key = Object.keys(obj)[index];
  return key;
};
module.exports = findKeyByValue;


//const assertArraysEqual = function(actual,expected) {
//  if (typeof actual !== typeof expected) {

//    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
//    return;
//  } else {
//    if (actual === undefined && actual === undefined) {
//      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);
//      return;
//    }
//    if (actual.length === expected.length && actual instanceof Array) {
//      for (let i = 0; i < actual.length; i++) {
//        if (actual[i] !== expected[i]) {
//          console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);
//          return;
//        }
//      }
//      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);
//      return true;
//    } else if (actual === expected) {
//      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

//    } else {
//      console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);
//    }
//  }
//};



