const loopyLighthouse = require('../loopyLighthouse');
const chai = require('chai');
const assert = chai.assert;

describe('#LoopyLighthouse',() => {
  it("It return ['Beacon', 'Batty', 17, 'Batty', 19, 'BattyBeacon', 21, 'Batty', 23, 'Batty', 'Beacon'], with the input of [15, 25], [2, 5], ['Batty', 'Beacon']",() => {
    assert.deepEqual(loopyLighthouse([15, 25], [2, 5], ["Batty", "Beacon"]), ['Beacon', 'Batty',
      17, 'Batty',
      19, 'BattyBeacon',
      21, 'Batty',
      23, 'Batty',
      'Beacon']);
  });
});
