import {gridSize} from '../../config';
import {findPathFromOneNodeToAnother} from '../../path';
import {makeMovement} from './unitMovement';

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
