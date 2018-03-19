import {
  WIDTH,
  HEIGHT
} from '../../config';

export const canvas:any = document.getElementById('canvas');

if(canvas) {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.border = "1px solid";
}
