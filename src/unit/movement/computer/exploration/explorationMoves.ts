import {
  getDistanceBetweenTwoUnitsInGrids,
} from '../../../../utils';

import {
  getUnitsByTask,
  getClosestEnemyToUnit,
} from '../../../../utils/unit/AI';

import {computerControlNodes} from '../../../../AI/analyzeModule/mapAnalyze';

import {backDown} from '../retreat/backDown';
import {explore} from './explore';

export const neutralExploration = () => {
  scoutsMovement();
}

/*
  Movements that scout units should be
  in exploration stage
*/
export const scoutsMovement = () => {
  const scouts = getUnitsByTask('exploration'); // get scouts from computersUnits
  for(let unit of scouts) {
    let closestEnemy = getClosestEnemyToUnit(unit);
    let distanceToClosestEnemy = getDistanceBetweenTwoUnitsInGrids(unit, closestEnemy);
    if(distanceToClosestEnemy >= 8) {
      explore(unit);
    } else {
      backDown(unit, closestEnemy, computerControlNodes.store);
    }
  }
}
