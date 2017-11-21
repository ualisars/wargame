import {
  computersUnits,
  playersUnits
} from '../../store/unitStore';
import {pursueUnit} from '../../unit/unitMovement';
import {getClosestEnemyToUnit} from '../actions/unitActions';
import {
  getNodeFromMap
} from '../../path/drawPath';
import {aStar} from '../../path/AStar';
import {map} from '../../map/createMap';
import {neutralExploration} from '../behaviour/neutral/exploration';
import {advance} from '../behaviour/neutral/advanceStage/advance';
import{fight} from '../behaviour/neutral/fightStage/fightStage';
import {combatStage} from '../store/global';

export const orderToAttackEnemy = () => {
  if(playersUnits.length !== 0 && computersUnits.length !== 0) {
    for(let unit of computersUnits) {
      if(!unit.unitToPursue && !unit.isFighting) {
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
  for(let unit of computersUnits) {
    unit.setIsMovingToFalse();
  }

  if(combatStage === 'exploration') {
      explorationStage();
  }
  else if(combatStage === 'advance') {
      advanceStage();
  }
  else {
      fight();
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
