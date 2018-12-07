import { Unit } from "../../../unit";
import { getInterceptionNodes } from "./getInterceptionNodes";
import { playerUnits, computerUnits } from "../../../store/unit/units";
import { isUnitInArray } from "../general";

export const getInterceptedEnemies = (unit: Unit): Unit[] => {
    let enemies: Unit[];
    if(unit.controlBy === 'player') {
        enemies = Object.assign([], computerUnits);
    } 
    else if(unit.controlBy === 'computer') {
        enemies = Object.assign([], playerUnits);
    }
    let interceptionEnemies: Unit[] = [];
    let interceptionNodes = getInterceptionNodes(unit);
    for(let enemy of enemies) {
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