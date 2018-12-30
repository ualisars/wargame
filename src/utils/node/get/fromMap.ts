import { gridSize, MAP_WIDTH, MAP_HEIGHT } from '../../../config';
import { initialMap, searchMap } from '../../../map/createMap/initialMap';
import MapNode from '../../../map/nodes/MapNode';
import { coordinateYBinarySearch, findXInSearchMap } from '../../search/binarySearch';

// export let getNodeFromMap = (x:number, y:number, map=initialMap): MapNode => {
//   let node: MapNode;
//   for(let grid of map) {
//     let bottomRightX = grid.x + gridSize;
//     let bottomRightY = grid.y + gridSize;
//     if(x >= grid.x && x < bottomRightX && y >= grid.y && y < bottomRightY) {
//       node = grid;
//     }
//   }
//   return node;
// }

export const getNodeFromMap = (x: number, y: number, map=searchMap): any => {
  let node: MapNode;
  let nodesInX: number = MAP_WIDTH / gridSize;
  let nodesInY: number = MAP_HEIGHT / gridSize;
  let xNodes: MapNode[] = findXInSearchMap(0, nodesInX, x);
  if(xNodes) {
    node = coordinateYBinarySearch(0, nodesInY, y, xNodes);
  }
  return node;
}
