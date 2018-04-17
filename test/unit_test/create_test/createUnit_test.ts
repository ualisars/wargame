import {assert} from 'chai';

import {
  createUnit
} from '../../../src/unit/create';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';
import {isUnitInArray} from '../../../src/utils/unit/utils';
import {
  computerUnits,
  playerUnits,
  units
} from '../../../src/store/unit/units';

describe('createUnit test', () => {
  let unit1:Unit, unit2:Unit, unit3:Unit;

  before(() => {
    removeAllUnits();
    unit1 = createUnit('scouts', 480, 200, 'player');
    unit2 = createUnit('Hoplites', 720, 40, 'computer');
    unit3 = createUnit('HeavyInfantry', 1140, 320, 'player');
  });

  // remove units after test completed
  after(() => {
    removeUnit(unit1);
    removeUnit(unit2);
    removeUnit(unit3);
  });

  it('unit1, unit2 and unit3 should be in units', () => {
    assert.equal(isUnitInArray(unit1, units), true);
    assert.equal(isUnitInArray(unit2, units), true);
    assert.equal(isUnitInArray(unit3, units), true);
  });

  it('unit1 and unit3 should be in playerUnits', () => {
    assert.equal(isUnitInArray(unit1, playerUnits), true);
    assert.equal(isUnitInArray(unit2, playerUnits), false);
    assert.equal(isUnitInArray(unit3, playerUnits), true);
  });

  it('unit2 should be in computerUnits', () => {
    assert.equal(isUnitInArray(unit1, computerUnits), false);
    assert.equal(isUnitInArray(unit2, computerUnits), true);
    assert.equal(isUnitInArray(unit3, computerUnits), false);
  });
});
