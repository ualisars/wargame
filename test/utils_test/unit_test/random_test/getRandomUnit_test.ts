import { assert } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeAllUnits, playerUnits } from "../../../../src/store/unit/units";
import { removeUnit } from "../../../../src/unit/remove";
import { getRandomUnit } from "../../../../src/utils/unit/random/getRandomUnit";
import { isUnitInArray } from '../../../../src/utils';

describe("randomUnit utils", () => {
    describe("getRandomUnit test", () => {
        let unit1:Unit, unit2:Unit, unit3:Unit, unit4:Unit;
        let createdUnits: Unit[] = [];
        before(() => {
            removeAllUnits();
            unit1 = createUnit('Hoplites', 440, 160, 'player');
            unit2 = createUnit('HeavyInfantry', 400, 160, 'player');
            unit3 = createUnit('HeavyCavalry', 480, 200, 'player');
            unit4 = createUnit('Scouts', 440, 240, 'player');
            createdUnits.push(unit1);
            createdUnits.push(unit2);
            createdUnits.push(unit3);
            createdUnits.push(unit4);
        });
        after(() => {
            removeUnit(unit1);
            removeUnit(unit2);
            removeUnit(unit3);
            removeUnit(unit4);
        });
        describe("get first random unit", () => {
            let randomUnit: Unit;
            before(() => {
                randomUnit = getRandomUnit(playerUnits);
            });
            it("random unit should be one of the player units", () => {
                assert.equal(isUnitInArray(randomUnit, playerUnits), true);
            });
            it("random unit should be one of the created units", () => {
                assert.equal(isUnitInArray(randomUnit, createdUnits), true);
            });
        });
        describe("get second random unit", () => {
            let randomUnit: Unit;
            before(() => {
                randomUnit = getRandomUnit(playerUnits);
            });
            it("random unit should be one of the player units", () => {
                assert.equal(isUnitInArray(randomUnit, playerUnits), true);
            });
            it("random unit should be one of the created units", () => {
                assert.equal(isUnitInArray(randomUnit, createdUnits), true);
            });
        });
    });
});