const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

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


assertObjectsEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
