import { computerUnits } from "../../../store/unit/units";
import { moveTo } from '../../../unit/movement/common/moveTo';
import { bestActionAlgorithm } from "../decisionUnit/bestPositionAlgorithm/bestActions";
import Commands from "../../../store/AI/commands/Commands";
import Action from "../decisionUnit/randomAction/Action";
import { Command } from "../decisionUnit/randomAction/Command";
import { attackEnemy } from "../../../unit/movement";
import { assessVulnerability } from "../../processModule/vulnerability";
import { protect } from "../../../unit/movement/computer/protect";
import { generateCurrentCommandNumber } from "../decisionUnit/commandNumber/currentCommandNumber";
import { setCommandNumberToUnits } from "../decisionUnit/commandNumber/setCommandNumberToUnits";

export const moveUnits = () => {
    let commandNumber = generateCurrentCommandNumber();
    setCommandNumberToUnits(commandNumber);
    let commands: Commands = bestActionAlgorithm();
    for(let unit of computerUnits) {
        let action: Action = commands.getCommandsByUnitId(unit.id);
        let command = action.command;
        let node = action.node;
        if(command === Command.Attack) {
            attackEnemy(unit, action.actionUnit);
        }
        else if(command === Command.MoveToNode) {
            moveTo(unit, node.x, node.y);
        }
        else if(command === Command.BeCloseToUnit) {
            let ally = action.actionUnit;
            let unitVulnerability = assessVulnerability(unit);
            let allyVulnerability = assessVulnerability(ally);
            moveTo(unit, ally.currentNode.x, ally.currentNode.y);
            if(unitVulnerability >= allyVulnerability) {
                protect(unit, ally, commandNumber);
            } 
            else {
                // TODO: be close to ally
            } 
        }
    }
}