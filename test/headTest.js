const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 1 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
  it("returns undifined for '[ 2, 3]'", () => {
    assert.strictEqual(head('[ 2, 3]'), undefined);
  });
  it("returns undifined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

});




//const assertEqual = require('../assertEqual');

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head('23, 24'), undefined);
//assertEqual(head([]), undefined);
