import {
  deleteObjectFromArray,
  isObjectInArray
} from '../../utils';
import Unit from '../../unit/types/Unit';

/*
  Units that currently visible for player or computer
*/
export let visibleForPlayerUnits:Unit[] = [];
export let visibleForComputerUnits:Unit[] = [];

export const addUnitIntoVisibleUnits = (unit:Unit) => {
  if(unit.controlBy === 'player') { // if unit is control by player enemies will be computer's units
    if(!isObjectInArray(unit, visibleForComputerUnits)) {
      visibleForComputerUnits.push(unit);
    }
  }
  else if(unit.controlBy === 'computer') { //if unit is control by computer enemies will be player's units
    if(!isObjectInArray(unit, visibleForPlayerUnits)) {
      visibleForPlayerUnits.push(unit);
    }
  }
}

export const removeUnitFromVisibleUnits = (unit:Unit) => {
  if(unit.controlBy === 'player') { // if unit is control by player enemies will be computer's units
    if(isObjectInArray(unit, visibleForComputerUnits)) {
      visibleForComputerUnits = deleteObjectFromArray(unit, visibleForComputerUnits);
    }
  }
  else if(unit.controlBy === 'computer') { //if unit is control by computer enemies will be player's units
    if(isObjectInArray(unit, visibleForPlayerUnits)) {
      visibleForPlayerUnits = deleteObjectFromArray(unit, visibleForPlayerUnits);
    }
  }
}
