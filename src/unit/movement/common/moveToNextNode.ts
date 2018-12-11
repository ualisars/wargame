import { gridSize } from '../../../config';
import { findPathFromOneNodeToAnother } from '../../../path';
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
  let startX = currentNode.x + (gridSize * 0.5);
  let startY = currentNode.y + (gridSize * 0.5);
  let finishX = nextNode.x + (gridSize * 0.5);
  let finishY = nextNode.y + (gridSize * 0.5);
  let path = findPathFromOneNodeToAnother(startX, startY, finishX, finishY);
  makeMovementInUpdateUnit(unit, currentNode, nextNode, path, allPath, currX, currY, 0, nodeI);
}
