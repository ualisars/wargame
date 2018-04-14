import {computerUnits} from '../../../store/unit/units';
import Unit from '../../../unit/types/Unit';

/*
  return unit that protect current unit
*/

export const getProtector = (unit:Unit):Unit => {
  for(let ally of computerUnits) {
    if(ally.unitToProtect.id === unit.id) {
      return ally;
    }
  }
  return null;
}
