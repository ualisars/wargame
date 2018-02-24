import {getUnitsByTask} from '../../utils/unit/actions';
import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
import {controlZone} from '../processModule/controlZone/controlZone';
import {getDistanceBetweenTwoUnitsInGrids} from '../../utils';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../utils/node';
import {aStar} from '../../path';
import {map} from '../../map/createMap';
import {
  pursueUnit,
  assignUnitMoveToPosition
} from '../../unit';
import {getNodeFromMap} from '../../utils';
import {occupyControlZone} from './occupyControlZone';


export const findClosestEnemyInZone = (unit:any, enemies:any[]):any => {
  if(enemies.length === 0) { // only one unit remained
    return null;
  }
  let closestEnemy:any = enemies[0];
  for(let i = 1; i < enemies.length; ++i) {
    let closestUnitDistance = getDistanceBetweenTwoUnitsInGrids(closestEnemy, unit);
    let unitDistance = getDistanceBetweenTwoUnitsInGrids(enemies[i], unit);
    if(unitDistance < closestUnitDistance) {
      closestEnemy = enemies[i];
    }
  }
  return closestEnemy;
}


export const getEnemiesInsideZone = ():any[] => {
  let enemiesInsideZone:any[] = [];
  for(let enemy of playerUnits) {
    for(let node of controlZone) {
      if(enemy.currentNode.x === node.x && enemy.currentNode.y === node.y) {
        enemiesInsideZone.push(enemy);
      }
    }
  }
  return enemiesInsideZone;
}

export const defenderMovement = () => {
    if(getEnemiesInsideZone.length > 0) { // enemy try to enter the zone
      let enemies:any[] = getEnemiesInsideZone();
      let defenders:any[] = getUnitsByTask('holdPosition');
      for(let defender of defenders) {
        let closestEnemy:any = findClosestEnemyInZone(defender, enemies);
        let defenderX:number = defender.currentNode.x;
        let defenderY:number = defender.currentNode.y;
        let enemyX:number = closestEnemy.currentNode.x;
        let enemyY:number = closestEnemy.currentNode.y;
        if(closestEnemy && closestEnemy.isVisible) {
          if(defender.isMoving) { // if unit's moving don't fire pursue function
            defender.setUnitToPursue(closestEnemy);
          } else {
            defender.setUnitToPursue(closestEnemy);
            let startNode = getNodeFromMap(defenderX, defenderY, map);
            let finishNode = getNodeFromMap(enemyX, enemyY, map);
            let path:any = aStar(map, startNode, finishNode);
            pursueUnit(defender, closestEnemy, enemyX, enemyY, 0, path, true);
          }
        }
      }
    } else {
      occupyControlZone();
    }
}
