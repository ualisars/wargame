import {gridSize} from '../../config';
import {isObjectInArray} from '../index';

export const addNodeIntoArray = (node:any, arr:any[]) => {
  let updatedArr = Object.assign([], arr);
  if(!isObjectInArray(node, arr)) {
    updatedArr.push(node);
  }
  return updatedArr;
}

export const getNodeFromArray = (object:any, arr:any[]):any => {
  for(let node of arr) {
    if(node.x === object.x && node.y && object.y) {
      return node;
    }
  }
}

/*
  Get min value of the node from the array
*/
export const getMinValueFromNodes = (searchValue:any,nodes:any[]):any => {
  let min = nodes[0];
  for(let i = 1; i < nodes.length; ++i) {
    if(min[searchValue] > nodes[i][searchValue]) {
      min = nodes[i];
    }
  }
  return min[searchValue];
}

/*
  Get min value of the node from the array
*/
export const getMaxValueFromNodes = (searchValue:any,nodes:any[]):any => {
  let max = nodes[0];
  for(let i = 1; i < nodes.length; ++i) {
    if(max[searchValue] < nodes[i][searchValue]) {
      max = nodes[i];
    }
  }
  return max[searchValue];
}

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
