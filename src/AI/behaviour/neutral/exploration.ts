import {pursueUnit} from '../../../unit/unitMovement';
import {
  getNodeFromMap
} from '../../../path/drawPath';
import {aStar} from '../../../path/AStar';
import {map} from '../../../map/createMap';

import {computersUnits} from '../../../store/unitStore';
import {
  getUnitsByTask,
  getNotFightingUnits,
  getBestUnitByProperty,
  getClosestUnitToOtherUnit
} from '../../actions/unitActions';
import {
  computerControlNodes,
  getClosestToEnemyNodes
} from '../../analyzeModule/mapAnalyze';

export const neutralExploration = () => {

}

/*
  Movements that scout units should be
  in exploration stage
*/
export const scoutsMovement = () => {
  const scouts = getUnitsByTask('exploration'); // get scouts from computersUnits

}

export const backDown = () => {

}
