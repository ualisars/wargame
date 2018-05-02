import {assert} from 'chai';
import {
    incUnitId,
    unitId
} from '../../../src/store/unit/unitId';
import {createUnit} from '../../../src/unit/create';
import {removeAllUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';

describe('unitId test', () => {

    describe('incUnitId test', () => {
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

        it('unitId should increment by 1', () => {
            assert.equal(unit2.id - unit1.id, 1);
            assert.equal(unit3.id - unit2.id, 1);
            assert.equal(unit4.id - unit3.id, 1);
            assert.equal(unit5.id - unit4.id, 1);
        });
    });
});