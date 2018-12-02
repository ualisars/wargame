import {ctx} from '../../config/context';
import {
  MAP_WIDTH,
  CANVAS_HEIGHT
} from '../../config';

export const clearMap = () => {
  ctx.clearRect(0, 0, MAP_WIDTH, CANVAS_HEIGHT);
}
