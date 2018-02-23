import {getUnitsByTask} from '../../utils/unit/actions';
import {occupyControlZone} from './occupyControlZone';

export const defenderMovement = () => {
  let defenders:any[] = getUnitsByTask('holdPosition');
  for(let defender of defenders) {
    occupyControlZone(defender);
  }
}
