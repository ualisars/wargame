import {getUnitsByTask} from '../../unit/actions';

export const isNodeExploredByScout = (node:any):boolean => {
  let scouts = getUnitsByTask('exploration');
  for(let unit of scouts) {
    if(node.x === unit.moveToNodeX && node.y === unit.moveToNodeY) {
      return true;
    }
  }
  return false;
}
