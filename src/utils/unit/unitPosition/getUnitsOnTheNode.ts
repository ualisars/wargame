import Unit from '../../../unit/types/Unit';
import {deleteUnitFromArray} from '../utils';
/*
  return all units that is located
  or moving to the particular node
*/

export const getUnitsOnTheNode = (node:any, currentUnit:Unit, units:Unit[]):Unit[] => {
  let updatedUnits: Unit[] = Object.assign([], units);
  const otherUnits: Unit[] = deleteUnitFromArray(currentUnit, units);
  const nodeX:number = node.x;
  const nodeY:number = node.y;
  let unitsOnTheNode:Unit[] = [];

  for(let otherUnit of otherUnits) {
    const otherUnitCurrentNodeX:number = otherUnit.currentNode.x;
    const otherUnitCurrentNodeY:number = otherUnit.currentNode.y;
    const otherUnitNextNodeX:number = otherUnit.nextNode.x;
    const otherUnitNextNodeY:number = otherUnit.nextNode.y;
    // other unit is currently is on that node
    if(otherUnitCurrentNodeX === nodeX && otherUnitCurrentNodeY === nodeY) {
      unitsOnTheNode.push(otherUnit);
    }
    // other unit is up to move to that node
    else if(otherUnitNextNodeX === nodeX && otherUnitNextNodeY === nodeY) {
      unitsOnTheNode.push(otherUnit);
    }
  }
  return unitsOnTheNode;
}
