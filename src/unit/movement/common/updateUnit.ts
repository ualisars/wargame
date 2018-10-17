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
import {ctx} from '../../../config/context';
import {
  aStar
} from '../../../path';
import {units} from '../../../store/unit/units';
import {
  anotherUnitIsOnTheWay,
  getSurroundedEnemies
} from '../../../utils';
import {unitCanGetOutOfCombat,} from '../../../utils/unit/movementUtils';
import Unit from '../../types/Unit';
import {getSurroundedBlockedNodes} from '../../../utils/node';
import {stopMoving} from './stopMoving';
import {moveToNextNodeInUpdateUnit} from './moveToNextNode';
import {pursueUnit} from './pursueUnit'
import {unitCanMoveToTheNode} from '../../../utils/unit/priority';

export let updateUnit = (unit:Unit, path:any[], i:number=0, currentMoveToX:number, currentMoveToY:number, chasenUnit:any=null, newMovement:boolean) => {
  if(unit.health <= 0) {
    console.log('unit has been destroyed');
    return;
  }
  unit.setIsMovingToTrue();
  if(i === path.length) { // unit approach its end position
    console.log(unit.name, 'is on position');
    let currentNode = getNodeFromMap(unit.x, unit.y); // get currentNode
    stopMoving(unit, currentNode);
    return;
  }

  if(unit.isFighting) { // stop moving if unit is fighting
    if(newMovement && unitCanGetOutOfCombat(unit)) { // unit is trying to out of combat
      console.log('unit can get out of combat');
      unit.setUnitToPursueToNull();
      unit.setIsFightingToFalse(); // unit is not fighting now
      unit.clearFightAgainst(); // now unit not fighting with anyone
      removeUnitFromEnemiesFightAgainst(unit); // remove unit from all enemies figthAgainst
    } else {
      let currentNode = getNodeFromMap(unit.x, unit.y); // get currentNode
      stopMoving(unit, currentNode);
      return;
    }
  }

  if(getSurroundedEnemies(unit).length !== 0) { // enemy is on the neighbour node
    console.error('unit has been intercepted by an enemy');
    console.log('enemies', getSurroundedEnemies(unit));
    unit.setIsMovingToFalse();
    unit.setUnitToPursueToNull();
    unit.setIsFightingToTrue();
    for(let enemy of getSurroundedEnemies(unit)) {
      enemy.setIsFightingToTrue();
      unit.assignEnemy(enemy); // assign pursuedUnit as front line enemy
      enemy.assignEnemy(unit);
    }
    return;
  }

  if(unit.unitToPursue) {
    // unit now is pursuing opponent's unit
    console.log('allies unit is pursuing another oponents unit');
    let startNode = getNodeFromMap(unit.x, unit.y);
    unit.setCurrentNode(startNode); // set currentNode
    unit.setNextNode(startNode); // set nextNode
    let finishNode = getNodeFromMap(unit.unitToPursue.x, unit.unitToPursue.y);
    let newPath:any = aStar(initialMap, startNode, finishNode);
    unit.assignMoveToPosition(finishNode.x, finishNode.y);
    pursueUnit(unit, unit.unitToPursue, finishNode.x, finishNode.y, 0, newPath, false);
    return;
  }

  if(currentMoveToX !== unit.moveToNode.x || currentMoveToY !== unit.moveToNode.y) { // new destination
    console.log('new destination has been chosen');
    let startNode = getNodeFromMap(unit.x, unit.y);
    let finishNode = getNodeFromMap(unit.moveToNode.x, unit.moveToNode.y);
    unit.setCurrentNode(startNode); // set currentNode
    unit.setNextNode(startNode); // set nextNode
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
    unit.setIsMovingToFalse();
    return;
  }

  // ally unit is on the destination position
  // currentUnit should stop moving
  if(anotherUnitIsOnTheWay(units, unit, node) && i === updatedPath.length - 1) {
    console.error('another unit occupying destination position');
    unit.assignMoveToPosition(unit.x, unit.y);
    stopMoving(unit, currentNode);
    return;
  }
  if(anotherUnitIsOnTheWay(units, unit, node)) {
    // unit has another allies' unit on its way
    const permission:boolean = unitCanMoveToTheNode(nextNode, unit);
    if(permission) {
      console.log('unit ' + unit.name + ' can move to the node:', node);
    } else {
      console.log('unit ' + unit.name + ' cannot move to node:', node);
      console.error('updateUnit: another unit is on the way x:',node.x,'y:', node.y);
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
      console.error('finishNode:', finishNode);
      console.error('newPath', newPath);
      updateUnit(unit, newPath, 0, currentMoveToX, currentMoveToY, null, false);
      return;
    }

  }

  let nodeToClear = node;
  spotEnemy(unit); // check for enemy units
  if(i !== 0) {
    nodeToClear = updatedPath[i - 1];
  }
  unit.decreaseCondition(1); // decreaseCondition while moving
  moveToNextNodeInUpdateUnit(unit, nodeToClear, node, currentMoveToX, currentMoveToY, path, i);
}
