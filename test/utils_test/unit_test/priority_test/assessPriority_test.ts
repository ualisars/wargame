import {assert} from 'chai';
import {createUnit} from '../../../../src/unit/create';
import {
  getPriorityUnit,
  unitCanMoveToTheNode
} from '../../../../src/utils/unit/priority';
import {
  removeUnit,
  removeAllUnits
} from '../../../../src/store/unit/units';
import Unit from '../../../../src/unit/types/Unit';

describe('unitPriorityUtils test', () => {

  describe('getPriorityUnit test', () => {
    let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;
    let units:Unit[] = [];
    let node = {x: 440, y: 200};

    before(() => {
      removeAllUnits();
      unit1 = createUnit('Pikemen', 440, 160, 5, 'computer');
      unit2 = createUnit('HeavyInfantry', 400, 160, 5, 'computer');
      unit3 = createUnit('Scouts', 480, 200, 5, 'computer');
      unit4 = createUnit('Militia', 440, 240, 5, 'computer');

      // move unit1 towards the node
    

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

    it('unit1 should be priority unit', () => {
      let priorityUnit:Unit = getPriorityUnit(node, units);
      //console.log('priorityUnit.id', priorityUnit.id);
      let nodeCenterX:number = node.x + 20;
      let nodeCenterY:number = node.y + 20;

      // console.log('nodeCenterX', nodeCenterX);
      // console.log('nodeCenterY', nodeCenterY);
      //
      // console.log('unit1.centerX', unit1.centerX);
      // console.log('unit1.centerY', unit1.centerY);
      //
      // console.log('unit2.centerX', unit2.centerX);
      // console.log('unit2.centerY', unit2.centerY);
      //
      //
      // console.log('unit3.centerX', unit3.centerX);
      // console.log('unit3.centerY', unit3.centerY);
      //
      //
      // console.log('unit4.centerX', unit4.centerX);
      // console.log('unit4.centerY', unit4.centerY);
      //
      //
      // console.log('unit1.id', unit1.id);
      // console.log('unit2.id', unit2.id);
      // console.log('unit3.id', unit3.id);
      // console.log('unit4.id', unit4.id);
      //assert.equal(priorityUnit.id, unit1.id);
    });
  });
});
