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
    translateSpearmen
} from '../../../../../src/AI/processModule/translators/typesTranslators';
import {
    computerHasTooManySpearmen,
    playerHasTooManySpearmen,
    computerHasManySpearmen,
    playerHasManySpearmen,
    computerHasFewSpearmen,
    playerHasFewSpearmen,
    computerHasNoSpearmen,
    playerHasNoSpearmen,
    computerHasMoreSpearmen,
    playerHasMoreSpearmen,
    equalNumberOfSpearmen,
    noSpearmen
} from '../../../../../src/store/AI/translators/typesTranslators/spearmenTranslatorStore/spearmenTranslator';

describe('types translators test', () => {

    describe('spearmenTranslator (computerHasTooManySpearmen, playerHasManySpearmen)', () => {

        let computerUnit1:Unit, computerUnit2:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Hoplites', 560, 120, 'computer');
            computerUnit2 = createUnit('Pikemen', 440, 200, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('Pikemen', 160, 480, 'player');
            playerUnit4 = createUnit('Pikemen', 400, 280, 'player');
            playerUnit5 = createUnit('Archers', 880, 280, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);

            translateSpearmen();

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);

        });

        it('computerHasTooManySpearmen should be true', () => {
            assert.equal(computerHasTooManySpearmen, true);
        });

        it('playerHasTooManySpearmen should be false', () => {
            assert.equal(playerHasTooManySpearmen, false);
        });

        it('computerHasManySpearmen should be false', () => {
            assert.equal(computerHasManySpearmen, false);
        });

        it('playerHasManySpearmen should be true', () => {
            assert.equal(playerHasManySpearmen, true);
        });

        it('computerHasFewSpearmen should be false', () => {
            assert.equal(computerHasFewSpearmen, false);
        });

        it('playerHasFewSpearmen should be false', () => {
            assert.equal(playerHasFewSpearmen, false);
        });

        it('computerHasNoSpearmen should be false', () => {
            assert.equal(computerHasNoSpearmen, false);
        });

        it('playerHasNoSpearmen should be false', () => {
            assert.equal(playerHasNoSpearmen, false);
        });

        it('computerHasMoreSpearmen should be false', () => {
            assert.equal(computerHasMoreSpearmen, false);
        });

        it('playerHasMoreSpearmen should be false', () => {
            assert.equal(playerHasMoreSpearmen, false);
        });

        it('equalNumberOfSpearmen should be true', () => {
            assert.equal(equalNumberOfSpearmen, true);
        });

        it('noSpearmen should be false', () => {
            assert.equal(noSpearmen, false);
        });

    });

    describe('spearmenTranslator (computerHasManySpearmen, playerHasNoSpearmen)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Hoplites', 560, 120, 'computer');
            computerUnit2 = createUnit('Pikemen', 440, 200, 'computer');
            computerUnit3 = createUnit('Scouts', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('Militia', 160, 480, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);

            translateSpearmen();

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

        it('computerHasTooManySpearmen should be false', () => {
            assert.equal(computerHasTooManySpearmen, false);
        });

        it('playerHasTooManySpearmen should be false', () => {
            assert.equal(playerHasTooManySpearmen, false);
        });

        it('computerHasManySpearmen should be true', () => {
            assert.equal(computerHasManySpearmen, true);
        });

        it('playerHasManySpearmen should be false', () => {
            assert.equal(playerHasManySpearmen, false);
        });

        it('computerHasFewSpearmen should be false', () => {
            assert.equal(computerHasFewSpearmen, false);
        });

        it('playerHasFewSpearmen should be false', () => {
            assert.equal(playerHasFewSpearmen, false);
        });

        it('computerHasNoSpearmen should be false', () => {
            assert.equal(computerHasNoSpearmen, false);
        });

        it('playerHasNoSpearmen should be true', () => {
            assert.equal(playerHasNoSpearmen, true);
        });

        it('computerHasMoreSpearmen should be true', () => {
            assert.equal(computerHasMoreSpearmen, true);
        });

        it('playerHasMoreSpearmen should be false', () => {
            assert.equal(playerHasMoreSpearmen, false);
        });

        it('equalNumberOfSpearmen should be false', () => {
            assert.equal(equalNumberOfSpearmen, false);
        });

        it('noSpearmen should be false', () => {
            assert.equal(noSpearmen, false);
        });

    });

    describe('spearmenTranslator (computerHasNoSpearmen, playerHasNoSpearmen)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
    
        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');

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

            translateSpearmen();

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);

        });

        it('computerHasTooManySpearmen should be false', () => {
            assert.equal(computerHasTooManySpearmen, false);
        });

        it('playerHasTooManySpearmen should be false', () => {
            assert.equal(playerHasTooManySpearmen, false);
        });

        it('computerHasManySpearmen should be false', () => {
            assert.equal(computerHasManySpearmen, false);
        });

        it('playerHasManySpearmen should be false', () => {
            assert.equal(playerHasManySpearmen, false);
        });

        it('computerHasFewSpearmen should be false', () => {
            assert.equal(computerHasFewSpearmen, false);
        });

        it('playerHasFewSpearmen should be false', () => {
            assert.equal(playerHasFewSpearmen, false);
        });

        it('computerHasNoSpearmen should be true', () => {
            assert.equal(computerHasNoSpearmen, true);
        });

        it('playerHasNoSpearmen should be true', () => {
            assert.equal(playerHasNoSpearmen, true);
        });

        it('computerHasMoreSpearmen should be false', () => {
            assert.equal(computerHasMoreSpearmen, false);
        });

        it('playerHasMoreSpearmen should be false', () => {
            assert.equal(playerHasMoreSpearmen, false);
        });

        it('equalNumberOfSpearmen should be true', () => {
            assert.equal(equalNumberOfSpearmen, true);
        });

        it('noSpearmen should be true', () => {
            assert.equal(noSpearmen, true);
        });
    });
});