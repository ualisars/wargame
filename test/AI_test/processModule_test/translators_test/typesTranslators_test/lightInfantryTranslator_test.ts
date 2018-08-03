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
    translateLightInfantry
} from '../../../../../src/AI/processModule/translators/typesTranslators';
import {
    computerHasTooManyLightInfantry,
    playerHasTooManyLightInfantry,
    computerHasManyLightInfantry,
    playerHasManyLightInfantry,
    computerHasFewLightInfantry,
    playerHasFewLightInfantry,
    computerHasNoLightInfantry,
    playerHasNoLightInfantry,
    computerHasMoreLightInfantry,
    playerHasMoreLightInfantry,
    equalNumberOfLightInfantry,
    computerHasLotsOfLightInfantry,
    playerHasLotsOfLightInfantry,
    computerHasLightInfantry,
    playerHasLightInfantry,
    noLightInfantry
} from '../../../../../src/store/AI/translators/typesTranslators/lightInfantryTranslatorStore/lightInfantryTranslator';

describe('types translators test', () => {

    describe('lightInfantryTranslator (computerHasManyLightInfantry, playerHasFewLightInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Militia', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Pikemen', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('LightCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('Archers', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Archers', 880, 280, 'player');
            playerUnit6 = createUnit('Militia', 560, 240, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

            translateLightInfantry();

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

        it('computerHasTooManyLightInfantry should be false', () => {
            assert.equal(computerHasTooManyLightInfantry, false);
        });

        it('playerHasTooManyLightInfantry should be false', () => {
            assert.equal(playerHasTooManyLightInfantry, false);
        });

        it('computerHasManyLightInfantry should be true', () => {
            assert.equal(computerHasManyLightInfantry, true);
        });

        it('playerHasManyLightInfantry should be false', () => {
            assert.equal(playerHasManyLightInfantry, false);
        });

        it('computerHasFewLightInfantry should be false', () => {
            assert.equal(computerHasFewLightInfantry, false);
        });

        it('playerHasFewLightInfantry should be true', () => {
            assert.equal(playerHasFewLightInfantry, true);
        });

        it('computerHasLotsOfLightInfantry should be true', () => {
            assert.equal(computerHasLotsOfLightInfantry, true);
        });

        it('playerHasLotsOfLightInfantry should be false', () => {
            assert.equal(playerHasLotsOfLightInfantry, false);
        });

        it('computerHasLightInfantry should be true', () => {
            assert.equal(computerHasLightInfantry, true);
        });

        it('playerHasLightInfantry should be true', () => {
            assert.equal(playerHasLightInfantry, true);
        });

        it('computerHasNoLightInfantry should be false', () => {
            assert.equal(computerHasNoLightInfantry, false);
        });

        it('playerHasNoLightInfantry should be false', () => {
            assert.equal(playerHasNoLightInfantry, false);
        });

        it('computerHasMoreLightInfantry should be true', () => {
            assert.equal(computerHasMoreLightInfantry, true);
        });

        it('playerHasMoreLightInfantry should be false', () => {
            assert.equal(playerHasMoreLightInfantry, false);
        });

        it('equalNumberOfLightInfantry should be false', () => {
            assert.equal(equalNumberOfLightInfantry, false);
        });

        it('noLightInfantry should be false', () => {
            assert.equal(noLightInfantry, false);
        });

    });

    describe('lightInfantryTranslator (computerHasManyLightInfantry, playerHasManyLightInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;
        let playerUnit7: Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Militia', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Pikemen', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyCavalry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('Archers', 160, 480, 'player');
            playerUnit4 = createUnit('Militia', 400, 280, 'player');
            playerUnit5 = createUnit('LightInfantry', 880, 280, 'player');
            playerUnit6 = createUnit('Militia', 560, 240, 'player');
            playerUnit7 = createUnit('Pikemen', 1280, 560, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);
            addToRevealedUnits(playerUnit7);

            translateLightInfantry();

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
            removeUnit(playerUnit7);

        });

        it('computerHasTooManyLightInfantry should be false', () => {
            assert.equal(computerHasTooManyLightInfantry, false);
        });

        it('playerHasTooManyLightInfantry should be false', () => {
            assert.equal(playerHasTooManyLightInfantry, false);
        });

        it('computerHasManyLightInfantry should be true', () => {
            assert.equal(computerHasManyLightInfantry, true);
        });

        it('playerHasManyLightInfantry should be true', () => {
            assert.equal(playerHasManyLightInfantry, true);
        });

        it('computerHasFewLightInfantry should be false', () => {
            assert.equal(computerHasFewLightInfantry, false);
        });

        it('playerHasFewLightInfantry should be false', () => {
            assert.equal(playerHasFewLightInfantry, false);
        });

        it('computerHasLotsOfLightInfantry should be true', () => {
            assert.equal(computerHasLotsOfLightInfantry, true);
        });

        it('playerHasLotsOfLightInfantry should be true', () => {
            assert.equal(playerHasLotsOfLightInfantry, true);
        });

        it('computerHasLightInfantry should be true', () => {
            assert.equal(computerHasLightInfantry, true);
        });

        it('playerHasLightInfantry should be true', () => {
            assert.equal(playerHasLightInfantry, true);
        });

        it('computerHasNoLightInfantry should be false', () => {
            assert.equal(computerHasNoLightInfantry, false);
        });

        it('playerHasNoLightInfantry should be false', () => {
            assert.equal(playerHasNoLightInfantry, false);
        });

        it('computerHasMoreLightInfantry should be false', () => {
            assert.equal(computerHasMoreLightInfantry, false);
        });

        it('playerHasMoreLightInfantry should be true', () => {
            assert.equal(playerHasMoreLightInfantry, true);
        });

        it('equalNumberOfLightInfantry should be false', () => {
            assert.equal(equalNumberOfLightInfantry, false);
        });

        it('noLightInfantry should be false', () => {
            assert.equal(noLightInfantry, false);
        });
        
    });

    describe('lightInfantryTranslator (computerHasTooManyLightInfantry, playerHasTooManyLightInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;
        let playerUnit7: Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Militia', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Militia', 480, 160, 'computer');
            computerUnit6 = createUnit('Militia', 0, 320, 'computer');

            playerUnit1 = createUnit('LightInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('Militia', 160, 480, 'player');
            playerUnit4 = createUnit('Militia', 400, 280, 'player');
            playerUnit5 = createUnit('LightInfantry', 880, 280, 'player');
            playerUnit6 = createUnit('Militia', 560, 240, 'player');
            playerUnit7 = createUnit('Pikemen', 1280, 560, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);
            addToRevealedUnits(playerUnit7);

            translateLightInfantry();

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
            removeUnit(playerUnit7);

        });

        it('computerHasTooManyLightInfantry should be true', () => {
            assert.equal(computerHasTooManyLightInfantry, true);
        });

        it('playerHasTooManyLightInfantry should be true', () => {
            assert.equal(playerHasTooManyLightInfantry, true);
        });

        it('computerHasManyLightInfantry should be false', () => {
            assert.equal(computerHasManyLightInfantry, false);
        });

        it('playerHasManyLightInfantry should be false', () => {
            assert.equal(playerHasManyLightInfantry, false);
        });

        it('computerHasFewLightInfantry should be false', () => {
            assert.equal(computerHasFewLightInfantry, false);
        });

        it('playerHasFewLightInfantry should be false', () => {
            assert.equal(playerHasFewLightInfantry, false);
        });

        it('computerHasLotsOfLightInfantry should be true', () => {
            assert.equal(computerHasLotsOfLightInfantry, true);
        });

        it('playerHasLotsOfLightInfantry should be true', () => {
            assert.equal(playerHasLotsOfLightInfantry, true);
        });

        it('computerHasLightInfantry should be true', () => {
            assert.equal(computerHasLightInfantry, true);
        });

        it('playerHasLightInfantry should be true', () => {
            assert.equal(playerHasLightInfantry, true);
        });

        it('computerHasNoLightInfantry should be false', () => {
            assert.equal(computerHasNoLightInfantry, false);
        });

        it('playerHasNoLightInfantry should be false', () => {
            assert.equal(playerHasNoLightInfantry, false);
        });

        it('computerHasMoreLightInfantry should be false', () => {
            assert.equal(computerHasMoreLightInfantry, false);
        });

        it('playerHasMoreLightInfantry should be true', () => {
            assert.equal(playerHasMoreLightInfantry, true);
        });

        it('equalNumberOfLightInfantry should be false', () => {
            assert.equal(equalNumberOfLightInfantry, false);
        });

        it('noLightInfantry should be false', () => {
            assert.equal(noLightInfantry, false);
        });
        
    });

    describe('lightInfantryTranslator (computerHasNoLightInfantry, playerHasTooManyLightInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;
        let playerUnit7: Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Archers', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Peltasts', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('LightInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('Militia', 160, 480, 'player');
            playerUnit4 = createUnit('Militia', 400, 280, 'player');
            playerUnit5 = createUnit('LightInfantry', 880, 280, 'player');
            playerUnit6 = createUnit('Militia', 560, 240, 'player');
            playerUnit7 = createUnit('Pikemen', 1280, 560, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);
            addToRevealedUnits(playerUnit7);

            translateLightInfantry();

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
            removeUnit(playerUnit7);

        });

        it('computerHasTooManyLightInfantry should be false', () => {
            assert.equal(computerHasTooManyLightInfantry, false);
        });

        it('playerHasTooManyLightInfantry should be true', () => {
            assert.equal(playerHasTooManyLightInfantry, true);
        });

        it('computerHasManyLightInfantry should be false', () => {
            assert.equal(computerHasManyLightInfantry, false);
        });

        it('playerHasManyLightInfantry should be false', () => {
            assert.equal(playerHasManyLightInfantry, false);
        });

        it('computerHasFewLightInfantry should be false', () => {
            assert.equal(computerHasFewLightInfantry, false);
        });

        it('playerHasFewLightInfantry should be false', () => {
            assert.equal(playerHasFewLightInfantry, false);
        });

        it('computerHasLotsOfLightInfantry should be false', () => {
            assert.equal(computerHasLotsOfLightInfantry, false);
        });

        it('playerHasLotsOfLightInfantry should be true', () => {
            assert.equal(playerHasLotsOfLightInfantry, true);
        });

        it('computerHasLightInfantry should be false', () => {
            assert.equal(computerHasLightInfantry, false);
        });

        it('playerHasLightInfantry should be true', () => {
            assert.equal(playerHasLightInfantry, true);
        });

        it('computerHasNoLightInfantry should be true', () => {
            assert.equal(computerHasNoLightInfantry, true);
        });

        it('playerHasNoLightInfantry should be false', () => {
            assert.equal(playerHasNoLightInfantry, false);
        });

        it('computerHasMoreLightInfantry should be false', () => {
            assert.equal(computerHasMoreLightInfantry, false);
        });

        it('playerHasMoreLightInfantry should be true', () => {
            assert.equal(playerHasMoreLightInfantry, true);
        });

        it('equalNumberOfLightInfantry should be false', () => {
            assert.equal(equalNumberOfLightInfantry, false);
        });

        it('noLightInfantry should be false', () => {
            assert.equal(noLightInfantry, false);
        });
        
    });

    describe('lightInfantryTranslator (computerHasNoLightInfantry, playerHasNoLightInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;
        let playerUnit7: Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Archers', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Peltasts', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Scouts', 920, 80, 'player');
            playerUnit3 = createUnit('Scouts', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('HeavyInfantry', 880, 280, 'player');
            playerUnit6 = createUnit('Scouts', 560, 240, 'player');
            playerUnit7 = createUnit('Pikemen', 1280, 560, 'player');


            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);
            addToRevealedUnits(playerUnit7);

            translateLightInfantry();

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
            removeUnit(playerUnit7);

        });

        it('computerHasTooManyLightInfantry should be false', () => {
            assert.equal(computerHasTooManyLightInfantry, false);
        });

        it('playerHasTooManyLightInfantry should be false', () => {
            assert.equal(playerHasTooManyLightInfantry, false);
        });

        it('computerHasManyLightInfantry should be false', () => {
            assert.equal(computerHasManyLightInfantry, false);
        });

        it('playerHasManyLightInfantry should be false', () => {
            assert.equal(playerHasManyLightInfantry, false);
        });

        it('computerHasFewLightInfantry should be false', () => {
            assert.equal(computerHasFewLightInfantry, false);
        });

        it('playerHasFewLightInfantry should be false', () => {
            assert.equal(playerHasFewLightInfantry, false);
        });

        it('computerHasLotsOfLightInfantry should be false', () => {
            assert.equal(computerHasLotsOfLightInfantry, false);
        });

        it('playerHasLotsOfLightInfantry should be false', () => {
            assert.equal(playerHasLotsOfLightInfantry, false);
        });

        it('computerHasLightInfantry should be false', () => {
            assert.equal(computerHasLightInfantry, false);
        });

        it('playerHasLightInfantry should be false', () => {
            assert.equal(playerHasLightInfantry, false);
        });

        it('computerHasNoLightInfantry should be true', () => {
            assert.equal(computerHasNoLightInfantry, true);
        });

        it('playerHasNoLightInfantry should be true', () => {
            assert.equal(playerHasNoLightInfantry, true);
        });

        it('computerHasMoreLightInfantry should be false', () => {
            assert.equal(computerHasMoreLightInfantry, false);
        });

        it('playerHasMoreLightInfantry should be false', () => {
            assert.equal(playerHasMoreLightInfantry, false);
        });

        it('equalNumberOfLightInfantry should be true', () => {
            assert.equal(equalNumberOfLightInfantry, true);
        });

        it('noLightInfantry should be true', () => {
            assert.equal(noLightInfantry, true);
        });
    });
});