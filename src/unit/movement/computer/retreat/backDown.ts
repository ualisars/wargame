import {moveTo} from '../../common';
import {
  getFarthestNodeFromEnemy
} from '../../../../utils/node/get';
import {getProtector} from '../../../../utils/unit/protector';
import {getSurroundedNodes} from '../../../../utils/surrounded';
import {getRandomNode} from '../../../../utils/node';
import Unit from '../../../../unit/types/Unit';

export const backDown = (unit:Unit, enemy:Unit, nodes:any[]) => {
  if(unit.isUnitUnderProtection) { // unit has a protector
    // approach to a protector
    let protector = getProtector(unit);
    let protectorSurroundedNodes = getSurroundedNodes(unit, 2);
    let randomNode = getRandomNode(protectorSurroundedNodes);
    moveTo(unit, randomNode.x, randomNode.y);
  } else {
    let farthestNode = getFarthestNodeFromEnemy(enemy, nodes);
    moveTo(unit, farthestNode.x, farthestNode.y);
  }
}
