//const findKey = (obj,cb) => {
//  for (const key in obj) {
//    if (cb(obj[key])) return key;
//  }
//  return 'No key found with related condition. ';
//};

const findKey = function(obj,cb) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (cb(value)) return key;
  }
};

module.exports = findKey;



