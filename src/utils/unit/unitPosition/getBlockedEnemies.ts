import { Unit } from "../../../unit";
import { computerUnits, playerUnits } from "../../../store/unit/units";

export const getBlockedEnemies = (unit: Unit): Unit[] => {
    let blockedEnemies: Unit[] = [];
    let enemies: Unit[];
    if(unit.controlBy === 'player') {
        enemies = Object.assign([], computerUnits);
    } 
    else if(unit.controlBy === 'computer') {
        enemies = Object.assign([], playerUnits);
    } 
    for(let enemy of enemies) {
        if(unit.nextNode.x === enemy.nextNode.x && unit.nextNode.y === enemy.nextNode.y) {
            blockedEnemies.push(enemy);
        }
    }
    return blockedEnemies;
}