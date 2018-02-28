import {
  drawUnit,
  spotEnemy,
  meleeCombat,
  meleeAttack,
  charge,
  removeUnitFromEnemiesFightAgainst
} from '../index';
import {
    gridSize,
    WIDTH,
    HEIGHT
} from '../../config';
import {
  deleteObjectFromArray,
  getNodeFromMap
} from '../../utils';
import {assignUnitMoveToPosition} from '../actions';
import {
  createUnitObstacle,
  addNeighbors
} from '../../map';
import {map} from '../../map/createMap';
import {ctx,} from '../../config/context';
import {
  aStar,
  findPathFromOneNodeToAnother
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

import {updateUnit} from './updateUnit';
import {pursueUnit} from './pursueUnit';




export const moveToNextNode = (unit:any, pursuedUnit:any, currentNode:any, nextNode:any, currX:number, currY:number, allPath:any[], nodeI:number) => {
  // return new Promise(resolve => {
  //console.log('moveToNextNode2');
  let startX = currentNode.x + (gridSize * 0.5);
  let startY = currentNode.y + (gridSize * 0.5);
  let finishX = nextNode.x + (gridSize * 0.5);
  let finishY = nextNode.y + (gridSize * 0.5);
  // console.error('x:',startX, 'y:', startY);
  // console.error('finishX:',finishX, 'finishY:', finishY);
  let path = findPathFromOneNodeToAnother(startX, startY, finishX, finishY);
  //console.error('path', path);
  makeMovement(unit, pursuedUnit, currentNode, nextNode, path, allPath, currX, currY, 0, nodeI);

}

export const moveToNextNodeInUpdateUnit = (unit:any, currentNode:any, nextNode:any, currX:number, currY:number, allPath:any[], nodeI:number) => {
  // return new Promise(resolve => {
  //console.log('moveToNextNode2');
  let startX = currentNode.x + (gridSize * 0.5);
  let startY = currentNode.y + (gridSize * 0.5);
  let finishX = nextNode.x + (gridSize * 0.5);
  let finishY = nextNode.y + (gridSize * 0.5);
  // console.error('x:',startX, 'y:', startY);
  // console.error('finishX:',finishX, 'finishY:', finishY);
  let path = findPathFromOneNodeToAnother(startX, startY, finishX, finishY);
  //console.error('path', path);
  makeMovementInUpdateUnit(unit, currentNode, nextNode, path, allPath, currX, currY, 0, nodeI);
}

export const makeMovementInUpdateUnit = (unit:any, currentNode:any, nextNode:any, path:any[], allPath:any[], currX:number, currY:number, i:number, nodeI: number) => {
  //console.log('makeMovementInUpdateUnit');
  if(unit.x === nextNode.x && unit.y === nextNode.y) { // unit reach destination point
    nodeI++;
    updateUnit(unit, allPath, nodeI, currX, currY, null, false);
  }

  if(i >= path.length) {
    return;
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

   setTimeout(() => {
     i++;
     makeMovementInUpdateUnit(unit, currentNode, nextNode, path, allPath, currX, currY, i, nodeI);
   }, Math.round(1000 / unit.speed));
}

export const makeMovement = (unit:any, pursuedUnit:any, currentNode:any, nextNode:any, path:any[], allPath:any[], currX:number, currY:number, i:number, nodeI: number) => {
  //console.log('makeMovement2');
  if(unit.x === nextNode.x && unit.y === nextNode.y) { // unit reach destination point
    //console.error('unit reached its position');
    nodeI++;
    pursueUnit(unit, pursuedUnit, currX, currY, nodeI, allPath, false);
  }

  if(i >= path.length) {
    return;
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

   setTimeout(() => {
     i++;
     makeMovement(unit, pursuedUnit, currentNode, nextNode, path, allPath, currX, currY, i, nodeI);
   }, Math.round(1000 / unit.speed));
}

export const timeout = (time:number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}
