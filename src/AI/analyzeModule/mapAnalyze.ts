import NodeStore from '../../store/AI/nodeStore';
import {ctx} from '../../map/mapConfig';
import {gridSize} from '../../config';
import {map} from '../../map/createMap';
import {getClosestNodeToUnit} from '../actions/unitActions';
import {
  getMinValueFromNodes,
  getMaxValueFromNodes,
  getNodeFromMap,
  getDistanceBetweenUnitAndNodeInGrids
} from '../../utils/';
import {
  computerUnits,
  visibleForComputerUnits
} from '../../store/unitStore';
import {hidedEmenies} from '../setUpAI';
// create instances of AI map stores
export let computerControlNodes = new NodeStore();
export let playerControlNodes = new NodeStore();
export let possiblePlayerControlNodes = new NodeStore();
export let neutralNodes = new NodeStore();
export let neutralNodesPriorityToExpolore = new NodeStore();
export let notExploredNodes = new NodeStore();

/*
  add visible for computer nodes into computerControlNodes
  if players' unit is spotted add its nodes into playerControlNodes
  nodes where players units were visible last time add to possiblePlayerControlNodes
  not spotted nodes add to neutralNodes
  neutralNodes divided into nodes with priority to explore
  nodes that both visible for player and computer goes to fightingNodes
*/
export const analyzeMap = () => {
  return new Promise(resolve => {
    clearComputerControlNodes().
    then(() => fillComputerControlNodes())
    .then(() => console.error('farthestNodes', getFarthestXNodes(computerControlNodes.store)))
    clearPlayerControlNodes()
    .then(() => fillPlayerControlNodes())
    resolve();
  });
}

/*
  loop throught all computer units, and add all
  visible for computer nodes to computerControlNodes
*/
export const fillComputerControlNodes = () => {
  return new Promise(resolve => {
    for(let unit of computerUnits) {
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
    //console.error('computerControlNodes', computerControlNodes.store);
    resolve();
  });
}

export const clearComputerControlNodes = () => {
  return new Promise(resolve => {
    computerControlNodes.clearStore();
    resolve();
  });
}

export const clearPlayerControlNodes = () => {
  return new Promise(resolve => {
    playerControlNodes.clearStore();
    resolve();
  })
}

export const fillPlayerControlNodes = () => {
  for(let unit of visibleForComputerUnits) {
    let startX = unit.currentNode.x - (unit.visibility * gridSize);
    let finishX = unit.currentNode.x + (unit.visibility * gridSize);
    let startY = unit.currentNode.y - (unit.visibility * gridSize);
    let finishY = unit.currentNode.y + (unit.visibility * gridSize);
    for(let x = startX; x <= finishX; x += gridSize) {
      for(let y = startY; y <= finishY; y += gridSize) {
        let node = getNodeFromMap(x, y, map);
        playerControlNodes.addNodeToStore(node);
      }
    }
  }
  //console.error('playerControlNodes', playerControlNodes.store);
}

export const displayComputerControlNodes = () => {
  for(let node of computerControlNodes.store) {
    ctx.fillStyle = '#b1c1d1';
    ctx.fillRect(node.x, node.y, gridSize, gridSize);
  }
}

/*
  get fathestNodes of the area
  by the x ordinate
*/
export const getFarthestXNodes = (nodes:any[]):any[] => {
  let farthestNodes:any[] = [];
  let minValue = getMinValueFromNodes('x', nodes);
  let maxValue = getMaxValueFromNodes('x', nodes);
  for(let node of nodes) {
    if(node.x === minValue || node.x === maxValue) {
      farthestNodes.push(node);
    }
  }
  return farthestNodes;
}

export const getClosestToEnemySideNodes = (nodes:any):any[] => {
  let closestNodes:any[] = [];
  let minValue = getMinValueFromNodes('x', nodes);
  for(let node of nodes) {
    if(node.x === minValue) { // min x is closer to enemy(player) side
      closestNodes.push(node);
    }
  }
  return closestNodes;
}

/*
  get closest node to enemy side or
  hided enemies, these nodes are
  prioritize for exploration
*/
export const getClosestToEnemyNodes = (nodes:any[]):any[] => {
  let closestNodes:any[] = [];
  if(hidedEmenies.store.length === 0) { // no units are spotted
    closestNodes = getClosestToEnemySideNodes(nodes); // get nodes that close to enemy side
  } else {
    for(let hidedEnemy of hidedEmenies.store) { // there are hided enemy
      let closestNode = getClosestNodeToUnit(hidedEnemy, nodes);
      closestNodes.push(closestNode); // add closestNode into nodes array
    }
  }
  return closestNodes;
}

export const getFarthestNodeFromEnemy = (enemy:any, nodes:any[]):any => {
  let farthestNode:any = nodes[0];
  for(let i = 0; i < nodes.length; ++i) {
    let farthestNodeDistance = getDistanceBetweenUnitAndNodeInGrids(enemy, farthestNode);
    let nodeDistance = getDistanceBetweenUnitAndNodeInGrids(enemy, nodes[i]);
    if(nodeDistance > farthestNodeDistance) {
      farthestNode = nodes[i];
    }
  }
  return farthestNode;
}
