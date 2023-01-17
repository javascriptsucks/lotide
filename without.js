
const without = (socArr,remArr) => {
  let newArr = [];
  socArr.forEach(element => {
    if (!remArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};
module.exports = without;
