import {
  isObjectInArray,
  deleteObjectFromArray,
  isUnitInArray
} from '../../utils';
import {removeUnitFromVisibleArray} from './visibleUnits';

export let units:any[] = [];
export let playerUnits: any[] = [];
export let computerUnits: any[] = [];

/*
delete unit from units array
*/
export const removeUnit = (unit:any) => {
  if(unit.controlBy === 'computer') {
    computerUnits = deleteObjectFromArray(unit, computerUnits); // delete from computersUnits
  }
  else if(unit.controlBy === 'player') {
    playerUnits = deleteObjectFromArray(unit, playerUnits); // delete from playersUnits
  }
  removeUnitFromVisibleArray(unit);
  units = deleteObjectFromArray(unit, units);
}
