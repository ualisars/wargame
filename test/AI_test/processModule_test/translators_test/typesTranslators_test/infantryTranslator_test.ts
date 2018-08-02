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
    translateInfantry
} from '../../../../../src/AI/processModule/translators/typesTranslators/infantryTranslator';
import {
    computerHasTooManyInfantry,
    playerHasTooManyInfantry,
    computerHasManyInfantry,
    playerHasManyInfantry,
    computerHasFewInfantry,
    playerHasFewInfantry,
    computerHasNoInfantry,
    playerHasNoInfantry,
    computerHasMoreInfantry,
    playerHasMoreInfantry,
    equalNumberOfInfantry,
    computerHasLotsOfInfantry,
    playerHasLotsOfInfantry,
    computerHasInfantry,
    playerHasInfantry,
    noInfantry
} from '../../../../../src/store/AI/translators/typesTranslators/infantryTranslatorStore/infantryTranslator';

describe('types translators test', () => {

    describe('infantryTranslator (computerHasTooManyInfantry, playerHasNoInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Militia', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('Archers', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Archers', 880, 280, 'player');
            playerUnit6 = createUnit('Peltasts', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateInfantry();

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

        it('computerHasTooManyInfantry should be true', () => {
            assert.equal(computerHasTooManyInfantry, true);
        });

        it('playerHasTooManyInfantry should be false', () => {
            assert.equal(playerHasTooManyInfantry, false);
        });

        it('computerHasManyInfantry should be false', () => {
            assert.equal(computerHasManyInfantry, false);
        });

        it('playerHasManyInfantry should be false', () => {
            assert.equal(playerHasManyInfantry, false);
        });

        it('computerHasFewInfantry should be false', () => {
            assert.equal(computerHasFewInfantry, false);
        });

        it('playerHasFewInfantry should be false', () => {
            assert.equal(playerHasFewInfantry, false);
        });

        it('computerHasLotsOfInfantry should be true', () => {
            assert.equal(computerHasLotsOfInfantry, true);
        });

        it('playerHasLotsOfInfantry should be false', () => {
            assert.equal(playerHasLotsOfInfantry, false);
        });

        it('computerHasInfantry should be true', () => {
            assert.equal(computerHasInfantry, true);
        });

        it('playerHasInfantry should be false', () => {
            assert.equal(playerHasInfantry, false);
        });

        it('computerHasNoInfantry should be false', () => {
            assert.equal(computerHasNoInfantry, false);
        });

        it('playerHasNoInfantry should be true', () => {
            assert.equal(playerHasNoInfantry, true);
        });

        it('computerHasMoreInfantry should be true', () => {
            assert.equal(computerHasMoreInfantry, true);
        });

        it('playerHasMoreInfantry should be false', () => {
            assert.equal(playerHasMoreInfantry, false);
        });

        it('equalNumberOfInfantry should be false', () => {
            assert.equal(equalNumberOfInfantry, false);
        });

        it('noInfantry should be false', () => {
            assert.equal(noInfantry, false);
        });

    });

    describe('infantryTranslator (computerHasManyInfantry, playerHasManyInfantry, equalNumber)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Militia', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('Scouts', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Scouts', 880, 280, 'player');
            playerUnit6 = createUnit('LightInfantry', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateInfantry();

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

        it('computerHasTooManyInfantry should be false', () => {
            assert.equal(computerHasTooManyInfantry, false);
        });

        it('playerHasTooManyInfantry should be false', () => {
            assert.equal(playerHasTooManyInfantry, false);
        });

        it('computerHasManyInfantry should be true', () => {
            assert.equal(computerHasManyInfantry, true);
        });

        it('playerHasManyInfantry should be true', () => {
            assert.equal(playerHasManyInfantry, true);
        });

        it('computerHasFewInfantry should be false', () => {
            assert.equal(computerHasFewInfantry, false);
        });

        it('playerHasFewInfantry should be false', () => {
            assert.equal(playerHasFewInfantry, false);
        });

        it('computerHasLotsOfInfantry should be true', () => {
            assert.equal(computerHasLotsOfInfantry, true);
        });

        it('playerHasLotsOfInfantry should be true', () => {
            assert.equal(playerHasLotsOfInfantry, true);
        });

        it('computerHasInfantry should be true', () => {
            assert.equal(computerHasInfantry, true);
        });

        it('playerHasInfantry should be true', () => {
            assert.equal(playerHasInfantry, true);
        });

        it('computerHasNoInfantry should be false', () => {
            assert.equal(computerHasNoInfantry, false);
        });

        it('playerHasNoInfantry should be false', () => {
            assert.equal(playerHasNoInfantry, false);
        });

        it('computerHasMoreInfantry should be false', () => {
            assert.equal(computerHasMoreInfantry, false);
        });

        it('playerHasMoreInfantry should be false', () => {
            assert.equal(playerHasMoreInfantry, false);
        });

        it('equalNumberOfInfantry should be true', () => {
            assert.equal(equalNumberOfInfantry, true);
        });

        it('noInfantry should be false', () => {
            assert.equal(noInfantry, false);
        });

    });

    describe('infantryTranslator (computerHasFewInfantry, playerHasManyInfantry, computerHasMoreInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;
        let computerUnit10:Unit, computerUnit11:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Militia', 0, 320, 'computer');
            computerUnit7 = createUnit('LightCavalry', 1240, 240, 'computer');
            computerUnit8 = createUnit('HeavyCavalry', 680, 360, 'computer');
            computerUnit9 = createUnit('Militia', 800, 240, 'computer');
            computerUnit10 = createUnit('HeavyCavalry', 400, 240, 'computer');
            computerUnit11 = createUnit('LightCavalry', 1000, 480, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('Scouts', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Scouts', 880, 280, 'player');
            playerUnit6 = createUnit('LightInfantry', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateInfantry();

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
            removeUnit(computerUnit9);
            removeUnit(computerUnit10);
            removeUnit(computerUnit11);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);

        });

        it('computerHasTooManyInfantry should be false', () => {
            assert.equal(computerHasTooManyInfantry, false);
        });

        it('playerHasTooManyInfantry should be false', () => {
            assert.equal(playerHasTooManyInfantry, false);
        });

        it('computerHasManyInfantry should be false', () => {
            assert.equal(computerHasManyInfantry, false);
        });

        it('playerHasManyInfantry should be true', () => {
            assert.equal(playerHasManyInfantry, true);
        });

        it('computerHasFewInfantry should be true', () => {
            assert.equal(computerHasFewInfantry, true);
        });

        it('playerHasFewInfantry should be false', () => {
            assert.equal(playerHasFewInfantry, false);
        });

        it('computerHasLotsOfInfantry should be false', () => {
            assert.equal(computerHasLotsOfInfantry, false);
        });

        it('playerHasLotsOfInfantry should be true', () => {
            assert.equal(playerHasLotsOfInfantry, true);
        });

        it('computerHasInfantry should be true', () => {
            assert.equal(computerHasInfantry, true);
        });

        it('playerHasInfantry should be true', () => {
            assert.equal(playerHasInfantry, true);
        });

        it('computerHasNoInfantry should be false', () => {
            assert.equal(computerHasNoInfantry, false);
        });

        it('playerHasNoInfantry should be false', () => {
            assert.equal(playerHasNoInfantry, false);
        });

        it('computerHasMoreInfantry should be true', () => {
            assert.equal(computerHasMoreInfantry, true);
        });

        it('playerHasMoreInfantry should be false', () => {
            assert.equal(playerHasMoreInfantry, false);
        });

        it('equalNumberOfInfantry should be false', () => {
            assert.equal(equalNumberOfInfantry, false);
        });

        it('noInfantry should be false', () => {
            assert.equal(noInfantry, false);
        });

    });

    describe('infantryTranslator (computerHasNoInfantry, playerHasFewInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('Archers', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('Scouts', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Peltasts', 880, 280, 'player');
            playerUnit6 = createUnit('HeavyCavalry', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateInfantry();

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

        it('computerHasTooManyInfantry should be false', () => {
            assert.equal(computerHasTooManyInfantry, false);
        });

        it('playerHasTooManyInfantry should be false', () => {
            assert.equal(playerHasTooManyInfantry, false);
        });

        it('computerHasManyInfantry should be false', () => {
            assert.equal(computerHasManyInfantry, false);
        });

        it('playerHasManyInfantry should be false', () => {
            assert.equal(playerHasManyInfantry, false);
        });

        it('computerHasFewInfantry should be false', () => {
            assert.equal(computerHasFewInfantry, false);
        });

        it('playerHasFewInfantry should be true', () => {
            assert.equal(playerHasFewInfantry, true);
        });

        it('computerHasLotsOfInfantry should be false', () => {
            assert.equal(computerHasLotsOfInfantry, false);
        });

        it('playerHasLotsOfInfantry should be false', () => {
            assert.equal(playerHasLotsOfInfantry, false);
        });

        it('computerHasInfantry should be false', () => {
            assert.equal(computerHasInfantry, false);
        });

        it('playerHasInfantry should be true', () => {
            assert.equal(playerHasInfantry, true);
        });

        it('computerHasNoInfantry should be true', () => {
            assert.equal(computerHasNoInfantry, true);
        });

        it('playerHasNoInfantry should be false', () => {
            assert.equal(playerHasNoInfantry, false);
        });

        it('computerHasMoreInfantry should be false', () => {
            assert.equal(computerHasMoreInfantry, false);
        });

        it('playerHasMoreInfantry should be true', () => {
            assert.equal(playerHasMoreInfantry, true);
        });

        it('equalNumberOfInfantry should be false', () => {
            assert.equal(equalNumberOfInfantry, false);
        });

        it('noInfantry should be false', () => {
            assert.equal(noInfantry, false);
        });

    });

    describe('infantryTranslator (computerHasNoInfantry, playerHasNoInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Archers', 480, 160, 'computer');
            computerUnit6 = createUnit('Archers', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Peltasts', 880, 280, 'player');
            playerUnit6 = createUnit('HeavyCavalry', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateInfantry();

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

        it('computerHasTooManyInfantry should be false', () => {
            assert.equal(computerHasTooManyInfantry, false);
        });

        it('playerHasTooManyInfantry should be false', () => {
            assert.equal(playerHasTooManyInfantry, false);
        });

        it('computerHasManyInfantry should be false', () => {
            assert.equal(computerHasManyInfantry, false);
        });

        it('playerHasManyInfantry should be false', () => {
            assert.equal(playerHasManyInfantry, false);
        });

        it('computerHasFewInfantry should be false', () => {
            assert.equal(computerHasFewInfantry, false);
        });

        it('playerHasFewInfantry should be false', () => {
            assert.equal(playerHasFewInfantry, false);
        });

        it('computerHasLotsOfInfantry should be false', () => {
            assert.equal(computerHasLotsOfInfantry, false);
        });

        it('playerHasLotsOfInfantry should be false', () => {
            assert.equal(playerHasLotsOfInfantry, false);
        });

        it('computerHasInfantry should be false', () => {
            assert.equal(computerHasInfantry, false);
        });

        it('playerHasInfantry should be false', () => {
            assert.equal(playerHasInfantry, false);
        });

        it('computerHasNoInfantry should be true', () => {
            assert.equal(computerHasNoInfantry, true);
        });

        it('playerHasNoInfantry should be true', () => {
            assert.equal(playerHasNoInfantry, true);
        });

        it('computerHasMoreInfantry should be false', () => {
            assert.equal(computerHasMoreInfantry, false);
        });

        it('playerHasMoreInfantry should be false', () => {
            assert.equal(playerHasMoreInfantry, false);
        });

        it('equalNumberOfInfantry should be true', () => {
            assert.equal(equalNumberOfInfantry, true);
        });

        it('noInfantry should be true', () => {
            assert.equal(noInfantry, true);
        });
    });
});