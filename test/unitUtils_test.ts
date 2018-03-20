import { expect, should, assert} from 'chai';
import {
  deleteUnitFromArray,
  getDistanceBetweenTwoUnitsInGrids,
  isUnitInArray
} from '../src/utils';

describe('Unit utils test', function() {
  describe('deleteUnitFromArray', function() {
    let unit = {
      id: 5
    }
    let arr = [
      {id: 2},
      {id: 5},
      {id: 10}
    ]
    it('array should not contain unit after deletion', function() {
      let updatedArr = deleteUnitFromArray(unit, arr);
      assert.equal(isUnitInArray(unit, updatedArr), false);
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
      currentNode: {
        x: 120,
        y: 400
      }
    }
    it('distance between unit1 and unit2 should be 6 grids', function() {
      assert.equal(getDistanceBetweenTwoUnitsInGrids(unit1, unit2), 6);
    });
  });
});
