import {computersUnits} from '../../../store/unitStore';
import {getUnitsByTask} from '../../actions/unitActions';
import {computerControlNodes} from '../../analyzeModule/mapAnalyze';

export const neutralExploration = () => {

}

/*
  Movements that scout units should be
  in exploration stage
*/
export const scoutsMovement = () => {
  const scouts = getUnitsByTask('exploration'); // get scouts from computersUnits

}
