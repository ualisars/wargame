import Unit from '../types/Unit';
import {getNodeFromMap} from '../../utils/node/get/fromMap';
import {map} from '../../map/createMap';
import {updateUnit} from './updateUnit';
import {aStar} from '../../path/aStar/AStar';
import {assignUnitMoveToPosition} from '../actions';

export const moveTo = (unit:Unit, moveToX:number, moveToY:number):void => {
  if(unit.isMoving) {
    unit.setUnitToPursue(null);
    let startNode = getNodeFromMap(unit.x, unit.y, map);
    let finishNode = getNodeFromMap(moveToX, moveToY, map);
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
  } else {
    unit.setUnitToPursue(null);
    let startNode = getNodeFromMap(unit.x, unit.y, map);
    let finishNode = getNodeFromMap(moveToX, moveToY, map);
    let path:any = aStar(map, startNode, finishNode);
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    updateUnit(unit, path, 0, finishNode.x, finishNode.y, null, true);
  }
}
