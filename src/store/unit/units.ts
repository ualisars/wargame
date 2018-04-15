import {
  isObjectInArray,
  deleteObjectFromArray,
  isUnitInArray
} from '../../utils';
import Unit from '../../unit/types/Unit';

export let units:Unit[] = [];
export let playerUnits:Unit[] = [];
export let computerUnits:Unit[] = [];

/*
delete unit from units array
*/

export const removeFromUnits = (unit:Unit) => {
  if(unit) {
    units = deleteObjectFromArray(unit, units);
    if(unit.controlBy === 'computer') {
      removeFromComputerUnits(unit);
    }
    else if(unit.controlBy === 'player') {
      removeFromPlayerUnits(unit);
    }
  }
}

export const removeFromPlayerUnits = (unit:Unit) => {
  if(unit && unit.controlBy === 'player') {
    playerUnits = deleteObjectFromArray(unit, playerUnits);
  }
}

export const removeFromComputerUnits = (unit:Unit) => {
  if(unit && unit.controlBy === 'computer') {
    computerUnits = deleteObjectFromArray(unit, computerUnits);
  }
}

export const removeAllComputerUnits = ():void => {
  computerUnits = [];
}

export const removeAllPlayerUnits = ():void => {
  playerUnits = [];
}

export const removeAllUnits = ():void => {
  removeAllComputerUnits();
  removeAllComputerUnits();
  units = [];
}
