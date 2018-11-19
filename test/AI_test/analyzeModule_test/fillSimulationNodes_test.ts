import { assert, expect } from 'chai';
import { Unit, createUnit } from '../../../src/unit';
import { removeAllUnits } from '../../../src/store/unit/units';
import { removeUnit } from '../../../src/unit/remove';
import SimulationNodes from '../../../src/store/AI/simulationNodes/SimulationNodes';
import { fillSimulationNodes } from '../../../src/AI/analyzeModule/fillSimulationNodes';
import { initialMap } from '../../../src/map/createMap/initialMap';

describe("analyze module test", () => {
    describe("fillSimulationNodes test", () => {
        let unit1:Unit, unit2: Unit;
        let enemy1: Unit, enemy2: Unit;
        before(() => {
            removeAllUnits();
            unit1 = createUnit('Archers', 1000, 40, 'computer');
            unit2 = createUnit('Pikemen', 1120, 360, 'computer');
            enemy1 = createUnit('Hoplites', 120, 40, 'player');
            enemy2 = createUnit('HeavyCavalry', 80, 440, 'player');
        });
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(enemy1);
            removeUnit(enemy2);
        });
        describe("fill simulation nodes", () => {
            let simulationNodes: SimulationNodes;
            before(() => {
                simulationNodes = fillSimulationNodes();
            });
            it("simulation nodes should consist at least one node", () => {
                assert.equal(simulationNodes.isEmpty(), false);
            });
            describe("extract all simulation nodes", () => {
                let nodesNumber: number = 0;
                before(() => {
                    while(!simulationNodes.isEmpty()) {
                        let node = simulationNodes.pop();
                        console.log('SIMULATION NODE', node);
                        nodesNumber += 1;
                    }
                });
                it("number of nodes in the simulation node should be less than number of nodes in the map", () => {
                    expect(nodesNumber).to.be.lessThan(initialMap.length);
                });
            });
        });
    });
});