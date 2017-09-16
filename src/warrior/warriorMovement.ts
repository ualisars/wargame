import {drawWarrior} from './warriorAction';
import {
  gridSize,
  ctx,
  WIDTH,
  HEIGHT
} from '../map/mapConfig';
import {deleteObjectFromArray} from '../utils/objUtils';

export let updateWarrior = (warrior:any, path:any[], i:number=0, currentMoveToX:number, currentMoveToY:number) => {
  console.log('updateWarrior');
  if(currentMoveToX !== warrior.moveToNodeX || currentMoveToY !== warrior.moveToNodeY) {
    console.log('new destination has been chosen');
    return;
  }
  let updatedPath = path;
  let node = path[i]; // get next node
  let nodeToClear = node;;
  if(i !== 0) {
    nodeToClear = updatedPath[i - 1];
  }
  ctx.clearRect(nodeToClear.x, nodeToClear.y, gridSize, gridSize);
  warrior.setX(node.x); // calculate center of the current node
  warrior.setY(node.y);
  //console.log('warrior.x', warrior.x, 'warrior.y', warrior.y);
  drawWarrior(warrior);
  i++;
  if(i !== updatedPath.length) {
    setTimeout(() => {
      updateWarrior(warrior, updatedPath, i, currentMoveToX, currentMoveToY);
    }, 300);
  }
}
