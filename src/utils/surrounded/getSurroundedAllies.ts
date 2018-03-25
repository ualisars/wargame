import {computerUnits} from '../../store/unit/units';
import {getSurroundedNodes} from './getSurroundedNodes';
import {getNodeFromMap} from '../node/get/fromMap';
import Unit from '../../unit/types/Unit';

export const getSurroundedAllies = (unit:Unit):Unit[] => {
  let surroundedAllies:Unit[] = [];
  let nodes = getSurroundedNodes(unit, 3);
  for(let node of nodes) {
    for(let enemy of computerUnits) {
      if(node.x === enemy.x && node.y === enemy.y) {
        surroundedAllies.push(enemy);
      }
    }
  }
  return surroundedAllies;
}
