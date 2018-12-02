import {
  CANVAS_HEIGHT,
  MAP_WIDTH
} from '..';

export const canvas:any = document.getElementById('canvas');

if(canvas) {
  canvas.width = MAP_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  canvas.style.border = "1px solid";
}
