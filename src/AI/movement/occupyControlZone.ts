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

export const defenderMovement = () => {
  let defenders:any[] = getUnitsByTask('holdPosition');
  for(let defender of defenders) {
    occupyControlZone(defender);
  }
}

export const occupyControlZone = (unit:any) => {
  let node:any = getRandomNode(controlZone); // get randon node from controlZone
  let startNode = getNodeFromMap(unit.x, unit.y, map);
  let finishNode = getNodeFromMap(node.x, node.y, map);
  let path:any = aStar(map, startNode, finishNode);
  if(unit.isMoving) {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
  } else {
    assignUnitMoveToPosition(unit, finishNode.x, finishNode.y);
    updateUnit(unit,path, 0, finishNode.x, finishNode.y, null, true);
  }
}
