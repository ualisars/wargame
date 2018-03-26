import {canvas} from '../../config/canvas';
import {ctx} from '../../config/context';
import {
  WIDTH,
  HEIGHT,
  gridSize
} from '../../config';

export const drawPath = (path:any[]) => {
  for(let step of path) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(step.x, step.y, gridSize, gridSize);
  }
}
