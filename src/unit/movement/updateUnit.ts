import {
  spotEnemy,
  removeUnitFromEnemiesFightAgainst
} from '../index';
import {
  getNodeFromMap
} from '../../utils';
import {assignUnitMoveToPosition} from '../actions';
import {
  createUnitObstacle,
  addNeighbors
} from '../../map';
import {map} from '../../map/createMap';
import {ctx} from '../../config/context';
import {
  aStar
} from '../../path';
import {units} from '../../store/unit/units';
import {
  anotherUnitIsOnTheWay,
  getBlockingUnit,
  giveWay,
  isUnitOutOfCombat,
  getSurroundedEnemies
} from '../../utils';
import {getSurroundedBlockedNodes} from '../../utils/node';
import {stopMoving} from './stopMoving';
import {moveToNextNodeInUpdateUnit} from './moveToNextNode';
import {pursueUnit} from './pursueUnit'

export let updateUnit = (unit:any, path:any[], i:number=0, currentMoveToX:number, currentMoveToY:number, chasenUnit:any=null, newMovement:boolean) => {
  if(unit.health <= 0) {
    console.log('unit has been destroyed');
    return;
  }
  unit.setIsMovingToTrue();
  if(i === path.length) { // unit approach its end position
    console.log(unit.name, 'is on position');
    let currentNode = getNodeFromMap(unit.x, unit.y, map); // get currentNode
    stopMoving(unit, currentNode);
    return;
  }

  if(unit.isFighting) { // stop moving if unit is fighting
    if(newMovement && isUnitOutOfCombat(unit)) { // unit is trying to out of combat
      console.log('unit can get out of combat');
      unit.setUnitToPursueToNull();
      unit.setIsFightingToFalse(); // unit is not fighting now
      unit.clearFightAgainst(); // now unit not fighting with anyone
      removeUnitFromEnemiesFightAgainst(unit); // remove unit from all enemies figthAgainst
    } else {
      let currentNode = getNodeFromMap(unit.x, unit.y, map); // get currentNode
      stopMoving(unit, currentNode);
      return;
    }
  }

  if(getSurroundedEnemies(unit).length !== 0) { // enemy is on the neighbour node
    console.error('unit has been intercepted by enemy');
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
    let startNode = getNodeFromMap(unit.x, unit.y, map);
    unit.setCurrentNode(startNode); // set currentNode
    unit.setNextNode(startNode); // set nextNode
    let finishNode = getNodeFromMap(unit.unitToPursue.x, unit.unitToPursue.y, map);
    let newPath:any = aStar(map, startNode, finishNode);
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    pursueUnit(unit, unit.unitToPursue, finishNode.x, finishNode.y, 0, newPath, false);
    return;
  }

  if(currentMoveToX !== unit.moveToNodeX || currentMoveToY !== unit.moveToNodeY) { // new destination
    console.log('new destination has been chosen');
    let startNode = getNodeFromMap(unit.x, unit.y, map);
    let finishNode = getNodeFromMap(unit.moveToNodeX, unit.moveToNodeY, map);
    unit.setCurrentNode(startNode); // set currentNode
    unit.setNextNode(startNode); // set nextNode
    let newPath:any = aStar(map, startNode, finishNode);
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    updateUnit(unit,newPath, 0, finishNode.x, finishNode.y, null, false);
    return;
  }

  let updatedPath = path;
  let node = updatedPath[i]; // get next node
  if(!node) return;
  let currentNode = getNodeFromMap(unit.x, unit.y, map); // get currentNode
  unit.setCurrentNode(currentNode); // set currentNode
  unit.setNextNode(node); // set nextNode
  if(i >= updatedPath.length) {
    unit.setIsMovingToFalse();
    return;
  }

  // ally unit is on the destination position
  // currentUnit should stop moving
  if(anotherUnitIsOnTheWay(units, unit, node.x, node.y) && i === updatedPath.length - 1) {
    console.error('another unit occupying destination position');
    unit.moveToNodeX = unit.x;
    unit.moveToNodeY = unit.y;
    let currentNode = getNodeFromMap(unit.x, unit.y, map);
    stopMoving(unit, currentNode);
    return;
  }
  if(anotherUnitIsOnTheWay(units, unit, node.x, node.y)) {
    // unit has another allies' unit on its way
    console.error('updateUnit: another unit is on the way x:',node.x,'y:', node.y);
    let currentNode = getNodeFromMap(unit.x, unit.y, map);
    unit.setCurrentNode(currentNode); // set currentNode
    unit.setNextNode(currentNode); // set nextNode
    let updatedMap = map;
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

  let nodeToClear = node;
  spotEnemy(unit); // check for enemy units
  if(i !== 0) {
    nodeToClear = updatedPath[i - 1];
  }
  unit.decreaseCondition(1); // decreaseCondition while moving
  moveToNextNodeInUpdateUnit(unit, nodeToClear, node, currentMoveToX, currentMoveToY, path, i);
}
