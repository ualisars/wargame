import {gridSize} from '../map/mapConfig';
import {
  units,
  currentlyChosenUnit,
  assignCurrentlyChosenUnit
} from '../store/unitStore';
import {ctx} from '../map/mapConfig';
import Unit from './Unit';

export const onChooseUnit = (warriors:any[], mouseX:number, mouseY:number) => {
  let foundedUnit = null;
  for(let unit of units) {
    let bottomRightX = unit.x + gridSize;
    let bottomRightY = unit.y + gridSize;
    if(mouseX >= unit.x && mouseX < bottomRightX && mouseY >= unit.y && mouseY < bottomRightY) {
      console.log('warrior', unit.name, ' was chosen');
      unit.isCurrentlyChosen = true;
      foundedUnit = unit;
    }
  }
  assignCurrentlyChosenUnit(foundedUnit);
}

export const drawUnit = (unit:any) => {
  console.log('drawUnit x:', unit.x, 'y:', unit.y);
    ctx.beginPath();
    ctx.arc(unit.centerX, unit.centerY, unit.radius, 0, Math.PI*2);
    ctx.fillStyle = unit.color;
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
export let createUnit = (name:string, x:number, y:number, radius:number, color:string) => {
  //console.error('createUnit');
  let unit = new Unit(name, x, y, radius, color);
  units.push(unit);
  drawUnit(unit);
  return unit;
}
