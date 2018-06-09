import {assert} from 'chai';
import {
    calculatePlayerTypesRatio
} from '../../../../src/AI/processModule/ratio';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import {
    addToRevealedUnits,
    revealedUnits
} from '../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../src/unit/types/Unit';

describe('AI processModule ratioTest', () => {

    describe('calculatePlayerTypesRatio test', () => {

        let playerUnit1:Unit, playerUnit2:Unit, playerUnit3:Unit;
        let playerUnit4:Unit, playerUnit5:Unit, playerUnit6:Unit;

        before(() => {

            removeAllUnits();

            playerUnit1 = createUnit('HeavyInfantry', 440, 160, 'player');
            playerUnit2 = createUnit('Archers', 920, 80, 'player');
            playerUnit3 = createUnit('LightInfantry', 160, 480, 'player');
            playerUnit4 = createUnit('Archers', 400, 280, 'player');
            playerUnit5 = createUnit('Scouts', 880, 280, 'player');
            playerUnit6 = createUnit('Pikemen', 560, 240, 'player');

            addToRevealedUnits(playerUnit1);
            addToRevealedUnits(playerUnit2);
            addToRevealedUnits(playerUnit3);
            addToRevealedUnits(playerUnit4);
            addToRevealedUnits(playerUnit5);
            addToRevealedUnits(playerUnit6);

        });

        after(() => {

            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(playerUnit5);
            removeUnit(playerUnit6);

        });

        it('playerInfantryRatio ratio should be equal to 0.67', () => {

            let {playerInfantryRatio} = calculatePlayerTypesRatio();

            assert.equal(playerInfantryRatio, 0.67);

        });

        it('playerSpearmenRatio should be equal to 0.17', () => {

            let {playerSpearmenRatio} = calculatePlayerTypesRatio();

            assert.equal(playerSpearmenRatio, 0.17);

        });

        it('playerLightInfantryRatio should be equal to 0.17', () => {

            let {playerLightInfantryRatio} = calculatePlayerTypesRatio();

            assert.equal(playerLightInfantryRatio, 0.17);

        });

        it('playerHeavyInfantryRatio should be equal to 0.17', () => {

            let {playerHeavyInfantryRatio} = calculatePlayerTypesRatio();

            assert.equal(playerHeavyInfantryRatio, 0.17);

        });

        it('playerSkirmisherRatio should be equal to 0.33', () => {

            let {playerSkirmisherRatio} = calculatePlayerTypesRatio();

            assert.equal(playerSkirmisherRatio, 0.33);

        });

        it('playerCavalryRatio should be equal to 0', () => {

            let {playerCavalryRatio} = calculatePlayerTypesRatio();

            assert.equal(playerCavalryRatio, 0);

        });

        it('playerScoutsRatio should be equal to 0.17', () => {

            let {playerScoutsRatio} = calculatePlayerTypesRatio();

            assert.equal(playerScoutsRatio, 0.17);

        });

    });

});