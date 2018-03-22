import {
  deleteObjectFromArray,
  isUnitInArray
} from '../../utils';
import Unit from '../../unit/types/Unit';

export let spottedUnits:Unit[] = [];

export const addUnitToSpottedUnits = (unit:Unit) => {
  if(!isUnitInArray(unit, spottedUnits)) { // unit is not spotted yet
    spottedUnits.push(unit);
  }
}

export const removeUnitFromSpottedUnits = (unit:Unit) => {
  if(isUnitInArray(unit, spottedUnits)) {
    spottedUnits = deleteObjectFromArray(unit, spottedUnits);
  }
}
