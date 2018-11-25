import Unit from '../../../unit/types/Unit';
import {deleteUnitFromArray} from '../general';
import { units } from '../../../store/unit/units';

export const anotherUnitIsOnTheWay = (currentUnit: Unit): boolean => {
  let updatedUnits: Unit[] = Object.assign([], units);
  let otherUnits: Unit[] = deleteUnitFromArray(currentUnit, updatedUnits);
  let currentUnitNextNode = currentUnit.nextNode;

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
