import {side} from '../../config/mainMenu';
import {
  isUnitInArray,
  deleteUnitFromArmy
} from '../../utils';

export let computerArmy:any[] = [];
export let playerArmy:any[] = [];

export const addUnitToArmy = (unit:any) => {
  let army:any[];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  console.log('computerArmy', computerArmy);
  console.log('playerArmy', playerArmy);
  if(unit) {
      army.push(unit);
      console.log('unit', unit.name, 'is added');
  }
}

export const removeUnitFromArmy = (unit:any) => {
  let army:any[];
  if(side === 'player') {
    army = playerArmy;
  } else {
    army = computerArmy;
  }
  if(unit && isUnitInArray(unit, army)) {
    if(side === 'player') {
      console.log('playerArmy before deletion', playerArmy);
      playerArmy = deleteUnitFromArmy(unit, playerArmy);
      console.log('playerArmy after deletion', playerArmy);
    } else {
      computerArmy = deleteUnitFromArmy(unit, computerArmy);
    }
  }
}
