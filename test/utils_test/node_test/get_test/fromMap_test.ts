import {assert} from 'chai';
import {gridSize} from '../../../../src/config/map';
import {getNodeFromMap} from '../../../../src/utils/node/get';

describe('NodeUtils: get: fromMap test', () => {

  describe('getNodeFromMap test', () => {
    it('node should {x: 360, y: 240}', () => {
      let queryNode = {x: 360, y:240};
      let node = getNodeFromMap(queryNode.x, queryNode.y);
      assert.equal(node.x, 360);
      assert.equal(node.y, 240);
    });

    it('node should {x: 240, y: 480}', () => {
      let queryNode = {x: 240, y:480};
      let node = getNodeFromMap(queryNode.x, queryNode.y);
      assert.equal(node.x, 240);
      assert.equal(node.y, 480);
    });

  });

});
