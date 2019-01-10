import { ctx } from '../../config/context';
import { Unit } from '../types';
import { gridSize } from '../../config';
import { currentlyChosenUnit } from '../../store/unit/currentlyChosenUnit';
import { playerUnits } from '../../store/unit/units';
import { unitToIconMap } from '../../store/images/unitToIconMap';

export const drawUnit = (unit: Unit) => {
  let color;
  let radiusOffset = 0;
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
      radiusOffset = 2;
    } 
    let offsetX = 2;
    let offsetY = 2;
    ctx.beginPath();
    ctx.arc(unit.centerX, unit.centerY, unit.radius - radiusOffset, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    let offset = 8;
    let x = unit.x + offset;
    let y =  unit.y + offset;
    let radius = (unit.radius * 2) - offset;
    ctx.drawImage(unitToIconMap[unit.name], x + offsetX, y + offsetY, radius, radius);
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
