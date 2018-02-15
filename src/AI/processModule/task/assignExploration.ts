import {
  getBestUnitByProperty,
  getFreeUnits,
  getUnitsByPropertyValue,
  getClosestUnitToOtherUnit
} from '../../../utils/unit/actions';
import {
  computerUnits
} from '../../../store/unit/units';

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
