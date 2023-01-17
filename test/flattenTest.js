const chai = require('chai');
const assert = chai.assert;
const flatten = require('../flatten');

describe('#flatten',() => {

  it('It return [1,2,3,4,5,6], with in put of [1,2,[3,4],5,[6]]',() => {
    assert.deepEqual(flatten([1,2,[3,4],5,[6]]), [1,2,3,4,5,6]);
  });
  it("It return ['h'], with in put of ['h']",() => {
    assert.deepEqual(flatten(['h']), ['h']);
  });
  it('It return [1,2,3,4,5], with the input of [1, [2, [3, [4]], 5]]',() => {
    assert.deepEqual(flatten([1, [2, [3, [4]], 5]]), [1,2,3,4,5]);
  });

  it('It return [2,3,6,4], with the input of [[2,[[]],3],[[[[[[[[[[[6]]]]]]]]]]][4]]',() => {
    assert.deepEqual(flatten([[2,[[]],3],[[[[[[[[[[[6]]]]]]]]]]],[4]]), [2, 3,6,4]);
  });
});
