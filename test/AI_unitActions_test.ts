import { expect, should, assert} from 'chai';
import {
  getClosestToNodeUnit,
  getClosestUnitToOtherUnit
} from '../src/AI/actions/unitActions';
import {
  computersUnits
} from '../src/store/unitStore';

describe('AI unitActions test', function() {
  describe('getClosestToNodeUnit', function() {
    let node = {
      x: 360,
      y: 400
    }
    console.log('computersUnits', computersUnits);
    it('Unit 1 should be closest unit to this node', function() {
      let closestUnit = getClosestToNodeUnit(node);
      assert.equal(closestUnit.name, 'unit3');
    });
  });
  // describe('getClosestUnitToOtherUnit', function() {
  //   let unit1 = {
  //     x: 360,
  //     y: 400
  //   }
  //   console.log('computersUnits', computersUnits);
  //   it('Unit 1 should be closest unit to this node', function() {
  //     let closestUnit = getClosestToNodeUnit(node);
  //     assert.equal(closestUnit.name, 'unit3');
  //   });
  // });
});
