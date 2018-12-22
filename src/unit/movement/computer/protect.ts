import { Unit } from "../../types";
import { getDistanceBetweenTwoUnitsInGrids, getSurroundedNodes } from "../../../utils";
import { getRandomUnit } from "../../../utils/unit/random/getRandomUnit";
import { attackEnemy } from "..";
import { getSurroundedUnits } from "../../../utils/surrounded/getSurroundedUnits";
import { visibleForComputerUnits } from "../../../store/unit/visibleUnits";
import { getRandomNode } from "../../../utils/node";
import { currentCommandNumber } from "../../../AI/strategyModule/decisionUnit/commandNumber/currentCommandNumber";

export const protect = (unit: Unit, unitToProtect: Unit, commandNumber: number) => {
    if(commandNumber !== currentCommandNumber) return;
    if(!unit.isFighting && !unit.isMoving) {
        let distanceBetweenUnits: number = getDistanceBetweenTwoUnitsInGrids(unit, unitToProtect);
        if(unitToProtect.isFighting) {
            if(unitToProtect.figthAgainst.all.length != 0) {
                let unitToAttack: Unit = getRandomUnit(unitToProtect.figthAgainst.all);
                attackEnemy(unit, unitToAttack);
            }
        }
        else if(getSurroundedUnits(unitToProtect, visibleForComputerUnits, 3).length > 0) {
            let enemies = getSurroundedUnits(unitToProtect, visibleForComputerUnits, 3);
            let unitToAttack: Unit = getRandomUnit(enemies);
            attackEnemy(unit, unitToAttack);
        }
        else if(distanceBetweenUnits >= 2) {
            let nodes = getSurroundedNodes(unitToProtect, 2);
            let node = getRandomNode(nodes);
            moveTo(node.x, node.y);
        }
    } 
    setTimeout(() => {
        protect(unit, unitToProtect, commandNumber);
    }, 2000);  
}