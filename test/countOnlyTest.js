const countOnly = require('../countOnly');
const chai = require('chai');
const assert = chai.assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames,{"Jason": true,"Karima": true,"Fang": true,"Agouhanna": false});

describe('#CountOnly',() => {
  it('It return 1 when input is "Jason"',() => {
    assert.equal(result1["Jason"], 1);
  });
  it('It return undefined when input is "Karima"',() => {
    assert.equal(result1["Karima"], undefined);
  });
  it('It return 2 when input is "Fang"',() => {
    assert.equal(result1["Fang"], 2);
  });
  it('It return undefined when input is "Agouhanna"',() => {
    assert.equal(result1["Agouhanna"], undefined);
  });
});
