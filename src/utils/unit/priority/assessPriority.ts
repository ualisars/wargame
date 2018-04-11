import Unit from '../../../unit/types/Unit';
import {gridSize} from '../../../config/map';
import {
  findClosestUnitsToTheNodeCenter,
  getBestUnitsByProperty
} from '../actions';
import {shuffleUnits} from '../shuffle';
import {units} from '../../../store/unit/units';

/*
  Assess priority of each units and
  decide which unit will move to the node
  and which ones have to find another path
  Algorithm:
  1. Highest priority has unit closest to center of the node
  2. If units are in same distance:
    2.1 fastest unit is in priority
  3. If same distance and speed (remaining units):
    3.1 Randomly choose one unit from the remaining units

*/
export const getPriorityUnit = (node:any, units:Unit[]):Unit => {
  let updatedUnits:Unit[] = Object.assign([], units);
  let closestUnits:Unit[] = findClosestUnitsToTheNodeCenter(node, updatedUnits);
  //console.log('closestUnits', closestUnits);
  if(closestUnits.length === 1) {
    return closestUnits[0];
  }
  // more than 1 unit in the same distance
  else if(closestUnits.length > 1){
    let fastestUnits:Unit[] = getBestUnitsByProperty(closestUnits, 'speed');
    if(fastestUnits.length === 1) {
      return fastestUnits[0];
    }
    else if(fastestUnits.length > 1) {
      let shuffledUnits:Unit[] = shuffleUnits(fastestUnits);
      let chosenUnit:Unit = shuffledUnits[0];
      return chosenUnit;
    }
  }
}


export const unitCanMoveToTheNode = (node:any, unit:Unit):boolean => {
  const priorityUnit:Unit = getPriorityUnit(node, units);
  let permission:boolean = false;
  if(unit.id === priorityUnit.id) {
    permission = true;
  }
  return permission;
}
