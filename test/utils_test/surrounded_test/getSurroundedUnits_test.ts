import {assert} from 'chai';
import {
  getSurroundedAllies,
  getSurroundedEnemies
} from '../../../src/utils/surrounded';
import {createUnit} from '../../../src/unit/create';
import {removeAllUnits, computerUnits, playerUnits} from '../../../src/store/unit/units';
import {removeUnit} from '../../../src/unit/remove';
import Unit from '../../../src/unit/types/Unit';
import { getSurroundedUnits } from '../../../src/utils/surrounded/getSurroundedUnits';

describe("surroundedUtils test", () => {
    describe("getSurroundedUnits test", () => {
        let playerUnit1: Unit, playerUnit2: Unit, playerUnit3: Unit, playerUnit4: Unit;
        let computerUnit1: Unit, computerUnit2: Unit, computerUnit3: Unit, computerUnit4: Unit;
        before(() => {
            removeAllUnits();
            playerUnit1 = createUnit('LightInfantry', 160, 240,'player');
            playerUnit2 = createUnit('HeavyInfantry', 480, 480,'player');
            playerUnit3 = createUnit('Scouts', 600, 160,'player');
            playerUnit4 = createUnit('Scouts', 80, 240,'player');
            computerUnit1 = createUnit('HeavyCavalry', 240, 200,'computer');
            computerUnit2 = createUnit('LightCavalry', 320, 160,'computer');
            computerUnit3 = createUnit('Hoplites', 240, 280,'computer');
            computerUnit4 = createUnit('Pikemen', 680, 120,'computer');
        });
        after(() => {
            removeUnit(playerUnit1);
            removeUnit(playerUnit2);
            removeUnit(playerUnit3);
            removeUnit(playerUnit4);
            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(computerUnit3);
            removeUnit(computerUnit4);
        });
        it("playerUnit1 should have 2 surrounded enemies", () => {
            let surroundedEnemies = getSurroundedUnits(playerUnit1, computerUnits, 3);
            assert.equal(surroundedEnemies.length, 2);
        });
        it("playerUnit1 should have 1 surrounded ally", () => {
            let surroundedAllies = getSurroundedUnits(playerUnit1, playerUnits, 3);
            assert.equal(surroundedAllies.length, 1);
        });
        it("playerUnit2 should have no surrounded enemies", () => {
            let surroundedEnemies = getSurroundedUnits(playerUnit2, computerUnits, 3);
            assert.equal(surroundedEnemies.length, 0);
        });
        it('playerUnit2 should have no surrounded allies', () => {
            let surroundedAllies = getSurroundedUnits(playerUnit2, playerUnits, 3);
            assert.equal(surroundedAllies.length, 0);
        });
        it("playerUnit3 should have 1 surrounded enemies", () => {
            let surroundedEnemies = getSurroundedUnits(playerUnit3, computerUnits, 3);
            assert.equal(surroundedEnemies.length, 1);
        });
        it('playerUnit3 should have no surrounded allies', () => {
            let surroundedAllies = getSurroundedUnits(playerUnit3, playerUnits, 3);
            assert.equal(surroundedAllies.length, 0);
        });
        it("playerUnit4 should have no surrounded enemies", () => {
            let surroundedEnemies = getSurroundedUnits(playerUnit4, computerUnits, 3);
            assert.equal(surroundedEnemies.length, 0);
        });
        it('playerUnit4 should have 1 surrounded allies', () => {
            let surroundedAllies = getSurroundedUnits(playerUnit4, playerUnits, 3);
            assert.equal(surroundedAllies.length, 1);
        });
        it("computerUnit1 should have 1 surrounded enemies", () => {
            let surroundedEnemies = getSurroundedUnits(computerUnit1, playerUnits, 3);
            assert.equal(surroundedEnemies.length, 1);
        });
        it("computerUnit1 should have 2 surrounded allies", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit1, computerUnits, 3);
            assert.equal(surroundedAllies.length, 2);
        });
        it("computerUnit1 should have 2 surrounded allies with 2 grids", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit1, computerUnits, 2);
            assert.equal(surroundedAllies.length, 2);
        });
        it("computerUnit1 should have 2 surrounded allies with 5 grids", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit1, computerUnits, 5);
            assert.equal(surroundedAllies.length, 2);
        });
        it("computerUnit1 should have 3 surrounded allies including oneself", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit1, computerUnits, 3, true);
            assert.equal(surroundedAllies.length, 3);
        });
        it("computerUnit2 should have no surrounded enemies", () => {
            let surroundedEnemies = getSurroundedUnits(computerUnit2, playerUnits, 3);
            assert.equal(surroundedEnemies.length, 0);
        });
        it("computerUnit2 should have 2 surrounded allies", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit2, computerUnits, 3);
            assert.equal(surroundedAllies.length, 2);
        });
        it("computerUnit2 should have 1 surrounded allies with 2 grids", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit2, computerUnits, 2);
            assert.equal(surroundedAllies.length, 1);
        });
        it("computerUnit2 should have no surrounded allies with 1 grid", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit2, computerUnits, 1);
            assert.equal(surroundedAllies.length, 0);
        });
        it("computerUnit2 should have 3 surrounded allies including oneself", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit2, computerUnits, 3, true);
            assert.equal(surroundedAllies.length, 3);
        });
        it("computerUnit2 should have 2 surrounded allies including oneself with 2 grids", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit2, computerUnits, 2, true);
            assert.equal(surroundedAllies.length, 2);
        });
        it("computerUnit2 should have 1 surrounded allies including oneself with 1 grid", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit2, computerUnits, 1, true);
            assert.equal(surroundedAllies.length, 1);
        });
        it("computerUnit3 should have 1 surrounded enemies", () => {
            let surroundedEnemies = getSurroundedUnits(computerUnit3, playerUnits, 3);
            assert.equal(surroundedEnemies.length, 1);
        });
        it("computerUnit3 should have 2 surrounded allies", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit3, computerUnits, 3);
            assert.equal(surroundedAllies.length, 2);
        });
        it("computerUnit3 should have 1 surrounded allies with 2 grids", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit3, computerUnits, 2);
            assert.equal(surroundedAllies.length, 1);
        });
        it("computerUnit3 should have no surrounded allies with 1 grid", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit3, computerUnits, 1);
            assert.equal(surroundedAllies.length, 0);
        });
        it("computerUnit2 should have 3 surrounded allies including oneself", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit3, computerUnits, 3, true);
            assert.equal(surroundedAllies.length, 3);
        });
        it("computerUnit2 should have 3 surrounded allies including oneself with 2 grids", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit3, computerUnits, 2, true);
            assert.equal(surroundedAllies.length, 2);
        });
        it("computerUnit4 should have 1 surrounded enemies", () => {
            let surroundedEnemies = getSurroundedUnits(computerUnit4, playerUnits, 3);
            assert.equal(surroundedEnemies.length, 1);
        });
        it("computerUnit3 should have no surrounded allies", () => {
            let surroundedAllies = getSurroundedUnits(computerUnit4, computerUnits, 3);
            assert.equal(surroundedAllies.length, 0);
        });
    });
});