import {controlZone} from '../processModule/controlZone/controlZone';
import {computerUnits} from '../../store/unit/units';
import {getRandomNode} from '../../utils/node/random';
import {aStar} from '../../path';
import {map} from '../../map/createMap';
import {
  updateUnit,
  assignUnitMoveToPosition
} from '../../unit';
import {getNodeFromMap} from '../../utils';
import {getUnitsByTask} from '../../utils/unit/actions';
import Unit from '../../unit/types/Unit';
import {moveTo} from '../../unit/movement';

export const occupyControlZone = () => {
  let defenders:any[] = getUnitsByTask('holdPosition');
  for(let defender of defenders) {
    occupyNodeInControlZone(defender);
  }
}

export const occupyNodeInControlZone = (unit:Unit) => {
  let node:any = getRandomNode(controlZone); // get randon node from controlZone
  moveTo(unit, node.x, node.y);
}
