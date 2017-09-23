import {drawUnit} from './unitActions';
import {
  gridSize,
  ctx,
  WIDTH,
  HEIGHT
} from '../map/mapConfig';
import {deleteObjectFromArray} from '../utils/objUtils';

import {
  map,
  createUnitObstacle,
  addNeighbours
} from '../map/createMap';
import {aStar} from '../path/AStar';
import {getNodeFromMap} from '../path/drawPath';

import {units} from '../store/unitStore';
import {checkOtherUnitsPosition} from './unitUtils';

export let updateUnit = (unit:any, path:any[], i:number=0, currentMoveToX:number, currentMoveToY:number, chasenUnit:any=null) => {
  unit.setIsMovingToTrue();
  if(currentMoveToX !== unit.moveToNodeX || currentMoveToY !== unit.moveToNodeY) {
    console.log('new destination has been chosen');
    unit.setIsMovingToFalse();
    return;
  }

  let updatedPath = path;
  let node = updatedPath[i]; // get next node
  console.log('node', node);
  // ally unit is on the destination position
  // currentUnit should stop moving
  if(checkOtherUnitsPosition(units, unit, node.x, node.y) && i === updatedPath.length - 1) {
    unit.moveToNodeX = unit.x;
    unit.moveToNodeY = unit.y;
    unit.setIsMovingToFalse();
    return;
  }
  if(checkOtherUnitsPosition(units, unit, node.x, node.y)) {
    // unit has another allies' unit on its way
    console.error('updateUnit: another unit is on the way x:',node.x,'y:', node.y);
    let updatedMap = map;
    updatedMap = createUnitObstacle(updatedMap, node.x, node.y);
    addNeighbours(updatedMap);
    console.log('deleted Node', node);
    console.log('updatedMap', updatedMap);
    console.log('node', node);
    let startNode = getNodeFromMap(unit.x, unit.y, updatedMap);
    let finishNode = getNodeFromMap(currentMoveToX, currentMoveToY, updatedMap);
    let newPath:any = aStar(updatedMap, startNode, finishNode);

    console.error('newPath', newPath);
    updateUnit(unit, newPath, 0, currentMoveToX, currentMoveToY);
    return;
  }

  let nodeToClear = node;
  if(i !== 0) {
    nodeToClear = updatedPath[i - 1];
  }
  moveToNextNode(unit, node, nodeToClear);
  i++;
  if(i !== updatedPath.length) {
    setTimeout(() => {
      updateUnit(unit, updatedPath, i, currentMoveToX, currentMoveToY);
    }, 400);
  } else {
    unit.setIsMovingToFalse();
    return;
  }
}

export const pursueUnit = (unit:any, pursuedUnit:any, currentMoveToX:number, currentMoveToY:number, i:number) => {
  unit.setIsMovingToTrue();
  console.error('pursueUnit');
  console.log('unit.x', unit.x, 'unit.y', unit.y);
  console.log('pursuedUnit name', pursueUnit.name);
  if(unit.unitToPursue !== null) {
    if(pursuedUnit.name !== unit.unitToPursue.name) {
      // allies' unit is now pursue another oponent's unit
      console.log('allies unit is not pursue this oponents unit');
      unit.setIsMovingToFalse();
      unit.unitToPursue = null;
      return;
    }
  } else {
    // allies' unit is not pursue any oponents' units
    console.log('allies unit is not pursue any oponents units');
    unit.setIsMovingToFalse();
    return;
  }

  let startNode = getNodeFromMap(unit.x, unit.y, map);
  let finishNode = getNodeFromMap(pursuedUnit.x, pursuedUnit.y, map);
  let path:any = aStar(map, startNode, finishNode);
  unit.moveToNodeX = pursuedUnit.x;
  unit.moveToNodeY = pursuedUnit.y;
  let node = path[1]; // get next node
  let previousNode = path[0]; // get previous unit's position

  if(node.x === pursuedUnit.x && node.y === pursuedUnit.y) {
    // unit is reached oponents's unit
    console.log(`unit is reached oponents's unit`);
    return;
  }

  // if pursued unit changed position
  if(currentMoveToX !== pursuedUnit.x || currentMoveToY !== pursuedUnit.y) {

  }

  if(checkOtherUnitsPosition(units, unit, node.x, node.y)) {
    // unit has another allies' unit on its way
    console.error('pursueUnit: another unit is on the way x:',node.x, 'y:',node.y);
    let updatedMap = map;
    updatedMap = createUnitObstacle(updatedMap, node.x, node.y);
    addNeighbours(updatedMap);
    console.log('deleted Node', node);
    console.log('updatedMap', updatedMap);
    console.log('node', node);
    startNode = getNodeFromMap(unit.x, unit.y, updatedMap);
    finishNode = getNodeFromMap(pursuedUnit.x, pursuedUnit.y, updatedMap);
    unit.moveToNodeX = pursuedUnit.x;
    unit.moveToNodeY = pursuedUnit.y;
    let newPath:any = aStar(updatedMap, startNode, finishNode);
    previousNode = newPath[0]; // get previous unit's position
    node = newPath[1]; // get next node
    console.error('unit is going to node x:', node.x, 'y:',node.y);
    moveToNextNode(unit, node, previousNode);
    pursueUnit(unit, pursuedUnit, pursuedUnit.x, pursuedUnit.y, 0);
    return;
  }
  moveToNextNode(unit, node, previousNode);
  setTimeout(() => {
    pursueUnit(unit, pursuedUnit, pursuedUnit.x, pursuedUnit.y, i);
  }, 400);
}

export const moveToNextNode = (unit:any, node:any, previousNode:any) => {
  ctx.clearRect(previousNode.x, previousNode.y, gridSize, gridSize);

  unit.setX(node.x); // calculate center of the current node
  unit.setY(node.y);

  drawUnit(unit);
}
