import { assert } from 'chai';
import { createUnit } from '../../../../src/unit/create';
import { anotherUnitIsOnTheWay } from '../../../../src/utils/unit/unitPosition';
import { removeAllUnits } from '../../../../src/store/unit/units';
import { removeUnit } from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';
import { getNodeFromMap } from '../../../../src/utils';
import MapNode from '../../../../src/map/nodes/MapNode';

describe('unitPositionUtils test', () => {

  describe('anotherUnitIsOnTheWay test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;
    let unit6:Unit, unit7:Unit;
    let units:Unit[] = [];
    let node: MapNode;

    before(() => {
      removeAllUnits();
      unit1 = createUnit('HeavyInfantry', 480, 160, 'computer');
      unit2 = createUnit('HeavyCavalry', 400, 200, 'computer');
      unit3 = createUnit('Pikemen', 560, 160, 'computer');
      unit4 = createUnit('Scouts', 440, 120, 'computer');
      unit5 = createUnit('Scouts', 440, 160, 'computer');
      unit6 = createUnit('Scouts', 520, 200, 'computer');
      unit7 = createUnit('Scouts', 520, 240, 'computer');

      node = getNodeFromMap(440, 160);

      let node1 = getNodeFromMap(440, 160);
      let node2 = getNodeFromMap(440, 200);
      let node3 = getNodeFromMap(560, 120);
      let node4 = getNodeFromMap(440, 160);
      let node5 = getNodeFromMap(440, 200);
      let node6 = getNodeFromMap(520, 200);

      unit1.setNextNode(node1);
      unit2.setNextNode(node2);
      unit3.setNextNode(node3);
      unit4.setNextNode(node4);
      unit5.setNextNode(node5);
      unit7.setNextNode(node6);

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
      const unit1Blocked:boolean = anotherUnitIsOnTheWay(unit1);
      assert.equal(unit1Blocked, true);
    });
    it('unit2 is blocked', () => {
      const unit2Blocked:boolean = anotherUnitIsOnTheWay(unit2);
      assert.equal(unit2Blocked, true);
    });
    it('unit3 is not blocked', () => {
      const unit3Blocked:boolean = anotherUnitIsOnTheWay(unit3);
      assert.equal(unit3Blocked, false);
    });
    it('unit4 is blocked', () => {
      const unit4Blocked:boolean = anotherUnitIsOnTheWay(unit4);
      assert.equal(unit4Blocked, true);
    });
    it('unit5 is blocked', () => {
      const unit5Blocked:boolean = anotherUnitIsOnTheWay(unit5);
      assert.equal(unit5Blocked, true);
    });
    it('unit6 is not moving', () => {
      assert.equal(unit6.currentNode.x, unit6.nextNode.x);
      assert.equal(unit6.currentNode.y, unit6.nextNode.y);
    });
    it('unit7 is blocked', () => {
      const unit7Blocked:boolean = anotherUnitIsOnTheWay(unit7);
      assert.equal(unit7Blocked, true);
    });
  });
});
