import {getUnitsByTask} from '../../utils/unit/actions';
import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
import {controlZone} from '../processModule/controlZone/controlZone';
import {getDistanceBetweenTwoUnitsInGrids} from '../../utils';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../utils/node';


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

// export const defenderMovement = () => {
//     if()
// }
