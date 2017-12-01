import {gridSize} from '../config';
export let getNodeFromMap = (x:number, y:number, map:any[]) => {
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
