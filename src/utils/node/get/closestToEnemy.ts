import {
  getMinValueFromNodes
} from '../../index';
import {getClosestNodeToUnit} from '../../unit/actions';
import {hidingEnemies} from '../../../store/AI/hidingEnemies';;

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
  if(hidingEnemies.length === 0) { // no units are spotted
    closestNodes = getClosestToEnemySideNodes(nodes); // get nodes that close to enemy side
  } else {
    for(let hidingEnemy of hidingEnemies) { // there are hided enemy
      let closestNode = getClosestNodeToUnit(hidingEnemy, nodes);
      closestNodes.push(closestNode); // add closestNode into nodes array
    }
  }
  return closestNodes;
}
