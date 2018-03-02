import Unit from '../types/Unit';
import {getNodeFromMap} from '../../utils/node/get/fromMap';
import {map} from '../../map/createMap';
import {pursueUnit} from './pursueUnit';
import {aStar} from '../../path/aStar/AStar';

export const attackEnemy = (unit:Unit, enemy:Unit):void => {
  if(unit.isMoving) { // if unit's moving don't fire pursue function
    unit.setUnitToPursue(enemy);
  } else {
    const unitX:number = unit.x;
    const unitY:number = unit.y;
    const enemyX:number = enemy.x;
    const enemyY:number = enemy.y;
    unit.setUnitToPursue(enemy);
    let startNode = getNodeFromMap(unitX, unitY, map);
    let finishNode = getNodeFromMap(enemyX, enemyY, map);
    let path:any = aStar(map, startNode, finishNode);
    pursueUnit(unit, enemy, enemyX, enemyY, 0, path, true);
  }
}
