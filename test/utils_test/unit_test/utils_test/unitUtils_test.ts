import {assert} from 'chai';
import {
  addUnitIntoArray,
  deleteUnitFromArray,
  getDistanceBetweenTwoUnitsInGrids,
  isUnitInArray
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

  describe('getDistanceBetweenTwoUnitsInGrids test', () => {
    let testUnit1:Unit = createUnit('scouts', 240, 360, 5, 'computer');
    let testUnit2:Unit = createUnit('scouts', 440, 320, 5, 'computer');

    after(() => {
      removeUnit(testUnit1);
      removeUnit(testUnit2);
    });

    it('distance between units should be 6 grids', () => {
      let distance:number = getDistanceBetweenTwoUnitsInGrids(testUnit1, testUnit2);
      assert.equal(distance, 6);
    });
  });

  describe('isUnitInArray', () => {
    let testUnits:Unit[] = [];
    let u1:Unit = createUnit('scouts', 240, 360, 5, 'computer');
    let u2:Unit = createUnit('scouts', 240, 360, 5, 'computer');
    let u3:Unit = createUnit('scouts', 240, 360, 5, 'computer');

    testUnits.push(u1);
    testUnits.push(u3);
    it('u1 and u3 should be the testUnits array', (done) => {
      let u1Found:boolean = false;
      let u2Found:boolean = false;
      let u3Found:boolean = false;

      for(let unit of testUnits) {
        if(unit.id === u1.id) u1Found = true;
        else if(unit.id === u2.id) u2Found = true;
        else if(unit.id === u3.id) u3Found = true;
      }

      assert.equal(u1Found, true);
      assert.equal(u2Found, false);
      assert.equal(u3Found, true);

      done();
    })
  });
});
