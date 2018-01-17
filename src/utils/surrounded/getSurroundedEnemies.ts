import {
  playerUnits,
  computerUnits
} from '../../store/unit/units';
import {getSurroundedNodes} from '../index';

export const getSurroundedEnemies = (unit:any):any[] => {
  let surroundedEnemies:any[] = [];
  let enemies:any[] = [];
  if(unit.controlBy === 'computer') {
    enemies = playerUnits;
  } else {
    enemies = computerUnits;
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
