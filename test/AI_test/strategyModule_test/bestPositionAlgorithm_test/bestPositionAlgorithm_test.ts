import { assert } from 'chai';
import { Unit, createUnit } from "../../../../src/unit";
import { removeUnit } from "../../../../src/unit/remove";
import { removeAllUnits } from "../../../../src/store/unit/units";
import { bestActionAlgorithm } from '../../../../src/AI/strategyModule/decisionUnit/bestPositionAlgorithm/bestActions';
import { addUnitIntoVisibleUnits } from '../../../../src/store';

describe("AI strategy module test", () => {
    describe("bestActionAlgorithm test", () => {
        let computerUnit1:Unit, computerUnit2:Unit;
        let playerUnit:Unit, playerUnit2: Unit;
        before(() => {
            removeAllUnits();
            computerUnit1 = createUnit('LightCavalry', 40, 400, 'computer');
            computerUnit2 = createUnit('Pikemen', 40, 440, 'computer');
            playerUnit = createUnit('Pikemen', 80, 400, 'player');
            playerUnit2 = createUnit('Archers', 80, 400, 'player');
            addUnitIntoVisibleUnits(playerUnit);
            addUnitIntoVisibleUnits(playerUnit2);
        });
        after(() => {
            removeUnit(computerUnit1);
            removeUnit(computerUnit2);
            removeUnit(playerUnit);
            removeUnit(playerUnit2);
        });
        it("run algorithm", () => {
            let position = bestActionAlgorithm();
            let action1 = position.getCommandsByUnitId(computerUnit1.id);
            let action2 = position.getCommandsByUnitId(computerUnit2.id);
            if(action1.actionUnit) {
                console.log('computerUnit1 action unit id', action1.actionUnit.id);
                console.log('computerUnit1 action unit', action1.actionUnit.name);
            }
            if(action2.actionUnit) {
                console.log('computerUnit2 action unit id', action2.actionUnit.id);
                console.log('computerUnit2 action unit', action2.actionUnit.name);
            }
            
            console.log('computerUnit1 command', action1.command);
           
            console.log('computerUnit2 command', action2.command);
            assert.equal(1, 2);
        });
    });
});