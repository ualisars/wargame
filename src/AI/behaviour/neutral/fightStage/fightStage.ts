import {
  visibleForComputerUnits,
  spottedUnits,
  computersUnits
} from '../../../../store/unitStore';
import {
  getClosestUnitToOtherUnit,
  getBestUnitByProperty,
  getBestEnemyByProperty,
  getWorstEnemyByProperty,
  getUnitsByTask
} from '../../../actions/unitActions';
import {getRandomNode} from '../../../actions/mapActions';
import {getSurroundedNodes} from '../../../analyzeModule/unitAnalyze';
import {
  getNodeFromMap
} from '../../../../path/drawPath';
import {aStar} from '../../../../path/AStar';
import {map} from '../../../../map/createMap';
import {
  updateUnit,
  pursueUnit
} from '../../../../unit/unitMovement';
import {assignUnitMoveToPosition} from '../../../../unit/unitActions';
/*
  What neutral AI should do in fightStage
  1. Powerful units attacks
  2. Fast units are trying to flank
  3. Weaker units covers
*/

export const fight = () => {
  if(computersUnits.length > 1) {
    surround();
    flankUnit()
    attack();
  } else {
    attack();
  }
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
  let startNode = getNodeFromMap(unit.x, unit.y, map);
  let finishNode = getNodeFromMap(enemy.currentNode.x, enemy.currentNode.y, map);
  let path:any = aStar(map, startNode, finishNode);
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
  let startNode = getNodeFromMap(unit.x, unit.y, map);
  let finishNode = getNodeFromMap(enemy.currentNode.x, enemy.currentNode.y, map);
  let path:any = aStar(map, startNode, finishNode);
  if(unit.isMoving) {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
  } else {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    pursueUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
  }
}

export const surround = () => {
  let enemy = findStrongestUnitToAttack();
  let nodes = getSurroundedNodes(enemy, 3);
  for(let unit of computersUnits) {
    let node = getRandomNode(nodes);
    let startNode = getNodeFromMap(unit.x, unit.y, map);
    let finishNode = getNodeFromMap(node.x, node.y, map);
    let path:any = aStar(map, startNode, finishNode);
    if(unit.isMoving) {
      assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    } else {
      assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
      updateUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
    }
  }
}
