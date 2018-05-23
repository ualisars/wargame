import {assert} from 'chai';
import {
    calculateSpeedRatio
} from '../../../../src/AI/processModule/ratio/speedRatio';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import {
    addToRevealedUnits,
    revealedUnits
} from '../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../src/unit/types/Unit';

describe('AI processModule ratioTest', () => {

    describe('calculateSpeedRatio test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('LightInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Militia', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Scouts', 400, 280, 'player');
            playerUnit5 = createUnit('Scouts', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');

            // assign speed manually in order to avoid future issues
            computerUnit1.speed = 20;
            computerUnit2.speed = 18;
            computerUnit3.speed = 12;
            computerUnit4.speed = 7;
            computerUnit5.speed = 8;
            computerUnit6.speed = 11;

            playerUnit1.speed = 7;
            playerUnit2.speed = 9;
            playerUnit3.speed = 11;
            playerUnit4.speed = 8;
            playerUnit5.speed = 5;
            playerUnit6.speed = 6;

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

        it('speedRatio should be equal to 0.62', () => {

            let speedRatio: number = calculateSpeedRatio();

            assert.equal(speedRatio, 0.62);

        });
    });

});
