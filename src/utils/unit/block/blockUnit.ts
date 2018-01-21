import {map} from '../../../map/createMap';
import {getSurroundedNodes} from '../../surrounded';
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
