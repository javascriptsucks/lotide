//const findKey = (obj,cb) => {
//  for (const key in obj) {
//    if (cb(obj[key])) return key;
//  }
//  return 'No key found with related condition. ';
//};

const findKey = function(obj,cb) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (cb(value)) return key;
  }
};


const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const assertEqual = function(actual,expected) {
  if (typeof actual !== typeof expected) {

    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
    return;
  } else {

    if (actual === expected) console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

    else console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);

  }
};
assertEqual(result,'noma');



