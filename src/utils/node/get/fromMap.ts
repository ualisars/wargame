import { gridSize, MAP_WIDTH } from '../../../config';
import { initialMap, searchMap } from '../../../map/createMap/initialMap';
import MapNode from '../../../map/nodes/MapNode';

export let getNodeFromMap = (x:number, y:number, map=initialMap): MapNode => {
  let node: MapNode;
  for(let grid of map) {
    let bottomRightX = grid.x + gridSize;
    let bottomRightY = grid.y + gridSize;
    if(x >= grid.x && x < bottomRightX && y >= grid.y && y < bottomRightY) {
      node = grid;
    }
  }
  return node;
}

export const getNodeFromMapB = (x: number, y: number, map=searchMap): MapNode => {
  let node: MapNode;
  let nodesInX: number = MAP_WIDTH / gridSize;
  let mediumX: number = Math.floor(nodesInX / 2);
  return node;
}
