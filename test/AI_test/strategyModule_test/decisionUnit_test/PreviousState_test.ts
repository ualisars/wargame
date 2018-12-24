import { assert } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeAllUnits } from "../../../../src/store/unit/units";
import { removeUnit } from "../../../../src/unit/remove";
import { addUnitIntoVisibleUnits, removeUnitFromVisibleUnits } from "../../../../src/store";
import PreviousState from "../../../../src/AI/strategyModule/decisionUnit/mapChangesDetection/PreviousState";

describe('AI strategy module test', () => {
    describe('PreviousState test', () => {
        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let previousState: PreviousState;

        before(() => {
            removeAllUnits();
            computerUnit1 = createUnit('HeavyCavalry', 120, 40, 'computer');
            computerUnit2 = createUnit('HeavyInfantry', 520, 200, 'computer');
            computerUnit3 = createUnit('Archers', 800, 440, 'computer');
        
            playerUnit1 = createUnit('Archers', 40, 40, 'player');
            playerUnit2 = createUnit('Archers', 0, 80, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 0, 480, 'player');
    
            previousState = new PreviousState();
        });

        after(() => {
            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
        });

        describe("initialState state", () => {
            it("computer units number should be 3", () => {
                assert.equal(previousState.previousComputerUnits.length, 3);
            });
            it("player units number should be 3", () => {
                assert.equal(previousState.previousPlayerUnits.length, 3);
            });
            it("visible for computer units number should be 0", () => {
                assert.equal(previousState.previousVisibleForComputerUnits.length, 0);
            });
        });

        describe("playerUnit1 become visible", () => {
            before(() => {
                addUnitIntoVisibleUnits(playerUnit1);
            });
            it("computer units number should be 3", () => {
                assert.equal(previousState.previousComputerUnits.length, 3);
            });
            it("player units number should be 3", () => {
                assert.equal(previousState.previousPlayerUnits.length, 3);
            });
            it("visible for computer units number should be 0", () => {
                assert.equal(previousState.previousVisibleForComputerUnits.length, 0);
            });
            describe("set previous state", () => {
                before(() => {
                    previousState.setPreviousState();
                });
                it("computer units number should be 3", () => {
                    assert.equal(previousState.previousComputerUnits.length, 3);
                });
                it("player units number should be 3", () => {
                    assert.equal(previousState.previousPlayerUnits.length, 3);
                });
                it("visible for computer units number should be 1", () => {
                    assert.equal(previousState.previousVisibleForComputerUnits.length, 1);
                });
            });
        });

        describe("playerUnit2 and playerUnit3 become visible", () => {
            before(() => {
                addUnitIntoVisibleUnits(playerUnit2);
                addUnitIntoVisibleUnits(playerUnit3);
            });
            it("computer units number should be 3", () => {
                assert.equal(previousState.previousComputerUnits.length, 3);
            });
            it("player units number should be 3", () => {
                assert.equal(previousState.previousPlayerUnits.length, 3);
            });
            it("visible for computer units number should be 1", () => {
                assert.equal(previousState.previousVisibleForComputerUnits.length, 1);
            });
            describe("set previous state", () => {
                before(() => {
                    previousState.setPreviousState();
                });
                it("computer units number should be 3", () => {
                    assert.equal(previousState.previousComputerUnits.length, 3);
                });
                it("player units number should be 3", () => {
                    assert.equal(previousState.previousPlayerUnits.length, 3);
                });
                it("visible for computer units number should be 3", () => {
                    assert.equal(previousState.previousVisibleForComputerUnits.length, 3);
                });
            });
        });

        describe("playerUnit3 hides", () => {
            before(() => {
                removeUnitFromVisibleUnits(playerUnit3);
            });
            it("computer units number should be 3", () => {
                assert.equal(previousState.previousComputerUnits.length, 3);
            });
            it("player units number should be 3", () => {
                assert.equal(previousState.previousPlayerUnits.length, 3);
            });
            it("visible for computer units number should be 3", () => {
                assert.equal(previousState.previousVisibleForComputerUnits.length, 3);
            });
            describe("set previous state", () => {
                before(() => {
                    previousState.setPreviousState();
                });
                it("computer units number should be 3", () => {
                    assert.equal(previousState.previousComputerUnits.length, 3);
                });
                it("player units number should be 3", () => {
                    assert.equal(previousState.previousPlayerUnits.length, 3);
                });
                it("visible for computer units number should be 2", () => {
                    assert.equal(previousState.previousVisibleForComputerUnits.length, 2);
                });
            });
        });

        describe("computerUnit1 is destroyed", () => {
            before(() => {
                removeUnit(computerUnit1);
            });
            it("computer units number should be 3", () => {
                assert.equal(previousState.previousComputerUnits.length, 3);
            });
            it("player units number should be 3", () => {
                assert.equal(previousState.previousPlayerUnits.length, 3);
            });
            it("visible for computer units number should be 2", () => {
                assert.equal(previousState.previousVisibleForComputerUnits.length, 2);
            });
            describe("set previous state", () => {
                before(() => {
                    previousState.setPreviousState();
                });
                it("computer units number should be 2", () => {
                    assert.equal(previousState.previousComputerUnits.length, 2);
                });
                it("player units number should be 3", () => {
                    assert.equal(previousState.previousPlayerUnits.length, 3);
                });
                it("visible for computer units number should be 2", () => {
                    assert.equal(previousState.previousVisibleForComputerUnits.length, 2);
                });
            });
        });
    });
});