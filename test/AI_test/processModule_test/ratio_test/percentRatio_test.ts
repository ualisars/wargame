import {assert} from 'chai';
import {
    calculateOneSideRatio
} from '../../../../src/AI/processModule/ratio/oneSideRatio';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';

describe('AI processModule ratioTest', () => {

    describe('calculateOneSideRatio test', () => {

        let totalNumberOfUnits: number = 10;
        let archers: number = 3;
        let spearmen: number = 1;
        let cavalry: number = 2;
        let infantry: number = 4;
        let lightInfantry: number = 2;
        let heavyInfantry: number = 2;

        it('archersRatio should be equal to 0.3', () => {

            let archersRatio:number = calculateOneSideRatio(archers, totalNumberOfUnits);
            assert.equal(archersRatio, 0.30);

        });

        it('spearmenRatio should be equal to 0.1', () => {

            let spearmenRatio:number = calculateOneSideRatio(spearmen, totalNumberOfUnits);
            assert.equal(spearmenRatio, 0.1);

        });

        it('cavalryRatio should be equal to 0.2', () => {

            let cavalryRatio:number = calculateOneSideRatio(cavalry, totalNumberOfUnits);
            assert.equal(cavalryRatio, 0.2);

        });

        it('infantryRatio should be equal to 0.4', () => {

            let infantryRatio:number = calculateOneSideRatio(infantry, totalNumberOfUnits);
            assert.equal(infantryRatio, 0.4);

        });

        it('lightInfantryRatio should be equal to 0.2', () => {

            let lightInfantryRatio:number = calculateOneSideRatio(lightInfantry, totalNumberOfUnits);
            assert.equal(lightInfantryRatio, 0.2);

        });

        it('heavyInfantryRatio should be equal to 0.2', () => {

            let heavyInfantryRatio:number = calculateOneSideRatio(heavyInfantry, totalNumberOfUnits);
            assert.equal(heavyInfantryRatio, 0.2);

        });

    });
});