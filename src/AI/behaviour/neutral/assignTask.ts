import {
  getBestUnitByProperty,
  getFreeUnits,
  getUnitsByPropertyValue,
  getClosestUnitToOtherUnit
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
  assignExploration(unitTypes, 10)
  .then(() => assignProtection(80));
  // if(Math.round((visibleForComputerUnits.length / numberOfEnemies) * 100) < 70) {
  //   assignExploration(unitTypes, 60)
  //   .then(() => assignProtection(20));
  // } else {
  //   assignExploration(unitTypes, 10)
  //   .then(() => assignProtection(80));
  // }
}

/*
  Assign one unit to protect another
*/
export const assignProtection = (percentage:number) => {
  return new Promise(resolve => {
    let unitsNeedProtection:number = howManyUnitsNeedProtection();
    let unitsUnderProtection:number = 0;
    let percentageOfUnits:number = Math.round((unitsUnderProtection / computersUnits.length) * 100);
    for(let unit of computersUnits) {
      if(doesUnitNeedProtection(unit) && !unit.isUnitUnderProtection && percentageOfUnits < percentage) { // unit needs protection
        let freeUnits = getFreeUnits();
        let spearmen = getUnitsByPropertyValue('type', 'spearmen');
        if(spearmen.length !== 0) { // there are some free spearmen
          let closestSpearmen = getClosestUnitToOtherUnit(unit, spearmen);
          closestSpearmen.assignTask('protection');
          closestSpearmen.assignUnitToProtect(unit);
          unit.setIsUnitUnderProtectionToTrue();
          unitsUnderProtection++;
        } else { // no spearmen
          let closestUnit = getClosestUnitToOtherUnit(unit);
          closestUnit.assignTask('protection');
          closestUnit.assignUnitToProtect(unit);
          unit.setIsUnitUnderProtectionToTrue();
          unitsUnderProtection++;
        }
      } 
    }
    resolve();
  });
}

export const assignExploration = (unitTypes:any, percentage:number):any => {
  return new Promise(resolve => {
    if(unitTypes.scouts === 0 && unitTypes.cavalry === 0) { // no cavalry or scouts
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
    } else {
      for(let unit of computersUnits) {
        let scouts:number = 0;
        let percentageOfScouts:number = Math.round((scouts / computersUnits.length) * 100);
        if(!unit.task && (unit.type === 'scouts' || unit.type === 'cavalry') && percentageOfScouts < percentage) {
          // there is scouts and not recommended to scouts to be more than 30% of units
          unit.assignTask('exploration');
        }
      }
    }
    resolve();
  });
}
