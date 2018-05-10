import {
    deleteUnitFromArray,
    isUnitInArray
  } from '../../../utils';
import {
    visibleForComputerUnits
} from '../../unit/visibleUnits';
import Unit from '../../../unit/types/Unit';

export let revealedUnits: Unit[] = [];

export const addToRevealedUnits = (unit:Unit) => {
    if(!isUnitInArray(unit, revealedUnits) && unit.controlBy === 'player') {
        let updatedUnit:Unit = Object.assign({}, unit);
        revealedUnits.push(updatedUnit);
    }
}

export const removeFromRevealedUnits = (unit:Unit) => {
    if(isUnitInArray(unit, revealedUnits)) {
        revealedUnits = deleteUnitFromArray(unit, revealedUnits);
    }
}