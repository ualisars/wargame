import {map} from '../../../map/createMap';
import Unit from '../../../unit/types/Unit';
import {getNodeFromMap} from '../../index';
import {deleteUnitFromArray} from '../utils';

export const anotherUnitIsOnTheWay = (units:Unit[], currentUnit:Unit, nextNodeX:number, nextNodeY:number) => {
  let updatedUnits: Unit[] = Object.assign([], units);
  let otherUnits: Unit[] = deleteUnitFromArray(currentUnit, units);
  let currentUnitNextNode = getNodeFromMap(nextNodeX, nextNodeY, map);

  for(let otherUnit of otherUnits) {
    //let otherUnitNode:any = getNodeFromMap(otherUnit.x, otherUnit.y, map);
    //let alliedUnitNode = getNodeFromMap(unit.x, unit.y, map);
    if(currentUnitNextNode.x === otherUnit.currentNode.x && currentUnitNextNode.y === otherUnit.currentNode.y) {
      return true;
    }
    else if(currentUnitNextNode.x === otherUnit.nextNode.x && currentUnitNextNode.y === otherUnit.nextNode.y) {
      return true;
    }
    // else if(otherUnitNode) {
    //   if(currentUnitNextNode.x === otherUnit.x && currentUnitNextNode.y === otherUnit.y) {
    //     return true;
    //   }
    // }
  }
  return false;
}
