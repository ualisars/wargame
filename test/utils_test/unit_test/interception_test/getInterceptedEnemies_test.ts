import { assert } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeAllUnits } from "../../../../src/store/unit/units";
import { removeUnit } from "../../../../src/unit/remove";
import { getInterceptedEnemies } from "../../../../src/utils/unit/interception/getInterceptedEnemies";
import { isUnitInArray } from '../../../../src/utils';

describe("unit interception utils", () => {
    describe("getInterceptionEnemies test", () => {
        let unit: Unit;
        let enemy1: Unit, enemy2: Unit, enemy3: Unit;
        let enemy4: Unit, enemy5: Unit;
        let interceptedEnemies: Unit[];
        before(() => {
            removeAllUnits();
            unit = createUnit('HeavyCavalry', 320, 120, 'computer');
            enemy1 = createUnit('HeavyInfantry', 360, 120, 'player');
            enemy2 = createUnit('Militia', 360, 160, 'player');
            enemy3 = createUnit('Scouts', 280, 80, 'player');
            enemy4 = createUnit('LightCavalry', 320, 160, 'player');
            enemy5 = createUnit('Scouts', 520, 280, 'player');
            interceptedEnemies = getInterceptedEnemies(unit);
        });
        after(() => {
            removeUnit(unit);
            removeUnit(enemy1);
            removeUnit(enemy2);
            removeUnit(enemy3);
            removeUnit(enemy4);
            removeUnit(enemy5);
        });
        it("enemy1 should be intercepted", () => {
            assert.equal(isUnitInArray(enemy1, interceptedEnemies), true);
        });
        it("enemy2 should not be intercepted", () => {
            assert.equal(isUnitInArray(enemy2, interceptedEnemies), false);
        });
        it("enemy3 should not be intercepted", () => {
            assert.equal(isUnitInArray(enemy3, interceptedEnemies), false);
        });
        it("enemy4 should be intercepted", () => {
            assert.equal(isUnitInArray(enemy4, interceptedEnemies), true);
        });
        it("enemy5 should not be intercepted", () => {
            assert.equal(isUnitInArray(enemy5, interceptedEnemies), false);
        });
    });
});