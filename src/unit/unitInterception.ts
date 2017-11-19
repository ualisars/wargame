import {
  playersUnits,
  computersUnits
} from '../store/unitStore';
import {gridSize} from '../map/mapSettings';
import {map} from '../map/createMap';
import {getNodeFromMap} from '../path/drawPath';

/*
  return nodes that surround unit in some distance
*/
export const getSurroundedNodes = (unit:any, distance:number):any[] => {
  //console.log('getSurroundedNodes');
  let nodes:any[] = [];
  let startX = unit.currentNode.x - (distance * gridSize);
  let finishX = unit.currentNode.x + (distance * gridSize);
  let startY = unit.currentNode.y - (distance * gridSize);
  let finishY = unit.currentNode.y + (distance * gridSize);
  for(let y = startY; y <= finishY; y += gridSize) {
    for(let x = startX; x <= finishX; x += gridSize) {
      // console.log('unit x:', unit.currentNode.x, 'y:', unit.currentNode.y);
      // console.log('x:', x, 'y:', y);
      let node = getNodeFromMap(x, y, map);
      //console.log('node:', node);
      if(node) {
          nodes.push(node);
      }
    }
  }
  return nodes;
}

export const getSurroundedEnemies = (unit:any):any[] => {
  let surroundedEnemies:any[] = [];
  let enemies:any[] = [];
  if(unit.controlBy === 'computer') {
    enemies = playersUnits;
  } else {
    enemies = computersUnits;
  }
  let nodes = getSurroundedNodes(unit, 1);
  for(let node of nodes) {
    for(let enemy of enemies) {
      if(node.x === enemy.x && node.y === enemy.y) {
        surroundedEnemies.push(enemy);
      }
    }
  }
  return surroundedEnemies;
}
