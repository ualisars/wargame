import {computerUnits} from '../../store/unit/units';
import {getSurroundedNodes} from './getSurroundedNodes';

export const getSurroundedAllies = (unit:any):any[] => {
  let surroundedAllies:any[] = [];
  let nodes = getSurroundedNodes(unit, 3);
  //console.log('nodes', nodes);
  for(let node of nodes) {
    for(let enemy of computerUnits) {
      if(node.x === enemy.x && node.y === enemy.y) {
        surroundedAllies.push(enemy);
      }
    }
  }
  return surroundedAllies;
}
