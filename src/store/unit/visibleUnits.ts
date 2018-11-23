import {
  deleteObjectFromArray,
  isObjectInArray
} from '../../utils';
import Unit from '../../unit/types/Unit';

export let visibleForPlayerUnits:Unit[] = [];
export let visibleForComputerUnits:Unit[] = [];

export const addUnitIntoVisibleUnits = (unit:Unit) => {
  if(unit.controlBy === 'player') {
    if(!isObjectInArray(unit, visibleForComputerUnits)) {
      visibleForComputerUnits.push(unit);
    }
  }
  else if(unit.controlBy === 'computer') {
    if(!isObjectInArray(unit, visibleForPlayerUnits)) {
      visibleForPlayerUnits.push(unit);
    }
  }
}

export const removeUnitFromVisibleUnits = (unit:Unit) => {
  if(unit.controlBy === 'player') {
    if(isObjectInArray(unit, visibleForComputerUnits)) {
      visibleForComputerUnits = deleteObjectFromArray(unit, visibleForComputerUnits);
    }
  }
  else if(unit.controlBy === 'computer') {
    if(isObjectInArray(unit, visibleForPlayerUnits)) {
      visibleForPlayerUnits = deleteObjectFromArray(unit, visibleForPlayerUnits);
    }
  }
}
