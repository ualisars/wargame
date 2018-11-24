import { ctx } from '../../config/context';
import { loadImage } from '../../utils';
import { Unit } from '../types';
import { gridSize } from '../../config';

export const drawUnitImage = (x:number, y:number, width:number, height:number, src:string) => {
  loadImage(src, (err:any, img:any) => {
    ctx.drawImage(img, x, y, width, height);
  });
}

export const drawUnit = (unit: Unit) => {
  let color;
  if(unit.controlBy === 'player') {
    color = '#dbdb0d';
  }
  else if(unit.controlBy === 'computer') {
    color = '#d30c0c';
    if(!unit.isVisible) {
      return;
    }
  }
  if(ctx) {
    ctx.beginPath();
    ctx.arc(unit.centerX, unit.centerY, unit.radius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}

export const clearUnitImage = (unit: Unit) => {
  if(ctx) {
    ctx.clearRect(unit.x, unit.y, gridSize, gridSize);
  }
} 

export const redrawUnits = (units: Unit[]) => {
  for(let unit of units) {
    if(unit.isMoving !== true) {
      drawUnit(unit);
    }
  }
}
