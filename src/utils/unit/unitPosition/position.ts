import {map} from '../../../map/createMap';
import Unit from '../../../unit/types/Unit';
import {getNodeFromMap} from '../../index';
import {deleteUnitFromArray} from '../utils';

export const anotherUnitIsOnTheWay = (units:Unit[], currentUnit:Unit, nextNodeX:number, nextNodeY:number) => {
  let updatedUnits: Unit[] = Object.assign([], units);
  let otherUnits: Unit[] = deleteUnitFromArray(currentUnit, units);
  let currentUnitNextNode = getNodeFromMap(nextNodeX, nextNodeY, map);

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
