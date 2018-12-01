import { assert } from 'chai'; 
import { Unit, createUnit } from "../../../../src/unit";
import { removeAllUnits } from "../../../../src/store/unit/units";
import { removeUnit } from "../../../../src/unit/remove";
import { getNodeFromMap, isUnitInArray } from "../../../../src/utils";
import MapNode from "../../../../src/map/nodes/MapNode";
import { getBlockedEnemies } from "../../../../src/utils/unit/unitPosition/getBlockedEnemies";

describe("unit position utils", () => {
    describe("getBlockedEnemies test", () => {
        let unit:Unit;
        let enemy1: Unit, enemy2: Unit, enemy3: Unit, enemy4: Unit;

        let unitNextNode: MapNode;
        let enemy1NextNode: MapNode;
        let enemy2NextNode: MapNode;
        let enemy3NextNode: MapNode;
        let enemy4NextNode: MapNode;

        before(() => {
            removeAllUnits();
            unit = createUnit('LightCavalry', 320, 80, 'computer');
            enemy1 = createUnit('HeavyInfantry', 320, 160, 'player');
            enemy2 = createUnit('HeavyCavalry', 360, 120, 'player');
            enemy3 = createUnit('Pikemen', 280, 160, 'player');
            enemy4 = createUnit('Scouts', 0, 0, 'player');

            unitNextNode = getNodeFromMap(320, 120);
            enemy1NextNode = getNodeFromMap(320, 120);
            enemy2NextNode = getNodeFromMap(320, 120);
            enemy3NextNode = getNodeFromMap(280, 120);
            enemy4NextNode = getNodeFromMap(0, 40);

            unit.setNextNode(unitNextNode);
            enemy1.setNextNode(enemy1NextNode);
            enemy2.setNextNode(enemy2NextNode);
            enemy3.setNextNode(enemy3NextNode);
            enemy4.setNextNode(enemy4NextNode);
        });

        after(() => {
            removeUnit(unit);
            removeUnit(enemy1);
            removeUnit(enemy2);
            removeUnit(enemy3);
            removeUnit(enemy4);
        });

        describe("get unit's blocked enemies", () => {
            let blockedEnemies: Unit[];
            before(() => {
                blockedEnemies = getBlockedEnemies(unit);
            });
            it("enemy1 should be in the blocked enemies", () => {
                assert.equal(isUnitInArray(enemy1, blockedEnemies), true);
            });
            it("enemy2 should be in the blocked enemies", () => {
                assert.equal(isUnitInArray(enemy2, blockedEnemies), true);
            });
            it("enemy3 should not be in the blocked enemies", () => {
                assert.equal(isUnitInArray(enemy3, blockedEnemies), false);
            });
            it("enemy4 should not be in the blocked enemies", () => {
                assert.equal(isUnitInArray(enemy4, blockedEnemies), false);
            });
        });
    });
});