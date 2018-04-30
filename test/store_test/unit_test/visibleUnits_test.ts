import {assert} from 'chai';
import {
    addUnitIntoVisibleArray,
    removeUnitFromVisibleArray,
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
            addUnitIntoVisibleArray(unit1);
            addUnitIntoVisibleArray(unit4);
            addUnitIntoVisibleArray(unit5);

            assert.equal(isUnitInArray(unit1, visibleForComputerUnits), true);
            assert.equal(isUnitInArray(unit2, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit3, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit4, visibleForComputerUnits), true);
            assert.equal(isUnitInArray(unit5, visibleForComputerUnits), true);
            done();
        });

        it('unit2 and unit3 should be inside visibleForPlayer units', (done) => {
            addUnitIntoVisibleArray(unit2);
            addUnitIntoVisibleArray(unit3);

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

            addUnitIntoVisibleArray(unit1);
            addUnitIntoVisibleArray(unit2);
            addUnitIntoVisibleArray(unit3);
            addUnitIntoVisibleArray(unit4);
            addUnitIntoVisibleArray(unit5);
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
            removeUnitFromVisibleArray(unit1);
            removeUnitFromVisibleArray(unit5);

            assert.equal(isUnitInArray(unit1, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit2, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit3, visibleForComputerUnits), false);
            assert.equal(isUnitInArray(unit4, visibleForComputerUnits), true);
            assert.equal(isUnitInArray(unit5, visibleForComputerUnits), false);

            done();
        });

        it('unit 2 should not be inside visibleForPlayer units', (done) => {
            removeUnitFromVisibleArray(unit2);

            assert.equal(isUnitInArray(unit1, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit2, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit3, visibleForPlayerUnits), true);
            assert.equal(isUnitInArray(unit4, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit5, visibleForPlayerUnits), false);

            done();
        });

        it('no units should not be inside visibleForPlayer units', (done) => {
            removeUnitFromVisibleArray(unit3);

            assert.equal(isUnitInArray(unit1, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit2, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit3, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit4, visibleForPlayerUnits), false);
            assert.equal(isUnitInArray(unit5, visibleForPlayerUnits), false);

            done();
        });

    });

});