import {gridSize} from '../../../config';
import {map} from '../../../map/createMap';

export let getNodeFromMap = (x:number, y:number, initialMap=map) => {
  let node:any;
  for(let grid of initialMap) {
    let bottomRightX = grid.x + gridSize;
    let bottomRightY = grid.y + gridSize;
    if(x >= grid.x && x < bottomRightX && y >= grid.y && y < bottomRightY) {
      node = grid;
    }
  }
  return node;
}
