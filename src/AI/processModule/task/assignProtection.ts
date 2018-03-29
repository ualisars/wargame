import {
  getBestUnitByProperty,
  getFreeUnits,
  getUnitsByPropertyValue,
  getClosestUnitToOtherUnit
} from '../../../utils/unit/AI';
import {
  doesUnitNeedProtection,
  howManyUnitsNeedProtection
} from '../unit';
import {
  computerUnits,
  playerUnits
} from '../../../store/unit/units';

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
        console.error('freeUnits', freeUnits);
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
