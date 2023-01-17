const findKeyByValue = (obj,value) => {
  const valArr = Object.values(obj);
  const index = valArr.indexOf(value);
  const key = Object.keys(obj)[index];
  return key;
};

module.exports = findKeyByValue;
