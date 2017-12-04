import {
  gridSize,
  HEIGHT,
  WIDTH
} from '../../config';
import {map} from '../../map';
import {
  deleteObjectFromArray,
  getNodeFromMap
} from '../../utils';

export let computerUnitsNodes:any[] = [];

const computerX0 = WIDTH - (gridSize * 2);
const computerX1 = WIDTH;
const computerY0 = 0;
const computerY1 = HEIGHT;

for(let x = computerX0; x <= computerX1; x += gridSize) {
  for(let y = computerY0; y <= computerY1; y+= gridSize) {
    let node = getNodeFromMap(x,y, map);
    computerUnitsNodes.push(node);
  }
}

export const deleteNodeFromComputerNodes = (node:any) => {
  if(node) {
    computerUnitsNodes = deleteObjectFromArray(node, computerUnitsNodes);
  }
}
