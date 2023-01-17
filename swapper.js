
// Swapper

const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");

  // Put your solution here
  const key1Value = object1[key1];
  const key2Value = object2[key2];

  object1[key1] = key2Value;
  object2[key2] = key1Value;
  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

module.exports = swapper;
