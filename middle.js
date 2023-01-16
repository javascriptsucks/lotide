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




module.exports = middle;
