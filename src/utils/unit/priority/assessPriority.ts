import Unit from '../../../unit/types/Unit';
import {gridSize} from '../../../config/map';

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
export const assessPriority = (node:any, units:Unit[]):void => {
  let updatedUnits:Unit[] = Object.assign([], units);

}
