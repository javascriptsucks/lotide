
const eqArrays = function(actual,expected) {
  if (typeof actual !== typeof expected) return false;

  if (typeof actual !== 'object') return actual === expected;
  // Only test array
  if (Array.isArray(actual)) {
    if (actual.length !== expected.length) return false;
    for (let i = 0; i < actual.length; i++) {

      //console.log(actual[i],expected[i]);

      //console.log(`is they equal with same index? ${actual[i] === expected[i]}`);

      if (!eqArrays(actual[i], expected[i])) return false;
    }
  }
  return true;
};

module.exports = eqArrays;


