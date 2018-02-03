import {computerControlNodes} from '../mapAnalyze';
import {gridSize} from '../../../config';
import {ctx} from '../../../config/context';


export const displayComputerControlNodes = () => {
  for(let node of computerControlNodes.store) {
    ctx.fillStyle = '#b1c1d1';
    ctx.fillRect(node.x, node.y, gridSize, gridSize);
  }
}
