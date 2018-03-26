import {assert} from 'chai';
import {
  addUnitIntoArray
} from '../../../../src/utils/unit/utils';
import Unit from '../../../../src/unit/types/Unit';
import {createUnit} from '../../../../src/unit/create';
import {removeUnit} from '../../../../src/store/unit/units';

describe('UnitUtils utils test', () => {
  describe('addUnitIntoArray test', () => {
    let units:Unit[] = [];
    let unit1:Unit = createUnit('scouts', 120, 0, 5, 'computer');
    let unit2:Unit = createUnit('scouts', 300, 200, 5, 'computer');
    it('unit1 should be inside units array', () => {
      // add unit1 to units
      units = addUnitIntoArray(unit1, units);
      let pass:boolean = false;
      for(let unit of units) {
        if(unit.id === unit1.id) {
          pass = true;
        }
      }

      assert.equal(pass, true);
    });
  });
});
