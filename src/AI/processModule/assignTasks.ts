import {
  getBestUnitByProperty,
  getFreeUnits,
  getUnitsByPropertyValue,
  getClosestUnitToOtherUnit
} from '../../utils/unit/actions';
import {
  doesUnitNeedProtection,
  howManyUnitsNeedProtection
} from './unitProcess';
import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
/*
  Assign one unit to protect another
*/
export const assignProtection = (percentage:number) => {
  return new Promise(resolve => {
    let unitsNeedProtection:number = howManyUnitsNeedProtection();
    let unitsUnderProtection:number = 0;
    let percentageOfUnits:number = Math.round((unitsUnderProtection / computerUnits.length) * 100);
    for(let unit of computerUnits) {
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
      if(freeUnits) {
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
    } else {
      for(let unit of computerUnits) {
        let scouts:number = 0;
        let percentageOfScouts:number = Math.round((scouts / computerUnits.length) * 100);
        if(!unit.task && (unit.type === 'scouts' || unit.type === 'cavalry') && percentageOfScouts < percentage) {
          // there are scouts and not recommended scouts to be more than 30% of units
          unit.assignTask('exploration');
        }
      }
    }
    resolve();
  });
}
