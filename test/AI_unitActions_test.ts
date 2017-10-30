import { expect, should, assert} from 'chai';
import {
  getClosestToNodeUnit,
  getClosestUnitToOtherUnit,
  getFastestUnit
} from '../src/AI/actions/unitActions';
import {
  computersUnits
} from '../src/store/unitStore';

describe('AI unitActions test', function() {
  describe('getClosestToNodeUnit', function() {
    let node = {
      x: 300,
      y: 400
    }
    it('Unit 1 should be closest unit to this node', function() {
      let closestUnit = getClosestToNodeUnit(node);
      assert.equal(closestUnit.name, 'unit3');
    });
  });
  describe('getClosestUnitToOtherUnit', function() {
    let unit = {
      id: 6,
      currentNode: {
        x: 300,
        y: 400
      }
    }
    it('Unit3 with id = 5 should be closest unit to this unit', function() {
      let closestUnit = getClosestUnitToOtherUnit(unit);
      assert.equal(closestUnit.id, 5);
    });
  });
  describe('getFastestUnit', function() {
    it('unit with id == 5 should be fastestUnit', function() {
      let fastestUnit = getFastestUnit();
      assert.equal(fastestUnit.id, 5);
    });
    it('withoud unit with id == 5, unit with id === 6 should be fastestUnit', function() {
      let exception = [{
        id: 5
      }];
      let fastestUnit = getFastestUnit(exception);
      assert.equal(fastestUnit.id, 6);
    });
  });
});
