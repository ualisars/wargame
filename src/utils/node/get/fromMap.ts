import {gridSize} from '../../../config';
import {initialMap} from '../../../map/createMap/initialMap';
import MapNode from '../../../map/nodes/MapNode';

export let getNodeFromMap = (x:number, y:number, map=initialMap): MapNode => {
  let node:any;
  for(let grid of map) {
    let bottomRightX = grid.x + gridSize;
    let bottomRightY = grid.y + gridSize;
    if(x >= grid.x && x < bottomRightX && y >= grid.y && y < bottomRightY) {
      node = grid;
    }
  }
  return node;
}
