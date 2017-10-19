import {isObjectInArray, deleteObjectFromArray} from '../utils/objUtils';

export let units:any[] = [];
export let playersUnits: any[] = [];
export let computersUnits: any[] = [];
export let currentlyChosenUnit:any = null;
export let visibleForPlayerUnits:any[] = [];
export let visibleForComputerUnits:any[] = [];

export let unitId:number = 0;

export const assignCurrentlyChosenUnit = (unit:any) => {
  // check unit
  if(unit) {
      currentlyChosenUnit = unit;
  } else {
    currentlyChosenUnit = null;
  }
}

export const incUnitId = () => {
  unitId++;
}

/*
delete unit from units array
*/
export const removeUnit = (unit:any) => {
  if(unit.controlBy === 'computer') {
    computersUnits = deleteObjectFromArray(unit, computersUnits); // delete from computersUnits
  }
  else if(unit.controlBy === 'player') {
    playersUnits = deleteObjectFromArray(unit, playersUnits); // delete from playersUnits
  }
  removeUnitFromVisibleArray(unit);
  units = deleteObjectFromArray(unit, units);
}

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
