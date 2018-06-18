import {assert} from 'chai';
import {
    calculateTypesRatio
} from '../../../../../src/AI/processModule/ratio/typesRatio';
import {createUnit} from '../../../../../src/unit/create';
import {removeAllUnits} from '../../../../../src/store/unit/units';
import {removeUnit} from '../../../../../src/unit/remove';
import {
    addToRevealedUnits,
    revealedUnits
} from '../../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../../src/unit/types/Unit';
import {
    translateSkirmishers
} from '../../../../../src/AI/processModule/translators/typesTranslators/skirmisherTranslator';
import {
    computerHasTooManySkirmishers,
    playerHasTooManySkirmishers,
    computerHasManySkirmishers,
    playerHasManySkirmishers,
    computerHasMoreSkirmishers,
    playerHasMoreSkirmishers,
    skirmisherMinority,
    noSkirmishers
} from '../../../../../src/store/AI/translators/typesTranslators/shirmisherTranslatorStore/skirmisherTranslatorStore';
import { assessOffensivePoints } from '../../../../../src/AI/strategyModule/decisionUnit/strategy/offensivePoints/assessOffensivePoints';

describe('types translators test', () => {

    describe('translateSkirmishers test (computer has too many skirmishers)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('Archers', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('Archers', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('Archers', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Archers', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateSkirmishers();

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

        it('computerHasTooManySkirmishers should be true', () => {
            assert.equal(computerHasTooManySkirmishers, true);
        });

        it('playerHasTooManySkirmishers should be false', () => {
            assert.equal(playerHasTooManySkirmishers, false);
        });

        it('computerHasManySkirmishers should be false', () => {
            assert.equal(computerHasManySkirmishers, false);
        });

        it('playerHasManySkirmishers should be true', () => {
            assert.equal(playerHasManySkirmishers, true);
        });

        it('computerHasMoreSkirmishers should be false', () => {
            assert.equal(computerHasMoreSkirmishers, true);
        });

        it('playerHasMoreSkirmishers should be false', () => {
            assert.equal(playerHasMoreSkirmishers, false);
        });

        it('skirmisherMinority should be false', () => {
            assert.equal(skirmisherMinority, false);
        });

        it('noSkirmishers should be false', () => {
            assert.equal(noSkirmishers, false);
        });

    });

    describe('translateSkirmishers test (computer has many skirmishers)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('Militia', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('Pikemen', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('Archers', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Archers', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateSkirmishers();

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

        it('computerHasTooManySkirmishers should be true', () => {
            assert.equal(computerHasTooManySkirmishers, false);
        });

        it('playerHasTooManySkirmishers should be false', () => {
            assert.equal(playerHasTooManySkirmishers, false);
        });

        it('computerHasManySkirmishers should be true', () => {
            assert.equal(computerHasManySkirmishers, true);
        });

        it('playerHasManySkirmishers should be true', () => {
            assert.equal(playerHasManySkirmishers, true);
        });

        it('computerHasMoreSkirmishers should be false', () => {
            assert.equal(computerHasMoreSkirmishers, false);
        });

        it('playerHasMoreSkirmishers should be false', () => {
            assert.equal(playerHasMoreSkirmishers, false);
        });

        it('skirmisherMinority should be false', () => {
            assert.equal(skirmisherMinority, false);
        });

        it('noSkirmishers should be false', () => {
            assert.equal(noSkirmishers, false);
        });

    });

    describe('translateSkirmishers test (skirmishers minority)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('Militia', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Scouts', 480, 160, 'computer');
            computerUnit6 = createUnit('Pikemen', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 160, 480, 'player');
            playerUnit4 = createUnit('HeavyCavalry', 400, 280, 'player');
            playerUnit5 = createUnit('Archers', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateSkirmishers();

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

        it('computerHasTooManySkirmishers should be false', () => {
            assert.equal(computerHasTooManySkirmishers, false);
        });

        it('playerHasTooManySkirmishers should be false', () => {
            assert.equal(playerHasTooManySkirmishers, false);
        });

        it('computerHasManySkirmishers should be false', () => {
            assert.equal(computerHasManySkirmishers, false);
        });

        it('playerHasManySkirmishers should be false', () => {
            assert.equal(playerHasManySkirmishers, false);
        });

        it('computerHasMoreSkirmishers should be false', () => {
            assert.equal(computerHasMoreSkirmishers, false);
        });

        it('playerHasMoreSkirmishers should be false', () => {
            assert.equal(playerHasMoreSkirmishers, false);
        });

        it('skirmisherMinority should be true', () => {
            assert.equal(skirmisherMinority, true);
        });

        it('noSkirmishers should be false', () => {
            assert.equal(noSkirmishers, false);
        });

    });

    describe('translateSkirmishers test (no skirmishers)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('Militia', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('Militia', 480, 80, 'computer');
            computerUnit5 = createUnit('Scouts', 480, 160, 'computer');
            computerUnit6 = createUnit('Pikemen', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 160, 480, 'player');
            playerUnit4 = createUnit('HeavyCavalry', 400, 280, 'player');
            playerUnit5 = createUnit('Hoplites', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateSkirmishers();

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

        it('computerHasTooManySkirmishers should be false', () => {
            assert.equal(computerHasTooManySkirmishers, false);
        });

        it('playerHasTooManySkirmishers should be false', () => {
            assert.equal(playerHasTooManySkirmishers, false);
        });

        it('computerHasManySkirmishers should be false', () => {
            assert.equal(computerHasManySkirmishers, false);
        });

        it('playerHasManySkirmishers should be false', () => {
            assert.equal(playerHasManySkirmishers, false);
        });

        it('computerHasMoreSkirmishers should be false', () => {
            assert.equal(computerHasMoreSkirmishers, false);
        });

        it('playerHasMoreSkirmishers should be false', () => {
            assert.equal(playerHasMoreSkirmishers, false);
        });

        it('skirmisherMinority should be false', () => {
            assert.equal(skirmisherMinority, false);
        });

        it('noSkirmishers should be true', () => {
            assert.equal(noSkirmishers, true);
        });

    });

});