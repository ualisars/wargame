import {assert} from 'chai';
import {
    calculateMeleeDamageRatio
} from '../../../../src/AI/processModule/ratio/meleeDamageRatio';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import {
    addToRevealedUnits,
    revealedUnits
} from '../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../src/unit/types/Unit';

describe('AI processModule ratioTest', () => {

    describe('calculateMeleeDamage test1', () => {

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

            // assign speed manually in order to avoid future issues
            computerUnit1.meleeDamage = 8;
            computerUnit2.meleeDamage = 12;
            computerUnit3.meleeDamage = 7;
            computerUnit4.meleeDamage = 8;
            computerUnit5.meleeDamage = 16;
            computerUnit6.meleeDamage = 7;

            playerUnit1.meleeDamage = 12;
            playerUnit2.meleeDamage = 7;
            playerUnit3.meleeDamage = 8;
            playerUnit4.meleeDamage = 7;
            playerUnit5.meleeDamage = 7;
            playerUnit6.meleeDamage = 24;

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

        it('computerUnit1.meleeDamage = 8', () => {
            assert.equal(computerUnit1.meleeDamage, 8);
        });

        it('computerUnit2.meleeDamage = 12', () => {
            assert.equal(computerUnit2.meleeDamage, 12);
        });

        it('computerUnit3.meleeDamage = 7', () => {
            assert.equal(computerUnit3.meleeDamage, 7);
        });

        it('computerUnit4.meleeDamage = 8', () => {
            assert.equal(computerUnit4.meleeDamage, 8);
        });

        it('computerUnit5.meleeDamage = 16', () => {
            assert.equal(computerUnit5.meleeDamage, 16);
        });

        it('computerUnit6.meleeDamage = 7', () => {
            assert.equal(computerUnit6.meleeDamage, 7);
        });

        it('playerUnit1.meleeDamage = 12', () => {
            assert.equal(playerUnit1.meleeDamage, 12);
        });

        it('playerUnit2.meleeDamage = 7', () => {
            assert.equal(playerUnit2.meleeDamage, 7);
        });

        it('playerUnit3.meleeDamage = 8', () => {
            assert.equal(playerUnit3.meleeDamage, 8);
        });

        it('playerUnit4.meleeDamage = 7', () => {
            assert.equal(playerUnit4.meleeDamage, 7);
        });

        it('playerUnit5.meleeDamage = 7', () => {
            assert.equal(playerUnit5.meleeDamage, 7);
        });

        it('playerUnit6.meleeDamage = 24', () => {
            assert.equal(playerUnit6.meleeDamage, 24);
        });

        it('meleeRatio should be equal to 0.48', () => {
            let meleeRatio: number = calculateMeleeDamageRatio();
            assert.equal(meleeRatio, 0.47);
        });
    });

    describe('calculateMeleeDamage test2', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Pikemen', 440, 200, 'computer');
            computerUnit3 = createUnit('Hoplites', 280, 200, 'computer');
            computerUnit4 = createUnit('LightInfantry', 480, 80, 'computer');

            playerUnit1 = createUnit('Scouts', 440, 160, 'player');
            playerUnit2 = createUnit('Pikemen', 920, 80, 'player');
            playerUnit3 = createUnit('Militia', 160, 480, 'player');

            // assign speed manually in order to avoid future issues
            computerUnit1.meleeDamage = 24;
            computerUnit2.meleeDamage = 24;
            computerUnit3.meleeDamage = 16;
            computerUnit4.meleeDamage = 8;

            playerUnit1.meleeDamage = 7;
            playerUnit2.meleeDamage = 24;
            playerUnit3.meleeDamage = 7;

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);

        });

        it('computerUnit1.meleeDamage = 24', () => {
            assert.equal(computerUnit1.meleeDamage, 24);
        });

        it('computerUnit2.meleeDamage = 24', () => {
            assert.equal(computerUnit2.meleeDamage, 24);
        });

        it('computerUnit3.meleeDamage = 16', () => {
            assert.equal(computerUnit3.meleeDamage, 16);
        });

        it('computerUnit4.meleeDamage = 8', () => {
            assert.equal(computerUnit4.meleeDamage, 8);
        });


        it('playerUnit1.meleeDamage = 7', () => {
            assert.equal(playerUnit1.meleeDamage, 7);
        });

        it('playerUnit2.meleeDamage = 24', () => {
            assert.equal(playerUnit2.meleeDamage, 24);
        });

        it('playerUnit3.meleeDamage = 7', () => {
            assert.equal(playerUnit3.meleeDamage, 7);
        });

        it('meleeRatio should be equal to 0.65', () => {
            let meleeRatio: number = calculateMeleeDamageRatio();
            assert.equal(meleeRatio, 0.65);
        });
    });

    describe('calculateMeleeDamage test3', () => {

        let computerUnit1:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('HeavyCavalry', 560, 120, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('LightInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('Scouts', 160, 480, 'player');

            // assign speed manually in order to avoid future issues
            computerUnit1.meleeDamage = 12;

            playerUnit1.meleeDamage = 12;
            playerUnit2.meleeDamage = 8;
            playerUnit3.meleeDamage = 7;

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

        it('computerUnit1.meleeDamage = 12', () => {
            assert.equal(computerUnit1.meleeDamage, 12);
        });

        it('playerUnit1.meleeDamage = 12', () => {
            assert.equal(playerUnit1.meleeDamage, 12);
        });

        it('playerUnit2.meleeDamage = 8', () => {
            assert.equal(playerUnit2.meleeDamage, 8);
        });

        it('playerUnit3.meleeDamage = 7', () => {
            assert.equal(playerUnit3.meleeDamage, 7);
        });

        it('meleeRatio should be equal to 0.31', () => {
            let meleeRatio: number = calculateMeleeDamageRatio();
            assert.equal(meleeRatio, 0.31);
        });
    });
});