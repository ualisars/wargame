import {getUnitsByTask} from '../../utils/unit/actions';
import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
import {controlZone} from '../processModule/controlZone/controlZone';


export const getEnemiesInsideZone = ():any[] => {
  let enemiesInsideZone:any[] = [];
  for(let enemy of playerUnits) {
    for(let node of controlZone) {
      if(enemy.currentNode.x === node.x && enemy.currentNode.y === node.y) {
        enemiesInsideZone.push(enemy);
      }
    }
  }
  return enemiesInsideZone;
}

// export const defenderMovement = () => {
//     if()
// }
