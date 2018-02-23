import {map} from '../../../map/createMap';
import {
  gridSize,
  HEIGHT,
  WIDTH
} from '../../../config/map';
import {backgroundCtx} from '../../../config/context';
import {getNodeFromMap} from '../../../utils/node/get/fromMap';
import {getRandomNode} from '../../../utils/node/random';
/*
  return nodes locating on computer's side
*/

export let controlZone:any[] = [];

export const filterNodes = ():any[] => {
  let computerSideNodes:any[] = [];
  const startX:number = Math.round(WIDTH / 2);
  const startY:number = gridSize; // avoid first row
  const finishX:number = WIDTH - (gridSize * 2); // avoid last column
  const finishY:number = HEIGHT - (gridSize * 2); // avoid last row
  for(let node of map) {
    if(node.x >= startX && node.x <= finishX && node.y >= startY && node.y <= finishY) {
      computerSideNodes.push(node);
    }
  }
  return computerSideNodes;
}

export const selectCotrolZone = () => {
  let nodes:any[] = filterNodes();
  let selectedNode:any = getRandomNode(nodes);
  const startX:number = selectedNode.x - (gridSize * 3);
  const startY:number = selectedNode.y - (gridSize * 3);
  const finishX:number = selectedNode.x + (gridSize * 3);
  const finishY:number = selectedNode.y + (gridSize * 3);
  for(let x = startX; x <= finishX; x += gridSize) {
    for(let y = startY; y <= finishY; y += gridSize) {
      let node:any = getNodeFromMap(x ,y, map);
      if(node) {
        controlZone.push(node);
      }
    }
  }
  for(let node of controlZone) {
    backgroundCtx.fillStyle = 'red';
    backgroundCtx.fillRect(node.x, node.y, 40, 40);
  }
}
