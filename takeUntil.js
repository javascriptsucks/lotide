const takeUntil = function(array,callback) {
  const arrReturn = [];
  // ...
  for (const ele of array) {
    if (callback(ele)) {
      return arrReturn;
    }
    arrReturn.push(ele);
  }
  return arrReturn;
};

module.exports = takeUntil;
