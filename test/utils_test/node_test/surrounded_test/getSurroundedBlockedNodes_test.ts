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
    let node: MapNode;
    before(() => {
      removeAllUnits();
      unit = createUnit('scouts', 320, 80, 'computer');
      ally1 = createUnit('scouts', 320, 120, 'computer');
      ally2 = createUnit('scouts', 280, 80, 'computer');
      node = getNodeFromMap(360, 80);
      ally2.setNextNode(node);
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
      it("node (320, 120) should be in blockedNodes", () => {
        let node = getNodeFromMap(320, 120);
        assert.equal(isNodeInArray(node, blockedNodes), true);
      });
      it("node (320, 80) should be in blockedNodes", () => {
        let node = getNodeFromMap(320, 80);
        assert.equal(isNodeInArray(node, blockedNodes), true);
      });
      it("node (280, 80) should be in blockedNodes", () => {
        let node = getNodeFromMap(280, 80);
        assert.equal(isNodeInArray(node, blockedNodes), true);
      });
      it("node (360, 80) should be in blockedNodes", () => {
        let node = getNodeFromMap(360, 80);
        assert.equal(isNodeInArray(node, blockedNodes), true);
      });
    });
  });
});
