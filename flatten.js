const flatten = (arr) => {
  const newArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(ele => {
        newArr.push(ele);
      });
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

module.exports = flatten;
