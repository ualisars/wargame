import {
  playerArmy
} from '../../../store/roster/army';
import {deleteNodeFromPlayerNodes} from '..';
import {getRandomNode} from '../../../utils/node';
import {
  playerUnitsNodes
} from '../nodes/playerNodes';
import {createUnit} from '../../../unit';

export const createPlayerArmy = () => {
  return new Promise(resolve => {
    for(let unit of playerArmy) {
      let node = getRandomNode(playerUnitsNodes);
      let type = unit.name;
      let x = node.x;
      let y = node.y;
      createUnit(type, x, y, 'player');
      deleteNodeFromPlayerNodes(node);
    }
    resolve();
  })
}
