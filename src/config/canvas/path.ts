import {
  MAP_WIDTH,
  CANVAS_HEIGHT
} from '..';
  
export const pathCanvas:any = document.getElementById('pathCanvas');

if(pathCanvas) {
  pathCanvas.width = MAP_WIDTH;
  pathCanvas.height = CANVAS_HEIGHT;
}