import {assert} from 'chai';
import {
    calculateTotalRatio
} from '../../../../src/AI/processModule/ratio';
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

describe('AI processModule ratioTest', () => {

    describe('calculateTotalRatio test', () => {

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

            // assign weight manually in order to avoid future issues
            // computerUnit1.speed = 90;
            // computerUnit2.speed = 100;
            // computerUnit3.speed = 30;
            // computerUnit4.speed = 40;
            // computerUnit5.speed = 80;
            // computerUnit6.speed = 20;

            playerUnit1.speed = 60;
            playerUnit2.speed = 20;
            playerUnit3.speed = 40;
            playerUnit4.speed = 20;
            playerUnit5.speed = 20;
            playerUnit6.speed = 90;


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

        it('total ratio should be 0.56', () => {

            let totalRatio: number = calculateTotalRatio();

            assert.equal(totalRatio, 0.56);

        });


    });
});