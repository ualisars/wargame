import { Unit } from "../../types";
import { getDistanceBetweenTwoUnitsInGrids, getSurroundedNodes } from "../../../utils";
import { getRandomUnit } from "../../../utils/unit/random/getRandomUnit";
import { attackEnemy } from "..";
import { getSurroundedUnits } from "../../../utils/surrounded/getSurroundedUnits";
import { visibleForComputerUnits } from "../../../store/unit/visibleUnits";
import { getRandomNode } from "../../../utils/node";
import { currentCommandNumber } from "../../../AI/strategyModule/decisionUnit/commandNumber/currentCommandNumber";
import { moveTo } from '../common/moveTo';

export const beCloseTo = (
    unit: Unit, 
    actionUnit: Unit, 
    commandNumber: number, 
    protection: boolean = false
) => {
    if(commandNumber !== currentCommandNumber) return;
    if(!unit.isFighting && !unit.isMoving) {
        let distanceBetweenUnits: number = getDistanceBetweenTwoUnitsInGrids(unit, actionUnit);
        if(actionUnit.isFighting) {
            if(actionUnit.figthAgainst.all.length != 0) {
                let unitToAttack: Unit = getRandomUnit(actionUnit.figthAgainst.all);
                attackEnemy(unit, unitToAttack);
            }
        }
        else if(protection && getSurroundedUnits(actionUnit, visibleForComputerUnits, 3).length > 0) {
            let enemies = getSurroundedUnits(actionUnit, visibleForComputerUnits, 3);
            let unitToAttack: Unit = getRandomUnit(enemies);
            attackEnemy(unit, unitToAttack);
        }
        else if(distanceBetweenUnits >= 2) {
            let nodes = getSurroundedNodes(actionUnit, 2);
            let node = getRandomNode(nodes);
            moveTo(unit, node.x, node.y);
        }
    } 
    setTimeout(() => {
        beCloseTo(unit, actionUnit, commandNumber, protection);
    }, 2000);  
}