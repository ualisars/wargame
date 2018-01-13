import {
  getBestUnitByProperty,
  getFreeUnits
} from '../../utils/unit/actions';
import{
  getUnitTypesInPercentage,
  calculateUnitTypes,
} from '../analyzeModule/unitAnalyze';
import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
import {visibleForComputerUnits} from '../../store/unit/visibleUnits';

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
  let numberOfUnits = computerUnits.length;
  let numberOfEnemies = playerUnits.length;
  let spottedEnemies = visibleForComputerUnits.length + hidedEmenies.store.length;
  let visibleEnemies = visibleForComputerUnits.length;
  let percentage = getUnitTypesInPercentage();
  let unitTypes = calculateUnitTypes();
  // assign scouts
  if(behaviour === 'neutral') {
    assignTasksForNeutral();
  }


}
