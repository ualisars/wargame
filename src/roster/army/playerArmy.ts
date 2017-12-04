import {
  playerArmy
} from '../../GUI/mainMenu/units';
import {getRandomNode} from '../../AI/actions/mapActions';
import {
  playerUnitsNodes
} from '../index';
import {createUnit} from '../../unit';

export const createPlayerArmy = () => {
  return new Promise(resolve => {
    for(let unit of playerArmy) {
      console.log('playerArmy', playerArmy);
      console.log('createPlayerArmy', unit);
      let node = getRandomNode(playerUnitsNodes);
      console.log('createPlayerArmy randomNode', node);
      let type = unit.name;
      let x = node.x;
      let y = node.y;
      console.log('createPlayerArmy type', type);
      console.log('createPlayerArmy x', x);
      console.log('createPlayerArmy y', y);
      createUnit(type, x, y, 15, 'player');
      //deleteNodeFromPlayerNodes(node);
    }
    resolve();
  })
}
