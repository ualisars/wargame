import {
  canvas,
  ctx
} from '../../map';
import {
  WIDTH,
  HEIGHT,
  gridSize
} from '../../config';
import {map} from '../../map/createMap';

export const drawPath = (path:any[]) => {
  for(let step of path) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(step.x, step.y, gridSize, gridSize);
  }
}
