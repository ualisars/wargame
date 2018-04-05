import {assert} from 'chai';
import {createUnit} from '../../../../src/unit/create';
import {
  removeUnit,
  removeAllUnits
} from '../../../../src/store/unit/units';
import Unit from '../../../../src/unit/types/Unit';

import {getClosestNodeToUnit} from '../../../../src/utils/unit/actions';

describe('unitActionsUtils test', () => {

  describe('getClosestNodeToUnit test', () => {
    let unit:Unit;

    before(() => {
      removeAllUnits();
      unit = createUnit('scouts', 560, 120, 5, 'computer');
    });

    let node:any = {x: 400, y: 160};

    // remove units after test completed
    after(() => {
      removeUnit(unit);
    });
    let nodes = [
      {x: 280, y: 200},
      {x: 640, y: 80},
      {x: 200, y: 40},
      {x: 280, y: 280},
      {x: 960, y: 280},
      {x: 800, y: 360},
      {x: 560, y: 280},
    ];

    it('closestNode to unit should be {x: 640, y: 80}', () => {
      let closestNode:any = getClosestNodeToUnit(unit, nodes);
      assert.equal(closestNode.x, 640);
      assert.equal(closestNode.y, 80);
    });
  });
});
