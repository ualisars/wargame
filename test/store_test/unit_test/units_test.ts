import {assert} from 'chai';
import {
    computerUnits,
    playerUnits,
    removeFromUnits,
    removeFromPlayerUnits,
    removeFromComputerUnits,
    removeAllComputerUnits,
    removeAllPlayerUnits,
    removeAllUnits,
    units
} from '../../../src/store/unit/units';
import {isUnitInArray} from '../../../src/utils/unit/general';
import {createUnit} from '../../../src/unit/create';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';

describe('Unit store test',() => {

    describe('removeFromPlayerUnits test', () => {

        let unit1:Unit, unit2:Unit, unit3:Unit;

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
        });

        it('unit1 should not be in the playerUnits', (done) => {
            
            removeFromPlayerUnits(unit1);
            assert.equal(isUnitInArray(unit1, playerUnits), false);
            assert.equal(isUnitInArray(unit2, playerUnits), true);
            assert.equal(isUnitInArray(unit3, playerUnits), true);
            done();
        });

        it('unit2 should not be in the playerUnits', (done) => {
            
            removeFromPlayerUnits(unit2);

            assert.equal(isUnitInArray(unit1, playerUnits), false);
            assert.equal(isUnitInArray(unit2, playerUnits), false);
            assert.equal(isUnitInArray(unit3, playerUnits), true);

            done();
        });

        it('unit3 should not be in the playerUnits', (done) => {
            
            removeFromPlayerUnits(unit3);

            assert.equal(isUnitInArray(unit1, playerUnits), false);
            assert.equal(isUnitInArray(unit2, playerUnits), false);
            assert.equal(isUnitInArray(unit3, playerUnits), false);

            done();
        });
    });

    describe('removeFromComputerUnits test', () => {

        let unit1:Unit, unit2:Unit, unit3:Unit;

        before(() => {
        removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'computer');
            unit2 = createUnit('scouts', 1249, 400, 'computer');
            unit3 = createUnit('pikemen', 120, 560, 'computer');
        });

        // remove units after test completed
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
        });

        it('unit1 should not be in the computerUnits', (done) => {
            
            removeFromComputerUnits(unit1);

            assert.equal(isUnitInArray(unit1, computerUnits), false);
            assert.equal(isUnitInArray(unit2, computerUnits), true);
            assert.equal(isUnitInArray(unit3, computerUnits), true);
            done();
        });

        it('unit2 should not be in the computerUnits', (done) => {
            
            removeFromComputerUnits(unit2);

            assert.equal(isUnitInArray(unit1, computerUnits), false);
            assert.equal(isUnitInArray(unit2, computerUnits), false);
            assert.equal(isUnitInArray(unit3, computerUnits), true);

            done();
        });

        it('unit3 should not be in the computerUnits', (done) => {
            
            removeFromComputerUnits(unit3);

            assert.equal(isUnitInArray(unit1, computerUnits), false);
            assert.equal(isUnitInArray(unit2, computerUnits), false);
            assert.equal(isUnitInArray(unit3, computerUnits), false);

            done();
        });

    });

    describe('removeFromUnits test', () => {

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

        it('unit1 should not be in playerUnits and in the units', (done) => {

            removeFromUnits(unit1);

            assert.equal(isUnitInArray(unit1, units), false);
            assert.equal(isUnitInArray(unit1, playerUnits), false);

            done();

        });

        it('unit2 should not be in computerUnits and in the units', (done) => {

            removeFromUnits(unit2);

            assert.equal(isUnitInArray(unit2, units), false);
            assert.equal(isUnitInArray(unit2, computerUnits), false);

            done();
            
        });

        it('unit3 should not be in computerUnits and in the units', (done) => {

            removeFromUnits(unit3);

            assert.equal(isUnitInArray(unit3, units), false);
            assert.equal(isUnitInArray(unit3, computerUnits), false);

            done();
            
        });

        it('unit4 should not be in playerUnits and in the units', (done) => {

            removeFromUnits(unit4);

            assert.equal(isUnitInArray(unit4, units), false);
            assert.equal(isUnitInArray(unit4, playerUnits), false);

            done();

        });

        it('unit5 should not be in playerUnits and in the units', (done) => {

            removeFromUnits(unit5);

            assert.equal(isUnitInArray(unit5, units), false);
            assert.equal(isUnitInArray(unit5, playerUnits), false);

            done();

        });

    });


    describe('removeAllPlayerUnits test', () => {

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

        it('unit1, unit4 and unit5 should not be in the playerUnits', () => {
            
            removeAllPlayerUnits();

            assert.equal(isUnitInArray(unit1, playerUnits), false);
            assert.equal(isUnitInArray(unit4, playerUnits), false);
            assert.equal(isUnitInArray(unit5, playerUnits), false);
            
            assert.equal(isUnitInArray(unit2, computerUnits), true);
            assert.equal(isUnitInArray(unit3, computerUnits), true);
        });
    });


    describe('removeAllComputerUnits test', () => {

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

        it('unit2 and unit3 should not be in the computerUnits', () => {
            
            removeAllComputerUnits();

            assert.equal(isUnitInArray(unit2, computerUnits), false);
            assert.equal(isUnitInArray(unit3, computerUnits), false);

            assert.equal(isUnitInArray(unit1, playerUnits), true);
            assert.equal(isUnitInArray(unit4, playerUnits), true);
            assert.equal(isUnitInArray(unit5, playerUnits), true);

        });

    });

    describe('removeAllUnits test', () => {

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

        it('units, playersUnits and computerUnits should be empty', () => {
            
            removeAllUnits();

            assert.equal(isUnitInArray(unit1, computerUnits), false);
            assert.equal(isUnitInArray(unit2, computerUnits), false);
            assert.equal(isUnitInArray(unit3, computerUnits), false);
            assert.equal(isUnitInArray(unit4, computerUnits), false);
            assert.equal(isUnitInArray(unit5, computerUnits), false);

            assert.equal(isUnitInArray(unit1, playerUnits), false);
            assert.equal(isUnitInArray(unit2, playerUnits), false);
            assert.equal(isUnitInArray(unit3, playerUnits), false);
            assert.equal(isUnitInArray(unit4, playerUnits), false);
            assert.equal(isUnitInArray(unit5, playerUnits), false);

            assert.equal(isUnitInArray(unit1, units), false);
            assert.equal(isUnitInArray(unit2, units), false);
            assert.equal(isUnitInArray(unit3, units), false);
            assert.equal(isUnitInArray(unit4, units), false);
            assert.equal(isUnitInArray(unit5, units), false);

        });
    });
});

