import {assert} from 'chai';
import {
  addUnitIntoArray,
  deleteUnitFromArray
} from '../../../../src/utils/unit/utils';
import Unit from '../../../../src/unit/types/Unit';
import {createUnit} from '../../../../src/unit/create';
import {removeUnit} from '../../../../src/store/unit/units';

describe('UnitUtils utils test', () => {
  let units:Unit[] = [];
  let unit1:Unit = createUnit('scouts', 120, 0, 5, 'computer');
  let unit2:Unit = createUnit('scouts', 300, 200, 5, 'computer');
  let unit3:Unit = createUnit('scouts', 40, 160, 5, 'computer');

  // remove units after test
  after(() => {
    removeUnit(unit1);
    removeUnit(unit2);
    removeUnit(unit3);
  });

  describe('addUnitIntoArray test', () => {
    it('unit1 should be inside units array', () => {
      // add unit1 to units
      units = addUnitIntoArray(unit1, units);
      let found:boolean = false;
      for(let unit of units) {
        if(unit.id === unit1.id) {
          found = true;
        }
      }

      assert.equal(found, true);
    });
  });

  describe('deleteUnitFromArray test', () => {

    it('unit1 should no longer be in the units', () => {
      let unitsAfter:Unit[] = deleteUnitFromArray(unit1, units);
      let found:boolean = false;
      for(let unit of unitsAfter) {
        if(unit.id === unit1.id) {
          found = true;
        }
      }

      assert.equal(found, false);
    });
  });
});
