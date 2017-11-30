import {gridSize} from '../config';
export const getDistanceBetweenUnitAndNodeInGrids = (unit:any, node:any):number => {
  let nodeX:number = node.x;
  let nodeY:number = node.y;
  let unitX:number = unit.currentNode.x;
  let unitY:number = unit.currentNode.y;
  let distanceX:number = (Math.abs(unitX - nodeX)) / gridSize;
  let distanceY:number = (Math.abs(unitY - nodeY)) / gridSize;
  let distance:number = distanceX + distanceY;
  return distance;
}

export const getDistanceBetweenTwoNodesInGrids = (node1:any, node2:any):number => {
  let node1X:number = node1.x;
  let node1Y:number = node1.y;
  let node2X:number = node2.x;
  let node2Y:number = node2.y;
  let distanceX:number = (Math.abs(node1X - node2X)) / gridSize;
  let distanceY:number = (Math.abs(node1Y - node2Y)) / gridSize;
  let distance:number = distanceX + distanceY;
  return distance;
}
