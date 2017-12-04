import {
  units,
  playerUnits,
  computerUnits,
  removeUnit
} from '../../../store';
import {isObjectEmpty, deleteObjectFromArray} from '../../../utils';

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

export const findUnitInFightAgainst = (unit:any) => {
  let enemies:any[] = [];
  let findedUnits:any[] = [];
  if(unit.controlBy === 'computer') { // enemies for computer are playersUnits
    enemies = playerUnits;
  }
  else if(unit.controlBy === 'player') { // enemies for player are computersUnits
    enemies = computerUnits;
  }
  for(let enemy of enemies) {
    let figthAgainst = enemy.figthAgainst;
    if(figthAgainst.front.id === unit.id) { // unit is inside front
      findedUnits.push(enemy);
    }
    else if(figthAgainst.rear.id === unit.id) { // unit is finded as rear unit
      findedUnits.push(enemy);
    }
    for(let flankUnit of figthAgainst.flank) {
      if(flankUnit.id === unit.id) { // unit is finded as flank unit
        findedUnits.push(enemy);
      }
    }
  }
  return findedUnits;
}
