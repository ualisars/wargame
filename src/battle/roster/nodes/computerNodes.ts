import {
  gridSize,
  HEIGHT,
  WIDTH
} from '../../../config';
import {
  deleteObjectFromArray,
  getNodeFromMap
} from '../../../utils';
import MapNode from '../../../map/nodes/MapNode';

export let computerUnitsNodes: MapNode[] = [];

export const initializeComputerUnitsNodes = () => {
  return new Promise(resolve => {
    const computerX0 = WIDTH - (gridSize * 2);
    const computerX1 = WIDTH;
    const computerY0 = 0;
    const computerY1 = HEIGHT;

    for(let x = computerX0; x <= computerX1; x += gridSize) {
      for(let y = computerY0; y <= computerY1; y+= gridSize) {
        let node = getNodeFromMap(x, y);
        if(node) {
          computerUnitsNodes.push(node);
        }
      }
    }
    resolve();
  });
}

export const deleteNodeFromComputerNodes = (node: MapNode) => {
  if(node) {
    computerUnitsNodes = deleteObjectFromArray(node, computerUnitsNodes);
  }
}
