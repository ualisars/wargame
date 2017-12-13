import {
  auxiliaryCanvas,
  backgroundCanvas,
  canvas,
  terrain
} from '../canvas';

// define 2d context
export const ctx = canvas.getContext("2d");
export const auxiliaryCtx  = auxiliaryCanvas.getContext('2d');
export const backgroundCtx  = backgroundCanvas.getContext('2d');
export const terrainCtx  = terrain.getContext('2d');
