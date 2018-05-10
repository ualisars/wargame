import {assert} from 'chai';
import {
    addToRevealedUnits,
    removeFromRevealedUnits,
    revealedUnits
} from '../../../../src/store/AI/enemies/revealedEnemies';
import {isUnitInArray} from '../../../../src/utils/unit/general';
import {createUnit} from '../../../../src/unit/create';
import {removeAllUnits} from '../../../../src/store/unit/units';
import {removeUnit} from '../../../../src/unit/remove';
import Unit from '../../../../src/unit/types/Unit';

describe('AI enemies store test', () => {

    describe('addToRevealedUnits test', () => {
        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;

        before(() => {
            removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'player');
            unit2 = createUnit('scouts', 1249, 400, 'player');
            unit3 = createUnit('pikemen', 120, 560, 'player');
        });

        // remove units after test completed
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);
            removeUnit(unit5);
        });

        it('unit1 and unit2 should be in revealedUnits', (done) => {
            
            addToRevealedUnits(unit1);
            addToRevealedUnits(unit2);

            assert.equal(isUnitInArray(unit1, revealedUnits), true);
            assert.equal(isUnitInArray(unit2, revealedUnits), true);
            assert.equal(isUnitInArray(unit3, revealedUnits), false);

            done();

        });

        it('unit3 should be inside revealedUnits', (done) => {

            addToRevealedUnits(unit3);

            assert.equal(isUnitInArray(unit1, revealedUnits), true);
            assert.equal(isUnitInArray(unit2, revealedUnits), true);
            assert.equal(isUnitInArray(unit3, revealedUnits), true);

            done();
        });
    });

    describe('removeFromRevealedUnits test', () => {

        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;

        before(() => {
            removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'player');
            unit2 = createUnit('scouts', 1249, 400, 'player');
            unit3 = createUnit('pikemen', 120, 560, 'player');

            addToRevealedUnits(unit1);
            addToRevealedUnits(unit2);
            addToRevealedUnits(unit3);
        });

        // remove units after test completed
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);
            removeUnit(unit5);
        });

        it('unit1 and unit2 should not be in revealedUnits', (done) => {
            
            removeFromRevealedUnits(unit1);
            removeFromRevealedUnits(unit2);

            assert.equal(isUnitInArray(unit1, revealedUnits), false);
            assert.equal(isUnitInArray(unit2, revealedUnits), false);
            assert.equal(isUnitInArray(unit3, revealedUnits), true);

            done();

        });

        it('unit3 should no longer be in revealedUnits', (done) => {

            removeFromRevealedUnits(unit3);

            assert.equal(isUnitInArray(unit1, revealedUnits), false);
            assert.equal(isUnitInArray(unit2, revealedUnits), false);
            assert.equal(isUnitInArray(unit3, revealedUnits), false);

            done();

        });
    });
});