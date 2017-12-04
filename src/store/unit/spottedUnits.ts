import {
  deleteObjectFromArray,
  isUnitInArray
} from '../../utils';

export let spottedUnits: any[] = [];

export const addUnitToSpottedUnits = (unit:any) => {
  if(!isUnitInArray(unit, spottedUnits)) { // unit is not spotted yet
    spottedUnits.push(unit);
  }
}

export const removeUnitFromSpottedUnits = (unit:any) => {
  if(isUnitInArray(unit, spottedUnits)) {
    spottedUnits = deleteObjectFromArray(unit, spottedUnits);
  }
}
