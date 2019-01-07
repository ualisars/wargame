import {
    MAP_WIDTH,
    CANVAS_HEIGHT
  } from '..';
  
  export const loadingCanvas:any = document.getElementById('loadingCanvas');
  
  if(loadingCanvas) {
    loadingCanvas.width = MAP_WIDTH;
    loadingCanvas.height = CANVAS_HEIGHT;
  }