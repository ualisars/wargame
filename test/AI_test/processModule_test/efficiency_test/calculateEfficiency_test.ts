import { assert, expect } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeAllUnits, computerUnits } from "../../../../src/store/unit/units";
import { removeUnit } from "../../../../src/unit/remove";
import { calculateEfficiency } from "../../../../src/AI/processModule/efficiency/calculateEfficiency";
import { addUnitIntoVisibleUnits } from '../../../../src/store';
import { gridSize } from '../../../../src/config';
import { getNodeFromMap } from '../../../../src/utils';

describe("AI process module test", () => {
    describe("calculateEfficiency with revealed enemies test", () => {
        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7: Unit, computerUnit8: Unit;
        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;
        let playerUnit7: Unit;

        before(() => {
            removeAllUnits();
            computerUnit1 = createUnit('HeavyCavalry', 120, 40, 'computer');
            computerUnit2 = createUnit('HeavyInfantry', 520, 200, 'computer');
            computerUnit3 = createUnit('Archers', 800, 440, 'computer');
            computerUnit4 = createUnit('Pikemen', 880, 280, 'computer');
            computerUnit5 = createUnit('Hoplites', 1060, 40, 'computer');
            computerUnit6 = createUnit('HeavyInfantry', 1120, 40, 'computer');
            computerUnit7 = createUnit('LightInfantry', 1200, 80, 'computer');
            computerUnit8 = createUnit('LightInfantry', 120, 440, 'computer');

            playerUnit1 = createUnit('Archers', 40, 40, 'player');
            playerUnit2 = createUnit('Archers', 0, 80, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 0, 480, 'player');
            playerUnit4 = createUnit('LightCavalry', 760, 440, 'player');
            playerUnit5 = createUnit('Militia', 1080, 40, 'player');
            playerUnit6 = createUnit('Militia', 1120, 80, 'player');
            playerUnit7 = createUnit('LightInfantry', 1080, 120, 'player');

            addUnitIntoVisibleUnits(playerUnit1);
            addUnitIntoVisibleUnits(playerUnit2);
            addUnitIntoVisibleUnits(playerUnit3);
            addUnitIntoVisibleUnits(playerUnit4);
            addUnitIntoVisibleUnits(playerUnit5);
            addUnitIntoVisibleUnits(playerUnit6);
            addUnitIntoVisibleUnits(playerUnit7);
        });

        after(() => {
            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);
            removeUnit(computerUnit7);
            removeUnit(computerUnit8);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);
            removeUnit(playerUnit7);
        });

        describe("calculate effficiency for computerUnit1", () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit1, computerUnits);
            });
            it("computerUnit1 efficiency should be more than 80", () => {
                expect(efficiency).to.be.at.least(80);
            });
            it("computerUnit1 efficiency should be less than 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });

        describe("calculate effficiency for computerUnit2", () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit2, computerUnits);
            });
            it("computerUnit1 efficiency should be less than 30", () => {
                expect(efficiency).to.be.at.most(30);
            });
            it("computerUnit1 efficiency should be more than 0", () => {
                expect(efficiency).to.be.at.most(0);
            });
        });

        describe("calculate effficiency for computerUnit3", () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit3, computerUnits);
            });
            it("computerUnit1 efficiency should be more than 60", () => {
                expect(efficiency).to.be.at.least(60);
            });
            it("computerUnit1 efficiency should be less than 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });

        describe("calculate effficiency for computerUnit4", () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit4, computerUnits);
            });
            it("computerUnit1 efficiency should be more than 60", () => {
                expect(efficiency).to.be.at.least(60);
            });
            it("computerUnit1 efficiency should be less than 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });

        describe("calculate effficiency for computerUnit5", () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit5, computerUnits);
            });
            it("computerUnit1 efficiency should be more than 70", () => {
                expect(efficiency).to.be.at.least(70);
            });
            it("computerUnit1 efficiency should be less than 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });

        describe("calculate effficiency for computerUnit6", () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit6, computerUnits);
            });
            it("computerUnit1 efficiency should be more than 70", () => {
                expect(efficiency).to.be.at.least(70);
            });
            it("computerUnit1 efficiency should be less than 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });

        describe("calculate effficiency for computerUnit7", () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit7, computerUnits);
            });
            it("computerUnit1 efficiency should be more than 70", () => {
                expect(efficiency).to.be.at.least(70);
            });
            it("computerUnit1 efficiency should be less than 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });

        describe("calculate effficiency for computerUnit8", () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit8, computerUnits);
            });
            it("computerUnit1 efficiency should be 0", () => {
                assert.equal(efficiency, 0);
            });
        });
    });

    describe("calculateEfficiency no revealed enemies", () => {
        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit;
        let playerUnit1:Unit;
        let updatedComputerUnit1: Unit, updatedComputerUnit3: Unit;
        let updatedUnits: Unit[] = [];
        before(() => {
            removeAllUnits();
            computerUnit1 = createUnit('Scouts', 1200, 40, 'computer');
            computerUnit2 = createUnit('LightInfantry', 1160, 320, 'computer');
            computerUnit3 = createUnit('Scouts', 1160, 400, 'computer');
            computerUnit4 = createUnit('Pikemen', 1200, 480, 'computer');
            playerUnit1 = createUnit('Hoplites', 80, 280, 'player');
            
            updatedComputerUnit1 = Object.create(computerUnit1);
            updatedComputerUnit1.setX(playerUnit1.currentNode.x - gridSize);
            updatedComputerUnit1.setY(playerUnit1.currentNode.y);
            updatedComputerUnit1.setCurrentNode(getNodeFromMap(playerUnit1.currentNode.x - gridSize, playerUnit1.currentNode.y));
            updatedComputerUnit3 = Object.create(computerUnit3);
            updatedComputerUnit3.setX(playerUnit1.currentNode.x);
            updatedComputerUnit3.setY(playerUnit1.currentNode.y + gridSize);
            updatedComputerUnit3.setCurrentNode(getNodeFromMap(playerUnit1.currentNode.x, playerUnit1.currentNode.y + gridSize * 2));

            updatedUnits.push(updatedComputerUnit1);
            updatedUnits.push(computerUnit2);
            updatedUnits.push(updatedComputerUnit3);
            updatedUnits.push(computerUnit4);
        });

        after(() => {
            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(playerUnit1);
        });

        describe('calculate efficiency for computerUnit1 with initial position', () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit1, computerUnits);
            });
            it("computerUnit1 efficiency should be 0", () => {
                assert.equal(efficiency, 0);
            });
        });
        describe('calculate efficiency for computerUnit2', () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit2, computerUnits);
            });
            it("computerUnit1 efficiency should at least 0", () => {
                expect(efficiency).to.be.at.least(0);
            });
            it("computerUnit2 efficiency should at most 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });
        describe('calculate efficiency for computerUnit3 with initial position', () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit3, computerUnits);
            });
            it("computerUnit1 efficiency should be 0", () => {
                assert.equal(efficiency, 0);
            });
        });
        describe('calculate efficiency for computerUnit4', () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(computerUnit4, computerUnits);
            });
            it("computerUnit1 efficiency should at least 0", () => {
                expect(efficiency).to.be.at.least(0);
            });
            it("computerUnit2 efficiency should at most 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });
        describe('calculate efficiency for computerUnit1 with updated position', () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(updatedComputerUnit1, updatedUnits);
            });
            it("computerUnit1 efficiency should be at least 20", () => {
                expect(efficiency).to.be.at.least(20);
            });
            it("computerUnit1 efficiency should be at most 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });
        describe('calculate efficiency for computerUnit3 with updated position', () => {
            let efficiency: number;
            before(() => {
                efficiency = calculateEfficiency(updatedComputerUnit3, updatedUnits);
            });
            it("computerUnit1 efficiency should be at least 40", () => {
                expect(efficiency).to.be.at.least(40);
            });
            it("computerUnit1 efficiency should be at most 100", () => {
                expect(efficiency).to.be.at.most(100);
            });
        });
    });
});