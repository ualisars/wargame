import {
  units,
  removeUnit,
  playersUnits,
  computersUnits
} from '../store/unitStore';
import {isObjectEmpty, deleteObjectFromArray} from '../utils/objUtils';

/*
  loop through all enemies' figthAgainst array
  if unit is finded there, remove it from there
*/
export const removeUnitFromEnemiesFightAgainst = (unit:any) => {
  let enemies:any[];
  if(unit.controlBy === 'computer') {
    enemies = playersUnits;
  } else {
    enemies = computersUnits;
  }
  if(enemies.length !== 0) {
    for(let enemy of enemies) {
      enemy.removeEnemyFromFightAgainst(unit); // remove unit from enemy's figthAgainst
    }
  }
}
