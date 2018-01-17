import {map} from '../../../map/createMap';
import {getSurroundedNodes} from '../../../AI/analyzeModule/unitAnalyze';
import {
  playerUnits,
  computerUnits
} from '../../../store/unit/units';
import {
  deleteObjectFromArray,
  getNodeFromMap,
  addNodeIntoArray,
  deleteUnitFromArray
} from '../../index';

export const getBlockingUnit = (units:any[], currentUnit:any, x:number, y:number) => {
  let updatedUnits = deleteObjectFromArray(currentUnit, units);
  let currentUnitNextNode = getNodeFromMap(x, y, map);
  for(let unit of updatedUnits) {
    //let alliedUnitNode = getNodeFromMap(unit.x, unit.y, map);
    if(currentUnitNextNode.x === unit.currentNode.x && currentUnitNextNode.y === unit.currentNode.y) {
      return unit;
    }
    else if(currentUnitNextNode.x === unit.nextNode.x && currentUnitNextNode.y === unit.nextNode.y) {
      return unit;
    }
  }
  return null;
}


/*
 get closest to unit nodes where alliedUnits are located
 or moving to
*/
export const getSurroundedBlockedNodes = (unit:any) => {
  let surroundedNodes = getSurroundedNodes(unit, 1);
  let surroundedBlockedNodes:any = [];
  let alliedUnits:any[];
  if(unit.controlBy === 'player') {
    alliedUnits = playerUnits;
  } else {
    alliedUnits = computerUnits;
  }
  let updatedUnits = deleteUnitFromArray(unit, alliedUnits);
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
