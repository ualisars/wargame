import {
  computerArmy
} from '../../../store/roster/army';
import {deleteNodeFromComputerNodes} from '../index';
import {getRandomNode} from '../../../utils/node';
import {computerUnitsNodes} from '../nodes/computerNodes';
import {createUnit} from '../../../unit';

export const createComputerArmy = () => {
    for(let unit of computerArmy) {
      let node = getRandomNode(computerUnitsNodes);
      let type = unit.name;
      let x = node.x;
      let y = node.y;
      createUnit(type, x, y, 'computer');
      deleteNodeFromComputerNodes(node);
    }
}
