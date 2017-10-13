/*
  Functions that works with unit's visibility
*/

import {getNodeFromMap} from '../path/drawPath';
import {map} from '../map/createMap';
import {gridSize} from '../map/mapConfig';
import {drawUnit} from './unitActions';
import {
  playersUnits,
  computersUnits,
  visibleForPlayerUnits,
  visibleForComputerUnits,
  addUnitIntoVisibleArray,
  removeUnitFromVisibleArray
} from '../store/unitStore';

import {
  isObjectInArray,
  deleteObjectFromArray
} from '../utils/objUtils';

/*
  spotEnemy: checks if enemies is in its visibility range
  if true, change property isVisible to true
*/
export const spotEnemy = (unit:any) => {
  let enemies:any[];
  if(unit.controlBy === 'player') { // if unit is control by player enemies will be computer's units
    enemies = Object.assign([], computersUnits);
  }
  if(unit.controlBy === 'computer') { //if unit is control by computer enemies will be player's units
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
      drawUnit(enemy); // show enemy on the map
      addUnitIntoVisibleArray(enemy);
    }
  }
  console.error('visibleForPlayerUnits', visibleForPlayerUnits);
  console.error('visibleForComputerUnits', visibleForComputerUnits);
}

/*
  Checks if unit has been spotted by enemies
  Switch isVisible to false if not spotted by all enemies
*/
export const isUnitSpottedByEnemy = (unit:any) => {
  let enemies:any[];
  if(unit.controlBy === 'player') { // if unit is control by player enemies will be computer's units
    enemies = Object.assign([], computersUnits);
  }
  if(unit.controlBy === 'computer') { //if unit is control by computer enemies will be player's units
    enemies = Object.assign([], playersUnits);
  }
  let unitNode = getNodeFromMap(unit.x, unit.y, map);
  let isSpotted = false;
  for(let enemy of enemies) {
    let visibility = enemy.visibility;
    let visibilityRange = visibility * gridSize;
    let enemyNode = getNodeFromMap(enemy.x, enemy.y, map);
    let dx = Math.abs(unitNode.x - enemyNode.x);
    let dy = Math.abs(unitNode.y - enemyNode.y);
    if(visibilityRange >= dx && visibilityRange >= dy) { // enemy has been spotted
      console.error(unit.name, 'has been spotted by enemy', enemy.name);
      isSpotted = true;
      unit.isVisible = true;
      addUnitIntoVisibleArray(unit);
      if(unit.controlBy === 'computer') {
        drawUnit(unit); // show computer unit on the map
      }
    }
  }
  if(!isSpotted) { // unit is not in range of any enemies
    unit.isVisible = false;
    removeUnitFromVisibleArray(unit);
  }
}

export const spotUnits = (units:any[]) => {
  for(let unit of units) {
    isUnitSpottedByEnemy(unit);
  }
  console.error('visibleForPlayerUnits', visibleForPlayerUnits);
  console.error('visibleForComputerUnits', visibleForComputerUnits);
}