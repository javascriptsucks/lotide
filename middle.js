const assertArraysEqual = require('./assertArraysEqual');
const middle = (arr) => {
  if (arr.length <= 2) {
    return [];
  }
  const midInx = arr.length / 2;
  if (Number.isInteger(midInx)) {
    return [arr[midInx - 1], arr[midInx]];
  } else {
    return [arr[Math.floor(midInx)]];
  }
};


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);

module.exports = middle
