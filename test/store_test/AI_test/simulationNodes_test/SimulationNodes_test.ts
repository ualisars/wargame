import { assert } from 'chai';
import MapNode from "../../../../src/map/nodes/MapNode";
import { getNodeFromMap } from "../../../../src/utils";
import SimulationNodes from "../../../../src/store/AI/simulationNodes/SimulationNodes";

describe("AI store test", () => {
    describe("SimulationNodes test", () => {
        let node1: MapNode, node2: MapNode, node3: MapNode;
        let node4: MapNode, node5: MapNode, node6: MapNode;
        let simulationNodes: SimulationNodes;
        before(() => {
            node1 = getNodeFromMap(120, 240);
            node2 = getNodeFromMap(160, 80);
            node3 = getNodeFromMap(1120, 320);
            node4 = getNodeFromMap(640, 280);
            node5 = getNodeFromMap(720, 80);
            node6 = getNodeFromMap(840, 160);
            simulationNodes = new SimulationNodes();
            simulationNodes.push(node1);
            simulationNodes.push(node2);
            simulationNodes.push(node3);
            simulationNodes.push(node4);
            simulationNodes.push(node5);
            simulationNodes.push(node6);
            simulationNodes.push(node4);
            simulationNodes.push(node6);
        });
        describe("extract first node", () => {
            let firstNode: MapNode;
            before(() => {
                firstNode = simulationNodes.pop();
            });
            it("first node id is equal to node6 id", () => {
                assert.equal(firstNode.id, node6.id);
            });
            it("first node x is equal to node6 x", () => {
                assert.equal(firstNode.x, node6.x);
            });
            it("first node y is equal to node6 y", () => {
                assert.equal(firstNode.y, node6.y);
            });
        });
        describe("extract second node", () => {
            let secondNode: MapNode;
            before(() => {
                secondNode = simulationNodes.pop();
            });
            it("second node id is equal to node5 id", () => {
                assert.equal(secondNode.id, node5.id);
            });
            it("second node x is equal to node5 x", () => {
                assert.equal(secondNode.x, node5.x);
            });
            it("second node y is equal to node5 y", () => {
                assert.equal(secondNode.y, node5.y);
            });
        });
        describe("move pointer to the fifth element", () => {
            before(() => {
                simulationNodes.moveTop(2);
            });
            describe("extract third node", () => {
                let thirdNode: MapNode;
                before(() => {
                    thirdNode = simulationNodes.pop();
                });
                it("third node id is equal to node2 id", () => {
                    assert.equal(thirdNode.id, node2.id);
                });
                it("third node x is equal to node2 x", () => {
                    assert.equal(thirdNode.x, node2.x);
                });
                it("third node y is equal to node2 y", () => {
                    assert.equal(thirdNode.y, node2.y);
                });
            });
            describe("extract last node", () => {
                let lastNode: MapNode;
                before(() => {
                    lastNode = simulationNodes.pop();
                });
                it("last node id is equal to node1 id", (done) => {
                    assert.equal(lastNode.id, node1.id);
                    done();
                });
                it("last node x is equal to node1 x", (done) => {
                    assert.equal(lastNode.x, node1.x);
                    done();
                });
                it("last node y is equal to node1 y", (done) => {
                    assert.equal(lastNode.y, node1.y);
                    done();
                });
                it("no node should left in the simulation nodes", (done) => {
                    assert.equal(simulationNodes.isEmpty(), true);
                    done();
                });
            });
        });
    });
});