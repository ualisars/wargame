import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
import {getSurroundedNodes} from './getSurroundedNodes';
import {getNodeFromMap} from '../node/get/fromMap';
import {deleteUnitFromArray} from '../unit/general';
import Unit from '../../unit/types/Unit';

export const getSurroundedAllies = (unit:Unit):Unit[] => {
  let surroundedAllies:Unit[] = [];
  let allies:Unit[] = [];
  let updatedAllies:Unit[] = [];
  if(unit.controlBy === 'computer') {
    allies = Object.assign([], computerUnits);
  } else {
    allies = Object.assign([], playerUnits);
  }

  updatedAllies = deleteUnitFromArray(unit, allies);

  let nodes = getSurroundedNodes(unit, 3);
  for(let node of nodes) {
    for(let ally of updatedAllies) {
      let allyNode = getNodeFromMap(ally.x, ally.y);
      if(node.x === allyNode.x && node.y === allyNode.y) {
        surroundedAllies.push(ally);
      }
    }
  }
  return surroundedAllies;
}
