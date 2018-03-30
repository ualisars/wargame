import {assert} from 'chai';

import {createUnit} from '../../../src/unit/create';
import {getSurroundedNodes} from '../../../src/utils/surrounded';
import {
  removeUnit,
  removeAllUnits
} from '../../../src/store/unit/units';
import Unit from '../../../src/unit/types/Unit';

describe('Surrounded utils test', () => {

  describe('getSurroundedNodes test', () => {

    before(() => {
      removeAllUnits();
    });

    let unit:Unit = createUnit('scouts', 520, 160, 5, 'computer');

    // remove unit after test is completed
    after(() => {
      removeUnit(unit);
    });

    let expectedNodes:any[] = [
      {x: 480, y: 120},
      {x: 520, y: 120},
      {x: 560, y: 120},
      {x: 480, y: 160},
      {x: 520, y: 160},
      {x: 560, y: 160},
      {x: 480, y: 200},
      {x: 520, y: 200},
      {x: 560, y: 200}
    ];

    it('surrounded nodes should be the same as expected nodes', () => {
      let surroundedNodes:any[] = getSurroundedNodes(unit, 1);
      let equal:boolean = true;

      if(expectedNodes.length !== surroundedNodes.length) {
        equal = false;
      } else {
        for(let i = 0; i < expectedNodes.length; ++i) {
          if(expectedNodes[i].x === surroundedNodes[i].x && expectedNodes[i].y === surroundedNodes[i].y) {
            // elements are equal
          } else {
            equal = false;
          }
        }
      }

      assert.equal(equal, true);

    });
  });
});
