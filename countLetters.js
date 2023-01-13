const assertEqual = function(actual,expected) {
  if (typeof actual !== typeof expected) {

    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
    return;
  } else {

    if (actual === expected) console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

    else console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);

  }
};

const countLetters = (str) => {
  const letterObj = new Object();

  for (let letter of str) {
    if (letter === ' ') {
      continue;
    }
    if (!letterObj[letter]) {
      letterObj[letter] = 1;
    }
    letterObj[letter] += 1;
  }
  return letterObj;
};

console.log(countLetters("lighthouse in the house"));
