
const eqArrays = function(actual,expected) {
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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(1,  1)); // => true
console.log(eqArrays(null,  null)); // => true

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays({a:1,b:3}, {a:2,b:1})); // => false
console.log(eqArrays({a:1,b:3}, {b:3,a:1})); // => true
