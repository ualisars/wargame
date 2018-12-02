import {
  MAP_HEIGHT,
  MAP_WIDTH
} from '..';

export const auxiliaryCanvas:any = document.getElementById('auxiliary');

if(auxiliaryCanvas) {
  auxiliaryCanvas.width = MAP_WIDTH;
  auxiliaryCanvas.height = MAP_HEIGHT;
}
