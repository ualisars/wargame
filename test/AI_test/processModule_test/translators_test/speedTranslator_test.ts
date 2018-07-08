import {assert} from 'chai';
import {
    translateSpeed
} from '../../../../src/AI/processModule/translators/speedTranslator';
import {
    speedSuperiority,
    speedAdvantage,
    equalSpeed,
    speedDisadvantage,
    speedCompleteDisadvantage,
} from '../../../../src/store/AI/translators/speedTranslator/speedTranslatorStore';
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

describe('translators test', () => {

    describe('translateSpeed test (speedSuperiority)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
            computerUnit6 = createUnit('LightCavalry', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Hoplites', 920, 80, 'player');
            playerUnit3 = createUnit('Pikemen', 560, 240, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);

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

        });

        it('speedSuperiority should be true', () => {

            translateSpeed();

            assert.equal(speedSuperiority, true);
            assert.equal(speedAdvantage, false);
            assert.equal(equalSpeed, false);
            assert.equal(speedDisadvantage, false);
            assert.equal(speedCompleteDisadvantage, false);

        });
    });

    describe('translateSpeed test (speedAdvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('Militia', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('LightInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('Militia', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('Hoplites', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');

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

        it('speedAdvantage should be true', () => {

            translateSpeed();

            assert.equal(speedSuperiority, false);
            assert.equal(speedAdvantage, true);
            assert.equal(equalSpeed, false);
            assert.equal(speedDisadvantage, false);
            assert.equal(speedCompleteDisadvantage, false);

        });
    });

    describe('translateSpeed test (equalSpeed)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('Militia', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('LightInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('LightInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('LightCavalry', 880, 280, 'player');
            playerUnit6 = createUnit('LightInfantry', 560, 240, 'player');

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

        it('equalSpeed should be true', () => {

            translateSpeed();

            assert.equal(speedSuperiority, false);
            assert.equal(speedAdvantage, false);
            assert.equal(equalSpeed, true);
            assert.equal(speedDisadvantage, false);
            assert.equal(speedCompleteDisadvantage, false);

        });
    });

    describe('translateSpeed test (speedDisadvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('Pikemen', 280, 200, 'computer');
            computerUnit4 = createUnit('Hoplites', 480, 80, 'computer');
            computerUnit5 = createUnit('Militia', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('LightInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('LightInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('LightCavalry', 880, 280, 'player');
            playerUnit6 = createUnit('LightInfantry', 560, 240, 'player');

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

        it('speedDisadvantage should be true', () => {

            translateSpeed();

            assert.equal(speedSuperiority, false);
            assert.equal(speedAdvantage, false);
            assert.equal(equalSpeed, false);
            assert.equal(speedDisadvantage, true);
            assert.equal(speedCompleteDisadvantage, false);

        });
    });

    describe('translateSpeed test (speedCompleteDisadvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Hoplites', 560, 120, 'computer');
            computerUnit2 = createUnit('Hoplites', 440, 200, 'computer');
            computerUnit3 = createUnit('Pikemen', 280, 200, 'computer');
            computerUnit4 = createUnit('Hoplites', 480, 80, 'computer');
            computerUnit5 = createUnit('Militia', 480, 160, 'computer');
            computerUnit6 = createUnit('Hoplites', 0, 320, 'computer');

            playerUnit1 = createUnit('LightCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('LightCavalry', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('LightCavalry', 880, 280, 'player');
            playerUnit6 = createUnit('LightCavalry', 560, 240, 'player');

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

        it('speedCompleteDisadvantage should be true', () => {

            translateSpeed();

            assert.equal(speedSuperiority, false);
            assert.equal(speedAdvantage, false);
            assert.equal(equalSpeed, false);
            assert.equal(speedDisadvantage, false);
            assert.equal(speedCompleteDisadvantage, true);

        });
    });
});