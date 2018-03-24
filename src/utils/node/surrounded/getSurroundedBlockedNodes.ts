import {getSurroundedNodes} from '../../surrounded';
import {
  playerUnits,
  computerUnits
} from '../../../store/unit/units';
import {
  addNodeIntoArray,
  deleteUnitFromArray
} from '../../index';
import Unit from '../../../unit/types/Unit';
/*
 get closest to unit nodes where alliedUnits are located
 or moving to
*/
export const getSurroundedBlockedNodes = (unit:Unit) => {
  let surroundedNodes = getSurroundedNodes(unit, 1);
  let surroundedBlockedNodes:any[] = [];
  let alliedUnits:Unit[];
  if(unit.controlBy === 'player') {
    alliedUnits = playerUnits;
  } else {
    alliedUnits = computerUnits;
  }
  let updatedUnits:Unit[] = deleteUnitFromArray(unit, alliedUnits);
  for(let node of surroundedNodes) {
    for(let alliedUnit of updatedUnits) {
      if(alliedUnit.currentNode.x === node.x && alliedUnit.currentNode.y === node.y) {
          surroundedBlockedNodes = addNodeIntoArray(node, surroundedBlockedNodes);
      }
      if(alliedUnit.nextNode.x === node.x && alliedUnit.nextNode.y === node.y) {
          surroundedBlockedNodes = addNodeIntoArray(node, surroundedBlockedNodes);
      }
    }
  }
  return surroundedBlockedNodes;
}
