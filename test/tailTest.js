const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;



describe("#tail",() => {
  it("returns [2,3] for [1, 2, 3]",() => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  });
  it("returns [1] for [1]", () => {
    assert.deepEqual(tail([1]), [1]);
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });
  it("returns undefined for 'd", () => {
    assert.deepEqual(tail('d'), undefined);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});


