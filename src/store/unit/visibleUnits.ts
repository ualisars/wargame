import {
  deleteObjectFromArray,
  isObjectInArray
} from '../../utils';
/*
  Units that currently visible for player or computer
*/
export let visibleForPlayerUnits:any[] = [];
export let visibleForComputerUnits:any[] = [];

export const addUnitIntoVisibleArray = (unit:any) => {
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

export const removeUnitFromVisibleArray = (unit:any) => {
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
