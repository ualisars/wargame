import {assert} from 'chai';
import {
    calculateComputerTypesRatio
} from '../../../../src/AI/processModule/ratio';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';

describe('AI processModule ratioTest', () => {

    describe('calculateComputerTypesRatio test', () => {

        let computerUnit1:Unit, computerUnit2:Unit, computerUnit3:Unit;
        let computerUnit4:Unit, computerUnit5:Unit, computerUnit6:Unit;

        before(() => {

            removeAllUnits();

            computerUnit1 = createUnit('LightCavalry', 560, 120, 'computer');
            computerUnit2 = createUnit('HeavyCavalry', 440, 200, 'computer');
            computerUnit3 = createUnit('Archers', 280, 200, 'computer');
            computerUnit4 = createUnit('LightInfantry', 480, 80, 'computer');
            computerUnit5 = createUnit('Hoplites', 480, 160, 'computer');
            computerUnit6 = createUnit('Scouts', 0, 320, 'computer');

        });

        after(() => {

            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
            removeUnit(computerUnit5);
            removeUnit(computerUnit6);

        });

        it('computerInfantryRatio ratio should be equal to 0.5', () => {
            let {computerInfantryRatio} = calculateComputerTypesRatio();

            assert.equal(computerInfantryRatio, 0.5);
        });

        it('computerSpearmenRatio should be equal to 0.17', () => {
            let {computerSpearmenRatio} = calculateComputerTypesRatio();

            assert.equal(computerSpearmenRatio, 0.17);
        });

        it('computerLightInfantryRatio should be equal to 0.17', () => {
            let {computerLightInfantryRatio} = calculateComputerTypesRatio();

            assert.equal(computerLightInfantryRatio, 0.17);
        });

        it('computerHeavyInfantryRatio should be equal to 0', () => {
            let {computerHeavyInfantryRatio} = calculateComputerTypesRatio();

            assert.equal(computerHeavyInfantryRatio, 0);
        });

        it('computerScoutsRatio should be equal to 0.17', () => {
            let {computerScoutsRatio} = calculateComputerTypesRatio();

            assert.equal(computerScoutsRatio, 0.17);
        });

        it('computerSkirmisherRatio should be equal to 0.17', () => {
            let {computerSkirmisherRatio} = calculateComputerTypesRatio();

            assert.equal(computerSkirmisherRatio, 0.17);
        });

        it('computerCavalryRatio should be equal to 0.33', () => {
            let {computerCavalryRatio} = calculateComputerTypesRatio();

            assert.equal(computerCavalryRatio, 0.33);
        });

    });

});