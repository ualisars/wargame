import {computerUnits} from '../../../store/unit/units';

export const getProtector = (unit:any):any => {
  for(let ally of computerUnits) {
    if(ally.unitToProtect.id === unit.id) {
      return ally;
    }
  }
  return null;
}
