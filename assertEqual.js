// FUNCTION IMPLEMENTATION
const assertEqual = function(actual,expected) {
  if (typeof actual !== typeof expected) {

    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
    return;
  } else {

    if (actual === expected) return console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

    return console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);

  }
};



// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('1', 1);

const fnc = function() {
  return 80;
};
const obj = {first: 80};
const obj2 = {"80": "first"};
assertEqual(fnc(), obj.first);
assertEqual(fnc(), Object.keys(obj2)[0]);
