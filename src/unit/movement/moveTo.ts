import Unit from '../types/Unit';
import {getNodeFromMap} from '../../utils/node/get/fromMap';
import {initialMap} from '../../map/createMap/initialMap';
import {updateUnit} from './updateUnit';
import {aStar} from '../../path/aStar/AStar';
import {assignUnitMoveToPosition} from '../position';

export const moveTo = (unit:Unit, moveToX:number, moveToY:number):void => {
  if(unit.isMoving) {
    unit.setUnitToPursue(null);
    let startNode = getNodeFromMap(unit.x, unit.y);
    let finishNode = getNodeFromMap(moveToX, moveToY);
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
  } else {
    unit.setUnitToPursue(null);
    let startNode = getNodeFromMap(unit.x, unit.y);
    let finishNode = getNodeFromMap(moveToX, moveToY);
    let path:any = aStar(initialMap, startNode, finishNode);
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    updateUnit(unit, path, 0, finishNode.x, finishNode.y, null, true);
  }
}
