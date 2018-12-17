import {
  spotEnemy,
  removeUnitFromEnemiesFightAgainst
} from '../..';
import {
  getNodeFromMap
} from '../../../utils';
import {
  createUnitObstacle,
  addNeighbors
} from '../../../map';
import {initialMap} from '../../../map/createMap/initialMap';
import {
  aStar
} from '../../../path';
import {
  anotherUnitIsOnTheWay,
} from '../../../utils';
import {unitCanGetOutOfCombat,} from '../../../utils/unit/movementUtils';
import Unit from '../../types/Unit';
import {getSurroundedBlockedNodes} from '../../../utils/node';
import {stopMoving} from './stopMoving';
import {moveToNextNodeInUpdateUnit} from './moveToNextNode';
import {pursueUnit} from './pursueUnit'
import {unitCanMoveToTheNode} from '../../../utils/unit/priority';
import { getInterceptedEnemies } from '../../../utils/unit/interception/getInterceptedEnemies';
import { getBlockedEnemies } from '../../../utils/unit/unitPosition/getBlockedEnemies';
import { drawUnitIcon } from '../../../UI/battleUI/unitPanel/icon/drawUnitIcon';

export let updateUnit = (
    unit:Unit,
    path:any[], 
    i:number=0, 
    currentMoveToX:number, 
    currentMoveToY:number, 
    chasenUnit:any=null, 
    newMovement:boolean,
    tries: number = 0
  ) => {
  if(tries > 3) return;
  if(unit.health <= 0) {
    return;
  }
  if(i === path.length) { // unit approach its end position
    let currentNode = getNodeFromMap(unit.x, unit.y);
    stopMoving(unit, currentNode);
    return;
  }

  if(unit.isFighting) { // stop moving if unit is fighting
    drawUnitIcon(unit);
    if(newMovement && unitCanGetOutOfCombat(unit)) { // unit is trying to out of combat
      unit.setUnitToPursueToNull();
      unit.setIsFightingToFalse(); // unit is not fighting now
      unit.clearFightAgainst(); // now unit not fighting with anyone
      removeUnitFromEnemiesFightAgainst(unit); // remove unit from all enemies figthAgainst
    } else {
      let currentNode = getNodeFromMap(unit.x, unit.y);
      stopMoving(unit, currentNode);
      return;
    }
  }

  if(getInterceptedEnemies(unit).length !== 0) { // enemy is on the neighbour node
    let currentNode = getNodeFromMap(unit.x, unit.y);
    stopMoving(unit, currentNode);
    unit.setUnitToPursueToNull();
    unit.setIsFightingToTrue();
    drawUnitIcon(unit);
    for(let enemy of getInterceptedEnemies(unit)) {
      stopMoving(enemy, enemy.nextNode);
      enemy.setIsFightingToTrue();
      unit.assignEnemy(enemy); // assign pursuedUnit as front line enemy
      enemy.assignEnemy(unit);
      drawUnitIcon(enemy);
    }
    return;
  }

  if(unit.unitToPursue) {
    // unit now is pursuing opponent's unit
    let startNode = getNodeFromMap(unit.x, unit.y);
    stopMoving(unit, startNode);
    let finishNode = getNodeFromMap(unit.unitToPursue.x, unit.unitToPursue.y);
    let newPath:any = aStar(initialMap, startNode, finishNode);
    unit.assignMoveToPosition(finishNode.x, finishNode.y);
    pursueUnit(unit, unit.unitToPursue, finishNode.x, finishNode.y, 0, newPath, false);
    return;
  }

  if(currentMoveToX !== unit.moveToNode.x || currentMoveToY !== unit.moveToNode.y) { // new destination
    let startNode = getNodeFromMap(unit.x, unit.y);
    let finishNode = getNodeFromMap(unit.moveToNode.x, unit.moveToNode.y);
    stopMoving(unit, startNode);
    let newPath:any = aStar(initialMap, startNode, finishNode);
    unit.assignMoveToPosition(finishNode.x, finishNode.y);
    updateUnit(unit,newPath, 0, finishNode.x, finishNode.y, null, false);
    return;
  }

  let updatedPath = Object.assign([], path);
  let node = updatedPath[i]; // get next node
  if(!node) return;
  let nextNode:any;
  if(i + 1 === updatedPath.length) { // last node
    nextNode = node;
  } else {
    nextNode = updatedPath[i + 1];
  }

  let currentNode = getNodeFromMap(unit.x, unit.y); // get currentNode
  unit.setCurrentNode(currentNode); // set currentNode
  unit.setNextNode(node); // set nextNode
  if(i >= updatedPath.length) {
    stopMoving(unit, currentNode);
    return;
  }

  // ally unit is on the destination position
  // currentUnit should stop moving
  if(anotherUnitIsOnTheWay(unit) && i === updatedPath.length - 1) {
    console.error('another unit occupying destination position');
    unit.assignMoveToPosition(unit.x, unit.y);
    stopMoving(unit, currentNode);
    return;
  }
  if(anotherUnitIsOnTheWay(unit)) {
    console.log('another unit is on the way');
    // unit has another allies' unit on its way
    if(getBlockedEnemies(unit).length > 0) { // unit is blocked by enemy
      stopMoving(unit, currentNode);
      unit.setUnitToPursueToNull();
      unit.setIsFightingToTrue();
      drawUnitIcon(unit);
      for(let enemy of getBlockedEnemies(unit)) {
        enemy.setIsFightingToTrue();
        unit.assignEnemy(enemy);
        enemy.assignEnemy(unit);
      }
      return;
    } 
    const permission:boolean = unitCanMoveToTheNode(nextNode, unit);
    if(!permission) {
      stopMoving(unit, currentNode);
      let updatedMap = Object.assign([], initialMap);
      let blockedNodes = getSurroundedBlockedNodes(unit);
      for(let blockedNode of blockedNodes) {
        updatedMap = createUnitObstacle(updatedMap, blockedNode.x, blockedNode.y); // create obstacle for currentNode
      }
      addNeighbors(updatedMap); // create new neighbours for updated map
      let startNode = getNodeFromMap(unit.x, unit.y, updatedMap);
      let finishNode = getNodeFromMap(currentMoveToX, currentMoveToY, updatedMap);

      let newPath:any = aStar(updatedMap, startNode, finishNode);
      updateUnit(unit, newPath, 0, currentMoveToX, currentMoveToY, null, false, tries += 1);
      return;
    } 
  }

  unit.setIsMovingToTrue();
  drawUnitIcon(unit);
  let nodeToClear = node;
  spotEnemy(unit); // check for enemy units
  if(i !== 0) {
    nodeToClear = updatedPath[i - 1];
  }
  unit.decreaseCondition(1); // decreaseCondition while moving
  moveToNextNodeInUpdateUnit(unit, nodeToClear, node, currentMoveToX, currentMoveToY, path, i);
}
