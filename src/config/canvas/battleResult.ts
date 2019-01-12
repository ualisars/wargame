import {
    MAP_HEIGHT,
    MAP_WIDTH
  } from '..';
  
  export const battleResultCanvas:any = document.getElementById('battleResultCanvas');
  
  if(battleResultCanvas) {
    battleResultCanvas.width = MAP_WIDTH;
    battleResultCanvas.height = MAP_HEIGHT;
  }