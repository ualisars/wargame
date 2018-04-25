import {assert} from 'chai';
import {createUnit} from '../../../../src/unit/create';
import {anotherUnitIsOnTheWay} from '../../../../src/utils/unit/unitPosition';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import {isUnitInArray} from '../../../../src/utils/unit/general';
import Unit from '../../../../src/unit/types/Unit';

describe('unitPositionUtils test', () => {

  describe('anotherUnitIsOnTheWay test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;
    let unit6:Unit, unit7:Unit;
    let units:Unit[] = [];
    let node:any = {x: 440, y: 160};

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyInfantry', 480, 160, 'computer');
      unit2 = createUnit('HeavyCavalry', 400, 200, 'computer');
      unit3 = createUnit('Pikemen', 560, 160, 'computer');
      unit4 = createUnit('Scouts', 440, 120, 'computer');
      unit5 = createUnit('Scouts', 440, 160, 'computer');
      unit6 = createUnit('Scouts', 520, 200, 'computer');
      unit7 = createUnit('Scouts', 520, 240, 'computer');

      // assign movement
      unit1.setNextNode({x: 440, y: 160});
      unit2.setNextNode({x: 440, y: 200});
      unit3.setNextNode({x: 560, y: 120});
      unit4.setNextNode({x: 440, y: 160});
      unit5.setNextNode({x: 440, y: 200});
      unit7.setNextNode({x: 520, y: 200});

      units.push(unit1);
      units.push(unit2);
      units.push(unit3);
      units.push(unit4);
      units.push(unit5);
      units.push(unit6);
      units.push(unit7);
    });

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
      removeUnit(unit4);
      removeUnit(unit5);
      removeUnit(unit6);
      removeUnit(unit7);
    });

    it('unit1 is blocked', () => {
      const unit1Blocked:boolean = anotherUnitIsOnTheWay(units, unit1, unit1.nextNode);
      assert.equal(unit1Blocked, true);
    });
    it('unit2 is blocked', () => {
      const unit2Blocked:boolean = anotherUnitIsOnTheWay(units, unit2, unit2.nextNode);
      assert.equal(unit2Blocked, true);
    });
    it('unit3 is not blocked', () => {
      const unit3Blocked:boolean = anotherUnitIsOnTheWay(units, unit3, unit3.nextNode);
      assert.equal(unit3Blocked, false);
    });
    it('unit4 is blocked', () => {
      const unit4Blocked:boolean = anotherUnitIsOnTheWay(units, unit4, unit4.nextNode);
      assert.equal(unit4Blocked, true);
    });
    it('unit5 is blocked', () => {
      const unit5Blocked:boolean = anotherUnitIsOnTheWay(units, unit5, unit5.nextNode);
      assert.equal(unit5Blocked, true);
    });
    it('unit6 is not moving', () => {
      assert.equal(unit6.currentNode.x, unit6.nextNode.x);
      assert.equal(unit6.currentNode.y, unit6.nextNode.y);
    });
    it('unit7 is blocked', () => {
      const unit7Blocked:boolean = anotherUnitIsOnTheWay(units, unit7, unit7.nextNode);
      assert.equal(unit7Blocked, true);
    });
  });
});
