import {
  computerArmy
} from '../../GUI/mainMenu/units';
import {getRandomNode} from '../../AI/actions/mapActions';
import {computerUnitsNodes} from '../index';
import {createUnit} from '../../unit';

export const createComputerArmy = () => {
    console.log('computerArmy', computerArmy);
    for(let unit of computerArmy) {
      console.log('createComputerArmy', unit);
      let node = getRandomNode(computerUnitsNodes);
      console.log('createComputerArmy randomNode', node);
      let type = unit.name;
      let x = node.x;
      let y = node.y;
      console.log('createComputerArmy type', type);
      console.log('createComputerArmy x', x);
      console.log('createComputerArmy y', y);
      createUnit(type, x, y, 15, 'computer');
      //deleteNodeFromComputerNodes(node);
    }
}
