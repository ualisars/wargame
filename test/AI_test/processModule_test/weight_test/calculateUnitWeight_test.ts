import { assert } from 'chai';
import { Unit, createUnit } from '../../../../src/unit';
import { removeAllUnits } from '../../../../src/store/unit/units';
import { removeUnit } from '../../../../src/unit/remove';
import { calculateUnitWeight } from '../../../../src/AI/processModule/weight/calculateUnitWeight';
import { addToRevealedUnits } from '../../../../src/store/AI/enemies/revealedEnemies';

describe("AI process module test", () => {
    describe("calculateUnitWeight test", () => {
        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit; 
        let computerUnit4:Unit, computerUnit5:Unit;
        let playerUnit1: Unit, playerUnit2: Unit, playerUnit3: Unit;
        let playerUnit4: Unit, playerUnit5: Unit, playerUnit6: Unit;

        before(() => {
            removeAllUnits();
            computerUnit1 = createUnit('HeavyInfantry', 320, 80, 'computer');
            computerUnit2 = createUnit('Pikemen', 40, 320, 'computer');
            computerUnit3 = createUnit('Pikemen', 80, 280, 'computer');
            computerUnit4 = createUnit('Militia', 200, 440, 'computer');
            computerUnit5 = createUnit('Hoplites', 160, 40, 'computer');

            playerUnit1 = createUnit('LightInfantry', 360, 400, 'player');
            playerUnit2 = createUnit('Archers', 400, 480, 'player');
            playerUnit3 = createUnit('Militia', 520, 480, 'player');
            playerUnit4 = createUnit('HeavyCavalry', 400, 320, 'player');
            playerUnit5 = createUnit('LightCavalry', 600, 40, 'player');
            playerUnit6 = createUnit('LightCavalry', 600, 320, 'player');

            computerUnit1.weight = 40;
            computerUnit2.weight = 80;
            computerUnit3.weight = 80;
            computerUnit4.weight = 20;
            computerUnit5.weight = 60;

            playerUnit1.weight = 40;
            playerUnit2.weight = 40;
            playerUnit3.weight = 20;
            playerUnit4.weight = 90;
            playerUnit5.weight = 70;
            playerUnit6.weight = 70;

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);
        });

        after(() => {
            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);
        });

        it("computerUnit1 weight should be 60", () => {
            calculateUnitWeight(computerUnit1);
            assert.equal(computerUnit1.weight, 60);
        });
        it("computerUnit2 weight should be 100", () => {
            calculateUnitWeight(computerUnit2);
            assert.equal(computerUnit2.weight, 100);
        });
        it("computerUnit3 weight should be 100", () => {
            calculateUnitWeight(computerUnit3);
            assert.equal(computerUnit3.weight, 100);
        });
        it("computerUnit4 weight should be 20", () => {
            calculateUnitWeight(computerUnit3);
            assert.equal(computerUnit4.weight, 20);
        });
        it("computerUnit5 weight should be 100", () => {
            calculateUnitWeight(computerUnit5);
            assert.equal(computerUnit5.weight, 100);
        });
        it("playerUnit1 weight should be 40", () => {
            calculateUnitWeight(playerUnit1);
            assert.equal(playerUnit1.weight, 40);
        });
        it("playerUnit2 weight should be 68", () => {
            calculateUnitWeight(playerUnit2);
            assert.equal(playerUnit2.weight, 68);
        });
        it("playerUnit3 weight should be 20", () => {
            calculateUnitWeight(playerUnit3);
            assert.equal(playerUnit3.weight, 20);
        });
        it("playerUnit4 weight should be 54", () => {
            calculateUnitWeight(playerUnit4);
            assert.equal(playerUnit4.weight, 54);
        });
        it("playerUnit5 weight should be 42", () => {
            calculateUnitWeight(playerUnit5);
            assert.equal(playerUnit5.weight, 42);
        });
        it("playerUnit6 weight should be 42", () => {
            calculateUnitWeight(playerUnit6);
            assert.equal(playerUnit6.weight, 42);
        });
    });
});
