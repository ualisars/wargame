import {
  units,
  removeUnit,
  playerUnits,
  computerUnits
} from '../store/unitStore';
import {isObjectEmpty, deleteObjectFromArray} from '../utils';

/*
  loop through all enemies' figthAgainst array
  if unit is finded there, remove it from there
*/
export const removeUnitFromEnemiesFightAgainst = (unit:any) => {
  let enemies:any[];
  if(unit.controlBy === 'computer') {
    enemies = playerUnits;
  } else {
    enemies = computerUnits;
  }
  if(enemies.length !== 0) {
    for(let enemy of enemies) {
      enemy.removeEnemyFromFightAgainst(unit); // remove unit from enemy's figthAgainst
    }
  }
}

export const arrangeFightAgainst = (unit:any):any => {

}
