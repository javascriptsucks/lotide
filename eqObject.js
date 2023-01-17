
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require('./eqArrays');

const eqObjects = (object1,object2) => {
  if (typeof object1 !== typeof object2) return false;

  if (!(object1 instanceof Object)) return object1 === object2;
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length) return false;
  for (const key in object1) {
    if (!object2[key]) return false;
    if (object1[key] instanceof Object && !Array.isArray(object1[key])) {
      if (eqObjects(object1[key],object2[key])) {
        return true;
      }
    }
    if (!eqArrays(object1[key], object2[key])) return false;
  }
  return true;
};

module.exports = eqObjects;
