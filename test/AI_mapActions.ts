import { expect, should, assert} from 'chai';
import {isUnitInArray} from '../src/utils/unitUtils';
import {sortNodesByRandomValue} from '../src/AI/actions/mapActions';

describe('AI mapActions test', function() {
  describe('sortNodesByRandomValue', function() {
    let nodes:any[] = [
    	{randomValue: Math.random(), node: {x: 10, y: 20}},
      {randomValue: Math.random(), node: {x: 10, y: 30}},
      {randomValue: Math.random(), node: {x: 20, y: 20}},
      {randomValue: Math.random(), node: {x: 20, y: 30}},
      {randomValue: Math.random(), node: {x: 30, y: 20}},
      {randomValue: Math.random(), node: {x: 30, y: 30}},
    ];
    it('nodes should be in ascendant order by randomValue', function() {
      let sortedMap = sortNodesByRandomValue(nodes);
      assert.equal(sortedMap[0].randomValue <= sortedMap[1].randomValue, true);
      assert.equal(sortedMap[1].randomValue <= sortedMap[2].randomValue, true);
      assert.equal(sortedMap[2].randomValue <= sortedMap[3].randomValue, true);
      assert.equal(sortedMap[3].randomValue <= sortedMap[4].randomValue, true);
    });
  });
});
