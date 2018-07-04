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
    translateScouts
} from '../../../../../src/AI/processModule/translators/typesTranslators';
import {
    computerHasTooManyScouts,
    playerHasTooManyScouts,
    computerHasManyScouts,
    playerHasManyScouts,
    computerHasFewScouts,
    playerHasFewScouts,
    computerHasNoScouts,
    playerHasNoScouts,
    computerHasMoreScouts,
    playerHasMoreScouts,
    equalNumberOfScouts,
    noScouts
} from '../../../../../src/store/AI/translators/typesTranslators/scoutTranslatorStore/scoutTranslator';

describe('types translators test', () => {

    describe('scoutTranslator (computerHasFewScouts, playerHasTooManyScouts)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit;

        let playerUnit1:Unit, playerUnit2:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Scouts', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
           

            playerUnit1 = createUnit('Scouts', 440, 160, 'player');
            playerUnit2 = createUnit('Scouts', 920, 80, 'player');
            


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);

            translateScouts();

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
        
        });

        it('computerHasTooManyScouts should be false', () => {
            assert.equal(computerHasTooManyScouts, false);
        });

        it('playerHasTooManyScouts should be true', () => {
            assert.equal(playerHasTooManyScouts, true);
        });

        it('computerHasManyScouts should be false', () => {
            assert.equal(computerHasManyScouts, false);
        });

        it('playerHasManyScouts should be false', () => {
            assert.equal(playerHasManyScouts, false);
        });

        it('computerHasFewScouts should be true', () => {
            assert.equal(computerHasFewScouts, true);
        });

        it('playerHasFewScouts should be false', () => {
            assert.equal(playerHasFewScouts, false);
        });

        it('computerHasNoScouts should be false', () => {
            assert.equal(computerHasNoScouts, false);
        });

        it('playerHasNoScouts should be false', () => {
            assert.equal(playerHasNoScouts, false);
        });

        it('computerHasMoreScouts should be false', () => {
            assert.equal(computerHasMoreScouts, false);
        });

        it('playerHasMoreScouts should be true', () => {
            assert.equal(playerHasMoreScouts, true);
        });

        it('equalNumberOfScouts should be false', () => {
            assert.equal(equalNumberOfScouts, false);
        });

        it('noScouts should be false', () => {
            assert.equal(noScouts, false);
        });
    });

    describe('scoutTranslator (computerHasNoScouts, playerHasManyScouts)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit;

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
            playerUnit3 = createUnit('Scouts', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Scouts', 880, 280, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);

            translateScouts();

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

        });

        it('computerHasTooManyScouts should be false', () => {
            assert.equal(computerHasTooManyScouts, false);
        });

        it('playerHasTooManyScouts should be false', () => {
            assert.equal(playerHasTooManyScouts, false);
        });

        it('computerHasManyScouts should be false', () => {
            assert.equal(computerHasManyScouts, false);
        });

        it('playerHasManyScouts should be true', () => {
            assert.equal(playerHasManyScouts, true);
        });

        it('computerHasFewScouts should be false', () => {
            assert.equal(computerHasFewScouts, false);
        });

        it('playerHasFewScouts should be false', () => {
            assert.equal(playerHasFewScouts, false);
        });

        it('computerHasNoScouts should be true', () => {
            assert.equal(computerHasNoScouts, true);
        });

        it('playerHasNoScouts should be false', () => {
            assert.equal(playerHasNoScouts, false);
        });

        it('computerHasMoreScouts should be false', () => {
            assert.equal(computerHasMoreScouts, false);
        });

        it('playerHasMoreScouts should be true', () => {
            assert.equal(playerHasMoreScouts, true);
        });

        it('equalNumberOfScouts should be false', () => {
            assert.equal(equalNumberOfScouts, false);
        });

        it('noScouts should be false', () => {
            assert.equal(noScouts, false);
        });
    });

    describe('scoutTranslator (computerHasNoScouts, playerHasNoScouts)', () => {

        let computerUnit1:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('Pikemen', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);

            translateScouts();

        });

        after(() => {

            removeUnit(computerUnit1);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);

        });

        it('computerHasTooManyScouts should be false', () => {
            assert.equal(computerHasTooManyScouts, false);
        });

        it('playerHasTooManyScouts should be false', () => {
            assert.equal(playerHasTooManyScouts, false);
        });

        it('computerHasManyScouts should be false', () => {
            assert.equal(computerHasManyScouts, false);
        });

        it('playerHasManyScouts should be false', () => {
            assert.equal(playerHasManyScouts, false);
        });

        it('computerHasFewScouts should be false', () => {
            assert.equal(computerHasFewScouts, false);
        });

        it('playerHasFewScouts should be false', () => {
            assert.equal(playerHasFewScouts, false);
        });

        it('computerHasNoScouts should be true', () => {
            assert.equal(computerHasNoScouts, true);
        });

        it('playerHasNoScouts should be true', () => {
            assert.equal(playerHasNoScouts, true);
        });

        it('computerHasMoreScouts should be false', () => {
            assert.equal(computerHasMoreScouts, false);
        });

        it('playerHasMoreScouts should be false', () => {
            assert.equal(playerHasMoreScouts, false);
        });

        it('equalNumberOfScouts should be true', () => {
            assert.equal(equalNumberOfScouts, true);
        });

        it('noScouts should be true', () => {
            assert.equal(noScouts, true);
        });
    });
});