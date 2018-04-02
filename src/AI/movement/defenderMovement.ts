import {getUnitsByTask} from '../../utils/unit/AI';
import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
import {controlZone} from '../processModule/controlZone/controlZone';
import {getDistanceBetweenTwoUnitsInGrids} from '../../utils';
import {getDistanceBetweenUnitAndNodeInGrids} from '../../utils/node';
import {attackEnemy} from '../../unit/movement';
import {getNodeFromMap} from '../../utils';
import {occupyControlZone} from './occupyControlZone';
import {
  isNumberOfEnemiesChanged,
  updateEnemiesInsideControlZone
} from '../processModule/controlZone';
import Unit from '../../unit/types/Unit';

export const findClosestEnemyInZone = (unit:Unit, enemies:Unit[]):Unit => {
  if(enemies.length === 0) { // only one unit remained
    return null;
  }
  let closestEnemy:Unit = enemies[0];
  for(let i = 1; i < enemies.length; ++i) {
    let closestUnitDistance = getDistanceBetweenTwoUnitsInGrids(closestEnemy, unit);
    let unitDistance = getDistanceBetweenTwoUnitsInGrids(enemies[i], unit);
    if(unitDistance < closestUnitDistance) {
      closestEnemy = enemies[i];
    }
  }
  return closestEnemy;
}


export const getEnemiesInsideZone = ():Unit[] => {
  let enemiesInsideZone:Unit[] = [];
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
  let enemies:Unit[] = getEnemiesInsideZone();

  if(isNumberOfEnemiesChanged(enemies)) {
    // fire function only if enemies number changed
    updateEnemiesInsideControlZone(enemies);
    if(enemies.length > 0) { // enemy try to enter the zone
      console.error('attackEnemy00');
      let defenders:Unit[] = getUnitsByTask('holdPosition');
      for(let defender of defenders) {
        let closestEnemy:Unit = findClosestEnemyInZone(defender, enemies);
        let defenderX:number = defender.currentNode.x;
        let defenderY:number = defender.currentNode.y;
        let enemyX:number = closestEnemy.currentNode.x;
        let enemyY:number = closestEnemy.currentNode.y;
        if(closestEnemy && closestEnemy.isVisible) {
          attackEnemy(defender, closestEnemy);
        }
      }
    } else {
      occupyControlZone();
    }
  }
}
