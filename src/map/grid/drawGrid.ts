import {canvas} from '../../config/canvas';
import {ctx} from '../../config/context';
import {
  MAP_WIDTH,
  MAP_HEIGHT,
  gridSize
} from '../../config';

export const drawGrid = () => {
  for(let y = 0; y <= MAP_HEIGHT; y+= gridSize) {
    for(let x = 0; x <= MAP_WIDTH; x+= gridSize) {
      ctx.strokeRect(x, y, gridSize, gridSize);
    }
  }
}
