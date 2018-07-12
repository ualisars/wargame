import {
    assert,
    expect
} from 'chai';
import {
    caseRatioMoreThan90
} from '../../../../../../src/AI/strategyModule/decisionUnit/strategy/offensivePoints/cases/caseRatioMoreThan90';
import {
    translateAll
} from '../../../../../../src/AI/processModule/translators';
import {createUnit} from '../../../../../../src/unit/create';
import {removeAllUnits} from '../../../../../../src/store/unit/units';
import {removeUnit} from '../../../../../../src/unit/remove';
import {
    addToRevealedUnits,
    revealedUnits
} from '../../../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../../../src/unit/types/Unit';

describe('strategy OffensivePoints test', () => {

    describe('caseRatioMoreThan90 test (computerManyCavalry, playerManyArchers)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;
        let computerUnit7:Unit, computerUnit8:Unit, computerUnit9:Unit;
        let computerUnit10:Unit, computerUnit11:Unit, computerUnit12:Unit;

        let playerUnit1:Unit, playerUnit2:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightCavalry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('LightCavalry', 480, 160, 'computer');
            computerUnit6 = createUnit('HeavyCavalry', 0, 320, 'computer');
            computerUnit7 = createUnit('LightInfantry', 160, 480, 'computer');
            computerUnit8 = createUnit('HeavyCavalry', 400, 280, 'computer');
            computerUnit9 = createUnit('HeavyCavalry', 880, 280, 'computer');
            computerUnit10 = createUnit('Pikemen', 560, 240, 'computer');
            computerUnit11 = createUnit('Pikemen', 520, 80, 'computer');
            computerUnit12 = createUnit('Pikemen', 200, 520, 'computer');

            playerUnit1 = createUnit('Archers', 440, 160, 'player');
            playerUnit2 = createUnit('Archers', 920, 80, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);

            translateAll();
           
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

        });

        it('offensivePoints should be 100', () => {
            let offensivePoints = caseRatioMoreThan90();
            assert.equal(offensivePoints, 100);
        });
    });


    describe('caseRatioMoreThan90 (computerManySkirmisher, playerManySpearmen)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('Archers', 560, 120, 'computer');
            computerUnit2 = createUnit('Archers', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('Archers', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Hoplites', 0, 320, 'computer');

            playerUnit1 = createUnit('Hoplites', 440, 160, 'player');
            playerUnit2 = createUnit('Pikemen', 920, 80, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);

            translateAll();
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

        });

        it('offensivePoints should be 100', () => {
            let offensivePoints = caseRatioMoreThan90();
            assert.equal(offensivePoints, 100);
        });
    });

    describe('caseRatioMoreThan90 (computerInfantry, playerInfantry)', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightInfantry', 560, 120, 'computer');
            computerUnit2 = createUnit('LightInfantry', 440, 200, 'computer');
            computerUnit3 = createUnit('LightInfantry', 280, 200, 'computer');
            computerUnit4 = createUnit('LightInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('LightInfantry', 440, 160, 'player');
            addToRevealedUnits(playerUnit1);
            translateAll();
        });

        after(() => {
            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);

            removeUnit(playerUnit1);
        });

        it('offensivePoints should be in range of 90 to 100', () => {
            let offensivePoints = caseRatioMoreThan90();
            expect(offensivePoints).to.be.least(90);
            expect(offensivePoints).to.be.at.most(100);
        });
    });

});