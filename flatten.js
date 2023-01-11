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


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, [3, [4]], 5]]));
