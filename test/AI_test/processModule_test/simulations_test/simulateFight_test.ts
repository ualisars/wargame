import { assert, expect } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeAllUnits } from "../../../../src/store/unit/units";
import { removeUnit } from "../../../../src/unit/remove";
import { simulateFight } from "../../../../src/AI/processModule/simulations/simulateFight";

describe("Process module tests", () => {
    describe("simulateFight test", () => {
        let unit:Unit, enemy:Unit;
        before(() => {
            removeAllUnits();
            unit = createUnit('LightCavalry', 40, 40, 'computer');
            enemy = createUnit('Pikemen', 80, 0, 'player');
        });
        after(() => {
            removeUnit(unit);
            removeUnit(enemy);
        });
        describe('simulate fight between unit and enemy', () => {
            let fightResult: any;
            let unitHealth: number;
            let enemyHealth: number;
            let unitHealthRemain: number;
            let enemyHealthRemain: number;
            let attacks: number;
            before(() => {
                fightResult = simulateFight(unit, enemy);
                unitHealth = fightResult.unitHealth;
                enemyHealth = fightResult.enemyHealth;
                unitHealthRemain = fightResult.unitHealthRemain,
                enemyHealthRemain = fightResult.enemyHealthRemain,
                attacks = fightResult.attacks;
            });
            it("enemy should have more health than unit", () => {
                expect(unitHealth).lessThan(enemyHealth);
            });
            it("unit should be destroyed", () => {
                expect(unitHealth).to.be.at.most(0);
            });
            it("enemy should be alive", () => {
                expect(enemyHealth).greaterThan(0);
            });
            it("unit should remain 0 percent of health", () => {
                assert.equal(unitHealthRemain, 0);
            });
            it("enemy should remain more than 50 percent of health", () => {
                expect(enemyHealthRemain).greaterThan(50);
            });
            it("fight lasted more than 1 turn", () => {
                expect(attacks).greaterThan(1);
            });
        });
    });
});