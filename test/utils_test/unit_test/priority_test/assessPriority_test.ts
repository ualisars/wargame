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
      unit3 = createUnit('Militia', 480, 200, 5, 'computer');
      unit4 = createUnit('Militia', 440, 240, 5, 'computer');

      // move unit1 towards the node
      unit1.setY(170);

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

    it('unit1 should be priority unit', (done) => {
      let priorityUnit:Unit = getPriorityUnit(node, units);
      assert.equal(priorityUnit.id, unit1.id);
      done();
    });

    it('unit1 and unit4 in the same distance, unit4 with more speed should be priority unit', (done) => {
      unit4.setY(230);
      const priorityUnit:Unit = getPriorityUnit(node, units);
      assert.equal(priorityUnit.id, unit4.id);
      done();
    });

    it('unit3 or unit4 should be priority unit', (done) => {
      unit3.setX(470);
      let priorityUnit1:Unit = getPriorityUnit(node, units);
      let priorityUnit2:Unit = getPriorityUnit(node, units);
      let priorityUnit3:Unit = getPriorityUnit(node, units);
      let priorityUnit4:Unit = getPriorityUnit(node, units);
      let pass1:boolean = true;
      let pass2:boolean = true;
      let pass3:boolean = true;
      let pass4:boolean = true;
      
      if(priorityUnit1.id === unit3.id && priorityUnit1.id === unit4.id) {
        pass1 = true;
      }
      if(priorityUnit2.id === unit3.id && priorityUnit2.id === unit4.id) {
        pass2 = true;
      }
      if(priorityUnit3.id === unit3.id && priorityUnit3.id === unit4.id) {
        pass3 = true;
      }
      if(priorityUnit4.id === unit3.id && priorityUnit4.id === unit4.id) {
        pass4 = true;
      }

      assert.equal(pass1, true);
      assert.equal(pass2, true);
      assert.equal(pass3, true);
      assert.equal(pass4, true);
      done();
    });
  });
});
