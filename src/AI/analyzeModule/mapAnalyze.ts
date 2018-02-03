import NodeStore from '../../store/AI/nodeStore';
import {gridSize} from '../../config/map/gridSize';
import {map} from '../../map/createMap';
import {getClosestNodeToUnit} from '../../utils/unit/actions';
import {getFarthestXNodes} from '../../utils/node/get';
import {getNodeFromMap} from '../../utils/node';
import {computerUnits} from '../../store/unit/units';
import {visibleForComputerUnits} from '../../store/unit/visibleUnits';
// create instances of AI map stores
export let computerControlNodes = new NodeStore();
export let playerControlNodes = new NodeStore();
export let frontNodes = new NodeStore();
export let explorationNodes = new NodeStore();

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
    clearExplorationNodes()
    .then(() => fillExplorationNodes());
    console.log('explorationNodes', explorationNodes.store);
    console.log('computerControlNodes', computerControlNodes.store);
    console.log('playerControlNodes', playerControlNodes.store);
    console.log('visibleForComputerUnits', visibleForComputerUnits);
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

export const fillExplorationNodes = () => {
  for(let node of map) {
    let addNode:boolean = false;
    for(let computerNode of computerControlNodes.store) {
        for(let playerNode of playerControlNodes.store) {
          if(node.x !== computerNode.x && node.y !== computerNode.y) {
            if(node.x !== playerNode.x && node.y !== playerNode.y) {
              // node is not inside computer and player control node
              addNode = true;
            }
          }
        }
    }
    if(addNode) {
      explorationNodes.addNodeToStore(node);
    }
  }
}

export const clearExplorationNodes = () => {
  return new Promise(resolve => {
    explorationNodes.clearStore();
    resolve();
  })
}
