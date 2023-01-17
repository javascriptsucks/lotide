const flatten=(arr) => {
  let newArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};
module.exports = flatten;
