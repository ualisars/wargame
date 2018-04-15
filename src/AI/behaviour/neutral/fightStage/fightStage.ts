import {computerUnits} from '../../../../store/unit/units';
import {visibleForComputerUnits} from '../../../../store/unit/visibleUnits';
import {spottedUnits} from '../../../../store/unit/spottedUnits';
import {
  getClosestUnitToOtherUnit,
  getBestUnitByProperty,
  getBestEnemyByProperty,
  getWorstEnemyByProperty,
  getUnitsByTask
} from '../../../../utils/unit/AI';
import {getRandomNode} from '../../../../utils/node';
import {getSurroundedNodes} from '../../../../utils/surrounded';
import {
  getNodeFromMap
} from '../../../../utils';
import {aStar} from '../../../../path';
import {initialMap} from '../../../../map/createMap/initialMap';
import {
  updateUnit,
  pursueUnit
} from '../../../../unit/movement';
import {assignUnitMoveToPosition} from '../../../../unit/position';
/*
  What neutral AI should do in fightStage
  1. Powerful units attacks
  2. Fast units are trying to flank
  3. Weaker units covers
*/

export const fight = () => {
  //if(computersUnits.length > 1) {
  //   surround();
  //   setTimeout(() => {
  //     flankUnit();
  //   }, 200);
  //   setTimeout(() => {
  //     attack();
  //   }, 300);
  // } else {
  //   attack();
  // }
  attack();
}

// find strongestUnit
export const findStrongestUnitToAttack = () => {
  let enemies:any[] = [];
  for(let enemy of visibleForComputerUnits) {
    enemies.push(enemy);
  }
  for(let enemy of spottedUnits) {
    enemies.push(enemy);
  }
  return getBestEnemyByProperty('meleeDamage');
}

export const findWeakestUnitToAttack = () => {
  let enemies:any[] = [];
  for(let enemy of visibleForComputerUnits) {
    enemies.push(enemy);
  }
  for(let enemy of spottedUnits) {
    enemies.push(enemy);
  }
  return getWorstEnemyByProperty('meleeDamage');
}

export const flankUnit = () => {
  let unit:any = getBestUnitByProperty('speed');
  let enemy = getWorstEnemyByProperty('meleeDamage');
  let startNode = getNodeFromMap(unit.x, unit.y);
  let finishNode = getNodeFromMap(enemy.currentNode.x, enemy.currentNode.y);
  let path:any = aStar(initialMap, startNode, finishNode);
  if(unit.isMoving) {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
  } else {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    pursueUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
  }
}

export const attack = () => {
  let unit = getBestUnitByProperty('meleeDamage');
  let enemy = findStrongestUnitToAttack();
  let startNode = getNodeFromMap(unit.x, unit.y);
  let finishNode = getNodeFromMap(enemy.currentNode.x, enemy.currentNode.y);
  let path:any = aStar(initialMap, startNode, finishNode);
  if(unit.isMoving) {
    console.error('fight stage');
    console.error('unit', unit.name, 'has to go to', finishNode);
    unit.setUnitToPursue(enemy);
  } else {
    console.error('fight stage');
    console.error('unit', unit.name, 'has to go to', finishNode);
    unit.setUnitToPursue(enemy);
    pursueUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
  }
}

export const surround = () => {
  let enemy = findStrongestUnitToAttack();
  let nodes = getSurroundedNodes(enemy, 3);
  for(let unit of computerUnits) {
    let node = getRandomNode(nodes);
    let startNode = getNodeFromMap(unit.x, unit.y);
    let finishNode = getNodeFromMap(node.x, node.y);
    let path:any = aStar(initialMap, startNode, finishNode);
    if(unit.isMoving) {
      assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    } else {
      assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
      updateUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
    }
  }
}
