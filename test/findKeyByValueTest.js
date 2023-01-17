const findKeyByValue = require('../findKeyByValue');
const chai = require('chai');
const assert = chai.assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
undefined, undefined;
findKeyByValue(bestTVShowsByGenre,"The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");



describe('#findKeyByValue',() => {
  it('It return "drama", with the input of "The Wire"',() => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"
    );
  });

  it('It return undefined, with the input of "That "70s Show"',() => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
