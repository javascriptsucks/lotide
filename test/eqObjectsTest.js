const eqObjects = require('../eqObject');
const chai = require('chai');
const assert = chai.assert;

//eqObjects({ a: { y: {c: 2, a: 6}, z: 1 }, b: 2 }, {b: 2, a: {z: 1, y: {a: 6, c: 2 }}}),true;
//eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false;

describe('#eqObjects',() => {
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });

});
