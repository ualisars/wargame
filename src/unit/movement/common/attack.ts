import Unit from '../../types/Unit';
import {getNodeFromMap} from '../../../utils/node/get/fromMap';
import {initialMap} from '../../../map/createMap/initialMap';
import {pursueUnit} from './pursueUnit';
import {aStar} from '../../../path/aStar/AStar';

export const attackEnemy = (unit:Unit, enemy:Unit):void => {
  if(unit.isMoving) { // if unit's moving don't fire pursue function
    unit.setUnitToPursue(enemy);
  } else {
    const unitX:number = unit.x;
    const unitY:number = unit.y;
    const enemyX:number = enemy.x;
    const enemyY:number = enemy.y;
    unit.setUnitToPursue(enemy);
    let startNode = getNodeFromMap(unitX, unitY);
    let finishNode = getNodeFromMap(enemyX, enemyY);
    let path:any = aStar(initialMap, startNode, finishNode);
    pursueUnit(unit, enemy, enemyX, enemyY, 0, path, true);
  }
}
