import {
  MAP_HEIGHT,
  MAP_WIDTH
} from '..';

export const backgroundCanvas:any = document.getElementById('background');

if(backgroundCanvas) {
  backgroundCanvas.width = MAP_WIDTH;
  backgroundCanvas.height = MAP_HEIGHT;
}
