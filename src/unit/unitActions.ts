import {gridSize} from '../map/mapSettings';
import {
  units,
  playersUnits,
  computersUnits,
  currentlyChosenUnit,
  assignCurrentlyChosenUnit,
  unitId,
  incUnitId
} from '../store/unitStore';
import {ctx} from '../map/mapConfig';
import Unit from './Unit';
// unit types
import {
  Archers,
  HeavyInfantry,
  HeavyCavalry,
  Hoplites,
  LightInfantry,
  LightCavalry,
  Militia,
  Peltasts,
  Pikemen,
  Scouts
}  from './types';


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
  let color;
  if(unit.controlBy === 'player') {
    color = '#dbdb0d';
  }
  else if(unit.controlBy === 'computer') {
    color = '#d30c0c';
    if(!unit.isVisible) {
      return; // unit not visible;
    }
  }
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
export let createUnit = (type:string, x:number, y:number, radius:number, controlBy:string) => {
  let unit:any;
  unit = chooseUnitType(type, x, y, radius, controlBy);
  units.push(unit);
  if(controlBy === 'player') playersUnits.push(unit);
  else if(controlBy === 'computer') computersUnits.push(unit);
  drawUnit(unit);
  incUnitId();
  return unit;
}

export const redrawUnits = (units:any[]) => {
  for(let unit of units) {
    if(unit.isMoving !== true) {
      drawUnit(unit);
    }
  }
}

export const chooseUnitType = (type:string, x:number, y:number, radius:number, controlBy:string) => {
  let unit:any;
  if(type === 'archers' || type === 'Archers') {
    return new Archers(unitId, x, y, radius, controlBy);
  }
  else if(type === 'heavyCavalry' || type === 'HeavyCavalry') {
    return new HeavyCavalry(unitId, x, y, radius, controlBy);
  }
  else if(type === 'heavyInfantry' || type === 'HeavyInfantry') {
    return new HeavyInfantry(unitId, x, y, radius, controlBy);
  }
  else if(type === 'hoplites' || type === 'Hoplites') {
    return new Hoplites(unitId, x, y, radius, controlBy);
  }
  else if(type === 'lightCavalry' || type === 'LightCavalry') {
    return new LightCavalry(unitId, x, y, radius, controlBy);
  }
  else if(type === 'lightInfantry' || type === 'LightInfantry') {
    return new LightInfantry(unitId, x, y, radius, controlBy);
  }
  else if(type === 'militia' || type === 'Militia') {
    return new Militia(unitId, x, y, radius, controlBy);
  }
  else if(type === 'peltasts' || type === 'Peltasts') {
    return new Peltasts(unitId, x, y, radius, controlBy);
  }
  else if(type === 'pikemen' || type === 'Pikemen') {
    return new Pikemen(unitId, x, y, radius, controlBy);
  }
  else if(type === 'scouts' || type === 'Scouts') {
    return new Scouts(unitId, x, y, radius, controlBy);
  }
}
