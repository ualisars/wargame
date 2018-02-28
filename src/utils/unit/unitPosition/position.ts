import {map} from '../../../map/createMap';
import {
  deleteObjectFromArray,
  getNodeFromMap
} from '../../index';

export const anotherUnitIsOnTheWay = (units:any[], currentUnit:any, x:number, y:number) => {
  let updatedUnits = deleteObjectFromArray(currentUnit, units);
  console.error('anotherUnitIsOnTheWay');
  console.log('units', units);
  console.log('updatedUnits', updatedUnits);
  let currentUnitNextNode = getNodeFromMap(x, y, map);
  console.error('currentUnit', currentUnit);
  console.log('currentUnitNextNode', currentUnitNextNode); 
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
