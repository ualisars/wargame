import {
  spotEnemy,
  charge,
  removeUnitFromEnemiesFightAgainst
} from '../index';
import {getNodeFromMap} from '../../utils';
import {assignUnitMoveToPosition} from '../actions';
import {
  createUnitObstacle,
  addNeighbors
} from '../../map';
import {initialMap} from '../../map/createMap/initialMap';
import {ctx} from '../../config/context';
import {aStar} from '../../path';
import {units} from '../../store/unit/units';
import {
  anotherUnitIsOnTheWay,
  getSurroundedEnemies
} from '../../utils';
import {unitCanGetOutOfCombat} from '../../utils/unit/movementUtils';
import {getSurroundedBlockedNodes} from '../../utils/node';
import {stopMoving} from './stopMoving';
import {moveToNextNodeInPursueUnit} from './moveToNextNode';

import {updateUnit} from './updateUnit';

export const pursueUnit = (unit:any, pursuedUnit:any, currentMoveToX:number, currentMoveToY:number, i:number, path:any, newMovement:boolean) => {
  unit.setIsMovingToTrue();
  // console.error('pursueUnit');
  // console.log('unit.x', unit.x, 'unit.y', unit.y);
  // console.log('current moveToX:', currentMoveToX, 'moveToY:', currentMoveToY);
  if(unit.isFighting) {
    unit.setUnitToPursueToNull();
    if(newMovement && unitCanGetOutOfCombat(unit)) { // unit is trying to out of combat
      console.log('unit can get out of combat');
      unit.setIsFightingToFalse(); // unit is not fighting now
      unit.clearFightAgainst(); // now unit not fighting with anyone
      removeUnitFromEnemiesFightAgainst(unit); // remove unit from all enemies figthAgainst
    } else {
      let currentNode = getNodeFromMap(unit.x, unit.y); // get currentNode
      unit.setCurrentNode(currentNode); // set currentNode
      unit.setNextNode(currentNode); // set nextNode
      unit.setIsMovingToFalse();
      return;
    }
  }
  if(unit.unitToPursue === null) { // unit isn't pursuing any opponent's units
    let startNode = getNodeFromMap(unit.x, unit.y);
    let finishNode = getNodeFromMap(unit.moveToNodeX, unit.moveToNodeY);
    let newPath:any = aStar(initialMap, startNode, finishNode);
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    updateUnit(unit,newPath, 0, finishNode.x, finishNode.y, null, false);
    return;
  }
  if(unit.unitToPursue !== null) {
    if(pursuedUnit.id !== unit.unitToPursue.id) {
      // unit is pursuing another opponent's unit
      console.log('allies unit is pursuing another oponents unit');
      let startNode = getNodeFromMap(unit.x, unit.y);
      let finishNode = getNodeFromMap(unit.unitToPursue.x, unit.unitToPursue.y);
      let newPath:any = aStar(initialMap, startNode, finishNode);
      assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
      pursueUnit(unit, unit.unitToPursue, finishNode.x, finishNode.y, 0, newPath, false);
      return;
    }
  }

  if(getSurroundedEnemies(unit).length !== 0) { // enemy is on the neighbour node
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

  let startNode = getNodeFromMap(unit.x, unit.y);
  let finishNode = getNodeFromMap(pursuedUnit.x, pursuedUnit.y);
  let node = path[i];
  unit.moveToNodeX = pursuedUnit.x;
  unit.moveToNodeY = pursuedUnit.y;
  let previousNode = node;
  if(i !== 0) {
    previousNode = path[i-1];
  }

  // if pursued unit changed position
  if(currentMoveToX !== pursuedUnit.x || currentMoveToY !== pursuedUnit.y) {
    //console.error('pursue unit: pursuedUnit change position')
    i = 0;
    currentMoveToX = pursuedUnit.x;
    currentMoveToY = pursuedUnit.y;
    startNode = getNodeFromMap(unit.x, unit.y);
    finishNode = getNodeFromMap(pursuedUnit.x, pursuedUnit.y);
    // console.error('startNode:', startNode);
    // console.error('finishNode:', finishNode);
    // console.error('pursuedUnit.x:', pursuedUnit.x, 'pursuedUnit.y:', pursuedUnit.y);
    // console.error('map', map);
    path = aStar(initialMap, startNode, finishNode);
    unit.moveToNodeX = pursuedUnit.x;
    unit.moveToNodeY = pursuedUnit.y;
    node = path[i]; // get next node
    previousNode = node;
    if(i !== 0) {
      previousNode = path[i-1];
    }
  }

  if(node.x === pursuedUnit.x && node.y === pursuedUnit.y) {
    // unit is reached oponents's unit
    console.log(`unit is reached oponents's unit`);
    unit.setIsMovingToFalse();
    unit.setUnitToPursueToNull();
    unit.setIsFightingToTrue();
    pursuedUnit.setIsFightingToTrue();
    unit.assignEnemy(pursuedUnit); // assign pursuedUnit as front line enemy
    pursuedUnit.assignEnemy(unit);
    charge(unit, pursuedUnit);
    console.error('unit frontEnemy:', unit.figthAgainst.front);
    return;
  }

  if(anotherUnitIsOnTheWay(units, unit, node.x, node.y)) {
    // unit has another allies' unit on its way
    console.error('pursueUnit: another unit is on the way x:',node.x, 'y:',node.y);
    let blockedNodes = getSurroundedBlockedNodes(unit);
    // if current node and next node are different
    let updatedMap = Object.assign([], initialMap);
    for(let blockedNode of blockedNodes) {
      updatedMap = createUnitObstacle(updatedMap, blockedNode.x, blockedNode.y); // create obstacle for currentNode
    }
    addNeighbors(updatedMap);
    // console.log('deleted Node', node);
    // console.log('updatedMap', updatedMap);
    // console.log('node', node);
    startNode = getNodeFromMap(unit.x, unit.y, updatedMap);
    finishNode = getNodeFromMap(pursuedUnit.x, pursuedUnit.y, updatedMap);
    unit.moveToNodeX = pursuedUnit.x;
    unit.moveToNodeY = pursuedUnit.y;
    let newPath:any = aStar(updatedMap, startNode, finishNode);
    previousNode = newPath[0]; // get previous unit's position
    node = newPath[1]; // get next node
    //console.error('unit is going to node x:', node.x, 'y:',node.y);
    moveToNextNodeInPursueUnit(unit, pursuedUnit, previousNode, node, currentMoveToX, currentMoveToY, path, i);
    return;
  }
  // console.error('previousNode', previousNode);
  // console.error('currentNode', node);
  spotEnemy(unit); // check for enemy units
  unit.decreaseCondition(1); // decreaseCondition while moving
  moveToNextNodeInPursueUnit(unit, pursuedUnit, previousNode, node, currentMoveToX, currentMoveToY, path, i);
}
