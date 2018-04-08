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
import Unit from '../../../unit/types/Unit';

export const getBlockingUnit = (units:Unit[], currentUnit:Unit, x:number, y:number):Unit => {
  let updatedUnits:Unit[] = deleteObjectFromArray(currentUnit, units);
  let currentUnitNextNode = getNodeFromMap(x, y);

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
