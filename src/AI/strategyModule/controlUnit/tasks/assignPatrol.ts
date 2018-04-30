import {computerUnits} from '../../../../store/unit/units';

/*
  All units no assigned to be scouts
  have to patrol if they have enough speed
*/
export const assignPatrol = () => {
  let updatedComputersUnits = Object.assign([], computerUnits);
  for(let unit of updatedComputersUnits) {
    if(unit.task !== 'exploration' && unit.type !== 'skirmishers' && unit.speed >= 20) {
      unit.assignTask('patrol');
    }
  }
}
