const letterPositions = require('../letterPositions');
const chai = require('chai');
const assert = chai.assert;

describe('#letterPositions',() => {
  it('It return [1] with in put of "hello"',() => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});
