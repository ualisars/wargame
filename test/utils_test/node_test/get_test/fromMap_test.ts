import { assert } from 'chai';
import { getNodeFromMap } from '../../../../src/utils/node/get';
import MapNode from '../../../../src/map/nodes/MapNode';

describe('NodeUtils: get: fromMap test', () => {

  describe('getNodeFromMap test', () => {
    describe("get node x: 360, y: 240", () => {
      let queryNode: any;
      let node: MapNode 
      before(() => {
        queryNode = {x: 360, y: 240};
        node = getNodeFromMap(queryNode.x, queryNode.y);
      });
      it("node x should be 360", () => {
        assert.equal(node.x, 360);
      });
      it("node.y should be 240", () => {
        assert.equal(node.y, 240);
      });
    });
    describe("get node x: 240, y: 480", () => {
      let queryNode: any;
      let node: MapNode 
      before(() => {
        queryNode = {x: 240, y: 480};
        node = getNodeFromMap(queryNode.x, queryNode.y);
      });
      it("node x should be 240", () => {
        assert.equal(node.x, 240);
      });
      it("node.y should be 480", () => {
        assert.equal(node.y, 480);
      });
    });
  });
});
