import { expect, should, assert} from 'chai';
import {
  getDistanceBetweenUnitAndNodeInGrids,
  getDistanceBetweenTwoNodesInGrids
} from '../src/utils/nodeUtils';

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
    it('distance between unit and node should be 17 grids', function() {
      assert.equal(getDistanceBetweenUnitAndNodeInGrids(unit, node), 17);
    });
  });
  describe('getDistanceBetweenTwoNodesInGrids', function() {
    let node1 = {
      x: 80,
      y: 120
    }
    let node2 = {
      x: 400,
      y: 400
    }
    it('distance between node1 and node2 should be 15 grids', function() {
      assert.equal(getDistanceBetweenTwoNodesInGrids(node1, node2), 15);
    });
  });
});
