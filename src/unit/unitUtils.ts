import {deleteObjectFromArray} from '../utils/objUtils';

export const checkOtherUnitsPosition = (units:any[], currentUnit:any, x:number, y:number) => {
  let updatedUnits = deleteObjectFromArray(currentUnit, units);
  for(let unit of updatedUnits) {
    if(unit.x === x && unit.y === y) {
      return true;
    }
  }
  return false;
}
