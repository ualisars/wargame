import { expect, should, assert} from 'chai';
import {
  getClosestToNodeUnit,
  getClosestUnitToOtherUnit,
  getBestUnitByProperty,
  getWorstUnitByProperty
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
  describe('getBestUnitByProperty', function() {
    it('unit3 should be the strongest unit by meleeDamage', function() {
      let strongestUnit = getBestUnitByProperty('meleeDamage');
      assert.equal(strongestUnit.name, 'unit3');
    });
    it('unit1 should be the second unit by meleeDamage', function() {
      let exclusion = [{id: 6}];
      let strongestUnit = getBestUnitByProperty('meleeDamage', exclusion);
      assert.equal(strongestUnit.name, 'unit1');
    });
    it('unit2 should be the fastestUnit', function() {
      let fastestUnit = getBestUnitByProperty('speed');
      assert.equal(fastestUnit.name, 'unit2');
    });
    it('unit3 should be the second unit by speed', function() {
      let exclusion = [{id: 5}];
      let fastestUnit = getBestUnitByProperty('speed', exclusion);
      assert.equal(fastestUnit.name, 'unit3');
    });
    it('unit2 should be the unit with most hp', function() {
      let fastestUnit = getBestUnitByProperty('health');
      assert.equal(fastestUnit.name, 'unit2');
    });
  });
  describe('getWorstUnitByProperty', function() {
    it('Unit1 should be worst unit by health', function() {
      let worstUnit = getWorstUnitByProperty('health');
      assert.equal(worstUnit.name, 'unit1');
    });
    it('Unit3 should be the second worst unit by health', function() {
      let exclusion = [{id: 4}];
      let worstUnit = getWorstUnitByProperty('health', exclusion);
      assert.equal(worstUnit.name, 'unit3');
    });
  });
});
