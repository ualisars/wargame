import {assert} from 'chai';
import {
  addUnitIntoArray,
  deleteUnitFromArray,
  getDistanceBetweenTwoUnitsInGrids,
  getUnitById,
  isUnitInArray
} from '../../../../src/utils/unit/general';
import Unit from '../../../../src/unit/types/Unit';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';

describe('UnitUtils utils test', () => {

  describe('addUnitIntoArray test', () => {

    let unit1:Unit;
    let units:Unit[];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('scouts', 120, 0, 'computer');
      units = [];
    });

    after(() => {
      removeUnit(unit1);
    });


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

    let unit1:Unit;
    let units:Unit[];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('scouts', 120, 0, 'computer');
      units = [];
      units = addUnitIntoArray(unit1, units);
    });

    after(() => {
      removeUnit(unit1);
    });

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

    let unit1:Unit;
    let unit2:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('scouts', 480, 240, 'computer');
      unit2 = createUnit('scouts', 520, 160, 'computer');
    });

    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
    });

    it('distance between units should be 3 grids', () => {
      let distance:number = getDistanceBetweenTwoUnitsInGrids(unit1, unit2);
      assert.equal(distance, 3);
    });
  });

  describe('getUnitById test', () => {
    let unit1:Unit;
    let enemy1:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyCavalry', 560, 120, 'player');
      enemy1 = createUnit('HeavyInfantry', 560, 120, 'computer');
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(enemy1);
    });

    it('fetchedUnit should be unit1', () => {
      let fetchedUnit:Unit = getUnitById(unit1.id);
      assert.equal(fetchedUnit.id, unit1.id);
    });

    it('fetchedEnemy should be enemy1', () => {
      let fetchedEnemy:Unit = getUnitById(enemy1.id);
      assert.equal(fetchedEnemy.id, enemy1.id);
    });
  });

  describe('isUnitInArray test', () => {

    let units:Unit[];
    let unit1:Unit;
    let unit2:Unit;
    let unit3:Unit;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('scouts', 440, 240, 'computer');
      unit2 = createUnit('scouts', 120, 320, 'computer');
      unit3 = createUnit('scouts', 240, 440, 'computer');

      units = [];
      units.push(unit1);
      units.push(unit3);
    });

    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });


    it('unit1 and unit3 should be the units array', () => {
      assert.equal(isUnitInArray(unit1, units), true);
      assert.equal(isUnitInArray(unit2, units), false);
      assert.equal(isUnitInArray(unit3, units), true);
    });

  });
});
