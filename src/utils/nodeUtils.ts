import {gridSize} from '../map/mapSettings';
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