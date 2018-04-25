import {
  isObjectInArray,
  isUnitInArray
} from '../../utils';
import {deleteUnitFromArray} from '../../utils/unit/general';
import Unit from '../../unit/types/Unit';

export let units:Unit[] = [];
export let playerUnits:Unit[] = [];
export let computerUnits:Unit[] = [];

/*
delete unit from units array
*/

export const removeFromUnits = (unit:Unit) => {
  if(unit) {
    units = deleteUnitFromArray(unit, units);
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
    playerUnits = deleteUnitFromArray(unit, playerUnits);
  }
}

export const removeFromComputerUnits = (unit:Unit) => {
  if(unit && unit.controlBy === 'computer') {
    computerUnits = deleteUnitFromArray(unit, computerUnits);
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
