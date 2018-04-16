import {assert} from 'chai';
import {createUnit} from '../../../../src/unit/create';
import {
  getUnitsMinProperty,
  getUnitsMaxProperty
} from '../../../../src/utils/unit/property';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';

describe('unitPropertyUtils test',  () => {

  describe('getUnitsMinProperty test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;
    let units:Unit[] = [];

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Hoplites', 440, 160, 'computer');
      unit2 = createUnit('HeavyInfantry', 400, 160, 'computer');
      unit3 = createUnit('HeavyCavalry', 480, 200, 'computer');
      unit4 = createUnit('Scouts', 440, 240, 'computer');

      // explicitly assign property to the units in order to
      // prevent test crashing in case of units' properties charge
      unit1.speed = 12;
      unit2.speed = 18;
      unit3.speed = 35;
      unit4.speed = 25;

      unit1.mobility = 3;
      unit2.mobility = 2;
      unit3.mobility = 4;
      unit4.mobility = 9;

      // add units to the array
      units.push(unit1);
      units.push(unit2);
      units.push(unit3);
      units.push(unit4);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
    });

    it('min speed should be equal to 12', () => {
      let minSpeed:number = getUnitsMinProperty('speed', units);
      assert.equal(minSpeed, 12);
    });

    it('min mobility should be equal to 2', () => {
      let minMobility:number = getUnitsMinProperty('mobility', units);
      assert.equal(minMobility, 2);
    });

  });

  describe('getUnitsMaxProperty test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;
    let units:Unit[] = [];
    let node = {x: 440, y: 200};

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Hoplites', 440, 160, 'computer');
      unit2 = createUnit('HeavyInfantry', 400, 160, 'computer');
      unit3 = createUnit('HeavyCavalry', 480, 200, 'computer');
      unit4 = createUnit('Scouts', 440, 240, 'computer');

      // explicitly assign property to the units in order to
      // prevent test crashing in case of units' properties charge
      unit1.speed = 12;
      unit2.speed = 18;
      unit3.speed = 35;
      unit4.speed = 25;

      unit1.mobility = 3;
      unit2.mobility = 2;
      unit3.mobility = 4;
      unit4.mobility = 9;

      // add units to the array
      units.push(unit1);
      units.push(unit2);
      units.push(unit3);
      units.push(unit4);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
    });

    it('maxSpeed should be equal to 35', () => {
      let maxSpeed:number = getUnitsMaxProperty('speed', units);
      assert.equal(maxSpeed, 35);
    });

    it('maxMobility should be equal to 9', () => {
      let maxMobility:number = getUnitsMaxProperty('mobility', units);
      assert.equal(maxMobility, 9);
    });

  });
});
