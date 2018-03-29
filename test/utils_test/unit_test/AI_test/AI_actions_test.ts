import {assert} from 'chai';

import {createUnit} from '../../../../src/unit/create';
import {
  getClosestUnitToNode
} from '../../../../src/utils/unit/AI';
import {removeUnit} from '../../../../src/store/unit/units';
import Unit from '../../../../src/unit/types/Unit';


describe('unitUtils: AI test', () => {

  describe('getClosestUnitToNode test', () => {
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

    it('unit3 with current node {x: 480, y: 160} should be closest to node', () => {
      let closestUnit:Unit = getClosestUnitToNode(node);
      assert.notEqual(closestUnit.id, unit1.id);
      assert.notEqual(closestUnit.id, unit2.id);
      assert.equal(closestUnit.id, unit3.id);
    });
  });
});
