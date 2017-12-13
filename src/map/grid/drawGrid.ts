import {canvas} from '../../config/canvas';
import {ctx} from '../../config/context';
import {
  WIDTH,
  HEIGHT,
  gridSize
} from '../../config';

export const drawGrid = () => {
  for(let y = 0; y <= HEIGHT; y+= gridSize) {
    for(let x = 0; x <= WIDTH; x+= gridSize) {
      ctx.strokeRect(x, y, gridSize, gridSize);
    }
  }
}
