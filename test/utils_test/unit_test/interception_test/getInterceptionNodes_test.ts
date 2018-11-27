import { assert } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeAllUnits } from "../../../../src/store/unit/units";
import { removeUnit } from "../../../../src/unit/remove";
import MapNode from "../../../../src/map/nodes/MapNode";
import { getInterceptionNodes } from "../../../../src/utils/unit/interception/getInterceptionNodes";
import { getNodeFromMap } from "../../../../src/utils";
import { isNodeInArray } from '../../../../src/utils/node/general/isNodeInArray';

describe("unit interception utils", () => {
    describe("getInterceptionNodes test", () => {
        let unit1: Unit, unit2: Unit;
        before(() => {
            removeAllUnits();
            unit1 = createUnit('HeavyCavalry', 0, 0, 'computer');
            unit2 = createUnit('HeavyCavalry', 320, 120, 'computer');
        });
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
        });
        describe("get unit1 interception nodes", () => {
            let interceptionNodes: MapNode[];
            before(() => {
                interceptionNodes = getInterceptionNodes(unit1);
            });
            it("interception nodes consists of 2 nodes", () => {
                assert.equal(interceptionNodes.length, 2);
            });
            it("node (0, 0) should not be in the interception nodes", () => {
                let node = getNodeFromMap(0, 0);
                assert.equal(isNodeInArray(node, interceptionNodes), false);
            });
            it("node (40, 0) should be in the interception nodes", () => {
                let node = getNodeFromMap(40, 0);
                assert.equal(isNodeInArray(node, interceptionNodes), true);
            });
            it("node (0, 40) should be in the interception nodes", () => {
                let node = getNodeFromMap(0, 40);
                assert.equal(isNodeInArray(node, interceptionNodes), true);
            });
            it("node (40, 40) should not be in the interception nodes", () => {
                let node = getNodeFromMap(40, 40);
                assert.equal(isNodeInArray(node, interceptionNodes), false);
            });
        });
        describe("get unit2 interception nodes", () => {
            let interceptionNodes: MapNode[];
            before(() => {
                interceptionNodes = getInterceptionNodes(unit2);
            });
            it("interception nodes consists of 4 nodes", () => {
                assert.equal(interceptionNodes.length, 4);
            });
            it("node (280, 80) should not be in the interception nodes", () => {
                let node = getNodeFromMap(280, 80);
                assert.equal(isNodeInArray(node, interceptionNodes), false);
            });
            it("node (320, 80) should be in the interception nodes", () => {
                let node = getNodeFromMap(320, 80);
                assert.equal(isNodeInArray(node, interceptionNodes), true);
            });
            it("node (360, 80) should not be in the interception nodes", () => {
                let node = getNodeFromMap(360, 80);
                assert.equal(isNodeInArray(node, interceptionNodes), false);
            });
            it("node (280, 120) should be in the interception nodes", () => {
                let node = getNodeFromMap(280, 120);
                assert.equal(isNodeInArray(node, interceptionNodes), true);
            });
            it("node (320, 120) should not be in the interception nodes", () => {
                let node = getNodeFromMap(320, 120);
                assert.equal(isNodeInArray(node, interceptionNodes), false);
            });
            it("node (360, 120) should be in the interception nodes", () => {
                let node = getNodeFromMap(360, 120);
                assert.equal(isNodeInArray(node, interceptionNodes), true);
            });
            it("node (280, 160) should not be in the interception nodes", () => {
                let node = getNodeFromMap(280, 160);
                assert.equal(isNodeInArray(node, interceptionNodes), false);
            });
            it("node (320, 160) should be in the interception nodes", () => {
                let node = getNodeFromMap(320, 160);
                assert.equal(isNodeInArray(node, interceptionNodes), true);
            });
            it("node (360, 160) should not be in the interception nodes", () => {
                let node = getNodeFromMap(360, 160);
                assert.equal(isNodeInArray(node, interceptionNodes), false);
            });
        });
    });
});