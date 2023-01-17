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

module.exports = assertEqual;
