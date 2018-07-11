import {assert} from 'chai';
import {
    calculateTotalRatio
} from '../../../../src/AI/processModule/ratio';
import {createUnit} from '../../../../src/unit/create';
import {
    computerUnits,
    removeAllUnits,
    removeAllComputerUnits
} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import {
    addToRevealedUnits
} from '../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../src/unit/types/Unit';

describe('AI processModule ratioTest', () => {

    describe('calculateTotalRatio test 1', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('LightInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('Scouts', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');

            //assign weight manually in order to avoid future issues
            computerUnit1.weight = 80;
            computerUnit2.weight = 100;
            computerUnit3.weight = 20;
            computerUnit4.weight = 40;
            computerUnit5.weight = 70;
            computerUnit6.weight = 20;

            playerUnit1.weight = 60;
            playerUnit2.weight = 30;
            playerUnit3.weight = 40;
            playerUnit4.weight = 20;
            playerUnit5.weight = 20;
            playerUnit6.weight = 90;


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
            removeUnit(computerUnit6);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);

        });

        it('computerUnit1.weight = 80', () => {
            assert.equal(computerUnit1.weight, 80);
        });

        it('computerUnit2.weight = 100', () => {
            assert.equal(computerUnit2.weight, 100);
        });

        it('computerUnit3.weight = 20', () => {
            assert.equal(computerUnit3.weight, 20);
        });

        it('computerUnit4.weight = 40', () => {
            assert.equal(computerUnit4.weight, 40);
        });

        it('computerUnit5.weight = 70', () => {
            assert.equal(computerUnit5.weight, 70);
        });

        it('computerUnit6.weight = 20', () => {
            assert.equal(computerUnit6.weight, 20);
        });

        it('playerUnit1.weight = 60', () => {
            assert.equal(playerUnit1.weight, 60);
        });

        it('playerUnit2.weight = 30', () => {
            assert.equal(playerUnit2.weight, 30);
        });

        it('playerUnit3.weight = 40', () => {
            assert.equal(playerUnit3.weight, 40);
        });

        it('playerUnit4.weight = 20', () => {
            assert.equal(playerUnit4.weight, 20);
        });

        it('playerUnit5.weight = 20', () => {
            assert.equal(playerUnit5.weight, 20);
        });

        it('playerUnit6.weight = 90', () => {
            assert.equal(playerUnit6.weight, 90);
        });

        it('total ratio should be 0.56', () => {
            let totalRatio: number = calculateTotalRatio();
            assert.equal(totalRatio, 0.56);
        });
    });

    describe('calculateTotalRatio test 2', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit;

        let playerUnit1:Unit, playerUnit2:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Hoplites', 560, 120, 'computer');
            computerUnit2 = createUnit('Militia', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Pikemen', 480, 80, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');

            //assign weight manually in order to avoid future issues
            computerUnit1.weight = 70;
            computerUnit2.weight = 30;
            computerUnit3.weight = 20;
            computerUnit4.weight = 90;

            playerUnit1.weight = 60;
            playerUnit2.weight = 40;


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
        });

        it('computerUnit1.weight = 70', () => {
            assert.equal(computerUnit1.weight, 70);
        });

        it('computerUnit2.weight = 30', () => {
            assert.equal(computerUnit2.weight, 30);
        });

        it('computerUnit3.weight = 20', () => {
            assert.equal(computerUnit3.weight, 20);
        });

        it('computerUnit4.weight = 90', () => {
            assert.equal(computerUnit4.weight, 90);
        });

        it('playerUnit1.weight = 60', () => {
            assert.equal(playerUnit1.weight, 60);
        });

        it('playerUnit2.weight = 40', () => {
            assert.equal(playerUnit2.weight, 40);
        });

        it('total ratio should be 0.68', () => {
            let totalRatio: number = calculateTotalRatio();
            assert.equal(totalRatio, 0.68);
        });
    });

    describe('calculateTotalRatio test 3', () => {

        let computerUnit1:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('HeavyCavalry', 560, 120, 'computer');
        
            playerUnit1 = createUnit('Scouts', 440, 160, 'player');
            playerUnit2 = createUnit('LightInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');

            //assign weight manually in order to avoid future issues
            computerUnit1.weight = 100;

            playerUnit1.weight = 20;
            playerUnit2.weight = 40;
            playerUnit3.weight = 40;

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);

        });

        after(() => {

            removeUnit(computerUnit1);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);

        });

        it('computerUnit1.weight = 100', () => {
            assert.equal(computerUnit1.weight, 100);
        });

        it('playerUnit1.weight = 20', () => {
            assert.equal(playerUnit1.weight, 20);
        });

        it('playerUnit2.weight = 40', () => {
            assert.equal(playerUnit2.weight, 40);
        });

        it('playerUnit3.weight = 40', () => {
            assert.equal(playerUnit3.weight, 40);
        });

        it('total ratio should be 0.5', () => {
            let totalRatio: number = calculateTotalRatio();
            assert.equal(totalRatio, 0.5);
        });
    });
});