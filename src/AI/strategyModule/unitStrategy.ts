import {
  getBestUnitByProperty
} from '../actions/unitActions';
import{
  getUnitTypesInPercentage,
  calculateUnitTypes
} from '../analyzeModule/unitAnalyze';
import {
  computersUnits,
  playersUnits,
  visibleForComputerUnits
} from '../../store/unitStore';

import {hidedEmenies} from '../setUpAI';

/*
  Task depends on:
  1. Unit ability
  2. Stage
  3. Allies Units
*/
export const assignTasks = (unit:any):any => {
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

export let assignTasksForNeutral = () => {
  let numberOfUnits = computersUnits.length;
  let numberOfEnemies = playersUnits.length;
  let spottedEnemies = visibleForComputerUnits.length + hidedEmenies.store.length;
  let visibleEnemies = visibleForComputerUnits.length;
  let percentage = getUnitTypesInPercentage();
  let unitTypes = calculateUnitTypes();
  // before 70% of player's units is not spotted
  if(Math.round((visibleForComputerUnits.length / numberOfEnemies) * 100) < 70) {
    for(let unit of computersUnits) {
      if(unitTypes.scouts === 0 || unitTypes.cavalry === 0) {
        
      }
      if(unit.task && (unit.type === 'scouts' || unit.type === 'cavalry')) {
        unit.assignTask('exploration');
      }
    }
  }
}
