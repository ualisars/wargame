import {
  isObjectInArray,
  deleteObjectFromArray,
  isUnitInArray
} from '../../utils';
import {removeUnitFromVisibleArray} from './visibleUnits';
import Unit from '../../unit/types/Unit';

export let units:Unit[] = [];
export let playerUnits:Unit[] = [];
export let computerUnits:Unit[] = [];

/*
delete unit from units array
*/
export const removeUnit = (unit:Unit) => {
  if(unit.controlBy === 'computer') {
    computerUnits = deleteObjectFromArray(unit, computerUnits); // delete from computersUnits
  }
  else if(unit.controlBy === 'player') {
    playerUnits = deleteObjectFromArray(unit, playerUnits); // delete from playersUnits
  }
  removeUnitFromVisibleArray(unit);
  units = deleteObjectFromArray(unit, units);
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
