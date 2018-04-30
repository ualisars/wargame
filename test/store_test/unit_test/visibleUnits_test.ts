import {assert} from 'chai';
import {
    addUnitIntoVisibleUnits,
    removeUnitFromVisibleUnits,
    visibleForComputerUnits,
    visibleForPlayerUnits
} from '../../../src/store/unit/visibleUnits';
import {isUnitInArray} from '../../../src/utils/unit/general';
import {createUnit} from '../../../src/unit/create';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';

describe('store AI test', () => {

    describe('addUnitIntoVisibleArray test', () => {
        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;

        before(() => {
        removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'player');
            unit2 = createUnit('scouts', 1249, 400, 'computer');
            unit3 = createUnit('pikemen', 120, 560, 'computer');
            unit4 = createUnit('militia', 560, 0, 'player');
            unit5 = createUnit('hoplites', 560, 40, 'player');
        });

        // remove units after test completed
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);
            removeUnit(unit5);
        });

        it('unit1, unit4 and unit5 should be inside visibleForComputer units', (done) => {
            addUnitIntoVisibleUnits(unit1);
            addUnitIntoVisibleUnits(unit4);
            addUnitIntoVisibleUnits(unit5);

            assert.equal(isUnitInArray(unit1, visibleForComputerUnits), true);
            assert.equal(isUnitInArray(unit2, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit3, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit4, visibleForComputerUnits), true);
            assert.equal(isUnitInArray(unit5, visibleForComputerUnits), true);
            done();
        });

        it('unit2 and unit3 should be inside visibleForPlayer units', (done) => {
            addUnitIntoVisibleUnits(unit2);
            addUnitIntoVisibleUnits(unit3);

            assert.equal(isUnitInArray(unit1, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit2, visibleForPlayerUnits), true);
            assert.equal(isUnitInArray(unit3, visibleForPlayerUnits), true);
            assert.equal(isUnitInArray(unit4, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit5, visibleForPlayerUnits), false);
            done();
        });
    });

    describe('removeUnitFromVisibleArray test', () => {
        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;

        before(() => {
        removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'player');
            unit2 = createUnit('scouts', 1249, 400, 'computer');
            unit3 = createUnit('pikemen', 120, 560, 'computer');
            unit4 = createUnit('militia', 560, 0, 'player');
            unit5 = createUnit('hoplites', 560, 40, 'player');

            addUnitIntoVisibleUnits(unit1);
            addUnitIntoVisibleUnits(unit2);
            addUnitIntoVisibleUnits(unit3);
            addUnitIntoVisibleUnits(unit4);
            addUnitIntoVisibleUnits(unit5);
        });

        // remove units after test completed
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);
            removeUnit(unit5);
        });

        it('unit1 and unit5 should not be inside visibleForComputer units', (done) => {
            removeUnitFromVisibleUnits(unit1);
            removeUnitFromVisibleUnits(unit5);

            assert.equal(isUnitInArray(unit1, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit2, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit3, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit4, visibleForComputerUnits), true);
            assert.equal(isUnitInArray(unit5, visibleForComputerUnits), false);

            done();
        });

        it('unit 2 should not be inside visibleForPlayer units', (done) => {
            removeUnitFromVisibleUnits(unit2);

            assert.equal(isUnitInArray(unit1, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit2, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit3, visibleForPlayerUnits), true);
            assert.equal(isUnitInArray(unit4, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit5, visibleForPlayerUnits), false);

            done();
        });

        it('no units should not be inside visibleForPlayer units', (done) => {
            removeUnitFromVisibleUnits(unit3);

            assert.equal(isUnitInArray(unit1, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit2, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit3, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit4, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit5, visibleForPlayerUnits), false);

            done();
        });

    });

});