/*
  Functions that works with unit's visibility
*/

import {getNodeFromMap} from '../path/drawPath';
import {map} from '../map/createMap';
import {gridSize} from '../map/mapConfig';
import {
  playersUnits,
  computersUnits,
} from '../store/unitStore';

/*
  spotEnemy: checks if enemies is in its visibility range
  if true, change property isVisible to true
*/
export const spotEnemy = (unit:any) => {
  let enemies:any[];
  if(unit.controlBy === 'player') {
    enemies = Object.assign([], computersUnits);
  }
  if(unit.controlBy === 'computer') {
    enemies = Object.assign([], playersUnits);
  }
  let visibility = unit.visibility;
  let visibilityRange = visibility * gridSize;
  let unitNode = getNodeFromMap(unit.x, unit.y, map);
  for(let enemy of enemies) {
    let enemyNode = getNodeFromMap(enemy.x, enemy.y, map);
    let dx = Math.abs(unitNode.x - enemyNode.x);
    let dy = Math.abs(unitNode.y - enemyNode.y);
    if(visibilityRange >= dx && visibilityRange >= dy) { // enemy has been spotted
      console.error(enemy.name, 'has been spotted');
      enemy.isVisible = true;
    }
  }
}
