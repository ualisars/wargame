import {WIDTH, HEIGHT} from '../config';
// create Canvas
export const backgroundCanvas:any = document.getElementById('background');
export const canvas:any = document.getElementById('canvas');
export const auxiliaryCanvas:any = document.getElementById('auxiliary');
export const terrain:any = document.getElementById('terrain');

canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = "1px solid";

auxiliaryCanvas.width = WIDTH;
auxiliaryCanvas.height = HEIGHT;

backgroundCanvas.width = WIDTH;
backgroundCanvas.height = HEIGHT;

terrain.width = WIDTH;
terrain.height = HEIGHT;

// define 2d context
export const ctx = canvas.getContext("2d");
export const auxiliaryCtx  = auxiliaryCanvas.getContext('2d');
export const backgroundCtx  = backgroundCanvas.getContext('2d');
export const terrainCtx  = terrain.getContext('2d');
