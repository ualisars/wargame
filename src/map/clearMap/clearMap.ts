import {ctx} from '../../config/context';
import {
  WIDTH,
  HEIGHT
} from '../../config';

export const clearMap = () => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
