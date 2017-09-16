import {drawUnit} from './unitActions';
import {
  gridSize,
  ctx,
  WIDTH,
  HEIGHT
} from '../map/mapConfig';
import {deleteObjectFromArray} from '../utils/objUtils';

import {units} from '../store/unitStore';
import {checkOtherUnitsPosition} from './unitUtils';

export let updateUnit = (unit:any, path:any[], i:number=0, currentMoveToX:number, currentMoveToY:number) => {
  if(currentMoveToX !== unit.moveToNodeX || currentMoveToY !== unit.moveToNodeY) {
    console.log('new destination has been chosen');
    return;
  }
  let updatedPath = path;
  let node = path[i]; // get next node
  if(checkOtherUnitsPosition(units, unit, node.x, node.y)) {
    return;
  }

  let nodeToClear = node;;
  if(i !== 0) {
    nodeToClear = updatedPath[i - 1];
  }
  ctx.clearRect(nodeToClear.x, nodeToClear.y, gridSize, gridSize);
  unit.setX(node.x); // calculate center of the current node
  unit.setY(node.y);
  //console.log('warrior.x', warrior.x, 'warrior.y', warrior.y);
  drawUnit(unit);
  i++;
  if(i !== updatedPath.length) {
    setTimeout(() => {
      updateUnit(unit, updatedPath, i, currentMoveToX, currentMoveToY);
    }, 600);
  }
}
