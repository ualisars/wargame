import {getUnitsByTask} from '../../unit/AI';
import {getNodeFromMap} from '../get';
import Unit from '../../../unit/types/Unit';

/*
  check whether any scouts are going to a particular node
  return boolean type:
    if true: a scout is going to that node
    if false: no scouts are going to that node
*/
export const isNodeExploredByScouts = (node:any):boolean => {
  let scouts:Unit[] = getUnitsByTask('exploration');
  for(let unit of scouts) {
    const moveToX:number = unit.moveToNodeX;
    const moveToY:number = unit.moveToNodeY;
    const moveToNode:any = getNodeFromMap(moveToX, moveToY);
    if(node.x === moveToNode.x && node.y === moveToNode.y) {
      return true;
    }
  }
  return false;
}
