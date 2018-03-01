import {map} from '../../../map/createMap';
import Unit from '../../../unit/types/Unit';
import {getNodeFromMap} from '../../index';
import {deleteUnitFromArray} from '../utils';

export const anotherUnitIsOnTheWay = (units:any[], currentUnit:any, nextNodeX:number, nextNodeY:number) => {
  let updatedUnits: Unit[] = Object.assign([], units);
  let otherUnits: Unit[] = deleteUnitFromArray(currentUnit, units);
  let currentUnitNextNode = getNodeFromMap(nextNodeX, nextNodeY, map);

  for(let unit of otherUnits) {
    //let alliedUnitNode = getNodeFromMap(unit.x, unit.y, map);
    if(currentUnitNextNode.x === unit.currentNode.x && currentUnitNextNode.y === unit.currentNode.y) {
      return true;
    }
    else if(currentUnitNextNode.x === unit.nextNode.x && currentUnitNextNode.y === unit.nextNode.y) {
      return true;
    }
  }
  return false;
}
