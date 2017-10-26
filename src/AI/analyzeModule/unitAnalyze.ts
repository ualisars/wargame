import {
  playersUnits
} from '../../store/unitStore';

export const analyzeUnit = (unit:any):any => {
  console.log(calculateUnitsToBeware(unit));
}

/*
  Check advantages and disadvantages of the unit
  and decide whether the unit require support or not
*/
export const DoesUnitNeedSupport = (unit:any) => {

}

export const calculateUnitsToBeware = (unit:any):number => {
  let unitsToBeware:number = 0;
  for(let enemy of playersUnits) {
    for(let vulnerability of unit.vulnerableAgainst) {
      if(vulnerability === enemy.name) {
        unitsToBeware++;
      }
    }
  }
  return unitsToBeware;
}
