import {
  gridSize,
  HEIGHT,
} from '../../../config';
import {
  deleteObjectFromArray,
  getNodeFromMap
} from '../../../utils';
import MapNode from '../../../map/nodes/MapNode';

export let playerUnitsNodes: MapNode[] = [];

export const initializePlayerUnitsNodes = () => {
  return new Promise(resolve => {
    const playerX0 = 0;
    const playerX1 = gridSize * 2;
    const playerY0 = 0;
    const playerY1 = HEIGHT;
    for(let x = playerX0; x <= playerX1; x += gridSize) {
      for(let y = playerY0; y <= playerY1; y+= gridSize) {
        let node = getNodeFromMap(x, y);
        if(node) {
          playerUnitsNodes.push(node);
        }
      }
    }
    resolve();
  });
}

export const deleteNodeFromPlayerNodes = (node: MapNode) => {
  if(node) {
    playerUnitsNodes = deleteObjectFromArray(node, playerUnitsNodes);
  }
}
