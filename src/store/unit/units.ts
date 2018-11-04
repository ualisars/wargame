import { isUnitInArray } from '../../utils';
import { deleteUnitFromArray } from '../../utils/unit/general';
import Unit from '../../unit/types/Unit';

export let units:Unit[] = [];
export let playerUnits:Unit[] = [];
export let computerUnits:Unit[] = [];

export const addToUnits = (unit:Unit) => {
  if(unit) {
    if(!isUnitInArray(unit, units)) {
      if(unit.controlBy === 'computer') {
        addToComputerUnits(unit);
        units.push(unit);
      }
      else if(unit.controlBy === 'player') {
        addToPlayerUnits(unit);
        units.push(unit);
      } else {
        throw new Error('Undefined unit control');
      }
    } else {
      throw new Error('unit is already added');
    }
  }
}

export const addToComputerUnits = (unit:Unit) => {
  if(unit) {
    if(!isUnitInArray(unit, computerUnits)) {
      if(unit.controlBy === 'computer') {
        computerUnits.push(unit);
      }
    }
  }
}

export const addToPlayerUnits = (unit:Unit) => {
  if(unit) {
    if(!isUnitInArray(unit, playerUnits)) {
      if(unit.controlBy === 'player') {
        playerUnits.push(unit);
      }
    }
  }
}

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
  removeAllPlayerUnits();
  units = [];
}
