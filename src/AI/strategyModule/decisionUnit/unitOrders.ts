import {
  computerUnits,
  playerUnits
} from '../../../store/unit/units';
import {pursueUnit} from '../../../unit';
import {getClosestEnemyToUnit} from '../../../utils/unit/AI';
import {
  getNodeFromMap
} from '../../../utils';
import {aStar} from '../../../path';
import {initialMap} from '../../../map/createMap/initialMap';
import {neutralExploration} from '../../../unit/movement/computer/exploration/explorationMoves';
import {advance} from '../../../unit/movement/computer/advance/advance';
import{fight} from '../../../unit/movement/computer/fight/fightStage';
import {combatStage} from '../../../store/AI/stage/combatStage';

export const orderToAttackEnemy = () => {
  if(playerUnits.length !== 0 && computerUnits.length !== 0) {
    for(let unit of computerUnits) {
      if(!unit.unitToPursue && !unit.isFighting) {
        console.error('orderToAttackEnemy');
        let enemy = getClosestEnemyToUnit(unit);
        let startNode = getNodeFromMap(unit.x, unit.y);
        let finishNode = getNodeFromMap(enemy.x, enemy.y);
        let path:any = aStar(initialMap, startNode, finishNode);
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
