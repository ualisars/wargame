import { expect, should, assert} from 'chai';
import {isObjectInArray} from '../src/utils/objUtils';
import NodeStore from '../src/AI/store/AIMapStore/NodeStore';

describe('AIMapStore test', function() {
  describe('NodeStore test', function() {
    let node1 = {x: 20, y:200};
    let node2 = {x: 100, y: 140};
    let nodeStore = new NodeStore();

    it('add node1 into NodeStore', function() {
      nodeStore.addNodeToStore(node1);
      assert.equal(isObjectInArray(node1, nodeStore.store) , true);
    });
    it('add node2 into NodeStore', function() {
      nodeStore.addNodeToStore(node2);
      assert.equal(isObjectInArray(node2, nodeStore.store) , true);
    });
    it('remove node1 from NodeStore', function() {
      nodeStore.removeNodeFromStore(node1);
      assert.equal(isObjectInArray(node1, nodeStore.store) , false);
    });
  });
});
