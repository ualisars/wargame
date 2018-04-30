import {assert} from 'chai';
import {
    addToHidingEnemies,
    removeFromHidingEnemies,
    hidingEnemies
} from '../../../../src/store/AI/enemies/hidingEnemies';
import {
    addUnitIntoVisibleArray,
    removeUnitFromVisibleArray
} from '../../../../src/store/unit/visibleUnits';
import {isUnitInArray} from '../../../../src/utils/unit/general';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';

describe('store AI test', () => {

    describe('addToHidingEnemies test', () => {
        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;

        before(() => {
        removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'player');
            unit2 = createUnit('scouts', 1249, 400, 'player');
            unit3 = createUnit('pikemen', 120, 560, 'player');
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

        it('unit1, unit2 and unit5 should be inside hidingEnemies', (done) => {
            addToHidingEnemies(unit1);
            addToHidingEnemies(unit2);
            addToHidingEnemies(unit5);

            assert.equal(isUnitInArray(unit1, hidingEnemies), true);
            assert.equal(isUnitInArray(unit2, hidingEnemies), true);
            assert.equal(isUnitInArray(unit3, hidingEnemies), false);
            assert.equal(isUnitInArray(unit4, hidingEnemies), false);
            assert.equal(isUnitInArray(unit5, hidingEnemies), true);
            done();
        });
    });

    describe('removeFromHidingEnemies test', () => {
        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;

        before(() => {
        removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'player');
            unit2 = createUnit('scouts', 1249, 400, 'player');
            unit3 = createUnit('pikemen', 120, 560, 'player');
            unit4 = createUnit('militia', 560, 0, 'player');
            unit5 = createUnit('hoplites', 560, 40, 'player');

            addToHidingEnemies(unit1);
            addToHidingEnemies(unit2);
            addToHidingEnemies(unit3);
            addToHidingEnemies(unit4);
            addToHidingEnemies(unit5);
        });

        // remove units after test completed
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);
            removeUnit(unit5);
        });

        it('unit2 should not be inside hidingEnemies', (done) => {
            addUnitIntoVisibleArray(unit2);
            removeFromHidingEnemies(unit2);
            assert.equal(isUnitInArray(unit1, hidingEnemies), true);
            assert.equal(isUnitInArray(unit2, hidingEnemies), false);
            assert.equal(isUnitInArray(unit3, hidingEnemies), true);
            assert.equal(isUnitInArray(unit4, hidingEnemies), true);
            assert.equal(isUnitInArray(unit5, hidingEnemies), true);
            done();
        });

        it('unit1, unit2 and unit5 should not be inside hidingEnemies', (done) => {
            addUnitIntoVisibleArray(unit1);
            addUnitIntoVisibleArray(unit5);
            removeFromHidingEnemies(unit1);
            removeFromHidingEnemies(unit5);
            assert.equal(isUnitInArray(unit1, hidingEnemies), false);
            assert.equal(isUnitInArray(unit2, hidingEnemies), false);
            assert.equal(isUnitInArray(unit3, hidingEnemies), true);
            assert.equal(isUnitInArray(unit4, hidingEnemies), true);
            assert.equal(isUnitInArray(unit5, hidingEnemies), false);
            done();
        });

    });

});
