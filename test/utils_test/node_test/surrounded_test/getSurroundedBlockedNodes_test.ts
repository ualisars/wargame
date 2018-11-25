import {assert} from 'chai';
import {getSurroundedBlockedNodes} from '../../../../src/utils/node/surrounded';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';
import { getNodeFromMap } from '../../../../src/utils';
import MapNode from '../../../../src/map/nodes/MapNode';
import { isNodeInArray } from '../../../../src/utils/node/general/isNodeInArray';

describe('NodeUtils: surrounded test', () => {

  describe('getSurroundedBlockedNodes test', () => {
    let unit: Unit, ally1: Unit, ally2: Unit;
    let node1: MapNode, node2: MapNode;
    before(() => {
      removeAllUnits();
      unit = createUnit('scouts', 320, 120, 'computer');
      ally1 = createUnit('scouts', 280, 120, 'computer');
      ally2 = createUnit('scouts', 360, 120, 'computer');
      node1 = getNodeFromMap(280, 80);
      node2 = getNodeFromMap(360, 160);
      ally1.setNextNode(node1);
      ally2.setNextNode(node2);
    });

    after(() => {
      removeUnit(unit);
      removeUnit(ally1);
      removeUnit(ally2);
    });

    describe('get blocked nodes', () => {
      let blockedNodes: MapNode[];
      before(() => {
        blockedNodes = getSurroundedBlockedNodes(unit);
      });
      it("node (280, 80) should be in blockedNodes", () => {
        let node = getNodeFromMap(280, 80);
        assert.equal(isNodeInArray(node, blockedNodes), true);
      });
      it("node (320, 80) should not be in blockedNodes", () => {
        let node = getNodeFromMap(320, 80);
        assert.equal(isNodeInArray(node, blockedNodes), false);
      });
      it("node (360, 80) should not be in blockedNodes", () => {
        let node = getNodeFromMap(360, 80);
        assert.equal(isNodeInArray(node, blockedNodes), false);
      });
      it("node (280, 120) should be in blockedNodes", () => {
        let node = getNodeFromMap(280, 120);
        assert.equal(isNodeInArray(node, blockedNodes), true);
      });
      it("node (360, 120) should be in blockedNodes", () => {
        let node = getNodeFromMap(360, 120);
        assert.equal(isNodeInArray(node, blockedNodes), true);
      });
      it("node (280, 160) should not be in blockedNodes", () => {
        let node = getNodeFromMap(280, 160);
        assert.equal(isNodeInArray(node, blockedNodes), false);
      });
      it("node (320, 160) should not be in blockedNodes", () => {
        let node = getNodeFromMap(320, 160);
        assert.equal(isNodeInArray(node, blockedNodes), false);
      });
      it("node (360, 160) should not be in blockedNodes", () => {
        let node = getNodeFromMap(360, 160);
        assert.equal(isNodeInArray(node, blockedNodes), true);
      });
    });
  });
});
