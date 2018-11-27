import { Unit } from "../../../unit";
import { getInterceptionNodes } from "./getInterceptionNodes";
import { playerUnits } from "../../../store/unit/units";
import { isUnitInArray } from "../general";

export const getInterceptedEnemies = (unit: Unit): Unit[] => {
    let interceptionEnemies: Unit[] = [];
    let interceptionNodes = getInterceptionNodes(unit);
    for(let enemy of playerUnits) {
        for(let node of interceptionNodes) {
            if(enemy.currentNode.x == node.x && enemy.currentNode.y === node.y) {
                if(!isUnitInArray(enemy, interceptionEnemies)) {
                    interceptionEnemies.push(enemy);
                }
            }
        }
    }
    return interceptionEnemies;
}