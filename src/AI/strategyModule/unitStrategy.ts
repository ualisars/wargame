import {
  getBestUnitByProperty,
  getFreeUnits
} from '../actions/unitActions';
import{
  getUnitTypesInPercentage,
  calculateUnitTypes,
} from '../analyzeModule/unitAnalyze';
import {
  computersUnits,
  playersUnits,
  visibleForComputerUnits
} from '../../store/unitStore';

import {hidedEmenies} from '../setUpAI';
import {assignTasksForNeutral} from '../behaviour/neutral/assignTask';


/*
  Task depends on:
  1. Unit ability
  2. Stage
  3. Allies Units
*/
export const assignTasks = ():any => {
  let behaviour = 'neutral'; // change to dynamic in future
  let numberOfUnits = computersUnits.length;
  let numberOfEnemies = playersUnits.length;
  let spottedEnemies = visibleForComputerUnits.length + hidedEmenies.store.length;
  let visibleEnemies = visibleForComputerUnits.length;
  let percentage = getUnitTypesInPercentage();
  let unitTypes = calculateUnitTypes();
  // assign scouts
  if(behaviour === 'neutral') {
    assignTasksForNeutral();
  }
  

}
