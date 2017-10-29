import { expect, should, assert} from 'chai';
import {getDistanceBetweenUnitAndNodeInGrids} from '../src/utils/nodeUtils';

describe('Node Utils Tests', function() {
  describe('getDistanceBetweenUnitAndNodeInGrids', function() {
    let unit = {
      currentNode: {
        x: 40,
        y: 40
      }
    }
    let node = {
      x: 360,
      y: 400
    }
    it('distance between unit and node should be 18 grids', function() {
      assert.equal(getDistanceBetweenUnitAndNodeInGrids(unit, node), 17);
    });
  });
});
