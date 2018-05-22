import {assert} from 'chai';
import {
    calculatePercentRatio,
    calculateTypesRatio
} from '../../../../src/AI/processModule/ratio/typesRatio';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import {
    addToRevealedUnits,
    revealedUnits
} from '../../../../src/store/AI/enemies/revealedEnemies';
import Unit from '../../../../src/unit/types/Unit';

describe('AI processModule ratioTest', () => {

    describe('calculatePercentRatio test', () => {

        it('percent ratio should be equal to 0.42', () => {

            let ratio:number = calculatePercentRatio(5, 7);
            assert.equal(ratio, 0.42);

        });

        it('ratio should be equal to 0.75', () => {

            let ratio:number = calculatePercentRatio(3, 1);
            assert.equal(ratio, 0.75);

        });

        it('ratio should be equal to 0', () => {

            let ratio:number = calculatePercentRatio(0, 2);
            assert.equal(ratio, 0);

        });

        it('ratio should be equal to 1', () => {

            let ratio:number = calculatePercentRatio(4, 0);
            assert.equal(ratio, 1);

        });

        it('ratio should be equal to 0.5', () => {

            let ratio:number = calculatePercentRatio(2, 2);
            assert.equal(ratio, 0.5);

        });

    });

    describe('calculateTypesRatio test', () => {

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

        it('infantry ratio should be equal to 0.33', () => {
            let {infantryRatio} = calculateTypesRatio();

            assert.equal(infantryRatio, 0.33);
        });

        it('spearmenRatio should be equal to 0.5', () => {
            let {spearmenRatio} = calculateTypesRatio();

            assert.equal(spearmenRatio, 0.5);
        });

        it('lightInfantryRatio should be equal to 0.33', () => {
            let {lightInfantryRatio} = calculateTypesRatio();

            assert.equal(lightInfantryRatio, 0.33);
        });

        it('heavyInfantryRatio should be equal to 0', () => {
            let {heavyInfantryRatio} = calculateTypesRatio();

            assert.equal(heavyInfantryRatio, 0);
        });

        it('skirmisherRatio should be equal to 1', () => {
            let {skirmisherRatio} = calculateTypesRatio();

            assert.equal(skirmisherRatio, 1);
        });

        it('cavalryRatio should be equal to 0', () => {
            let {cavalryRatio} = calculateTypesRatio();

            assert.equal(cavalryRatio, 1);
        });

    });

});