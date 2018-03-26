import {gridSize} from '../../config';
import {getNodeFromMap} from '../index';
/*
  return nodes that surround unit in some distance
*/
export const getSurroundedNodes = (unit:any, distance:number):any[] => {
  //console.log('getSurroundedNodes');
  let nodes:any[] = [];
  let startX = unit.currentNode.x - (distance * gridSize);
  let finishX = unit.currentNode.x + (distance * gridSize);
  let startY = unit.currentNode.y - (distance * gridSize);
  let finishY = unit.currentNode.y + (distance * gridSize);
  for(let y = startY; y <= finishY; y += gridSize) {
    for(let x = startX; x <= finishX; x += gridSize) {
      // console.log('unit x:', unit.currentNode.x, 'y:', unit.currentNode.y);
      // console.log('x:', x, 'y:', y);
      let node = getNodeFromMap(x, y);
      //console.log('node:', node);
      if(node) {
          nodes.push(node);
      }
    }
  }
  return nodes;
}
