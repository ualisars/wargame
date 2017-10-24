import NodeStore from '../store/AIMapStore/NodeStore';
import {gridSize, ctx} from '../../map/mapConfig';
import {map} from '../../map/createMap';
import {getNodeFromMap} from '../../path/drawPath';
import {
  computersUnits,
  visibleForComputerUnits
} from '../../store/unitStore';
// create instances of AI map stores
let computerControlNodes = new NodeStore();
let playerControlNodes = new NodeStore();
let possiblePlayerControlNodes = new NodeStore();
let neutralNodes = new NodeStore();
let neutralNodesPriorityToExpolore = new NodeStore();
let fightingNodes = new NodeStore();

/*
  add visible for computer nodes into computerControlNodes
  if players' unit is spotted add its nodes into playerControlNodes
  nodes where players units were visible last time add to possiblePlayerControlNodes
  not spotted nodes add to neutralNodes
  neutralNodes divided into nodes with priority to explore
  nodes that both visible for player and computer goes to fightingNodes
*/
export const analyzeMap = () => {
  clearComputerControlNodes().
  then(() => fillComputerControlNodes())
}

/*
  loop throught all computer units, and add all
  visible for computer nodes to computerControlNodes
*/
export const fillComputerControlNodes = () => {
  return new Promise(resolve => {
    for(let unit of computersUnits) {
      let startX = unit.currentNode.x - (unit.visibility * gridSize);
      let finishX = unit.currentNode.x + (unit.visibility * gridSize);
      let startY = unit.currentNode.y - (unit.visibility * gridSize);
      let finishY = unit.currentNode.y + (unit.visibility * gridSize);
      for(let x = startX; x <= finishX; x += gridSize) {
        for(let y = startY; y <= finishY; y += gridSize) {
          let node = getNodeFromMap(x, y, map);
          computerControlNodes.addNodeToStore(node);
        }
      }
    }
    console.error('computerControlNodes', computerControlNodes.store);
    resolve();
  });
}

export const clearComputerControlNodes = () => {
  return new Promise(resolve => {
    computerControlNodes.clearStore();
    resolve();
  });
}

export const displayComputerControlNodes = () => {
  for(let node of computerControlNodes.store) {
    ctx.fillStyle = '#b1c1d1';
    ctx.fillRect(node.x, node.y, gridSize, gridSize);
  }
}
