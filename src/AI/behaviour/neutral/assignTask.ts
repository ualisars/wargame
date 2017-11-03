import {
  getBestUnitByProperty,
  getFreeUnits
} from '../../actions/unitActions';
import{
  getUnitTypesInPercentage,
  calculateUnitTypes,
} from '../../analyzeModule/unitAnalyze';
import {
  computersUnits,
  playersUnits,
  visibleForComputerUnits
} from '../../../store/unitStore';

import {hidedEmenies} from '../../setUpAI';

import {
  doesUnitNeedProtection,
  howManyUnitsNeedProtection
} from '../../processModule/unitProcess';

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

    }
  }
}

/*
  Assign one unit to protect another
*/
export const assignProtection = () => {
  let unitsNeedProtection:number = howManyUnitsNeedProtection();
  for(let unit of computersUnits) {
    if(doesUnitNeedProtection(unit) && !unit.isUnitUnderProtection) { // unit needs protection
      let freeUnits = getFreeUnits();
      if(unit.type === 'archers') {
        
      }
    }
  }
}

export const assignExploration = (unit:any, unitTypes:any):any => {
  if(unitTypes.scouts === 0 || unitTypes.cavalry === 0) { // no cavalry or scouts
    let freeUnits = getFreeUnits();
    if(freeUnits.length !== 0) {
      let fastestUnit = getBestUnitByProperty('speed'); // get fastest unit
      fastestUnit.assignTask('exploration');
      if(freeUnits.length > 1) {
        let exclusion = [fastestUnit];
        let secondFastestUnit = getBestUnitByProperty('speed', exclusion);
        secondFastestUnit.assignTask('exploration');
      }
    }
  }
  if(unit.task && (unit.type === 'scouts' || unit.type === 'cavalry')) { // there is scouts
    unit.assignTask('exploration');
  }
}
