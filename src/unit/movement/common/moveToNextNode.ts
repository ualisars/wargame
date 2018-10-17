import {gridSize} from '../../../config';
import {findPathFromOneNodeToAnother} from '../../../path';
import {
  makeMovementInPursueUnit,
  makeMovementInUpdateUnit
} from './makeMovement';
import Unit from '../../types/Unit';

export const moveToNextNodeInPursueUnit = (unit:Unit, pursuedUnit:Unit, currentNode:any, nextNode:any, currX:number, currY:number, allPath:any[], nodeI:number) => {
  let startX = currentNode.x + (gridSize * 0.5);
  let startY = currentNode.y + (gridSize * 0.5);
  let finishX = nextNode.x + (gridSize * 0.5);
  let finishY = nextNode.y + (gridSize * 0.5);
  let path = findPathFromOneNodeToAnother(startX, startY, finishX, finishY);
  makeMovementInPursueUnit(unit, pursuedUnit, currentNode, nextNode, path, allPath, currX, currY, 0, nodeI);
}

export const moveToNextNodeInUpdateUnit = (unit:Unit, currentNode:any, nextNode:any, currX:number, currY:number, allPath:any[], nodeI:number) => {
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
