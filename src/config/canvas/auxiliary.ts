import {
  WIDTH,
  HEIGHT
} from '..';

export const auxiliaryCanvas:any = document.getElementById('auxiliary');

if(auxiliaryCanvas) {
  auxiliaryCanvas.width = WIDTH;
  auxiliaryCanvas.height = HEIGHT;
}
