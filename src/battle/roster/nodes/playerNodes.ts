import {
  gridSize,
  HEIGHT,
  WIDTH
} from '../../../config';
import {map} from '../../../map';
import {
  deleteObjectFromArray,
  getNodeFromMap
} from '../../../utils';

export let playerUnitsNodes:any[] = [];

const playerX0 = 0;
const playerX1 = gridSize * 2;
const playerY0 = 0;
const playerY1 = HEIGHT;

for(let x = playerX0; x <= playerX1; x += gridSize) {
  for(let y = playerY0; y <= playerY1; y+= gridSize) {
    let node = getNodeFromMap(x,y, map);
    playerUnitsNodes.push(node);
  }
}

export const deleteNodeFromPlayerNodes = (node:any) => {
  if(node) {
    playerUnitsNodes = deleteObjectFromArray(node, playerUnitsNodes);
  }
}
