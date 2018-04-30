import {computerUnits} from '../../../../store/unit/units';
import {getUnitsByTask} from '../../../../utils/unit/AI';
import {deleteUnitFromArray} from '../../../../utils';

export const assignHoldPosition = () => {
  for(let unit of computerUnits) {
    if(unit.task !== 'exploration' && unit.task !== 'patrol') {
      unit.assignTask('holdPosition');
    }
  }
}
