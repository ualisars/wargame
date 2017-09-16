import {
  canvas,
  ctx,
  WIDTH,
  HEIGHT,
  gridSize
} from './mapConfig';

export const drawGrid = () => {
  for(let y = 0; y <= HEIGHT; y+= gridSize) {
    for(let x = 0; x <= WIDTH; x+= gridSize) {
      ctx.strokeRect(x, y, gridSize, gridSize);
    }
  }
}
