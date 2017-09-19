// global variables
export const WIDTH: number = 1200;
export const HEIGHT: number = 600;
export const gridSize:number = 40;

// create Canvas
export const canvas:any = document.getElementById('canvas');
export const auxiliaryCanvas:any = document.getElementById('auxiliary');

canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = "1px solid";

auxiliaryCanvas.width = WIDTH;
auxiliaryCanvas.height = HEIGHT;

// define 2d context
export const ctx = canvas.getContext("2d");
export const auxiliaryCtx  = auxiliaryCanvas.getContext('2d')
