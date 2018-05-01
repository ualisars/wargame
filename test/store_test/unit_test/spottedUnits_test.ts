import {assert} from 'chai';
import {
    spottedUnits,
    addUnitToSpottedUnits,
    removeUnitFromSpottedUnits
} from '../../../src/store/unit/spottedUnits';
import {isUnitInArray} from '../../../src/utils/unit/general';
import {createUnit} from '../../../src/unit/create';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';

describe('spottedUnits store test', () => {

    describe('addUnitToSpottedUnits test', () => {
        let unit1:Unit, unit2:Unit, unit3:Unit;

        before(() => {
        removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'player');
            unit2 = createUnit('scouts', 1249, 400, 'computer');
            unit3 = createUnit('pikemen', 120, 560, 'computer');
        });

        // remove units after test completed
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
        });

        it('unit1, unit2 should be in the spottedUnits', (done) => {

            addUnitToSpottedUnits(unit1);
            addUnitToSpottedUnits(unit2);

            assert.equal(isUnitInArray(unit1, spottedUnits), true);
            assert.equal(isUnitInArray(unit2, spottedUnits), true);
            assert.equal(isUnitInArray(unit3, spottedUnits), false);

            done();
        });

        it('unit3 should be in the spottedUnits', (done) => {

            addUnitToSpottedUnits(unit3);

            assert.equal(isUnitInArray(unit1, spottedUnits), true);
            assert.equal(isUnitInArray(unit2, spottedUnits), true);
            assert.equal(isUnitInArray(unit3, spottedUnits), true);

            done();
        });
    });

    describe('removeUnitFromSpottedUnits test', () => {

        let unit1:Unit, unit2:Unit, unit3:Unit;

        before(() => {
        removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'player');
            unit2 = createUnit('scouts', 1249, 400, 'computer');
            unit3 = createUnit('pikemen', 120, 560, 'computer');

            addUnitToSpottedUnits(unit1);
            addUnitToSpottedUnits(unit2);
            addUnitToSpottedUnits(unit3);

        });

        // remove units after test completed
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
        });

        it('unit1 should not be in the spottedUnits', (done) => {

            removeUnitFromSpottedUnits(unit1);

            assert.equal(isUnitInArray(unit1, spottedUnits), false);
            assert.equal(isUnitInArray(unit2, spottedUnits), true);
            assert.equal(isUnitInArray(unit3, spottedUnits), true);

            done();

        });

        it('unit2 should not be in the spottedUnits', (done) => {

            removeUnitFromSpottedUnits(unit2);
            
            assert.equal(isUnitInArray(unit1, spottedUnits), false);
            assert.equal(isUnitInArray(unit2, spottedUnits), false);
            assert.equal(isUnitInArray(unit3, spottedUnits), true);

            done();

        });

        it('no units should not be in the spottedUnits', (done) => {

            removeUnitFromSpottedUnits(unit3);
            
            assert.equal(isUnitInArray(unit1, spottedUnits), false);
            assert.equal(isUnitInArray(unit2, spottedUnits), false);
            assert.equal(isUnitInArray(unit3, spottedUnits), false);

            done();

        });

    });

});