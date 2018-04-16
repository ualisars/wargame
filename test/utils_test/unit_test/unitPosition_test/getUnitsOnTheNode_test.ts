import {assert} from 'chai';
import {createUnit} from '../../../../src/unit/create';
import {getUnitsOnTheNode} from '../../../../src/utils/unit/unitPosition';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import {isUnitInArray} from '../../../../src/utils/unit/utils';
import Unit from '../../../../src/unit/types/Unit';

describe('unitPositionUtils test', () => {

  describe('getUnitsOnTheNode test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit, unit6:Unit;
    let units:Unit[] = [];
    let node:any = {x: 440, y: 160};

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Militia', 480, 160, 'computer');
      unit2 = createUnit('HeavyInfantry', 560, 80, 'computer');
      unit3 = createUnit('HeavyCavalry', 1160, 320, 'computer');
      unit4 = createUnit('Pikemen', 160, 320, 'computer');
      unit5 = createUnit('Scouts', 480, 480, 'computer');
      unit6 = createUnit('Scouts', 440, 160, 'computer');

      // unit1, unit2 and unit5 are going to that node
      unit1.setNextNode(node);
      unit2.setNextNode(node);
      unit5.setNextNode(node);

      units.push(unit1);
      units.push(unit2);
      units.push(unit3);
      units.push(unit4);
      units.push(unit5);
      units.push(unit6);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
      removeUnit(unit5);
    });

    it('unit1, unit2, unit5 and unit6 should be on the node', () => {
      const unitsOnTheNode:Unit[] = getUnitsOnTheNode(node, units);

      assert.equal(isUnitInArray(unit1, unitsOnTheNode), true);
      assert.equal(isUnitInArray(unit2, unitsOnTheNode), true);
      assert.equal(isUnitInArray(unit3, unitsOnTheNode), false);
      assert.equal(isUnitInArray(unit4, unitsOnTheNode), false);
      assert.equal(isUnitInArray(unit5, unitsOnTheNode), true);
      assert.equal(isUnitInArray(unit6, unitsOnTheNode), true);
    });

    it('unit2, unit5 and unit6 should be on the node', () => {
      const unitsOnTheNode:Unit[] = getUnitsOnTheNode(node, units, unit1);

      assert.equal(isUnitInArray(unit1, unitsOnTheNode), false);
      assert.equal(isUnitInArray(unit2, unitsOnTheNode), true);
      assert.equal(isUnitInArray(unit3, unitsOnTheNode), false);
      assert.equal(isUnitInArray(unit4, unitsOnTheNode), false);
      assert.equal(isUnitInArray(unit5, unitsOnTheNode), true);
      assert.equal(isUnitInArray(unit6, unitsOnTheNode), true);
    });
  });
});
