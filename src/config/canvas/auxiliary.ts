import {
  MAP_WIDTH,
  CANVAS_HEIGHT
} from '..';

export const auxiliaryCanvas:any = document.getElementById('auxiliary');

if(auxiliaryCanvas) {
  auxiliaryCanvas.width = MAP_WIDTH;
  auxiliaryCanvas.height = CANVAS_HEIGHT;
}
