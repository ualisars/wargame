import { expect } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeAllUnits } from "../../../../src/store/unit/units";
import { removeUnit } from "../../../../src/unit/remove";
import { getExplorationNodes } from '../../../../src/utils/unit/exploration/getExplorationNode';

describe("unit exploration utils", () => {
    describe("getExplorationNode test", () => {
        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;
        before(() => {
            removeAllUnits();
            unit1 = createUnit('Hoplites', 440, 160, 'player');
            unit2 = createUnit('HeavyInfantry', 400, 160, 'player');
            unit3 = createUnit('HeavyCavalry', 480, 200, 'player');
            unit4 = createUnit('Scouts', 440, 240, 'player');
        });
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);
        });
        describe("get first exploration node", () => {
            let explorationNode: any;
            before(() => {
                explorationNode = getExplorationNodes();
            });
            it("exploration node x should be at least be 240", () => {
                expect(explorationNode.x).to.be.at.least(240);
            });
            it("exploration node x should be at most be 560", () => {
                expect(explorationNode.x).to.be.at.most(560);
            });
            it("exploration node y should be at least be 0", () => {
                expect(explorationNode.y).to.be.at.least(0);
            });
            it("exploration node y should be at most be 320", () => {
                expect(explorationNode.y).to.be.at.most(320);
            });
        });
        describe("get second exploration node", () => {
            let explorationNode: any;
            before(() => {
                explorationNode = getExplorationNodes();
            });
            it("exploration node x should be at least be 240", () => {
                expect(explorationNode.x).to.be.at.least(240);
            });
            it("exploration node x should be at most be 560", () => {
                expect(explorationNode.x).to.be.at.most(560);
            });
            it("exploration node y should be at least be 0", () => {
                expect(explorationNode.y).to.be.at.least(0);
            });
            it("exploration node y should be at most be 320", () => {
                expect(explorationNode.y).to.be.at.most(320);
            });
        });
    });
});