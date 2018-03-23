import {expect, should, assert} from 'chai';
import {
  getMinValueFromNodes,
  getMaxValueFromNodes
} from '../../../../src/utils/node/get';

describe('NodeUtils: get tests', () => {
  let nodes:any = [
    {x: 20, y: 30},
    {x: 50, y: 100},
    {x: 300, y: 70},
    {x: 10, y: 200},
    {x: 50, y: 120}
  ]
  // getMinValueFromNodes test
  describe('getMinValueFromNodes', () => {
    it('min value x should be equal to 10', function() {
      assert.equal(getMinValueFromNodes('x', nodes), 10);
    });
    it('min value y should be equal to 30', function() {
      assert.equal(getMinValueFromNodes('y', nodes), 30);
    });
  }); // end of getMinValueFromNodes test

  // getMaxValueFromNodes test
  describe('getMaxValueFromNodes', () => {
    it('max value x should be equal to 300', function() {
      assert.equal(getMaxValueFromNodes('x', nodes), 300);
    });
    it('max value y should be equal to 200', function() {
      assert.equal(getMaxValueFromNodes('y', nodes), 200);
    });
  }); // end of getMaxValueFromNodes test

});
