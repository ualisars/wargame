import {map} from '../../../map/createMap';
import {
  deleteObjectFromArray,
  getNodeFromMap
} from '../../index';

export const anotherUnitIsOnTheWay = (units:any[], currentUnit:any, x:number, y:number) => {
  let updatedUnits = deleteObjectFromArray(currentUnit, units);
  let currentUnitNextNode = getNodeFromMap(x, y, map);
  for(let unit of updatedUnits) {
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
