import { expect, should, assert} from 'chai';
import Unit from '../src/unit/Unit';
import {getClosestWarriorToDestination} from '../src/unit/unitUtils';

let unit = new Unit('unit', 4, 40, 35);

let warriors = [
  {name: 'warrior1', x: 40, y: 35},
  {name: 'warrior2', x: 45, y: 35},
  {name: 'warrior3', x: 40, y: 40},
  {name: 'warrior4', x: 45, y: 40}
];

for(let warrior of warriors) {
  unit.addWarriorToUnit(warrior);
}

describe('UnitUtils Tests', function() {
  describe('getClosestWarriorToDestination', function() {
    it('Destination 45, 15 closest warrior should be warrior2', function() {
      assert.equal(getClosestWarriorToDestination(unit, 45, 15).name, 'warrior2');
    });
    it('Destination 35, 25 closest warrior should be warrior1', function() {
      assert.equal(getClosestWarriorToDestination(unit, 35, 25).name, 'warrior1');
    });
    it('Destination 60, 50 closest warrior should be warrior4', function() {
      assert.equal(getClosestWarriorToDestination(unit, 45, 55).name, 'warrior4');
    });
    it('Destination 15, 50 closest warrior should be warrior3', function() {
      assert.equal(getClosestWarriorToDestination(unit, 15, 50).name, 'warrior3');
    });
  });
});
