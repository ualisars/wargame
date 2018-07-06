import {assert} from 'chai';
import {
    translateTotalAdvantage
} from '../../../../src/AI/processModule/translators/totalAdvantageTranslator';
import {
    computerSuperiority,
    computerAdvantage,
    equality,
    computerDisadvantage,
    computerCompletelyDisadvantage
} from '../../../../src/store/AI/translators/totalAdvantage/totalAdvantageTranslator';
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

    describe('translateTotalAdvantage test (computerCompletelyAdvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Pikemen', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');

            playerUnit1 = createUnit('Scouts', 440, 160, 'player');
            playerUnit2 = createUnit('Scouts', 920, 80, 'player');
            playerUnit3 = createUnit('Militia', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('Scouts', 880, 280, 'player');
            playerUnit6 = createUnit('Archers', 560, 240, 'player');

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

        it('computerSuperiority should be true', () => {

            translateTotalAdvantage();

            assert.equal(computerSuperiority, true);
            assert.equal(computerAdvantage, false);
            assert.equal(equality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, false);

        });


    });

    describe('translateTotalAdvantage test (computerAdvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('Scouts', 280, 200, 'computer');
            computerUnit4 = createUnit('HeavyInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');

            playerUnit1 = createUnit('Scouts', 440, 160, 'player');
            playerUnit2 = createUnit('LightInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('Militia', 160, 480, 'player');
            playerUnit4 = createUnit('LightInfantry', 400, 280, 'player');
            playerUnit5 = createUnit('Pikemen', 880, 280, 'player');
            playerUnit6 = createUnit('Archers', 560, 240, 'player');

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

        it('computerAdvantage should be true', () => {

            translateTotalAdvantage();

            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, true);
            assert.equal(equality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, false);

        });


    });

    describe('translateTotalAdvantage test (equality)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Hoplites', 560, 120, 'computer');
            computerUnit2 = createUnit('Militia', 440, 200, 'computer');
            computerUnit3 = createUnit('HeavyCavalry', 280, 200, 'computer');

            playerUnit1 = createUnit('Militia', 440, 160, 'player');
            playerUnit2 = createUnit('Hoplites', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 160, 480, 'player');

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

        it('computerCompletelyDisadvantage should be true', () => {

            translateTotalAdvantage();

            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(equality, true);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, false);

        });
    });

    describe('translateTotalAdvantage test (computerDisadvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Scouts', 560, 120, 'computer');
            computerUnit2 = createUnit('Militia', 440, 200, 'computer');
            computerUnit3 = createUnit('Scouts', 280, 200, 'computer');
            computerUnit4 = createUnit('Militia', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');

            playerUnit1 = createUnit('Hoplites', 440, 160, 'player');
            playerUnit2 = createUnit('LightInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 160, 480, 'player');
            playerUnit4 = createUnit('HeavyInfantry', 400, 280, 'player');
            playerUnit5 = createUnit('Pikemen', 880, 280, 'player');
            playerUnit6 = createUnit('Archers', 560, 240, 'player');

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

        it('computerDisadvantage should be true', () => {

            translateTotalAdvantage();

            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(equality, false);
            assert.equal(computerDisadvantage, true);
            assert.equal(computerCompletelyDisadvantage, false);

        });


    });


    describe('translateTotalAdvantage test (computerCompletelyDisadvantage)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Scouts', 560, 120, 'computer');
            computerUnit2 = createUnit('Militia', 440, 200, 'computer');
            computerUnit3 = createUnit('Scouts', 280, 200, 'computer');

            playerUnit1 = createUnit('Hoplites', 440, 160, 'player');
            playerUnit2 = createUnit('LightInfantry', 920, 80, 'player');
            playerUnit3 = createUnit('HeavyCavalry', 160, 480, 'player');
            playerUnit4 = createUnit('HeavyInfantry', 400, 280, 'player');
            playerUnit5 = createUnit('Pikemen', 880, 280, 'player');
            playerUnit6 = createUnit('Archers', 560, 240, 'player');

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

        it('computerCompletelyDisadvantage should be true', () => {

            translateTotalAdvantage();

            assert.equal(computerSuperiority, false);
            assert.equal(computerAdvantage, false);
            assert.equal(equality, false);
            assert.equal(computerDisadvantage, false);
            assert.equal(computerCompletelyDisadvantage, true);

        });
    });
});