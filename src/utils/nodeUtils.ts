import {gridSize} from '../map/mapSettings';
export const getDistanceBetweenUnitAndNodeInGrids = (unit:any, node:any):number => {
  let nodeX:number = node.x;
  let nodeY:number = node.y;
  let unitX:number = unit.currentNode.x;
  let unitY:number = unit.currentNode.y;
  console.log('nodeX', nodeX, 'nodeY', nodeY);
  console.log('unitX', unitX, 'unitY', unitY);
  console.log('gridSize', gridSize);
  let distanceX:number = (Math.abs(unitX - nodeX)) / gridSize;
  console.log('distanceX', distanceX);
  let distanceY:number = (Math.abs(unitY - nodeY)) / gridSize;
  console.log('distanceY', distanceY);
  let distance:number = distanceX + distanceY;
  return distance;
}
