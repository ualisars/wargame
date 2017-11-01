import {
  getBestUnitByProperty
} from '../actions/unitActions';

import {
  computersUnits,
  playersUnits,
  visibleForComputerUnits
} from '../../store/unitStore';

import {hidedEmeniesStore} from '../setUpAI';

/*
  Task depends on:
  1. Unit ability
  2. Stage
  3. Allies Units
*/
export const assignTask = (unit:any):any => {
  let numberOfUnits = computersUnits.length;
  let numberOfEnemies = playersUnits.length;
  let spottedEnemies = visibleForComputerUnits.length + hidedEmeniesStore.store.length;
  let visibleEnemies = visibleForComputerUnits.length;
  // assign scouts
}
