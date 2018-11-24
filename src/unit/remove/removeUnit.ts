import { removeFromUnits } from '../../store/unit/units';
import { removeUnitFromVisibleUnits } from '../../store/unit/visibleUnits';
import { removeFromRevealedUnits } from '../../store/AI/enemies/revealedEnemies';
import Unit from '../types/Unit';
import { clearUnitImage } from '../draw/drawUnit';
import { removeUnitFromSpottedUnits } from '../../store';

export const removeUnit = (unit: Unit) => {
  if(unit) {
    clearUnitImage(unit);
    removeFromUnits(unit);
    removeUnitFromVisibleUnits(unit);
    removeUnitFromSpottedUnits(unit);
    if(unit.controlBy === 'player') {
      removeFromRevealedUnits(unit);
    }
  }
}
