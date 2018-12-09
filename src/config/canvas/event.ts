import {
    MAP_WIDTH,
    CANVAS_HEIGHT
} from '..';
  
export const eventCanvas:any = document.getElementById('eventCanvas');

if(eventCanvas) {
    eventCanvas.width = MAP_WIDTH;
    eventCanvas.height = CANVAS_HEIGHT;
}