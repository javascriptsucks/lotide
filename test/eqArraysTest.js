const eqArrays = require('../eqArrays');
const chai = require('chai');
const assert = chai.assert;



describe('#eqArrays',() => {
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isTrue(eqArrays(1,  1));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isTrue(eqArrays(null,  null));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isTrue(eqArrays([[[[2, 3],2,4,[6]], [8,9]], 4], [[[[2, 3],2,4,[6]], [8,9]], 4]));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isTrue(eqArrays([[2,[[]], 3],[[[[[[[[[[[6]]]]]]]]]]] [4]], [[2,[[]], 3],[[[[[[[[[[[6]]]]]]]]]]] [4]]));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
  it('It return "drama", with the input of "The Wire"',() => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
});
