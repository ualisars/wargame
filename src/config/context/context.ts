import {
  auxiliaryCanvas,
  backgroundCanvas,
  dragAndDropCanvas,
  canvas,
  mainMenu,
  terrain
} from '../canvas';

// define 2d context
export const ctx = canvas.getContext("2d");
export const auxiliaryCtx  = auxiliaryCanvas.getContext('2d');
export const backgroundCtx  = backgroundCanvas.getContext('2d');
export const terrainCtx  = terrain.getContext('2d');
export const mainMenuCtx = mainMenu.getContext('2d');
export const dragAndDropCanvasCtx = dragAndDropCanvas.getContext('2d');
