import { ctx } from '../../config/context';
import { gridSize } from '../../config';
import { drawUnit } from '../draw';
import {
  addUnitIntoVisibleUnits,
  removeUnitFromVisibleUnits,
  addUnitToSpottedUnits,
} from '../../store';
import {addToRevealedUnits} from '../../store/AI/enemies/revealedEnemies';
import {
  playerUnits,
  computerUnits,
} from '../../store/unit/units';
import Unit from '../types/Unit';
import { getNodeFromMap } from '../../utils';
import {
  addToHidingEnemies,
  removeFromHidingEnemies
} from '../../store/AI/enemies/hidingEnemies';

export const spotEnemy = (unit:Unit) => {
  let enemies:Unit[];
  if(unit.controlBy === 'player') {
    enemies = Object.assign([], computerUnits);
  }
  if(unit.controlBy === 'computer') {
    enemies = Object.assign([], playerUnits);
  }
  let visibility = unit.visibility;
  let visibilityRange = visibility * gridSize;
  let unitX:number = unit.currentNode.x;
  let unitY:number = unit.currentNode.y;
  let unitNode = getNodeFromMap(unitX, unitY);
  for(let enemy of enemies) {
    let enemyX:number = enemy.currentNode.x;
    let enemyY:number = enemy.currentNode.y;
    let enemyNode = getNodeFromMap(enemyX, enemyY);
    let dx = Math.abs(unitNode.x - enemyNode.x);
    let dy = Math.abs(unitNode.y - enemyNode.y);
    if(visibilityRange >= dx && visibilityRange >= dy) { 
      if(unit.controlBy === 'computer' && enemy.isVisible === false) {
        removeFromHidingEnemies(enemy);
      }
      enemy.isVisible = true;
      drawUnit(enemy);
      addUnitIntoVisibleUnits(enemy);
      if(unit.controlBy === 'computer') {
        addUnitToSpottedUnits(enemy);
        addToRevealedUnits(enemy);
      }
    }
  }
}

export const isUnitSpottedByEnemy = (unit:Unit) => {
  let enemies:any[];
  if(unit.controlBy === 'player') {
    enemies = Object.assign([], computerUnits);
  }
  if(unit.controlBy === 'computer') {
    enemies = Object.assign([], playerUnits);
  }
  if(enemies.length === 0) {
    return;
  }
  let unitX:number = unit.currentNode.x;
  let unitY:number = unit.currentNode.y;
  let unitNode = getNodeFromMap(unitX, unitY);
  let isSpotted = false;
  for(let enemy of enemies) {
    let visibility = enemy.visibility;
    let visibilityRange = visibility * gridSize;
    let enemyX:number = enemy.currentNode.x;
    let enemyY:number = enemy.currentNode.y;
    let enemyNode = getNodeFromMap(enemyX, enemyY);
    let dx = Math.abs(unitNode.x - enemyNode.x);
    let dy = Math.abs(unitNode.y - enemyNode.y);
    if(visibilityRange >= dx && visibilityRange >= dy) {
      addUnitIntoVisibleUnits(unit);
      isSpotted = true;
      if(unit.isVisible === false && unit.controlBy === 'player') {
        removeFromHidingEnemies(unit);
      }
      unit.isVisible = true;
      if(unit.controlBy === 'computer') {
        addUnitToSpottedUnits(enemy);
      }
      if(unit.controlBy === 'computer') {
        drawUnit(unit);
      }
    }
  }
  if(!isSpotted) {
    removeUnitFromVisibleUnits(unit);
    if(unit.controlBy === 'player' && unit.isVisible === true) {
      addToHidingEnemies(unit);
    }
    unit.isVisible = false;
    if(unit.controlBy === 'computer' && !unit.isMoving) {
      ctx.clearRect(unit.x, unit.y, gridSize, gridSize);
    }
  }
}

export const spotUnits = (units:Unit[]) => {
  if(units.length > 0) {
    for(let unit of units) {
      isUnitSpottedByEnemy(unit);
    }
  }
}
