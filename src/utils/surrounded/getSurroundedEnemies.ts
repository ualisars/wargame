import {
  playerUnits,
  computerUnits
} from '../../store/unit/units';
import {getSurroundedNodes} from '../index';
import {deleteUnitFromArray} from '../unit/general';
import Unit from '../../unit/types/Unit';

export const getSurroundedEnemies = (unit:Unit, range:number = 1):Unit[] => {
  let surroundedEnemies:Unit[] = [];
  let enemies:Unit[] = [];
  if(unit.controlBy === 'computer') {
    enemies = Object.assign([], playerUnits);
  } else {
    enemies = Object.assign([], computerUnits);
  }

  let nodes = getSurroundedNodes(unit, range);
  for(let node of nodes) {
    for(let enemy of enemies) {
      if(node.x === enemy.x && node.y === enemy.y) {
        surroundedEnemies.push(enemy);
      }
    }
  }
  return surroundedEnemies;
}
