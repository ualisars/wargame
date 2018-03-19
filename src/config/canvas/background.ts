import {
  WIDTH,
  HEIGHT
} from '../../config';

export const backgroundCanvas:any = document.getElementById('background');

if(backgroundCanvas) {
  backgroundCanvas.width = WIDTH;
  backgroundCanvas.height = HEIGHT;
}
