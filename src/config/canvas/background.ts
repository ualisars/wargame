import {
  WIDTH,
  HEIGHT
} from '..';

export const backgroundCanvas:any = document.getElementById('background');

if(backgroundCanvas) {
  backgroundCanvas.width = WIDTH;
  backgroundCanvas.height = HEIGHT;
}
