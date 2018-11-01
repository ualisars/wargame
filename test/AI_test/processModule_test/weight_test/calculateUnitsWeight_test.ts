import {assert} from 'chai';
import {calculateTotalUnitsWeight} from '../../../../src/AI/processModule/weight/calculateUnitsWeight';
import { Unit, createUnit } from '../../../../src/unit';
import { removeAllUnits } from '../../../../src/store/unit/units';
import { removeUnit } from '../../../../src/unit/remove';

describe('AI process module test', () => {
    describe('calculateUnitsWeight test', () => {
        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit, unit5:Unit;

        before(() => {
            removeAllUnits();
            unit1 = createUnit('lightCavalry', 1000, 80, 'computer');
            unit2 = createUnit('scouts', 1249, 400, 'computer');
            unit3 = createUnit('pikemen', 120, 560, 'computer');
            unit4 = createUnit('militia', 560, 0, 'computer');
            unit5 = createUnit('hoplites', 560, 40, 'computer');
            unit1.weight = 50;
            unit2.weight = 90;
            unit3.weight = 70;
            unit3.weight = 10;
            unit4.weight = 65;

        });

        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);
            removeUnit(unit5);
        });

        it("total unit weight should be 285", () => {
            const totalWeight = calculateTotalUnitsWeight([unit1, unit2, unit3, unit4, unit5]);
            assert.equal(totalWeight, 285);
        });
    });
});