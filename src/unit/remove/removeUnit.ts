import {
  removeFromUnits
} from '../../store/unit/units';
import {removeUnitFromVisibleArray} from '../../store/unit/visibleUnits';
import Unit from '../../unit/types/Unit';

export const removeUnit = (unit:Unit) => {
  if(unit) {
    removeFromUnits(unit);
    removeUnitFromVisibleArray(unit);
  }
}
