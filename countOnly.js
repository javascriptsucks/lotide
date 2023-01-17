const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {

        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};
module.exports = countOnly;

//const firstNames = [
//  "Karl",
//  "Salima",
//  "Agouhanna",
//  "Fang",
//  "Kavith",
//  "Jason",
//  "Salima",
//  "Fang",
//  "Joe"
//];

//const assertEqual = function(actual,expected) {
//  if (typeof actual !== typeof expected) {

//    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
//    return;
//  } else {

//    if (actual === expected) console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

//    else console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);

//  }
//};

//const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);
