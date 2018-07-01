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
    translateHeavyInfantry
} from '../../../../../src/AI/processModule/translators/typesTranslators';
import {
    computerHasTooManyHeavyInfantry,
    playerHasTooManyHeavyInfantry,
    computerHasManyHeavyInfantry,
    playerHasManyHeavyInfantry,
    computerHasFewHeavyInfantry,
    playerHasFewHeavyInfantry,
    computerHasNoHeavyInfantry,
    playerHasNoHeavyInfantry,
    computerHasMoreHeavyInfantry,
    playerHasMoreHeavyInfantry,
    equalNumberOfHeavyInfantry,
    noHeavyInfantry
} from '../../../../../src/store/AI/translators/typesTranslators/heavyInfantryTranslatorStore/heavyInfantryTranslator';


describe('types translators test', () => {

    describe('heavyInfantryTranslator (computerHasNoHeavyInfantry, playerHasFewHeavyInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Militia', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('Scouts', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Pikemen', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Archers', 880, 280, 'player');
            playerUnit6 = createUnit('Militia', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateHeavyInfantry();

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

        it('computerHasTooManyHeavyInfantry should be false', () => {
            assert.equal(computerHasTooManyHeavyInfantry, false);
        });

        it('playerHasTooManyHeavyInfantry should be false', () => {
            assert.equal(playerHasTooManyHeavyInfantry, false);
        });

        it('computerHasManyHeavyInfantry should be false', () => {
            assert.equal(computerHasManyHeavyInfantry, false);
        });

        it('playerHasManyHeavyInfantry should be false', () => {
            assert.equal(playerHasManyHeavyInfantry, false);
        });

        it('computerHasFewHeavyInfantry should be false', () => {
            assert.equal(computerHasFewHeavyInfantry, false);
        });

        it('playerHasFewHeavyInfantry should be true', () => {
            assert.equal(playerHasFewHeavyInfantry, true);
        });

        it('computerHasNoHeavyInfantry should be true', () => {
            assert.equal(computerHasNoHeavyInfantry, true);
        });

        it('playerHasNoHeavyInfantry should be false', () => {
            assert.equal(playerHasNoHeavyInfantry, false);
        });

        it('computerHasMoreHeavyInfantry should be false', () => {
            assert.equal(computerHasMoreHeavyInfantry, false);
        });

        it('playerHasMoreHeavyInfantry should be true', () => {
            assert.equal(playerHasMoreHeavyInfantry, true);
        });

        it('equalNumberOfHeavyInfantry should be false', () => {
            assert.equal(equalNumberOfHeavyInfantry, false);
        });

        it('noHeavyInfantry should be false', () => {
            assert.equal(noHeavyInfantry, false);
        });

    });

    describe('heavyInfantryTranslator (computerHasTooManyHeavyInfantry, playerHasManyInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;
        let playerUnit7:Unit, playerUnit8:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Militia', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('HeavyInfantry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyInfantry', 0, 320, 'computer');
            computerUnit7 = createUnit('HeavyInfantry', 1280, 480, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('HeavyInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Archers', 880, 280, 'player');
            playerUnit6 = createUnit('HeavyInfantry', 560, 240, 'player');
            playerUnit7 = createUnit('HeavyInfantry', 840, 160, 'player');
            playerUnit8 = createUnit('Militia', 1120, 360, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);
            addToRevealedUnits(playerUnit7);
            addToRevealedUnits(playerUnit8);

            translateHeavyInfantry();

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);
            removeUnit(computerUnit7);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);
            removeUnit(playerUnit7);
            removeUnit(playerUnit8);

        });

        it('computerHasTooManyHeavyInfantry should be true', () => {
            assert.equal(computerHasTooManyHeavyInfantry, true);
        });

        it('playerHasTooManyHeavyInfantry should be false', () => {
            assert.equal(playerHasTooManyHeavyInfantry, false);
        });

        it('computerHasManyHeavyInfantry should be false', () => {
            assert.equal(computerHasManyHeavyInfantry, false);
        });

        it('playerHasManyHeavyInfantry should be true', () => {
            assert.equal(playerHasManyHeavyInfantry, true);
        });

        it('computerHasFewHeavyInfantry should be false', () => {
            assert.equal(computerHasFewHeavyInfantry, false);
        });

        it('playerHasFewHeavyInfantry should be false', () => {
            assert.equal(playerHasFewHeavyInfantry, false);
        });

        it('computerHasNoHeavyInfantry should be false', () => {
            assert.equal(computerHasNoHeavyInfantry, false);
        });

        it('playerHasNoHeavyInfantry should be false', () => {
            assert.equal(playerHasNoHeavyInfantry, false);
        });

        it('computerHasMoreHeavyInfantry should be true', () => {
            assert.equal(computerHasMoreHeavyInfantry, true);
        });

        it('playerHasMoreHeavyInfantry should be false', () => {
            assert.equal(playerHasMoreHeavyInfantry, false);
        });

        it('equalNumberOfHeavyInfantry should be false', () => {
            assert.equal(equalNumberOfHeavyInfantry, false);
        });

        it('noHeavyInfantry should be false', () => {
            assert.equal(noHeavyInfantry, false);
        });

    });

    describe('heavyInfantryTranslator (computerHasFewHeavyInfantry, playerHasTooManyHeavyInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Militia', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('Scouts', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyInfantry', 0, 320, 'computer');
            computerUnit7 = createUnit('Hoplites', 1280, 480, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);

            translateHeavyInfantry();

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);
            removeUnit(computerUnit7);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);

        });

        it('computerHasTooManyHeavyInfantry should be false', () => {
            assert.equal(computerHasTooManyHeavyInfantry, false);
        });

        it('playerHasTooManyHeavyInfantry should be true', () => {
            assert.equal(playerHasTooManyHeavyInfantry, true);
        });

        it('computerHasManyHeavyInfantry should be false', () => {
            assert.equal(computerHasManyHeavyInfantry, false);
        });

        it('playerHasManyHeavyInfantry should be false', () => {
            assert.equal(playerHasManyHeavyInfantry, false);
        });

        it('computerHasFewHeavyInfantry should be true', () => {
            assert.equal(computerHasFewHeavyInfantry, true);
        });

        it('playerHasFewHeavyInfantry should be false', () => {
            assert.equal(playerHasFewHeavyInfantry, false);
        });

        it('computerHasNoHeavyInfantry should be false', () => {
            assert.equal(computerHasNoHeavyInfantry, false);
        });

        it('playerHasNoHeavyInfantry should be false', () => {
            assert.equal(playerHasNoHeavyInfantry, false);
        });

        it('computerHasMoreHeavyInfantry should be false', () => {
            assert.equal(computerHasMoreHeavyInfantry, false);
        });

        it('playerHasMoreHeavyInfantry should be false', () => {
            assert.equal(playerHasMoreHeavyInfantry, false);
        });

        it('equalNumberOfHeavyInfantry should be true', () => {
            assert.equal(equalNumberOfHeavyInfantry, true);
        });

        it('noHeavyInfantry should be false', () => {
            assert.equal(noHeavyInfantry, false);
        });

    });

    describe('heavyInfantryTranslator (computerHasNoHeavyInfantry, playerHasNoHeavyInfantry)', () => {

        let computerUnit1:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Militia', 560, 120, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);

            translateHeavyInfantry();

        });

        after(() => {

            removeUnit(computerUnit1);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);

        });

        it('computerHasTooManyHeavyInfantry should be false', () => {
            assert.equal(computerHasTooManyHeavyInfantry, false);
        });

        it('playerHasTooManyHeavyInfantry should be false', () => {
            assert.equal(playerHasTooManyHeavyInfantry, false);
        });

        it('computerHasManyHeavyInfantry should be false', () => {
            assert.equal(computerHasManyHeavyInfantry, false);
        });

        it('playerHasManyHeavyInfantry should be false', () => {
            assert.equal(playerHasManyHeavyInfantry, false);
        });

        it('computerHasFewHeavyInfantry should be false', () => {
            assert.equal(computerHasFewHeavyInfantry, false);
        });

        it('playerHasFewHeavyInfantry should be false', () => {
            assert.equal(playerHasFewHeavyInfantry, false);
        });

        it('computerHasNoHeavyInfantry should be true', () => {
            assert.equal(computerHasNoHeavyInfantry, true);
        });

        it('playerHasNoHeavyInfantry should be true', () => {
            assert.equal(playerHasNoHeavyInfantry, true);
        });

        it('computerHasMoreHeavyInfantry should be false', () => {
            assert.equal(computerHasMoreHeavyInfantry, false);
        });

        it('playerHasMoreHeavyInfantry should be false', () => {
            assert.equal(playerHasMoreHeavyInfantry, false);
        });

        it('equalNumberOfHeavyInfantry should be true', () => {
            assert.equal(equalNumberOfHeavyInfantry, true);
        });

        it('noHeavyInfantry should be true', () => {
            assert.equal(noHeavyInfantry, true);
        });

    });
});