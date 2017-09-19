import {gridSize} from '../map/mapConfig';
import {
  units,
  playersUnits,
  computersUnits,
  currentlyChosenUnit,
  assignCurrentlyChosenUnit
} from '../store/unitStore';
import {ctx} from '../map/mapConfig';
import Unit from './Unit';

export const onChooseUnit = (units:any[], mouseX:number, mouseY:number) => {
  let foundedUnit = null;
  for(let unit of units) {
    let bottomRightX = unit.x + gridSize;
    let bottomRightY = unit.y + gridSize;
    if(mouseX >= unit.x && mouseX < bottomRightX && mouseY >= unit.y && mouseY < bottomRightY) {
      console.log('unit', unit.name, ' was chosen');
      unit.isCurrentlyChosen = true;
      foundedUnit = unit;
    }
  }
  assignCurrentlyChosenUnit(foundedUnit);
}

export const drawUnit = (unit:any) => {
  console.log('drawUnit x:', unit.x, 'y:', unit.y);
    let color;
    if(unit.controlBy === 'player') color = '#dbdb0d';
    else if(unit.controlBy === 'computer') color = '#d30c0c';
    ctx.beginPath();
    ctx.arc(unit.centerX, unit.centerY, unit.radius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

export const assignUnitMoveToPosition = (unit:any, x:number, y:number) => {
  //console.error('assignMoveToPosition');
  if(unit) {
    unit.moveToNodeX = x;
    unit.moveToNodeY = y;
    console.log(unit.name + ' is moving to node:' + unit.moveToNodeX + ' y:' + unit.moveToNodeY);
  } else {
    console.log('warrior not chosen');
  }
}

// create Unit and immediatly push it into units array
export let createUnit = (name:string, x:number, y:number, radius:number, controlBy:string) => {
  //console.error('createUnit');
  let unit = new Unit(name, x, y, radius, controlBy);
  units.push(unit);
  if(controlBy === 'player') playersUnits.push(unit);
  else if(controlBy === 'computer') computersUnits.push(unit);
  drawUnit(unit);
  return unit;
}

export const redrawUnits = (units:any[]) => {
  for(let unit of units) {
    if(unit.isMoving !== true) {
      drawUnit(unit);
    }
  }
}
