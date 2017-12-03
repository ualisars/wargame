import {gridSize} from '../../config';
import {
  units,
  currentlyChosenUnit,
  assignCurrentlyChosenUnit,
  unitId
} from '../../store/unitStore';
import {loadImage} from '../../utils';
import {ctx} from '../../map';
import {Unit} from '../types';
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
}  from '../types';


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
