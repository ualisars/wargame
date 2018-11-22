import { visibleForComputerUnits } from "../../../../store/unit/visibleUnits";
import { Unit } from "../../../../unit";
import { getRandomUnit } from "../../../../utils/unit/random/getRandomUnit";
import { playerUnits, computerUnits } from "../../../../store/unit/units";
import { getSurroundedNodes } from "../../../../utils";
import MapNode from "../../../../map/nodes/MapNode";
import { getRandomNode } from "../../../../utils/node";
import { getRandomValueInRange } from "../../../../utils/random";
import { Command } from "./Command";
import Action from "./Action";

export const generateRandomAction = (unit: Unit): Action => {
    let actionUnit: Unit = null;
    let actionNode: MapNode;
    let command = chooseRandomCommand();
    if(visibleForComputerUnits.length === 0 && (command === Command.MoveToNode || command === Command.Attack)) {
        command = Command.MoveToNode;
        let enemy = getRandomUnit(playerUnits);
        let nodes = getSurroundedNodes(enemy, 3);
        actionNode = getRandomNode(nodes);
    } 
    else if(command === Command.Attack) {
        actionUnit = getRandomUnit(visibleForComputerUnits);
        actionNode = actionUnit.currentNode;
    }
    else if(command === Command.MoveToNode) {
        let nodes = getSurroundedNodes(unit);
        actionNode = getRandomNode(nodes);
    }
    else if(command === Command.BeCloseToUnit) {
        actionUnit = getRandomUnit(computerUnits);
        actionNode = actionUnit.currentNode;
    }
    
    return new Action(unit, actionNode, command, actionUnit);
}

const chooseRandomCommand = (): Command => {
    let randomNumber = getRandomValueInRange(0, 2);
    let actions: Command[] = [Command.BeCloseToUnit, Command.Attack, Command.MoveToNode];
    return actions[randomNumber];
}