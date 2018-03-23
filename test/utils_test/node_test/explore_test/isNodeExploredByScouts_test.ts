import {assert} from 'chai';
import {createUnit} from '../../../../src/unit/create';
import {isNodeExploredByScouts} from '../../../../src/utils/node/explore';
import {assignUnitMoveToPosition} from '../../../../src/unit/actions';
import {removeUnit} from '../../../../src/store/unit/units';
import Unit from '../../../../src/unit/types/Unit';

describe('NodeUtils test: explore test', () => {

  const exploredNode = {x: 240, y: 160};
  const notExploredNode = {x: 120, y: 120};
  let scout:Unit = createUnit('scouts', 120, 0, 5, 'computer');
  scout.assignTask('exploration');
  const x:number = 242;
  const y:number = 167;
  assignUnitMoveToPosition(scout, x, y);

  // remove scout
  after(() => {
    removeUnit(scout);
  });

  describe('isNodeExploredByScouts test', () => {

    it('node {x: 240, y: 160 is explored by scout}', () => {
      assert.equal(isNodeExploredByScouts(exploredNode), true);
    });

    it('node {x: 120, y: 120 is not explored by scout}', () => {
      assert.equal(isNodeExploredByScouts(notExploredNode), false);
    });
  });
});
