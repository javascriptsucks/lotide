const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs","Bootcamp");
assertEqual(1, 1);
assertEqual('1', 1);

const fnc = function() {
  return 80;
};
const obj = {first: 80};
const obj2 = {"80": "first"};
assertEqual(fnc(), obj.first);
assertEqual(fnc(), Object.keys(obj2)[0]);
