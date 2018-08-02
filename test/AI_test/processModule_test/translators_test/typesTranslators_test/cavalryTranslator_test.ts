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
    translateCavalry
} from '../../../../../src/AI/processModule/translators/typesTranslators';
import {
    computerHasTooManyCavalry,
    playerHasTooManyCavalry,
    computerHasManyCavalry,
    playerHasManyCavalry,
    computerHasFewCavalry,
    playerHasFewCavalry,
    computerHasNoCavalry,
    playerHasNoCavalry,
    computerHasMoreCavalry,
    playerHasMoreCavalry,
    equalNumberOfCavalry,
    computerHasLotsOfCavalry,
    playerHasLotsOfCavalry,
    computerHasCavalry,
    playerHasCavalry,
    noCavalry,
} from '../../../../../src/store/AI/translators/typesTranslators/cavalryTranslatorStore/cavalryTranslator';

describe('types translators test', () => {

    describe('cavalryTranslator (computerHasFewCavalry, playerHasNoCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit;

        let playerUnit1:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
           
            playerUnit1 = createUnit('Scouts', 440, 160, 'player');
    
            addToRevealedUnits(playerUnit1);

            translateCavalry();

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            
            removeUnit(playerUnit1);
    
        });

        it('computerHasTooManyCavalry should be false', () => {
            assert.equal(computerHasTooManyCavalry, false);
        });

        it('playerHasTooManyCavalry should be false', () => {
            assert.equal(playerHasTooManyCavalry, false);
        });

        it('computerHasManyCavalry should be false', () => {
            assert.equal(computerHasManyCavalry, false);
        });

        it('playerHasManyCavalry should be false', () => {
            assert.equal(playerHasManyCavalry, false);
        });

        it('computerHasFewCavalry should be true', () => {
            assert.equal(computerHasFewCavalry, true);
        });

        it('playerHasFewCavalry should be false', () => {
            assert.equal(playerHasFewCavalry, false);
        });

        it('computerHasLotsOfCavalry should be false', () => {
            assert.equal(computerHasLotsOfCavalry, false);
        });

        it('playerHasLotsOfCavalry should be false', () => {
            assert.equal(playerHasLotsOfCavalry, false);
        });

        it('computerHasCavalry should be true', () => {
            assert.equal(computerHasCavalry, true);
        });

        it('playerHasCavalry should be false', () => {
            assert.equal(playerHasCavalry, false);
        });

        it('computerHasNoCavalry should be false', () => {
            assert.equal(computerHasNoCavalry, false);
        });

        it('playerHasNoCavalry should be true', () => {
            assert.equal(playerHasNoCavalry, true);
        });

        it('computerHasMoreCavalry should be true', () => {
            assert.equal(computerHasMoreCavalry, true);
        });

        it('playerHasMoreCavalry should be false', () => {
            assert.equal(playerHasMoreCavalry, false);
        });

        it('equalNumberOfCavalry should be false', () => {
            assert.equal(equalNumberOfCavalry, false);
        });

        it('noCavalry should be false', () => {
            assert.equal(noCavalry, false);
        });
    });

    describe('cavalryTranslator (computerHasFewCavalry, playerHasTooManyCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;
        let computerUnit10:Unit, computerUnit11:Unit, computerUnit12:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Militia', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightCavalry', 480, 80, 'computer');
            computerUnit5 = createUnit('Pikemen', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');
            computerUnit7 = createUnit('HeavyInfantry', 1280, 480, 'computer');
            computerUnit8 = createUnit('Scouts', 440, 160, 'computer');
            computerUnit9 = createUnit('HeavyInfantry', 920, 80, 'computer');
            computerUnit10 = createUnit('HeavyCavalry', 160, 480, 'computer');
            computerUnit11 = createUnit('Archers', 400, 280, 'computer');
            computerUnit12 = createUnit('Archers', 880, 280, 'computer');

            playerUnit1 = createUnit('Hoplites', 560, 240, 'player');
            playerUnit2 = createUnit('HeavyCavalry', 840, 160, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 1120, 360, 'player');
    
            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);

            translateCavalry();

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
            removeUnit(computerUnit12);
            
            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
    
        });

        it('computerHasTooManyCavalry should be false', () => {
            assert.equal(computerHasTooManyCavalry, false);
        });

        it('playerHasTooManyCavalry should be true', () => {
            assert.equal(playerHasTooManyCavalry, true);
        });

        it('computerHasManyCavalry should be false', () => {
            assert.equal(computerHasManyCavalry, false);
        });

        it('playerHasManyCavalry should be false', () => {
            assert.equal(playerHasManyCavalry, false);
        });

        it('computerHasFewCavalry should be true', () => {
            assert.equal(computerHasFewCavalry, true);
        });

        it('playerHasFewCavalry should be false', () => {
            assert.equal(playerHasFewCavalry, false);
        });

        it('computerHasLotsOfCavalry should be false', () => {
            assert.equal(computerHasLotsOfCavalry, false);
        });

        it('playerHasLotsOfCavalry should be true', () => {
            assert.equal(playerHasLotsOfCavalry, true);
        });

        it('computerHasCavalry should be true', () => {
            assert.equal(computerHasCavalry, true);
        });

        it('playerHasCavalry should be true', () => {
            assert.equal(playerHasCavalry, true);
        });

        it('computerHasNoCavalry should be false', () => {
            assert.equal(computerHasNoCavalry, false);
        });

        it('playerHasNoCavalry should be false', () => {
            assert.equal(playerHasNoCavalry, false);
        });

        it('computerHasMoreCavalry should be true', () => {
            assert.equal(computerHasMoreCavalry, true);
        });

        it('playerHasMoreCavalry should be false', () => {
            assert.equal(playerHasMoreCavalry, false);
        });

        it('equalNumberOfCavalry should be false', () => {
            assert.equal(equalNumberOfCavalry, false);
        });

        it('noCavalry should be false', () => {
            assert.equal(noCavalry, false);
        });
    });

    describe('cavalryTranslator (computerHasManyCavalry, playerHasTooManyCavalry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;
        let playerUnit7:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Hoplites', 560, 120, 'computer');
            computerUnit2 = createUnit('LightCavalry', 440, 200, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 280, 200, 'player');
            playerUnit2 = createUnit('LightCavalry', 480, 80, 'player');
            playerUnit3 = createUnit('Pikemen', 480, 160, 'player');
            playerUnit4 = createUnit('HeavyCavalry', 0, 320, 'player');
            playerUnit5 = createUnit('HeavyInfantry', 1280, 480, 'player');
            playerUnit6 = createUnit('Scouts', 440, 160, 'player');
            playerUnit7 = createUnit('HeavyCavalry', 920, 80, 'player');
        
            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);
            addToRevealedUnits(playerUnit7);

            translateCavalry();

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            
            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);
            removeUnit(playerUnit7);
    
        });

        it('computerHasTooManyCavalry should be false', () => {
            assert.equal(computerHasTooManyCavalry, false);
        });

        it('playerHasTooManyCavalry should be false', () => {
            assert.equal(playerHasTooManyCavalry, false);
        });

        it('computerHasManyCavalry should be true', () => {
            assert.equal(computerHasManyCavalry, true);
        });

        it('playerHasManyCavalry should be true', () => {
            assert.equal(playerHasManyCavalry, true);
        });

        it('computerHasFewCavalry should be false', () => {
            assert.equal(computerHasFewCavalry, false);
        });

        it('playerHasFewCavalry should be false', () => {
            assert.equal(playerHasFewCavalry, false);
        });

        it('computerHasLotsOfCavalry should be true', () => {
            assert.equal(computerHasLotsOfCavalry, true);
        });

        it('playerHasLotsOfCavalry should be true', () => {
            assert.equal(playerHasLotsOfCavalry, true);
        });

        it('computerHasCavalry should be true', () => {
            assert.equal(computerHasCavalry, true);
        });

        it('playerHasCavalry should be true', () => {
            assert.equal(playerHasCavalry, true);
        });

        it('computerHasNoCavalry should be false', () => {
            assert.equal(computerHasNoCavalry, false);
        });

        it('playerHasNoCavalry should be false', () => {
            assert.equal(playerHasNoCavalry, false);
        });

        it('computerHasMoreCavalry should be false', () => {
            assert.equal(computerHasMoreCavalry, false);
        });

        it('playerHasMoreCavalry should be true', () => {
            assert.equal(playerHasMoreCavalry, true);
        });

        it('equalNumberOfCavalry should be false', () => {
            assert.equal(equalNumberOfCavalry, false);
        });

        it('noCavalry should be false', () => {
            assert.equal(noCavalry, false);
        });
    });

    describe('cavalryTranslator (computerHasNoCavalry, playerHasNoCavalry)', () => {

        let computerUnit1:Unit;

        let playerUnit1:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Hoplites', 560, 120, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 280, 200, 'player');
        
            addToRevealedUnits(playerUnit1);

            translateCavalry();

        });

        after(() => {
            removeUnit(computerUnit1);
            removeUnit(playerUnit1);
        });

        it('computerHasTooManyCavalry should be false', () => {
            assert.equal(computerHasTooManyCavalry, false);
        });

        it('playerHasTooManyCavalry should be false', () => {
            assert.equal(playerHasTooManyCavalry, false);
        });

        it('computerHasManyCavalry should be false', () => {
            assert.equal(computerHasManyCavalry, false);
        });

        it('playerHasManyCavalry should be false', () => {
            assert.equal(playerHasManyCavalry, false);
        });

        it('computerHasFewCavalry should be false', () => {
            assert.equal(computerHasFewCavalry, false);
        });

        it('playerHasFewCavalry should be false', () => {
            assert.equal(playerHasFewCavalry, false);
        });

        it('computerHasLotsOfCavalry should be false', () => {
            assert.equal(computerHasLotsOfCavalry, false);
        });

        it('playerHasLotsOfCavalry should be false', () => {
            assert.equal(playerHasLotsOfCavalry, false);
        });

        it('computerHasCavalry should be false', () => {
            assert.equal(computerHasCavalry, false);
        });

        it('playerHasCavalry should be false', () => {
            assert.equal(playerHasCavalry, false);
        });

        it('computerHasNoCavalry should be true', () => {
            assert.equal(computerHasNoCavalry, true);
        });

        it('playerHasNoCavalry should be true', () => {
            assert.equal(playerHasNoCavalry, true);
        });

        it('computerHasMoreCavalry should be false', () => {
            assert.equal(computerHasMoreCavalry, false);
        });

        it('playerHasMoreCavalry should be false', () => {
            assert.equal(playerHasMoreCavalry, false);
        });

        it('equalNumberOfCavalry should be true', () => {
            assert.equal(equalNumberOfCavalry, true);
        });

        it('noCavalry should be true', () => {
            assert.equal(noCavalry, true);
        });
    });
});