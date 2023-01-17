const deepclone = function(newObj, oldObj) {
  for (let key in oldObj) {
    let value = oldObj[key];
    if (value instanceof Array) {
      newObj[key] = [];
      deepclone(newObj[key], value);
    } else if (value instanceof Object) {
      newObj[key] = {};
      deepclone(newObj[key], value);
    } else {
      newObj[key] = oldObj[key];
    }
  }
};

module.exports = deepclone;
