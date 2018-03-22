import {
  deleteUnitFromArray,
  isUnitInArray
} from '../../../utils';
import {
  visibleForComputerUnits
} from '../../unit/visibleUnits';
import Unit from '../../../unit/types/Unit';

export let hidingEnemies:any[] = [];

export const addToHidingEnemies = (unit:Unit) => {
  if(!isUnitInArray(unit, visibleForComputerUnits)) { // hided enemy cannot be visible at the same time
    let updatedUnit:Unit = Object.assign({}, unit);
    if(!isUnitInArray(unit, hidingEnemies) && unit.controlBy === 'player') { // unit's already added
      hidingEnemies.push(updatedUnit);
    }
  }
}

export const removeFromHidingEnemies = (unit:Unit) => {
  if(isUnitInArray(unit, visibleForComputerUnits)) {
    if(isUnitInArray(unit, hidingEnemies)) { // unit should be in the array
      hidingEnemies = deleteUnitFromArray(unit, hidingEnemies);
    }
  }
}
