import Unit from '../../../unit/types/Unit';
import {getNodeFromMap} from '../..';
import {deleteUnitFromArray} from '../general';

export const anotherUnitIsOnTheWay = (units:Unit[], currentUnit:Unit, nextNode:any):boolean => {
  let updatedUnits: Unit[] = Object.assign([], units);
  let otherUnits: Unit[] = deleteUnitFromArray(currentUnit, units);

  const nextNodeX:number = nextNode.x;
  const nextNodeY:number = nextNode.y;

  let currentUnitNextNode = getNodeFromMap(nextNodeX, nextNodeY);

  for(let otherUnit of otherUnits) {
    if(currentUnitNextNode.x === otherUnit.currentNode.x && currentUnitNextNode.y === otherUnit.currentNode.y) {
      return true;
    }
    else if(currentUnitNextNode.x === otherUnit.nextNode.x && currentUnitNextNode.y === otherUnit.nextNode.y) {
      return true;
    }
  }

  return false;
}
