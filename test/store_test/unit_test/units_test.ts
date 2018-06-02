import {assert} from 'chai';
import {
    addToComputerUnits,
    addToPlayerUnits,
    addToUnits,
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
import {chooseUnitType} from '../../../src/unit/choose';
import {createUnit} from '../../../src/unit/create';
import {removeUnit} from '../../../src/unit/remove';
import {incUnitId} from '../../../src/store/unit/unitId';
import Unit from '../../../src/unit/types/Unit';

describe('Unit store test',() => {

    describe('addToComputerUnits test', () => {

        let unit1:Unit, unit2:Unit, unit3:Unit, unit4: Unit;

        before(() => {

            removeAllUnits();

            unit1 = chooseUnitType('LightCavalry', 400, 200, 'computer');
            incUnitId();
            unit2 = chooseUnitType('Scouts', 440, 280, 'computer');
            incUnitId();
            unit3 = chooseUnitType('Pikemen', 1080, 320, 'computer');
            incUnitId();
            unit4 = chooseUnitType('Archers', 80, 360, 'computer');
            incUnitId();
        });

        // remove units after test completed
        after(() => {

            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);

        });

        it('unit1 should be in computerUnits', () => {

            addToComputerUnits(unit1);

            assert.equal(isUnitInArray(unit1, computerUnits), true);
        });

        it('unit2 should be in computerUnits', () => {

            addToComputerUnits(unit2);

            assert.equal(isUnitInArray(unit2, computerUnits), true);
        });

        it('unit3 should be in computerUnits', () => {

            addToComputerUnits(unit3);

            assert.equal(isUnitInArray(unit3, computerUnits), true);
        });

        it('unit4 should be in computerUnits', () => {

            addToComputerUnits(unit4);

            assert.equal(isUnitInArray(unit4, computerUnits), true);
        });

        
    });

    describe('addToPlayerUnits test', () => {

        let unit1:Unit, unit2:Unit, unit3:Unit, unit4: Unit;

        before(() => {

            removeAllUnits();

            unit1 = chooseUnitType('LightCavalry', 400, 200, 'player');
            incUnitId();
            unit2 = chooseUnitType('Scouts', 440, 280, 'player');
            incUnitId();
            unit3 = chooseUnitType('Pikemen', 1080, 320, 'player');
            incUnitId();
            unit4 = chooseUnitType('Archers', 80, 360, 'player');
            incUnitId();

        });

        // remove units after test completed
        after(() => {

            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);

        });

        it('unit1 should be in playerUnits', () => {

            addToPlayerUnits(unit1);

            assert.equal(isUnitInArray(unit1, playerUnits), true);

        });

        it('unit2 should be in playerUnits', () => {

            addToPlayerUnits(unit2);

            assert.equal(isUnitInArray(unit2, playerUnits), true);

        });

        it('unit3 should be in playerUnits', () => {

            addToPlayerUnits(unit3);

            assert.equal(isUnitInArray(unit3, playerUnits), true);

        });

        it('unit4 should be in playerUnits', () => {

            addToPlayerUnits(unit4);

            assert.equal(isUnitInArray(unit4, playerUnits), true);

        });

    });

    describe('addToUnits test', () => {

        let unit1:Unit, unit2:Unit, unit3:Unit, unit4: Unit;

        before(() => {

            removeAllUnits();

            unit1 = chooseUnitType('LightCavalry', 400, 200, 'player');
            incUnitId();
            unit2 = chooseUnitType('Scouts', 440, 280, 'computer');
            incUnitId();
            unit3 = chooseUnitType('Pikemen', 1080, 320, 'computer');
            incUnitId();
            unit4 = chooseUnitType('Archers', 80, 360, 'player');
            incUnitId();

        });

        // remove units after test completed
        after(() => {

            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);

        });

        it('unit1 should be in units', (done) => {

            addToUnits(unit1);

            assert.equal(isUnitInArray(unit1, units), true);

            done();

        });

        it('unit1 should be in playerUnits', (done) => {

            assert.equal(isUnitInArray(unit1, playerUnits), true);

            done();

        });

        

        it('unit2 should be in units', (done) => {

            addToUnits(unit2);

            assert.equal(isUnitInArray(unit2, units), true);

            done();

        });

        it('unit2 should be in computerUnits', (done) => {

            assert.equal(isUnitInArray(unit2, computerUnits), true);
           
            done();

        });

        it('unit3 should be in units', (done) => {

            addToUnits(unit3);

            assert.equal(isUnitInArray(unit3, units), true);

            done();

        });

        it('unit3 should be in computerUnits', (done) => {

            assert.equal(isUnitInArray(unit3, computerUnits), true);

            done();

        });

        it('unit4 should be in units', (done) => {

            addToUnits(unit4);

            assert.equal(isUnitInArray(unit4, units), true);

            done();

        });

        it('unit4 should be in playerUnits', (done) => {

            assert.equal(isUnitInArray(unit4, playerUnits), true);

            done();

        });

    });

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

