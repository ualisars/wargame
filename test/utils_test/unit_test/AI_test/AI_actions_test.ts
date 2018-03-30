import {assert} from 'chai';

import {createUnit} from '../../../../src/unit/create';
import {
  getClosestUnitToNode,
  getClosestUnitToOtherUnit
} from '../../../../src/utils/unit/AI';
import {
  removeUnit,
  removeAllUnits
} from '../../../../src/store/unit/units';
import Unit from '../../../../src/unit/types/Unit';


describe('unitUtils: AI test', () => {

  describe('getClosestUnitToNode test', () => {

    removeAllUnits();
    let node:any = {x: 400, y: 160};
    let unit1:Unit = createUnit('scouts', 280, 200, 5, 'computer');
    let unit2:Unit = createUnit('scouts', 480, 80, 5, 'computer');
    let unit3:Unit = createUnit('scouts', 480, 160, 5, 'computer');

    // remove units after test completed
    after(() => {
      removeUnit(unit1);
      removeUnit(unit2);
      removeUnit(unit3);
    });

    it('unit3 with current node {x: 480, y: 160} should be closest to node', (done) => {
      let closestUnit:Unit = getClosestUnitToNode(node);
      assert.notEqual(closestUnit.id, unit1.id);
      assert.notEqual(closestUnit.id, unit2.id);
      assert.equal(closestUnit.id, unit3.id);
      done();
    });
  });

  // describe('getClosestUnitToOtherUnit', () => {
  //
  //   removeAllUnits();
  //   let unit1:Unit = createUnit('scouts', 400, 280, 5, 'computer');
  //   let unit2:Unit = createUnit('scouts', 560, 240, 5, 'computer');
  //   let unit3:Unit = createUnit('scouts', 920, 80, 5, 'computer');
  //   let unit4:Unit = createUnit('scouts', 160, 480, 5, 'computer');
  //
  //   // remove units after test completed
  //   after(() => {
  //     removeUnit(unit1);
  //     removeUnit(unit2);
  //     removeUnit(unit3);
  //     removeUnit(unit4);
  //   });
  //
  //   it('closestUnit to unit1 should be unit2', (done) => {
  //     let closestUnit:Unit = getClosestUnitToOtherUnit(unit1);
  //     console.log('closestUnit.id', closestUnit.id);
  //     console.log('unit1.id', unit1.id);
  //     console.log('unit2.id', unit2.id);
  //     console.log('unit3.id', unit3.id);
  //     console.log('unit4.id', unit4.id);
  //     assert.equal(closestUnit.id, unit2.id);
  //     done();
  //   });
  // });
});