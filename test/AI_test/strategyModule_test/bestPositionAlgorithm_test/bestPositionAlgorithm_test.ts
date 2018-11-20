import { assert } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeUnit } from "../../../../src/unit/remove";
import { removeAllUnits } from "../../../../src/store/unit/units";
import { addToRevealedUnits } from "../../../../src/store/AI/enemies/revealedEnemies";
import { bestPosition } from "../../../../src/AI/strategyModule/decisionUnit/bestPositionAlgorithm/bestPosition";
import { assessOffensivePoints } from "../../../../src/AI/strategyModule/decisionUnit/strategy/offensivePoints/assessOffensivePoints";
import Positions from '../../../../src/store/AI/positions/Positions';

describe("AI strategy module test", () => {
    describe("bestPositionAlgorithm test", () => {
        let computerUnit1:Unit, computerUnit2:Unit;
        let playerUnit:Unit;
        before(() => {
            removeAllUnits();
            computerUnit1 = createUnit('Archers', 40, 400, 'computer');
            computerUnit2 = createUnit('Archers', 40, 440, 'computer');
            playerUnit = createUnit('Pikemen', 80, 400, 'player');
            addToRevealedUnits(playerUnit);
        });
        after(() => {
            removeUnit(computerUnit1);
            removeUnit(playerUnit);
        });
        it("run algorithm", () => {
            let position = bestPosition();
            console.log('positions', position);
            console.log('positions count', Positions.count);
            assert.equal(1, 2);
        });
    });
});