import {
  computerUnits,
  playerUnits
} from '../../store/unit/units';
import {pursueUnit} from '../../unit';
import {getClosestEnemyToUnit} from '../../utils/unit/actions';
import {
  getNodeFromMap
} from '../../utils';
import {aStar} from '../../path';
import {map} from '../../map/createMap';
import {neutralExploration} from '../behaviour/neutral/exploration';
import {advance} from '../behaviour/neutral/advanceStage/advance';
import{fight} from '../behaviour/neutral/fightStage/fightStage';
import {combatStage} from '../../store/AI/combatStage';

export const orderToAttackEnemy = () => {
  if(playerUnits.length !== 0 && computerUnits.length !== 0) {
    for(let unit of computerUnits) {
      if(!unit.unitToPursue && !unit.isFighting) {
        console.error('orderToAttackEnemy');
        let enemy = getClosestEnemyToUnit(unit);
        let startNode = getNodeFromMap(unit.x, unit.y, map);
        let finishNode = getNodeFromMap(enemy.x, enemy.y, map);
        let path:any = aStar(map, startNode, finishNode);
        unit.setUnitToPursue(enemy);
        pursueUnit(unit, enemy, enemy.currentNode.x, enemy.currentNode.y, 0, path, true);
      }
    }
  }
}

export const AIMovement = () => {
  for(let unit of computerUnits) {
    unit.setIsMovingToFalse();
  }

  if(combatStage === 'exploration') {
      explorationStage();
  }
  else if(combatStage === 'advance') {
      //advanceStage();
      orderToAttackEnemy();
  }
  else {
      //fight();
      orderToAttackEnemy();
  }
}

export const explorationStage = () => {
  let behaviour = 'neutral';
  if(behaviour === 'neutral') {
    neutralExploration();
  }
}

export const advanceStage = () => {
  let behaviour = 'neutral';
  if(behaviour === 'neutral') {
    neutralExploration();
  }
}
