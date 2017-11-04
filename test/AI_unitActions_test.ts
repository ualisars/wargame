import { expect, should, assert} from 'chai';
import {isUnitInArray} from '../src/utils/unitUtils';
import {
  getClosestToNodeUnit,
  getClosestUnitToOtherUnit,
  getBestUnitByProperty,
  getWorstUnitByProperty,
  getNotFightingUnits,
  getFreeUnits,
  getUnitsByTask,
  getUnitsByPropertyValue,
  getClosestNodeToUnit
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
  describe('getNotFightingUnits', function() {
    let unit1 = {id: 4};
    let unit2 = {id: 5};
    let unit3 = {id: 6};
    let notFightingUnits = getNotFightingUnits();
    it('Unit2 and unit3 should be in the notFightingUnits', function() {
      assert.equal(isUnitInArray(unit2, notFightingUnits), true);
      assert.equal(isUnitInArray(unit3, notFightingUnits), true);
    });
    it('Unit1 is fighting so it should not be in the notFightingUnits', function() {
      assert.equal(isUnitInArray(unit1, notFightingUnits), false);
    });
  });
  describe('getFreeUnits', function() {
    let freeUnits = getFreeUnits();
    let unit1 = {id: 4};
    let unit2 = {id: 5};
    let unit3 = {id: 6};
    it('Unit1 and unit2 have tasks', function() {
      assert.equal(isUnitInArray(unit1, freeUnits), false);
      assert.equal(isUnitInArray(unit2, freeUnits), false);
    });
    it('Unit3 is free', function() {
      assert.equal(isUnitInArray(unit3, freeUnits), true);
    });
  });
  describe('getUnitsByTask', function() {
    let units = getUnitsByTask('exploration');
    let unit1 = {id: 4};
    let unit2 = {id: 5};
    let unit3 = {id: 6};
    it('Unit1 task is exploration, and unit2 and unit3 has different tasks', function() {
      let units = getUnitsByTask('exploration');
      assert.equal(isUnitInArray(unit1, units), true);
      assert.equal(isUnitInArray(unit2, units), false);
      assert.equal(isUnitInArray(unit3, units), false);
    });
    it('Unit2 task is occupation, and unit1 and unit3 has different tasks', function() {
      let units = getUnitsByTask('occupation');
      assert.equal(isUnitInArray(unit1, units), false);
      assert.equal(isUnitInArray(unit2, units), true);
      assert.equal(isUnitInArray(unit3, units), false);
    });
  });
  describe('getUnitsByPropertyValue', function() {
    let spearmen = getUnitsByPropertyValue('type', 'spearmen');
    let skirmishers = getUnitsByPropertyValue('type', 'skirmishers');
    let getUnit1 = getUnitsByPropertyValue('name', 'unit1');
    let unit1 = {id: 4};
    let unit2 = {id: 5};
    let unit3 = {id: 6};
    it('Unit1 and unit2 are spearmen and unit3 is not spearmen', function() {
      assert.equal(isUnitInArray(unit1, spearmen), true);
      assert.equal(isUnitInArray(unit2, spearmen), true);
      assert.equal(isUnitInArray(unit3, spearmen), false);
    });
    it('Only unit3s type is skirmishers', function() {
      assert.equal(isUnitInArray(unit1, skirmishers), false);
      assert.equal(isUnitInArray(unit2, skirmishers), false);
      assert.equal(isUnitInArray(unit3, skirmishers), true);
    });
    it('Should be only unit1', function() {
      assert.equal(isUnitInArray(unit1, getUnit1), true);
      assert.equal(isUnitInArray(unit2, getUnit1), false);
      assert.equal(isUnitInArray(unit3, getUnit1), false);
    });
  });
  describe('getClosestNodeToUnit', function() {
    let unit = {currentNode: {x: 200, y: 200}};
    let nodes = [
      {id: 1, x: 240, y: 360},
      {id: 2, x: 300, y: 280},
      {id: 3, x: 200, y: 280},
      {id: 4, x: 400, y: 240},
    ];
    let closestNode = getClosestNodeToUnit(unit, nodes);
    it('nodes id:3, x: 200, y:280 should be closest to unit', function() {
      assert.equal(closestNode.id, 3);
    });
  });
});
