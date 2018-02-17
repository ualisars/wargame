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

export const drawNodes = (nodes:any[]) => {
  for(let node of nodes) {
    backgroundCtx.fillStyle="red";
    backgroundCtx.fillRect(node.x, node.y, gridSize, gridSize);
  }
}
export const selectCotrolZone = () => {
  let nodes:any[] = filterNodes();
  drawNodes(nodes);
  let selectedNode:any = getRandomNode(nodes);
  console.error('selectedNode', selectedNode);
  backgroundCtx.fillStyle="green";
  backgroundCtx.fillRect(selectedNode.x, selectedNode.y, gridSize, gridSize);
}
