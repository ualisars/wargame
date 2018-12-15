import { ctx } from '../../config/context';
import { loadImage } from '../../utils';
import { Unit } from '../types';
import { gridSize } from '../../config';
import { swordIconImage } from '../../store/images/unitIconImages';
import { currentlyChosenUnit } from '../../store/unit/currentlyChosenUnit';
import { playerUnits } from '../../store/unit/units';

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
    if(currentlyChosenUnit && currentlyChosenUnit.id === unit.id) {
      ctx.beginPath();
      ctx.arc(unit.centerX, unit.centerY, unit.radius, 0, Math.PI*2);
      ctx.fillStyle = "#a79ebf";
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    
      ctx.beginPath();
      ctx.arc(unit.centerX, unit.centerY, unit.radius - 4, 0, Math.PI*2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
      ctx.restore();
      let offset = 8;
      let x = unit.x + offset;
      let y =  unit.y + offset;
      let radius = (unit.radius * 2) - offset
      ctx.drawImage(swordIconImage, x, y, radius, radius);
    } else {
      ctx.beginPath();
      ctx.arc(unit.centerX, unit.centerY, unit.radius, 0, Math.PI*2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
      ctx.restore();
      let offset = 8;
      let x = unit.x + offset;
      let y =  unit.y + offset;
      let radius = (unit.radius * 2) - offset
      ctx.drawImage(swordIconImage, x, y, radius, radius);
    }
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

export const redrawPlayerUnits = () => {
  redrawUnits(playerUnits);
}
