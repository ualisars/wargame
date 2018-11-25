import { gridSize } from '../../config';
import { getNodeFromMap } from '..';
import Unit from '../../unit/types/Unit';
import MapNode from '../../map/nodes/MapNode';

export const getSurroundedNodes = (unit:Unit, distance:number = 1): MapNode[] => {
  let nodes: MapNode[] = [];
  let startX = unit.currentNode.x - (distance * gridSize);
  let finishX = unit.currentNode.x + (distance * gridSize);
  let startY = unit.currentNode.y - (distance * gridSize);
  let finishY = unit.currentNode.y + (distance * gridSize);
  for(let y = startY; y <= finishY; y += gridSize) {
    for(let x = startX; x <= finishX; x += gridSize) {
      let node = getNodeFromMap(x, y);
      if(node) {
          nodes.push(node);
      }
    }
  }
  return nodes;
}
