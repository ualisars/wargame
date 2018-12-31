import { Unit } from "../../types";
import MapNode from "../../../map/nodes/MapNode";
import { currentCommandNumber } from "../../../AI/strategyModule/decisionUnit/commandNumber/currentCommandNumber";
import { computerUnits } from "../../../store/unit/units";
import { getClosestEnemyToUnit } from "../../../utils/unit/AI";
import { attackEnemy } from "..";
import { getSurroundedUnits } from "../../../utils/surrounded/getSurroundedUnits";
import { assessVulnerability } from "../../../AI/processModule/vulnerability";
import PriorityQueue from "../../../store/queues/PriorityQueue";
import { getUnitById } from "../../../utils/unit/general";
import { moveTo } from '../common/moveTo';
import { beCloseTo } from "./beCloseTo";

export const advance = (unit: Unit, actionNode: MapNode, commandNumber: number) => {
    if(commandNumber !== currentCommandNumber) return;
    if(!unit.isMoving && !unit.isFighting) {
        if(unit.currentNode.x != actionNode.x && unit.currentNode.y != actionNode.y) {
            if(actionNode){
                moveTo(unit, actionNode.x, actionNode.y);
            }
        }
        else if(computerUnits.length === 1) {
            let enemy = getClosestEnemyToUnit(unit);
            attackEnemy(unit, enemy);
        }
        else {
            let surroundedAllies = getSurroundedUnits(unit, computerUnits, 5);
            let priorityQueue = new PriorityQueue();
            for(let ally of surroundedAllies) {
                let vulnerability = assessVulnerability(ally);
                priorityQueue.insert(ally.id, vulnerability);
            }
            while(!priorityQueue.isEmpty()) {
                let element = priorityQueue.extractMax();
                let ally = getUnitById(element.key);
                if(element.value >= 80 && ally.isFighting) {
                    beCloseTo(unit, ally, commandNumber, true);
                    break;
                }
            }
        }
    }
    setTimeout(() => {
        advance(unit, actionNode, commandNumber);
    }, 2000);
}