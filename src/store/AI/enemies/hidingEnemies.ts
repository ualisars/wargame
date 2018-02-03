import {
  deleteUnitFromArray,
  isUnitInArray
} from '../../../utils';
import {
  visibleForComputerUnits
} from '../../unit/visibleUnits';

export let hidingEnemies:any[] = [];

export const addToHidingEnemies = (unit:any) => {
  if(!isUnitInArray(unit, visibleForComputerUnits)) { // hided enemy cannot be visible at the same time
    let updatedUnit = {
      id: unit.id,
      name: unit.name,
      type: unit.type,
      health: unit.health,
      speed: unit.speed,
      armour: unit.armour,
      range: unit.range,
      mobility: unit.mobility,
      meleeDamage: unit.meleeDamage,
      missileDamage: unit.missileDamage,
      charge: unit.charge,
      discipline: unit.discipline,
      condition: unit.condition,
      node: unit.currentNode,
    }
    if(!isUnitInArray(unit, this.store) && unit.controlBy === 'player') { // unit's already added
      hidingEnemies.push(updatedUnit);
    }
  }
}

export const removeFromHidingEnemies = (unit:any) => {
  if(isUnitInArray(unit, visibleForComputerUnits)) {
    if(isUnitInArray(unit, hidingEnemies)) { // unit should be in the array
      hidingEnemies = deleteUnitFromArray(unit, hidingEnemies);
    }
  }
}
