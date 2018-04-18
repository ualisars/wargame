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

describe('removeUnit test', () => {
  let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;

  before(() => {
    removeAllUnits();
    unit1 = createUnit('scouts', 480, 200, 'player');
    unit2 = createUnit('Hoplites', 720, 40, 'computer');
    unit3 = createUnit('Archers', 1140, 320, 'player');
    unit4 = createUnit('HeavyCavalry', 600, 240, 'computer');
    unit5 = createUnit('HeavyInfantry', 480, 320, 'computer');
  });

  // remove units after test completed
  after(() => {
    removeUnit(unit1);
    removeUnit(unit2);
    removeUnit(unit3);
    removeUnit(unit4);
    removeUnit(unit5);
  });

  it('unit2 should not be in the units', (done) => {
    removeUnit(unit2);
    assert.equal(isUnitInArray(unit1, units), true);
    assert.equal(isUnitInArray(unit2, units), false);
    assert.equal(isUnitInArray(unit3, units), true);
    assert.equal(isUnitInArray(unit4, units), true);
    assert.equal(isUnitInArray(unit5, units), true);
    done();
  });

  it('unit2 should not be in the computerUnits', (done) => {
    removeUnit(unit2);
    assert.equal(isUnitInArray(unit1, computerUnits), false);
    assert.equal(isUnitInArray(unit2, computerUnits), false);
    assert.equal(isUnitInArray(unit3, computerUnits), false);
    assert.equal(isUnitInArray(unit4, computerUnits), true);
    assert.equal(isUnitInArray(unit5, computerUnits), true);
    done();
  });

  it('unit2 and unit3 should not be in the units', (done) => {
    removeUnit(unit3);
    assert.equal(isUnitInArray(unit1, units), true);
    assert.equal(isUnitInArray(unit2, units), false);
    assert.equal(isUnitInArray(unit3, units), false);
    assert.equal(isUnitInArray(unit4, units), true);
    assert.equal(isUnitInArray(unit5, units), true);
    done();
  });

  it('unit3 should not be in the playerUnits', (done) => {
    removeUnit(unit3);
    assert.equal(isUnitInArray(unit1, playerUnits), true);
    assert.equal(isUnitInArray(unit2, playerUnits), false);
    assert.equal(isUnitInArray(unit3, playerUnits), false);
    assert.equal(isUnitInArray(unit4, playerUnits), false);
    assert.equal(isUnitInArray(unit5, playerUnits), false);
    done();
  });

});
