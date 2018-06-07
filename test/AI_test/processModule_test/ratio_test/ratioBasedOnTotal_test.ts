import {assert} from 'chai';
import {
    calculateRatioBasedOnTotal
} from '../../../../src/AI/processModule/ratio/ratioBasedOnTotal';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';

describe('AI processModule ratioTest', () => {

    describe('calculateRatioBasedOnTotal test', () => {

        let totalNumberOfUnits: number = 10;
        let archers: number = 3;
        let spearmen: number = 1;
        let cavalry: number = 2;
        let infantry: number = 4;
        let lightInfantry: number = 2;
        let heavyInfantry: number = 2;

        it('archersRatio should be equal to 0.3', () => {

            let archersRatio:number = calculateRatioBasedOnTotal(archers, totalNumberOfUnits);
            assert.equal(archersRatio, 0.30);

        });

        it('spearmenRatio should be equal to 0.1', () => {

            let spearmenRatio:number = calculateRatioBasedOnTotal(spearmen, totalNumberOfUnits);
            assert.equal(spearmenRatio, 0.1);

        });

        it('cavalryRatio should be equal to 0.2', () => {

            let cavalryRatio:number = calculateRatioBasedOnTotal(cavalry, totalNumberOfUnits);
            assert.equal(cavalryRatio, 0.2);

        });

        it('infantryRatio should be equal to 0.4', () => {

            let infantryRatio:number = calculateRatioBasedOnTotal(infantry, totalNumberOfUnits);
            assert.equal(infantryRatio, 0.4);

        });

        it('lightInfantryRatio should be equal to 0.2', () => {

            let lightInfantryRatio:number = calculateRatioBasedOnTotal(lightInfantry, totalNumberOfUnits);
            assert.equal(lightInfantryRatio, 0.2);

        });

        it('heavyInfantryRatio should be equal to 0.2', () => {

            let heavyInfantryRatio:number = calculateRatioBasedOnTotal(heavyInfantry, totalNumberOfUnits);
            assert.equal(heavyInfantryRatio, 0.2);

        });

    });
});