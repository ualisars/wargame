import {
  auxiliaryCanvas,
  backgroundCanvas,
  dragAndDropCanvas,
  canvas,
  mainMenu,
  terrain
} from '../canvas';
import { pathCanvas } from '../canvas/path';
import { eventCanvas } from '../canvas/event';
import { loadingCanvas } from '../canvas/loading';

// define 2d context
export let ctx:any;
export let auxiliaryCtx:any;
export let backgroundCtx:any;
export let terrainCtx:any;
export let mainMenuCtx:any;
export let dragAndDropCanvasCtx:any;
export let pathCtx: any;
export let eventCtx: any;
export let loadingCtx: any;

if(canvas) {
  ctx = canvas.getContext("2d");
}
if(auxiliaryCanvas) {
  auxiliaryCtx  = auxiliaryCanvas.getContext('2d');
}
if(terrain) {
  terrainCtx = terrain.getContext('2d');
}
if(backgroundCanvas) {
  backgroundCtx  = backgroundCanvas.getContext('2d');
}
if(mainMenu) {
  mainMenuCtx = mainMenu.getContext('2d');
}
if(dragAndDropCanvas) {
  dragAndDropCanvasCtx = dragAndDropCanvas.getContext('2d');
}
if(pathCanvas) {
  pathCtx = pathCanvas.getContext('2d');
}
if(eventCanvas) {
  eventCtx = eventCanvas.getContext('2d');
}
if(loadingCanvas) {
  loadingCtx = loadingCanvas.getContext('2d');
}
