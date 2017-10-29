import { expect, should, assert} from 'chai';
import {
  getDistanceBetweenUnitAndNodeInGrids,
  getDistanceBetweenTwoUnitsInGrids
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
  describe('getDistanceBetweenTwoUnitsInGrids', function() {
    let unit1 = {
      currentNode: {
        x: 200,
        y: 240
      }
    }
    let unit2 = {
      x: 120,
      y: 400
    }
    it('distance between unit1 and unit2 should be 6 grids', function() {
      assert.equal(getDistanceBetweenUnitAndNodeInGrids(unit1, unit2), 6);
    });
  });
});
