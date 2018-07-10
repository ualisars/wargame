import {assert} from 'chai';
import {
    translateMelee
} from '../../../../src/AI/processModule/translators';
import {
    meleeSuperiority,
    meleeAdvantage,
    equalMelee,
    meleeDisadvantage,
    meleeCompleteDisadvantage
} from '../../../../src/store/AI/translators/meleeTranslator/meleeTranslatorStore';
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

    describe('translateMelee test (meleeSuperiority)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Pikemen', 440, 200, 'computer');
            computerUnit3 = createUnit('Pikemen', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyInfantry', 0, 320, 'computer');

            playerUnit1 = createUnit('Scouts', 440, 160, 'player');
            playerUnit2 = createUnit('Scouts', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');
         

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

        it('meleeSuperiority should be true', () => {

            translateMelee();

            assert.equal(meleeSuperiority, true);
            assert.equal(meleeAdvantage, false);
            assert.equal(equalMelee, false);
            assert.equal(meleeDisadvantage, false);
            assert.equal(meleeCompleteDisadvantage, false);
        });
    });

    describe('translateMelee test (meleeAdvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Pikemen', 440, 200, 'computer');
            computerUnit3 = createUnit('Pikemen', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');

            playerUnit1 = createUnit('Pikemen', 440, 160, 'player');
            playerUnit2 = createUnit('HeavyCavalry', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('LightInfantry', 400, 280, 'player');
            playerUnit5 = createUnit('LightCavalry', 880, 280, 'player');
    
            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);

        });

        it('meleeAdvantage should be true', () => {

            translateMelee();

            assert.equal(meleeSuperiority, false);
            assert.equal(meleeAdvantage, true);
            assert.equal(equalMelee, false);
            assert.equal(meleeDisadvantage, false);
            assert.equal(meleeCompleteDisadvantage, false);
        });
    });

    describe('translateMelee test (equalMelee)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Pikemen', 560, 120, 'computer');
            computerUnit2 = createUnit('Pikemen', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyInfantry', 280, 200, 'computer');

            playerUnit1 = createUnit('Pikemen', 440, 160, 'player');
            playerUnit2 = createUnit('Pikemen', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyInfantry', 160, 480, 'player');
    
            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);

        });

        it('equalMelee should be true', () => {

            translateMelee();

            assert.equal(meleeSuperiority, false);
            assert.equal(meleeAdvantage, false);
            assert.equal(equalMelee, true);
            assert.equal(meleeDisadvantage, false);
            assert.equal(meleeCompleteDisadvantage, false);
        });
    });

    describe('translateMelee test (meleeDisadvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('HeavyInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyInfantry', 280, 200, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('HeavyInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('Pikemen', 160, 480, 'player');
            playerUnit4 = createUnit('Pikemen', 400, 280, 'player');
            playerUnit5 = createUnit('Pikemen', 880, 280, 'player');
            playerUnit6 = createUnit('HeavyCavalry', 560, 240, 'player');

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

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);

        });

        it('meleeDisadvantage should be true', () => {

            translateMelee();

            assert.equal(meleeSuperiority, false);
            assert.equal(meleeAdvantage, false);
            assert.equal(equalMelee, false);
            assert.equal(meleeDisadvantage, true);
            assert.equal(meleeCompleteDisadvantage, false);
        });
    });

    describe('translateMelee test (meleeCompleteDisadvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Scouts', 560, 120, 'computer');
            computerUnit2 = createUnit('Militia', 440, 200, 'computer');
            computerUnit3 = createUnit('Scouts', 280, 200, 'computer');

            playerUnit1 = createUnit('Pikemen', 440, 160, 'player');
            playerUnit2 = createUnit('Pikemen', 920, 80, 'player');
            playerUnit3 = createUnit('Pikemen', 160, 480, 'player');
            playerUnit4 = createUnit('Pikemen', 400, 280, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);

        });

        it('meleeCompleteDisadvantage should be true', () => {

            translateMelee();

            assert.equal(meleeSuperiority, false);
            assert.equal(meleeAdvantage, false);
            assert.equal(equalMelee, false);
            assert.equal(meleeDisadvantage, false);
            assert.equal(meleeCompleteDisadvantage, true);
        });
    });

});