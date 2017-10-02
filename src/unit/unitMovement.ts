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
import {checkUnitIsFighting} from './unitFight';
import {findPathFromOneNodeToAnother} from './unitPath';

export let updateUnit = (unit:any, path:any[], i:number=0, currentMoveToX:number, currentMoveToY:number, chasenUnit:any=null) => {
  unit.setIsMovingToTrue();
  if(checkUnitIsFighting(unit)) {
    unit.setIsMovingToFalse();
    return;
  }
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

export const pursueUnit = (unit:any, pursuedUnit:any, currentMoveToX:number, currentMoveToY:number, i:number, path:any) => {
  unit.setIsMovingToTrue();
  console.error('pursueUnit');
  console.log('unit.x', unit.x, 'unit.y', unit.y);
  console.log('current moveToX:', currentMoveToX, 'moveToY:', currentMoveToY);
  if(checkUnitIsFighting(unit)) {
    unit.setIsMovingToFalse();
    return;
  }
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
  let node = path[i];
  unit.moveToNodeX = pursuedUnit.x;
  unit.moveToNodeY = pursuedUnit.y;
  let previousNode = node;
  if(i !== 0) {
    previousNode = path[i-1];
  }

  // if pursued unit changed position
  if(currentMoveToX !== pursuedUnit.x || currentMoveToY !== pursuedUnit.y) {
    console.error('pursue unit: pursuedUnit change position')
    i = 0;
    currentMoveToX = pursuedUnit.x;
    currentMoveToY = pursuedUnit.y;
    startNode = getNodeFromMap(unit.x, unit.y, map);
    finishNode = getNodeFromMap(pursuedUnit.x, pursuedUnit.y, map);
    path = aStar(map, startNode, finishNode);
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
    unit.setIsFightingToTrue();
    pursuedUnit.setIsFightingToTrue();
    return;
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
    moveToNextNode2(unit, pursuedUnit, previousNode, node, currentMoveToX, currentMoveToY, path, i);
    //pursueUnit(unit, pursuedUnit, currentMoveToX, currentMoveToY, 0, path);
    return;
  }
  //moveToNextNode(unit, node, previousNode);
  console.error('previousNode', previousNode);
  console.error('currentNode', node);
  moveToNextNode2(unit, pursuedUnit, previousNode, node, currentMoveToX, currentMoveToY, path, i);
  // i++;
  // setTimeout(() => {
  //   pursueUnit(unit, pursuedUnit, currentMoveToX, currentMoveToY, i, path);
  // }, 400);
}

export const moveToNextNode = (unit:any, node:any, previousNode:any) => {
  ctx.clearRect(previousNode.x, previousNode.y, gridSize, gridSize);

  unit.setX(node.x); // calculate center of the current node
  unit.setY(node.y);

  drawUnit(unit);
}

export const moveToNextNode2 = (unit:any, pursuedUnit:any, currentNode:any, nextNode:any, currX:number, currY:number, allPath:any[], nodeI:number) => {
  return new Promise(resolve => {
    let startX = currentNode.x + (gridSize * 0.5);
    let startY = currentNode.y + (gridSize * 0.5);
    let finishX = nextNode.x + (gridSize * 0.5);
    let finishY = nextNode.y + (gridSize * 0.5);
    console.error('x:',startX, 'y:', startY);
    console.error('finishX:',finishX, 'finishY:', finishY);
    let path = findPathFromOneNodeToAnother(startX, startY, finishX, finishY);
    console.error('path', path);
    makeMovement2(unit, pursuedUnit, currentNode, nextNode, path, allPath, currX, currY, 0, nodeI);
    resolve();
  });
}

// export const makeMovement = (unit:any, path:any[], currentX:number, currentY:number, moveToX:number, moveToY:number, i:number) => {
//     console.error('makeMovement');
//     console.error('makeMovement i:', i);
//    if(path[i].x === moveToX && path[i].y === moveToY) {  // unit reach destination point
//      return;
//    }
//
//    let node = path[i];
//    // delete previous state
//     let deleteX, deleteY;
//     if(i > 0) {
//       deleteX = path[i - 1].x - (gridSize * 0.5);
//       deleteY = path[i - 1].y - (gridSize * 0.5);
//     } else {
//       deleteX = path[i].x  - (gridSize * 0.5);
//       deleteY = path[i].y - (gridSize * 0.5);
//     }
//     ctx.clearRect(deleteX, deleteY, gridSize, gridSize);
//     let centerX = path[i].x;
//     let centerY = path[i].y;
//     unit.x = centerX - (gridSize * 0.5); // change x and y every time when centerX and centerY is changed
//     unit.y = centerY - (gridSize * 0.5);
//     drawUnit(unit);
//     i++;
//     timeout(60)
//     .then(() => {
//       makeMovement(unit, path, currentX, currentY, moveToX, moveToY, i);
//     });
// }

export const makeMovement2 = (unit:any, pursuedUnit:any, currentNode:any, nextNode:any, path:any[], allPath:any[], currX:number, currY:number, i:number, nodeI: number) => {
  if(unit.x === nextNode.x && unit.y === nextNode.y) { // unit reach destination point
    console.error('unit reached its position');
    nodeI++;
    pursueUnit(unit, pursuedUnit, currX, currY, nodeI, allPath)
  }

  // delete previous state
   let deleteX, deleteY;
   if(i > 0) {
     deleteX = path[i - 1].x - (gridSize * 0.5);
     deleteY = path[i - 1].y - (gridSize * 0.5);
   } else {
     deleteX = path[i].x  - (gridSize * 0.5);
     deleteY = path[i].y - (gridSize * 0.5);
   }
   ctx.clearRect(deleteX, deleteY, gridSize, gridSize);
   let centerX = path[i].x;
   let centerY = path[i].y;
   unit.setX(centerX - (gridSize * 0.5));
   unit.setY(centerY - (gridSize * 0.5));
   drawUnit(unit);
   timeout(200)
   .then(() => {
     i++;
     makeMovement2(unit, pursuedUnit, currentNode, nextNode, path, allPath, currX, currY, i, nodeI);
   });
}

export const timeout = (time:number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}
